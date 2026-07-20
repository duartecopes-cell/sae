(function () {
    "use strict";

    function numeroGuardado(clave) {
        const valor = Number(localStorage.getItem(clave));
        return Number.isFinite(valor) ? valor : null;
    }

    function obtenerPorcentaje() {
        const correctas = numeroGuardado("respuestasCorrectas");
        const total = numeroGuardado("totalRespuestasDelCaso");

        if (correctas !== null && total !== null && total > 0) {
            return Math.max(0, Math.min(100, (correctas / total) * 100));
        }

        const calificacion = numeroGuardado("calificacionFinal");
        if (calificacion !== null) return Math.max(0, Math.min(100, calificacion));

        const credibilidad = numeroGuardado("credibilidadFinal");
        return Math.max(0, Math.min(100, credibilidad || 0));
    }

    function clasificar(porcentaje) {
        if (porcentaje <= 0) {
            return {
                nivel: "DEFICIENTE",
                clase: "deficiente",
                detalle: "No logró ni siquiera iniciar con un saludo ni obtener información del caso."
            };
        }
        if (porcentaje < 40) {
            return {
                nivel: "REGULAR",
                clase: "regular",
                detalle: "Obtuvo información del caso, pero todavía debe profundizar en los hechos clave."
            };
        }
        if (porcentaje < 100) {
            return {
                nivel: "BUENO",
                clase: "bueno",
                detalle: "Obtuvo al menos el 40 % de la información del caso."
            };
        }
        return {
            nivel: "EXCELENTE",
            clase: "excelente",
            detalle: "Superó todas las preguntas del caso y alcanzó la calificación máxima."
        };
    }

    function mostrarClasificacion() {
        const estado = document.getElementById("estado-mision");
        if (!estado || document.getElementById("clasificacion-entrevista")) return;

        const porcentaje = obtenerPorcentaje();
        const puntos = Math.round(porcentaje / 2);
        const resultado = clasificar(porcentaje);
        const iconos = {
            deficiente: "!",
            regular: "◆",
            bueno: "✓",
            excelente: "★"
        };
        const panel = document.createElement("section");

        panel.id = "clasificacion-entrevista";
        panel.className = `clasificacion-entrevista clasificacion-entrevista--${resultado.clase}`;
        panel.setAttribute("aria-label", "Calificación general de la entrevista");
        panel.style.setProperty("--progreso", `${porcentaje}%`);
        panel.innerHTML = `
            <div class="clasificacion-entrevista__cabecera">
                <div class="clasificacion-entrevista__icono" aria-hidden="true">${iconos[resultado.clase]}</div>
                <div class="clasificacion-entrevista__contenido">
                    <div class="clasificacion-entrevista__titulo">Resultado de la entrevista</div>
                    <div class="clasificacion-entrevista__nivel">${resultado.nivel}</div>
                    <p class="clasificacion-entrevista__detalle">${resultado.detalle}</p>
                </div>
                <div class="clasificacion-entrevista__nota">
                    <span class="clasificacion-entrevista__numero">${puntos}/50</span>
                    <span class="clasificacion-entrevista__escala">Calificación</span>
                </div>
            </div>
            <div class="clasificacion-entrevista__progreso" aria-hidden="true">
                <div class="clasificacion-entrevista__barra"></div>
            </div>
            <div class="clasificacion-entrevista__pie">
                <span>Información obtenida</span>
                <strong>${Math.round(porcentaje)} %</strong>
            </div>`;

        estado.parentNode.insertBefore(panel, estado);
    }

    window.addEventListener("DOMContentLoaded", mostrarClasificacion);
}());
