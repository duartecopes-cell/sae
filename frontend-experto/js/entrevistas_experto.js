// =====================================================
// ENTREVISTAS_EXPERTO.JS — VERSIÓN 8 MOTOR DINÁMICO
// =====================================================
// ARQUITECTURA:
//   • El motor lee temas_calificables DEL CASO ACTIVO
//   • Nunca usa tablas globales por delito
//   • Clasifica cada pregunta como:
//       ALTA_VALOR   → impacto + log + contradicción
//       EXPLORATORIA → respuesta coherente, sin puntaje
//       GENÉRICA     → evasión, impacto 0
//   • El sospechoso evoluciona por tema (3 etapas)
//   • El recolector puede hacer N preguntas, pero
//     solo las ALTA_VALOR son calificadas
// =====================================================

// ── ESTADO GLOBAL ──────────────────────────────────
let credibilidad          = 100;
let contradiccionesDetectadas = 0;
let preguntasFormuladas   = 0;
let preguntasCalificables = 0;   // ← solo ALTA_VALOR
let casoActivo            = null;
let tiempoInicio          = null;
let bloqueadoEsperando    = false;

// Historial de temas ya abordados en esta sesión
// { tema_id: veces_preguntado }
let temasAbordados = {};

// Web Speech API
let reconocimiento       = null;
let escuchandoMicrofono  = false;
let soportaMicrofono     = false;

// Text-to-Speech
let sintetizador = null;

// ── INICIALIZACIÓN ─────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    console.log("🎬 INICIANDO ENTREVISTA EXPERTO v8...");

    tiempoInicio = Date.now();
    localStorage.setItem("startTime", tiempoInicio.toString());

    if (typeof BANCO_DE_CASOS === "undefined") {
        mostrarError("❌ BANCO_DE_CASOS no cargado. Verifica banco_de_casos.js");
        return;
    }

    const idCaso = localStorage.getItem("casoSeleccionado");
    if (!idCaso) {
        mostrarError("Error: No hay caso seleccionado");
        return;
    }

    casoActivo = BANCO_DE_CASOS[idCaso];
    if (!casoActivo) {
        mostrarError(`Error: Caso "${idCaso}" no existe en banco`);
        return;
    }

    // Validar que el caso tenga la nueva estructura
    if (!casoActivo.temas_calificables) {
        mostrarError(`⚠️ El caso "${idCaso}" no tiene temas_calificables. Actualiza banco_de_casos.js`);
        return;
    }

    console.log("✅ Caso cargado:", casoActivo.nombre, "| Temas:", Object.keys(casoActivo.temas_calificables).length);

    localStorage.setItem("nombreSospechoso", casoActivo.nombre);
    localStorage.setItem("delitoSospechoso", casoActivo.delito);

    // Reiniciar historial de temas
    temasAbordados = {};

    cargarDatosSospechoso();
    inicializarMicrofono();
    inicializarVoz();
    mostrarSaludoInicial();

    // Listener Enter
    const input = document.getElementById("inputPregunta");
    if (input) {
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                procesarPreguntaLibre();
            }
        });
    }

    console.log("✅ Sistema LISTO");
});

// ── CARGAR DATOS DE SOSPECHOSO ──────────────────────
function cargarDatosSospechoso() {
    if (!casoActivo) return;

    const nameEl   = document.querySelector(".s-name");
    const aliasEl  = document.querySelector(".s-alias");
    const photoEl  = document.querySelector(".suspect-photo");

    if (nameEl)  nameEl.textContent  = casoActivo.nombre;
    if (aliasEl) aliasEl.textContent = `ALIAS: "${casoActivo.alias}"`;

    if (photoEl) {
        if (casoActivo.avatar) {
            if (photoEl.tagName === "IMG") {
                photoEl.src = casoActivo.avatar;
            } else {
                photoEl.style.backgroundImage = `url('${casoActivo.avatar}')`;
                photoEl.style.backgroundSize = "cover";
                photoEl.style.backgroundPosition = "center";
            }
            photoEl.textContent = "";
        } else {
            photoEl.style.fontSize          = "48px";
            photoEl.style.display           = "flex";
            photoEl.style.alignItems        = "center";
            photoEl.style.justifyContent    = "center";
            photoEl.textContent             = casoActivo.nombre.substring(0, 1);
            photoEl.style.background        = "#1f3c88";
            photoEl.style.color             = "#7fb3ff";
        }
    }

    const intelVals = document.querySelectorAll(".intel-val");
    if (intelVals.length >= 4) {
        intelVals[0].textContent = casoActivo.nombre;
        intelVals[1].textContent = casoActivo.edad + " años";
        intelVals[2].textContent = `"${casoActivo.alias}"`;
        intelVals[3].textContent = casoActivo.delito;
    }
}

