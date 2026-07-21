// =====================================================
// SCRIPT.JS - SISTEMA DE CALIFICACIÓN 0-100 FINAL
// =====================================================
// ✅ Califica de 0-100 basado en respuestas correctas
// ✅ Mínimo 60 para pasar
// ✅ Cada respuesta = 1 punto
// ✅ Total ~34 respuestas por caso

// 1. DETECCIÓN DE PÁGINA Y NAVEGACIÓN
const esPaginaEntrevista = document.getElementById('entrevista-container') !== null;

document.addEventListener("DOMContentLoaded", () => {
    if (esPaginaEntrevista) {
        document.getElementById('entrevista-container').style.display = 'flex';
        
        const inputPregunta = document.getElementById('inputPregunta');
        if(inputPregunta) {
            inputPregunta.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') procesarPregunta();
            });
        }
        
        inicializarSistema();
    }
});

// 2. VARIABLES DE CONTROL DEL JUEGO
let db;
let funcionarioActual = "";
let casoActivo = null;
let tiempoRestante = 10 * 60;
let intervaloReloj;
let entrevistaActivo = false;

// ✅ NUEVAS: Variables para calificación
let respuestasCorrectas = 0;  // Contador de respuestas correctas
let respuestasIntentadas = new Set();  // Para evitar contar duplicados
let preguntasRealizadas = [];  // Historial detallado
let pistasDescubiertas = new Set();  // Se mantiene para compatibilidad
let puntajeAcumulado = 0;
let criteriosHistorial = [];

const CONFIG_EVALUACION_BASICA = {
    nivel: "Basico",
    minimoAprobacion: 55,
    puntajeCorrectaUnica: 6,
    puntajeRelacionada: 2,
    puntajeDuplicadaMaximo: 3,
    puntajeParcialMaximo: 6,
    puntajePreguntaMaximo: 12,
    preguntasEsperadas: 8
};

// 3. CONEXIÓN A INDEXEDDB
async function inicializarSistema() {
    const request = indexedDB.open("SistemaEvaluacion", 2);

    request.onupgradeneeded = (e) => {
        db = e.target.result;
        if (!db.objectStoreNames.contains("resultados")) {
            db.createObjectStore("resultados", { keyPath: "id", autoIncrement: true });
        }
    };

    request.onsuccess = (e) => {
        db = e.target.result;
        if (esPaginaEntrevista) {
            const status = document.getElementById('status');
            if(status) status.innerText = "Sistema Listo.";
            setTimeout(obtenerNombreDelLogin, 800); 
        }
    };

    request.onerror = (e) => {
        console.log("IndexedDB no disponible, usando memoria local");
        if (esPaginaEntrevista) {
            const status = document.getElementById('status');
            if(status) status.innerText = "Sistema Listo (Modo sin BD).";
            setTimeout(obtenerNombreDelLogin, 800); 
        }
    };
}

// 4. LÓGICA DE INICIO DE CASO
async function obtenerNombreDelLogin() {
    console.log("🔍 DEBUG: Buscando nombre en localStorage...");
    console.log("📋 localStorage completo:", localStorage);
    
    // Intentar obtener nombre de diferentes fuentes
    let nombreGuardado = localStorage.getItem('nombreUsuario');
    
    // Si no existe en 'nombreUsuario', intentar desde 'usuarioSAE'
    if (!nombreGuardado) {
        const usuarioSAE = localStorage.getItem('usuarioSAE');
        if (usuarioSAE) {
            try {
                const datos = JSON.parse(usuarioSAE);
                nombreGuardado = datos.nombre;
                console.log('📝 Nombre encontrado en usuarioSAE:', nombreGuardado);
            } catch (e) {
                console.error('Error al parsear usuarioSAE');
            }
        }
    }
    
    console.log("📝 nombreUsuario final:", nombreGuardado);
    
    // ✅ El nombre SIEMPRE viene del login, no pedir prompt
    if (nombreGuardado && nombreGuardado.trim() !== '') {
        console.log('✅ Nombre recuperado de localStorage:', nombreGuardado);
        funcionarioActual = nombreGuardado.trim();
        console.log('✅ funcionarioActual asignado:', funcionarioActual);
        
        // ✅ MOSTRAR el nombre en la interfaz
        mostrarNombreEnInterfaz(funcionarioActual);
        
        seleccionarCasoAleatorio();
    } else {
        // ✅ Si no existe nombre, mostrar opciones
        console.error('❌ ERROR: No hay nombre en localStorage');
        console.error('LocalStorage keys:', Object.keys(localStorage));
        
        // Opción 1: Volver al login
        const opcion = await window.SAEAlerts.confirm('No se encontró tu nombre en la sesión.\n\n¿Deseas volver al login para iniciar sesión nuevamente?');
        
        if (opcion) {
            console.log('El usuario eligió volver al login');
            window.location.href = "../../inicio/niveles/niveles.html";
        } else {
            console.log('El usuario canceló. Pidiendo nombre manualmente...');
            // Opción 2: Pedir nombre manualmente (fallback)
            solicitarNombreManual();
        }
    }
}

