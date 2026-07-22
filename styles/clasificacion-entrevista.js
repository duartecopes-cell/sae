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

    function escaparHtml(valor) {
        return String(valor ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
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

    function agregarInformeEstrategico(evaluacion, resultado) {
        const dashboard = document.querySelector(".report-dashboard");
        if (!dashboard || document.querySelector(".portada-informe-pdf")) return;

        const cobertura = Math.round(evaluacion.cobertura * 100);
        const redaccion = Math.round(evaluacion.calidadRedaccion * 100);
        const contradicciones = numeroGuardado("evidenciasFinal") || 0;
        const eficiencia = evaluacion.totalPreguntas
            ? Math.min(100, Math.round((evaluacion.correctas / evaluacion.totalPreguntas) * 100))
            : 0;
        const brecha = Math.max(0, 100 - cobertura);
        const investigador = localStorage.getItem("nombreUsuario") || localStorage.getItem("nombreInvestigador") || "No registrado";
        const caso = localStorage.getItem("nombreSospechoso") || localStorage.getItem("casoSeleccionado") || "Caso evaluado";
        const ruta = window.location.pathname.toLowerCase();
        const nivel = ruta.includes("experto") ? "Experto" : ruta.includes("avanzado") ? "Avanzado" : "Básico";
        const fecha = new Intl.DateTimeFormat("es-CO", { dateStyle: "long", timeStyle: "short" }).format(new Date());
        const registrosInforme = leerPreguntas();
        const trazabilidadInforme = registrosInforme.length
            ? registrosInforme.map((registro, indice) => {
                const detalleRegistro = registro.evaluacion || {};
                const relacionada = Boolean(registro.correcta || registro.parcial || detalleRegistro.correcta || detalleRegistro.criterios?.relacionCaso || registro.tipo === "alta_valor" || registro.tipo === "exploratoria");
                const estadoRegistro = registro.correcta || detalleRegistro.correcta
                    ? "Hallazgo identificado"
                    : registro.parcial ? "Aporte parcial" : relacionada ? "Pregunta contextual sin hallazgo concluyente" : "Pregunta sin conexión suficiente con el caso";
                const recomendacionRegistro = detalleRegistro.recomendacion || registro.recomendacion || (relacionada
                    ? "Profundizar y solicitar fechas, personas, lugares o soportes verificables."
                    : "Reformular usando información concreta del expediente y un objetivo definido.");
                return `<article class="trazabilidad-pdf__item">
                    <div class="trazabilidad-pdf__numero">${indice + 1}</div>
                    <div><h3>Pregunta del investigador</h3><p>${escaparHtml(registro.pregunta || "Sin texto registrado")}</p>
                    <h3>Respuesta obtenida</h3><p>${escaparHtml(registro.respuesta || "No se registró una respuesta")}</p>
                    <p class="trazabilidad-pdf__estado"><strong>Valoración:</strong> ${escaparHtml(estadoRegistro)}${registro.tema || registro.clave ? ` · <strong>Tema:</strong> ${escaparHtml(registro.tema || registro.clave)}` : ""}</p>
                    <p><strong>Recomendación técnica:</strong> ${escaparHtml(recomendacionRegistro)}</p></div>
                </article>`;
            }).join("")
            : `<p>No se encontraron preguntas almacenadas para construir la trazabilidad.</p>`;
        const fundamentoNota = resultado.clase === "excelente"
            ? "La calificación se sustenta en una cobertura amplia del expediente, formulación clara y obtención consistente de información útil."
            : resultado.clase === "bueno"
                ? "La calificación reconoce una comprensión importante del caso, aunque permanecen líneas investigativas y contradicciones sin cierre suficiente."
                : resultado.clase === "regular"
                    ? "La calificación refleja participación efectiva, pero evidencia limitaciones de redacción, precisión o cobertura que reducen el valor verificable de las respuestas."
                    : "La calificación obedece a la ausencia de preguntas útiles, falta de contextualización o información insuficiente para demostrar conocimiento del caso.";
        const concepto = resultado.clase === "excelente"
            ? "La actuación evidencia dominio integral del expediente, formulación profesional y capacidad consistente para convertir respuestas en información verificable."
            : resultado.clase === "bueno"
                ? "La actuación presenta una base investigativa sólida, aunque conserva líneas relevantes sin cierre y requiere mayor profundización antes de emitir conclusiones definitivas."
                : resultado.clase === "regular"
                    ? "La actuación permitió obtener información parcial, pero las brechas de redacción, precisión o cobertura limitan su utilidad estratégica y exigen una sesión complementaria."
                    : "La sesión no produjo elementos suficientes para sustentar conocimiento del caso; se requiere reiniciar la entrevista con objetivos, contexto y preguntas claramente definidos.";

        dashboard.insertAdjacentHTML("beforebegin", `
            <section class="portada-informe-pdf solo-pdf">
                <div class="portada-informe-pdf__marca">SAE</div>
                <p class="portada-informe-pdf__clasificacion">INFORME EJECUTIVO DE EVALUACIÓN</p>
                <h1>Análisis estratégico de entrevista</h1>
                <p class="portada-informe-pdf__bajada">Evaluación de competencias para la obtención, contrastación y análisis de información de fuentes humanas.</p>
                <dl class="portada-informe-pdf__datos">
                    <div><dt>Investigador evaluado</dt><dd>${investigador}</dd></div>
                    <div><dt>Nivel</dt><dd>${nivel}</dd></div>
                    <div><dt>Caso o fuente</dt><dd>${caso}</dd></div>
                    <div><dt>Fecha de emisión</dt><dd>${fecha}</dd></div>
                    <div><dt>Resultado</dt><dd>${resultado.nivel} · ${evaluacion.puntos}/50</dd></div>
                </dl>
                <p class="portada-informe-pdf__nota">Documento generado por el Sistema Avanzado de Entrevistas. Debe leerse junto con las preguntas, respuestas y evidencias registradas durante la sesión.</p>
            </section>
            <section class="diagnostico-estrategico-pdf solo-pdf">
                <h2>Resumen y diagnóstico estratégico</h2>
                <p class="diagnostico-estrategico-pdf__concepto"><strong>Concepto ejecutivo:</strong> ${concepto}</p>
                <div class="informe-kpis">
                    <div><strong>${evaluacion.puntos}/50</strong><span>Resultado global</span></div>
                    <div><strong>${cobertura} %</strong><span>Cobertura del caso</span></div>
                    <div><strong>${redaccion} %</strong><span>Calidad de redacción</span></div>
                    <div><strong>${eficiencia} %</strong><span>Eficiencia investigativa</span></div>
                </div>
                <h3>Alcance y metodología</h3>
                <p>El análisis integra ${evaluacion.totalPreguntas} preguntas; ${evaluacion.contextuales} estuvieron relacionadas con el expediente y ${evaluacion.bienRedactadas} cumplieron criterios básicos de formulación. La cobertura compara ${evaluacion.correctas} hallazgos únicos contra ${evaluacion.totalCaso} temas evaluables, evitando premiar preguntas repetidas.</p>
                <h3>Hallazgo estratégico principal</h3>
                <p>La entrevista alcanzó una cobertura del ${cobertura} % y dejó una brecha del ${brecha} %. Se registraron ${contradicciones} evidencias o inconsistencias para contraste. Por tanto, el volumen de actividad debe interpretarse según la pertinencia, profundidad y posibilidad real de verificar cada respuesta.</p>
                <div class="criterio-lectura-pdf"><strong>Cómo leer las gráficas:</strong> cada visualización presenta una dimensión distinta. Debajo de cada gráfica se incluye su lectura, la implicación estratégica del comportamiento observado y la acción recomendada. Ningún indicador aislado sustituye la revisión de la conversación.</div>
            </section>`);

        dashboard.insertAdjacentHTML("afterend", `
            <section class="plan-estrategico-pdf solo-pdf">
                <h2>Plan de mejora priorizado</h2>
                <ol>
                    <li><strong>Preparación:</strong> convertir la brecha del ${brecha} % en objetivos verificables y ordenar la entrevista por actores, cronología, lugares, evidencias y contradicciones.</li>
                    <li><strong>Ejecución:</strong> formular una idea por pregunta y profundizar con quién, cuándo, dónde, cómo y qué soporte permite corroborar la respuesta.</li>
                    <li><strong>Control:</strong> cerrar cada bloque con una síntesis, registrar inconsistencias y no avanzar mientras existan respuestas ambiguas o sin fuente de verificación.</li>
                    <li><strong>Seguimiento:</strong> realizar una sesión complementaria sobre los temas pendientes y separar hechos confirmados, hipótesis e información por validar.</li>
                </ol>
                <p><strong>Concepto final:</strong> ${concepto} La información obtenida debe utilizarse de acuerdo con su nivel de corroboración y no como conclusión definitiva cuando existan vacíos o contradicciones pendientes.</p>
            </section>`);
        dashboard.insertAdjacentHTML("afterend", `
            <section class="dictamen-evaluacion-pdf solo-pdf">
                <h2>Dictamen técnico de la calificación</h2>
                <p><strong>Calificación otorgada:</strong> ${resultado.nivel} — ${evaluacion.puntos}/50 puntos (${evaluacion.porcentaje} %).</p>
                <p><strong>Fundamento:</strong> ${fundamentoNota}</p>
                <table><thead><tr><th>Criterio</th><th>Resultado</th><th>Interpretación profesional</th></tr></thead><tbody>
                    <tr><td>Conocimiento del caso</td><td>${evaluacion.correctas}/${evaluacion.totalCaso} temas</td><td>${cobertura} % de cobertura verificable.</td></tr>
                    <tr><td>Contextualización</td><td>${evaluacion.contextuales}/${evaluacion.totalPreguntas}</td><td>Conexión con personas, lugares, fechas, documentos y hechos concretos.</td></tr>
                    <tr><td>Ortografía y redacción</td><td>${evaluacion.bienRedactadas}/${evaluacion.totalPreguntas}</td><td>${redaccion} % de formulación clara y completa.</td></tr>
                    <tr><td>Protocolo de apertura</td><td>${evaluacion.saludo ? "Cumplido" : "No cumplido"}</td><td>${evaluacion.saludo ? "Se estableció una apertura básica." : "No se identificó saludo en el registro."}</td></tr>
                    <tr><td>Evidencias y contradicciones</td><td>${contradicciones}</td><td>Elementos disponibles para validación o seguimiento.</td></tr>
                </tbody></table>
                <h3>Decisión evaluativa</h3><p>${resultado.detalle} La nota prioriza la información concreta obtenida, su relación con el expediente y la calidad técnica de las preguntas.</p>
            </section>
            <section class="trazabilidad-pdf solo-pdf">
                <h2>Anexo de trazabilidad de la entrevista</h2>
                <p class="trazabilidad-pdf__introduccion">Secuencia completa utilizada para sustentar la evaluación. Cada registro presenta la pregunta, la respuesta, su valoración y la acción técnica recomendada.</p>
                ${trazabilidadInforme}
            </section>
            <section class="cierre-informe-pdf solo-pdf">
                <h2>Cierre y uso del informe</h2>
                <p>Este documento constituye una evaluación formativa. Sus resultados orientan el fortalecimiento de competencias y deben contrastarse con el expediente, los soportes disponibles y la trazabilidad de la sesión.</p>
                <div class="cierre-informe-pdf__firmas"><div><span>Evaluado</span><strong>${escaparHtml(investigador)}</strong></div><div><span>Emisión del sistema</span><strong>${escaparHtml(fecha)}</strong></div></div>
                <p class="cierre-informe-pdf__codigo">SAE · Informe generado automáticamente · ${resultado.nivel} · ${evaluacion.puntos}/50</p>
            </section>`);
    }

    function agregarAnalisisGraficas(evaluacion, resultado) {
        agregarInformeEstrategico(evaluacion, resultado);
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