// ── SALUDO INICIAL ─────────────────────────────────
function mostrarSaludoInicial() {
    const chat = document.getElementById("chat");
    if (!chat) return;

    const textoSaludo = casoActivo.saludo || "Estoy aquí, dígame qué quiere saber.";
    const abrev       = casoActivo.nombre.substring(0, 2).toUpperCase();

    const msg = document.createElement("div");
    msg.className = "msg-wrap suspect";
    msg.innerHTML = `
        <div class="msg-avatar">${abrev}</div>
        <div class="msg-body">
            <div class="msg-meta">${casoActivo.nombre}</div>
            <div class="msg-bubble">${textoSaludo}</div>
        </div>
    `;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;

    hacerHablarSAE(textoSaludo);
}

// ═══════════════════════════════════════════════════
// MOTOR PRINCIPAL DE CLASIFICACIÓN DE PREGUNTAS
// ═══════════════════════════════════════════════════

/**
 * Normaliza texto: minúsculas, sin tildes, sin puntuación.
 */
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, "")
        .trim();
}

/**
 * Busca el tema calificable del CASO ACTIVO con mayor coincidencia.
 * Retorna { tipo, tema, coincidencias } donde tipo = "alta_valor" | "exploratoria" | "generica"
 */
function clasificarPregunta(preguntaOriginal) {
    const pregNorm = normalizarTexto(preguntaOriginal);

    // ── 1. Buscar en temas_calificables del caso activo ──────────
    let mejorTema        = null;
    let maxCoincidencias = 0;

    for (const [key, tema] of Object.entries(casoActivo.temas_calificables)) {
        let coincidencias = 0;
        for (const palabra of tema.palabras_clave) {
            if (pregNorm.includes(normalizarTexto(palabra))) {
                coincidencias++;
            }
        }
        if (coincidencias > maxCoincidencias) {
            maxCoincidencias  = coincidencias;
            mejorTema         = tema;
        }
    }

    if (maxCoincidencias >= 1) {
        return { tipo: "alta_valor", tema: mejorTema, coincidencias: maxCoincidencias };
    }

    // ── 2. Buscar en respuestas_exploratorias ────────────────────
    if (casoActivo.respuestas_exploratorias) {
        for (const exploratoria of casoActivo.respuestas_exploratorias) {
            for (const palabra of exploratoria.palabras_clave) {
                if (pregNorm.includes(normalizarTexto(palabra))) {
                    return {
                        tipo: "exploratoria",
                        respuesta: exploratoria.respuesta,
                        coincidencias: 1
                    };
                }
            }
        }
    }

    // ── 3. Genérica ──────────────────────────────────────────────
    return { tipo: "generica", coincidencias: 0 };
}

/**
 * Obtiene la respuesta evolutiva de un tema según cuántas veces ya se abordó.
 * Primera vez → índice 0, segunda → 1, tercera+ → 2.
 */
function obtenerRespuestaEvolutiva(tema) {
    const veces  = temasAbordados[tema.tema_id] || 0;
    const indice = Math.min(veces, tema.respuestas_evolucion.length - 1);
    return tema.respuestas_evolucion[indice];
}

/**
 * Respuesta cuando la pregunta no coincide con ningún tema ni exploratoria.
 */