// ✅ NUEVA FUNCIÓN: Mostrar nombre en la interfaz (no en el chat)
function mostrarNombreEnInterfaz(nombre) {
    const nombreDisplay = document.getElementById('nombreUsuarioDisplay');
    if (nombreDisplay) {
        nombreDisplay.textContent = `👤 Funcionario: ${nombre}`;
        nombreDisplay.style.color = '#2563eb';
        nombreDisplay.style.fontWeight = 'bold';
        console.log('✅ Nombre mostrado en interfaz:', nombre);
    } else {
        console.warn('⚠️ Elemento nombreUsuarioDisplay no encontrado en HTML');
    }
}

// ✅ NUEVO: Fallback para solicitar nombre manualmente
async function solicitarNombreManual() {
    const nombre = await window.SAEAlerts.prompt("Por favor, ingresa tu nombre completo:", { inputPlaceholder: "Nombre completo" });
    
    if (!nombre || nombre.trim() === '') {
        await window.SAEAlerts.alert('Nombre requerido para continuar.');
        window.location.href = "../../inicio/niveles/niveles.html";
        return;
    }
    
    funcionarioActual = nombre.trim();
    console.log('✅ Nombre ingresado manualmente:', funcionarioActual);
    
    // Guardar en localStorage para futuro
    localStorage.setItem('nombreUsuario', funcionarioActual);
    console.log('✅ Nombre guardado en localStorage');
    
    // ✅ MOSTRAR el nombre en la interfaz
    mostrarNombreEnInterfaz(funcionarioActual);
    
    seleccionarCasoAleatorio();
}

async function seleccionarCasoAleatorio() {
    const idGuardado = localStorage.getItem("casoSeleccionado");
    
    console.log('🔍 DEBUG: casoSeleccionado =', idGuardado);
    
    if (!idGuardado || typeof bancoDeHistorias === 'undefined' || !bancoDeHistorias[idGuardado]) {
        console.error('❌ Error: No hay caso seleccionado o bancoDeHistorias no existe');
        await window.SAEAlerts.alert("Error de sincronización. Reinicie el nivel.");
        window.location.href = "../../inicio/niveles/niveles.html";
        return;
    }

    casoActivo = bancoDeHistorias[idGuardado];
    entrevistaActivo = true;
    
    // ✅ RESET de variables
    pistasDescubiertas.clear();
    respuestasCorrectas = 0;
    respuestasIntentadas.clear();
    preguntasRealizadas = [];
    puntajeAcumulado = 0;
    criteriosHistorial = [];
    
    localStorage.setItem('startTime', Date.now().toString());

    if (window.SAEAuditoria) {
        window.SAEAuditoria.crearSesion({
            nivel: CONFIG_EVALUACION_BASICA.nivel,
            caso: {
                id: idGuardado,
                titulo: casoActivo.titulo || casoActivo.personaje,
                personaje: casoActivo.personaje,
                alias: casoActivo.alias,
                delito: casoActivo.delito
            },
            investigador: funcionarioActual
        });
        window.SAEAuditoria.agregarObservacion("Inicio de entrevista en nivel Basico con evaluacion flexible y pedagogica.");
    }
    
    console.log('✅ Caso cargado:', casoActivo.personaje);
    console.log('✅ Funcionario:', funcionarioActual);
    
    iniciarCronometro();

    // Ya no agregamos el nombre al chat porque se muestra en el elemento específico
    agregarChat("Sistema", `Entrevistando a: ${casoActivo.personaje}`);
    hablar(casoActivo.intro);
}

