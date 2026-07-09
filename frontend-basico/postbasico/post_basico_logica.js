// =====================================================
// POST_MISION_LOGICA.JS - FINAL CORREGIDA
// =====================================================
// ✅ Genera análisis COMPLETO incluso si calificación = 0/100
// ✅ Descargar reporte CON CONTENIDO
// ✅ Mostrar nombre completo
// =====================================================

// ===== UTILIDADES =====

function formatearTiempo(tiempoMs) {
    const minutos = Math.floor(tiempoMs / 60000);
    const segundos = Math.floor((tiempoMs % 60000) / 1000);
    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

function obtenerDatos() {
    try {
        console.log("🔍 Leyendo localStorage...");
        
        const calificacionStr = localStorage.getItem('calificacionFinal');
        const respuestasCorrectasStr = localStorage.getItem('respuestasCorrectas');
        const totalRespuestasStr = localStorage.getItem('totalRespuestasDelCaso');
        const estadoMision = localStorage.getItem('estadoMision');
        const nombreUsuario = localStorage.getItem('nombreUsuario');
        
        console.log("📊 Valores en localStorage:");
        console.log({
            calificacion: calificacionStr,
            respuestasCorrectas: respuestasCorrectasStr,
            totalRespuestas: totalRespuestasStr,
            estado: estadoMision,
            nombreUsuario: nombreUsuario
        });

        if (!calificacionStr) {
            console.error("❌ CRÍTICO: calificacionFinal no encontrado");
            return null;
        }

        // ✅ ASEGURAR QUE LA CALIFICACIÓN NUNCA SEA NEGATIVA
        let calificacion = parseInt(calificacionStr);
        calificacion = Math.max(0, Math.min(100, calificacion));

        const datos = {
            calificacion: calificacion,  // ✅ SIEMPRE 0-100
            respuestasCorrectas: parseInt(respuestasCorrectasStr || '0'),
            totalRespuestas: parseInt(totalRespuestasStr || '34'),
            contradicciones: parseInt(localStorage.getItem('evidenciasFinal') || '0'),
            preguntas: parseInt(localStorage.getItem('totalPreguntas') || '0'),
            estado: estadoMision || 'DESCONOCIDO',
            sospechoso: localStorage.getItem('nombreSospechoso') || 'Desconocido',
            delito: localStorage.getItem('delitoSospechoso') || 'Delito desconocido',
            rango: localStorage.getItem('rangoFinal') || 'D (INAPTO)',
            descripcionRango: localStorage.getItem('descripcionRango') || 'DESEMPEÑO DESCONOCIDO',
            tacticaUsada: localStorage.getItem('tacticaSeleccionada') || 'Estándar',
            tiempoInicio: parseInt(localStorage.getItem('startTime') || '0'),
            preguntasRealizadas: localStorage.getItem('preguntasRealizadas') ? JSON.parse(localStorage.getItem('preguntasRealizadas')) : [],
            nombreInvestigador: nombreUsuario || 'AGENTE ESPECIAL'  // ✅ NUEVO: Nombre del login
        };

        console.log("✅ Datos extraídos:", datos);
        return datos;

    } catch (error) {
        console.error('❌ Error al obtener datos:', error);
        return null;
    }
}

// ===== FUNCIONES PRINCIPALES =====

function inicializarPantalla() {
    console.log("🚀 Inicializando pantalla de post-misión...");
    
    const datos = obtenerDatos();

    if (!datos) {
        console.error('❌ FALLO CRÍTICO: No se pudieron obtener los datos');
        document.querySelector('.debriefing-container').innerHTML = `
            <div style="color:#ff4444; padding:40px; text-align:center; border: 2px solid #ff4444; border-radius: 6px;">
                <h2>⚠ ERROR DE SINCRONIZACIÓN</h2>
                <p><strong>No se encontraron datos de la misión completada.</strong></p>
                <p style="font-size: 12px; color: #7fb3ff; margin: 20px 0;">
                    Parece que llegaste a esta página sin completar una entrevista correctamente.
                </p>
                <button onclick="volverAlNivel()" style="background: #ff4444; color: white; border: none; padding: 12px 24px; cursor: pointer; border-radius: 4px; font-size: 12px; text-transform: uppercase; font-weight: bold;">
                    ← VOLVER AL MENÚ
                </button>
            </div>
        `;
        return;
    }

    console.log("✅ Datos obtenidos, inyectando en DOM...");
    inyectarDatos(datos);
    if (window.SAERenderReportDashboard) {
        window.SAERenderReportDashboard(datos, { nivel: "Basico" });
    }
    generarAnalisis(datos);

    console.log('✅ Pantalla inicializada correctamente');
}

function inyectarDatos(datos) {
    console.log("📝 Inyectando datos en DOM...");
    
    // Estado de misión
    const estadoEl = document.getElementById('estado-mision');
    if (estadoEl) {
        estadoEl.className = datos.estado === 'EXITOSA' ? 'estado exitosa' : 'estado fallida';
        estadoEl.textContent = `MISIÓN ${datos.estado}`;
    }

    // Rango
    const rangoValor = document.getElementById('rango-valor');
    const rangoDesc = document.getElementById('rango-desc');
    if (rangoValor) rangoValor.textContent = datos.rango.split(' ')[0];
    if (rangoDesc) rangoDesc.textContent = datos.descripcionRango;

    // ✅ Calificación (0-100)
    document.getElementById('credibilidad-valor').textContent = `${datos.calificacion}/100`;
    
    // Contradicciones
    document.getElementById('contradicciones-valor').textContent = `${datos.contradicciones}/5`;
    
    // Preguntas
    document.getElementById('preguntas-valor').textContent = datos.preguntas;

    // ✅ Información del caso
    document.getElementById('sospechoso-nombre').textContent = datos.sospechoso;
    document.getElementById('sospechoso-delito').textContent = datos.delito;
    
    // ✅ NUEVO: Mostrar nombre completo del investigador
    document.getElementById('nombreInvestigador').textContent = datos.nombreInvestigador;

    // Tiempo
    const ahora = Date.now();
    const tiempoMs = ahora - datos.tiempoInicio;
    const tiempoFormato = formatearTiempo(tiempoMs);
    
    document.getElementById('tiempo-valor').textContent = tiempoFormato;
    document.getElementById('tiempo-total-display').textContent = tiempoFormato;

    console.log("✅ Datos inyectados correctamente");
}

function generarAnalisis(datos) {
    console.log("📊 Generando análisis detallado...");
    
    const calificacion = datos.calificacion;
    const respuestasCorrectas = datos.respuestasCorrectas;
    const totalRespuestas = datos.totalRespuestas;
    const porcentajeCorrecciones = totalRespuestas > 0 ? Math.round((respuestasCorrectas / totalRespuestas) * 100) : 0;
    
    // ========================================
    // ANÁLISIS DE DESEMPEÑO
    // ========================================
    
    let nivelDesempenio = 'EN DESARROLLO';
    let descripcionDesempenio = 'Todavia no se detectan preguntas suficientemente conectadas con el caso.';
    
    if (calificacion === 0) {
        nivelDesempenio = 'INICIAL';
        descripcionDesempenio = 'Esta sesion sirve como punto de partida. Revisa el caso y practica preguntas concretas sobre personas, lugares, tiempos y evidencias.';
    } else if (calificacion >= 95) {
        nivelDesempenio = 'EXCEPCIONAL';
        descripcionDesempenio = 'Demostraste un dominio absoluto de la entrevista. Desempeño magistral.';
    } else if (calificacion >= 85) {
        nivelDesempenio = 'EXCELENTE';
        descripcionDesempenio = 'Realizaste una entrevista de alta calidad con excelente manejo de presión.';
    } else if (calificacion >= 75) {
        nivelDesempenio = 'BUENO';
        descripcionDesempenio = 'Tu desempeño fue competente con buen manejo de timing y técnicas.';
    } else if (calificacion >= 55) {
        nivelDesempenio = 'ACEPTABLE';
        descripcionDesempenio = 'Alcanzaste el mínimo requerido. Hay margen significativo de mejora.';
    } else if (calificacion < 55) {
        nivelDesempenio = 'DEFICIENTE';
        descripcionDesempenio = 'No cumpliste los requisitos mínimos de la evaluación.';
    }
    
    // ========================================
    // ERRORES DETECTADOS - ✅ SIEMPRE SE GENERAN
    // ========================================
    
    const errores = [];
    
    if (respuestasCorrectas === 0) {
        errores.push({
            titulo: 'PREGUNTAS AUN MUY GENERALES',
            desc: 'No se detectaron preguntas suficientemente relacionadas con las lineas clave del caso. Empieza por identidad, rutina, contactos, lugares y soportes.'
        });
        errores.push({
            titulo: 'PREPARACION POR REFORZAR',
            desc: 'Necesitas revisar la ficha del caso antes de entrar y convertir los datos en preguntas verificables.'
        });
    } else if (respuestasCorrectas < totalRespuestas * 0.25) {
        errores.push({
            titulo: 'FALTA CRÍTICA DE PREPARACIÓN',
            desc: 'Solo respondiste correctamente menos del 25% de las preguntas. Necesitas estudiar ANTES de entrar.'
        });
    } else if (respuestasCorrectas < totalRespuestas * 0.4) {
        errores.push({
            titulo: 'PREPARACIÓN INSUFICIENTE',
            desc: 'Tu conocimiento del caso fue limitado. Revisa el perfil y antecedentes del sospechoso.'
        });
    }
    
    if (calificacion < 55) {
        errores.push({
            titulo: '❌ CALIFICACIÓN NO APROBATORIA',
            desc: `Obtuviste ${calificacion}/100. Te faltan ${Math.max(0, 55 - calificacion)} puntos para aprobar; enfoca la proxima entrevista en preguntas mas claras y relacionadas con el caso.`
        });
    }
    
    if (datos.preguntas < 8) {
        errores.push({
            titulo: 'INTERROGATORIO PASIVO O INEXISTENTE',
            desc: `Solo formulaste ${datos.preguntas} preguntas. Una entrevista efectiva requiere 15-20 preguntas mínimo.`
        });
    }
    
    if (respuestasCorrectas < totalRespuestas * 0.5 && respuestasCorrectas > 0) {
        errores.push({
            titulo: 'BAJA CALIDAD DE INTERROGATORIO',
            desc: 'Tus preguntas fueron demasiado generales. Debes ser específico e investigativo.'
        });
    }
    
    if (calificacion >= 55 && calificacion < 75) {
        errores.push({
            titulo: 'INCONSISTENCIAS EN TÉCNICA',
            desc: 'Tu entrevista fue desigual. Mantén un nivel de profundidad consistente.'
        });
    }
    
    // ========================================
    // FORTALEZAS IDENTIFICADAS - ✅ SIEMPRE SE GENERAN (INCLUSO SI SON POCAS)
    // ========================================
    
    const fortalezas = [];
    
    if (calificacion >= 55) {
        fortalezas.push({
            titulo: '✅ MISIÓN APROBADA',
            desc: `Alcanzaste una calificación de ${calificacion}/100. Cumpliste los requisitos mínimos.`
        });
    }
    
    if (respuestasCorrectas >= totalRespuestas * 0.8) {
        fortalezas.push({
            titulo: 'ALTÍSIMO PORCENTAJE DE ACIERTOS',
            desc: `Respondiste correctamente el ${porcentajeCorrecciones}% de las preguntas. Excelente investigación.`
        });
    } else if (respuestasCorrectas >= totalRespuestas * 0.7) {
        fortalezas.push({
            titulo: 'ALTO PORCENTAJE DE ACIERTOS',
            desc: `Respondiste correctamente el ${porcentajeCorrecciones}% de las preguntas. Buen desempeño.`
        });
    } else if (respuestasCorrectas >= totalRespuestas * 0.6) {
        fortalezas.push({
            titulo: 'DESEMPEÑO SATISFACTORIO',
            desc: `Respondiste correctamente el ${porcentajeCorrecciones}% de las preguntas. Aceptable.`
        });
    }
    
    if (datos.contradicciones >= 4) {
        fortalezas.push({
            titulo: 'EXCELENTE DETECCIÓN DE INCONSISTENCIAS',
            desc: 'Lograste identificar múltiples contradicciones. Eso es fundamental en investigación.'
        });
    } else if (datos.contradicciones >= 2) {
        fortalezas.push({
            titulo: 'DETECTASTE CONTRADICCIONES',
            desc: 'Lograste identificar inconsistencias en el relato del sospechoso. Bien ejecutado.'
        });
    }
    
    if (datos.preguntas >= 15) {
        fortalezas.push({
            titulo: 'INTERROGATORIO SOSTENIDO',
            desc: `Formulaste ${datos.preguntas} preguntas. Mantuviste presión constante y ritmo efectivo.`
        });
    } else if (datos.preguntas >= 10) {
        fortalezas.push({
            titulo: 'BUEN VOLUMEN DE INTERROGATORIO',
            desc: `Formulaste ${datos.preguntas} preguntas. Actividad satisfactoria.`
        });
    }
    
    if (calificacion >= 90) {
        fortalezas.push({
            titulo: '🏆 DESEMPEÑO EXCEPCIONAL',
            desc: 'Alcanzaste un rango superior. Considerase para misiones de mayor dificultad.'
        });
    } else if (calificacion >= 80) {
        fortalezas.push({
            titulo: '⭐ DESEMPEÑO DESTACADO',
            desc: 'Tu rango indica especialización en entrevistas. Excelente trabajo.'
        });
    }
    
    // ✅ NUEVO: Si no hay fortalezas, agregar una default
    if (fortalezas.length === 0) {
        fortalezas.push({
            titulo: '📌 NOTA SOBRE TU DESEMPEÑO',
            desc: 'Aunque tu calificación fue baja, cada intento es una oportunidad de aprendizaje. Revisa tus errores y vuelve a intentar.'
        });
    }
    
    // ========================================
    // SUGERENCIAS DE MEJORA - ✅ SIEMPRE SE GENERAN
    // ========================================
    
    const sugerencias = [];
    
    if (calificacion === 0) {
        sugerencias.push({
            titulo: 'PRACTICA GUIADA RECOMENDADA',
            desc: 'Antes de repetir, formula una lista corta de preguntas sobre identidad, ubicacion, contactos, dinero, documentos y contradicciones.'
        });
    }
    
    if (calificacion < 100) {
        sugerencias.push({
            titulo: 'ESTUDIA MÁS EL PERFIL DEL SOSPECHOSO',
            desc: 'Revisa antecedentes, inconsistencias, debilidades. Llega a la entrevista PREPARADO y con un plan.'
        });
    }
    
    if (respuestasCorrectas < totalRespuestas * 0.8) {
        sugerencias.push({
            titulo: 'SÉ MÁS ESPECÍFICO EN TUS PREGUNTAS',
            desc: 'Pregunta sobre hechos concretos, no generales. Ejemplo: operaciones específicas, fechas, lugares, contactos.'
        });
    }
    
    if (datos.preguntas < 15) {
        sugerencias.push({
            titulo: 'AUMENTA EL VOLUMEN DE PREGUNTAS',
            desc: 'Haz 15-20 preguntas mínimo. Cubre TODOS los aspectos del caso. No dejes puntos sin explorar.'
        });
    }
    
    sugerencias.push({
        titulo: 'USA SILENCIOS ESTRATÉGICOS',
        desc: 'Después de una respuesta sospechosa, quédate callado. Los silencios incómodos hacen que el sospechoso hable más y se contradiga.'
    });
    
    if (datos.contradicciones < 3) {
        sugerencias.push({
            titulo: 'MEJORA DETECCIÓN DE CONTRADICCIONES',
            desc: 'Anota inconsistencias mientras las detectas. Confronta al final con toda la evidencia junta.'
        });
    }
    
    sugerencias.push({
        titulo: 'ADAPTA TU TÁCTICA AL SOSPECHOSO',
        desc: 'Si es evasivo, sé directo y agresivo. Si es cooperativo, construye rapport. Lee sus patrones de comportamiento.'
    });
    
    if (calificacion < 75) {
        sugerencias.push({
            titulo: 'REVISAR TÉCNICAS FUNDAMENTALES',
            desc: 'Recapacita en: rapport, escucha activa, timing de confrontación, lectura de lenguaje corporal y presión psicológica.'
        });
    }
    
    // ========================================
    // RESUMEN DE DESEMPEÑO
    // ========================================
    
    document.getElementById('analisis-desempenio').innerHTML = `
        <div style="background:rgba(0,247,255,0.05); padding:15px; border-left:3px solid #00f7ff; border-radius:3px;">
            <p style="color:#cbd5e1; line-height:1.6; margin:0;">
                Tu desempeño fue <strong>${nivelDesempenio}</strong>. ${descripcionDesempenio}
                <br><br>
                <strong>Respuestas Correctas:</strong> ${respuestasCorrectas}/${totalRespuestas} (${porcentajeCorrecciones}%)
                <br>
                <strong>Calificación Final:</strong> ${calificacion}/100 ${calificacion >= 55 ? '✅ APROBADO' : '❌ NO APROBADO'}
            </p>
        </div>
    `;
    
    // ===== RENDERIZAR ERRORES =====
    if (errores.length > 0) {
        document.getElementById('errores-container').innerHTML = errores.map(e => `
            <div class="error-item">
                <div class="error-label">⚠ ${e.titulo}</div>
                <div class="error-texto">${e.desc}</div>
            </div>
        `).join('');
    } else {
        document.getElementById('errores-container').innerHTML = 
            '<div style="color:#4caf82; padding:10px; text-align:center;">✅ No hay errores críticos. Buen desempeño.</div>';
    }
    
    // ===== RENDERIZAR FORTALEZAS =====
    document.getElementById('fortalezas-container').innerHTML = 
        fortalezas.length > 0 ? 
        fortalezas.map(f => `
            <div class="sugerencia-item">
                <div class="sugerencia-label">✓ ${f.titulo}</div>
                <div class="sugerencia-texto">${f.desc}</div>
            </div>
        `).join('') :
        '<div style="color:#7fb3ff; padding:10px; text-align:center;">Sin fortalezas detectadas.</div>';
    
    // ===== RENDERIZAR SUGERENCIAS =====
    document.getElementById('sugerencias-container').innerHTML = sugerencias.map(s => `
        <div class="sugerencia-item">
            <div class="sugerencia-label">→ ${s.titulo}</div>
            <div class="sugerencia-texto">${s.desc}</div>
        </div>
    `).join('');
    
    console.log("✅ Análisis generado completamente");
}

// ===== REPORTE COMPLETO =====

async function mostrarReporte() {
    const datos = obtenerDatos();
    if (!datos) {
        await window.SAEAlerts.alert('Error: No hay datos para mostrar');
        return;
    }

    const ahora = Date.now();
    const tiempoMs = ahora - datos.tiempoInicio;
    const tiempoFormato = formatearTiempo(tiempoMs);
    const porcentaje = Math.round((datos.respuestasCorrectas / datos.totalRespuestas) * 100);

    const contenido = `
═══════════════════════════════════════════════════════════════
                    REPORTE DE MISIÓN COMPLETO
═══════════════════════════════════════════════════════════════

FECHA: ${new Date().toLocaleString('es-CO')}
INVESTIGADOR: ${datos.nombreInvestigador}
SOSPECHOSO: ${datos.sospechoso}
DELITO: ${datos.delito}
ESTADO: ${datos.estado}

─────────────────────────────────────────────────────────────
CALIFICACIÓN Y RESULTADOS
─────────────────────────────────────────────────────────────
Calificación Final:        ${datos.calificacion}/100
Respuestas Correctas:      ${datos.respuestasCorrectas}/${datos.totalRespuestas}
Porcentaje:                ${porcentaje}%
Rango de Desempeño:        ${datos.rango}
Preguntas Formuladas:      ${datos.preguntas}
Duración:                  ${tiempoFormato}

─────────────────────────────────────────────────────────────
INTERPRETACIÓN
─────────────────────────────────────────────────────────────

${datos.calificacion >= 55 ? '✅ APROBADO' : '❌ NO APROBADO'}

${datos.calificacion === 0 ? 
  'RESULTADO: Calificacion de 0/100. Es una sesion inicial; revisa la ficha y vuelve a intentar con preguntas mas concretas.' :
  datos.calificacion >= 95 ? 
  'Desempeño Excepcional: Demostraste dominio absoluto.' :
  datos.calificacion >= 85 ?
  'Desempeño Excelente: Realizaste una entrevista de alta calidad.' :
  datos.calificacion >= 75 ?
  'Desempeño Bueno: Competencia probada en entrevistas.' :
  datos.calificacion >= 55 ?
  'Desempeño Aceptable: Alcanzaste el mínimo requerido.' :
  'Desempeño Insuficiente: Requieres reentrenamiento urgente.'}

═══════════════════════════════════════════════════════════════
                 FIN DEL REPORTE
═══════════════════════════════════════════════════════════════
    `;

    document.getElementById('contenido-reporte').textContent = contenido;
    document.getElementById('modal-reporte').style.display = 'block';
}

// ✅ Descargar reporte con nombre completo
async function descargarResultados() {
    const datos = obtenerDatos();
    if (!datos) {
        await window.SAEAlerts.alert('Error: No hay datos para descargar');
        return;
    }

    const ahora = Date.now();
    const tiempoMs = ahora - datos.tiempoInicio;
    const tiempoFormato = formatearTiempo(tiempoMs);
    const porcentaje = Math.round((datos.respuestasCorrectas / datos.totalRespuestas) * 100);
    
    // ✅ Incluir nombre completo del investigador
    const contenido = `═══════════════════════════════════════════════════════════════
                    REPORTE DE MISIÓN COMPLETO
═══════════════════════════════════════════════════════════════

FECHA: ${new Date().toLocaleString('es-CO')}
INVESTIGADOR: ${datos.nombreInvestigador}
SOSPECHOSO: ${datos.sospechoso}
DELITO: ${datos.delito}
ESTADO: ${datos.estado}
RANGO: ${datos.rango}

─────────────────────────────────────────────────────────────
CALIFICACIÓN
─────────────────────────────────────────────────────────────
Calificación Final:        ${datos.calificacion}/100
Respuestas Correctas:      ${datos.respuestasCorrectas}/${datos.totalRespuestas}
Porcentaje:                ${porcentaje}%
Preguntas Formuladas:      ${datos.preguntas}
Duración:                  ${tiempoFormato}
Táctica Utilizada:         ${datos.tacticaUsada}

─────────────────────────────────────────────────────────────
RESULTADO
─────────────────────────────────────────────────────────────
${datos.calificacion >= 55 ? '✅ MISIÓN APROBADA' : '❌ MISIÓN NO APROBADA'}

Desempeño: ${datos.calificacion >= 95 ? 'Excepcional' : 
             datos.calificacion >= 85 ? 'Excelente' : 
             datos.calificacion >= 75 ? 'Bueno' : 
             datos.calificacion >= 55 ? 'Aceptable' : 
             datos.calificacion === 0 ? 'Catastrófico - Reentrenamiento Obligatorio' : 'Insuficiente'}

═══════════════════════════════════════════════════════════════
Reporte generado automáticamente por SAE - Sistema Avanzado de Entrevistas
═══════════════════════════════════════════════════════════════`;

    // ✅ Crear archivo con nombre descriptivo
    const elemento = document.createElement('a');
    elemento.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contenido));
    
    // Nombre del archivo con información relevante
    const nombreArchivo = `REPORTE_${datos.nombreInvestigador.replace(/\s+/g, '_')}_${new Date().getTime()}.txt`;
    elemento.setAttribute('download', nombreArchivo);
    
    elemento.style.display = 'none';
    document.body.appendChild(elemento);
    
    console.log('✅ Descargando reporte:', nombreArchivo);
    elemento.click();
    document.body.removeChild(elemento);
}

async function volverAlNivel() {
    if (await window.SAEAlerts.confirm('¿Deseas volver al menú? Se perderán los datos de esta sesión.')) {
        if (window.SAEAuditoria) {
            window.SAEAuditoria.limpiarSesionPreservandoAuditoria();
        } else {
            const tema = localStorage.getItem('sae-theme');
            localStorage.clear();
            if (tema) localStorage.setItem('sae-theme', tema);
        }
        window.location.href = "../../inicio/niveles/niveles.html";
    }
}

// ===== INICIALIZACIÓN =====
window.addEventListener('DOMContentLoaded', inicializarPantalla);
