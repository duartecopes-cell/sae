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
let tiempoRestante = 15 * 60;
let intervaloReloj;
let entrevistaActivo = false;

// ✅ NUEVAS: Variables para calificación
let respuestasCorrectas = 0;  // Contador de respuestas correctas
let respuestasIntentadas = new Set();  // Para evitar contar duplicados
let preguntasRealizadas = [];  // Historial detallado
let pistasDescubiertas = new Set();  // Se mantiene para compatibilidad

// 3. CONEXIÓN A INDEXEDDB
function inicializarSistema() {
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
function obtenerNombreDelLogin() {
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
        const opcion = confirm('No se encontró tu nombre en la sesión.\n\n¿Deseas volver al login para iniciar sesión nuevamente?');
        
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
function solicitarNombreManual() {
    const nombre = prompt("Por favor, ingresa tu nombre completo:");
    
    if (!nombre || nombre.trim() === '') {
        alert('Nombre requerido para continuar.');
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

function seleccionarCasoAleatorio() {
    const idGuardado = localStorage.getItem("casoSeleccionado");
    
    console.log('🔍 DEBUG: casoSeleccionado =', idGuardado);
    
    if (!idGuardado || typeof bancoDeHistorias === 'undefined' || !bancoDeHistorias[idGuardado]) {
        console.error('❌ Error: No hay caso seleccionado o bancoDeHistorias no existe');
        alert("Error de sincronización. Reinicie el nivel.");
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
    
    localStorage.setItem('startTime', Date.now().toString());
    
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
async function procesarPregunta() {
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
        return casoActivo.desconocido;
    }
}

// 7. FUNCIONES DE ESCUCHA
function iniciarEscucha() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Tu navegador no soporta reconocimiento de voz. Usa Chrome o Edge.");
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
        msgDiv.innerHTML = `<strong>${autor}:</strong> ${msg}`;
        chat.appendChild(msgDiv);
        chat.scrollTop = chat.scrollHeight;
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
        alert('Error: No hay caso activo');
        return;
    }

    // ========================================
    // 1. CALCULAR CALIFICACIÓN 0-100
    // ========================================
    
    // Total de respuestas posibles en el caso
    const totalRespuestasDelCaso = casoActivo.respuestas.length;
    
    // Respuestas correctas (ya contadas durante la entrevista)
    const respuestasHalladas = respuestasCorrectas;
    
    // CALIFICACIÓN FINAL: (respuestas correctas / total) * 100
    // ✅ Manejo especial si no hay respuestas correctas
    let calificacionFinal = 0;
    
    if (respuestasHalladas === 0) {
        calificacionFinal = 0;  // ✅ Si no acierta nada = 0
        console.log('⚠️ Sin respuestas correctas: Calificación = 0');
    } else {
        calificacionFinal = Math.round((respuestasHalladas / totalRespuestasDelCaso) * 100);
    }
    
    // Asegurar que está dentro del rango [0-100]
    calificacionFinal = Math.max(0, Math.min(100, calificacionFinal));
    
    console.log(`✅ Calificación: ${calificacionFinal}/100 (${respuestasHalladas}/${totalRespuestasDelCaso})`);
    
    // ========================================
    // 2. DETERMINAR ESTADO DE MISIÓN
    // ========================================
    
    const estado = calificacionFinal >= 60 ? 'EXITOSA' : 'NO APROBADA';
    
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
    } else if (calificacionFinal >= 60) {
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
function finalizarDiligencia(porTiempo = false) {
    clearInterval(intervaloReloj);
    entrevistaActivo = false;
    const input = document.getElementById('inputPregunta');
    if(input) input.disabled = true;

    const totalRespuestas = casoActivo.respuestas.length;
    const calificacion = Math.round((respuestasCorrectas / totalRespuestas) * 100);

    const mensaje = porTiempo ? 
        `TIEMPO AGOTADO\n\nCalificación: ${calificacion}/100\nRespuestas: ${respuestasCorrectas}/${totalRespuestas}` :
        `RESULTADO\n\nCalificación: ${calificacion}/100\nRespuestas: ${respuestasCorrectas}/${totalRespuestas}`;
    
    alert(mensaje);
    window.location.href = "../../inicio/niveles/niveles.html";
}