// 5. CRONÓMETRO
function iniciarCronometro() {
    clearInterval(intervaloReloj);
    intervaloReloj = setInterval(() => {
        tiempoRestante--;
        let min = Math.floor(tiempoRestante / 60);
        let seg = tiempoRestante % 60;
        const timerDoc = document.getElementById('timer');
        if(timerDoc) timerDoc.innerText = `Tiempo restante: ${min}:${seg < 10 ? '0' : ''}${seg}`;
        if (tiempoRestante <= 0) finalizarDiligencia(true);
    }, 1000);
}

// =====================================================
// PROCESAMIENTO DE PREGUNTAS - VERSIÓN CON IA LOCAL
// =====================================================
// =====================================================
// EVALUACION PEDAGOGICA - NIVEL BASICO
// =====================================================
function normalizarTextoSAE(texto) {
    return (texto || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function escaparRegExp(texto) {
    return texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escaparHTML(texto) {
    return String(texto || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function limpiarRespuestaSistema(respuesta) {
    const texto = String(respuesta || "").replace(/\s+/g, " ").trim();
    return texto || "Necesito que formule la pregunta con un dato concreto del caso para poder responder con mayor precision.";
}

function obtenerTerminosDelCaso() {
    const terminos = new Set();
    const fuentes = [
        casoActivo?.personaje || "",
        casoActivo?.alias || "",
        casoActivo?.delito || ""
    ];

    (casoActivo?.respuestas || []).slice(0, 80).forEach((item) => {
        (item.claves || []).forEach((clave) => fuentes.push(clave));
    });

    fuentes.forEach((fuente) => {
        normalizarTextoSAE(fuente).split(" ").forEach((palabra) => {
            if (palabra.length > 4) terminos.add(palabra);
        });
    });

    return Array.from(terminos);
}

function buscarMejorCoincidencia(textoNormalizado) {
    const genericas = ["si", "no", "ok", "aja", "bueno", "claro", "porque"];
    let mejor = { item: null, index: -1, clave: "", peso: 0 };

    (casoActivo?.respuestas || []).forEach((item, index) => {
        (item.claves || []).forEach((clave) => {
            const claveNorm = normalizarTextoSAE(clave);
            if (!claveNorm || genericas.includes(claveNorm)) return;

            const esFrase = claveNorm.includes(" ");
            const coincide = esFrase
                ? textoNormalizado.includes(claveNorm)
                : new RegExp("\\b" + escaparRegExp(claveNorm) + "\\b", "i").test(textoNormalizado);

            if (coincide) {
                const peso = claveNorm.length + (esFrase ? 5 : 0);
                if (peso > mejor.peso) {
                    mejor = { item, index, clave: claveNorm, peso };
                }
            }
        });
    });

    return mejor.item ? mejor : null;
}

function evaluarPreguntaPedagogica(textoOriginal, coincidencia, esRepetida) {
    const texto = normalizarTextoSAE(textoOriginal);
    const tokens = texto.split(" ").filter(Boolean);
    const interrogativos = ["que", "quien", "quienes", "cuando", "donde", "como", "porque", "por que", "cual", "cuanto", "explique", "indique", "relate", "confirme"];
    const terminosCaso = obtenerTerminosDelCaso();
    const preguntaApertura = ["hola", "buenos", "nombre", "identificacion", "cedula", "edad", "trabajo", "dedica", "empresa", "familia", "como esta"].some((p) => texto.includes(p));
    const preguntaConfrontativa = ["confiese", "acepte", "carcel", "culpable", "sabemos todo", "pruebas", "evidencia"].some((p) => texto.includes(p));
    const profundidad = ["fecha", "hora", "lugar", "direccion", "documento", "cuenta", "dinero", "telefono", "quien", "quienes", "cuando", "donde", "como", "placa", "empresa", "proveedor", "ruta", "viaje", "contrato", "evidencia", "prueba", "contacto"].some((p) => texto.includes(p));
    const faltasRespeto = ["idiota", "estupido", "imbecil", "mierda", "cabron", "pendejo", "maldito", "hp", "hijueputa", "malparido"].some((p) => texto.includes(p));
    const relacionPorCaso = Boolean(coincidencia) || terminosCaso.some((termino) => texto.includes(termino)) || preguntaApertura;

    const criterios = {
        intencion: interrogativos.some((p) => texto.includes(p)) || textoOriginal.includes("?"),
        claridad: tokens.length >= 4 || textoOriginal.includes("?"),
        relacionCaso: relacionPorCaso,
        secuenciaLogica: preguntasRealizadas.length >= 3 || preguntaApertura || !preguntaConfrontativa,
        profundizacion: profundidad || Boolean(coincidencia),
        respetoObjetividad: !faltasRespeto
    };

    let puntaje = 0;
    if (criterios.respetoObjetividad) {
        if (coincidencia && !esRepetida) {
            puntaje += CONFIG_EVALUACION_BASICA.puntajeCorrectaUnica;
        } else if (coincidencia && esRepetida) {
            puntaje += 1;
        } else if (criterios.relacionCaso) {
            puntaje += CONFIG_EVALUACION_BASICA.puntajeRelacionada;
        }

        Object.values(criterios).forEach((cumple) => {
            if (cumple) puntaje += 1;
        });

        if (!coincidencia && criterios.relacionCaso) {
            puntaje = Math.min(puntaje, CONFIG_EVALUACION_BASICA.puntajeParcialMaximo);
        }
        if (!coincidencia && !criterios.relacionCaso) {
            puntaje = Math.min(puntaje, 2);
        }
        if (esRepetida) {
            puntaje = Math.min(puntaje, CONFIG_EVALUACION_BASICA.puntajeDuplicadaMaximo);
        }
    }

    puntaje = Math.max(0, Math.min(CONFIG_EVALUACION_BASICA.puntajePreguntaMaximo, puntaje));

    const evaluacion = {
        nivel: CONFIG_EVALUACION_BASICA.nivel,
        puntaje,
        correcta: puntaje >= 6,
        parcial: puntaje > 0 && puntaje < 6,
        criterios,
        esRepetida,
        recomendacion: ""
    };

    evaluacion.recomendacion = obtenerRecomendacionPedagogica(evaluacion, coincidencia);
    return evaluacion;
}

function obtenerRecomendacionPedagogica(evaluacion, coincidencia) {
    if (!evaluacion.criterios.respetoObjetividad) {
        return "Mantenga un trato respetuoso y objetivo. Una entrevista profesional obtiene mas informacion que una confrontacion ofensiva.";
    }
    if (evaluacion.esRepetida) {
        return "La pregunta ya habia sido abordada. Avance con una repregunta mas precisa: fecha, lugar, persona, documento o contradiccion.";
    }
    if (!evaluacion.criterios.relacionCaso) {
        return "Conecte la pregunta con el caso: identidad, actividades, contactos, dinero, lugares, documentos o hechos investigados.";
    }
    if (!evaluacion.criterios.secuenciaLogica) {
        return "Antes de confrontar, construya contexto. En Basico conviene iniciar con identificacion, rol y rutina antes de presionar.";
    }
    if (!evaluacion.criterios.profundizacion) {
        return "La pregunta va bien. Para mejorarla, agregue un dato concreto y pida precision sobre tiempo, lugar, persona o soporte.";
    }
    if (coincidencia) {
        return "Buen enfoque. La pregunta se relaciona con el caso y permite obtener informacion util para la entrevista.";
    }
    return "Pregunta parcialmente valida. Reformulela con mas detalle para que el sistema pueda asociarla a una linea investigativa concreta.";
}

function mostrarRetroalimentacionPedagogica(evaluacion) {
    const chat = document.getElementById('chat');
    if (!chat || !evaluacion) return;

    const feedback = document.createElement('div');
    feedback.className = 'msg sistema';
    feedback.style.fontSize = "12px";
    feedback.style.fontStyle = "italic";
    feedback.style.color = evaluacion.correcta ? "#16a34a" : evaluacion.parcial ? "#f59e0b" : "#64748b";
    feedback.innerHTML = `<strong>Orientacion SAE:</strong> ${escaparHTML(evaluacion.recomendacion)} <span style="opacity:.75;">(+${evaluacion.puntaje} pts)</span>`;
    chat.appendChild(feedback);
    mantenerConversacionAlFinal(chat);
}

function mantenerConversacionAlFinal(chat) {
    if (!chat) return;
    chat.dataset.hasConversation = "true";
    const bajar = () => {
        chat.scrollTop = chat.scrollHeight;
    };
    bajar();
    if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(bajar);
    }
}

function calcularCalificacionFinalBasica() {
    if (preguntasRealizadas.length === 0) return 0;
    const bonusRitmo = preguntasRealizadas.length >= CONFIG_EVALUACION_BASICA.preguntasEsperadas ? 5 : preguntasRealizadas.length >= 5 ? 3 : 0;
    return Math.max(0, Math.min(100, Math.round(puntajeAcumulado + bonusRitmo)));
}

function generarObservacionesBasicas(calificacionFinal, respuestasHalladas, totalPreguntasRealizadas) {
    const observaciones = [
        "Evaluacion basada en intencion, claridad, relacion con el caso, secuencia, profundidad, respeto y objetividad."
    ];

    if (calificacionFinal >= CONFIG_EVALUACION_BASICA.minimoAprobacion) {
        observaciones.push("Desempeno aprobado en nivel Basico: el usuario formulo preguntas utiles aunque algunas no fueran perfectas.");
    } else {
        observaciones.push("Desempeno en proceso: se recomienda formular preguntas mas concretas y conectadas con los hechos del caso.");
    }

    if (respuestasHalladas < 3) {
        observaciones.push("Faltaron mas lineas investigativas directas sobre datos, contactos, ubicaciones o evidencias.");
    }

    if (totalPreguntasRealizadas < 5) {
        observaciones.push("La entrevista fue corta; conviene sostener el flujo con mas preguntas abiertas y repreguntas.");
    }

    return observaciones;
}

async function procesarPreguntaBasicaPedagogica() {
    if (!entrevistaActivo) return;
    const input = document.getElementById('inputPregunta');
    const textoOriginal = input.value.trim();
    if (!textoOriginal) return;

    const texto = normalizarTextoSAE(textoOriginal);
    agregarChat("Usted", textoOriginal, "user");
    input.value = "";

    let respuestaFinal = null;
    const coincidencia = buscarMejorCoincidencia(texto);
    const esRepetida = coincidencia ? respuestasIntentadas.has(coincidencia.index) : false;
    const evaluacion = evaluarPreguntaPedagogica(textoOriginal, coincidencia, esRepetida);

    if (coincidencia) {
        respuestaFinal = limpiarRespuestaSistema(coincidencia.item.respuesta);

        if (!esRepetida) {
            respuestasIntentadas.add(coincidencia.index);
            if (evaluacion.correcta) respuestasCorrectas++;
        }

        if (!pistasDescubiertas.has(coincidencia.item.id)) {
            pistasDescubiertas.add(coincidencia.item.id);
            guardarLogro(coincidencia.clave);
        }
    } else {
        agregarChat(casoActivo.personaje, "...", "npc pensando");
        respuestaFinal = limpiarRespuestaSistema(await generarRespuestaOllama(textoOriginal));
    }

    puntajeAcumulado += evaluacion.puntaje;
    criteriosHistorial.push(evaluacion);

    const registroPregunta = {
        indice: coincidencia?.index ?? null,
        pregunta: textoOriginal,
        respuesta: respuestaFinal,
        correcta: evaluacion.correcta,
        parcial: evaluacion.parcial,
        clave: coincidencia?.clave || "",
        evaluacion
    };

    preguntasRealizadas.push(registroPregunta);
    mostrarRetroalimentacionPedagogica(evaluacion);

    if (window.SAEAuditoria) {
        window.SAEAuditoria.registrarInteraccion({
            nivel: CONFIG_EVALUACION_BASICA.nivel,
            caso: {
                id: casoActivo.id,
                titulo: casoActivo.titulo || casoActivo.personaje,
                personaje: casoActivo.personaje,
                alias: casoActivo.alias,
                delito: casoActivo.delito
            },
            pregunta: textoOriginal,
            respuesta: respuestaFinal,
            correcta: evaluacion.correcta,
            puntaje: evaluacion.puntaje,
            recomendacion: evaluacion.recomendacion,
            criterio: evaluacion,
            clave: coincidencia?.clave || ""
        });
    }

    setTimeout(() => hablar(respuestaFinal), 400);
}

async function procesarPregunta() {
    return procesarPreguntaBasicaPedagogica();
    if (!entrevistaActivo) return;
    const input = document.getElementById('inputPregunta');
    const textoOriginal = input.value.trim();
    const texto = textoOriginal.toLowerCase();
    if (!texto) return;

    agregarChat("Usted", textoOriginal, "user");
    input.value = "";

    let respuestaFinal = null;
    let preguntaEncontrada = false;

    // 1. PRIMERO: buscar en respuestas fijas (lógica original intacta)
    casoActivo.respuestas.forEach((item, index) => {
        if (item.claves.some(c => texto.includes(c.toLowerCase()))) {
            respuestaFinal = item.respuesta;
            preguntaEncontrada = true;

            if (!respuestasIntentadas.has(index)) {
                respuestasIntentadas.add(index);
                respuestasCorrectas++;
            }
            if (!pistasDescubiertas.has(item.id)) {
                pistasDescubiertas.add(item.id);
                guardarLogro(item.claves[0]);
            }
            preguntasRealizadas.push({
                indice: index, pregunta: textoOriginal,
                respuesta: respuestaFinal, correcta: true, clave: item.claves[0]
            });
        }
    });

    // 2. SI NO HAY KEYWORD: generar con IA local
    if (!preguntaEncontrada) {
        agregarChat(casoActivo.personaje, "...", "npc pensando");
        respuestaFinal = await generarRespuestaOllama(textoOriginal);
        preguntasRealizadas.push({
            pregunta: textoOriginal, respuesta: respuestaFinal, correcta: false
        });
    }

    setTimeout(() => hablar(respuestaFinal), 400);
}

// =====================================================
// GENERADOR DE RESPUESTAS CON OLLAMA LOCAL
// =====================================================
async function generarRespuestaOllama(pregunta) {
    // Construir contexto del personaje con sus respuestas conocidas
    const hechos = casoActivo.respuestas
        .slice(0, 20) // primeras 20 para no saturar el prompt
        .map(r => `- ${r.respuesta}`)
        .join('\n');

    const prompt = `Eres ${casoActivo.personaje}, alias "${casoActivo.alias || 'sin alias'}". 
Tienes ${casoActivo.edad} años. Estás siendo interrogado por: ${casoActivo.delito}.
Tu posición: niegas todo y mantienes una coartada de inocencia.

Información relevante sobre ti (úsala si aplica):
${hechos}

Un funcionario te pregunta: "${pregunta}"

Instrucciones:
- Responde como ${casoActivo.personaje}, en primera persona
- Mantén tu postura de inocencia y evasión
- Sé natural, no repitas frases de otros temas
- Respuesta corta: máximo 2 oraciones en español
- No menciones que eres una IA`;

    try {
        const res = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'llama3.2',   // cambia por 'phi3' o 'mistral' según tu RAM
                prompt: prompt,
                stream: false,
                options: {
                    temperature: 0.7,   // variedad en respuestas
                    top_p: 0.9,
                    num_predict: 100    // limitar largo de respuesta
                }
            })
        });

        if (!res.ok) throw new Error('Ollama no responde');
        const data = await res.json();
        return data.response?.trim() || casoActivo.desconocido;

    } catch (error) {
        console.warn('⚠️ Ollama no disponible, usando respuesta por defecto:', error);
        return casoActivo.desconocido || "No tengo una respuesta precisa sobre eso. Si quiere avanzar, pregunte por un hecho concreto: fecha, lugar, contacto, documento o actividad relacionada con el caso.";
    }
}

