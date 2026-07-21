(function () {
    "use strict";

    function numeroGuardado(clave) {
        const valor = Number(localStorage.getItem(clave));
        return Number.isFinite(valor) ? valor : null;
    }

    function leerPreguntas() {
        try {
            const datos = JSON.parse(localStorage.getItem("preguntasRealizadas") || "[]");
            return Array.isArray(datos) ? datos : [];
        } catch (error) {
            return [];
        }
    }

    function evaluarEntrevista() {
        const registros = leerPreguntas();
        const totalPreguntas = registros.length || numeroGuardado("totalPreguntas") || 0;
        const textos = registros.map((item) => String(item.pregunta || "").trim()).filter(Boolean);
        const saludo = textos.some((texto) => /\b(hola|buenos dias|buenos días|buenas tardes|buenas noches|como esta|cómo está|como se encuentra|cómo se encuentra)\b/i.test(texto));
        const interrogativos = /\b(que|qué|quien|quién|quienes|quiénes|cuando|cuándo|donde|dónde|como|cómo|por que|por qué|cual|cuál|cuanto|cuánto)\b/i;

        const bienRedactadas = textos.filter((texto) => {
            const palabras = texto.split(/\s+/).filter(Boolean);
            const inicioCorrecto = /^[A-ZÁÉÍÓÚÑ¿]/.test(texto);
            const formaInterrogativa = texto.includes("?") || interrogativos.test(texto);
            return palabras.length >= 4 && inicioCorrecto && formaInterrogativa;
        }).length;
        const calidadRedaccion = textos.length ? bienRedactadas / textos.length : 0;

        const contextuales = registros.filter((item) =>
            item.correcta ||
            item.parcial ||
            item.evaluacion?.correcta ||
            item.evaluacion?.criterios?.relacionCaso ||
            item.tipo === "alta_valor" ||
            item.tipo === "exploratoria"
        ).length;

        const clavesCorrectas = new Set();
        registros.forEach((item, indice) => {
            if (!item.correcta && !item.evaluacion?.correcta) return;
            const clave = item.tema || item.clave || item.indice;
            clavesCorrectas.add(clave === null || clave === undefined || clave === "" ? `acierto-${indice}` : String(clave));
        });

        const correctas = Math.max(clavesCorrectas.size, numeroGuardado("respuestasCorrectas") || 0);
        const totalCaso = Math.max(numeroGuardado("totalRespuestasDelCaso") || 0, correctas, 1);
        const cobertura = Math.min(1, correctas / totalCaso);
        const esDeficiente = totalPreguntas === 0 || (contextuales === 0 && !saludo);
        const puntos = esDeficiente
            ? 0
            : Math.max(1, Math.min(50, Math.round((cobertura * 45) + (calidadRedaccion * 4) + (saludo ? 1 : 0))));

        return {
            totalPreguntas,
            saludo,
            bienRedactadas,
            calidadRedaccion,
            contextuales,
            correctas,
            totalCaso,
            cobertura,
            puntos,
            porcentaje: puntos * 2,
            esDeficiente
        };
    }

    function clasificar(evaluacion) {
        if (evaluacion.esDeficiente) {
            return {
                nivel: "DEFICIENTE",
                clase: "deficiente",
                detalle: "No formuló preguntas o no presentó saludo ni preguntas con contexto suficiente."
            };
        }
        if (evaluacion.calidadRedaccion < 0.7) {
            return {
                nivel: "REGULAR",
                clase: "regular",
                detalle: "Participó en la entrevista, pero debe mejorar la ortografía, la claridad y la redacción de sus preguntas."
            };
        }
        if (evaluacion.cobertura < 0.4) {
            return {
                nivel: "REGULAR",
                clase: "regular",
                detalle: "Las preguntas fueron comprensibles, pero todavía demostraron poco conocimiento específico del caso."
            };
        }
        if (evaluacion.cobertura < 0.8) {
            return {
                nivel: "BUENO",
                clase: "bueno",
                detalle: "Redactó preguntas claras y demostró conocimiento de una parte importante del caso."
            };
        }
        return {
            nivel: "EXCELENTE",
            clase: "excelente",
            detalle: "Redactó correctamente y demostró dominio amplio de los hechos y temas clave del caso."
        };
    }

    function agregarAnalisisGraficas(evaluacion, resultado) {
        const contradicciones = numeroGuardado("evidenciasFinal") || 0;
        const cobertura = Math.round(evaluacion.cobertura * 100);
        const redaccion = Math.round(evaluacion.calidadRedaccion * 100);
        const nivelRiesgo = evaluacion.puntos >= 40 ? "bajo" : evaluacion.puntos >= 20 ? "moderado" : "alto";
        const tendencia = evaluacion.correctas > 0
            ? "La sesión produjo hallazgos verificables, aunque su valor depende de que se hayan cubierto líneas distintas y no preguntas repetidas."
            : "La sesión no produjo hallazgos verificables del expediente; la actividad registrada no se tradujo en conocimiento demostrable del caso.";
        const analisis = {
            "chart-rendimiento": {
                titulo: "Análisis del rendimiento por etapa",
                texto: `La gráfica muestra cómo evolucionó el desempeño durante las diferentes etapas de la entrevista. El resultado consolidado fue de ${evaluacion.puntos}/50, con ${evaluacion.correctas} temas correctamente identificados. ${tendencia}`,
                impacto: `Una curva ascendente indica que el entrevistador ajustó progresivamente su estrategia; una curva plana o descendente refleja repetición, pérdida de foco o preguntas sin conexión suficiente con el expediente. El riesgo operativo asociado a este resultado es ${nivelRiesgo}.`,
                recomendacion: "Preparar antes de la sesión una secuencia que avance desde contexto general hacia fechas, personas, lugares, documentos, evidencias y contradicciones."
            },
            "chart-indicadores": {
                titulo: "Análisis de indicadores principales",
                texto: `Este comparativo integra conocimiento del caso, calidad de formulación, volumen de preguntas y consistencia. Se formularon ${evaluacion.totalPreguntas} preguntas; ${evaluacion.contextuales} tuvieron contexto y ${evaluacion.bienRedactadas} cumplieron criterios básicos de claridad y redacción.`,
                impacto: `La diferencia entre actividad y efectividad permite identificar si el volumen de preguntas generó información útil. Una cantidad alta con pocos aciertos representa esfuerzo sin enfoque; pocos interrogantes con alta precisión muestran eficiencia, pero pueden dejar áreas importantes sin explorar.`,
                recomendacion: "Priorizar preguntas específicas y verificables. Cada interrogante debe buscar confirmar un dato, ampliar una línea investigativa o contrastar una inconsistencia."
            },
            "chart-distribucion": {
                titulo: "Análisis de la distribución del resultado",
                texto: `La distribución separa los componentes que aportaron al resultado final. El conocimiento del expediente representó la mayor parte de la nota, mientras que saludo, ortografía y redacción funcionaron como criterios de calidad profesional. La cobertura real alcanzó ${cobertura} %.`,
                impacto: `Cuando predomina la forma sobre el conocimiento, la entrevista puede parecer ordenada sin producir información sustancial. Cuando predomina el conocimiento con mala redacción, aumenta el riesgo de preguntas ambiguas, respuestas evasivas y conclusiones difíciles de sustentar.`,
                recomendacion: "Equilibrar precisión técnica y comunicación: redactar una sola idea por pregunta, usar signos de interrogación y vincularla explícitamente con un hecho del caso."
            },
            "chart-evolucion": {
                titulo: "Análisis de la evolución de la entrevista",
                texto: `La evolución permite observar si las preguntas posteriores aprovecharon las respuestas anteriores. Se registraron ${contradicciones} contradicciones o evidencias y una cobertura de ${cobertura} % de los temas evaluables.`,
                impacto: `Una evolución estable y ascendente evidencia escucha activa y profundización. Variaciones bruscas suelen indicar cambios de tema sin cierre, confrontación prematura o falta de repreguntas. Esto reduce la posibilidad de convertir información aislada en una línea investigativa sólida.`,
                recomendacion: "Después de cada respuesta relevante, realizar una repregunta sobre quién, cuándo, dónde, cómo y con qué soporte puede verificarse la afirmación."
            },
            "chart-pulso": {
                titulo: "Análisis del pulso SAE",
                texto: `El pulso resume el control general de la entrevista combinando resultado, consistencia, preguntas útiles y manejo de contradicciones. La clasificación obtenida fue ${resultado.nivel}, con un nivel de riesgo ${nivelRiesgo}.`,
                impacto: `Un pulso alto refleja conducción estructurada y capacidad para mantener el objetivo investigativo. Un valor bajo señala que el entrevistado pudo controlar el ritmo, desviar temas o responder sin que sus afirmaciones fueran verificadas.`,
                recomendacion: "Definir objetivos por bloques y cerrar cada bloque con una confirmación concreta antes de pasar al siguiente tema."
            },
            "chart-cobertura": {
                titulo: "Análisis de cobertura del expediente",
                texto: `La cobertura compara las dimensiones evaluadas: conocimiento, redacción, profundidad, consistencia y exploración. El entrevistador descubrió ${evaluacion.correctas} de ${evaluacion.totalCaso} temas evaluables, equivalente al ${cobertura} %.`,
                impacto: `Las áreas cortas del perfil representan vacíos que pueden afectar la integridad de la conclusión. Una entrevista no se considera completa solo por alcanzar una buena redacción; debe cubrir actores, cronología, lugares, operaciones, soportes documentales y posibles contradicciones.`,
                recomendacion: "Usar una lista de control del expediente y marcar cada tema únicamente cuando se haya obtenido una respuesta concreta y susceptible de verificación."
            },
            "chart-matriz": {
                titulo: "Análisis de la matriz de consistencia",
                texto: `La matriz identifica concentración y dispersión del desempeño durante la sesión. La calidad de redacción fue del ${redaccion} % y se detectaron ${contradicciones} elementos de contraste.`,
                impacto: `Zonas fuertes concentradas en pocos momentos indican resultados puntuales, pero no necesariamente una técnica sostenida. Una distribución uniforme sugiere mayor control metodológico. Los espacios débiles revelan momentos donde faltó contexto, precisión o seguimiento.`,
                recomendacion: "Mantener el mismo estándar de claridad durante toda la entrevista y documentar inmediatamente cada respuesta que requiera contraste posterior."
            },
            "chart-balance": {
                titulo: "Análisis del balance final",
                texto: `El balance contrasta logros, oportunidades de mejora y factores de riesgo. La sesión terminó con ${evaluacion.puntos}/50, ${evaluacion.contextuales} preguntas contextualizadas y ${evaluacion.correctas} hallazgos únicos del caso.`,
                impacto: `El resultado ${resultado.nivel.toLowerCase()} indica que la decisión final debe sustentarse principalmente en los hallazgos verificables y no en el número total de preguntas. Las brechas de cobertura constituyen información pendiente, no hechos descartados.`,
                recomendacion: "Planificar una sesión complementaria enfocada exclusivamente en los temas no cubiertos y validar cada nueva respuesta contra la evidencia disponible."
            }
        };

        Object.keys(analisis).forEach((id) => {
            const grafica = document.getElementById(id);
            const tarjeta = grafica?.closest(".report-chart-card");
            if (!tarjeta || tarjeta.querySelector(".analisis-grafica-pdf")) return;
            const dato = analisis[id];
            tarjeta.insertAdjacentHTML("beforeend", `
                <section class="analisis-grafica-pdf">
                    <h4>${dato.titulo}</h4>
                    <p><strong>Hallazgo:</strong> ${dato.texto}</p>
                    <p><strong>Interpretación ejecutiva:</strong> ${dato.impacto}</p>
                    <p><strong>Acción recomendada:</strong> ${dato.recomendacion}</p>
                </section>`);
        });

        const dashboard = document.querySelector(".report-dashboard");
        if (!dashboard || document.querySelector(".informe-ejecutivo-pdf")) return;
        dashboard.insertAdjacentHTML("beforebegin", `
            <section class="informe-ejecutivo-pdf solo-pdf">
                <h2>Informe ejecutivo de evaluación</h2>
                <p><strong>Objetivo:</strong> evaluar la capacidad del entrevistador para comprender el expediente, formular preguntas profesionales y obtener información verificable.</p>
                <p><strong>Resultado general:</strong> ${resultado.nivel}, con ${evaluacion.puntos}/50 puntos. La cobertura del caso fue ${cobertura} %, la calidad de redacción ${redaccion} % y se registraron ${contradicciones} elementos de evidencia o contradicción.</p>
                <p><strong>Criterio de lectura:</strong> las gráficas siguientes deben interpretarse conjuntamente. Ningún indicador aislado sustituye la revisión de las preguntas, las respuestas obtenidas y su relación con los hechos del expediente.</p>
            </section>`);
        dashboard.insertAdjacentHTML("afterend", `
            <section class="conclusion-ejecutiva-pdf solo-pdf">
                <h2>Conclusión y concepto ejecutivo</h2>
                <p>El desempeño se clasifica como <strong>${resultado.nivel}</strong>. ${resultado.detalle}</p>
                <p>La principal conclusión es que el entrevistador cubrió ${cobertura} % del contenido evaluable. El resultado debe entenderse como una medición de conocimiento aplicado: no premia únicamente la cantidad de preguntas, sino su capacidad para producir información concreta, pertinente y verificable.</p>
                <p><strong>Prioridad de mejora:</strong> ${resultado.clase === "excelente" ? "mantener el estándar y fortalecer la síntesis de hallazgos" : resultado.clase === "bueno" ? "cerrar los temas no abordados y profundizar las contradicciones" : resultado.clase === "regular" ? "mejorar redacción, precisión y conexión con los datos del expediente" : "iniciar la entrevista, construir contexto y formular preguntas básicas relacionadas con el caso"}.</p>
            </section>`);
    }

    function mostrarClasificacion() {
        const estado = document.getElementById("estado-mision");
        if (!estado || document.getElementById("clasificacion-entrevista")) return;

        const evaluacion = evaluarEntrevista();
        const resultado = clasificar(evaluacion);
        const iconos = { deficiente: "!", regular: "◆", bueno: "✓", excelente: "★" };
        const panel = document.createElement("section");

        panel.id = "clasificacion-entrevista";
        panel.className = `clasificacion-entrevista clasificacion-entrevista--${resultado.clase}`;
        panel.setAttribute("aria-label", "Calificación general de la entrevista");
        panel.style.setProperty("--progreso", `${evaluacion.porcentaje}%`);
        panel.innerHTML = `
            <div class="clasificacion-entrevista__cabecera">
                <div class="clasificacion-entrevista__icono" aria-hidden="true">${iconos[resultado.clase]}</div>
                <div class="clasificacion-entrevista__contenido">
                    <div class="clasificacion-entrevista__titulo">Resultado de la entrevista</div>
                    <div class="clasificacion-entrevista__nivel">${resultado.nivel}</div>
                    <p class="clasificacion-entrevista__detalle">${resultado.detalle}</p>
                </div>
                <div class="clasificacion-entrevista__nota">
                    <span class="clasificacion-entrevista__numero">${evaluacion.puntos}/50</span>
                    <span class="clasificacion-entrevista__escala">Calificación</span>
                </div>
            </div>
            <div class="clasificacion-entrevista__progreso" aria-hidden="true"><div class="clasificacion-entrevista__barra"></div></div>
            <div class="clasificacion-entrevista__pie"><span>Evaluación total</span><strong>${evaluacion.porcentaje} %</strong></div>`;
        estado.parentNode.insertBefore(panel, estado);

        const resumen = document.createElement("section");
        resumen.className = "resumen-evaluacion";
        resumen.setAttribute("aria-label", "Explicación de la evaluación");
        resumen.innerHTML = `
            <h2>¿Qué significa este resultado?</h2>
            <dl class="resumen-evaluacion__lista">
                <div class="resumen-evaluacion__fila"><dt>Qué se calificó</dt><dd>Conocimiento del caso (45 puntos), ortografía y redacción (4 puntos) y saludo (1 punto).</dd></div>
                <div class="resumen-evaluacion__fila"><dt>Participación</dt><dd>Formuló ${evaluacion.totalPreguntas} preguntas; ${evaluacion.contextuales} tuvieron contexto del caso. Saludo: ${evaluacion.saludo ? "sí" : "no"}.</dd></div>
                <div class="resumen-evaluacion__fila"><dt>Redacción</dt><dd>${evaluacion.bienRedactadas} de ${evaluacion.totalPreguntas} preguntas fueron claras y estuvieron correctamente formuladas (${Math.round(evaluacion.calidadRedaccion * 100)} %).</dd></div>
                <div class="resumen-evaluacion__fila"><dt>Conocimiento</dt><dd>Descubrió ${evaluacion.correctas} de ${evaluacion.totalCaso} temas evaluables del expediente (${Math.round(evaluacion.cobertura * 100)} %).</dd></div>
                <div class="resumen-evaluacion__fila"><dt>Interpretación</dt><dd>${resultado.detalle}</dd></div>
                <div class="resumen-evaluacion__fila"><dt>Cómo mejorar</dt><dd>${resultado.clase === "deficiente"
                    ? "Inicie con un saludo y formule preguntas relacionadas con los datos del expediente."
                    : resultado.clase === "regular"
                        ? "Revise la escritura, use signos de interrogación y redacte preguntas completas, claras y relacionadas con el caso."
                        : resultado.clase === "bueno"
                            ? "Profundice en fechas, personas, lugares, evidencias y contradicciones que todavía no abordó."
                            : "Mantenga la claridad y la cobertura completa de los temas del expediente."}</dd></div>
            </dl>`;
        estado.parentNode.insertBefore(resumen, estado.nextSibling);
        agregarAnalisisGraficas(evaluacion, resultado);
    }

    window.SAEGenerarInformePDF = function () {
        const tituloAnterior = document.title;
        document.title = `Informe_SAE_${new Date().toISOString().slice(0, 10)}`;
        document.body.classList.add("sae-generando-pdf");
        window.setTimeout(function () {
            window.print();
            window.setTimeout(function () {
                document.body.classList.remove("sae-generando-pdf");
                document.title = tituloAnterior;
            }, 500);
        }, 100);
    };

    window.addEventListener("DOMContentLoaded", mostrarClasificacion);
}());
