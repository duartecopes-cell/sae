(function () {
    "use strict";

    const vacias = new Set(["que", "como", "cual", "quien", "donde", "cuando", "porque", "para", "por", "con", "una", "uno", "los", "las", "del", "sus", "usted", "sobre", "diga", "puede", "tiene"]);
    const ultimoTema = new WeakMap();

    const jergaColombiana = {
        "camello": "trabajo", "camellar": "trabajar", "camellando": "trabajando",
        "plata": "dinero", "lucas": "dinero", "billete": "dinero", "lana": "dinero",
        "parce": "amigo", "parcero": "amigo", "llave": "amigo", "socio": "companero",
        "man": "hombre", "tipo": "persona", "vieja": "mujer", "pelao": "joven", "pelado": "joven",
        "combo": "grupo", "parche": "grupo", "banda": "organizacion", "gallada": "grupo",
        "vuelta": "negocio", "vueltas": "negocios", "movida": "operacion", "negocito": "negocio",
        "rancho": "casa", "caleta": "escondite", "caletas": "escondites", "guarida": "escondite",
        "fierro": "arma", "tote": "arma", "juguete": "arma", "pipa": "arma",
        "bareta": "marihuana", "perico": "cocaina", "coca": "cocaina", "vicio": "droga",
        "mula": "transportador", "correo humano": "transportador", "traqueto": "narcotraficante",
        "patron": "jefe", "duro": "jefe", "capo": "jefe", "mandamas": "jefe",
        "tombos": "policia", "tombo": "policia", "polis": "policia", "ley": "autoridad",
        "cana": "carcel", "guandoca": "carcel", "capturado": "detenido",
        "sapo": "informante", "soplon": "informante", "soplar": "informar", "boletear": "amenazar",
        "vacuna": "extorsion", "vacunar": "extorsionar", "cuota": "pago",
        "tumbe": "estafa", "tumbado": "estafado", "torcido": "ilegal", "chanchullo": "fraude",
        "coronar": "completar operacion", "corono": "completo operacion", "encaletar": "ocultar",
        "nave": "vehiculo", "carro": "vehiculo", "moto": "vehiculo",
        "cel": "telefono", "movil": "telefono", "wasap": "whatsapp", "guasap": "whatsapp",
        "papeles": "documentos", "cedula": "identificacion", "camara": "video",
        "rumbear": "fiesta", "rumba": "fiesta", "jartar": "comer", "trago": "alcohol"
    };

    const dominiosEntrevista = [
        { nombre: "identidad, edad, residencia o estudios", patron: /(nombre|identidad|edad|nacio|vive|reside|direccion|casa|estudio|universidad|titulo|carrera)/ },
        { nombre: "trabajo, empresa, rutina o actividades", patron: /(trabajo|trabaja|empresa|oficio|profesion|rutina|agenda|horario|actividad|negocio)/ },
        { nombre: "familia, amistades, socios o relaciones", patron: /(familia|esposa|esposo|hijo|hija|amigo|companero|socio|relacion|vinculo|grupo)/ },
        { nombre: "abogados, antecedentes o procesos", patron: /(abogado|defensor|antecedente|captura|condena|investigacion|proceso|acusacion)/ },
        { nombre: "fechas, horarios, lugares o cronología", patron: /(fecha|hora|dia|momento|cronologia|lugar|ubicacion|estuvo|encontraba)/ },
        { nombre: "motivos, acompañantes o testigos", patron: /(motivo|razon|intencion|acompanado|con quien|testigo|quien mas|personas presentes)/ },
        { nombre: "vehículos, rutas o desplazamientos", patron: /(vehiculo|placa|carro|moto|ruta|viaje|desplazamiento|llego|salio|transporte)/ },
        { nombre: "dinero, cuentas, pagos o transferencias", patron: /(dinero|cuenta|pago|ingreso|transferencia|giro|fondos|beneficiario)/ },
        { nombre: "documentos, contratos o facturas", patron: /(documento|contrato|factura|soporte|registro|archivo|firma)/ },
        { nombre: "llamadas, mensajes o comunicaciones", patron: /(llamada|mensaje|telefono|celular|whatsapp|correo|chat|comunicacion)/ },
        { nombre: "evidencias, pruebas o contradicciones", patron: /(evidencia|prueba|video|camara|huella|testimonio|contradiccion|inconsistencia|version)/ },
        { nombre: "armas, sustancias o elementos materiales", patron: /(arma|pistola|revolver|municion|droga|cocaina|marihuana|sustancia|paquete|elemento)/ },
        { nombre: "hechos generales del caso", patron: /(ocurrio|paso|sucedio|hecho|relate|cuente|explique)/ }
    ];

    function traducirJerga(texto) {
        let resultado = texto;
        Object.entries(jergaColombiana)
            .sort((a, b) => b[0].length - a[0].length)
            .forEach(([expresion, formal]) => {
                resultado = resultado.replace(new RegExp(`\\b${expresion}\\b`, "g"), `${expresion} ${formal}`);
            });
        return resultado;
    }

    function normalizar(texto) {
        const base = String(texto || "").toLowerCase().normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ")
            .replace(/\s+/g, " ").trim();
        return traducirJerga(base).replace(/\s+/g, " ").trim();
    }

    function tokens(texto) {
        return normalizar(texto).split(" ").filter((p) => p.length >= 3 && !vacias.has(p));
    }

    function datosCaso(caso) {
        const items = [];
        (caso?.respuestas || []).forEach((item) => {
            if (item && typeof item === "object" && item.respuesta) {
                items.push({ claves: item.claves || [], respuesta: item.respuesta });
            }
        });
        (caso?.respuestas_exploratorias || []).forEach((item) => {
            if (item?.respuesta) items.push({ claves: item.palabras_clave || [], respuesta: item.respuesta });
        });
        Object.values(caso?.temas_calificables || {}).forEach((tema) => {
            const respuesta = tema?.respuestas_evolucion?.[0];
            if (respuesta) items.push({ claves: [...(tema.palabras_clave || []), tema.etiqueta || ""], respuesta });
        });
        return items;
    }

    function extraerEntidades(texto) {
        const excluir = new Set(["Mi", "La", "El", "Los", "Las", "No", "Si", "Según", "Sobre", "Estoy", "Tengo", "En", "Eso", "Esa", "Ese"]);
        const coincidencias = String(texto || "").match(/\b[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s+(?:de|del|la|las|los|y)\s+)?(?:\s*[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+){0,3}/g) || [];
        return [...new Set(coincidencias.map((x) => x.trim()).filter((x) => x.length > 2 && !excluir.has(x)))];
    }

    function resolverReferencia(pregunta, caso, items) {
        if (!ultimoTema.has(caso)) return null;
        const texto = normalizar(pregunta);
        const esReferencia = /(a que se refiere|por que dice|por dice|como asi|explique mejor|eso|esa persona|ese hombre|esa mujer|el|ella|ellos|ellas|ese lugar|esa zona|ahi|alla|esa empresa|esa organizacion|ese documento|ese vehiculo|lo anterior|lo que dijo)/.test(texto);
        if (!esReferencia) return null;

        const anterior = ultimoTema.get(caso);
        const anteriorNorm = normalizar(anterior.respuesta);
        if (/(familia|esposa|esposo|senora|marido|hijo|hija)/.test(anteriorNorm)) {
            if (/(por que|por dice|razon)/.test(texto)) {
                return `Lo digo porque me refiero a mi familia y no quiero que la involucren sin una razón concreta. Mi respuesta anterior fue: ${anterior.respuesta}`;
            }
            return `Me refiero a mi familia, especialmente a las personas que mencioné en la respuesta anterior. Para ser preciso: ${anterior.respuesta}`;
        }
        if (/(empresa|compania|organizacion|negocio|sociedad)/.test(anteriorNorm) && /(esa empresa|esa organizacion|a que se refiere|por que dice)/.test(texto)) {
            return `Me refiero a la empresa u organización mencionada anteriormente. Lo que puedo confirmar es: ${anterior.respuesta}`;
        }
        if (/(dinero|cuenta|pago|transferencia|fondos)/.test(anteriorNorm) && /(ese dinero|esa cuenta|ese pago|a que se refiere|por que dice)/.test(texto)) {
            return `Me refiero a la operación financiera mencionada anteriormente. Lo que puedo confirmar es: ${anterior.respuesta}`;
        }
        if (/(documento|contrato|factura|soporte)/.test(anteriorNorm) && /(ese documento|ese contrato|a que se refiere|por que dice)/.test(texto)) {
            return `Me refiero al documento o soporte mencionado anteriormente. Para precisarlo: ${anterior.respuesta}`;
        }
        if (/(vehiculo|carro|moto|camion|placa)/.test(anteriorNorm) && /(ese vehiculo|ese carro|esa moto|a que se refiere|por que dice)/.test(texto)) {
            return `Me refiero al vehículo mencionado anteriormente. Lo que conozco es: ${anterior.respuesta}`;
        }
        const entidades = extraerEntidades(anterior.respuesta);
        let relacionadas = items.filter((item) => item !== anterior && entidades.some((entidad) => {
            const entidadNorm = normalizar(entidad);
            const contenido = normalizar(`${(item.claves || []).join(" ")} ${item.respuesta || ""}`);
            return entidadNorm && contenido.includes(entidadNorm);
        }));

        if (!relacionadas.length) {
            relacionadas = items.map((item) => ({ item, puntos: puntuar(anterior.respuesta, item) }))
                .filter((dato) => dato.item !== anterior && dato.item.respuesta !== anterior.respuesta && dato.puntos >= 2)
                .sort((a, b) => b.puntos - a.puntos)
                .map((dato) => dato.item);
        }

        if (relacionadas.length) {
            const mejor = relacionadas.map((item) => ({ item, puntos: puntuar(pregunta, item) }))
                .sort((a, b) => b.puntos - a.puntos)[0].item;
            ultimoTema.set(caso, mejor);
            return mejor.respuesta;
        }

        if (entidades.length) {
            const entidad = entidades[0];
            if (/(lugar|zona|ahi|alla|donde)/.test(texto)) {
                return `El lugar al que me referí es ${entidad}. No agregaré una ubicación diferente sin un dato confirmado en el expediente.`;
            }
            if (/(persona|hombre|mujer|quien|el|ella)/.test(texto)) {
                return `La persona mencionada es ${entidad}. Lo que puedo afirmar sobre ella es únicamente lo registrado en mi respuesta anterior: ${anterior.respuesta}`;
            }
        }
        return `Me refiero a lo indicado anteriormente: ${anterior.respuesta}`;
    }

    function esPreguntaSeguimiento(pregunta) {
        const texto = normalizar(pregunta);
        const palabras = texto.split(" ").filter(Boolean);
        return /(a que se refiere|por que dice|por dice|como asi|explique mejor|aclare|que quiere decir|quien es esa|quien es ese|ese lugar|esa persona|esa empresa|ese documento|ese vehiculo|lo anterior|eso que dijo|por que|quien mas|que mas|continue)/.test(texto)
            || (palabras.length <= 5 && /\b(eso|ese|esa|ellos|ellas|ahi|alla|anterior)\b/.test(texto));
    }

    function registrarRespuesta(caso, respuesta, claves = []) {
        if (!caso || !respuesta) return;
        ultimoTema.set(caso, { respuesta: String(respuesta), claves });
    }

    function puntuar(pregunta, item) {
        const consulta = tokens(pregunta);
        const claveTokens = tokens((item.claves || []).join(" "));
        const respuestaTokens = tokens(item.respuesta);
        let puntos = 0;
        consulta.forEach((palabra) => {
            claveTokens.forEach((clave) => {
                if (palabra === clave) puntos += 10;
                else if (palabra.length >= 5 && clave.length >= 5 && (palabra.startsWith(clave.slice(0, 5)) || clave.startsWith(palabra.slice(0, 5)))) puntos += 5;
            });
            if (respuestaTokens.includes(palabra)) puntos += 2;
        });
        return puntos;
    }

    function buscarPorCategoria(pregunta, items) {
        const categorias = [
            [/(hola|buenos dias|buenas tardes|saludo)/, ["hola", "buenos", "saludo"]],
            [/(nombre|llama|identidad)/, ["nombre", "identificacion", "alias"]],
            [/(edad|anos tiene|nacio)/, ["edad", "nacimiento"]],
            [/(vive|reside|direccion|casa)/, ["residencia", "direccion", "vive"]],
            [/(trabaja|oficio|profesion|dedica|empresa)/, ["trabajo", "empresa", "profesion", "oficio"]],
            [/(telefono|celular|correo|contacto)/, ["telefono", "correo", "contacto"]],
            [/(familia|esposa|esposo|hijo|hija|casado)/, ["familia", "esposa", "hijos", "estado civil"]],
            [/(dinero|cuenta|pago|ingreso|transferencia)/, ["dinero", "cuenta", "pago", "ingresos", "transferencias"]],
            [/(viaje|viajo|ruta|vehiculo|llego|salio)/, ["viaje", "ruta", "vehiculo", "movimiento"]],
            [/(documento|contrato|factura|soporte|registro)/, ["documento", "contrato", "factura", "soporte"]],
            [/(delito|acusacion|investigacion|culpable|inocente)/, ["delito", "acusacion", "investigacion", "proceso"]]
            , [/(estudio|estudio|universidad|colegio|titulo|carrera|formacion)/, ["estudios", "universidad", "profesion", "titulo", "carrera"]]
            , [/(rutina|dia normal|agenda|horario|costumbre)/, ["rutina", "horario", "agenda", "dia normal"]]
            , [/(salud|enfermedad|medico|medicamento|hospital)/, ["salud", "enfermedad", "medico", "medicamento"]]
            , [/(abogado|defensor|representante legal|derechos)/, ["abogado", "defensor", "representante legal"]]
            , [/(amigo|socio|companero|conocido|relacion|vinculo)/, ["socios", "amigo", "conocido", "relacion", "contactos"]]
            , [/(jefe|superior|manda|ordeno|instruccion)/, ["jefe", "superior", "ordeno", "instruccion"]]
            , [/(estuvo|encontraba|ubicacion|lugar de los hechos|escena)/, ["donde estuvo", "ubicacion", "lugar", "escena"]]
            , [/(hora|fecha|dia de los hechos|momento|cronologia)/, ["hora", "fecha", "cronologia", "cuando"]]
            , [/(acompanado|con quien|quien mas|personas presentes|testigo)/, ["con quien", "acompanante", "testigo", "personas"]]
            , [/(motivo|razon|para que|intencion|objetivo)/, ["motivo", "razon", "objetivo", "intencion"]]
            , [/(ocurrio|paso|sucedio|hechos|cuente todo|relate)/, ["hechos", "ocurrio", "sucedio", "relato"]]
            , [/(carro|moto|camion|placa|transporte|vehiculo)/, ["vehiculo", "placa", "carro", "moto", "transporte"]]
            , [/(arma|pistola|revolver|municion|explosivo)/, ["arma", "pistola", "municion", "explosivo"]]
            , [/(droga|cocaina|marihuana|sustancia|paquete)/, ["droga", "cocaina", "sustancia", "paquete"]]
            , [/(proveedor|cliente|contratista|intermediario)/, ["proveedor", "cliente", "contratista", "intermediario"]]
            , [/(bodega|oficina|finca|terreno|propiedad|inmueble)/, ["bodega", "oficina", "finca", "terreno", "propiedad", "inmueble"]]
            , [/(mensaje|llamada|whatsapp|chat|comunicacion)/, ["mensaje", "llamada", "whatsapp", "telefono", "comunicacion"]]
            , [/(evidencia|prueba|video|camara|huella|testimonio)/, ["evidencia", "prueba", "video", "camara", "huella", "testimonio"]]
            , [/(contradiccion|inconsistencia|version|mintio|mentira)/, ["contradiccion", "inconsistencia", "version", "mentira"]]
            , [/(antecedente|captura|condena|proceso anterior)/, ["antecedentes", "capturas", "condena", "procesos"]]
            , [/(aficion|hobby|pasatiempo|tiempo libre)/, ["aficiones", "hobbies", "pasatiempos", "tiempo libre"]]
        ];
        const texto = normalizar(pregunta);
        const categoria = categorias.find(([patron]) => patron.test(texto));
        if (!categoria) return null;
        const buscadas = categoria[1];
        return items.find((item) => buscadas.some((clave) => normalizar((item.claves || []).join(" ")).includes(clave))) || null;
    }

    function responder(pregunta, caso, respuestaAnterior = "") {
        const texto = normalizar(pregunta);
        const nombre = caso?.personaje || caso?.nombre || "la persona entrevistada";
        if (!texto) return "Formule la pregunta completa y con gusto le respondo.";
        if (/^(hola|buenos dias|buenas tardes|buenas noches|cordial saludo)/.test(texto)) {
            return caso?.saludo || caso?.intro || `Buenos días. Mi nombre es ${nombre}; responderé lo que conozca con precisión.`;
        }

        if (/(cuantos anos|que edad|edad tiene)/.test(texto) && caso?.edad) {
            return `Tengo ${caso.edad} años.`;
        }
        if (/(como se llama|cual es su nombre|digame su nombre|identifiquese)/.test(texto)) {
            return `Mi nombre es ${nombre}${caso?.alias ? ` y algunas personas me conocen como "${caso.alias}"` : ""}.`;
        }
        if (/(por que esta aqui|por que lo investigan|de que lo acusan)/.test(texto) && caso?.delito) {
            return `Entiendo que esta entrevista se relaciona con una investigación por ${caso.delito}. Responderé únicamente sobre hechos que conozca directamente.`;
        }

        const items = datosCaso(caso);
        if (respuestaAnterior) registrarRespuesta(caso, respuestaAnterior);
        const referenciaResuelta = resolverReferencia(pregunta, caso, items);
        if (referenciaResuelta) return referenciaResuelta;
        const seguimiento = /^(por que|como asi|explique|quien mas|cuando fue|donde fue|que mas|continue|sea preciso)/.test(texto);
        if (seguimiento && ultimoTema.has(caso)) {
            const anterior = ultimoTema.get(caso);
            return `Respecto a lo que acabo de indicar, puedo precisar lo siguiente: ${anterior.respuesta}`;
        }
        const categoria = buscarPorCategoria(texto, items);
        if (categoria) {
            ultimoTema.set(caso, categoria);
            return categoria.respuesta;
        }

        const mejores = items.map((item) => ({ item, puntos: puntuar(texto, item) }))
            .filter((x) => x.puntos > 0).sort((a, b) => b.puntos - a.puntos);
        if (mejores.length) {
            ultimoTema.set(caso, mejores[0].item);
            return mejores[0].item.respuesta;
        }

        const asunto = tokens(pregunta).slice(0, 4).join(" ");
        const dominio = dominiosEntrevista.find((item) => item.patron.test(texto));
        const ambito = dominio?.nombre || asunto || "ese aspecto";
        const contextoCaso = caso?.delito ? `La entrevista está relacionada con ${caso.delito}. ` : "";
        return `${contextoCaso}En la información disponible no tengo un dato confirmado sobre ${ambito}. Precise la persona, fecha, lugar, actividad, comunicación, documento o evidencia a la que se refiere para responder de forma concreta sin suponer hechos.`;
    }

    window.SAERespuestaContextual = { responder, normalizar, esPreguntaSeguimiento, registrarRespuesta };
}());
