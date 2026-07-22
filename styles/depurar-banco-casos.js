(function () {
    "use strict";

    function normalizar(texto) {
        return String(texto || "").toLowerCase().normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ")
            .replace(/\s+/g, " ").trim();
    }

    /* Respuestas que fueron copiadas de forma idéntica en casi todos los casos
       y que introducen hechos inexistentes en el expediente activo. */
    const respuestasFueraDeCaso = new Set([
        "estamos para ayudarte",
        "no quiero ayuda quiero beneficios",
        "gracias por su hospitalidad",
        "quiero plata",
        "en mi trabajo soy responsable en el hacer las cosas",
        "tengo muchas deudas y es la unica forma de salir de ellas"
    ]);

    function esEntradaContaminada(item) {
        if (!item || typeof item !== "object") return true;
        const respuesta = normalizar(item.respuesta);
        if (!respuesta) return true;
        return respuestasFueraDeCaso.has(respuesta);
    }

    function depurar(banco) {
        if (!banco || typeof banco !== "object") return { casos: 0, retiradas: 0 };
        let retiradas = 0;
        Object.values(banco).forEach((caso) => {
            if (!Array.isArray(caso?.respuestas)) return;
            const originales = caso.respuestas.length;
            caso.respuestas = caso.respuestas.filter((item) => !esEntradaContaminada(item));
            retiradas += originales - caso.respuestas.length;
        });
        return { casos: Object.keys(banco).length, retiradas };
    }

    function construirPregunta(claves, etiqueta) {
        const texto = normalizar(`${etiqueta || ""} ${(claves || []).join(" ")}`);
        const principal = String(etiqueta || claves?.find((clave) => normalizar(clave).length >= 4) || "los hechos").trim();
        if (/(nombre|identificacion|cedula|alias)/.test(texto)) return "¿Puede indicar su nombre completo, identificación y la forma en que lo conocen?";
        if (/(edad|nacimiento)/.test(texto)) return "¿Qué edad tiene y cuál es su fecha de nacimiento?";
        if (/(residencia|direccion|donde vive|casa)/.test(texto)) return "¿Dónde reside actualmente y desde cuándo vive allí?";
        if (/(estudio|universidad|profesion|titulo)/.test(texto)) return "¿Qué estudios realizó y cuál es su profesión?";
        if (/(trabajo|empresa|oficio|dedica)/.test(texto)) return "¿En qué trabaja, cuál es su función y qué actividades realiza?";
        if (/(familia|esposa|esposo|hijo|estado civil)/.test(texto)) return "¿Quiénes conforman su familia y qué relación mantienen con sus actividades?";
        if (/(telefono|correo|mensaje|llamada|contacto)/.test(texto)) return "¿Qué medios de comunicación utiliza y con quién se comunicó sobre estos hechos?";
        if (/(dinero|cuenta|pago|transferencia|fondos|ingreso)/.test(texto)) return "¿Cuál fue el origen, destino y soporte del dinero relacionado con esta operación?";
        if (/(vehiculo|placa|ruta|viaje|movimiento)/.test(texto)) return "¿Qué vehículo, ruta y horario utilizó durante sus desplazamientos?";
        if (/(documento|contrato|factura|soporte)/.test(texto)) return "¿Qué documentos, contratos, facturas o soportes permiten verificar su versión?";
        if (/(socio|amigo|acompanante|testigo|involucrado|quien)/.test(texto)) return "¿Qué personas participaron, estuvieron presentes o pueden confirmar lo ocurrido?";
        if (/(fecha|hora|lugar|cronologia|cuando|donde)/.test(texto)) return "¿Cuándo y dónde ocurrió, y cuál fue la secuencia exacta de los hechos?";
        if (/(evidencia|prueba|contradiccion|inconsistencia)/.test(texto)) return "¿Cómo explica esta evidencia o contradicción y qué elemento permite verificar su respuesta?";
        if (/(arma|droga|sustancia|paquete)/.test(texto)) return "¿Qué sabe sobre los elementos, armas o sustancias relacionados con el caso?";
        return `¿Qué puede explicar de manera concreta y verificable sobre ${principal}?`;
    }

    function prepararPreguntasGuia(banco) {
        if (!banco || typeof banco !== "object") return { casos: 0, preguntas: 0 };
        let total = 0;
        Object.values(banco).forEach((caso) => {
            const candidatas = [];
            (caso.respuestas || []).forEach((item, indice) => {
                if (!item?.respuesta) return;
                candidatas.push({
                    id: item.id || `respuesta_${indice + 1}`,
                    pregunta: construirPregunta(item.claves || [], ""),
                    claves: item.claves || [],
                    respuesta: item.respuesta,
                    tema: "respuesta_del_caso"
                });
            });
            (caso.respuestas_exploratorias || []).forEach((item, indice) => {
                if (!item?.respuesta) return;
                candidatas.push({
                    id: `exploratoria_${indice + 1}`,
                    pregunta: construirPregunta(item.palabras_clave || [], ""),
                    claves: item.palabras_clave || [],
                    respuesta: item.respuesta,
                    tema: "exploracion"
                });
            });
            Object.values(caso.temas_calificables || {}).forEach((tema, indice) => {
                const respuesta = tema?.respuestas_evolucion?.[0];
                if (!respuesta) return;
                candidatas.push({
                    id: tema.tema_id || `tema_${indice + 1}`,
                    pregunta: construirPregunta(tema.palabras_clave || [], tema.etiqueta || ""),
                    claves: tema.palabras_clave || [],
                    respuesta,
                    tema: tema.etiqueta || "tema_calificable"
                });
            });

            const vistas = new Set();
            caso.preguntas_guia = candidatas.filter((item) => {
                let clave = normalizar(item.pregunta);
                if (vistas.has(clave)) {
                    const detalle = item.claves.find((valor) => normalizar(valor).length >= 4) || item.tema;
                    item.pregunta = `¿Qué información concreta puede aportar sobre ${detalle} y cómo se relaciona con el caso?`;
                    clave = normalizar(item.pregunta);
                }
                if (!clave || vistas.has(clave)) return false;
                vistas.add(clave);
                return true;
            }).slice(0, 50);
            total += caso.preguntas_guia.length;
        });
        return { casos: Object.keys(banco).length, preguntas: total };
    }

    window.SAEDepurarBancoCasos = depurar;
    window.SAEPrepararPreguntasGuia = prepararPreguntasGuia;
    if (typeof bancoDeHistorias !== "undefined") {
        const resultado = depurar(bancoDeHistorias);
        resultado.preguntasGuia = prepararPreguntasGuia(bancoDeHistorias).preguntas;
        console.info("Banco SAE validado por pertinencia:", resultado);
    }
    if (typeof BANCO_DE_CASOS !== "undefined") {
        const resultado = prepararPreguntasGuia(BANCO_DE_CASOS);
        console.info("Banco Experto preparado con preguntas guía:", resultado);
    }
}());
