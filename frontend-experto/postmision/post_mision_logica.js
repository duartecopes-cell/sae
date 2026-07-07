// =====================================================
// POST_MISION_LOGICA.JS — VERSIÓN 3
// =====================================================
// NUEVO en v3:
//   ✅ Lee temasAbordados desde localStorage
//   ✅ Lee casoSeleccionado y cruza con BANCO_DE_CASOS
//   ✅ Muestra temas abordados con impacto obtenido
//   ✅ Muestra temas NO abordados como oportunidades perdidas
//   ✅ Recomendaciones específicas por caso (no genéricas)
//   ✅ Reporte completo incluye desglose de temas
//   ✅ No rompe nada de lo que ya funcionaba
// =====================================================

// ===== UTILIDADES =====

function formatearTiempo(tiempoMs) {
    const minutos  = Math.floor(tiempoMs / 60000);
    const segundos = Math.floor((tiempoMs % 60000) / 1000);
    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

function obtenerDatos() {
    try {
        console.log("🔍 Leyendo localStorage...");

        const startTimeStr = localStorage.getItem('startTime');
        const estadoMision = localStorage.getItem('estadoMision');

        if (!startTimeStr) { console.error("❌ startTime no encontrado"); return null; }
        if (!estadoMision)  { console.error("❌ estadoMision no encontrado"); return null; }

        const startTime = parseInt(startTimeStr);
        if (isNaN(startTime)) { console.error("❌ startTime inválido"); return null; }

        const datos = {
            credibilidad:   parseInt(localStorage.getItem('credibilidadFinal')    || '0'),
            contradicciones:parseInt(localStorage.getItem('evidenciasFinal')       || '0'),
            preguntas:      parseInt(localStorage.getItem('totalPreguntas')        || '0'),
            calificables:   parseInt(localStorage.getItem('preguntasCalificables') || '0'),
            estado:         estadoMision,
            sospechoso:     localStorage.getItem('nombreSospechoso')  || 'Desconocido',
            delito:         localStorage.getItem('delitoSospechoso')  || 'Desconocido',
            rango:          localStorage.getItem('rangoFinal')        || 'D (INAPTO)',
            tacticaUsada:   localStorage.getItem('tacticaSeleccionada') || 'Estándar',
            tiempoInicio:   startTime,
            casoId:         localStorage.getItem('casoSeleccionado')  || null,

            // Temas abordados: { tema_id: veces_preguntado }
            temasAbordados: JSON.parse(localStorage.getItem('temasAbordados') || '{}')
        };

        datos.credibilidad    = Math.max(0, Math.min(100, datos.credibilidad));
        datos.contradicciones = Math.max(0, Math.min(99,  datos.contradicciones));
        datos.preguntas       = Math.max(0, datos.preguntas);

        console.log("✅ Datos:", datos);
        return datos;

    } catch (error) {
        console.error('❌ Error al obtener datos:', error);
        return null;
    }
}

function obtenerDescripcionRango(rango) {
    const rangos = {
        'S (ESTRATEGA)':    'DOMINIO ABSOLUTO DE LA ENTREVISTA',
        'A (ESPECIALISTA)': 'ESPECIALISTA EN ENTREVISTAS',
        'B (COMPETENTE)':   'AGENTE COMPETENTE',
        'C (BÁSICO)':       'DESEMPEÑO BÁSICO',
        'D (INAPTO)':       'DESEMPEÑO INSUFICIENTE'
    };
    return rangos[rango] || 'DESEMPEÑO DESCONOCIDO';
}

// ===== ANÁLISIS DE TEMAS DEL CASO =====

/**
 * Cruza temasAbordados con el banco de casos para saber:
 *   - qué temas calificables tocaste
 *   - qué temas te faltaron
 *   - cuánto impacto acumulaste por tema
 * Retorna { abordados, noAbordados, impactoTotal }
 */
function analizarTemasCaso(casoId, temasAbordados) {
    // Si no hay banco de casos cargado o no hay casoId, retornar vacío
    if (typeof BANCO_DE_CASOS === 'undefined' || !casoId) {
        return { abordados: [], noAbordados: [], impactoTotal: 0 };
    }

    const caso = BANCO_DE_CASOS[casoId];
    if (!caso || !caso.temas_calificables) {
        return { abordados: [], noAbordados: [], impactoTotal: 0 };
    }

    const abordados   = [];
    const noAbordados = [];
    let impactoTotal  = 0;

    for (const [key, tema] of Object.entries(caso.temas_calificables)) {
        const veces = temasAbordados[tema.tema_id] || 0;

        if (veces > 0) {
            // Calcular impacto acumulado por este tema
            // Cada vez que se pregunta, el impacto se suma
            const impactoAcumulado = tema.impacto * veces;
            impactoTotal += impactoAcumulado;

            // Etapa de evolución alcanzada (0-based, máx = respuestas_evolucion.length - 1)
            const etapaAlcanzada = Math.min(veces - 1, tema.respuestas_evolucion.length - 1);
            const etapaMax       = tema.respuestas_evolucion.length - 1;
            const presionada      = etapaAlcanzada >= etapaMax;

            abordados.push({
                etiqueta:       tema.etiqueta,
                veces,
                impactoAcumulado,
                etapaAlcanzada,
                etapaMax,
                presionada,
                impactoUnitario: tema.impacto
            });
        } else {
            noAbordados.push({
                etiqueta:    tema.etiqueta,
                tema_id:     tema.tema_id,
                impacto:     tema.impacto,
                // Sugerencia de pregunta basada en primera palabra clave
                sugerencia:  tema.palabras_clave[0] || tema.etiqueta
            });
        }
    }

    // Ordenar abordados por impacto acumulado desc
    abordados.sort((a, b) => b.impactoAcumulado - a.impactoAcumulado);
    // Ordenar no abordados por impacto desc (los más valiosos primero)
    noAbordados.sort((a, b) => b.impacto - a.impacto);

    return { abordados, noAbordados, impactoTotal };
}

// ===== RENDERIZAR TEMAS ABORDADOS =====

function renderizarTemasCaso(casoId, temasAbordados) {
    const { abordados, noAbordados } = analizarTemasCaso(casoId, temasAbordados);

    // ── Temas abordados ──────────────────────────────────────────
    const contenedorAbordados = document.getElementById('temas-abordados-container');
    if (contenedorAbordados) {
        if (abordados.length === 0) {
            contenedorAbordados.innerHTML = `
                <div style="color:#ff4444; padding:12px; text-align:center; font-size:12px;">
                    ⚠ No abordaste ningún tema calificable. Revisa las palabras clave del caso.
                </div>`;
        } else {
            contenedorAbordados.innerHTML = abordados.map(t => {
                const barraW   = Math.min(100, (t.etapaAlcanzada / t.etapaMax) * 100);
                const colorBar = t.presionada ? '#4caf82' : t.etapaAlcanzada >= 1 ? '#fbbf24' : '#7fb3ff';
                const etiquetaEtapa = t.presionada
                    ? '✅ CONFESIÓN OBTENIDA'
                    : t.etapaAlcanzada >= 1
                        ? '⚠ PRESIONADO — sin confesión'
                        : '🔵 PREGUNTADO — sin presión adicional';

                return `
                <div style="background:rgba(14,22,47,0.8); border:1px solid #243d7a; border-radius:6px; padding:14px; margin-bottom:10px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <span style="color:#00f7ff; font-size:12px; font-weight:bold; text-transform:uppercase;">${t.etiqueta}</span>
                        <span style="color:#fbbf24; font-size:11px;">+${t.impactoAcumulado} pts · ${t.veces}× preguntado</span>
                    </div>
                    <div style="background:#0a1428; border-radius:3px; height:6px; margin-bottom:6px;">
                        <div style="background:${colorBar}; width:${barraW}%; height:100%; border-radius:3px; transition:width 0.4s;"></div>
                    </div>
                    <div style="color:#94a3b8; font-size:10px; text-transform:uppercase; letter-spacing:0.5px;">${etiquetaEtapa}</div>
                </div>`;
            }).join('');
        }
    }

    // ── Temas no abordados (oportunidades perdidas) ──────────────
    const contenedorPerdidos = document.getElementById('temas-perdidos-container');
    if (contenedorPerdidos) {
        if (noAbordados.length === 0) {
            contenedorPerdidos.innerHTML = `
                <div style="color:#4caf82; padding:12px; text-align:center;">
                    ✅ Abordaste todos los temas calificables del caso.
                </div>`;
        } else {
            contenedorPerdidos.innerHTML = noAbordados.map(t => `
                <div style="background:rgba(255,68,68,0.06); border:1px solid rgba(255,68,68,0.3); border-radius:6px; padding:12px; margin-bottom:8px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                        <span style="color:#ff8888; font-size:12px; font-weight:bold; text-transform:uppercase;">✗ ${t.etiqueta}</span>
                        <span style="color:#ff4444; font-size:11px;">${t.impacto} pts perdidos</span>
                    </div>
                    <div style="color:#94a3b8; font-size:11px;">
                        Pregunta sugerida: <em style="color:#7fb3ff;">"¿Qué puedes decirme sobre ${t.sugerencia}?"</em>
                    </div>
                </div>`).join('');
        }
    }
}

// ===== INYECTAR DATOS EN DOM =====

function inyectarDatos(datos) {
    console.log("📝 Inyectando datos en DOM...");

    const estadoEl = document.getElementById('estado-mision');
    if (estadoEl) {
        estadoEl.className  = datos.estado === 'EXITOSA' ? 'estado exitosa' : 'estado fallida';
        estadoEl.textContent = `MISIÓN ${datos.estado}`;
    }

    const rangoValor = document.getElementById('rango-valor');
    const rangoDesc  = document.getElementById('rango-desc');
    if (rangoValor) rangoValor.textContent = datos.rango.split(' ')[0];
    if (rangoDesc)  rangoDesc.textContent  = obtenerDescripcionRango(datos.rango);

    document.getElementById('credibilidad-valor').textContent     = datos.credibilidad + '%';
    document.getElementById('contradicciones-valor').textContent  = `${datos.contradicciones}/5`;
    document.getElementById('preguntas-valor').textContent        = datos.preguntas;
    document.getElementById('sospechoso-nombre').textContent      = datos.sospechoso;
    document.getElementById('sospechoso-delito').textContent      = datos.delito;
    document.getElementById('nombreInvestigador').textContent     = 'AGENTE ESPECIAL';

    const ahora        = Date.now();
    const tiempoMs     = ahora - datos.tiempoInicio;
    const tiempoFormato = formatearTiempo(tiempoMs);
    document.getElementById('tiempo-valor').textContent        = tiempoFormato;
    document.getElementById('tiempo-total-display').textContent = tiempoFormato;
}

// ===== GENERAR ANÁLISIS =====

function generarAnalisis(credibilidad, contradicciones, tactica, casoId, temasAbordados) {
    console.log("📊 Generando análisis de desempeño...");

    const { abordados, noAbordados } = analizarTemasCaso(casoId, temasAbordados);
    const totalTemas   = abordados.length + noAbordados.length;
    const temasOk      = abordados.length;
    const porcentajeTemas = totalTemas > 0 ? Math.round((temasOk / totalTemas) * 100) : 0;

    const errores    = [];
    const fortalezas = [];
    const sugerencias = [];

    // ── ERRORES ──────────────────────────────────────────────────
    if (credibilidad < 40) {
        errores.push({
            titulo: 'CREDIBILIDAD CRÍTICA',
            desc: 'Perdiste demasiada credibilidad. El sospechoso cerró la comunicación antes de confesar.'
        });
    }
    if (credibilidad < 60) {
        errores.push({
            titulo: 'PRESIÓN EXCESIVA',
            desc: 'Aplicaste demasiada presión sin establecer rapport. Dosifica las acusaciones.'
        });
    }
    if (contradicciones < 1) {
        errores.push({
            titulo: 'ANÁLISIS SUPERFICIAL',
            desc: 'No detectaste contradicciones. Estudia las palabras clave del perfil antes de entrar.'
        });
    }
    if (tactica === 'agresiva' && credibilidad < 70) {
        errores.push({
            titulo: 'TÁCTICA CONTRAPRODUCENTE',
            desc: 'La táctica agresiva fue inefectiva con este perfil. Necesitabas rapport previo.'
        });
    }
    // NUEVO: error por temas perdidos de alto valor
    const temasAltoValorPerdidos = noAbordados.filter(t => t.impacto >= 35);
    if (temasAltoValorPerdidos.length > 0) {
        errores.push({
            titulo: 'TEMAS CRÍTICOS NO ABORDADOS',
            desc: `Dejaste sin explorar ${temasAltoValorPerdidos.length} tema(s) de alto impacto: ${temasAltoValorPerdidos.map(t => t.etiqueta).join(', ')}.`
        });
    }

    // ── FORTALEZAS ───────────────────────────────────────────────
    if (credibilidad >= 70) {
        fortalezas.push({
            titulo: 'CONTROL EMOCIONAL',
            desc: 'Mantuviste buena credibilidad durante toda la entrevista.'
        });
    }
    if (contradicciones >= 3) {
        fortalezas.push({
            titulo: 'CAPACIDAD ANALÍTICA',
            desc: 'Detectaste múltiples inconsistencias en el relato del sospechoso.'
        });
    }
    if (credibilidad >= 80) {
        fortalezas.push({
            titulo: 'EMPATÍA EFECTIVA',
            desc: 'Lograste establecer buena conexión manteniendo profesionalismo.'
        });
    }
    if (contradicciones >= 4) {
        fortalezas.push({
            titulo: 'INTERROGADOR EXPERTO',
            desc: 'Desempeño excepcional detectando casi todas las contradicciones clave.'
        });
    }
    // NUEVO: fortaleza por cobertura de temas
    if (porcentajeTemas >= 70) {
        fortalezas.push({
            titulo: 'COBERTURA TEMÁTICA ALTA',
            desc: `Abordaste el ${porcentajeTemas}% de los temas calificables del caso. Excelente preparación.`
        });
    }
    // NUEVO: fortaleza por confesión obtenida
    const confesionesLogradas = abordados.filter(t => t.presionada).length;
    if (confesionesLogradas >= 2) {
        fortalezas.push({
            titulo: 'PRESIÓN ESTRATÉGICA',
            desc: `Llevaste ${confesionesLogradas} temas hasta la confesión completa del sospechoso.`
        });
    }

    // ── SUGERENCIAS ESPECÍFICAS DEL CASO ────────────────────────
    // Sugerencias basadas en temas no abordados (las más valiosas primero)
    if (noAbordados.length > 0) {
        const top3 = noAbordados.slice(0, 3);
        top3.forEach(t => {
            sugerencias.push({
                titulo: `EXPLORA: ${t.etiqueta.toUpperCase()}`,
                desc: `Este tema valía ${t.impacto} puntos de impacto y no fue abordado. Pregunta sobre "${t.sugerencia}" en tu próxima sesión.`
            });
        });
    }

    // Sugerencias por temas abordados sin llegar a confesión
    const sinConfe = abordados.filter(t => !t.presionada && t.etapaAlcanzada < t.etapaMax);
    if (sinConfe.length > 0) {
        sugerencias.push({
            titulo: 'INSISTE EN TEMAS INCOMPLETOS',
            desc: `Tocaste estos temas pero no los llevaste a confesión: ${sinConfe.map(t => t.etiqueta).join(', ')}. Repite la pregunta con más evidencia concreta.`
        });
    }

    // Sugerencias genéricas siempre útiles
    if (credibilidad < 50) {
        sugerencias.push({
            titulo: 'RECONSTRUYE EL RAPPORT',
            desc: 'Comienza con preguntas abiertas sobre su contexto. Evita acusaciones directas hasta tener más evidencia.'
        });
    }
    if (contradicciones < 2) {
        sugerencias.push({
            titulo: 'PREPARA MEJOR TUS PREGUNTAS',
            desc: 'Revisa el perfil psicológico del sospechoso ANTES de entrar. Identifica sus debilidades principales.'
        });
    }
    if (credibilidad >= 70 && contradicciones < 2) {
        sugerencias.push({
            titulo: 'SUBE LA PRESIÓN GRADUALMENTE',
            desc: 'Ya tienes rapport. Ahora presenta evidencia que contradiga su coartada.'
        });
    }
    sugerencias.push({
        titulo: 'ESCUCHA MÁS DE LO QUE HABLAS',
        desc: 'Los silencios incómodos hacen que los sospechosos rellenen gaps. Usa esto a tu favor.'
    });
    sugerencias.push({
        titulo: 'DOCUMENTA INCONSISTENCIAS',
        desc: 'Cuando detectes una contradicción, anótala. Confronta al final con toda la evidencia junta.'
    });

    // ── RESUMEN ──────────────────────────────────────────────────
    const nivelDesempenio = credibilidad >= 70 ? 'SÓLIDO' : credibilidad >= 50 ? 'PROMEDIO' : 'DEFICIENTE';
    const descripcionDesempenio =
        credibilidad >= 80 ? 'Demostraste excelente control de la entrevista.' :
        credibilidad >= 60 ? 'Necesitas mejorar tu manejo de presión y timing.' :
        'Requieres reentrenamiento urgente en técnicas de rapport.';

    const resumenTemas = totalTemas > 0
        ? `Abordaste <strong>${temasOk} de ${totalTemas}</strong> temas calificables (${porcentajeTemas}%).`
        : '';

    document.getElementById('analisis-desempenio').innerHTML = `
        <div style="background:rgba(0,247,255,0.05); padding:15px; border-left:3px solid #00f7ff; border-radius:3px;">
            <p style="color:#cbd5e1; line-height:1.6; margin:0 0 8px 0;">
                Tu desempeño fue <strong>${nivelDesempenio}</strong>. ${descripcionDesempenio}
            </p>
            ${resumenTemas ? `<p style="color:#7fb3ff; font-size:12px; margin:0;">${resumenTemas}</p>` : ''}
        </div>`;

    // ── RENDERIZAR ───────────────────────────────────────────────
    document.getElementById('errores-container').innerHTML =
        errores.length > 0
        ? errores.map(e => `
            <div class="error-item">
                <div class="error-label">⚠ ${e.titulo}</div>
                <div class="error-texto">${e.desc}</div>
            </div>`).join('')
        : '<div style="color:#4caf82; padding:10px; text-align:center;">✅ No se detectaron errores críticos.</div>';

    document.getElementById('fortalezas-container').innerHTML =
        fortalezas.length > 0
        ? fortalezas.map(f => `
            <div class="sugerencia-item">
                <div class="sugerencia-label">✓ ${f.titulo}</div>
                <div class="sugerencia-texto">${f.desc}</div>
            </div>`).join('')
        : '<div style="color:#7fb3ff; padding:10px; text-align:center;">Sin fortalezas detectadas en esta sesión.</div>';

    document.getElementById('sugerencias-container').innerHTML =
        sugerencias.map(s => `
            <div class="sugerencia-item">
                <div class="sugerencia-label">→ ${s.titulo}</div>
                <div class="sugerencia-texto">${s.desc}</div>
            </div>`).join('');

    // ── TEMAS DEL CASO ───────────────────────────────────────────
    renderizarTemasCaso(casoId, temasAbordados);

    console.log("✅ Análisis generado completamente");
}

// ===== REPORTE COMPLETO (MODAL) =====

function mostrarReporte() {
    const datos = obtenerDatos();
    if (!datos) { alert('Error: No hay datos para mostrar'); return; }

    const { abordados, noAbordados, impactoTotal } = analizarTemasCaso(datos.casoId, datos.temasAbordados);

    const tiempoFormato = formatearTiempo(Date.now() - datos.tiempoInicio);

    const bloqueTemasAbordados = abordados.length > 0
        ? abordados.map(t =>
            `  ✓ ${t.etiqueta.padEnd(35)} | ${t.veces}× | +${t.impactoAcumulado} pts | Etapa ${t.etapaAlcanzada + 1}/${t.etapaMax + 1}${t.presionada ? ' | CONFESIÓN' : ''}`
          ).join('\n')
        : '  (ninguno)';

    const bloqueTemasNoAbordados = noAbordados.length > 0
        ? noAbordados.map(t =>
            `  ✗ ${t.etiqueta.padEnd(35)} | ${t.impacto} pts perdidos`
          ).join('\n')
        : '  (todos abordados)';

    const contenido = `
═══════════════════════════════════════════════════════════════
                    REPORTE DE MISIÓN COMPLETO
═══════════════════════════════════════════════════════════════

FECHA:        ${new Date().toLocaleString('es-CO')}
SOSPECHOSO:   ${datos.sospechoso}
DELITO:       ${datos.delito}
ESTADO:       ${datos.estado}
RANGO:        ${datos.rango}

─────────────────────────────────────────────────────────────
ESTADÍSTICAS GENERALES
─────────────────────────────────────────────────────────────
Credibilidad Final:          ${datos.credibilidad}%
Contradicciones Detectadas:  ${datos.contradicciones}
Preguntas Totales:           ${datos.preguntas}
Preguntas Calificables:      ${datos.calificables}
Duración de Entrevista:      ${tiempoFormato}
Táctica Utilizada:           ${datos.tacticaUsada}

─────────────────────────────────────────────────────────────
TEMAS CALIFICABLES ABORDADOS
─────────────────────────────────────────────────────────────
${bloqueTemasAbordados}

Impacto acumulado por temas: ${impactoTotal} pts

─────────────────────────────────────────────────────────────
TEMAS NO ABORDADOS (OPORTUNIDADES PERDIDAS)
─────────────────────────────────────────────────────────────
${bloqueTemasNoAbordados}

─────────────────────────────────────────────────────────────
RECOMENDACIONES PARA PRÓXIMA SESIÓN
─────────────────────────────────────────────────────────────

1. TEMAS PRIORITARIOS A EXPLORAR:
${noAbordados.slice(0, 3).map((t, i) =>
    `   ${i + 1}. "${t.etiqueta}" — Pregunta sobre: ${t.sugerencia}`
).join('\n') || '   (exploraste todos los temas)'}

2. TÉCNICA GENERAL:
   - Practica el silencio estratégico
   - Insiste en temas donde el sospechoso mostró dudas
   - Usa evidencia concreta para confrontar contradicciones

3. OBJETIVO SIGUIENTE SESIÓN:
   - Lleva temas incompletos a etapa de confesión
   - Mantén credibilidad por encima del 60%

═══════════════════════════════════════════════════════════════
                     FIN DEL REPORTE
═══════════════════════════════════════════════════════════════
    `;

    document.getElementById('contenido-reporte').textContent = contenido;
    document.getElementById('modal-reporte').style.display   = 'block';
}

// ===== DESCARGAR REPORTE =====

function descargarResultados() {
    const datos = obtenerDatos();
    if (!datos) { alert('Error: No hay datos para descargar'); return; }

    const { abordados, noAbordados, impactoTotal } = analizarTemasCaso(datos.casoId, datos.temasAbordados);
    const tiempoFormato = formatearTiempo(Date.now() - datos.tiempoInicio);

    const contenido = `REPORTE DE MISIÓN — SAE
═══════════════════════════════════════
FECHA:       ${new Date().toLocaleString('es-CO')}
SOSPECHOSO:  ${datos.sospechoso}
DELITO:      ${datos.delito}
ESTADO:      ${datos.estado}
RANGO:       ${datos.rango}

ESTADÍSTICAS
─────────────────────────────────────
Credibilidad:        ${datos.credibilidad}%
Contradicciones:     ${datos.contradicciones}
Preguntas totales:   ${datos.preguntas}
Calificables:        ${datos.calificables}
Duración:            ${tiempoFormato}
Impacto por temas:   ${impactoTotal} pts

TEMAS ABORDADOS
─────────────────────────────────────
${abordados.map(t => `✓ ${t.etiqueta} — ${t.veces}× — +${t.impactoAcumulado} pts${t.presionada ? ' — CONFESIÓN' : ''}`).join('\n') || '(ninguno)'}

TEMAS NO ABORDADOS
─────────────────────────────────────
${noAbordados.map(t => `✗ ${t.etiqueta} — ${t.impacto} pts perdidos`).join('\n') || '(todos abordados)'}
═══════════════════════════════════════`;

    const el = document.createElement('a');
    el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contenido));
    el.setAttribute('download', `reporte_mision_${Date.now()}.txt`);
    el.style.display = 'none';
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
}

