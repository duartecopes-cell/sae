// =====================================================
// SAE - Auditoria de uso
// =====================================================
// Este modulo funciona en navegador. La app es estatica, por eso el registro
// se conserva en localStorage y puede descargarse como JSON desde la interfaz.

(function () {
    "use strict";

    const STORAGE_KEY = "sae_auditoria_registros";
    const CURRENT_KEY = "sae_auditoria_sesion_actual";
    const LAST_KEY = "sae_ultima_auditoria";
    const VERSION = "1.0.0";
    let memoriaRegistros = [];
    let memoriaActual = null;

    function ahoraISO() {
        return new Date().toISOString();
    }

    function ahoraLocal() {
        return new Date().toLocaleString("es-CO");
    }

    function crearId() {
        if (window.crypto && typeof window.crypto.randomUUID === "function") {
            return window.crypto.randomUUID();
        }
        return "audit-" + Date.now() + "-" + Math.random().toString(36).slice(2, 10);
    }

    function leerJSON(clave, respaldo) {
        try {
            const valor = localStorage.getItem(clave);
            return valor ? JSON.parse(valor) : respaldo;
        } catch (error) {
            console.warn("Auditoria SAE: no se pudo leer localStorage", error);
            return respaldo;
        }
    }

    function guardarJSON(clave, valor) {
        try {
            localStorage.setItem(clave, JSON.stringify(valor));
            return true;
        } catch (error) {
            console.warn("Auditoria SAE: no se pudo guardar localStorage", error);
            return false;
        }
    }

    function obtenerRegistros() {
        const registros = leerJSON(STORAGE_KEY, memoriaRegistros);
        return Array.isArray(registros) ? registros : [];
    }

    function guardarRegistros(registros) {
        memoriaRegistros = registros;
        guardarJSON(STORAGE_KEY, registros);
    }

    function obtenerSesionActual() {
        return leerJSON(CURRENT_KEY, memoriaActual);
    }

    function guardarSesionActual(sesion) {
        memoriaActual = sesion;
        guardarJSON(CURRENT_KEY, sesion);
    }

    function limpiarTexto(valor) {
        return typeof valor === "string" ? valor.trim() : "";
    }

    function normalizarCaso(caso) {
        if (!caso || typeof caso !== "object") {
            return {
                id: "sin_caso",
                titulo: "Caso no identificado",
                personaje: "No identificado",
                delito: "No identificado"
            };
        }

        return {
            id: caso.id || caso.casoId || "sin_caso",
            titulo: caso.titulo || caso.nombre || caso.personaje || "Caso sin titulo",
            personaje: caso.personaje || caso.nombre || "No identificado",
            alias: caso.alias || "",
            delito: caso.delito || "No identificado"
        };
    }

    function upsertRegistro(registro) {
        const registros = obtenerRegistros();
        const indice = registros.findIndex((item) => item.id === registro.id);
        if (indice >= 0) {
            registros[indice] = registro;
        } else {
            registros.push(registro);
        }
        guardarRegistros(registros);
    }

    function crearSesion(opciones) {
        const config = opciones || {};
        const fechaISO = ahoraISO();
        const registro = {
            id: crearId(),
            version: VERSION,
            fechaHoraUso: fechaISO,
            fechaHoraUsoLocal: ahoraLocal(),
            fechaHoraCierre: null,
            nivelUtilizado: limpiarTexto(config.nivel) || "No definido",
            casoSeleccionado: normalizarCaso(config.caso),
            investigador: limpiarTexto(config.investigador) || "No identificado",
            conversacion: [],
            preguntasRealizadas: [],
            respuestasGeneradas: [],
            calificacionObtenida: null,
            criteriosCalificacion: [],
            observacionesProceso: [],
            estadoFinalEntrevista: "EN_PROGRESO",
            metricas: config.metricas || {},
            origen: "SAE navegador"
        };

        guardarSesionActual(registro);
        upsertRegistro(registro);
        return registro;
    }

    function registrarInteraccion(datos) {
        const entrada = datos || {};
        let sesion = obtenerSesionActual();

        if (!sesion) {
            sesion = crearSesion({ nivel: entrada.nivel || "No definido", caso: entrada.caso });
        }

        const interaccion = {
            fechaHora: ahoraISO(),
            fechaHoraLocal: ahoraLocal(),
            pregunta: limpiarTexto(entrada.pregunta),
            respuesta: limpiarTexto(entrada.respuesta),
            correcta: Boolean(entrada.correcta),
            puntaje: Number(entrada.puntaje || 0),
            recomendacion: limpiarTexto(entrada.recomendacion),
            criterio: entrada.criterio || entrada.evaluacion || null,
            claveDetectada: entrada.clave || ""
        };

        if (!Array.isArray(sesion.conversacion)) {
            sesion.conversacion = [];
        }

        if (interaccion.pregunta) {
            sesion.conversacion.push({
                participante: "Investigador",
                mensaje: interaccion.pregunta
            });
        }

        if (interaccion.respuesta) {
            sesion.conversacion.push({
                participante: "Entrevistado",
                mensaje: interaccion.respuesta
            });
        }

        sesion.preguntasRealizadas.push(interaccion);
        sesion.respuestasGeneradas.push({
            fechaHora: interaccion.fechaHora,
            respuesta: interaccion.respuesta
        });

        if (interaccion.criterio) {
            sesion.criteriosCalificacion.push(interaccion.criterio);
        }

        sesion.estadoFinalEntrevista = entrada.estadoFinal || sesion.estadoFinalEntrevista || "EN_PROGRESO";
        guardarSesionActual(sesion);
        upsertRegistro(sesion);
        return sesion;
    }

    function agregarObservacion(observacion) {
        const texto = limpiarTexto(observacion);
        if (!texto) return obtenerSesionActual();

        const sesion = obtenerSesionActual();
        if (!sesion) return null;

        sesion.observacionesProceso.push({
            fechaHora: ahoraISO(),
            fechaHoraLocal: ahoraLocal(),
            texto
        });
        guardarSesionActual(sesion);
        upsertRegistro(sesion);
        return sesion;
    }

    function cerrarSesion(datos) {
        const cierre = datos || {};
        let sesion = obtenerSesionActual();

        if (!sesion) {
            sesion = crearSesion({
                nivel: cierre.nivel || "No definido",
                caso: cierre.caso || null,
                investigador: cierre.investigador || ""
            });
        }

        sesion.fechaHoraCierre = ahoraISO();
        sesion.fechaHoraCierreLocal = ahoraLocal();
        sesion.calificacionObtenida = cierre.calificacion ?? sesion.calificacionObtenida;
        sesion.estadoFinalEntrevista = cierre.estadoFinal || cierre.estado || sesion.estadoFinalEntrevista || "FINALIZADA";
        sesion.metricas = Object.assign({}, sesion.metricas || {}, cierre.metricas || {});

        if (cierre.observaciones) {
            const observaciones = Array.isArray(cierre.observaciones) ? cierre.observaciones : [cierre.observaciones];
            observaciones.forEach((item) => {
                const texto = limpiarTexto(item);
                if (texto) {
                    sesion.observacionesProceso.push({
                        fechaHora: ahoraISO(),
                        fechaHoraLocal: ahoraLocal(),
                        texto
                    });
                }
            });
        }

        guardarSesionActual(sesion);
        upsertRegistro(sesion);
        guardarJSON(LAST_KEY, sesion);
        return sesion;
    }

    function descargarJSON(nombreArchivo, contenido) {
        const enlace = document.createElement("a");
        const blob = new Blob([JSON.stringify(contenido, null, 2)], { type: "application/json;charset=utf-8" });
        enlace.href = URL.createObjectURL(blob);
        enlace.download = nombreArchivo;
        enlace.style.display = "none";
        document.body.appendChild(enlace);
        enlace.click();
        URL.revokeObjectURL(enlace.href);
        document.body.removeChild(enlace);
    }

    function obtenerConversacion(registro) {
        if (!registro || typeof registro !== "object") return [];

        if (Array.isArray(registro.conversacion) && registro.conversacion.length > 0) {
            return registro.conversacion
                .map((mensaje) => ({
                    participante: limpiarTexto(mensaje.participante) || "Participante",
                    mensaje: limpiarTexto(mensaje.mensaje)
                }))
                .filter((mensaje) => mensaje.mensaje);
        }

        const preguntas = Array.isArray(registro.preguntasRealizadas) ? registro.preguntasRealizadas : [];
        const conversacion = [];

        preguntas.forEach((item) => {
            const pregunta = limpiarTexto(item && item.pregunta);
            const respuesta = limpiarTexto(item && item.respuesta);

            if (pregunta) {
                conversacion.push({
                    participante: "Investigador",
                    mensaje: pregunta
                });
            }

            if (respuesta) {
                conversacion.push({
                    participante: "Entrevistado",
                    mensaje: respuesta
                });
            }
        });

        return conversacion;
    }

    function prepararAuditoriaSoloConversacion(registros) {
        const lista = Array.isArray(registros) ? registros : [];
        return {
            conversaciones: lista
                .map((registro) => ({
                    conversacion: obtenerConversacion(registro)
                }))
                .filter((registro) => registro.conversacion.length > 0)
        };
    }

    function descargarAuditorias() {
        descargarJSON("auditoria_sae_conversacion.json", prepararAuditoriaSoloConversacion(obtenerRegistros()));
    }

    function descargarUltimaAuditoria() {
        const ultima = leerJSON(LAST_KEY, obtenerSesionActual());
        descargarJSON("auditoria_sae_ultima_conversacion.json", prepararAuditoriaSoloConversacion(ultima ? [ultima] : []));
    }

    function limpiarSesionPreservandoAuditoria() {
        const registros = obtenerRegistros();
        const actual = obtenerSesionActual();
        const ultima = leerJSON(LAST_KEY, null);
        const tema = localStorage.getItem("sae-theme");

        try {
            localStorage.clear();
            guardarJSON(STORAGE_KEY, registros);
            if (actual) guardarJSON(CURRENT_KEY, actual);
            if (ultima) guardarJSON(LAST_KEY, ultima);
            if (tema) localStorage.setItem("sae-theme", tema);
        } catch (error) {
            console.warn("Auditoria SAE: no se pudo limpiar la sesion preservando auditoria", error);
        }
    }

    window.SAEAuditoria = {
        crearSesion,
        registrarInteraccion,
        agregarObservacion,
        cerrarSesion,
        obtenerRegistros,
        obtenerSesionActual,
        descargarAuditorias,
        descargarUltimaAuditoria,
        limpiarSesionPreservandoAuditoria
    };
})();
