(function () {
    "use strict";

    const correcciones = [
        [/\bEstados Unidados\b/gi, "Estados Unidos"],
        [/\bcontructora\b/gi, "constructora"],
        [/\bdespligue\b/gi, "despliegue"],
        [/\bcojuntos\b/gi, "conjuntos"],
        [/\bManizalez\b/g, "Manizales"],
        [/\bCordobá\b/g, "Córdoba"],
        [/\bMonteria\b/g, "Montería"],
        [/\blatinoamerica\b/gi, "Latinoamérica"],
        [/\bjuridica\b/gi, "jurídica"],
        [/\bcompañia\b/gi, "compañía"],
        [/\bpenidente\b/gi, "pendiente"],
        [/\bempelados\b/gi, "empleados"],
        [/\bdomiciio\b/gi, "domicilio"],
        [/\bconford\b/gi, "confort"],
        [/\bobviamnete\b/gi, "obviamente"],
        [/\bentenderan\b/gi, "entenderán"],
        [/\bmovilizó\b/g, "movilizo"],
        [/\brequire\b/gi, "requiere"],
        [/\bmal estaria\b/gi, "mal estaría"],
        [/\btocaria\b/gi, "tocaría"],
        [/\bcompañia\b/gi, "compañía"],
        [/\bpaises\b/gi, "países"],
        [/\bMedellin\b/g, "Medellín"],
        [/\bcolombia\b/g, "Colombia"],
        [/\bcaribe\b/g, "Caribe"],
        [/\bjuridico\b/gi, "jurídico"],
        [/\baca\b/gi, "acá"],
        [/\bcuenteme\b/gi, "cuénteme"],
        [/\bmas bien\b/gi, "más bien"],
        [/\besta comodo\b/gi, "está cómodo"],
        [/\besta cansado\b/gi, "está cansado"],
        [/\btiene sieño\b/gi, "tiene sueño"],
        [/\bcomo amanecio\b/gi, "cómo amaneció"],
        [/\bpor que me tiene\b/gi, "por qué me tiene"],
        [/\btodo esta\b/gi, "todo está"],
        [/\bestan estudiando\b/gi, "están estudiando"],
        [/\bpara que sea rapido\b/gi, "para que sea rápido"],
        [/\bsi necesita\b/gi, "si necesita"],
        [/\bno la pregunta esta\b/gi, "no; la pregunta está"],
        [/\bsolo,m\b/gi, "solo;"],
        [/\s+([,.;:!?])/g, "$1"],
        [/([,;:])([^\s\n])/g, "$1 $2"],
        [/\.{2,}$/g, "."]
    ];

    function sinTildes(texto) {
        return String(texto || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function normalizarClave(clave) {
        return String(clave || "")
            .trim()
            .toLowerCase()
            .replace(/[¿?¡!.,;:]+/g, " ")
            .replace(/\s+/g, " ");
    }

    function ampliarClaves(claves) {
        if (!Array.isArray(claves)) return [];
        const resultado = [];
        const vistas = new Set();

        claves.forEach((clave) => {
            const original = String(clave || "").trim();
            const normal = normalizarClave(original);
            const sinAcentos = sinTildes(normal);
            [original, normal, sinAcentos].forEach((variante) => {
                const identificador = normalizarClave(variante);
                if (!identificador || vistas.has(identificador)) return;
                vistas.add(identificador);
                resultado.push(variante);
            });
        });

        return resultado;
    }

    function corregirTexto(valor) {
        if (typeof valor !== "string") return valor;
        let texto = valor.trim().replace(/\s{2,}/g, " ");
        correcciones.forEach(([patron, reemplazo]) => { texto = texto.replace(patron, reemplazo); });
        if (texto && /^[a-záéíóúñ]/.test(texto)) texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        if (texto && !/[.!?…]$/.test(texto)) texto += ".";
        return texto;
    }

    function revisarNodo(nodo, estadisticas) {
        if (!nodo || typeof nodo !== "object") return;

        Object.keys(nodo).forEach((clave) => {
            const valor = nodo[clave];
            if ((clave === "claves" || clave === "palabras_clave") && Array.isArray(valor)) {
                const antes = valor.length;
                nodo[clave] = ampliarClaves(valor);
                estadisticas.palabrasClave += nodo[clave].length;
                estadisticas.variantesAgregadas += Math.max(0, nodo[clave].length - antes);
                if (nodo[clave].length === 0) estadisticas.entradasVacias++;
                return;
            }
            if ((clave === "respuesta" || clave === "desconocido" || clave === "intro" || clave === "saludo") && typeof valor === "string") {
                const corregido = corregirTexto(valor);
                if (corregido !== valor) estadisticas.textosAjustados++;
                nodo[clave] = corregido;
                return;
            }
            if (clave === "respuestas_evolucion" && Array.isArray(valor)) {
                nodo[clave] = valor.map((texto) => {
                    const corregido = corregirTexto(texto);
                    if (corregido !== texto) estadisticas.textosAjustados++;
                    return corregido;
                });
                estadisticas.respuestas += nodo[clave].length;
                return;
            }
            if (Array.isArray(valor)) {
                valor.forEach((elemento) => revisarNodo(elemento, estadisticas));
            } else if (valor && typeof valor === "object") {
                revisarNodo(valor, estadisticas);
            }
        });

        if (typeof nodo.respuesta === "string") estadisticas.respuestas++;
    }

    function revisarBanco(nombre, banco) {
        if (!banco || typeof banco !== "object") return;
        const estadisticas = {
            casos: Object.keys(banco).length,
            respuestas: 0,
            palabrasClave: 0,
            variantesAgregadas: 0,
            textosAjustados: 0,
            entradasVacias: 0
        };
        revisarNodo(banco, estadisticas);
        console.info(`[SAE] Revisión lingüística y conversacional: ${nombre}`, estadisticas);
    }

    if (typeof bancoDeHistorias !== "undefined") revisarBanco("bancoDeHistorias", bancoDeHistorias);
    if (typeof BANCO_DE_CASOS !== "undefined") revisarBanco("BANCO_DE_CASOS", BANCO_DE_CASOS);
}());