function respuestaGenerica() {
    const opciones = [
        "No sé de qué habla.",
        "Eso no tiene relevancia.",
        "Ya respondí lo que tenía que responder.",
        "No tengo nada que decir sobre eso.",
        "Siga con la otra pregunta.",
        "¿Adónde quiere llegar con esa pregunta?"
    ];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

// ═══════════════════════════════════════════════════
// PROCESAR PREGUNTA LIBRE — CON IA LOCAL (OLLAMA)
// ═══════════════════════════════════════════════════

// =====================================================
// ENTRENADOR EXPERTO - RESPUESTAS DE COACHING
// =====================================================
function obtenerEntrevistaSimuladaActual() {
    if (!casoActivo) return null;

    const temas = Object.values(casoActivo.temas_calificables || {});
    const preguntasIniciales = [
        "Explique con sus propias palabras por que fue citado a esta entrevista.",
        "Cual es su version sobre los hechos investigados?",
        "Que soporte puede aportar para respaldar su version?"
    ];
    const preguntasSeguimiento = temas.slice(0, 3).map((tema) => `Usted menciono una version general. Precise ahora lo relacionado con ${tema.etiqueta}.`);
    const preguntasCriticas = temas.slice(0, 3).map((tema) => `Que explicacion verificable tiene frente a ${tema.etiqueta}?`);

    return {
        id_entrevista: `sim_${casoActivo.id}`,
        caso_relacionado: casoActivo.id,
        rol_persona_pregunta: "Investigador en entrenamiento",
        rol_persona_responde: `${casoActivo.nombre}, sospechoso del caso`,
        conversacion_simulada: [
            { pregunta: preguntasIniciales[0], respuesta_esperada: "Respuesta abierta que permite ubicar postura, coartada y tono emocional." },
            { pregunta: preguntasIniciales[1], respuesta_esperada: "Version inicial del sospechoso sin confrontacion inmediata." },
            { pregunta: preguntasCriticas[0] || preguntasIniciales[2], respuesta_esperada: "Respuesta conectada con evidencia, contradiccion o vacio verificable." }
        ],
        preguntas_iniciales: preguntasIniciales,
        preguntas_seguimiento: preguntasSeguimiento,
        preguntas_criticas: preguntasCriticas,
        respuestas_esperadas: [
            "Debe ser concreta, respetuosa y conectada con un dato del expediente.",
            "Debe evitar acusaciones sin soporte y pedir precision verificable.",
            "Debe permitir una repregunta natural si el sospechoso evade."
        ],
        respuestas_alternativas_validas: [
            "Reformular la pregunta de forma mas simple.",
            "Pedir una fecha, lugar, documento o persona especifica.",
            "Reconocer que falta informacion y solicitar verificacion."
        ],
        retroalimentacion_agente: [
            "Buena pregunta si se entiende, toca un tema del caso y permite evaluar contradiccion.",
            "Debe mejorar si es demasiado amplia, acusatoria o contiene datos no verificados.",
            "Una respuesta profesional mantiene control del tema y no inventa evidencia."
        ],
        evaluacion_respuesta: [
            "claridad",
            "pertinencia",
            "coherencia",
            "uso de evidencia",
            "capacidad de seguimiento"
        ],
        sugerencias_mejora: [
            "Divida preguntas compuestas en una sola idea.",
            "Pida precision despues de cada evasiva.",
            "No revele toda la evidencia al inicio.",
            "Cierre cada bloque con un dato verificable."
        ]
    };
}

function obtenerRespuestaEntrenador(pregunta) {
    if (!casoActivo) return null;

    const texto = normalizarTexto(pregunta);
    const simulacion = obtenerEntrevistaSimuladaActual();
    const guia = casoActivo.entrenamiento_experto || {};

    if (["simulacion", "entrevista simulada", "guion", "conversacion simulada"].some((clave) => texto.includes(clave))) {
        return [
            `Simulacion para ${casoActivo.delito}:`,
            `1. ${simulacion.preguntas_iniciales[0]}`,
            `2. ${simulacion.preguntas_iniciales[1]}`,
            `3. ${simulacion.preguntas_criticas[0] || simulacion.preguntas_iniciales[2]}`,
            "Objetivo: iniciar con version libre, pasar a precision verificable y cerrar con una contradiccion o vacio del caso."
        ].join("\n");
    }

    if (["evalua", "evaluar", "califica", "retroalimentacion", "feedback"].some((clave) => texto.includes(clave))) {
        return [
            "Evaluacion de entrenamiento:",
            "- Una respuesta fuerte es clara, breve, verificable y conectada con el expediente.",
            "- Si tu respuesta no menciona evidencia o siguiente paso, esta incompleta.",
            "- Mejora sugerida: formula una sola pregunta, pide precision y evita conclusiones que el caso no soporte."
        ].join("\n");
    }

    if (["mejorar", "mejor respuesta", "decirlo mejor", "respuesta profesional"].some((clave) => texto.includes(clave))) {
        return [
            "Version profesional sugerida:",
            `En este caso de ${casoActivo.delito}, conviene responder con un dato del expediente, explicar por que es relevante y pedir una aclaracion verificable.`,
            "Ejemplo: 'Usted afirma una version general; precise fecha, lugar y soporte documental para contrastarla con el expediente'."
        ].join("\n");
    }

    if (["pregunta critica", "preguntas criticas", "pregunta dificil", "seguimiento"].some((clave) => texto.includes(clave))) {
        return [
            "Preguntas criticas recomendadas:",
            ...simulacion.preguntas_criticas.slice(0, 3),
            "Use una por vez y espere respuesta antes de confrontar con otro tema."
        ].join("\n");
    }

    if (["que debo evitar", "errores", "no inventar", "informacion no debo"].some((clave) => texto.includes(clave))) {
        const errores = guia.errores_evitar || [
            "Acusar sin base.",
            "Inventar informacion.",
            "Hacer preguntas confusas."
        ];
        return `Evite estos errores: ${errores.join(" ")} Mantenga cada pregunta dentro del expediente y pida verificacion cuando falte informacion.`;
    }

    if (["criterios", "buena respuesta", "como se evalua", "evaluacion"].some((clave) => texto.includes(clave))) {
        const criterios = guia.criterios_evaluacion || simulacion.evaluacion_respuesta;
        return `Criterios para una buena respuesta: ${criterios.join(", ")}. Una respuesta experta debe poder sostenerse con datos del caso y abrir una pregunta de seguimiento.`;
    }

    return null;
}

function procesarPreguntaLibre() {
    if (bloqueadoEsperando) {
        console.warn("⏳ Esperando respuesta anterior...");
        return;
    }

    const input    = document.getElementById("inputPregunta");
    const pregunta = input.value.trim();

    if (!pregunta) return;

    console.log(`\n❓ PREGUNTA: "${pregunta}"`);

    mostrarMensajeChat("investigador", pregunta);
    input.value = "";
    bloqueadoEsperando = true;

    if (escuchandoMicrofono && reconocimiento) {
        reconocimiento.stop();
    }

    // ← ÚNICO CAMBIO: el callback es async para poder usar await
    setTimeout(async () => {
        const respuestaEntrenador = obtenerRespuestaEntrenador(pregunta);
        const clasificacion = respuestaEntrenador
            ? { tipo: "entrenador", respuesta: respuestaEntrenador, coincidencias: 1 }
            : clasificarPregunta(pregunta);
        console.log(`🎯 Tipo: ${clasificacion.tipo} | Coincidencias: ${clasificacion.coincidencias}`);

        let textoRespuesta  = "";
        let impacto         = 0;
        let esContradiccion = false;
        let razonLog        = "";
        let etiquetaTema    = "";

        // ── ALTA VALOR: calificable ─────────────────────────────
        if (clasificacion.tipo === "entrenador") {
            textoRespuesta  = clasificacion.respuesta;
            impacto         = 0;
            esContradiccion = false;
            razonLog        = "Entrenador experto";
            console.log("ENTRENADOR: respuesta de coaching sin impacto");

        } else if (clasificacion.tipo === "alta_valor") {
            const tema = clasificacion.tema;

            textoRespuesta  = obtenerRespuestaEvolutiva(tema);
            impacto         = tema.impacto;
            esContradiccion = true;
            razonLog        = tema.etiqueta;
            etiquetaTema    = tema.etiqueta;

            temasAbordados[tema.tema_id] = (temasAbordados[tema.tema_id] || 0) + 1;
            contradiccionesDetectadas++;
            preguntasCalificables++;

            console.log(`⚠️ TEMA CALIFICABLE: "${tema.etiqueta}" | Impacto: +${impacto} | Veces: ${temasAbordados[tema.tema_id]}`);

        // ── EXPLORATORIA: informativa, sin puntaje ──────────────
        } else if (clasificacion.tipo === "exploratoria") {
            textoRespuesta  = clasificacion.respuesta;
            impacto         = 0;
            esContradiccion = false;
            razonLog        = "Pregunta exploratoria";
            console.log("ℹ️ EXPLORATORIA: sin impacto");

        // ── GENÉRICA: sin coincidencia → IA genera la respuesta ─
        } else {
            console.log("🤖 GENÉRICA → consultando Ollama...");
            textoRespuesta  = await generarRespuestaOllama(pregunta);
            impacto         = 0;           // ← puntaje intacto: sigue sin sumar ni restar
            esContradiccion = false;
            razonLog        = "Respuesta IA (sin impacto)";
            console.log("⬜ GENÉRICA (IA): sin impacto");
        }

        // ── TODO LO DE ABAJO ES IDÉNTICO AL ORIGINAL ────────────
        preguntasFormuladas++;
        credibilidad = Math.max(0, Math.min(100, credibilidad + impacto));

        mostrarMensajeChat("sospechoso", textoRespuesta);
        hacerHablarSAE(textoRespuesta);

        if (impacto !== 0) {
            mostrarImpacto(impacto, esContradiccion, razonLog);
        }

        actualizarUI();
        bloqueadoEsperando = false;

        if (credibilidad <= 20) {
            finalizarMisionFallidaPorCredibilidad();
        } else if (preguntasFormuladas >= 30) {
            finalizarMision();
        }

    }, 1500);
}

// ═══════════════════════════════════════════════════
// GENERADOR OLLAMA — adaptado al caso experto
// ═══════════════════════════════════════════════════

async function generarRespuestaOllama(pregunta) {
    // Construir contexto desde temas_calificables
    const temasCtx = Object.values(casoActivo.temas_calificables || {})
        .map(t => `- ${t.etiqueta}: ${t.respuestas_evolucion[0]}`)
        .join("\n");

    // Contexto desde exploratorias
    const exploCtx = (casoActivo.respuestas_exploratorias || [])
        .map(e => `- ${e.respuesta}`)
        .join("\n");

    const prompt = `Eres ${casoActivo.nombre}, alias "${casoActivo.alias}". Tienes ${casoActivo.edad} años.
Estás siendo interrogado por: ${casoActivo.delito}.
Tu postura: niegas todo y mantienes una coartada de inocencia.

Información que ya diste en la entrevista:
${temasCtx}
${exploCtx}

El investigador te pregunta: "${pregunta}"

Instrucciones:
- Responde como ${casoActivo.nombre}, en primera persona, en español
- Mantén tu postura evasiva o de inocencia
- No repitas respuestas anteriores literalmente
- Máximo 2 oraciones. Sin aclaraciones ni asteriscos.`;

    try {
        const res = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "llama3.2",      // cambia a "phi3" o "mistral" según tu RAM
                prompt: prompt,
                stream: false,
                options: {
                    temperature: 0.75,
                    top_p: 0.9,
                    num_predict: 100
                }
            })
        });

        if (!res.ok) throw new Error(`Ollama HTTP ${res.status}`);
        const data = await res.json();
        return data.response?.trim() || respuestaGenerica();

    } catch (err) {
        console.warn("⚠️ Ollama no disponible, usando fallback:", err.message);
        return respuestaGenerica();   // ← si Ollama está apagado, funciona igual que antes
    }
}