// 7. FUNCIONES DE ESCUCHA
function iniciarEscucha() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        window.SAEAlerts.alert("Tu navegador no soporta reconocimiento de voz. Usa Chrome o Edge.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    const btnMicro = document.getElementById('btn-micro');

    recognition.onstart = () => {
        if(btnMicro) btnMicro.classList.add('grabando');
    };

    recognition.onresult = (event) => {
        const textoEscuchado = event.results[0][0].transcript;
        const input = document.getElementById('inputPregunta');
        if(input) {
            input.value = textoEscuchado;
            procesarPregunta();
        }
    };

    recognition.onerror = (event) => {
        console.error("Error de micrófono:", event.error);
        if(btnMicro) btnMicro.classList.remove('grabando');
    };
    
    recognition.onend = () => {
        if(btnMicro) btnMicro.classList.remove('grabando');
    };

    recognition.start();
}

// 8. FUNCIONES DE APOYO
function hablar(texto) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'es-ES';
    
    const avatar = document.getElementById('avatar');
    utterance.onstart = () => avatar?.classList.add('hablando');
    utterance.onend = () => avatar?.classList.remove('hablando');
    
    synth.speak(utterance);
    agregarChat(casoActivo.personaje, texto, "npc");
}

function agregarChat(autor, msg, clase = "sistema") {
    const chat = document.getElementById('chat');
    if(chat) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `msg ${clase}`;
        msgDiv.innerHTML = `<strong>${escaparHTML(autor)}:</strong> ${escaparHTML(msg)}`;
        chat.appendChild(msgDiv);
        mantenerConversacionAlFinal(chat);
    }
}