// ===== VOLVER AL MENÚ =====

function volverAlNivel() {
    if (confirm('¿Deseas volver al menú? Se perderán los datos de esta sesión.')) {
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

function inicializarPantalla() {
    console.log("🚀 Inicializando pantalla de post-misión v3...");

    const datos = obtenerDatos();

    if (!datos) {
        document.querySelector('.debriefing-container').innerHTML = `
            <div style="color:#ff4444; padding:40px; text-align:center; border:2px solid #ff4444; border-radius:6px;">
                <h2>⚠ ERROR DE SINCRONIZACIÓN</h2>
                <p><strong>No se encontraron datos de la misión completada.</strong></p>
                <p style="font-size:12px; color:#7fb3ff; margin:20px 0;">
                    Parece que llegaste a esta página sin completar una entrevista correctamente.
                </p>
                <p style="font-size:11px; color:#999;">
                    💡 <strong>Solución:</strong> Vuelve al menú e inicia una nueva entrevista desde cero.
                </p>
                <br>
                <button onclick="volverAlNivel()" style="background:#ff4444; color:white; border:none; padding:12px 24px; cursor:pointer; border-radius:4px; font-size:12px; text-transform:uppercase; font-weight:bold;">
                    ← VOLVER AL MENÚ
                </button>
            </div>`;
        return;
    }

    inyectarDatos(datos);
    generarAnalisis(datos.credibilidad, datos.contradicciones, datos.tacticaUsada, datos.casoId, datos.temasAbordados);

    console.log('✅ Pantalla post-misión v3 inicializada');
}

window.addEventListener('DOMContentLoaded', inicializarPantalla);