// ═══════════════════════════════════════════════════
// MOSTRAR MENSAJES EN CHAT
// ═══════════════════════════════════════════════════

function mostrarMensajeChat(tipo, texto) {
    const chat = document.getElementById("chat");
    if (!chat) return;

    const msg  = document.createElement("div");
    msg.className = `msg-wrap ${tipo}`;

    if (tipo === "investigador") {
        msg.innerHTML = `
            <div class="msg-avatar">TÚ</div>
            <div class="msg-body">
                <div class="msg-meta">INVESTIGADOR</div>
                <div class="msg-bubble">${texto}</div>
            </div>
        `;
    } else if (tipo === "sospechoso") {
        const abrev = casoActivo ? casoActivo.nombre.substring(0, 2).toUpperCase() : "??";
        msg.innerHTML = `
            <div class="msg-avatar">${abrev}</div>
            <div class="msg-body">
                <div class="msg-meta">${casoActivo ? casoActivo.nombre : "Sospechoso"}</div>
                <div class="msg-bubble">${texto}</div>
            </div>
        `;
    } else {
        msg.innerHTML = `<div class="system-msg">${texto}</div>`;
    }

    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
}

// ═══════════════════════════════════════════════════
// NOTIFICACIÓN DE IMPACTO (HUD OVERLAY)
// ═══════════════════════════════════════════════════