function guardarLogro(pista) {
    if (!db) {
        console.log("Logro guardado en memoria:", pista);
        return;
    }
    const tx = db.transaction(["resultados"], "readwrite");
    tx.objectStore("resultados").add({ 
        funcionario: funcionarioActual, 
        pista: pista, 
        hora: new Date().toLocaleTimeString() 
    });
}

// ==========================================
// 9. FUNCIÓN GENERADOR DE REPORTE - ✅ COMPLETA
// ==========================================
function generarReporte() {
    console.log('📊 Generando reporte con calificación 0-100...');
    
    if (!casoActivo) {
        window.SAEAlerts.alert('Error: No hay caso activo');
        return;
    }

    // ========================================
    // 1. CALCULAR CALIFICACIÓN 0-100
    // ========================================
    
    // Total de respuestas posibles en el caso
    const totalRespuestasDelCaso = CONFIG_EVALUACION_BASICA.preguntasEsperadas;
    
    // Respuestas correctas (ya contadas durante la entrevista)
    const respuestasHalladas = respuestasCorrectas;
    
    // CALIFICACIÓN FINAL: (respuestas correctas / total) * 100
    // ✅ Manejo especial si no hay respuestas correctas
    let calificacionFinal = calcularCalificacionFinalBasica();
    
    if (false && respuestasHalladas === 0) {
        calificacionFinal = 0;  // ✅ Si no acierta nada = 0
        console.log('⚠️ Sin respuestas correctas: Calificación = 0');
    } else if (false) {
        calificacionFinal = Math.round((respuestasHalladas / totalRespuestasDelCaso) * 100);
    }
    
    // Asegurar que está dentro del rango [0-100]
    calificacionFinal = Math.max(0, Math.min(100, calificacionFinal));
    
    console.log(`✅ Calificación: ${calificacionFinal}/100 (${respuestasHalladas}/${totalRespuestasDelCaso})`);
    
    // ========================================
    // 2. DETERMINAR ESTADO DE MISIÓN
    // ========================================
    
    const estado = calificacionFinal >= CONFIG_EVALUACION_BASICA.minimoAprobacion ? 'EXITOSA' : 'NO APROBADA';
    
    // ========================================
    // 3. DETERMINAR RANGO DE DESEMPEÑO
    // ========================================
    
    let rangoDesempenio = 'D (INAPTO)';
    let descripcionRango = 'DESEMPEÑO INSUFICIENTE';
    
    if (calificacionFinal >= 95) {
        rangoDesempenio = 'S (ESTRATEGA)';
        descripcionRango = 'DOMINIO ABSOLUTO DE LA ENTREVISTA';
    } else if (calificacionFinal >= 85) {
        rangoDesempenio = 'A (ESPECIALISTA)';
        descripcionRango = 'ESPECIALISTA EN ENTREVISTA';
    } else if (calificacionFinal >= 75) {
        rangoDesempenio = 'B (COMPETENTE)';
        descripcionRango = 'AGENTE COMPETENTE';
    } else if (calificacionFinal >= CONFIG_EVALUACION_BASICA.minimoAprobacion) {
        rangoDesempenio = 'C (BÁSICO)';
        descripcionRango = 'DESEMPEÑO BÁSICO';
    }
    
    // ========================================
    // 4. CALCULAR MÉTRICAS ADICIONALES
    // ========================================
    
    // Contradicciones detectadas (simuladas)
    const contradiccionesDetectadas = Math.min(5, Math.floor(respuestasHalladas / 7));
    
    // Total de preguntas realizadas
    const totalPreguntasRealizadas = preguntasRealizadas.length;
    
    // Tiempo transcurrido
    const tiempoActual = Date.now();
    const tiempoTranscurrido = tiempoActual - (localStorage.getItem('startTime') ? parseInt(localStorage.getItem('startTime')) : tiempoActual);
    
    // ========================================
    // 5. GUARDAR DATOS EN LOCALSTORAGE
    // ========================================
    
    localStorage.setItem('calificacionFinal', calificacionFinal);
    localStorage.setItem('credibilidadFinal', calificacionFinal);  // Para compatibilidad
    localStorage.setItem('respuestasCorrectas', respuestasHalladas);
    localStorage.setItem('totalRespuestasDelCaso', totalRespuestasDelCaso);
    localStorage.setItem('evidenciasFinal', contradiccionesDetectadas);
    localStorage.setItem('totalPreguntas', totalPreguntasRealizadas);
    localStorage.setItem('nombreSospechoso', casoActivo.personaje);
    localStorage.setItem('delitoSospechoso', casoActivo.delito);
    localStorage.setItem('estadoMision', estado);
    localStorage.setItem('rangoFinal', rangoDesempenio);
    localStorage.setItem('descripcionRango', descripcionRango);
    localStorage.setItem('tacticaSeleccionada', 'Estándar');
    localStorage.setItem('preguntasRealizadas', JSON.stringify(preguntasRealizadas));
    localStorage.setItem('criteriosCalificacion', JSON.stringify(criteriosHistorial));
    localStorage.setItem('puntajeAcumulado', puntajeAcumulado.toString());

    const observacionesAuditoria = generarObservacionesBasicas(calificacionFinal, respuestasHalladas, totalPreguntasRealizadas);

    if (window.SAEAuditoria) {
        window.SAEAuditoria.cerrarSesion({
            nivel: CONFIG_EVALUACION_BASICA.nivel,
            caso: {
                id: casoActivo.id,
                titulo: casoActivo.titulo || casoActivo.personaje,
                personaje: casoActivo.personaje,
                alias: casoActivo.alias,
                delito: casoActivo.delito
            },
            investigador: funcionarioActual,
            calificacion: calificacionFinal,
            estadoFinal: estado,
            observaciones: observacionesAuditoria,
            metricas: {
                respuestasCorrectas: respuestasHalladas,
                preguntasRealizadas: totalPreguntasRealizadas,
                puntajeAcumulado,
                criterios: criteriosHistorial.length,
                nivelMinimoAprobacion: CONFIG_EVALUACION_BASICA.minimoAprobacion
            }
        });
    }
    
    console.log('✅ Datos guardados en localStorage');
    console.log({
        calificacion: calificacionFinal,
        respuestasCorrectas: respuestasHalladas,
        totalRespuestas: totalRespuestasDelCaso,
        estado: estado,
        rango: rangoDesempenio
    });
    
    // ========================================
    // 6. NAVEGAR A POST_BASICO.HTML
    // ========================================
    
    console.log('🔗 Navegando a post_basico.html...');
    window.location.href = '../postbasico/post_basico.html';
}

// 10. CIERRE
async function finalizarDiligencia(porTiempo = false) {
    clearInterval(intervaloReloj);
    entrevistaActivo = false;
    const input = document.getElementById('inputPregunta');
    if(input) input.disabled = true;

    const totalRespuestas = CONFIG_EVALUACION_BASICA.preguntasEsperadas;
    const calificacion = calcularCalificacionFinalBasica();
    const estadoFinal = calificacion >= CONFIG_EVALUACION_BASICA.minimoAprobacion ? 'EXITOSA' : 'NO APROBADA';

    const mensaje = porTiempo ? 
        `TIEMPO AGOTADO\n\nCalificación: ${calificacion}/100\nRespuestas: ${respuestasCorrectas}/${totalRespuestas}` :
        `RESULTADO\n\nCalificación: ${calificacion}/100\nRespuestas: ${respuestasCorrectas}/${totalRespuestas}`;
    
    if (window.SAEAuditoria && casoActivo) {
        window.SAEAuditoria.cerrarSesion({
            nivel: CONFIG_EVALUACION_BASICA.nivel,
            caso: {
                id: casoActivo.id,
                titulo: casoActivo.titulo || casoActivo.personaje,
                personaje: casoActivo.personaje,
                alias: casoActivo.alias,
                delito: casoActivo.delito
            },
            investigador: funcionarioActual,
            calificacion,
            estadoFinal,
            observaciones: generarObservacionesBasicas(calificacion, respuestasCorrectas, preguntasRealizadas.length),
            metricas: {
                cierrePorTiempo: Boolean(porTiempo),
                respuestasCorrectas,
                preguntasRealizadas: preguntasRealizadas.length,
                puntajeAcumulado
            }
        });
    }
    await window.SAEAlerts.alert(mensaje);
    window.location.href = "../../inicio/niveles/niveles.html";
}