function mostrarImpacto(impacto, esContradiccion, razon) {
    const notif = document.createElement("div");
    notif.className = "alerta-hud";
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${impacto > 0 ? "rgba(76,175,130,0.15)" : "rgba(255,68,68,0.15)"};
        border: 1px solid ${impacto > 0 ? "#4caf82" : "#ff4444"};
        color: ${impacto > 0 ? "#4caf82" : "#ff4444"};
        padding: 12px 18px;
        border-radius: 6px;
        z-index: 1000;
        font-family: 'Rajdhani', sans-serif;
        font-size: 12px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        pointer-events: none;
    `;

    let texto = `Credibilidad: ${impacto > 0 ? "+" : ""}${impacto}%`;
    if (esContradiccion) texto += " | ⚠ CONTRADICCIÓN";
    if (razon) texto += ` | ${razon}`;

    notif.textContent = texto;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.opacity    = "0";
        notif.style.transition = "opacity 0.5s";
        setTimeout(() => notif.remove(), 500);
    }, 3000);
}

// ═══════════════════════════════════════════════════
// ACTUALIZAR HUD
// ═══════════════════════════════════════════════════

function actualizarUI() {
    const credEl  = document.getElementById("credibilidad-ui");
    const contEl  = document.getElementById("contradicciones-ui");
    const pregEl  = document.getElementById("preguntas-ui");
    // Campo extra opcional para preguntas calificables
    const calcEl  = document.getElementById("calificables-ui");

    if (credEl) {
        credEl.textContent = Math.round(credibilidad) + "%";
        credEl.style.color =
            credibilidad >= 70 ? "#4caf82" :
            credibilidad >= 40 ? "#fbbf24" :
            "#ff4444";
    }
    if (contEl) contEl.textContent = `${contradiccionesDetectadas}/5`;
    if (pregEl) pregEl.textContent = preguntasFormuladas;
    if (calcEl) calcEl.textContent = preguntasCalificables;
}

// ═══════════════════════════════════════════════════
// VOZ — TEXT-TO-SPEECH
// ═══════════════════════════════════════════════════

function inicializarVoz() {
    if (!("speechSynthesis" in window)) {
        console.warn("⚠️ Text-to-Speech no disponible");
        return;
    }
    sintetizador = window.speechSynthesis;
    console.log("✅ Text-to-Speech listo");
}

function hacerHablarSAE(texto) {
    if (!sintetizador) return;

    const textoLimpio = texto
        .replace(/\(/g, "").replace(/\)/g, "")
        .replace(/\./g, ". ").replace(/,/g, ", ");

    if (sintetizador.speaking) sintetizador.cancel();

    const utterance   = new SpeechSynthesisUtterance(textoLimpio);
    utterance.lang    = "es-ES";
    utterance.rate    = 0.95;
    utterance.volume  = 1;
    utterance.pitch   = 0.8;

    sintetizador.speak(utterance);
}

// Alias de compatibilidad con código anterior
function sintetizarVozIA(texto) { hacerHablarSAE(texto); }

// ═══════════════════════════════════════════════════
// MICRÓFONO — WEB SPEECH API
// ═══════════════════════════════════════════════════

function inicializarMicrofono() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        console.warn("⚠️ Web Speech API no disponible");
        soportaMicrofono = false;
        const btn = document.getElementById("btnMicrofono");
        if (btn) btn.disabled = true;
        return null;
    }

    soportaMicrofono             = true;
    reconocimiento               = new SpeechRecognition();
    reconocimiento.lang          = "es-ES"; // ✅ más compatible que es-CO
    reconocimiento.continuous    = false;
    reconocimiento.interimResults = false;
    reconocimiento.maxAlternatives = 1;

    // ✅ Flag interno para saber si onresult ya fue procesado
    let resultadoRecibido = false;

    reconocimiento.onstart = () => {
        escuchandoMicrofono = true;
        resultadoRecibido   = false; // reset por cada sesión
        const btn = document.getElementById("btnMicrofono");
        if (btn) { btn.classList.add("recording"); btn.textContent = "⏹️ DETENER"; }
        console.log("🎤 Micrófono activo");
    };

    reconocimiento.onresult = (event) => {
        let textoFinal = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                textoFinal += event.results[i][0].transcript + " ";
            }
        }

        textoFinal = textoFinal.trim();
        if (!textoFinal) return;

        resultadoRecibido = true;
        console.log("🗣️ Voz reconocida:", textoFinal);

        const input = document.getElementById("inputPregunta");
        if (input) input.value = textoFinal;

        // ✅ Esperar a que onend limpie el estado, luego procesar
        setTimeout(() => {
            // ✅ Si bloqueadoEsperando, reintentar hasta que esté libre
            const intentarProcesar = (intentos = 0) => {
                if (!bloqueadoEsperando) {
                    procesarPreguntaLibre();
                } else if (intentos < 10) {
                    setTimeout(() => intentarProcesar(intentos + 1), 300);
                } else {
                    console.warn("⚠️ Timeout: sospechoso aún respondiendo, descartando entrada por voz");
                    if (input) input.value = "";
                }
            };
            intentarProcesar();
        }, 300);
    };

    reconocimiento.onend = () => {
        escuchandoMicrofono = false;
        const btn = document.getElementById("btnMicrofono");
        if (btn) { btn.classList.remove("recording"); btn.textContent = "🎤 MICRÓFONO"; }

        // ✅ Solo loguear si no hubo resultado (ayuda a detectar silencios)
        if (!resultadoRecibido) {
            console.warn("🔇 Micrófono cerrado sin resultado — puede ser silencio o error de permisos");
        }
    };

    reconocimiento.onerror = (event) => {
        console.error("❌ Error micrófono:", event.error);
        escuchandoMicrofono = false;
        resultadoRecibido   = false;

        const btn = document.getElementById("btnMicrofono");
        if (btn) { btn.classList.remove("recording"); btn.textContent = "🎤 MICRÓFONO"; }

        // ✅ Mensajes de error específicos por tipo
        const errores = {
            "not-allowed":  "Permiso de micrófono denegado. Habilítalo en la configuración del navegador.",
            "no-speech":    "No se detectó voz. Intenta hablar más cerca del micrófono.",
            "network":      "Error de red al procesar voz.",
            "aborted":      "Reconocimiento cancelado."
        };
        const msg = errores[event.error] || `Error desconocido: ${event.error}`;
        console.warn("🎤", msg);
    };

    console.log("✅ Micrófono listo");
}

function alternarMicrofono() {
     // ✅ Diagnóstico de permisos
    navigator.permissions.query({ name: "microphone" }).then(result => {
        console.log("🎤 Permiso micrófono:", result.state); 
        // "granted" | "denied" | "prompt"
    });
        
    if (!soportaMicrofono) {
        alert("❌ Micrófono no disponible\nUsa Chrome, Edge o Firefox reciente");
        return;
    }
    if (!reconocimiento) return;

    if (escuchandoMicrofono) {
        reconocimiento.stop();
        return;
    }

    // ✅ No iniciar si el sistema está procesando
    if (bloqueadoEsperando) {
        console.warn("⏳ Espera a que el sospechoso termine de responder");
        return;
    }

    try {
        const input = document.getElementById("inputPregunta");
        if (input) input.value = ""; // limpiar antes de escuchar
        reconocimiento.start();
    } catch (err) {
        console.error("Error al iniciar micrófono:", err);
        // ✅ Resetear estado si start() falla
        escuchandoMicrofono = false;
        const btn = document.getElementById("btnMicrofono");
        if (btn) { btn.classList.remove("recording"); btn.textContent = "🎤 MICRÓFONO"; }
    }
}

// ═══════════════════════════════════════════════════
// REPORTE INTERMEDIO (botón "Pausar")
// ═══════════════════════════════════════════════════

function generarReporteIntermedio() {
    guardarResultadosMision("EN PROGRESO", credibilidad, contradiccionesDetectadas, preguntasFormuladas, "N/A");
    window.location.href = "postmision/post_mision.html";
}

// ═══════════════════════════════════════════════════
// FINALIZAR MISIÓN
// ═══════════════════════════════════════════════════

function finalizarMisionFallidaPorCredibilidad() {
    console.log("❌ Misión fallida por credibilidad");
    guardarResultadosMision("FALLIDA", credibilidad, contradiccionesDetectadas, preguntasFormuladas, "D (INAPTO)");

    mostrarMensajeChat("system", "⚠ SESIÓN TERMINADA — Credibilidad crítica");

    const input  = document.getElementById("inputPregunta");
    const btnSend = document.querySelector(".btn-send");
    if (input)   input.disabled    = true;
    if (btnSend) btnSend.disabled  = true;

    setTimeout(() => { window.location.href = "postmision/post_mision.html"; }, 3000);
}

function finalizarMision() {
    console.log("✅ Misión completada");

    // El rango se basa en PREGUNTAS CALIFICABLES + credibilidad
    const esExitosa = preguntasCalificables >= 2 && credibilidad >= 40;

    let rango = "D (INAPTO)";
    if (esExitosa) {
        if      (credibilidad >= 90 && preguntasCalificables >= 6) rango = "S (ESTRATEGA)";
        else if (credibilidad >= 75 && preguntasCalificables >= 4) rango = "A (ESPECIALISTA)";
        else if (credibilidad >= 60 && preguntasCalificables >= 3) rango = "B (COMPETENTE)";
        else if (credibilidad >= 40)                               rango = "C (BÁSICO)";
    }

    guardarResultadosMision(
        esExitosa ? "EXITOSA" : "FALLIDA",
        credibilidad,
        contradiccionesDetectadas,
        preguntasFormuladas,
        rango
    );

    mostrarMensajeChat("system", esExitosa ? "✅ MISIÓN COMPLETADA" : "❌ OBJETIVOS NO ALCANZADOS");

    const input   = document.getElementById("inputPregunta");
    const btnSend = document.querySelector(".btn-send");
    if (input)   input.disabled   = true;
    if (btnSend) btnSend.disabled = true;

    setTimeout(() => { window.location.href = "postmision/post_mision.html"; }, 2000);
}

// ═══════════════════════════════════════════════════
// GUARDAR RESULTADOS
// ═══════════════════════════════════════════════════

function guardarResultadosMision(estado, cred, contra, pregs, rango) {
    if (!tiempoInicio) tiempoInicio = parseInt(localStorage.getItem("startTime")) || Date.now();

    const tiempoFinal = Date.now() - tiempoInicio;

    localStorage.setItem("estadoMision",       estado);
    localStorage.setItem("credibilidadFinal",  Math.round(cred).toString());
    localStorage.setItem("evidenciasFinal",    contra.toString());
    localStorage.setItem("totalPreguntas",     pregs.toString());
    localStorage.setItem("preguntasCalificables", preguntasCalificables.toString());
    localStorage.setItem("rangoFinal",         rango);
    localStorage.setItem("tiempoTotalMs",      tiempoFinal.toString());
    localStorage.setItem("nombreSospechoso",   casoActivo.nombre);
    localStorage.setItem("delitoSospechoso",   casoActivo.delito);

    // Guardar temas abordados para análisis post-misión
    localStorage.setItem("temasAbordados", JSON.stringify(temasAbordados));
}

// ═══════════════════════════════════════════════════
// AUXILIARES
// ═══════════════════════════════════════════════════

function mostrarError(mensaje) {
    console.error("🔴", mensaje);
    const chat = document.getElementById("chat");
    if (chat) {
        const msg = document.createElement("div");
        msg.className = "msg-wrap system";
        msg.innerHTML = `<div class="system-msg" style="color:#ff4444;">❌ ${mensaje}</div>`;
        chat.appendChild(msg);
    }
}

function volverAlNivel() {
    if (confirm("¿Abandonar? Se perderá el progreso.")) {
        localStorage.clear();
        window.location.href = "../inicio/niveles/niveles.html";
    }
}

// Alias de compatibilidad
function obtenerCaso(idCaso) {
    return BANCO_DE_CASOS[idCaso] || null;
}

// Alias legacy para sistemas que llamen actualizarHUD
function actualizarHUD() { actualizarUI(); }

console.log("✅ entrevistas_experto.js v8 cargado — Motor por caso activo");
