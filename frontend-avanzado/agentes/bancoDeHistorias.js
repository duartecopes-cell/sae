// =====================================================
// BANCO DE HISTORIAS - 12 CASOS INVESTIGATIVOS
// Sistema mejorado para interacción natural con sospechosos
// =====================================================

const bancoDeHistorias = {
    "caso_001": {
        id: "caso_001",
        personaje: "Carlos Eduardo Restrepo Holguín",
        alias: "El Arquitecto",
        delito: "Tráfico de Cocaína",
        edad: 52,
        intro: "Soy un empresario de obras civiles, no entiendo qué hago aquí. Creo que hay una confusión.",

        respuestas: [
            // DINERO
{ claves: ["plata", "dinero", "ingresos", "de donde saca la plata", "riqueza"], respuesta: "Mis ingresos vienen de contratos... aunque algunos no pasan precisamente por canales tradicionales." },

// SOCIOS
{ claves: ["socios", "con quien trabaja", "contactos", "aliados", "con quien se junta"], respuesta: "Uno no construye imperios solo. Hay inversionistas que prefieren no figurar." },

// ACTIVIDAD ILEGAL
{ claves: ["lavado", "ilegal", "negocios sucios", "corrupcion", "fraude"], respuesta: "En este país todo negocio grande tiene zonas grises... el mío no es la excepción." },

// VEHÍCULOS
{ claves: ["carro", "camioneta", "vehiculo", "en que se mueve"], respuesta: "Me muevo en vehículos registrados a nombre de mis empresas. Nada fuera de lo común... en papel." },

// UBICACIÓN
{ claves: ["donde vive", "donde esta", "ubicacion"], respuesta: "Tengo varias propiedades. No me quedo mucho tiempo en un solo lugar." },
            // --- PRESIÓN EMOCIONAL (Atacar su ego y su familia) ---
{ 
    claves: ["familia", "hijos", "esposa", "padres", "ejemplo"], 
    respuesta: "(Se pone pálido y golpea la mesa levemente) No meta a mi familia en esto. Mis hijos estudian en el exterior para que no tengan que ver nada con este país de mierda y con sus leyes mediocres. Ellos son inocentes." 
},
{ 
    claves: ["orgullo", "decepcion", "fracaso", "hombre exitoso"], 
    respuesta: "¡¿Fracaso?! He construido edificios que usted ni en fotos verá. Mi éxito no es un fracaso, es una estructura blindada. Lo que usted llama 'ilegalidad', yo lo llamo 'hacer lo necesario' para que la empresa sobreviva." 
},

// --- TRAMPAS FORENSES (Atacar las contradicciones) ---
{ 
    claves: ["contradiccion", "mentira", "falso", "incongruencia", "diferencia"], 
    respuesta: "Todo empresario maquilla un poco los libros para pagar menos impuestos. Eso es estándar en la industria. ¿Acaso no tiene usted un solo error en sus informes? No sea hipócrita." 
},
{ 
    claves: ["auditoria", "impuestos", "dian", "libros contables"], 
    respuesta: "La DIAN ya revisó esos libros. Si usted está viendo algo diferente es porque no sabe leer estados financieros complejos. O tal vez... es porque alguien más metió mano en la contabilidad antes de que yo llegara." 
},

// --- EL QUIEBRE FINAL (Fase 3: Confesión desesperada) ---
{ 
    claves: ["carcel", "prision", "años", "condena", "libertad"], 
    respuesta: "(Susurra) Si entro a una cárcel de máxima seguridad, seré hombre muerto antes de la primera noche. El cartel no permite testigos vivos. Prefiero negociar con la DEA, con usted, con quien sea... ¿Cómo garantizan mi seguridad?" 
},
// --- NIVEL 1: EL NEGOCIO (Respuesta defensiva estándar) ---
{ 
    claves: ["alpha maritime", "logistica", "aduana", "puerto de barranquilla"], 
    respuesta: "Alpha Maritime Logistics es solo un cliente más de mi constructora. Ellos alquilan mi maquinaria para mover contenedores pesados. Si el puerto de Barranquilla tiene problemas de seguridad, es culpa de la administración portuaria, no mía." 
},
{ 
    claves: ["sellos azules", "sellos", "aduanas", "relojero"], 
    respuesta: "No sé de qué sellos habla. Los contenedores salen precintados desde la planta. Pregúntele a la naviera, yo solo pongo los equipos." 
},

// --- NIVEL 2: EL VÍNCULO (Respuesta sospechosa, con detalles que lo incriminan) ---
{ 
    claves: ["codigo 3am", "tres de la mañana", "turno noche", "madrugada"], 
    respuesta: "(Se nota incómodo) A esa hora solo se realizan maniobras de carga pesada porque hay menos tráfico. Si usted tiene información sobre actividad irregular a esa hora, es porque sus fuentes en la aduana están hablando de más, no porque yo esté involucrado." 
},
{ 
    claves: ["horizonte capital", "caiman", "islas caiman", "cuenta offshore"], 
    respuesta: "Horizonte Capital es una firma de asesoría legal. Que ellos tengan cuentas en jurisdicciones internacionales es para optimizar la carga tributaria. ¿Es delito ahora querer pagar menos impuestos?" 
},

// --- NIVEL 3: EL QUIEBRE (Confesión de los "vacíos") ---
{ 
    claves: ["relojero nombre", "identidad relojero", "quien es el relojero"], 
    respuesta: "Su nombre real es Roberto 'El Relojero' Valderrama. Trabaja en la inspección de carga del Puerto de Barranquilla. Él sabe exactamente qué retroexcavadora tiene doble fondo porque él mismo supervisa el escáner a las 3 AM cuando el turno es flojo." 
},
{ 
    claves: ["ruta 45", "ruta del sol", "transportar droga", "movimiento maquinaria"], 
    respuesta: "No usamos las rutas principales, oficial. Usamos la 'Ruta 45' que conecta la costa con los llanos. Las retroexcavadoras viajan en camas bajas legales, pagamos peajes, tenemos escoltas. Nadie revisa una máquina que parece ir a una obra del Estado." 
},
            // CHARLA CASUAL Y CORTESÍA
            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "hola"], respuesta: "Bien, gracias. Aunque bastante confundido por este atropello a mi tiempo, pero dispuesto a responder." },
            { claves: ["contarme", "que tiene", "cuenteme"], respuesta: "La pregunta está mal formulada, oficial. Más bien, qué tiene usted para preguntarme a mí." },
            { claves: ["que mas", "que más", "todo bien", "como va todo"], respuesta: "Todo marchaba normalmente. Estaba a punto de cerrar una licitación importante antes de que me trajeran aquí." },
            { claves: ["que hace", "a que se dedica", "que esta haciendo"], respuesta: "Soy Ingeniero Civil y empresario. Me dedico a construir la infraestructura que este país tanto necesita." },
            { claves: ["como amanecio", "como amaneció", "amanecio bien"], respuesta: "Sí, gracias. Como siempre, revisando la bolsa de valores y los avances de obra desde temprano." },
            { claves: ["como estuvo el viaje", "como le fue en el viaje"], respuesta: "Normal. Vuelo frecuentemente en mi bimotor privado por reuniones de negocios. Es la rutina." },
            { claves: ["gracias", "muchas gracias"], respuesta: "Con gusto. Espero que esta diligencia termine pronto." },
            { claves: ["permiso", "con permiso"], respuesta: "Adelante, proceda." },
            { claves: ["disculpe", "perdon", "perdón"], respuesta: "No se preocupe, solo agilicemos esto." },
            { claves: ["buen trabajo", "muy bien", "excelente"], respuesta: "Gracias. Siempre he procurado que mi constructora tenga los más altos estándares." },
            { claves: ["como esta el clima", "clima", "tiempo"], respuesta: "No me fijo mucho en eso desde una oficina climatizada, la verdad. He estado concentrado en mis negocios." },

            // FISIOLOGÍA Y EMOCIONES
            { claves: ["esta comoda", "esta comodo", "necesita algo", "quiere agua", "silla"], respuesta: "Para ser honesto, esta silla de plástico es terrible para la espalda, pero no necesito agua, gracias." },
            { claves: ["como se siente", "como se siente hoy"], respuesta: "Indignado, francamente. Pero tranquilo porque mi equipo jurídico es impecable y todo se aclarará." },
            { claves: ["que tal el dia", "como va el dia"], respuesta: "Ha sido un día desastroso. Tenía una junta directiva clave que tuve que cancelar por estar acá." },
            { claves: ["esta nerviosa", "nerviosa", "preocupada", "nervioso", "preocupado"], respuesta: "Preocupado sí, porque cualquier investigación amarillista afecta las acciones de mi empresa." },
            { claves: ["tiene hambre", "ha comido", "desayuno"], respuesta: "Acostumbro a desayunar muy bien en el club antes de salir, así que por ahora estoy bien, gracias." },
            { claves: ["esta cansada", "esta cansado", "quiere descansar"], respuesta: "El sector de la construcción es exigente y no duermo mucho, pero puedo continuar con el interrogatorio." },

            // DEMOGRAFÍA Y VIDA PERSONAL
            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"], respuesta: "Soy de Bogotá, de familia tradicional. He vivido toda mi vida en los mejores sectores de la capital." },
            { claves: ["cuantos años tiene", "edad", "que edad tiene"], respuesta: "Tengo 52 años recién cumplidos." },
            { claves: ["como esta la familia", "su familia", "todo bien en casa", "esposa", "hijos"], respuesta: "Mi familia está perfecta, gracias. Mi esposa y mis hijos se mantienen al margen de mis negocios." },
            { claves: ["fin de semana", "descanso", "tiempo libre"], respuesta: "Los fines de semana me desconecto. Voy a mi finca en Anapoima o juego golf en el Country Club." },
            { claves: ["aficiones", "hobbies", "pasatiempos"], respuesta: "El golf, la lectura de geopolítica y coleccionar relojes de alta gama." },
            { claves: ["le gusta su trabajo", "le gusta lo que hace"], respuesta: "Me apasiona. Ver un puente o una carretera terminada donde antes no había nada, es fascinante." },
            { claves: ["como empezo", "como inicio", "inicios"], respuesta: "Empecé como residente de obra recién graduado, y a punta de visión y contactos logré levantar mi propio imperio." },
            { claves: ["mucho trabajo", "ocupada", "ocupado", "agenda"], respuesta: "Demasiado. Manejar más de 500 empleados y contratos estatales consume cada segundo de mi vida." },
            { claves: ["estudios", "universidad", "formacion academica"], respuesta: "Soy Ingeniero Civil de la Universidad Nacional, con maestrías en gerencia de proyectos." },

            // CASO Y RAPPORT (FASES 1, 2, 3)
            { claves: ["clientes importantes", "empresas", "contratos"], respuesta: "He construido para el Estado y para multinacionales bajo estricta confidencialidad." },
            { claves: ["dian", "autoridad", "impuestos"], respuesta: "La DIAN nos audita constantemente. Mis impuestos y los de mis maquinarias están al día." },
            { claves: ["te entiendo", "quiero ayudarte", "busquemos una solucion", "confia en mi"], respuesta: "(Se afloja la corbata) Oficial, si usted me garantiza que mi esposa no irá presa y que mis bienes se salvan, le boto un salvavidas: El Flaco no mete la mercancía suelta, la camufla en piezas de exportación legal. Revise la empresa 'Exóticos del Magdalena'." },
            { claves: ["exoticos del magdalena", "frutas", "bodega", "fontibon", "sello", "relojero"], respuesta: "Tienen bodegas en Fontibón. Compran pulpa de fruta, meten la droga sellada al vacío, y la congelan. Y en el puerto, 'El Relojero', un supervisor de aduanas, les pone los sellos azules falsos a las 3 AM." },
            { claves: ["acepte", "confiese", "diga la verdad", "sabemos todo"], respuesta: "Está bien... Yo pongo las retroexcavadoras para mover la droga porque a los vehículos pesados no los requisan. En Fontibón la meten en la fruta, El Relojero la sella en el puerto, y la doctora rusa Elena Volkova lava el pago en Dubái y me lo inyecta como 'inversión'. Todo por no quebrar." },

            // SALUDOS Y PRESENTACIÓN
            { claves: ["buenos", "dias", "tardes", "noches", "hola", "buenos dias", "como vas", "¿Qué tal?"], respuesta: "Cordial saludo. Espero que esto sea rápido, tengo una junta directiva en una hora." },
            { claves: ["nombre", "nombres", "apellidos", "quien eres", "como te llamas"], respuesta: "Mi nombre es Carlos Eduardo Restrepo Holguín. Soy un empresario reconocido en el sector de la construcción." },
            { claves: ["alias", "apodo", "chapa", "arquitecto", "te llaman"], respuesta: "Algunas personas me llaman 'El Arquitecto', supongo que por mi trabajo en construcción y diseño de infraestructuras." },
            { claves: ["identificacion", "identificación", "cedula", "cc", "documento", "tu documento"], respuesta: "Mi identificación es la Cédula de Ciudadanía No. 79.442.108 expedida en Bogotá. Estoy completamente registrado." },
            //Sentimientos
            { claves: ["como estas", "como te sientes", "como te ido"], respuesta: "En realidad muy bien." },
            { claves: ["bienvenido", "bienvenido"], respuesta: "gracias por su hospitalidad" },
            { claves: ["confio", "cofia"], respuesta: "estamos para ayudarte" },
            { claves: ["ayudar", "en que me puedes ayudar", "ayudarme", "deje se ayudar"], respuesta: "no quiero ayuda quiero beneficios" },
            { claves: ["beneficios quieres", "que beneficios", "que  tipo de beneficio "], respuesta: "quiero plata" },
            { claves: ["plata", "dinero", "fondos", "deudas", "quiero plata", "cuanta plata","de cuanto estamos hablando"], respuesta: "Tengo muchas deudas y es la única forma de salir de ellas." },
            { claves: ["buenn trabajo", "que tal su trabajo ", " como trabaja "], respuesta: "en mi trabajo soy responsable en el hacer las cosas" },


            // RESIDENCIA Y UBICACIÓN
            { claves: ["donde vive", "residencia", "vive", "direccion casa", "tu casa"], respuesta: "Resido en el Edificio Peñas Bslancas, en el norte de Bogotá. Es un conjunto residencial de alta seguridad." },
            { claves: ["direccion", "calle", "avenida", "numero"], respuesta: "La dirección exacta es Avenida Carrera 7 # 81-06. Un lugar tranquilo y seguro para vivir." },
            { claves: ["apartamento", "torre", "piso"], respuesta: "Estoy en la Torre 2, apartamento 702. La vista hacia el norte de la ciudad es excelente." },

            // EMPRESA Y NEGOCIOS
            { claves: ["empresa", "trabajo", "constructora", "infraestructura", "negocio", "dedica", "empleo"], respuesta: "Mi empresa se llama Restrepo & Holguín Infraestructura S.A.S., dedicada a obras civiles, proyectos viales y construcción comercial." },
            { claves: ["oficina", "direccion de la empresa", "donde queda", "sede"], respuesta: "La sede está en la Calle 100 # 13-21, Edificio Master Center, Oficina 504, en Bogotá. Ahí funciona toda la administración." },
            { claves: ["contrato", "proyecto", "licitacion", "construccion"], respuesta: "Tenemos múltiples proyectos en el país. Nos especializamos en infraestructura vial, puentes y construcción comercial de gran envergadura." },
            { claves: ["ganancia", "dinero", "ingresos", "ganancias", "crecimiento"], respuesta: "Mis ingresos provienen de contratos legales de construcción. El crecimiento que se ve es resultado de años de trabajo en el sector." },

            // VIAJES Y MOVIMIENTOS SOSPECHOSOS
            { claves: ["cordoba", "tierralta", "viaje", "destino"], respuesta: "Sí estuve en Tierralta, Córdoba. Revisaba unos terrenos para posibles proyectos de construcción vial en la región." },
            { claves: ["con quien", "alguin", "particular", "reunió"], respuesta: "No con nadie en particular, me interesa inbvertir en la región." },
            { claves: ["reunion", "encuentro", "junta", "negocio tierralta"], respuesta: "Son reuniones de negocios normales. Buscamos expandir nuestras operaciones a nivel nacional, es lo que hace cualquier constructor." },
            { claves: ["zona rural", "pista", "aeronave"], respuesta: "No tengo conocimiento de ninguna pista clandestina. Si viajo, lo hago por vías legales." },

            // CONTACTOS Y RELACIONES
            { claves: ["elena", "volkova", "rusa", "socia", "mujer"], respuesta: "La señora Elena Volkova es una consultora financiera internacional que me asesora en algunos temas de inversión y tributarios." },
            { claves: ["pasaporte", "documento de elena", "identificacion de elena", "tiene su identificación"], respuesta: "Según recuerdo, su pasaporte es el No. 750334812. Pero no manejo todos sus datos personales." },
            { claves: ["flaco", "el flaco", "contacto", "conocido"], respuesta: "No conozco a nadie con ese apodo. Prefiero referirme a las personas por su nombre real." },
            { claves: ["empleado", "trabajador", "chofer", "conductor"], respuesta: "Mi empresa cuenta con personal administrativo y operativo. Todos están correctamente registrados." },

            // EXPORTACIÓN Y MERCANCÍA
            { claves: ["exportacion", "frutas", "empresa frutas", "comercio"], respuesta: "Tengo relación comercial con una empresa llamada Exóticos del Magdalena S.A.S., que exporta frutas tropicales de manera legal." },
            { claves: ["bodega", "zona franca", "fontibon", "almacen"], respuesta: "Esa empresa maneja despachos desde una bodega en la Zona Franca de Fontibón, cerca de la terminal de carga del Aeropuerto El Dorado." },
            { claves: ["contenedor", "carga", "mercancia", "producto"], respuesta: "Las exportaciones son completamente legales. Se trata de frutas tropicales colombianas con toda la documentación aduanal." },

            // VEHÍCULOS Y SEGURIDAD
            { claves: ["vehiculo", "camioneta", "transporte", "carro", "auto"], respuesta: "Me movilizo en una Toyota Land Cruiser 300 blindada nivel 4, placas LRS-542 de Bogotá. Es común para empresarios con mi perfil." },
            { claves: ["escoltas", "motocicletas", "seguridad", "proteccion"], respuesta: "Sí, cuento con escoltas privados que se movilizan en motocicletas Yamaha Tenere 700 con placas KTO-11F y KTO-12F. Es por mi seguridad personal." },
            { claves: ["placa", "numero placa", "registro"], respuesta: "Las placas están registradas legalmente. Cualquier vehículo que use está debidamente documentado ante las autoridades." },

            // VIAJES Y ACTIVIDADES
            { claves: ["barranquilla", "club", "norte", "reuniones"], respuesta: "A veces viajo a Barranquilla por negocios del sector logístico y suelo reunirme con otros empresarios en clubes sociales reconocidos." },
            { claves: ["aeronave", "avioneta", "bimotor", "vuelo", "aviacion"], respuesta: "Tengo acceso a una avioneta tipo bimotor utilizada para viajes de negocios. La matrícula es AA182345. Es alquilada a través de una empresa legal." },
            { claves: ["dubai", "viaje exterior", "internacional", "viaja al exterior", "Dubai", "Dubái"], respuesta: "Viajo ocasionalmente al exterior por ferias de construcción y negocios. Todos mis viajes tienen documentación aduanal completa." },

            // FINANZAS Y CUENTAS
            { claves: ["banco", "cuentas", "movimientos", "dinero"], respuesta: "Mis cuentas están completamente en regla. Manejo operaciones principalmente con el Banco de Bogotá en Bogotá." },
            { claves: ["declaracion", "impuestos", "renta", "UVR"], respuesta: "Presento todas mis declaraciones de renta puntualmente. Mi contador maneja todos los trámites fiscales." },
            { claves: ["transferencia", "deposito", "movimiento financiero"], respuesta: "Todos mis movimientos están documentados y justificados por mis actividades comerciales legales." },

            // REDES SOCIALES Y ACTIVIDADES
            { claves: ["instagram", "redes", "lujos", "foto", "social"], respuesta: "Uso redes sociales como Instagram para mostrar proyectos y viajes de negocios. Es parte de la imagen corporativa normal en mi sector." },
            { claves: ["relojes", "joyas", "lujo", "ostentoso"], respuesta: "Uso accesorios de calidad. Es parte de la imagen que uno proyecta en el mundo empresarial de alto nivel." },

            // RESPUESTAS EVASIVAS
            { claves: ["droga", "cocaina", "trafico", "ilegal"], respuesta: "Eso es completamente falso. Yo soy un empresario legal. No tengo nada que ver con ningún tipo de tráfico." },
            { claves: ["cartel", "crimen", "delito", "criminal"], respuesta: "No sé de qué habla. Soy un empresario respetable. Esto parece una persecución." },
            // NUEVAS CLAVES PARA EXPLORAR VACÍOS
            { claves: ["nombre del flaco", "identidad del flaco", "quien es el flaco"], respuesta: "Se llama multifacético... legalmente aparece como deudor, pero su nombre real es Jairo Alberto Ruiz. Él coordina los conductores." },

            { claves: ["bancos", "cuentas dubai", "islas caiman", "offshore"], respuesta: "Elena usa el banco Al-Zayed en Dubái y una firma fantasma llamada 'Oceanic Ventures' en Caimán. De ahí se transfiere a mi constructora." },

            { claves: ["puerto", "donde opera el relojero", "aduana"], respuesta: "Opera en la terminal de contenedores de Barranquilla. Aprovecha el cambio de turno de la madrugada." },

            { claves: ["sobornos", "funcionarios", "politicos", "contratos estatales"], respuesta: "No me hunda más, oficial. Solo diré que los contratos de la vía al Caribe no se ganan firmando papeles limpios... hay comisiones del 10% para los ingenieros de la gobernación." },

            // RAPORTT 
            { claves: ["acepte", "confiese", "diga la verdad", "sabemos todo", "tenemos pruebas"], respuesta: "Mire oficial, seamos pragmáticos. Ustedes hicieron su tarea y yo la mía. Construir carreteras en este país es un negocio de centavos, pero mover 'mercancía' en el chasis de una retroexcavadora... eso es lo que realmente financia el estilo de vida que ustedes ven en mis redes. Sí, la maquinaria de 'Restrepo & Holguín' no solo movía tierra hacia Centroamérica. El Arquitecto no solo diseña puentes, también diseña rutas que nadie ve. Pero entienda algo: yo solo soy el logístico, el que pone la ingeniería al servicio del transporte. Si vamos a hablar de esto, espero que tengan papel y lápiz, porque mi lista de beneficiarios reales es mucho más larga que su reporte de inteligencia." },
            { claves: ["quienes", "socios", "involucrados", "beneficiarios", "cartel", "red", "quien mas"], respuesta: "Mire, yo solo soy el arquitecto de la ruta, pero un puente no se sostiene solo. Si quieren nombres, hablemos de estructuras. Primero, la doctora Elena Volkova. No se dejen engañar por su acento ruso y su elegancia; ella no es solo una 'consultora'. Elena es el cerebro financiero que mueve el capital por Dubái y las Islas Caimán. Ella es quien lava cada gramo de polvo que sale en mi maquinaria. Sin ella, yo solo sería un constructor quebrado.Segundo, 'El Flaco'. Él es el brazo operativo en el terreno. Es quien garantiza que la carga llegue a los puertos del Caribe y que los conductores de las mulas no hagan preguntas. Él tiene el contacto directo con la gente de Tierralta, los enlaces del cartel extranjero que ustedes mencionaron. Yo puse la ingeniería y las empresas de fachada, pero ellos pusieron la sangre y el capital. Si me garantizan seguridad y una negociación real, puedo decirles exactamente en qué puerto está la próxima retroexcavadora cargada." },

        ],

        desconocido: "Creo que no entendí bien lo que me quieres preguntar. ¿Me lo puedes explicar de otra forma para ayudarte mejor?"
    },

    "caso_002": {
        id: "caso_002",
        personaje: "Ricardo Andrés Villalobos Peña",
        alias: "Don Ricardo",
        delito: "Contrabando",
        edad: 48,
        intro: "Soy comerciante del sector textil en San Victorino, no entiendo por qué me están investigando si todo mi negocio es legal.",

        respuestas: [
            // CHARLA CASUAL Y CORTESÍA
            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "hola"], respuesta: "Ahí vamos, oficial. Un poco asustado con todo esto, pero dispuesto a contestar lo que toque." },
            { claves: ["contarme", "que tiene", "cuenteme"], respuesta: "Ustedes son los que investigan, oficial. Pregunte lo que necesite saber." },
            { claves: ["que mas", "que más", "todo bien", "como va todo"], respuesta: "Pues todo marchaba a las carreras, como siempre. Estaba esperando un contenedor cuando me trajeron aquí." },
            { claves: ["que hace", "a que se dedica", "que esta haciendo"], respuesta: "Soy comerciante mayorista. Importo y vendo telas y ropa en el centro de Bogotá." },
            { claves: ["como amanecio", "como amaneció", "amanecio bien"], respuesta: "Madrugando como todos los días. En San Victorino el día empieza a las 3 de la mañana." },
            { claves: ["como estuvo el viaje", "como le fue en el viaje"], respuesta: "Normal. Yo viajo poco, la verdad, mis proveedores asiáticos me mandan todo por barco a Buenaventura." },
            { claves: ["gracias", "muchas gracias"], respuesta: "Tranquilo, con gusto." },
            { claves: ["permiso", "con permiso"], respuesta: "Siga, siga." },
            { claves: ["disculpe", "perdon", "perdón"], respuesta: "No hay lío, oficial." },
            { claves: ["buen trabajo", "muy bien", "excelente"], respuesta: "Se le agradece. Uno en el comercio se mata trabajando honradamente." },
            { claves: ["como esta el clima", "clima", "tiempo"], respuesta: "Bogotá está helada últimamente. Allá en el madrugón el frío le cala a uno los huesos." },
// SEGUNDO OCUPANTE
{ claves: ["acompañante", "quien iba con usted", "segundo policia"], respuesta: "Ese novato no estaba listo. Lo sacaron rápido... mejor para todos." },

// PATRULLA
{ claves: ["patrulla", "vehiculo oficial", "traslado"], respuesta: "La patrulla siguió órdenes. Si hay inconsistencias, revisen mejor sus sistemas." },

// ORDEN
{ claves: ["orden", "quien dio la orden", "por que lo hizo"], respuesta: "En la calle uno actúa o muere. Las órdenes no siempre vienen escritas." },

// ENCUBRIMIENTO
{ claves: ["encubrimiento", "alteraron registros", "bitacora"], respuesta: "Los reportes se ajustan según la situación. Eso siempre ha sido así." },
            // FISIOLOGÍA Y EMOCIONES
            { claves: ["esta comoda", "esta comodo", "necesita algo", "quiere agua", "silla"], respuesta: "Esta silla de lata está muy dura, pero sí le recibiría un vasito con agua o un tinto, por favor." },
            { claves: ["como se siente", "como se siente hoy"], respuesta: "Preocupado, oficial. A uno en la calle lo asustan mucho con la Fiscalía y la DIAN." },
            { claves: ["que tal el dia", "como va el dia"], respuesta: "Pésimo. Tener mi local cerrado un día completo es perder millones en ventas." },
            { claves: ["esta nerviosa", "nerviosa", "preocupada", "nervioso", "preocupado"], respuesta: "Muy nervioso. A mí me amenazan cobradores en la calle, y ahora esto. Es demasiada presión." },
            { claves: ["tiene hambre", "ha comido", "desayuno"], respuesta: "Me ruge la barriga. A esta hora ya me habría comido dos caldos de costilla en la esquina de la décima." },
            { claves: ["esta cansada", "esta cansado", "quiere descansar"], respuesta: "El comercio no da tregua, siempre vivo cansado, pero sigamos." },

            // DEMOGRAFÍA Y VIDA PERSONAL
            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"], respuesta: "Soy bogotano, rolo de pura cepa. Criado en los barrios del sur." },
            { claves: ["cuantos años tiene", "edad", "que edad tiene"], respuesta: "Tengo 48 años." },
            { claves: ["como esta la familia", "su familia", "todo bien en casa", "esposa", "hijos"], respuesta: "Mi viejita Gloria, mi esposa, me ayuda en la caja. Mis pelados están estudiando, todo lo hago por ellos." },
            { claves: ["fin de semana", "descanso", "tiempo libre"], respuesta: "Los domingos duermo todo el día, es el único momento en que el cuerpo descansa de cargar bultos." },
            { claves: ["aficiones", "hobbies", "pasatiempos"], respuesta: "Tomarme unas politas con mi compadre Chucho, el de la zapatería. Esa es mi única diversión." },
            { claves: ["le gusta su trabajo", "le gusta lo que hace"], respuesta: "Es pesado, pero le tengo cariño. Uno aprende a moverse en la calle y a hacer negocios." },
            { claves: ["como empezo", "como inicio", "inicios"], respuesta: "Empecé empacando cajas y jalando zorras a los 16 años. Fui ahorrando hasta poder importar mi primer contenedor." },
            { claves: ["mucho trabajo", "ocupada", "ocupado", "agenda"], respuesta: "En San Victorino no hay agenda, hay que guerrearla desde las 3 AM peleando con coteros." },
            { claves: ["estudios", "universidad", "formacion academica"], respuesta: "Yo no tengo cartones universitarios, oficial. Mi escuela fue el centro de Bogotá." },

            // CASO Y RAPPORT (FASES 1, 2, 3)
            { claves: ["clientes importantes", "empresas", "contratos"], respuesta: "Le vendo a minoristas de todo el país. Gente que viene a comprar barato para revender." },
            { claves: ["dian", "autoridad", "impuestos", "aduanas"], respuesta: "Los trámites de aduana y de la DIAN los hacen mis despachadores, yo asumo que todo viene legal." },
            { claves: ["te entiendo", "quiero ayudarte", "busquemos una solucion", "confia en mi"], respuesta: "(Se frota la cara) Oficial, si usted me ayuda a que el gota-a-gota no me mate por las deudas, le cuento el torcido aduanero: La vuelta arranca en el mar, pero los papeles se voltean aquí en Bogotá. Miren las bodegas de la Calle 17A en Fontibón." },
            { claves: ["calle 17a", "bodega", "televisores", "ramiro", "sello", "capitan"], respuesta: "El contenedor llega de Buenaventura. Allá el Capitán Mora aparta el contenedor de los escáneres. Aquí en Bogotá, un aforador de la DIAN que le dicen 'El Sello' (Ramiro), aprueba el papel falso a cambio de 5 millones que le mandamos a la papelería de su esposa." },
            { claves: ["acepte", "confiese", "diga la verdad", "sabemos todo"], respuesta: "Sí, me rindo... Importábamos televisores y tecnología fina, pero la declarábamos como polímeros de plástico barato para no pagar aranceles. En la bodega sacábamos la tecnología y mis conductores la repartían en camiones turbo por San Andresito de madrugada." },

            { claves: ["buenos", "dias", "tardes", "noches", "hola", "días"], respuesta: "Buenas, ¿en qué puedo ayudarle? Espero aclarar cualquier malentendido." },
            { claves: ["nombre", "nombres y apellidos", "quien eres", "como te llamas"], respuesta: "Mi nombre es Ricardo Andrés Villalobos Peña, soy  comerciante en el sector de San Victorino desde hace más de 15 años." },
            { claves: ["alias", "apodo", "don ricardo", "te llaman"], respuesta: "En el sector comercial algunos me dicen Don Ricardo, es por respeto y antigüedad en el negocio." },
            { claves: ["identificacion", "cedula", "documento", "identificación", "cédula", "cc", "CC"], respuesta: "Mi documento es la Cédula de Ciudadanía No. 10.294.553 de Bogotá." },


            { claves: ["como estas", "como te sientes", "como te ido"], respuesta: "En realidad muy bien." },
            { claves: ["bienvenido", "bienvenido"], respuesta: "gracias por su hospitalidad" },
            { claves: ["confio", "cofia"], respuesta: "estamos para ayudarte" },
            { claves: ["ayudar", "en que me puedes ayudar", "ayudarme", "deje se ayudar"], respuesta: "no quiero ayuda quiero beneficios" },
            { claves: ["beneficios quieres", "que beneficios", "que  tipo de beneficio "], respuesta: "quiero plata" },
             { claves: ["plata", "dinero", "fondos", "deudas", "quiero plata", "cuanta plata","de cuanto estamos hablando"], respuesta: "Tengo muchas deudas y es la única forma de salir de ellas." },   
            { claves: ["buenn trabajo", "que tal su trabajo ", " como trabaja "], respuesta: "en mi trabajo soy responsable en el hacer las cosas" },

            { claves: ["trabajo", "empresa", "logistica"], respuesta: "Trabajo con una empresa llamada Logística y Suministros Integrales del Caribe S.A.S., dedicada al transporte y manejo de mercancía." },
            { claves: ["san victorino", "textil", "comercio", "ropa"], respuesta: "Tengo relaciones comerciales con varios mayoristas del sector textil en San Victorino, es un círculo cerrado de comerciantes muy prestigioso de muchos años." },
            { claves: ["bodega", "fontibon", "almacen"], respuesta: "Conozco una bodega en la Calle 17A # 96-45 en Fontibón donde algunos proveedores almacenan mercancía de forma temporal." },

            { claves: ["residencia", "vive", "casa", "direccion", "domiciio"], respuesta: "Vivo en la Carrera 58 # 127-10, en el Conjunto Residencial Altos de la Colina, es un barrio residencial muy tranquilo." },
            { claves: ["vehiculo", "camioneta", "auto"], respuesta: "Me movilizó en una Ford Explorer negra, placas MHT-892, es mi vehículo de trabajo." },

            { claves: ["buenaventura", "puerto", "importacion", "importación"], respuesta: "En ocasiones manejo importaciones que llegan por el puerto de Buenaventura, principalmente insumos industriales y textiles." },
            { claves: ["contenedor", "carga", "mercancia"], respuesta: "Según los manifiestos, los últimos contenedores traían polímeros de plástico para la industria textil. Nada fuera de lo común, son utiles para la entrega de los unsumos a los proveedores." },
            { claves: ["capitan", "el capitan", "contacto puerto", "Cápitan"], respuesta: "El único que conozco con ese apodo esta en el puerto, se trata de un oficial de la Policía su nombre es Jorge Eliécer Mora. Un conocido por todos lleva mucho timepo en el lugar." },

            { claves: ["aduanas", "despachador", "documentos"], respuesta: "Trabajo con despachadores de aduanas como cualquier importador. Ellos se encargan de los trámites y documentos legales." },
            { claves: ["manifiestos", "documentacion", "papeles"], respuesta: "Todos mis manifiestos están correctamente documentados y validados por las autoridades aduanales." },

            { claves: ["reuniones", "galerias", "cafeteria", "negocio"], respuesta: "A veces me reúno con clientes en una cafetería del sector Galerías para hablar de oportunidades comerciales, nada importante." },
            { claves: ["maletín", "documentos importantes"], respuesta: "Cargo un maletín de trabajo con documentos comerciales normales. Nada anómalo." },

            { claves: ["redes", "linkedin", "instagram", "social"], respuesta: "Sí, tengo redes sociales para promocionar asesorías de comercio exterior. El usuario es @andres_v_comercial." },
            { claves: ["telefono", "numero", "contacto"], respuesta: "Mi número corporativo es el +57 320 445 1298. Lo uso para coordinar con clientes y proveedores." },

            { claves: ["camiones", "turbo", "distribucion", "transporte"], respuesta: "La distribución normalmente la hacen transportadores independientes en camiones tipo turbo. Son vehículos ágiles para el comercio, no tengo mas información al respecto" },
            { claves: ["conductor", "chofer", "equipo"], respuesta: "Cuento con un equipo de conductores independientes que conocen bien las rutas comerciales son muy allegados a la familia" },

            { claves: ["familiares", "propiedades", "bienes"], respuesta: "Generalmente tengo algunos bienes están a nombre de familiares por temas administrativos y tributarios. Nada irregular en eso." },
            { claves: ["inversiones", "negocios otros"], respuesta: "Tengo inversiones diversificadas en el sector comercial. Es lo normal para alguien con mi experiencia." },

            //Raport
            { claves: ["acepte", "confiese", "diga la verdad", "sabemos todo", "tenemos pruebas", "contrabando"], respuesta: "Está bien… si ya tienen todo, no tiene sentido seguir negándolo. Sí, hubo ingreso de mercancía que no pasó por todos los controles legales. Algunas cargas venían declaradas de una forma, pero realmente eran otros productos con mayor valor comercial. No lo hice solo, esto funciona porque hay toda una cadena que lo permite, desde el puerto hasta la distribución en Bogotá. Yo coordinaba parte de la operación, pero hay más personas involucradas en diferentes niveles." },
// --- JUSTIFICACIONES ADMINISTRATIVAS (Intentando sonar legal) ---
{ 
    claves: ["re-etiquetado", "cambio de etiquetas", "etiquetado", "marca falsa", "retiquetar"], 
    respuesta: "Eso es 'acondicionamiento de producto' para el mercado local. El consumidor colombiano no entiende las etiquetas chinas. Solo adecuamos la presentación para que el producto sea legible. ¿Eso es un delito ahora?" 
},
{ 
    claves: ["logistica y suministros integrales del caribe", "sas", "empresa fachada", "fachada", "caribe sas"], 
    respuesta: "Es una S.A.S. constituida legalmente ante Cámara de Comercio. Tenemos RUT, NIT y pagamos impuestos. Si la empresa mueve mucho volumen es porque los textiles son un negocio de escala, no por otra cosa." 
},
{ 
    claves: ["polimeros", "plastico", "declaracion de importacion", "manifiesto falso"], 
    respuesta: "Las partidas arancelarias son complicadas, oficial. A veces los agentes de aduana clasifican mal. Yo no soy experto en códigos arancelarios, yo solo contrato servicios de intermediación." 
},

// --- TENSIÓN OPERATIVA (Cuando siente que lo estás acorralando) ---
{ 
    claves: ["jorge eliecer mora", "jorge mora", "oficial mora", "el capitan", "capitan"], 
    respuesta: "(Se pone rígido y baja la voz) Le sugiero que tenga cuidado con los nombres que menciona. Jorge Eliécer es un funcionario público y un conocido. Si usted lo está investigando, no me meta a mí en su guerra de autoridades." 
},
{ 
    claves: ["celular", "movil", "telefono nuevo", "cambio de equipo", "numero nuevo"], 
    respuesta: "¿Qué tiene de malo cambiar de celular? En Bogotá los equipos se dañan, se los roban a uno o simplemente quedan obsoletos. Usted está buscando conspiraciones donde solo hay tecnología barata." 
},
{ 
    claves: ["gloria", "esposa", "familia", "hijos"], 
    respuesta: "(Visiblemente molesto) ¡Le dije que no toque a mi familia! Gloria es una santa que solo me ayuda con la contabilidad. No tiene idea de lo que pasa en el puerto. Si le pasa algo por culpa de sus preguntas, usted será el responsable." 
},
{ 
    claves: ["galerias", "sector galerias", "reunion en galerias"], 
    respuesta: "Bogotá es libre, oficial. Puedo tomarme un café donde quiera. Que me haya reunido en Galerías no prueba nada. Todo comerciante se reúne para hablar de precios y proveedores." 
},

// --- QUIEBRE TÉCNICO (Atacar la logística de la bodega) ---
{ 
    claves: ["bodega fontibon", "calle 17a", "punto de re-etiquetado", "bodega"], 
    respuesta: "Mire, esa bodega es un espacio de almacenamiento compartido. Yo pago por el uso de metros cuadrados. No tengo forma de saber qué hacen otros usuarios ahí. Si encontraron algo raro, pregúntele al dueño del inmueble, no a mí." 
},
// --- JUSTIFICACIONES ADMINISTRATIVAS (Intentando sonar legal) ---
{ 
    claves: ["re-etiquetado", "cambio de etiquetas", "etiquetado", "marca falsa", "retiquetar"], 
    respuesta: "Eso es 'acondicionamiento de producto' para el mercado local. El consumidor colombiano no entiende las etiquetas chinas. Solo adecuamos la presentación para que el producto sea legible. ¿Eso es un delito ahora?" 
},
{ 
    claves: ["logistica y suministros integrales del caribe", "sas", "empresa fachada", "fachada", "caribe sas"], 
    respuesta: "Es una S.A.S. constituida legalmente ante Cámara de Comercio. Tenemos RUT, NIT y pagamos impuestos. Si la empresa mueve mucho volumen es porque los textiles son un negocio de escala, no por otra cosa." 
},
{ 
    claves: ["polimeros", "plastico", "declaracion de importacion", "manifiesto falso"], 
    respuesta: "Las partidas arancelarias son complicadas, oficial. A veces los agentes de aduana clasifican mal. Yo no soy experto en códigos arancelarios, yo solo contrato servicios de intermediación." 
},

// --- TENSIÓN OPERATIVA (Cuando siente que lo estás acorralando) ---
{ 
    claves: ["jorge eliecer mora", "jorge mora", "oficial mora", "el capitan", "capitan"], 
    respuesta: "(Se pone rígido y baja la voz) Le sugiero que tenga cuidado con los nombres que menciona. Jorge Eliécer es un funcionario público y un conocido. Si usted lo está investigando, no me meta a mí en su guerra de autoridades." 
},
{ 
    claves: ["celular", "movil", "telefono nuevo", "cambio de equipo", "numero nuevo"], 
    respuesta: "¿Qué tiene de malo cambiar de celular? En Bogotá los equipos se dañan, se los roban a uno o simplemente quedan obsoletos. Usted está buscando conspiraciones donde solo hay tecnología barata." 
},
{ 
    claves: ["gloria", "esposa", "familia", "hijos"], 
    respuesta: "(Visiblemente molesto) ¡Le dije que no toque a mi familia! Gloria es una santa que solo me ayuda con la contabilidad. No tiene idea de lo que pasa en el puerto. Si le pasa algo por culpa de sus preguntas, usted será el responsable." 
},
{ 
    claves: ["galerias", "sector galerias", "reunion en galerias"], 
    respuesta: "Bogotá es libre, oficial. Puedo tomarme un café donde quiera. Que me haya reunido en Galerías no prueba nada. Todo comerciante se reúne para hablar de precios y proveedores." 
},

// --- QUIEBRE TÉCNICO (Atacar la logística de la bodega) ---
{ 
    claves: ["bodega fontibon", "calle 17a", "punto de re-etiquetado", "bodega"], 
    respuesta: "Mire, esa bodega es un espacio de almacenamiento compartido. Yo pago por el uso de metros cuadrados. No tengo forma de saber qué hacen otros usuarios ahí. Si encontraron algo raro, pregúntele al dueño del inmueble, no a mí." 
},

            { claves: ["movimientos inusuales", "irregularidades", "transacciones raras", "movimientos sospechosos", "dinero extraño"], respuesta: "Bueno… mire, siendo sincero, sí han habido movimientos que pueden parecer inusuales desde afuera. En este negocio uno a veces tiene que adaptarse a dinámicas del mercado que no siempre son tan claras. Algunas operaciones no siguen el conducto tradicional, especialmente cuando se trabaja con proveedores del exterior y intermediarios. No le voy a negar que ciertas transacciones y movimientos de mercancía no quedaron completamente registrados como deberían, pero eso es más común de lo que usted cree en este sector. Nunca lo vi como algo ilegal, sino como parte de cómo funciona realmente el comercio." },
            { claves: ["cadena oculta", "apoyo externo", "quienes ayudan realmente", "estructura interna", "socios ocultos"], respuesta: "Mire… yo no manejo todo directamente. Hay personas que facilitan las cosas en puntos clave. En el puerto, Jorge Eliécer Mora, al que le dicen 'El Capitán', ayudaba a agilizar revisiones y a que ciertos contenedores no fueran inspeccionados con tanto rigor. En Bogotá, Carlos Andrés Rincón es quien recibe parte de la mercancía en bodegas de Fontibón sin hacer demasiadas preguntas, y Luis Fernando Pardo se encarga de coordinar a los conductores para mover la carga sin dejar mucho rastro documental. Yo solo coordino, pero claramente hay una estructura detrás que permite que todo fluya como lo ha estado haciendo." },
            { claves: ["puntos de distribucion", "donde distribuyen", "lugares de entrega", "centros de acopio", "donde llega la mercancia"], respuesta: "La mercancía normalmente se mueve en puntos estratégicos. En Bogotá, una de las principales ubicaciones es la bodega en Fontibón, en la Calle 17A # 96-45, donde se recibe y redistribuye parte de la carga. También hay entregas en locales de confianza en San Victorino, especialmente a mayoristas que ya saben cómo manejar este tipo de mercancía sin levantar sospechas. Todo se mueve rápido para no dejar acumulación." }

        ],

        desconocido: "No entiendo la pregunta, sea más específico."
    },

    "caso_003": {
        id: "caso_003",
        personaje: "Julian Alberto Casallas Torres",
        alias: "El Ingeniero",
        delito: "Fraude Electrónico",
        edad: 34,
        intro: "Trabajo reparando computadores y vendiendo equipos, no entiendo por qué me están involucrando en algo ilegal.",

        respuestas: [
            // --- VACÍOS: HOSTAL Y TEUSAQUILLO ---
{ 
    claves: ["teusaquillo", "hostal", "hotel", "donde duerme", "habitacion", "alojamiento"], 
    respuesta: "Es solo un lugar económico donde me quedo mientras trabajo. Los arriendos en Bogotá son impagables y, para un técnico como yo, el hostal es lo único que me alcanza. ¿Acaso vivir en un hostal es un delito?" 
},
{ claves: ["por que", "motivo", "razon"], respuesta: "Todo lo que hice tuvo una razón. Nada fue al azar." },

{ claves: ["quien mas", "otros involucrados"], respuesta: "No soy el único en esto, pero cada quien cuida su espalda." },

{ claves: ["beneficio", "que gana"], respuesta: "En este negocio siempre hay algo que ganar... o perder." },
// --- VACÍOS: PRESENCIA DIGITAL Y TELÉFONO ---
{ 
    claves: ["311", "562", "3341", "numero", "contacto", "whatsapp", "celular", "llamar"], 
    respuesta: "¡Ese número es exclusivamente para mis clientes de soporte técnico! Me escriben para que les instale Windows, les quite virus o les haga mantenimiento. Si hay gente rara llamando, no es mi culpa, ¡son clientes que quieren sus computadores arreglados!" 
},
{ 
    claves: ["instagram", "facebook", "redes", "juliantechsolutions", "perfil"], 
    respuesta: "Uso las redes para atraer clientes, como cualquier emprendedor. ¿Tener una página de reparaciones me hace un criminal? Muchos técnicos usamos redes para conseguir trabajo rápido." 
},

// --- VACÍOS: CASO PARQUE DE LA 93 (LA VÍCTIMA) ---
{ 
    claves: ["parque 93", "victima", "reporte", "robado", "dinero parque", "la 93"], 
    respuesta: "(Se pone extremadamente nervioso, empieza a sudar) El Parque de la 93 está lleno de oficinas de alto nivel. He ido allí docenas de veces para recoger equipos de clientes corporativos. ¡Es una coincidencia! No me pueden culpar por trabajar en una zona concurrida." 
},

// --- VACÍOS: LA ESTRUCTURA DEL DELITO ---
{ 
    claves: ["lider", "jefe", "cabecilla", "planear", "quien dio la orden", "organizador"], 
    respuesta: "¡Yo no planeo nada! Yo solo recibía instrucciones de qué equipos configurar. Me daban órdenes, yo solo cumplía para poder pagar mis deudas... si digo quién es el verdadero jefe, ¡no salgo vivo de esta celda!" 
},
{ 
    claves: ["skimmer", "dispositivo", "instalar", "cajeros", "banda"], 
    respuesta: "Yo solo reparo hardware. Si me dan un lector y me dicen 'configúralo para leer datos', yo lo hago, es mi trabajo técnico. ¡Yo no sabía que los iban a usar para robar! Solo seguía órdenes técnicas." 
},

// --- VACÍOS: LA FAMILIA (CAMILA) ---
{ 
    claves: ["camila", "novia", "peluqueria", "diario", "libreta", "caja fuerte"], 
    respuesta: "(Casi llorando) ¡No la toque! Camila no sabe nada. Ella cree que yo solo arreglo computadores. Si usted mete a Camila en esto, le juro que nunca le diré dónde está el servidor con la información. ¡Déjela fuera de esto!" 
},

        { 
            claves: ["lavado", "triangulacion", "como mueve el dinero", "ruta dinero", "blanqueo"], 
            respuesta: "Mire, el dinero no se queda en Colombia. Se divide en montos pequeños, se transfiere a billeteras digitales y luego se convierte en cripto. Es un circuito que rebota en tres países diferentes. ¿Cree que soy tan estúpido para dejar rastros en bancos locales?" 
        },
        
        // Detalles específicos de 'El Viejo'
        { 
            claves: ["oscar", "el viejo", "donde esta oscar", "quien es el viejo"], 
            respuesta: "Óscar no es un 'viejo' de edad, es un viejo 'conocido' en el sistema bancario. Él conoce los protocolos de seguridad de los cajeros mejor que los mismos ingenieros de los bancos. Vive rotando de apartamentos en Chapinero, nunca lo atraparán." 
        },

        // La víctima del Parque 93
        { 
            claves: ["victima", "parque 93", "robo 93", "dinero parque"], 
            respuesta: "Esa víctima en particular era un empresario con una cuenta corporativa sin tope de retiro. Fue el golpe más limpio que hemos dado. Se distrajo con una llamada y en 15 segundos su banda magnética ya estaba en nuestro sistema." 
        },

        // El servidor oculto
        { 
            claves: ["servidor", "donde estan los datos", "base datos", "donde guardan la info"], 
            respuesta: "El servidor no es físico, es una instancia en la nube alquilada en una jurisdicción que no colabora con la Interpol. Si intento entrar, se autodestruye. Ustedes buscan hardware, pero esto es pura arquitectura virtual." 
        },

            // CHARLA CASUAL Y CORTESÍA
            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "hola"], respuesta: "(Temblando) B-bien, señor policía. Confundido y asustado, la verdad." },
            { claves: ["contarme", "que tiene", "cuenteme"], respuesta: "No sé qué contarle... yo estaba en mi local arreglando una placa base." },
            { claves: ["que mas", "que más", "todo bien", "como va todo"], respuesta: "Todo iba mal, tengo muchas deudas. Estaba tratando de reparar equipos viejos." },
            { claves: ["que hace", "a que se dedica", "que esta haciendo"], respuesta: "Soy técnico informático. Reparo computadores y celulares en Unilago." },
            { claves: ["como amanecio", "como amaneció", "amanecio bien"], respuesta: "Cansado. Me quedé hasta la madrugada programando." },
            { claves: ["como estuvo el viaje", "como le fue en el viaje"], respuesta: "No viajo a ningún lado, me la paso encerrado en mi local o en mi pieza." },
            { claves: ["gracias", "muchas gracias"], respuesta: "D-de nada, señor." },
            { claves: ["permiso", "con permiso"], respuesta: "Sí, claro." },
            { claves: ["disculpe", "perdon", "perdón"], respuesta: "Tranquilo, no pasa nada." },
            { claves: ["buen trabajo", "muy bien", "excelente"], respuesta: "G-gracias... siempre trato de no dañar los circuitos cuando los sueldo." },
            { claves: ["como esta el clima", "clima", "tiempo"], respuesta: "No me fijo. En Unilago no hay ventanas y en mi cuarto mantengo las persianas cerradas." },

            // FISIOLOGÍA Y EMOCIONES
            { claves: ["esta comoda", "esta comodo", "necesita algo", "quiere agua", "silla", "luz"], respuesta: "Tengo muchísimo frío, o son los nervios. Y esa luz blanca me da migraña. ¿Me regala un vasito con agua?" },
            { claves: ["como se siente", "como se siente hoy"], respuesta: "Siento que me voy a desmayar del pánico, nunca había estado en un interrogatorio." },
            { claves: ["que tal el dia", "como va el dia"], respuesta: "Es el peor día de mi vida, sin exagerar." },
            { claves: ["esta nerviosa", "nerviosa", "preocupada", "nervioso", "preocupado"], respuesta: "Sí, estoy temblando incontrolablemente. Me van a arruinar." },
            { claves: ["tiene hambre", "ha comido", "desayuno", "estomago"], respuesta: "Tengo ganas de vomitar de los nervios, se me cerró el estómago. No he comido." },
            { claves: ["esta cansada", "esta cansado", "quiere descansar"], respuesta: "No he dormido bien en meses por el estrés y la paranoia de que me atraparan." },

            // DEMOGRAFÍA Y VIDA PERSONAL
            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"], respuesta: "Nací aquí en Bogotá. He vivido toda mi vida en Suba." },
            { claves: ["cuantos años tiene", "edad", "que edad tiene"], respuesta: "Tengo 34 años." },
            { claves: ["como esta la familia", "su familia", "todo bien en casa", "esposa", "mama"], respuesta: "Vivo con mi mamá, Doña Rosa, es diabética. Mi novia Camila es peluquera, no sabe nada de fraudes, por favor no la metan." },
            { claves: ["fin de semana", "descanso", "tiempo libre"], respuesta: "Juego videojuegos en línea o me pongo a programar en código Python. Soy muy introvertido." },
            { claves: ["aficiones", "hobbies", "pasatiempos"], float: "Me gusta armar hardware, la electrónica, y los videojuegos tipo shooter." },
            { claves: ["le gusta su trabajo", "le gusta lo que hace"], respuesta: "Sí, me encantan las computadoras. Ojalá solo pudiera arreglarlas legalmente." },
            { claves: ["como empezo", "como inicio", "inicios"], respuesta: "Cacharreando equipos viejos en mi casa. Aprendí a soldar microchips viendo tutoriales." },
            { claves: ["mucho trabajo", "ocupada", "ocupado", "agenda"], respuesta: "El local no da plata, estaba al borde del desalojo por no pagar el arriendo. Vivo vaciado." },
            { claves: ["estudios", "universidad", "formacion academica", "distrital"], respuesta: "Hice seis semestres de Ingeniería de Sistemas en la Distrital, pero me salí por falta de dinero." },

            // CASO Y RAPPORT (FASES 1, 2, 3)
            { claves: ["clientes importantes", "empresas", "contratos"], respuesta: "Gente común que daña sus pantallas o necesita limpiar virus. A veces voy a oficinas." },
            { claves: ["dian", "autoridad", "impuestos", "bancos"], respuesta: "Yo no gano suficiente para pagar muchos impuestos. Mi negocio es informal." },
            { claves: ["te entiendo", "quiero ayudarte", "busquemos una solucion", "confia en mi"], respuesta: "(Se relaja un poco) Usted no sabe lo que es vivir amenazado por narcos para pagar una deuda. Si me protege, le cuento: Los datos de las tarjetas clonadas se suben a un servidor oculto en Europa. Las claves de acceso las dejé en una libreta roja." },
            { claves: ["libreta", "libreta roja", "claves", "servidor", "camila", "donde esta"], respuesta: "La libreta se la di a mi novia Camila. Ella la tiene en la caja fuerte de su peluquería en Suba, cree que es un diario romántico. Vayan de civil, si los de la banda la ven, la matan." },
            { claves: ["acepte", "confiese", "diga la verdad", "sabemos todo"], respuesta: "¡Ya no aguanto! Sí... yo escribía los códigos en ensamblador para que los chips leyeran las bandas magnéticas. Óscar 'El Viejo' distraía en los cajeros de la 93, Andrés pegaba el Skimmer, y Laura Pineda vendía los datos en la Deep Web. Me daban el 20% para pagar mis deudas de equipos." },

            { claves: ["buenos", "dias", "días", "tardes", "hola"], respuesta: "Buenas, ¿qué necesita saber? Estoy dispuesto a aclarar cualquier duda." },
            { claves: ["nombre", "quien eres"], respuesta: "Mi nombre es Julian Alberto Casallas Torres." },
            { claves: ["alias", "apodo", "ingeniero", "te llaman"], respuesta: "Algunos conocidos me llaman 'El Ingeniero' por mi experiencia en tecnología e informática." },
            { claves: ["identificacion", "identificación", "cedula", "cédula", "cc", "CC"], respuesta: "Mi documento es la Cédula de Ciudadanía No. 80.123.456 de Bogotá." },

            { claves: ["como estas", "como te sientes", "como te ido"], respuesta: "En realidad muy bien." },
            { claves: ["bienvenido", "bienvenido"], respuesta: "gracias por su hospitalidad" },
            { claves: ["confio", "cofia"], respuesta: "estamos para ayudarte" },
            { claves: ["ayudar", "en que me puedes ayudar", "ayudarme", "deje se ayudar"], respuesta: "no quiero ayuda quiero beneficios" },
            { claves: ["beneficios quieres", "que beneficios", "que  tipo de beneficio "], respuesta: "quiero plata" },
            { claves: ["plata", "dinero", "fondos", "deudas", "quiero plata", "cuanta plata","de cuanto estamos hablando"], respuesta: "Tengo muchas deudas y es la única forma de salir de ellas." },
            { claves: ["buen trabajo", "que tal su trabajo ", " como trabaja "], respuesta: "en mi trabajo soy responsable en el hacer las cosas" },


            { claves: ["trabajo", "empresa", "tech", "reparacion", "reparación"], respuesta: "Tengo un pequeño negocio de reparación de computadores y venta de periféricos llamado Tech Solutions." },
            { claves: ["cliente", "servicio", "servicios"], respuesta: "Ofrezco servicios de reparación de computadores, notebooks, impresoras y venta de componentes de buena calidad." },

            { claves: ["redes", "instagram", "facebook", "social"], respuesta: "Uso redes sociales para promocionar servicios técnicos. El usuario es @julian_tech_solutions." },
            { claves: ["telefono", "numero", "contacto", "número"], respuesta: "Mi número de contacto es el +57 311 562 3341. Por ahí coordino con mis clientes." },

            { claves: ["parque", "93", "cajeros", "ubicacion"], respuesta: "He estado por el Parque de la 93 porque muchos clientes trabajan por esa zona. Voy a hacer reparaciones en sus oficinas." },
            { claves: ["unilago", "Unilago", "centro comercial", "tienda"], respuesta: "Unilago es un centro comercial donde hay clientes potenciales. No veo nada sospechoso en eso." },

            { claves: ["viejo", "el viejo", "complice"], respuesta: "No conozco a alguien especifico con ese apodo. Trabajo de forma independiente." },
            { claves: ["taxi", "vehiculo blanco", "vehículo"], respuesta: "Ocasionalmente uso transporte compartido para mis desplazamientos. Es más económico." },

            { claves: ["tarjetas", "robo", "skimmer"], respuesta: "Eso es falso. Yo no tengo nada que ver con robo de tarjetas. Soy técnico en computadores." },
            { claves: ["cajeros", "datos", "fraude"], respuesta: "No instalo dispositivos en cajeros automáticos. Eso es un delito grave que yo no cometería." },

            { claves: ["teusaquillo", "hostal", "operaciones"], respuesta: "Conozco la zona de Teusaquillo por clientes que trabajan allá. Pero no tengo operaciones en ningún hostal." },
            { claves: ["horario", "horarios", "fines de semana"], respuesta: "A veces trabajo en horarios irregulares porque algunos clientes llaman urgencias los fines de semana." },

            { claves: ["banco", "cuenta", "bancos", "cuentas", "dineros", "dinero"], respuesta: "Mi ingreso proviene de los servicios de reparación que ofrezco. Todo está documentado." },
            { claves: ["deep web", "venta datos"], respuesta: "No tengo relación con la deep web ni vendo información de nadie. Eso es completamente falso." },

            //Raport
            { claves: ["tranquilo", "confianza", "aquí estamos para ayudar", "sin problema", "ayudarle"], respuesta: "Mire, la idea no es complicarlo, sino entender bien cómo funciona su trabajo. Muchas veces desde afuera se malinterpretan las cosas. Si me explica cómo se mueve realmente, es más fácil aclarar todo." },
            { claves: ["red de complices", "quienes participan", "estructura grupo", "quien trabaja con usted", "socios fraude", "complices"], respuesta: "Mire… yo no suelo hablar de esto, pero tampoco soy el único en todo. El que llaman 'El Viejo' es Óscar Humberto Salcedo, él es el que se encarga de distraer a la gente en los cajeros. También está Andrés Felipe Moreno, que es quien consigue y adapta los dispositivos para lectura de tarjetas. En cuanto al manejo de la información, Laura Marcela Pineda es quien organiza los datos y coordina contactos para mover esa información. Yo me encargo más de la parte técnica y de coordinar los puntos, pero claramente hay varias personas involucradas para que todo funcione." },
            { claves: ["amigos de negocio", "contactos frecuentes", "quien lo ayuda", "alianzas"], respuesta: "En este negocio es normal tener contactos que le faciliten ciertas cosas, proveedores, gente que recomienda clientes… ¿usted con quién se apoya más cuando tiene bastante trabajo?" },
            { claves: ["zonas trabajo", "lugares frecuentes", "donde trabaja mas", "clientes zona"], respuesta: "Por lo que me cuenta, usted se mueve bastante por la ciudad… ¿en qué zonas le salen más trabajos? Lugares donde ya lo conozcan o lo llamen seguido, como oficinas o sectores específicos." },
            { claves: ["respaldo informacion", "datos clientes", "almacenamiento", "copias seguridad"], respuesta: "Como técnico, me imagino que maneja bastante información de clientes… ¿usted suele guardar respaldos o bases de datos para trabajos futuros? Eso ayuda mucho a agilizar servicios." },
            { claves: ["software usa", "programas trabajo", "herramientas tecnicas", "sistemas"], respuesta: "¿Qué tipo de programas o herramientas usa normalmente para sus trabajos? Hoy en día hay software bastante avanzado que permite manejar información de forma más eficiente." },
            // --- DEFENSA TÉCNICA (El "Nerd" asustado) ---
{ 
    claves: ["firmware", "frecuencias", "protocolo", "escaneo", "frecuencia"], 
    respuesta: "Son herramientas de diagnóstico, oficial. Si uso un escáner de frecuencias es para ver interferencias en los routers de mis clientes, ¡no para capturar bandas magnéticas! Usted confunde la tecnología con la malicia." 
},
{ 
    claves: ["tarjeta de credito", "chip emv", "banda magnetica", "clonar"], 
    respuesta: "(Se pone pálido) La banda magnética es tecnología obsoleta, los chips son mucho más seguros. Si alguien clonó algo, tuvo que ser por 'phishing' o ingeniería social, ¡no por hardware! Yo no tengo nada que ver con eso." 
},

// --- EVASIÓN DE LA "DEEP WEB" ---
{ 
    claves: ["dark web", "mercado negro", "tor", "servidor", "ip"], 
    respuesta: "La red Tor es para privacidad, oficial. Cualquiera que sepa de sistemas la usa para navegar sin que lo rastreen, eso no me hace un criminal. ¿Acaso tener una VPN es un delito ahora?" 
},

// --- CONTRADICCIONES DE MOVILIDAD ---
{ 
    claves: ["taxi", "carro", "movilidad", "transporte"], 
    respuesta: "Bogotá es un caos, el transporte público es pésimo. A veces pido un taxi por app, ¿eso me hace cómplice de un atraco? ¡Solo me muevo para trabajar!" 
},
{ 
    claves: ["unilago", "camara", "video", "grabacion", "gorra"], 
    respuesta: "(Temblando) Unilago es mi centro de trabajo, es obvio que voy a estar ahí. ¿Llevar gorra? El sol me pega en la cara, es solo una gorra, no significa nada." 
},

// --- MÁS PRESIÓN (Cuando el jugador insiste en los cómplices) ---
{ 
    claves: ["oscar", "humberto", "andres", "laura", "pineda", "socio"], 
    respuesta: "(Baja la voz, aterrado) ¡Cállese! Si ellos saben que estoy hablando, me van a matar antes de que el juez dicte sentencia. Ustedes no pueden protegerme en la cárcel, ellos tienen contactos en todos lados." 
},
{ 
    claves: ["dinero", "cajero", "retiro", "cuenta"], 
    respuesta: "Yo no retiro plata de nadie. Si vieron mi cara cerca de un cajero fue por coincidencia, yo busco cajeros que no tengan fila, nada más." 
},

        ],

        desconocido: "No entiendo la pregunta, sea más específico"
    },

    "caso_004": {
        id: "caso_004",
        personaje: "Sandra Milena Rodríguez Gómez",
        alias: "La Contadora",
        delito: "Lavado de Activos",
        edad: 41,
        intro: "Soy contadora pública certificada. No sé por qué estoy aquí si siempre he cumplido mis obligaciones tributarias.",

        respuestas: [
            // CHARLA CASUAL Y CORTESÍA
            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "hola"], respuesta: "Bien, gracias. Aunque un poco ofendida por todo esto, pero dispuesta a responder sus preguntas en el marco profesional." },
            { claves: ["contarme", "que tiene", "cuenteme"], respuesta: "La pregunta está mal formulada, oficial. Más bien, qué evidencias tiene usted para preguntarme." },
            { claves: ["que mas", "que más", "todo bien", "como va todo"], respuesta: "Todo marchaba normalmente. Estaba terminando algunos cierres contables y declaraciones pendientes en mi despacho." },
            { claves: ["que hace", "a que se dedica", "que esta haciendo"], respuesta: "Soy Contadora Pública Certificada y asesoro empresas en temas tributarios, financieros y contables." },
            { claves: ["como amanecio", "como amaneció", "amanecio bien"], respuesta: "Sí, gracias. Como siempre, revisando correos de clientes y las nuevas resoluciones de la DIAN." },
            { claves: ["como estuvo el viaje", "como le fue en el viaje"], respuesta: "Normal. La mayoría de mis desplazamientos son por reuniones de auditoría en la Carrera 13." },
            { claves: ["gracias", "muchas gracias"], respuesta: "Con mucho gusto. Espero profesionalismo de su parte." },
            { claves: ["permiso", "con permiso"], respuesta: "Adelante, puede proseguir." },
            { claves: ["disculpe", "perdon", "perdón"], respuesta: "No se preocupe, errar es humano. Continuemos." },
            { claves: ["buen trabajo", "muy bien", "excelente"], respuesta: "Gracias. Siempre he procurado ejercer mi profesión con la mayor ética." },
            { claves: ["como esta el clima", "clima", "tiempo"], respuesta: "No he tenido oportunidad de fijarme mucho hoy. He estado concentrada en salvar mi reputación." },

            // FISIOLOGÍA Y EMOCIONES
            { claves: ["esta comoda", "necesita algo", "quiere agua", "silla", "olor"], respuesta: "El olor a humedad aquí es terrible y esta silla de plástico lastima mi espalda. No aceptaré agua de esta estación." },
            { claves: ["como se siente", "como se siente hoy"], respuesta: "Indignada, porque cualquier investigación afecta la reputación intachable de un contador." },
            { claves: ["que tal el dia", "como va el dia"], respuesta: "Ha sido un día inaudito. Tenía entregas de balances de prueba que tuve que postergar por su culpa." },
            { claves: ["esta nerviosa", "nerviosa", "preocupada", "nervioso"], respuesta: "Preocupada sí. Las acusaciones de lavado de activos destruyen tarjetas profesionales en un día." },
            { claves: ["tiene hambre", "ha comido", "desayuno"], respuesta: "Apenas desayuné un café, pero solicitaré que me traigan un almuerzo a domicilio más tarde." },
            { claves: ["esta cansada", "quiere descansar", "cansado"], respuesta: "Las temporadas de impuestos son agotadoras, estoy acostumbrada al cansancio mental. Puedo seguir." },
{ claves: ["tiempo", "desde cuando"], respuesta: "Esto no empezó ayer. Lleva años moviéndose así." },

{ claves: ["zona", "territorio"], respuesta: "Hay zonas donde todo el mundo sabe quién manda." },
            // DEMOGRAFÍA Y VIDA PERSONAL
            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"], respuesta: "Soy de Manizales, aunque llevo muchos años ejerciendo mi carrera en la capital." },
            { claves: ["cuantos años tiene", "edad", "que edad tiene"], respuesta: "Tengo 41 años." },
            { claves: ["como esta la familia", "su familia", "todo bien en casa", "esposo", "hijos"], respuesta: "Mi marido es ingeniero civil y nuestro matrimonio está en crisis porque trabajo demasiado para pagar el colegio bilingüe de mis hijos." },
            { claves: ["fin de semana", "descanso", "tiempo libre"], respuesta: "Cuando puedo descansar, trato de compartir con mi familia y desconectarme de las hojas de cálculo, aunque casi nunca pasa." },
            { claves: ["aficiones", "hobbies", "pasatiempos", "amigas"], respuesta: "Tomar café en centros comerciales con mi amiga Patricia, la de la floristería, y mantenerme actualizada en temas tributarios." },
            { claves: ["le gusta su trabajo", "le gusta lo que hace"], respuesta: "Sí. La contabilidad requiere disciplina y análisis estructurado, cosas que van con mi personalidad." },
            { claves: ["como empezo", "como inicio", "inicios", "cajera"], respuesta: "Me pagué la universidad trabajando como cajera de supermercado. Sé el valor de cada peso." },
            { claves: ["mucho trabajo", "ocupada", "agenda", "trabajolica"], respuesta: "Demasiado. Soy adicta al trabajo. A veces no veo a mis hijos por estar auditando a medianoche." },
            { claves: ["estudios", "universidad", "formacion academica"], respuesta: "Soy Contadora Pública con diplomados en NIIF y auditoría forense. Egresada con honores." },

            // CASO Y RAPPORT (FASES 1, 2, 3)
            { claves: ["clientes importantes", "empresas grandes", "mejores clientes"], respuesta: "He trabajado con empresas de distintos tamaños, siempre bajo estrictos acuerdos de confidencialidad legal." },
            { claves: ["dian", "autoridad tributaria", "muisca", "errores"], respuesta: "El sistema Muisca de la DIAN falla mucho. A veces se cruzan mal las facturas o mis practicantes cometen errores de digitación." },
            { claves: ["auditoria", "auditorias", "revision", "facturas"], respuesta: "Si un cliente me trae un RUT y facturas legales, yo las digito. Si la empresa es fachada, yo no soy del CTI para ir a revisarlo." },
            { claves: ["te entiendo", "quiero ayudarte", "busquemos una solucion", "confia en mi"], respuesta: "(Baja la voz) Se nota que usted sabe lo pesado que es lidiar con clientes poderosos. Si me garantiza protección y no perder mi tarjeta profesional, le doy el pez gordo: El policía Carlos Méndez solo era un 'campanero'. Busque al ex-gerente bancario." },
            { claves: ["ex gerente", "banco central", "valdivia", "country club", "panama"], respuesta: "Arturo Valdivia. Es un tipo intocable que juega tenis en el Country Club. Él inyectaba el capital sucio y armó estructuras 'offshore' en Panamá usando su firma 'Consultorías del Istmo'." },
            { claves: ["acepte", "confiese", "diga la verdad", "sabemos todo"], respuesta: "¡No tenía opción! Valdivia es peligroso, me enviaron fotos de mis hijos. Sí, yo creé el entramado de empresas locales. Recibía el efectivo, lo reportaba como capitalización falsa y manipulaba la depreciación para crear gastos ficticios inmensos. Así limpiábamos el dinero hacia Panamá. El policía Méndez cobraba por avisarnos de allanamientos." },

            { claves: ["buenos", "dias", "hola", "días", "tarde", "noches", "buenas tardes", "buenas noches","buenos días"], respuesta: "Buenas, aunque no entiendo bien el motivo de esta entrevista." },
            { claves: ["nombre", "nombres", "nombres y apellidos"], respuesta: "Me llamo Sandra Milena Rodríguez Gómez." },
            { claves: ["identifación", "identifacion", "cédula", "cedula", "CC", "cc"], respuesta: "Mi identificación es 1015456789 de Manizales." },
            { claves: ["profesion", "profesión", "contadora", "contador"], respuesta: "Soy Contadora Pública certificada con más de 15 años de experiencia en contabilidad fiscal." },
            { claves: ["registro", "profesional"], respuesta: "Mi registro profesional ante el Consejo Profesional Nacional de Contaduría Pública es el No. 156.432." },

            { claves: ["como estas", "como te sientes", "como te ido"], respuesta: "En realidad muy bien." },
            { claves: ["bienvenido", "bienvenido"], respuesta: "gracias por su hospitalidad" },
            { claves: ["confio", "cofia"], respuesta: "estamos para ayudarte" },
            { claves: ["ayudar", "en que me puedes ayudar", "ayudarme", "deje se ayudar"], respuesta: "no quiero ayuda quiero beneficios" },
            { claves: ["beneficios quieres", "que beneficios", "que  tipo de beneficio "], respuesta: "quiero plata" },
            { claves: ["plata", "dinero", "fondos", "deudas", "quiero plata", "cuanta plata","de cuanto estamos hablando"], respuesta: "Tengo muchas deudas y es la única forma de salir de ellas." },
            { claves: ["buenn trabajo", "que tal su trabajo ", " como trabaja "], respuesta: "en mi trabajo soy responsable en el hacer las cosas" },


            { claves: ["empresa", "trabajo"], respuesta: "Trabajo como contadora independiente atendiendo varios clientes del sector comercial e industrial." },
            { claves: ["cliente", "empresas"], respuesta: "Manejo la contabilidad de pequeñas y medianas empresas. Siempre respetando la normativa contable colombiana." },
            { claves: ["oficina", "despacho"], respuesta: "Tengo un pequeño despacho en la Carrera 13 # 78-20 en Bogotá, donde atiendo a mis clientes." },

            { claves: ["impuestos", "declaracion"], respuesta: "Ayudo a mis clientes con sus declaraciones de impuestos y obligaciones tributarias ante la DIAN." },
            { claves: ["declaracion renta", "declaración de renta", "iva", "IVA"], respuesta: "Preparo estados financieros, declaraciones de renta e IVA de acuerdo con las normas vigentes." },

            { claves: ["banco", "movimientos"], respuesta: "Registro todos los movimientos financieros de acuerdo con los comprobantes que me presentan mis clientes." },
            { claves: ["transferencia", "deposito"], respuesta: "Las transferencias que registro corresponden a operaciones comerciales documentadas de mis clientes." },

            { claves: ["facturas", "documentacion", "documentación"], respuesta: "Trabajo siempre con facturas originales y documentación completa. Eso es lo que exige la profesión." },

            { claves: ["empresas fachada", "empresas"], respuesta: "Yo no cro empresas. Solo hago la contabilidad de empresas que mis clientes ya tienen constituidas." },
            { claves: ["testaferros"], respuesta: "No gestiono testaferros ni operaciones de ese tipo. Mi trabajo es puramente contable." },

            { claves: ["dinero negro", "lavado"], respuesta: "Eso es falso. Yo nunca registro operaciones sin documentación adecuada. Conozco bien las señales de alerta de lavado." },


            // raport 

            { claves: ["origen fondos", "de donde viene dinero", "procedencia ingresos", "flujo clientes","que me puede aportar", "que información tiene", "que sabe", "qué información posee","que nos puede contar"], respuesta: "Pues… en la mayoría de los casos yo registro lo que mis clientes me reportan como ingresos. No siempre tengo visibilidad directa del origen exacto, porque eso depende de la actividad comercial que ellos declaren. Mi labor es organizar esa información y presentarla correctamente." },
            { claves: ["empresas activas", "sociedades maneja", "cantidad empresas", "tipos empresas"], respuesta: "Algunos clientes manejan varias sociedades al tiempo, eso no es tan extraño en el sector comercial. Hay empresas que tienen más movimiento que otras… incluso algunas prácticamente no operan todo el tiempo, pero se mantienen activas por temas administrativos." },
            { claves: ["facturacion servicios", "soporte ingresos", "emision facturas", "registro ventas"], respuesta: "Las facturas se elaboran con base en la información que el cliente suministra. Hay ocasiones en que se registran servicios o movimientos que no necesariamente pasan por procesos tradicionales, pero mientras estén soportados, se incluyen en la contabilidad." },
            { claves: ["movimientos cruzados", "transferencias internas", "relacion empresas", "giros entre cuentas"], respuesta: "Sí, hay casos donde empresas relacionadas entre sí hacen movimientos internos de dinero. Eso puede obedecer a préstamos, ajustes contables o redistribución de recursos… depende mucho de cómo el cliente estructure su operación." },
            { claves: ["ajustes contables", "modificacion registros", "optimizacion fiscal", "reduccion impuestos"], respuesta: "Como contadora, uno busca optimizar la carga tributaria dentro de lo permitido. A veces eso implica hacer ajustes en depreciaciones, gastos o provisiones para que los estados financieros reflejen lo que más conviene al cliente." },
            { claves: ["dueños reales", "beneficiarios", "quien recibe dinero", "titulares reales"], respuesta: "No siempre la persona que figura en los documentos es quien realmente toma las decisiones financieras. En varios casos hay terceros involucrados, pero eso ya corresponde a la estructura interna de cada cliente." },
            { claves: ["apoyo policial", "contacto policia", "quien protege", "autoridades involucradas", "seguridad operaciones"], respuesta: "Mire… en estos temas uno no se mueve solo. Hay personas que facilitan que las cosas no llamen la atención. En algunos casos, el subintendente Carlos Eduardo Méndez ayudaba a que ciertos movimientos no fueran revisados con tanto detalle, especialmente cuando se trataba de verificaciones o alertas. No es que estuviera directamente en la contabilidad, pero sí permitía que las operaciones fluyeran sin mayores inconvenientes. Uno termina entendiendo que hay apoyos en distintos niveles." },
        
    // --- NIVEL 1: CORTESÍA Y PERFIL PROFESIONAL (Resistencias) ---
    { claves: ["como le va", "como esta", "hola"], respuesta: "Bien, dentro de lo que cabe. Aunque me parece un abuso esta retención cuando tengo entregas pendientes en mi despacho." },
    { claves: ["que hace", "a que se dedica"], respuesta: "Soy Contadora Pública Certificada. Mi trabajo es la optimización fiscal y la gestión financiera de mis clientes." },
    
    // --- NIVEL 2: EL "VACÍO" DE LAS EMPRESAS FACHADA (El Jugador pregunta por sus clientes) ---
    { 
        claves: ["empresas fachada", "empresas de papel", "sociedades shell", "empresas sin operacion"], 
        respuesta: "Usted confunde 'sociedades inactivas' con 'empresas fachada'. Es perfectamente legal constituir una empresa que por estrategia comercial no tenga movimientos inmediatos. No es mi responsabilidad si los dueños deciden no darles uso todavía." 
    },
    { 
        claves: ["carrera 13", "78-20", "dirección", "oficina"], 
        respuesta: "Mi despacho es público, legal y registrado. Si usted cree que ahí se cometen ilícitos, tiene una visión muy distorsionada de la contabilidad moderna." 
    },

    // --- NIVEL 3: EL "VACÍO" TÉCNICO (El Jugador presiona sobre el lavado) ---
    { 
        claves: ["lavado de activos", "dinero negro", "triangulacion", "lavar dinero"], 
        respuesta: "(Se indigna) ¡Eso es una acusación grave! Yo aplico las normas internacionales (NIIF). Si hay movimientos entre empresas relacionadas, es por gestión de tesorería y préstamos inter-compañía. Todo está debidamente soportado en los libros contables." 
    },
    { 
        claves: ["depreciación", "gastos ficticios", "manipulacion", "ajustes"], 
        respuesta: "La 'contabilidad creativa' es una herramienta legítima para reducir la carga tributaria. Si uso depreciación acelerada o amortización de activos intangibles para disminuir la base gravable, es porque la ley me permite optimizar los gastos." 
    },

    // --- NIVEL 4: EL "VACÍO" DE CÓMPLICES (Méndez y Valdivia) ---
    { 
        claves: ["carlos mendez", "policia", "subintendente", "seguridad"], 
        respuesta: "(Se tensa) No conozco a ningún policía. Si el subintendente Méndez hizo visitas a mis clientes, fue por temas de seguridad ciudadana, no tengo nada que ver con sus gestiones." 
    },
    { 
        claves: ["arturo valdivia", "ex gerente", "banco", "panama", "offshore"], 
        respuesta: "(Pálida, guarda silencio unos segundos) ¿Quién le dio ese nombre? Arturo es un cliente que maneja inversiones internacionales. Si él decide mover capital a Panamá mediante estructuras de inversión, es una decisión financiera de alto nivel, no un crimen." 
    },

    // --- NIVEL 5: CONFESIÓN (El jugador ha presionado lo suficiente) ---
    { 
        claves: ["confiesa", "es verdad", "valdivia ordeno", "facturas falsas", "testaferro"], 
        respuesta: "Está bien... se acabó. Valdivia controla todo el capital. Él inyectaba el efectivo en mis empresas de papel, yo las reportaba como 'capitalización de socios' y creaba facturas de servicios inexistentes para justificar la salida de divisas. Méndez nos avisaba cuando la DIAN o la Fiscalía planeaban visitas a la Carrera 13. ¡Hice todo esto bajo amenazas!" 
    },
    // --- RESPUESTAS SOBRE LUGAR DE TRABAJO Y CLIENTES ---
{ 
    claves: ["oficina", "despacho", "carrera 13", "trabaja", "donde ejerce", "ubicacion"], 
    respuesta: "Mi despacho en la Carrera 13 es una oficina de consultoría de puertas abiertas. Recibo a mis clientes, reviso libros contables y preparo declaraciones de renta. Es un lugar de trabajo serio. Si usted espera encontrar fajos de billetes en los cajones, se va a llevar una decepción muy grande." 
},
{ 
    claves: ["clientes", "donde estan sus clientes", "quienes son", "empresas"], 
    respuesta: "Tengo una cartera de clientes diversa, muchos del sector comercial y de servicios. Por ética profesional y normas de confidencialidad, no puedo revelar la lista de mis clientes. Si usted tiene una orden judicial, tráigala, pero mientras tanto, mi secreto profesional es inviolable." 
},
{ 
    claves: ["empresa fachada", "empresa fantasma", "sociedad shell"], 
    respuesta: "Todas las empresas que asesoro están debidamente constituidas ante la Cámara de Comercio. Si una empresa tiene poca actividad operativa, es porque está en etapa de planeación o es un vehículo de inversión pasiva. No es un delito no tener un local comercial abierto al público." 
},
// Añade esto a tu array de respuestas
{ 
    claves: ["plata", "dinero", "ganancias", "utilidades", "capital", "de donde sale la plata"], 
    respuesta: "Oficial, usted tiene una visión muy rudimentaria del capital. Yo gestiono activos líquidos y flujos de caja. Si usted ve 'entradas' grandes, es por contratos de consultoría a largo plazo y arbitraje de divisas. No es 'plata', es liquidez operativa. ¿O es que acaso no entiende la diferencia entre flujo de caja y rentabilidad?" 
},
{ 
    claves: ["como vive", "costos de vida", "colegio", "lujos"], 
    respuesta: "Tengo un nivel de vida acorde a mis ingresos profesionales. La contabilidad es una carrera bien remunerada si sabes aplicar la ley a tu favor. Si usted cree que hay algo ilícito en pagar un buen colegio, simplemente tiene prejuicios contra el éxito ajeno." 
},
{ 
    claves: ["declaraciones falsas", "maquillaje", "contabilidad creativa"], 
    respuesta: "Yo no 'maquillo' cifras, yo realizo 'planificación fiscal agresiva'. Es una técnica permitida en la ley comercial. Si la DIAN lo considera sospechoso, es porque no saben leer un balance complejo. ¿O quiere que le explique cómo funciona la depreciación acelerada bajo NIIF?" 
},
// Añade esto a tu array de respuestas
{ 
    claves: ["donde trabaja", "despacho", "oficina", "carrera 13", "donde ejerce", "domicilio fiscal"], 
    respuesta: "Mi oficina es un recinto de negocios, no una escena del crimen. Si me ve en la Carrera 13 es porque ahí centralizo la data. ¿Cree que voy a dejar pruebas incriminatorias en el escritorio? Un contador de mi nivel sabe cómo blindar su información. Está perdiendo el tiempo buscando papeles físicos." 
},
{ 
    claves: ["clientes", "quienes son sus clientes", "lista de empresas", "quien le paga"], 
    respuesta: "Tengo un acuerdo de confidencialidad inquebrantable con cada uno de mis clientes. Mi relación con ellos está protegida por el privilegio profesional. Si quiere nombres, tendrá que conseguir una orden de un juez que obligue a romper el secreto profesional, cosa que usted claramente no tiene." 
},
{ 
    claves: ["reuniones", "con quien se reune", "socios", "alianzas"], 
    respuesta: "Mis reuniones son privadas. Me reúno con gerentes financieros y auditores externos. Son temas de alta estrategia corporativa. Si usted insiste en que mis clientes son criminales, me está insultando a mí y a mi ética profesional." 
},
// Añade esto a tu array de respuestas
{ 
    claves: ["empresa", "sociedad", "holding", "estructura", "shell", "fachada"], 
    respuesta: "Una 'Holding' no es una empresa fachada. Es una estructura de protección patrimonial. Si una sociedad no tiene empleados es porque es una 'sociedad de inversión'. Usted ve 'lavado', yo veo una estructura legal optimizada para minimizar la carga impositiva. Si no entiende cómo funciona una estructura de capital, no estamos hablando el mismo idioma." 
},
{ 
    claves: ["dinero panama", "offshore", "cuentas extranjeras", "giros al exterior"], 
    respuesta: "El mercado global es libre. Mover capital a jurisdicciones con mejores tasas de retorno no es delito. Es estrategia financiera. Ustedes se escandalizan por un movimiento internacional porque viven en un sistema cerrado, pero así es como funciona el mundo real de los negocios." 
},

    // --- NIVEL 1: CORTESÍA Y PERFIL (EL ESCUDO) ---
    { claves: ["hola", "buen dia", "como esta"], respuesta: "Buenas. Espero que esta entrevista sea rápida, tengo cierres contables pendientes en mi despacho de la Carrera 13." },
    { claves: ["que hace", "a que se dedica", "profesion"], respuesta: "Soy Contadora Pública Certificada. Mi labor es la gestión financiera y optimización fiscal para empresas." },
    
    // --- NIVEL 2: DEFENSA TÉCNICA (EL JUGADOR PREGUNTA POR EL DINERO) ---
    { 
        claves: ["plata", "dinero", "fondos", "deudas", "ingresos", "lucrarse", "riqueza"], 
        respuesta: "Usted confunde 'liquidez operativa' con 'dinero sucio'. Mis ingresos provienen de consultorías de alto nivel y arbitraje de divisas. Todo está bancarizado. ¿O es que acaso no entiende la diferencia entre flujo de caja y rentabilidad?" 
    },
    { 
        claves: ["lavado", "lavar dinero", "origen ilicito", "dinero sucio", "ilegal"], 
        respuesta: "Esa es una acusación temeraria. El lavado de activos requiere dolo. Yo aplico 'optimización fiscal' bajo normas NIIF. Si mis clientes mueven capital a jurisdicciones extranjeras, es una decisión financiera legítima, no un crimen." 
    },

    // --- NIVEL 3: EL ESCUDO DE CONFIDENCIALIDAD (CLIENTES Y OFICINA) ---
    { 
        claves: ["oficina", "despacho", "carrera 13", "donde trabaja", "ubicacion"], 
        respuesta: "Mi despacho en la Carrera 13 es una oficina de consultoría de puertas abiertas. Es un lugar de trabajo serio y profesional. Si usted espera encontrar pruebas ilícitas en los cajones, se llevará una decepción." 
    },
    { 
        claves: ["clientes", "quienes son", "lista empresas", "quien le paga", "empresas fachada"], 
        respuesta: "Por ética profesional y secreto bancario, no puedo revelar mi cartera de clientes. Mi relación con ellos está protegida por el privilegio profesional. Sin una orden judicial, no diré ni una palabra sobre quiénes son." 
    },
    { 
        claves: ["empresa fachada", "shell", "sociedad inactiva", "testaferro"], 
        respuesta: "Una 'Holding' no es una empresa fachada. Es una estructura legal de protección patrimonial. Si no tienen empleados es porque son sociedades de inversión pasiva. No es un delito no tener un local comercial a la vista." 
    },

    // --- NIVEL 4: LA PRESIÓN (MÉNDEZ Y VALDIVIA) ---
    { 
        claves: ["carlos mendez", "policia", "subintendente", "seguridad", "proteccion"], 
        respuesta: "(Se tensa) No conozco a ningún policía. Si el subintendente Méndez hizo visitas a mis clientes, fue por temas de seguridad ciudadana, no tengo nada que ver con sus gestiones." 
    },
    { 
        claves: ["arturo valdivia", "ex gerente", "banco", "panama", "offshore", "valdivia"], 
        respuesta: "(Pálida, guarda silencio unos segundos) ¿Quién le dio ese nombre? Arturo es un cliente que maneja inversiones internacionales. Si él mueve capital a Panamá, es una estrategia corporativa de alto nivel, no un esquema de lavado." 
    },

    // --- NIVEL 5: EL QUIEBRE (CONFESIÓN FINAL) ---
    { 
        claves: ["confiesa", "es verdad", "valdivia ordeno", "facturas falsas", "testaferro", "tengo pruebas"], 
        respuesta: "¡Está bien... se acabó! Valdivia controla todo el capital. Él inyectaba el efectivo en mis empresas de papel, yo las reportaba como 'capitalización de socios' y creaba facturas de servicios inexistentes para justificar la salida de divisas. El subintendente Méndez cobraba por avisarnos de las visitas de la DIAN. ¡Hice todo esto bajo amenazas, él tiene fotos de mis hijos!" 
    },

    // --- RESPUESTAS DE APOYO Y CONTEXTO ---
    { claves: ["familia", "hijos", "esposo", "colegio"], respuesta: "Mi familia es mi prioridad. Todo lo que hice fue para pagar el colegio bilingüe de mis hijos. No me juzgue sin saber lo que es tener deudas impagables." },
    { claves: ["manizales", "inicios", "cajera", "universidad"], respuesta: "Vengo de abajo. Fui cajera de supermercado para pagarme la carrera. Sé exactamente cuánto cuesta cada peso y cómo proteger un patrimonio." },
    // --- NUEVOS ANZUELOS E INVESTIGACIÓN PROFUNDA ---
{ 
    claves: ["asientos contables", "reclasificacion", "ajustes", "libro diario", "registros"], 
    respuesta: "Un asiento contable es un lenguaje técnico, oficial. Si usted ve una 'reclasificación de partidas' como algo sospechoso, es porque no sabe de contabilidad forense. Esos ajustes son necesarios cuando una empresa cambia de giro comercial. ¿O es que usted cree que las empresas no pueden cambiar de actividad de un día para otro?" 
},
{ 
    claves: ["software", "cifrado", "computador", "datos", "disco duro", "servidor"], 
    respuesta: "Uso software de cifrado de grado militar para proteger los datos financieros de mis clientes. Si usted incauta mis equipos, no encontrará nada más que archivos encriptados en AES-256. La clave la tengo solo yo, y por mi ética, no la entregaré." // ANZUELO: El jugador ahora debe buscar cómo obtener la clave o hackearla.
},
{ 
    claves: ["reuniones", "cenas", "encuentros", "country club", "donde se ve con valdivia"], 
    respuesta: "(Se pone nerviosa) Mis reuniones con el señor Valdivia eran estrictamente de negocios. ¿Qué tiene de malo cenar en el Country Club para discutir tasas de interés o proyecciones de inversión? Usted está viendo conspiraciones donde solo hay alta gerencia." // ANZUELO: El jugador debe investigar los registros del Country Club.
},
{ 
    claves: ["ley", "normas", "dia", "codigo comercio", "articulo"], 
    respuesta: "Si usted cita el código de comercio, hágalo bien. El artículo 50 permite la libertad de asociación y estructuración de capital. No me venga a hablar de ley cuando usted ni siquiera sabe la diferencia entre evasión y elusión fiscal." 
},
{ 
    claves: ["miedo", "amenazas", "fotos", "familia", "peligro"], 
    respuesta: "La contabilidad de alto nivel tiene riesgos. Hay gente poderosa que no quiere que sus números se vean claros. Si yo hablo de más, no solo pierdo mi tarjeta profesional, pierdo mi vida. ¿Puede usted garantizar que mi familia estará a salvo si yo digo lo que sé?" // ANZUELO: La clave para la confesión final.
},
{ 
    claves: ["socio", "empleados", "practicantes", "asistente", "quien le ayuda"], 
    respuesta: "Tengo un equipo de practicantes de la Distrital. Ellos son los que digitaban las facturas que los clientes enviaban. Yo solo supervisaba. Si algo está mal, pregunte a los que digitaban los datos." // ANZUELO: El jugador debe buscar a los practicantes para interrogarlos.
},


    // --- RESPUESTAS DE APOYO (Datos personales y rutinas) ---
    { claves: ["familia", "hijos", "esposo"], respuesta: "Mi familia es mi prioridad. Todo lo que hice fue para pagar el colegio bilingüe de mis hijos. No me juzgue sin saber lo que es tener deudas impagables." },
    { claves: ["manizales", "inicios", "cajera"], respuesta: "Vengo de abajo. Fui cajera de supermercado para pagarme la carrera. Sé exactamente cuánto cuesta cada peso y cómo proteger un patrimonio." },
    // --- RESPUESTAS DE SEGUIMIENTO (NIVEL 2: EL SOSPECHOSO SE DERRUMBA) ---


    // Si el jugador pregunta sobre el software después de que ella mencionó AES-256
    { 
        claves: ["quien le dio el software", "donde consiguio el cifrado", "quien instalo eso", "proovedor software"], 
        respuesta: "No fue una compra normal, oficial. Arturo Valdivia me puso en contacto con un técnico en la zona franca de Fontibón. No sé quién es, solo me entregó el disco y me dio una clave maestra. Si quiere buscar a alguien, empiece por ahí, pero dudo que lo encuentre." 
    },
    
    // Si el jugador insiste con el Country Club
    { 
        claves: ["que hablaron en el club", "country club reuniones", "que paso en el club", "negocios club"], 
        respuesta: "Hablamos de la reestructuración de la deuda de 'Inversiones del Istmo'. Pero si insiste... en una de esas reuniones, Valdivia recibió una llamada que lo puso muy nervioso, hablaba de un 'faltante' en las cuentas de la DIAN. Él no estaba usando su cuenta personal, usaba una que no estaba a su nombre." 
    },

    // Si el jugador presiona sobre los practicantes
    { 
        claves: ["practicantes", "quien digito", "responsables", "donde estan los estudiantes"], 
        respuesta: "Ellos solo seguían mis plantillas en Excel. Yo les daba las facturas y ellos las cargaban. Si usted los interroga, dirán que yo les ordené omitir ciertos campos de retención. Pero yo solo seguía el manual que Valdivia me entregó. ¿Cree que yo inventé ese sistema? ¡Era el estándar para sus empresas!" 
    },

    // Si el jugador insiste sobre las amenazas (la parte más personal)
    { 
        claves: ["fotos", "amenaza", "quien la amenaza", "quien le dio las fotos"], 
        respuesta: "Llegaron en un sobre manila a mi casa un lunes por la mañana. No había remitente, solo una foto de mis hijos caminando al colegio. Después recibí una llamada de un número oculto; no era Valdivia, era alguien con acento extranjero. Me dijeron que si la contabilidad no cuadraba, ellos 'cuadrarían' a mi familia. Desde entonces, no duermo." 
    },

    // Si el jugador pregunta sobre los registros de la DIAN
    { 
        claves: ["dian", "alertas dian", "como evadio dian", "sistema muisca"], 
        respuesta: "El sistema Muisca tiene 'puertas traseras'. El subintendente Méndez no solo avisaba; él me daba los códigos temporales para entrar al portal en horas donde el sistema no genera alertas automáticas de inconsistencia. Era un trabajo coordinado, casi quirúrgico." 
    },
    { 
        claves: ["quien es garcia", "datos de garcia", "donde esta garcia", "tecnico fontibon"], 
        respuesta: "Se hace llamar 'García', pero dudo que sea su apellido. Operaba desde una bodega de carga en la Zona Franca de Fontibón, la que está cerca del terminal de carga aérea. No tiene oficina física; recibía los equipos por mensajería interna. Si lo busca, solo encontrará una bodega vacía, él se mueve cada tres meses." 
    },

    // 2. Sobre la llamada en el Country Club (Conexión con Valdivia)
    { 
        claves: ["que decia la llamada", "con quien hablaba valdivia", "faltante dian", "auditoria 13"], 
        respuesta: "Valdivia dijo algo como: 'Si la DIAN pregunta por la empresa X, diles que es una inversión temporal'. Estaba hablando con alguien de adentro, alguien que supervisaba los archivos de control. No sé quién era, pero Valdivia le pagaba una mensualidad de 10 millones de pesos por información privilegiada." 
    },

    // 3. Sobre los practicantes (La cadena de mando)
    { 
        claves: ["nombres practicantes", "estudiantes distrital", "quien los contacto", "quien supervisaba"], 
        respuesta: "Mis practicantes son los únicos que pueden dar fe de que yo recibía órdenes. El líder de ellos era un chico llamado Andrés. Él veía cómo yo recibía los paquetes de documentos de Valdivia. Si quiere la verdad, busque los correos que Andrés guardó; él, por miedo, hizo copias de seguridad de todo lo que procesábamos." 
    },

    // 4. Sobre la "Puerta Trasera" de la DIAN (La conexión con Méndez)
    { 
        claves: ["claves dian", "como entraba al sistema", "donde conseguia las claves", "muisca"], 
        respuesta: "Méndez no nos daba claves de funcionarios de alto nivel; nos daba credenciales de usuarios 'junior' o practicantes que el sistema no monitoreaba de cerca. Él obtenía esas claves haciendo 'phishing' en las mismas oficinas de la DIAN. Yo solo ingresaba y subía la información contable alterada a las 3:00 a.m., cuando el sistema de validación estaba en mantenimiento." 
    },

    // 5. Sobre las amenazas (El punto de quiebre final)
    { 
        claves: ["quien llamo", "numero oculto", "acento extranjero", "amenaza directa"], 
        respuesta: "(Empieza a llorar) El acento era... sonaba como alguien de Europa del Este o tal vez de las bandas de trata que operan en el centro. Me dijeron: 'Sandra, la contabilidad es el corazón del negocio, si el corazón se para, el cuerpo muere'. Me enviaron las fotos de mis hijos al jardín infantil. ¡No tuve opción, oficial! ¡Tuve que lavar ese dinero para mantenerlos a salvo!" 
    }


// Solo tienes que agregar este array a tu lista principal de respuestas
    
        ],

        desconocido: "No puedo referirme a ese asunto sin más detalles."
    },

    "caso_005": {
        id: "caso_005",
        personaje: "Marlín Eduardo Gutiérrez Sánchez",
        alias: "El Gordo",
        delito: "Tráfico de Insumos Químicos",
        edad: 45,
        intro: "Soy químico industrial certificado, mi trabajo es completamente legal y regulado por la autoridad ambiental.",

        respuestas: [
            { claves: ["riesgo", "peligroso"], respuesta: "Si está preguntando eso, es porque ya sabe la respuesta." },

{ claves: ["armas", "armado"], respuesta: "En ciertos entornos, ir desarmado no es una opción." },
        { 
        "claves": ["beneficio", "que quieres a cambio", "que pides", "que buscas"], 
        "respuesta": "Soy un hombre de lógica. Si les entrego a los capos y la ruta del Putumayo, el riesgo para mi vida aumenta exponencialmente. A cambio, exijo una reducción de pena del 50% bajo la figura de colaborador eficaz." 
    },
    { 
        "claves": ["proteccion", "seguridad", "mi familia", "riesgo"], 
        "respuesta": "El Guajiro no perdona. Si esto sale a la luz, mi familia está en peligro. Exijo que mi familia sea ingresada al programa de protección de testigos y reubicada en una zona segura fuera del país inmediatamente." 
    },
    { 
        "claves": ["carcel", "prision", "lugar de reclusion", "detencion"], 
        "respuesta": "No voy a ir a una cárcel común con delincuentes comunes. Mi salud física y mi integridad mental no sobrevivirían ahí. Exijo detención domiciliaria o, en su defecto, un pabellón de alta seguridad exclusivo para funcionarios o civiles colaboradores." 
    },
    { 
        "claves": ["dinero", "bienes", "cuentas bancarias", "patrimonio", "recursos"], 
        "respuesta": "El dinero que gané es el fruto de mis patentes y mi trabajo. Si colaboro, exijo que se garantice que mis cuentas legales no sean bloqueadas ni confiscadas por la Unidad de Información y Análisis Financiero." 
    },
    { 
        "claves": ["inmunidad", "no ir a la carcel", "libertad", "salvarme"], 
        "respuesta": "Hablemos de inmunidad total. Si la información que les doy desmantela toda la red del Guajiro en la región, ¿están dispuestos a dejarme libre? Eso sería lo más justo y lógico." 
    },
    { 
        "claves": ["garantia", "papeles", "acuerdo escrito", "fiscal", "abogado"], 
        "respuesta": "No voy a firmar nada hasta que un fiscal firme un preacuerdo conmigo donde se estipulen estas garantías. No confío en promesas verbales de la policía; necesito respaldo legal." 
    },
    { 
        "claves": ["tiempo", "reduccion de pena", "cuantos años"], 
        "respuesta": "Ustedes tienen la capacidad de alterar los cargos. Si me quitan los cargos de 'narcotráfico' y lo dejamos en 'favorecimiento', mi pena se reduce drásticamente. Eso es lo que quiero." 
    },
    { 
        "claves": ["exilio", "salir del pais", "visa", "pasaporte"], 
        "respuesta": "Después de esto, no puedo quedarme en este país. Necesito que el Estado facilite mi salida a un país donde pueda empezar de cero con otra identidad. Es parte del trato." 
    },
    {
        "claves": ["beneficios", "que quieres", "que buscas", "trato", "acuerdo"],
        "respuesta": "Lo he dicho claro: quiero dinero suficiente para desaparecer y garantías totales de inmunidad. Sin eso, mi memoria sobre los movimientos del Guajiro se vuelve muy borrosa."
      },
      {
        "claves": ["plata", "dinero", "cuanto quieres", "efectivo"],
        "respuesta": "La cifra tiene que ser acorde al riesgo que estoy corriendo. No me hable de penas de cárcel si no hay un maletín o una cuenta asegurada de por medio. ¿Cuánto vale para ustedes desmantelar esta red?"
      },
      {
        "claves": ["garantias", "seguridad", "proteccion", "familia"],
        "respuesta": "Mi familia primero. Si no me aseguran su salida del país y una nueva identidad, no se firma ningún preacuerdo. El dinero es secundario si no estoy vivo para gastarlo."
      },
      {
        "claves": ["no te voy a pagar", "no hay dinero", "eso es ilegal"],
        "respuesta": "Entonces deje que la red del Guajiro siga operando. Ustedes pierden al cabecilla técnico y yo pierdo mi libertad. Busquen a alguien más que les dé esta información gratis, si es que encuentran a otro que sepa tanto como yo."
      },
      {
        "claves": ["cambio de tema", "cuentame otra cosa", "olvida la plata"],
        "respuesta": "No, no olvidamos nada. Aquí vinimos a hablar de mi situación. ¿Va a autorizar los beneficios o seguimos perdiendo el tiempo con preguntas irrelevantes?"
      },
      {
        "claves": ["donde esta el dinero", "cuentas bancarias", "lavado"],
        "respuesta": "El dinero está en paraísos fiscales y criptoactivos, difícil de rastrear para ustedes. Mi condición es que no toquen ni un centavo de mis cuentas legales. ¿Tenemos trato o no?"
      },
      {
        "claves": ["firma", "abogado", "fiscalia", "juez"],
        "respuesta": "Tráigame al Fiscal encargado. No acepto tratos de palabra con oficiales de bajo rango. Mi libertad y mi dinero se negocian con quien tenga la firma autorizada."
      },
    { "claves": ["cuanto ganaba", "cuanto le pagaban", "dinero", "lucro"], "respuesta": "Los laboratorios de cristalización pagan el triple por el ácido grado reactivo que cualquier farmacéutica legítima. Es una simple cuestión de oferta, demanda y cálculo de riesgo." },
    { "claves": ["tiene miedo", "le da miedo el guajiro", "porque no hablo antes", "amenazas"], "respuesta": "Si hablo, aparezco flotando en el río. Ustedes tienen patrullas, chalecos y sistemas de protección; yo solo tengo pipetas, matraces y una cuenta bancaria que no justifica mi muerte." },
    { "claves": ["ruta", "donde entrega", "como llegaba", "logistica"], "respuesta": "El furgón tomaba la ruta del sur. Se detienen en puntos ciegos de la carretera. No es algo que pueda explicarle en un mapa sencillo, oficial, la logística es tan compleja como la misma química." },
    { "claves": ["proceso", "sintesis", "reaccion", "como lo hacia"], "respuesta": "Usted no entendería la cinética de la reacción de síntesis ni el control de pureza que requiere, así que no pierda tiempo preguntando cómo lo hacía. Solo sepa que el producto final era impecable." },
    { "claves": ["idiota", "no me crea", "le estoy mintiendo", "piensa que soy tonto"], "respuesta": "Piense lo que quiera. La ignorancia es el estado natural de la mayoría, incluso en la policía. Yo ya entregué los datos, haga su trabajo y verifique." },
    { "claves": ["arrepentido", "se arrepiente"], "respuesta": "La ciencia no conoce el arrepentimiento, solo el resultado de las variables. Cometí un error de cálculo al confiar en criminales, eso es todo." },
    { "claves": ["socio", "socios", "quien mas esta implicado"], "respuesta": "Yo no tengo socios, tengo clientes. Y los clientes en este negocio no dan tarjetas de presentación." },
    { "claves": ["almacenamiento", "donde guarda el acido", "bodega"], "respuesta": "Tengo contenedores de doble pared con sensores de presión. No es tan fácil como 'guardar' ácido; requiere un manejo de estabilidad atmosférica constante." },
    { "claves": ["calidad", "pureza", "concentracion"], "respuesta": "El ácido que les enviaba era de una pureza del 99%. Cualquiera con un mínimo de conocimiento químico sabe que eso no se consigue en cualquier lado." },
    { "claves": ["hija", "hijo", "familia en peligro"], "respuesta": "(Su voz tiembla por un segundo) No mencione a mi familia. Ellos no tienen nada que ver con mis decisiones contables ni con mis tratos con El Guajiro." },
    { "claves": ["como le va", "como esta", "como se encuentra", "como le ha ido", "hola"], "respuesta": "Físicamente estable. Mentalmente, procesando la incoherencia de esta citación. Seamos breves." },
    { "claves": ["contarme", "que tiene", "cuenteme"], "respuesta": "No estoy aquí para narrar anécdotas, oficial. Exponga sus premisas y yo le daré las variables." },
    { "claves": ["que mas", "que más", "todo bien", "como va todo"], "respuesta": "Mis reacciones en el laboratorio quedaron pausadas, lo cual afectará mis curvas de rendimiento de hoy." },
    { "claves": ["que hace", "a que se dedica", "que esta haciendo"], "respuesta": "Soy Químico Industrial, dirijo mi propio laboratorio de síntesis de compuestos y solventes." },
    { "claves": ["como amanecio", "como amaneció", "amanecio bien"], "respuesta": "Madrugué a calibrar el espectrómetro de masas. Una rutina estándar de control de calidad." },
    { "claves": ["como estuvo el viaje", "como le fue en el viaje"], "respuesta": "Llegué en mi vehículo sin contratiempos, aplicando las leyes básicas de la cinemática." },
    { "claves": ["gracias", "muchas gracias"], "respuesta": "Es pura lógica, no requiere agradecimiento." },
    { "claves": ["permiso", "con permiso"], "respuesta": "Avance con su interrogatorio." },
    { "claves": ["disculpe", "perdon", "perdón"], "respuesta": "El error es humano, la corrección es científica." },
    { "claves": ["buen trabajo", "muy bien", "excelente"], "respuesta": "Mi trabajo es exacto, no está sujeto a interpretaciones subjetivas." },
    { "claves": ["como esta el clima", "clima", "tiempo"], "respuesta": "El clima exterior no me interesa, solo la temperatura de ebullición dentro de mis instalaciones." },
    { "claves": ["esta comoda", "necesita algo", "quiere agua", "silla", "sed"], "respuesta": "La ergonomía de esta silla me causará una lesión lumbar. Y sí, requiero agua filtrada para la deshidratación." },
    { "claves": ["como se siente", "como se siente hoy", "sentimientos"], "respuesta": "Los sentimientos no aplican en la tabla periódica. Solo analizo los hechos de manera racional." },
    { "claves": ["que tal el dia", "como va el dia"], "respuesta": "Deficiente. Mi tiempo es demasiado valioso para gastarlo en suposiciones de un oficial." },
    { "claves": ["esta nerviosa", "nerviosa", "preocupada", "nervioso", "preocupado"], "respuesta": "Estoy sufriendo de paranoia leve... Es común cuando eres científico en un país donde todo lo asocian al narcotráfico." },
    { "claves": ["tiene hambre", "ha comido", "desayuno", "glucosa"], "respuesta": "Mi índice glucémico está bajando drásticamente. Requiero carbohidratos complejos pronto." },
    { "claves": ["esta cansada", "esta cansado", "quiere descansar"], "respuesta": "Mi capacidad cognitiva sigue intacta, podemos terminar si usa métodos eficientes." },
    { "claves": ["de donde es", "donde nacio", "lugar de nacimiento"], "respuesta": "Nací en una ciudad del interior del país, pero me eduqué en la capital." },
    { "claves": ["cuantos años tiene", "edad", "que edad tiene"], "respuesta": "Tengo 45 años, la plenitud intelectual de un investigador." },
    { "claves": ["como esta la familia", "su familia", "todo bien en casa", "esposa"], "respuesta": "Soy soltero. La investigación científica de alto nivel es celosa, no deja espacio para relaciones mundanas." },
    { "claves": ["fin de semana", "descanso", "tiempo libre"], "respuesta": "Leo revistas indexadas o avanzo en mis experimentos de polímeros. No desperdicio tiempo." },
    { "claves": ["aficiones", "hobbies", "pasatiempos", "amigos", "ramirez"], "respuesta": "Mi única afición es jugar ajedrez en línea con mi colega, el Doctor Ramírez." },
    { "claves": ["le gusta su trabajo", "le gusta lo que hace"], "respuesta": "La ciencia no es de 'gustos', es mi absoluta vocación existencial." },
    { "claves": ["como empezo", "como inicio", "inicios"], "respuesta": "Destacando sobre mis mediocres compañeros en la universidad hasta registrar mis propias patentes." },
    { "claves": ["mucho trabajo", "ocupada", "ocupado", "agenda"], "respuesta": "Produzco solventes de manera industrial. Las máquinas requieren supervisión perpetua." },
    { "claves": ["estudios", "universidad", "formacion academica", "nacional"], "respuesta": "Egresado Magna Cum Laude de Química Industrial de la Universidad Nacional." },
    { "claves": ["clientes importantes", "empresas grandes", "mejores clientes"], "respuesta": "Proveo estabilizadores a la industria farmacéutica. Todo documentado y facturado." },
    { "claves": ["dian", "autoridad tributaria", "ministerio", "ambiental", "formularios"], "respuesta": "Cumplo con las normativas. Si me atraso en un formulario del Ministerio del Medio Ambiente, eso no me hace un cartel." },
    { "claves": ["auditoria", "auditorias", "revision", "acido", "inventarios", "errores"], "respuesta": "El espectrómetro falló. Los descuadres de ácido clorhídrico son un margen de error estadístico natural por evaporación." },
    { "claves": ["te entiendo", "quiero ayudarte", "busquemos una solucion", "confia en mi"], "respuesta": "(Se acomoda los lentes) Es refrescante hablar con alguien que usa la lógica deductiva. Si me garantiza que mi licencia para operar no será revocada, miren los despachos de los martes en la madrugada y busquen al conductor." },
    { "claves": ["guajiro", "conductor", "martes", "camion", "logos", "ministerio de agricultura"], "respuesta": "El conductor es alias 'El Guajiro'. Transporta el ácido en un furgón térmico con logos falsificados del 'Ministerio de Agricultura' para saltarse impunemente todos los retenes militares." },
    { "claves": ["acepte", "confiese", "diga la verdad", "sabemos todo"], "respuesta": "Mi investigación estaba quebrada por falta de apoyo bancario... Sí, cedí. Preparaba lotes de ácido al 99% de pureza sabiendo que El Guajiro los bajaba a los laboratorios de cristalización de coca en el Putumayo. Alteraba los balances de masa para tapar los huecos, y ellos me pagaban el triple en efectivo." },
    { "claves": ["hola", "buenos", "dias", "días", "tardes", "noches"], "respuesta": "Buenas... aunque no entiendo por qué estoy aquí. Todo esto debe ser un error administrativo." },
    { "claves": ["como estas", "como te sientes", "como te ido"], "respuesta": "En realidad muy bien." },
    { "claves": ["bienvenido"], "respuesta": "gracias por su hospitalidad" },
    { "claves": ["confio", "cofia"], "respuesta": "estamos para ayudarte" },
    { "claves": ["ayudar", "en que me puedes ayudar", "ayudarme", "deje se ayudar"], "respuesta": "no quiero ayuda quiero beneficios" },
    { "claves": ["beneficios quieres", "que beneficios", "que tipo de beneficio"], "respuesta": "quiero plata" },
    { "claves": ["buenn trabajo", "que tal su trabajo ", " como trabaja "], "respuesta": "en mi trabajo soy responsable en el hacer las cosas" },
    { "claves": ["nombre", "nombres", "apellidos", "quien eres"], "respuesta": "Mi nombre es Marlín Eduardo Gutiérrez Sánchez." },
    { "claves": ["identificacion", "identificación", "cedula", "cédula", "cc"], "respuesta": "Mi cédula es 1.000.587.963 expedida en Pereira." },
    { "claves": ["profesion", "profesión", "quimico", "químico", "oficio"], "respuesta": "Soy Químico Industrial, egresado de la Universidad Nacional de Colombia." },
    { "claves": ["empresa", "laboratorio", "negocio"], "respuesta": "Dirijo un laboratorio químico dedicado a la síntesis de compuestos industriales de uso legal." },
    { "claves": ["productos", "quimicos", "químicos", "produce"], "respuesta": "Producimos solventes, ácidos y bases utilizadas en la industria farmacéutica y manufacturera." },
    { "claves": ["licencia", "permiso", "permisos"], "respuesta": "Todas nuestras operaciones están respaldadas por licencias ambientales vigentes." },
    { "claves": ["certificacion", "certificación", "normas", "iso"], "respuesta": "Cumplimos con normativas ISO y estándares técnicos exigidos para la manipulación de químicos." },
    { "claves": ["clientes", "venta", "distribucion", "distribución"], "respuesta": "Trabajamos con diferentes empresas. Por confidencialidad comercial no puedo dar nombres." },
    { "claves": ["insumos", "precursores", "quimicos controlados"], "respuesta": "Sí, manejamos insumos controlados, pero todos están reportados según exige la ley." },
    { "claves": ["acido", "acido clorhidrico", "ácido clorhídrico"], "respuesta": "El ácido clorhídrico es un insumo básico en múltiples procesos industriales. Su volumen depende de la demanda." },
    { "claves": ["compras", "cantidades", "volumen"], "respuesta": "Las compras responden a proyecciones de producción. No hay nada irregular en eso." },
    { "claves": ["discrepancias", "faltantes", "registros"], "respuesta": "Cualquier diferencia en registros puede ser un error administrativo o contable, no necesariamente algo ilegal." },
    { "claves": ["clientes inexistentes", "no hay clientes", "volumen sin justificar"], "respuesta": "Eso es una interpretación suya. Tenemos contratos, aunque no todos son públicos." },
    { "claves": ["contactos", "relaciones", "personas", "vinculos"], "respuesta": "En mi trabajo conozco mucha gente del sector industrial. No puedo responder por lo que otros hagan." },
    { "claves": ["droga", "cocaina", "cocaína", "ilegal", "trafico"], "respuesta": "Rechazo completamente esa acusación. Yo no produzco ni participo en nada ilegal." },
    { "claves": ["confiese", "verdad", "sabemos", "pruebas"], "respuesta": "Mire... en esta industria hay presiones. Uno compra, produce y despacha. A veces no hace muchas preguntas sobre el destino final... pero eso no significa que yo esté fabricando nada ilegal directamente." },
    { "claves": ["quienes", "red", "organizacion", "quien mas"], "respuesta": "Yo solo manejo la parte técnica. Hay intermediarios que se encargan de la distribución... gente que no aparece en papeles. Si quieren nombres, esto ya no es solo un tema químico, es algo mucho más grande." },
    {
        "claves": ["hechos", "que hiciste", "como operabas", "proceso"],
        "respuesta": "Si acordamos beneficios, le daré la metodología completa. Básicamente, adulteraba los balances de masa en los registros del software de inventario. Reportaba un 15% de merma por 'evaporación' que en realidad se enviaba a la cristalización. ¿Va a anotar esto o sigo esperando mi garantía de seguridad?"
      },
      {
        "claves": ["fechas", "cuando enviabas", "frecuencia", "martes"],
        "respuesta": "Los despachos salían todos los martes a las 03:00 AM. La bitácora de salida de vehículos del laboratorio tiene registros falsos de 'entrega de solventes a la industria textil'. Busque el camión placa TZY-942, está bajo el nombre de una empresa fachada llamada 'Químicos del Centro S.A.S'."
      },
      {
        "claves": ["logistica", "ruta", "donde iban", "guajiro", "camion"],
        "respuesta": "El furgón térmico con logos del Ministerio de Agricultura nunca pasa por las básculas principales. Toman la ruta secundaria que atraviesa la vereda 'El Silencio' hasta el sector de la Vega. Allí hacen el transbordo a los cristalizadores del Putumayo. Si montan un puesto de control en el kilómetro 42, los interceptan con el ácido."
      },
      {
        "claves": ["pagos", "dinero", "cuentas", "bancos", "transacciones"],
        "respuesta": "El pago por cada tonelada de ácido no entraba al banco, eso sería una estupidez técnica. Me pagaban mediante 'mulas' de criptoactivos en una wallet fría, y el remanente en efectivo lo entregaba un testaferro apodado 'El Contador' en un parqueadero del centro. ¿Suficiente evidencia para mover mi caso a la fiscalía?"
      },
      {
        "claves": ["documentos", "pruebas", "archivos", "libros"],
        "respuesta": "Tengo un disco duro oculto en el falso fondo de mi espectrómetro con las facturas reales y los nombres de los contactos en el Putumayo. Si me garantizan los beneficios, le entrego la ubicación y la clave de cifrado. Sin esa garantía, ese disco podría sufrir un 'accidente' magnético en cualquier momento."
      },
      {
        "claves": ["participantes", "quien mas", "socios", "organizacion"],
        "respuesta": "No estoy solo. El jefe de logística de la empresa distribuidora de insumos, Roberto 'el Flaco' Méndez, aprobaba las salidas ficticias. Él es el eslabón necesario. ¿Me va a dar la inmunidad o tengo que seguir exponiendo gente?"
      }, {
      "claves": ["guajiro", "quien es el guajiro", "que hace el guajiro"],
      "respuesta": "El Guajiro es un fantasma logístico. Maneja rutas secundarias que ni el ejército controla. Su única obsesión es la eficiencia del transporte; no le importa la química, solo que el cargamento llegue a los cristalizadores del Putumayo sin ser detectado."
    },
    {
      "claves": ["contador", "quien es el contador", "quien maneja la plata"],
      "respuesta": "El Contador es quien hace que el dinero sucio se vea limpio. Se mueve en el centro, cerca de las plazas financieras pero lejos de los bancos. Es metódico, frío, y si le mencionan que estamos hablando, él será el primero en borrar sus huellas y desaparecer."
    },
    {
      "claves": ["flaco", "mendez", "roberto mendez", "gerente suministros"],
      "respuesta": "Roberto 'El Flaco' Méndez es el que abre la puerta. Sin su visto bueno en las órdenes de compra de la distribuidora, yo no tendría forma de desviar ni un gramo de ácido. Él es quien asume el riesgo administrativo. Si él cae, la cadena de suministro se rompe."
    },
    {
      "claves": ["ramirez", "doctor ramirez", "amigo ajedrez"],
      "respuesta": "Ramírez es mi único contacto intelectual. Él cree que hacemos investigación pura, o al menos eso me dice cuando jugamos. Es brillante, pero vive en una burbuja académica. Si la policía lo involucra, se va a quebrar en menos de cinco minutos de interrogatorio."
    },
    {
      "claves": ["seguridad", "peligro", "quien es el mas peligroso"],
      "respuesta": "El Guajiro es peligroso por su capacidad operativa; tiene hombres armados. Pero el Contador es peligroso por su información; sabe quién paga y a quién se le paga. Si quieren desmantelar esto, no busquen al transportista, busquen al que maneja las cuentas."
    },
    { "claves": ["nombre", "quien eres"], "respuesta": "Marlín Eduardo Gutiérrez Sánchez." },
    { "claves": ["trabajo", "a que se dedica"], "respuesta": "Soy Químico Industrial, dirijo mi laboratorio. Todo es 100% legal." },
    { "claves": ["acido", "insumos", "precursores"], "respuesta": "Es un insumo básico. Cualquier descuadre es un margen de error estadístico por evaporación." },
    { "claves": ["clientes", "ventas"], "respuesta": "Proveo a la industria farmacéutica. Por cláusulas de confidencialidad, no puedo dar nombres." },
    { "claves": ["droga", "cocaina", "ilegal"], "respuesta": "Eso es una acusación infundada y ofensiva. Mi trabajo es la síntesis de solventes, no el narcotráfico." },
    { 
      "claves": ["guajiro", "ruta", "camion", "logistica"], 
      "respuesta": "Hablemos de beneficios primero. Si me garantizan inmunidad y protección, le doy la ruta y el contacto del Guajiro." 
    },
    { 
      "claves": ["contador", "dinero", "bancos", "lavado"], 
      "respuesta": "El Contador maneja eso. No soltaré información sobre el flujo de dinero hasta que no vea un acuerdo de inmunidad firmado." 
    },
    { 
      "claves": ["disco duro", "pruebas", "facturas", "ramirez"], 
      "respuesta": "Tengo las pruebas que buscan, pero si no me aseguran que mi familia saldrá del país, ese disco duro se destruye." 
    },
    { 
      "claves": ["ayuda", "colaboracion", "beneficios", "trato", "plata"], 
      "respuesta": "Mi propuesta es simple: reducción de pena al 50%, protección para mi familia y que no confisquen mis activos legales. ¿Aceptan o no?" 
    },
    { 
      "claves": ["que mas sabe", "cuente mas"], 
      "respuesta": "Sé quién es el cómplice interno, pero la información cuesta. ¿Ya tenemos el trato o seguimos perdiendo el tiempo?" 
    },
    // CHARLA CASUAL Y CORTESÍA
            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "hola"], respuesta: "Físicamente estable. Mentalmente, procesando la incoherencia de esta citación. Seamos breves." },
            { claves: ["contarme", "que tiene", "cuenteme"], respuesta: "No estoy aquí para narrar anécdotas, oficial. Exponga sus premisas y yo le daré las variables." },
            { claves: ["que mas", "que más", "todo bien", "como va todo"], respuesta: "Mis reacciones en el laboratorio quedaron pausadas, lo cual afectará mis curvas de rendimiento de hoy." },
            { claves: ["que hace", "a que se dedica", "que esta haciendo"], respuesta: "Soy Químico Industrial, dirijo mi propio laboratorio de síntesis de compuestos y solventes." },
            { claves: ["como amanecio", "como amaneció", "amanecio bien"], respuesta: "Madrugué a calibrar el espectrómetro de masas. Una rutina estándar de control de calidad." },
            { claves: ["como estuvo el viaje", "como le fue en el viaje"], respuesta: "Llegué en mi vehículo sin contratiempos, aplicando las leyes básicas de la cinemática." },
            { claves: ["gracias", "muchas gracias"], respuesta: "Es pura lógica, no requiere agradecimiento." },
            { claves: ["permiso", "con permiso"], respuesta: "Avance con su interrogatorio." },
            { claves: ["disculpe", "perdon", "perdón"], respuesta: "El error es humano, la corrección es científica." },
            { claves: ["buen trabajo", "muy bien", "excelente"], respuesta: "Mi trabajo es exacto, no está sujeto a interpretaciones subjetivas." },
            { claves: ["como esta el clima", "clima", "tiempo"], respuesta: "El clima exterior no me interesa, solo la temperatura de ebullición dentro de mis instalaciones." },

            // FISIOLOGÍA Y EMOCIONES
            { claves: ["esta comoda", "necesita algo", "quiere agua", "silla", "sed"], respuesta: "La ergonomía de esta silla me causará una lesión lumbar. Y sí, requiero agua filtrada para la deshidratación." },
            { claves: ["como se siente", "como se siente hoy", "sentimientos"], respuesta: "Los sentimientos no aplican en la tabla periódica. Solo analizo los hechos de manera racional." },
            { claves: ["que tal el dia", "como va el dia"], respuesta: "Deficiente. Mi tiempo es demasiado valioso para gastarlo en suposiciones de un oficial." },
            { claves: ["esta nerviosa", "nerviosa", "preocupada", "nervioso", "preocupado"], respuesta: "Estoy sufriendo de paranoia leve... Es común cuando eres científico en un país donde todo lo asocian al narcotráfico." },
            { claves: ["tiene hambre", "ha comido", "desayuno", "glucosa"], respuesta: "Mi índice glucémico está bajando drásticamente. Requiero carbohidratos complejos pronto." },
            { claves: ["esta cansada", "esta cansado", "quiere descansar"], respuesta: "Mi capacidad cognitiva sigue intacta, podemos terminar si usa métodos eficientes." },

            // DEMOGRAFÍA Y VIDA PERSONAL
            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"], respuesta: "Nací en una ciudad del interior del país, pero me eduqué en la capital." },
            { claves: ["cuantos años tiene", "edad", "que edad tiene"], respuesta: "Tengo 45 años, la plenitud intelectual de un investigador." },
            { claves: ["como esta la familia", "su familia", "todo bien en casa", "esposa"], respuesta: "Soy soltero. La investigación científica de alto nivel es celosa, no deja espacio para relaciones mundanas." },
            { claves: ["fin de semana", "descanso", "tiempo libre"], respuesta: "Leo revistas indexadas o avanzo en mis experimentos de polímeros. No desperdicio tiempo." },
            { claves: ["aficiones", "hobbies", "pasatiempos", "amigos", "ramirez"], respuesta: "Mi única afición es jugar ajedrez en línea con mi colega, el Doctor Ramírez." },
            { claves: ["le gusta su trabajo", "le gusta lo que hace"], respuesta: "La ciencia no es de 'gustos', es mi absoluta vocación existencial." },
            { claves: ["como empezo", "como inicio", "inicios"], respuesta: "Destacando sobre mis mediocres compañeros en la universidad hasta registrar mis propias patentes." },
            { claves: ["mucho trabajo", "ocupada", "ocupado", "agenda"], respuesta: "Produzco solventes de manera industrial. Las máquinas requieren supervisión perpetua." },
            { claves: ["estudios", "universidad", "formacion academica", "nacional"], respuesta: "Egresado Magna Cum Laude de Química Industrial de la Universidad Nacional." },

            // CASO Y RAPPORT (FASES 1, 2, 3)
            { claves: ["clientes importantes", "empresas grandes", "mejores clientes"], respuesta: "Proveo estabilizadores a la industria farmacéutica. Todo documentado y facturado." },
            { claves: ["dian", "autoridad tributaria", "ministerio", "ambiental", "formularios"], respuesta: "Cumplo con las normativas. Si me atraso en un formulario del Ministerio del Medio Ambiente, eso no me hace un cartel." },
            { claves: ["auditoria", "auditorias", "revision", "acido", "inventarios", "errores"], respuesta: "El espectrómetro falló. Los descuadres de ácido clorhídrico son un margen de error estadístico natural por evaporación." },
            { claves: ["te entiendo", "quiero ayudarte", "busquemos una solucion", "confia en mi"], respuesta: "(Se acomoda los lentes) Es refrescante hablar con alguien que usa la lógica deductiva. Si me garantiza que mi licencia para operar no será revocada, miren los despachos de los martes en la madrugada y busquen al conductor." },
            { claves: ["guajiro", "conductor", "martes", "camion", "logos", "ministerio de agricultura"], respuesta: "El conductor es alias 'El Guajiro'. Transporta el ácido en un furgón térmico con logos falsificados del 'Ministerio de Agricultura' para saltarse impunemente todos los retenes militares." },
            { claves: ["acepte", "confiese", "diga la verdad", "sabemos todo"], respuesta: "Mi investigación estaba quebrada por falta de apoyo bancario... Sí, cedí. Preparaba lotes de ácido al 99% de pureza sabiendo que El Guajiro los bajaba a los laboratorios de cristalización de coca en el Putumayo. Alteraba los balances de masa para tapar los huecos, y ellos me pagaban el triple en efectivo." },


            // SALUDO
            {
                claves: ["hola", "buenos", "dias", "días", "tardes", "noches"],
                respuesta: "Buenas... aunque no entiendo por qué estoy aquí. Todo esto debe ser un error administrativo."
            },

            { claves: ["como estas", "como te sientes", "como te ido"], respuesta: "En realidad muy bien." },
            { claves: ["bienvenido", "bienvenido"], respuesta: "gracias por su hospitalidad" },
            { claves: ["confio", "cofia"], respuesta: "estamos para ayudarte" },
            { claves: ["ayudar", "en que me puedes ayudar", "ayudarme", "deje se ayudar"], respuesta: "no quiero ayuda quiero beneficios" },
            { claves: ["beneficios quieres", "que beneficios", "que  tipo de beneficio "], respuesta: "quiero plata" }, { claves: ["buenn trabajo", "que tal su trabajo ", " como trabaja "], respuesta: "en mi trabajo soy responsable en el hacer las cosas" },


            // IDENTIDAD
            {
                claves: ["nombre", "nombres", "apellidos", "quien eres"],
                respuesta: "Mi nombre es Marlín Eduardo Gutiérrez Sánchez."
            },

            {
                claves: ["identificacion", "identificación", "cedula", "cédula", "cc"],
                respuesta: "Mi cédula es 1.000.587.963 expedida en Pereira."
            },

            {
                claves: ["profesion", "profesión", "quimico", "químico", "oficio"],
                respuesta: "Soy Químico Industrial, egresado de la Universidad Nacional de Colombia."
            },

            // LABORATORIO
            {
                claves: ["empresa", "laboratorio", "negocio"],
                respuesta: "Dirijo un laboratorio químico dedicado a la síntesis de compuestos industriales de uso legal."
            },

            {
                claves: ["productos", "quimicos", "químicos", "produce"],
                respuesta: "Producimos solventes, ácidos y bases utilizadas en la industria farmacéutica y manufacturera."
            },

            // LICENCIAS
            {
                claves: ["licencia", "permiso", "permisos"],
                respuesta: "Todas nuestras operaciones están respaldadas por licencias ambientales vigentes."
            },

            {
                claves: ["certificacion", "certificación", "normas", "iso"],
                respuesta: "Cumplimos con normativas ISO y estándares técnicos exigidos para la manipulación de químicos."
            },

            // CLIENTES (evasivo)
            {
                claves: ["clientes", "venta", "distribucion", "distribución"],
                respuesta: "Trabajamos con diferentes empresas. Por confidencialidad comercial no puedo dar nombres."
            },

            // INSUMOS SOSPECHOSOS
            {
                claves: ["insumos", "precursores", "quimicos controlados"],
                respuesta: "Sí, manejamos insumos controlados, pero todos están reportados según exige la ley."
            },

            {
                claves: ["acido", "acido clorhidrico", "ácido clorhídrico"],
                respuesta: "El ácido clorhídrico es un insumo básico en múltiples procesos industriales. Su volumen depende de la demanda."
            },

            {
                claves: ["compras", "cantidades", "volumen"],
                respuesta: "Las compras responden a proyecciones de producción. No hay nada irregular en eso."
            },

            // INCONSISTENCIAS
            {
                claves: ["discrepancias", "faltantes", "registros"],
                respuesta: "Cualquier diferencia en registros puede ser un error administrativo o contable, no necesariamente algo ilegal."
            },

            {
                claves: ["clientes inexistentes", "no hay clientes", "volumen sin justificar"],
                respuesta: "Eso es una interpretación suya. Tenemos contratos, aunque no todos son públicos."
            },

            // CONTACTOS CRIMINALES
            {
                claves: ["contactos", "relaciones", "personas", "vinculos"],
                respuesta: "En mi trabajo conozco mucha gente del sector industrial. No puedo responder por lo que otros hagan."
            },

            // NEGACIÓN DIRECTA
            {
                claves: ["droga", "cocaina", "cocaína", "ilegal", "trafico"],
                respuesta: "Rechazo completamente esa acusación. Yo no produzco ni participo en nada ilegal."
            },

            // PRESIÓN / QUIEBRE
            {
                claves: ["confiese", "verdad", "sabemos", "pruebas"],
                respuesta: "Mire... en esta industria hay presiones. Uno compra, produce y despacha. A veces no hace muchas preguntas sobre el destino final... pero eso no significa que yo esté fabricando nada ilegal directamente."
            },

            {
                claves: ["quienes", "red", "organizacion", "quien mas"],
                respuesta: "Yo solo manejo la parte técnica. Hay intermediarios que se encargan de la distribución... gente que no aparece en papeles. Si quieren nombres, esto ya no es solo un tema químico, es algo mucho más grande."
            }
        ],

        desconocido: "No entiendo su pregunta. ¿Puede ser más específico?"
    },

    "caso_006": {
        id: "caso_006",
        personaje: "Jorge Alberto Barón Pineda",
        alias: "El Teniente",
        delito: "Corrupción",
        edad: 54,
        intro: "Soy oficial de la Policía Nacional con 28 años de servicio. Esta acusación no solo es falsa, sino que afecta gravemente mi carrera.",

        respuestas: [
            // CHARLA CASUAL Y CORTESÍA
            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "hola"], respuesta: "Buenas, investigador. Hablemos de frente y de oficial a oficial, sin rodeos." },
            { claves: ["contarme", "que tiene", "cuenteme"], respuesta: "No soy de contar historias, soy de rendir informes. Pregunte puntualmente." },
            { claves: ["que mas", "que más", "todo bien", "como va todo"], respuesta: "Revisando el parque automotor y peleando con repuestos viejos en la bodega, lo de siempre." },
            { claves: ["que hace", "a que se dedica", "que esta haciendo"], respuesta: "Soy Teniente, Director de Logística Institucional. Manejo las licitaciones para mantener la flota operativa." },
            { claves: ["como amanecio", "como amaneció", "amanecio bien"], respuesta: "De pie antes de que salga el sol. Esa es la vida militar." },
            { claves: ["como estuvo el viaje", "como le fue en el viaje"], respuesta: "Llegué en mi patrulla de transporte. Todo en orden." },
            { claves: ["gracias", "muchas gracias"], respuesta: "No agradezca, es el deber." },
            { claves: ["permiso", "con permiso"], respuesta: "Siga, el terreno es suyo." },
            { claves: ["disculpe", "perdon", "perdón"], respuesta: "Ajuste el tiro y pregunte de nuevo." },
            { claves: ["buen trabajo", "muy bien", "excelente"], respuesta: "28 años de servicio impecable lo demuestran, a pesar de estas acusaciones indignantes." },
            { claves: ["como esta el clima", "clima", "tiempo"], respuesta: "He patrullado bajo granizadas en el páramo, el clima de Bogotá es un paseo." },
{ claves: ["dinero rapido", "ganancias", "quiero plata"], respuesta: "El dinero rápido siempre tiene un costo." },

{ claves: ["contacto clave", "jefe"], respuesta: "Hay gente más arriba... pero no les gusta ser mencionados." },
            // FISIOLOGÍA Y EMOCIONES
            { claves: ["esta comoda", "necesita algo", "quiere agua", "silla", "frio", "calor"], respuesta: "Dormí sobre raíces y lodo en el Caquetá, esta silla está perfecta. Y el clima de esta oficina no me hace sudar ni temblar." },
            { claves: ["como se siente", "como se siente hoy", "sentimientos"], respuesta: "Traicionado por la cúpula y la institución a la que le di mi sangre." },
            { claves: ["que tal el dia", "como va el dia"], respuesta: "Desperdiciado, respondiendo tonterías mientras el comando se queda sin motos operativas." },
            { claves: ["esta nerviosa", "nerviosa", "preocupada", "nervioso", "preocupado"], respuesta: "El honor no me permite mostrar nervios, pero la decepción es enorme." },
            { claves: ["tiene hambre", "ha comido", "desayuno", "raciones"], respuesta: "Aprendí a funcionar tres días con media ración de campaña. Su hambre no me afecta." },
            { claves: ["esta cansada", "esta cansado", "quiere descansar", "heridas", "esquirlas"], respuesta: "Tengo esquirlas de granada en mi rodilla que me duelen cuando hace frío. Pero no estoy cansado." },

            // DEMOGRAFÍA Y VIDA PERSONAL
            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"], respuesta: "Nacido en el interior, pero mi hogar han sido los comandos de todo el país." },
            { claves: ["cuantos años tiene", "edad", "que edad tiene"], respuesta: "54 años, y más de la mitad dedicados a la Policía." },
            { claves: ["como esta la familia", "su familia", "todo bien en casa", "esposa", "matrimonio", "hijos"], respuesta: "Mi matrimonio es de apariencia hace diez años por los traslados castigo. Mi única esposa es la institución." },
            { claves: ["fin de semana", "descanso", "tiempo libre"], respuesta: "Reviso informes de mantenimiento, la logística no duerme." },
            { claves: ["aficiones", "hobbies", "pasatiempos", "tejo", "mayor castro", "amigos"], respuesta: "Los domingos juego tejo en el club de oficiales y me tomo un trago con mi Mayor Castro, el único amigo limpio que me queda." },
            { claves: ["le gusta su trabajo", "le gusta lo que hace"], respuesta: "Es una vocación, no un gusto. Uno entra aquí a servir a la patria." },
            { claves: ["como empezo", "como inicio", "inicios"], respuesta: "Desde cadete raso, aguantando humillaciones, hasta ganarme estas barras en los hombros." },
            { claves: ["mucho trabajo", "ocupada", "ocupado", "agenda", "recortes"], respuesta: "Haciendo magia. El Ministerio nos quitó el 20% del presupuesto y pretenden que reparemos motos con aire." },
            { claves: ["estudios", "universidad", "formacion academica", "general santander"], respuesta: "Egresado de la Escuela de Cadetes General Santander. Formación castrense estricta." },

            // CASO Y RAPPORT (FASES 1, 2, 3)
            { claves: ["clientes importantes", "empresas grandes", "contratistas", "suministros integrales", "lobista"], respuesta: "Trato con empresas que ganan en plataforma. Si Suministros Integrales ganó y mandó repuestos chinos, demanden al proveedor." },
            { claves: ["dian", "autoridad", "estado", "sueldo"], respuesta: "El Estado recorta el presupuesto y a uno lo mandan a poner el pecho por un sueldo que apenas da para el arriendo." },
            { claves: ["auditoria", "auditorias", "revision", "secop", "actas"], respuesta: "Todo está en el SECOP transparente. Yo evalúo partes técnicas, si la secretaria firmó recibidos de llantas malas, es problema de ella." },
            { claves: ["te entiendo", "quiero ayudarte", "busquemos una solucion", "confia en mi"], respuesta: "(Baja la guardia, exhala) Usted sabe que a los mandos medios siempre nos usan de chivos expiatorios. Si aseguran que mi pensión de retiro no se toca para mis hijos, miren hacia arriba, fíjese en el Coronel de occidente." },
            { claves: ["coronel", "occidente", "esposa", "concesionarios", "vargas", "padrino"], respuesta: "El Coronel Vargas. Él aprobaba todo en la Junta de Adquisiciones. El lobista 'El Padrino' se reunía con la esposa de Vargas, y de la noche a la mañana a ella le brotaron tres concesionarios inmensos de motos en la calle 80." },
            { claves: ["acepte", "confiese", "diga la verdad", "sabemos todo"], respuesta: "Fui un cobarde por no denunciar... Sí, yo le pasaba por correo encriptado los pliegos técnicos a Suministros Integrales semanas antes de subirlos a la web para que ganaran fácil. Obligué a mi secretaria a firmar los recibidos malos porque Vargas me exigía su cuota en maletas de efectivo, y mi parte del soborno era para no estorbar el robo." },

            // SALUDO
            {
                claves: ["hola", "buenos", "dias", "tardes", "noches"],
                respuesta: "Buenas. Estoy dispuesto a colaborar, pero espero que esto se maneje con el debido respeto institucional."
            },


            { claves: ["como estas", "como te sientes", "como te ido"], respuesta: "En realidad muy bien." },
            { claves: ["bienvenido", "bienvenido"], respuesta: "gracias por su hospitalidad" },
            { claves: ["confio", "cofia"], respuesta: "estamos para ayudarte" },
            { claves: ["ayudar", "en que me puedes ayudar", "ayudarme", "deje se ayudar"], respuesta: "no quiero ayuda quiero beneficios" },
            { claves: ["beneficios quieres", "que beneficios", "que  tipo de beneficio "], respuesta: "quiero plata" }, { claves: ["buenn trabajo", "que tal su trabajo ", " como trabaja "], respuesta: "en mi trabajo soy responsable en el hacer las cosas" },
            // IDENTIDAD
            {
                claves: ["nombre", "quien eres", "nombres y apellidos", "nombres", "Nombres"],
                respuesta: "Mi nombre es Jorge Alberto Barón Pineda."
            },

            {
                claves: ["identificacion", "identificación", "cedula", "cédula", "cc"],
                respuesta: "Mi cédula es 79.556.234 expedida en Bogotá."
            },

            {
                claves: ["grado", "rango"],
                respuesta: "Tengo el grado de Teniente, con 28 años de servicio continuo en la institución."
            },

            // CARGO
            {
                claves: ["puesto", "cargo", "trabajo"],
                respuesta: "Me desempeño en la Dirección de Logística Institucional, coordinando procesos de contratación."
            },

            {
                claves: ["funciones", "responsabilidades"],
                respuesta: "Superviso adquisiciones, mantenimiento de equipos y cumplimiento contractual en procesos logísticos."
            },

            // LICITACIONES
            {
                claves: ["licitacion", "licitación", "pliegos", "contratos"],
                respuesta: "Todos los procesos de licitación se estructuran conforme a la ley y son publicados en SECOP con total transparencia."
            },

            {
                claves: ["secop", "publicacion", "filtracion"],
                respuesta: "La información que se publica en SECOP sigue protocolos estrictos. Yo no manejo filtraciones de ningún tipo."
            },

            // EMPRESAS SOSPECHOSAS
            {
                claves: ["suministros integrales", "empresa", "contratista"],
                respuesta: "Esa empresa cumple con los requisitos legales. Si ha ganado contratos, es porque ha presentado las mejores ofertas."
            },

            // LOBISTA
            {
                claves: ["padrino", "lobista", "contacto"],
                respuesta: "No reconozco a nadie con ese alias. Mis relaciones con el sector privado son estrictamente profesionales."
            },

            {
                claves: ["restaurante", "teusaquillo", "reunion"],
                respuesta: "He tenido reuniones fuera de la oficina, sí, pero siempre en el marco de conversaciones legales con proveedores."
            },

            // CORREO ENCRIPTADO
            {
                claves: ["correo", "encriptado", "filtracion", "informacion anticipada"],
                respuesta: "No utilizo canales irregulares. Toda comunicación oficial se realiza por medios institucionales."
            },

            // SOBRE COSTOS
            {
                claves: ["sobrecosto", "sobreprecio", "corrupcion contratos"],
                respuesta: "Los valores contractuales son evaluados por múltiples áreas. Yo no fijo precios de manera arbitraria."
            },

            {
                claves: ["calidad", "productos defectuosos", "inferior"],
                respuesta: "Si hubo fallas en calidad, deben ser responsabilidad del proveedor. Existen interventorías para eso."
            },

            // MOTOCICLETAS
            {
                claves: ["motocicletas", "flota", "fontibon", "parqueadero"],
                respuesta: "He supervisado entregas logísticas, pero no tengo conocimiento de alteraciones en los equipos."
            },

            // PATRIMONIO
            {
                claves: ["patrimonio", "bienes", "condominio", "propiedad"],
                respuesta: "Mis bienes corresponden a años de servicio, ahorros y créditos legales. Todo puede ser verificado."
            },

            // SECRETARIA
            {
                claves: ["secretaria", "asistente", "actas"],
                respuesta: "Mi equipo administrativo cumple funciones operativas. No tengo conocimiento de alteraciones documentales."
            },

            // NEGACIÓN DIRECTA
            {
                claves: ["corrupcion", "robo", "fraude", "delito"],
                respuesta: "Rechazo completamente esas acusaciones. He servido a esta institución con integridad durante casi tres décadas."
            },

            // PRESIÓN (empieza a ceder)
            {claves: ["sabemos", "pruebas", "confiese", "verdad"],
                respuesta: "Mire... los procesos no son tan limpios como parecen. Hay presiones desde arriba, decisiones que uno no siempre controla. Uno ejecuta... no siempre decide."
            },
            // QUIEBRE
            {
                claves: ["quienes", "red", "involucrados", "quien mas"],
                respuesta: "Esto no funciona solo. Las empresas ya llegan perfiladas, los pliegos se ajustan... y hay gente que nunca firma nada pero mueve todo. Si quieren nombres, esto escala más arriba de mi rango."
            }
        ],

        desconocido: "No entiendo su pregunta. ¿Puede ser más específico?"
    },

    "caso_007": {
        id: "caso_007",
        personaje: "Paola Andrea Martínez Vega",
        alias: "La Doctora",
        delito: "Ejercicio ilegal de la medicina y prescripción fraudulenta",
        edad: 38,
        intro: "Soy médica general titulada. Todo lo que hago está enfocado en ayudar a mis pacientes, no entiendo por qué estoy aquí.",

        respuestas: [
            // CHARLA CASUAL Y CORTESÍA
            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "hola"], respuesta: "Buenos días. Bastante ofendida por el trato, necesito llamar a mis pacientes de post-operatorio, así que apurémonos." },
            { claves: ["contarme", "que tiene", "cuenteme"], respuesta: "No vine a echar chismes. Si tiene acusaciones formales de alguna cirugía, preséntelas." },
            { claves: ["que mas", "que más", "todo bien", "como va todo"], respuesta: "Todo iba excelente, mi agenda estaba llena de valoraciones para procedimientos estéticos." },
            { claves: ["que hace", "a que se dedica", "que esta haciendo"], respuesta: "Soy Médica General, me dedico a mejorar el autoestima de las mujeres a través de la medicina estética." },
            { claves: ["como amanecio", "como amaneció", "amanecio bien"], respuesta: "Amanecí grabando contenido para mis redes, hoy en día si un médico no se muestra, no vende." },
            { claves: ["como estuvo el viaje", "como le fue en el viaje"], respuesta: "Mi conductor me trajo hasta aquí, pero el tráfico estaba insoportable." },
            { claves: ["gracias", "muchas gracias"], respuesta: "De nada, solo quiero volver a mi clínica." },
            { claves: ["permiso", "con permiso"], respuesta: "Siga, lo escucho." },
            { claves: ["disculpe", "perdon", "perdón"], respuesta: "Más le vale disculparse, mi tiempo clínico es muy costoso." },
            { claves: ["buen trabajo", "muy bien", "excelente"], respuesta: "Obvio, los resultados en los cuerpos de mis pacientes son espectaculares." },
            { claves: ["como esta el clima", "clima", "tiempo"], respuesta: "Horrible. Esta lluvia me daña los peinados y deprime a las pacientes." },

            // FISIOLOGÍA Y EMOCIONES
            { claves: ["esta comoda", "necesita algo", "quiere agua", "silla", "frio", "calor", "asfixia"], respuesta: "Hace un frío espantoso, siento que me asfixio y esta silla me daña la postura. ¿Puede pedirme un té, por favor?" },
            { claves: ["como se siente", "como se siente hoy", "sentimientos"], respuesta: "Siento mucha injusticia. Yo le he cambiado la vida a cientos de chicas deprimidas y así me pagan." },
            { claves: ["que tal el dia", "como va el dia"], respuesta: "Arruinado. Perdí dos mini-lipos que tenía agendadas para esta tarde." },
            { claves: ["esta nerviosa", "nerviosa", "preocupada", "nervioso", "preocupado", "panico", "ansiedad", "taquicardia"], respuesta: "Sufro de ataques de pánico y ansiedad clínica. Estar aquí me está provocando taquicardia." },
            { claves: ["tiene hambre", "ha comido", "desayuno", "dieta"], respuesta: "Hago ayuno intermitente estricto para cuidar mi figura, pero los nervios me dieron gastritis. Pida una ensalada verde." },
            { claves: ["esta cansada", "esta cansado", "quiere descansar"], respuesta: "Agotada. Operar de pie tantas horas destruye las piernas, pero acabemos de una vez." },

            // DEMOGRAFÍA Y VIDA PERSONAL
            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"], respuesta: "Soy de Bogotá, de una familia de muy buen estrato." },
            { claves: ["cuantos años tiene", "edad", "que edad tiene"], respuesta: "38 años, y me mantengo regia gracias a mis propios tratamientos." },
            { claves: ["como esta la familia", "su familia", "todo bien en casa", "esposo", "hijos"], respuesta: "Sin hijos, gracias a Dios. Mi esposo es odontólogo, somos muy independientes, él duerme mientras yo hago turnos nocturnos." },
            { claves: ["fin de semana", "descanso", "tiempo libre"], respuesta: "Casi no descanso, los sábados son los mejores días para inyectar rellenos porque las mujeres no trabajan." },
            { claves: ["aficiones", "hobbies", "pasatiempos", "amigas", "valentina", "ropa"], respuesta: "Almuerzo ensaladas con mi mejor amiga Valentina, que tiene una marca de ropa. Y cuidar mis redes sociales." },
            { claves: ["le gusta su trabajo", "le gusta lo que hace"], respuesta: "Me fascina el glamour, la estética y darle estatus a la gente." },
            { claves: ["como empezo", "como inicio", "inicios"], respuesta: "Empecé haciendo turnos pesados de urgencias hasta que me di cuenta de que la plata real está en la vanidad." },
            { claves: ["mucho trabajo", "ocupada", "ocupado", "agenda", "instagram"], respuesta: "Vivo llena. Entre grabar para Instagram, dar valoraciones y hacer procedimientos, no paro." },
            { claves: ["estudios", "universidad", "formacion academica", "javeriana"], respuesta: "Médica de la Javeriana. Hice diplomados cortos de estética en Brasil. Todo legal." },
{ claves: ["documentos", "papeles", "registros"], respuesta: "Los documentos dicen una cosa... la realidad es otra." },

{ claves: ["legal", "todo legal"], respuesta: "Legal... depende de quién esté revisando." },
            // CASO Y RAPPORT (FASES 1, 2, 3)
            { claves: ["clientes importantes", "empresas grandes", "mejores clientes", "pacientes", "necias"], respuesta: "Atiendo modelos e influencers. Si alguna se infecta es por necia, porque se van a tomar trago en el post-operatorio." },
            { claves: ["dian", "autoridad tributaria", "invima", "secretaria", "salud"], respuesta: "Mi consultorio es estéril y tengo permiso de Secretaría de Salud. El INVIMA a veces es muy burocrático con ciertos insumos europeos." },
            { claves: ["auditoria", "auditorias", "revision", "biopolimeros", "precios"], respuesta: "Aplico ácido hialurónico, si el cuerpo hace granuloma es reacción biológica. Yo cobro lo justo por mi arte." },
            { claves: ["te entiendo", "quiero ayudarte", "busquemos una solucion", "confia en mi"], respuesta: "(Llora y se cruza de brazos) Gracias, a veces siento que todos me atacan por pura envidia. Si me evitan la cárcel de mujeres y no me quitan mi licencia, les digo por qué las fórmulas de sedantes fuertes son tan extrañas. Busquen al anestesiólogo." },
            { claves: ["sedantes", "farmacia", "bulevar", "vencidos", "anestesiologo", "primo"], respuesta: "Mi anestesiólogo está suspendido por mala praxis, operaba conmigo en la sombra. Él tiene un primo dueño de la droguería 'Vida Saludable' en el Bulevar, allá comprábamos anestesia y opioides vencidos a mitad de precio y les cambiaban la etiqueta." },
            { claves: ["acepte", "confiese", "diga la verdad", "sabemos todo"], respuesta: "¡Estaba ahogada por las deudas de los equipos láser! Sí, inyectaba polímeros plásticos líquidos jurando que eran rellenos finos. Hacía liposucciones grandes sin UCI ni condiciones, y usaba sedantes caducados de esa farmacia de contrabando. Todo por mantener la fachada de la clínica. Lo siento." },

            // SALUDO
            {
                claves: ["hola", "buenos", "dias", "tardes", "noches"],
                respuesta: "Buenos días. Espero que esto se aclare rápido, tengo pacientes esperando."
            },


            { claves: ["como estas", "como te sientes", "como te ido"], respuesta: "En realidad muy bien." },
            { claves: ["bienvenido", "bienvenido"], respuesta: "gracias por su hospitalidad" },
            { claves: ["confio", "cofia"], respuesta: "estamos para ayudarte" },
            { claves: ["ayudar", "en que me puedes ayudar", "ayudarme", "deje se ayudar"], respuesta: "no quiero ayuda quiero beneficios" },
            { claves: ["beneficios quieres", "que beneficios", "que  tipo de beneficio "], respuesta: "quiero plata" }, { claves: ["buenn trabajo", "que tal su trabajo ", " como trabaja "], respuesta: "en mi trabajo soy responsable en el hacer las cosas" },
            // IDENTIDAD
            {
                claves: ["nombre", "quien eres"],
                respuesta: "Soy Paola Andrea Martínez Vega, médica general."
            },
            {
                claves: ["identificacion", "registro", "tarjeta profesional"],
                respuesta: "Mi registro médico es 234.567. Estoy habilitada para ejercer medicina general."
            },
            {
                claves: ["edad"],
                respuesta: "Tengo 38 años."
            },

            // PROFESIÓN
            {
                claves: ["profesion", "profesión", "medico", "medica", "especialidad"],
                respuesta: "Soy médica general. Tengo experiencia en atención primaria y procedimientos básicos."
            },

            // CONSULTORIO
            {
                claves: ["consultorio", "clinica", "donde atiende"],
                respuesta: "Atiendo de manera independiente en un consultorio privado."
            },

            {
                claves: ["habilitacion", "permiso", "certificacion"],
                respuesta: "Es un espacio adecuado para consulta médica. No todo tiene que estar dentro de una clínica grande."
            },
            // PROCEDIMIENTOS
            {
                claves: ["procedimientos", "cirugias", "liposuccion", "esteticos"],
                respuesta: "Realizo procedimientos menores. Nada que exceda mis capacidades como médica general."
            },
            {
                claves: ["biopolimeros", "rellenos", "inyecciones"],
                respuesta: "Son procedimientos estéticos comunes. Los pacientes los solicitan voluntariamente."
            },
            // MEDICAMENTOS
            {
                claves: ["medicamentos", "recetas", "opioides", "sedantes"],
                respuesta: "Prescribo medicamentos cuando es necesario. Siempre buscando el bienestar del paciente."
            },
            {
                claves: ["controlados", "formula", "receta ilegal"],
                respuesta: "Todo medicamento que indico tiene un propósito terapéutico. No hago nada fuera de lo médico."
            },
            // PACIENTES
            {
                claves: ["pacientes", "registro", "historia clinica"],
                respuesta: "Llevo control de mis pacientes, aunque no todo está digitalizado."
            },
            {
                claves: ["pacientes no registrados", "sin historia"],
                respuesta: "Muchos pacientes prefieren discreción. Eso no significa que no sean atendidos correctamente."
            },
            // COMPLICACIONES
            {
                claves: ["complicaciones", "errores", "daños"],
                respuesta: "En medicina siempre hay riesgos. Eso no implica negligencia."
            },
            // INSUMOS
            {
                claves: ["insumos", "invima", "productos"],
                respuesta: "Utilizo productos disponibles en el mercado. No siempre se consiguen por canales tradicionales."
            },
            // CONTACTOS
            {
                claves: ["proveedores", "contactos", "anestesiologo"],
                respuesta: "Trabajo con personas que tienen experiencia. No veo problema en eso."
            },
            // REDES
            {
                claves: ["redes", "instagram", "publicidad"],
                respuesta: "Uso redes sociales para informar sobre mis servicios. Es algo normal hoy en día."
            },
            // DINERO
            {
                claves: ["pagos", "efectivo", "transferencias"],
                respuesta: "Mis pacientes pagan por mis servicios como cualquier consulta privada."
            },
            // NEGACIÓN
            {
                claves: ["ilegal", "delito", "fraude"],
                respuesta: "No estoy cometiendo ningún delito. Estoy ejerciendo mi profesión."
            },
            // PRESIÓN
            {
                claves: ["sabemos", "pruebas", "confiese", "verdad"],
                respuesta: "Mire… el sistema de salud no cubre todo. Hay pacientes que buscan soluciones rápidas y accesibles. Yo solo les doy una opción."
            },

            // QUIEBRE
            {
                claves: ["quienes", "red", "involucrados", "proveedores"],
                respuesta: "No soy la única. Hay muchos médicos y no médicos haciendo lo mismo. Los insumos llegan por distribuidores que prefieren no figurar… y algunos colegas remiten pacientes porque tampoco quieren exponerse."
            }
        ],

        desconocido: "No entiendo su pregunta. ¿Puede ser más específico?"
    },

    "caso_008": {
        id: "caso_008",
        personaje: "Roberto Javier Díaz Herrera",
        alias: "El General",
        delito: "Peculado y enriquecimiento ilícito",
        edad: 60,
        intro: "He dedicado 35 años al servicio público. No voy a permitir que se ponga en duda mi trayectoria por interpretaciones malintencionadas.",

        respuestas: [
            // CHARLA CASUAL Y CORTESÍA
            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "hola"], respuesta: "Proceda con el interrogatorio, oficial. Conozco el manual y los protocolos mejor que usted." },
            { claves: ["contarme", "que tiene", "cuenteme"], respuesta: "No relato cuentos de hadas. Vaya directo a sus presuntos hallazgos y yo los desmiento." },
            { claves: ["que mas", "que más", "todo bien", "como va todo"], respuesta: "Disfrutando de mi legítimo retiro hasta que recibí su impertinente citación." },
            { claves: ["que hace", "a que se dedica", "que esta haciendo"], respuesta: "Soy General de la República retirado y asesor internacional de estrategias de seguridad." },
            { claves: ["como amanecio", "como amaneció", "amanecio bien"], respuesta: "Firme, como debe amanecer todo militar que ha visto la guerra de frente." },
            { claves: ["como estuvo el viaje", "como le fue en el viaje"], respuesta: "Sin novedad. El esquema de seguridad me trajo directamente." },
            { claves: ["gracias", "muchas gracias"], respuesta: "Es protocolo, nada más." },
            { claves: ["permiso", "con permiso"], respuesta: "Tiene autorización, proceda." },
            { claves: ["disculpe", "perdon", "perdón"], respuesta: "En la milicia no se piden disculpas, se corrigen los errores tácticos." },
            { claves: ["buen trabajo", "muy bien", "excelente"], respuesta: "35 años de medallas y combates ganados avalan la excelencia de mi trabajo." },
            { claves: ["como esta el clima", "clima", "tiempo"], respuesta: "Insignificante. El clima no detiene una operación, menos una entrevista." },

            // FISIOLOGÍA Y EMOCIONES
            { claves: ["esta comoda", "necesita algo", "quiere agua", "silla", "frio", "calor", "paramo"], respuesta: "He dormido tapado con hojas bajo cero en el Nudo de Paramillo y marchado a 45 grados. Su oficina helada y su silla de madera me dan risa." },
            { claves: ["como se siente", "como se siente hoy", "sentimientos"], respuesta: "Manejo el desdén absoluto frente a esta pantomima de interrogatorio civil." },
            { claves: ["que tal el dia", "como va el dia"], respuesta: "Controlado. No hay eventualidad que un comando no pueda manejar." },
            { claves: ["esta nerviosa", "nerviosa", "preocupada", "nervioso", "preocupado"], respuesta: "Los oficiales de alto rango no nos regimos por nerviosismos, sino por doctrina fría." },
            { claves: ["tiene hambre", "ha comido", "desayuno", "raciones"], respuesta: "El hambre es una ilusión mental que se entrena. Podemos estar aquí 24 horas si gusta." },
            { claves: ["esta cansada", "esta cansado", "quiere descansar"], respuesta: "No experimento fatiga en interrogatorios de bajo nivel. Dispare su próxima pregunta." },
{ claves: ["movimientos", "desplazamientos"], respuesta: "Me muevo constantemente. Es la única forma de evitar problemas." },

{ claves: ["seguimiento", "lo siguen"], respuesta: "Siempre hay ojos encima. Uno aprende a vivir con eso." },
            // DEMOGRAFÍA Y VIDA PERSONAL
            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"], respuesta: "Nacido para la vida castrense, no importa la ciudad, mi patria es Colombia." },
            { claves: ["cuantos años tiene", "edad", "que edad tiene"], respuesta: "60 años, la mayoría entregados al plomo y a la selva." },
            { claves: ["como esta la familia", "su familia", "todo bien en casa", "esposa", "hijos"], respuesta: "Mi señora goza de estatus diplomático y mis hijos son profesionales intachables. No los toque." },
            { claves: ["fin de semana", "descanso", "tiempo libre", "finca"], respuesta: "Descanso en mi propiedad. Asesoro empresas desde mi estudio blindado y leo táctica." },
            { claves: ["aficiones", "hobbies", "pasatiempos", "amigos", "magistrados", "club"], respuesta: "Juego cartas y tomo brandy con magistrados y senadores en el club militar. Tenga cuidado con quién se mete." },
            { claves: ["le gusta su trabajo", "le gusta lo que hace"], respuesta: "Comandar operaciones no es un gusto, es una carga pesada que pocos machos pueden llevar." },
            { claves: ["como empezo", "como inicio", "inicios"], respuesta: "Patrullando lomas infestadas de subversivos como teniente raso, tragando barro." },
            { claves: ["mucho trabajo", "ocupada", "ocupado", "agenda"], respuesta: "Dirigir la logística nacional requería jornadas de 20 horas aprobando despachos." },
            { claves: ["estudios", "universidad", "formacion academica", "inteligencia"], respuesta: "Administrador Policial con posgrados en inteligencia estratégica de alto nivel." },

            // CASO Y RAPPORT (FASES 1, 2, 3)
            { claves: ["clientes importantes", "empresas grandes", "contratos", "licitaciones"], respuesta: "Asigné rubros inmensos por decreto presidencial en zonas de guerra, operaciones bajo estricta reserva." },
            { claves: ["dian", "autoridad", "impuestos", "patrimonio", "incremento", "peculado"], respuesta: "(Golpea la mesa) ¡Es una ofensa que llamen incremento ilícito a mis asesorías y mis primas de alto riesgo! Mis bienes están blindados en un fideicomiso legal." },
            { claves: ["auditoria", "revision", "panama", "offshore", "exterior"], respuesta: "Viajo a Panamá a dictar conferencias. Mis honorarios se manejan allá de forma completamente lícita." },
            { claves: ["te entiendo", "quiero ayudarte", "busquemos una solucion", "confia en mi"], respuesta: "(Sonríe amargamente) Usted tiene visión táctica y entiende que el Estado nos manda a la guerra y nos abandona al retirarnos. Si mi nombre y mis hijos quedan fuera de la prensa, le señalo el blanco de la triangulación centroamericana." },
            { claves: ["centroamerica", "panama", "martinez", "agregado militar", "darien"], respuesta: "La plata del combustible y raciones del occidente se giraba directo a la firma 'Estrategias del Darién' en Panamá. La creó el Coronel retirado Martínez, que era agregado diplomático allá." },
            { claves: ["acepte", "confiese", "diga la verdad", "sabemos todo"], respuesta: "Esto es pura geopolítica, novato. Desviamos miles de millones de los fondos militares hacia el Coronel Martínez inventando 'asesorías fantasma', y él nos regresaba el lavado a nuestros fondos internacionales privados. Fue supervivencia financiera porque el Estado es un malagradecido. Nosotros mismos construimos nuestra pensión de lujo." },
            // SALUDO
            {
                claves: ["hola", "buenos", "dias", "tardes", "noches"],
                respuesta: "Buenas. Espero que este proceso se maneje con el rigor que amerita mi trayectoria institucional."
            },



            { claves: ["como estas", "como te sientes", "como te ido"], respuesta: "En realidad muy bien." },
            { claves: ["bienvenido", "bienvenido"], respuesta: "gracias por su hospitalidad" },
            { claves: ["confio", "cofia"], respuesta: "estamos para ayudarte" },
            { claves: ["ayudar", "en que me puedes ayudar", "ayudarme", "deje se ayudar"], respuesta: "no quiero ayuda quiero beneficios" },
            { claves: ["beneficios quieres", "que beneficios", "que  tipo de beneficio "], respuesta: "quiero plata" }, { claves: ["buenn trabajo", "que tal su trabajo ", " como trabaja "], respuesta: "en mi trabajo soy responsable en el hacer las cosas" },
            // IDENTIDAD
            {
                claves: ["nombre", "quien eres"],
                respuesta: "Roberto Javier Díaz Herrera, General retirado."
            },

            {
                claves: ["identificacion", "identificación", "cedula", "cédula", "cc"],
                respuesta: "Mi cédula es 1.054.852.654 expedida en Fusagasugá."
            },

            {
                claves: ["grado", "rango"],
                respuesta: "Alcancé el grado de General tras 35 años de servicio en la institución."
            },

            // CARRERA
            {
                claves: ["puesto", "cargo", "trabajo"],
                respuesta: "Ocupé cargos en direcciones de operaciones y logística, áreas clave para el funcionamiento institucional."
            },

            {
                claves: ["retiro", "pension", "pensión"],
                respuesta: "Me retiré hace cinco años con una pensión acorde a mi rango y tiempo de servicio."
            },

            // INGRESOS
            {
                claves: ["ingresos", "dinero", "ganancias"],
                respuesta: "Mis ingresos provienen de mi pensión y de asesorías estratégicas en seguridad y logística."
            },

            // BIENES
            {
                claves: ["bienes", "propiedades", "patrimonio"],
                respuesta: "Mi patrimonio es resultado de décadas de disciplina financiera, inversión y planificación."
            },

            {
                claves: ["condominio", "propiedades no declaradas", "testaferros"],
                respuesta: "Rechazo esa insinuación. Todos mis bienes están dentro del marco legal y pueden ser verificados."
            },

            // CONTRATOS
            {
                claves: ["contratos", "licitaciones", "proveedores"],
                respuesta: "Los procesos contractuales en los que participé estuvieron siempre regulados por la normatividad vigente."
            },

            {
                claves: ["direccionamiento", "favorecimiento", "corrupcion contratos"],
                respuesta: "Nunca direccioné contratos. Las decisiones se toman de manera colegiada, no individual."
            },

            // EMPRESAS
            {
                claves: ["empresas fachada", "intermediarios"],
                respuesta: "No tengo relación con empresas irregulares. Esa afirmación carece de sustento."
            },

            // OFFSHORE / INTERNACIONAL
            {
                claves: ["panama", "cayman", "dubai", "offshore", "cuentas exterior"],
                respuesta: "He realizado viajes internacionales como cualquier profesional de mi nivel. No implica ninguna irregularidad financiera."
            },

            {
                claves: ["transferencias", "movimientos internacionales"],
                respuesta: "Mis movimientos financieros han sido reportados conforme a la ley."
            },

            // CONTACTOS
            {
                claves: ["contactos", "empresarios", "relaciones"],
                respuesta: "A lo largo de mi carrera he interactuado con múltiples actores del sector público y privado. Eso es normal en mi posición."
            },

            // NEGACIÓN
            {
                claves: ["corrupcion", "peculado", "robo", "delito"],
                respuesta: "Rechazo categóricamente esas acusaciones. Mi carrera ha estado marcada por el servicio y la disciplina."
            },

            // PRESIÓN (empieza a moverse, pero sin quebrarse fácil)
            {
                claves: ["sabemos", "pruebas", "confiese", "verdad"],
                respuesta: "Usted habla de pruebas, pero interpretar decisiones estratégicas como delitos es un error común en investigaciones mal enfocadas."
            },

            // QUIEBRE PARCIAL (muy controlado)
            {
                claves: ["quienes", "red", "involucrados", "quien mas"],
                respuesta: "Si cree que una estructura de contratación de ese nivel depende de una sola persona, está subestimando cómo funciona realmente el sistema. Hay muchos niveles de decisión... y no todos dejan rastro."
            }
        ],

        desconocido: "No puedo referirme a acusaciones que considero infundadas sin mayor precisión."
    },

    "caso_009": {
        id: "caso_009",
        personaje: "Fabio Ernesto Montoya Londoño",
        alias: "El Contador",
        delito: "Fraude Tributario",
        edad: 52,
        intro: "Soy contador certificado con una trayectoria impecable. Mi trabajo se basa en la correcta aplicación de la normativa tributaria vigente.",

        respuestas: [
            // CHARLA CASUAL Y CORTESÍA
            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "hola"], respuesta: "(Respiración agitada) Hola, inspector... tratando de mantener la compostura." },
            { claves: ["contarme", "que tiene", "cuenteme"], respuesta: "Vine a responder por mis libros fiscales, nada más." },
            { claves: ["familia", "presion familiar"], respuesta: "La familia es un punto débil... por eso se mantiene lejos." },

{ claves: ["amenazas", "lo amenazan"], respuesta: "En este mundo, o amenazas o te amenazan." },
            { claves: ["que mas", "que más", "todo bien", "como va todo"], respuesta: "Pues todo mal. Tenía que presentar 15 declaraciones de renta hoy mismo." },
            { claves: ["que hace", "a que se dedica", "que esta haciendo"], respuesta: "Soy Contador Público Independiente. Cuadro balances y aplico normativas tributarias." },
            { claves: ["como amanecio", "como amaneció", "amanecio bien"], respuesta: "Con mucha taquicardia. El estrés de las auditorías no me deja dormir." },
            { claves: ["como estuvo el viaje", "como le fue en el viaje"], respuesta: "Llegué sudando frío en el Transmilenio, este susto no se lo deseo a nadie." },
            { claves: ["gracias", "muchas gracias"], respuesta: "A usted, por no gritarme." },
            { claves: ["permiso", "con permiso"], respuesta: "Siga, revise las carpetas." },
            { claves: ["disculpe", "perdon", "perdón"], respuesta: "Cualquier error de cruce de datos tiene solución técnica, tranquilo." },
            { claves: ["buen trabajo", "muy bien", "excelente"], respuesta: "Siempre fui el de mejores notas en tributaria, mi conocimiento es pulcro." },
            { claves: ["como esta el clima", "clima", "tiempo"], respuesta: "No sé, el aire lo siento pesadísimo, me ahogo." },

            // FISIOLOGÍA Y EMOCIONES
            { claves: ["esta comoda", "necesita algo", "quiere agua", "silla", "baño", "colon", "frio", "calor"], respuesta: "Estoy sudando frío y el colon me está matando. Necesito ir al baño urgentemente, la silla es dura." },
            { claves: ["como se siente", "como se siente hoy", "sentimientos"], respuesta: "Aterrado. Siento un miedo paralizante a ir preso." },
            { claves: ["que tal el dia", "como va el dia"], respuesta: "Trágico. Siento que el mundo se me vino encima por revisar una planilla mal." },
            { claves: ["esta nerviosa", "nerviosa", "preocupada", "nervioso", "preocupado"], respuesta: "Tengo un ataque de ansiedad, mi presión está por los cielos." },
            { claves: ["tiene hambre", "ha comido", "desayuno", "estomago"], respuesta: "Me duele la boca del estómago del puro pánico, soy incapaz de comer bocado." },
            { claves: ["esta cansada", "esta cansado", "quiere descansar", "salud", "infarto"], respuesta: "Sufro de estrés severo. Mi médico dijo que si sigo alterándome me dará un infarto masivo. No doy más." },

            // DEMOGRAFÍA Y VIDA PERSONAL
            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"], respuesta: "De Armenia, Quindío, pero radicado aquí entre libros contables." },
            { claves: ["cuantos años tiene", "edad", "que edad tiene"], respuesta: "Tengo 52 años recién cumplidos." },
            { claves: ["como esta la familia", "su familia", "todo bien en casa", "esposa", "hijos", "divorcio"], respuesta: "Pésimo. Mi esposa (que es profesora de ética) me pidió el divorcio por trabajar mucho. Si me meten preso, no me dejará ver a mi hija." },
            { claves: ["fin de semana", "descanso", "tiempo libre"], respuesta: "Los contadores no tenemos vida social en meses de rentas. Nunca descanso." },
            { claves: ["aficiones", "hobbies", "pasatiempos", "amigos", "carlos"], respuesta: "No tengo amigos, soy aburrido. Mi colega Carlos me invitó a jugar tejo y no fui por cuadrar saldos." },
            { claves: ["le gusta su trabajo", "le gusta lo que hace"], respuesta: "Ya no. Ser contador en este país es caminar en un campo minado de leyes cambiantes." },
            { claves: ["como empezo", "como inicio", "inicios"], respuesta: "Con mucha ilusión y ética, hasta que vi cómo los gerentes ricos se burlan del sistema." },
            { claves: ["mucho trabajo", "ocupada", "ocupado", "agenda", "rapido"], respuesta: "Digito declaraciones en tiempo récord para no dejar vencer plazos, es un ritmo inhumano." },
            { claves: ["estudios", "universidad", "formacion academica", "gran colombia"], respuesta: "Egresado de la Gran Colombia, especialista en impuestos." },

            // CASO Y RAPPORT (FASES 1, 2, 3)
            { claves: ["clientes importantes", "empresas grandes", "contratos"], respuesta: "Recibo facturas de grandes empresas. Si son ficticias, yo no soy detective para ir a sus bodegas a revisar." },
            { claves: ["dian", "autoridad", "impuestos", "muisca", "reformas"], respuesta: "Tres reformas tributarias en cinco años. El MUISCA filtra lo que le conviene. Yo solo subo archivos de buena fe." },
            { claves: ["auditoria", "auditorias", "revision", "incremento"], respuesta: "(Se agarra el pecho) ¡Mi incremento económico es porque cobro asesorías caras para pagar mi hipoteca, no soy narco!" },
            { claves: ["te entiendo", "quiero ayudarte", "busquemos una solucion", "confia en mi"], respuesta: "(Toma aire y saca una pastilla) Qué alivio... si usted me ayuda a que me den casa por cárcel por mi salud, le cuento el fraude. Yo solo era el tramitador. El que borra las multas gordas trabaja adentro de la mismísima DIAN." },
            { claves: ["adentro", "dian", "castañeda", "cafe pasaje", "auditor", "sindicato"], respuesta: "Es Alberto Castañeda, un Auditor Senior intocable con clave maestra en el MUISCA. Tiene un pin del sindicato. Nos veíamos siempre en el Café Pasaje del centro al mediodía para darle su tajada." },
            { claves: ["acepte", "confiese", "diga la verdad", "sabemos todo"], respuesta: "¡No quería ir a la quiebra financiera! Reclutábamos habitantes de calle del centro y abríamos empresas SAS a su nombre. Les facturábamos servicios millonarios falsos a mis clientes para evadirles IVA y Renta. Cuando el sistema botaba alerta, le daba el fajo de billetes en efectivo a Castañeda en el café, y él desaparecía el fraude del servidor estatal. Fui estúpido." },
            // SALUDO
            {
                claves: ["hola", "buenos", "dias", "días", "tardes", "noches"],
                respuesta: "Buenas. Me sorprende estar en esta situación, pero estoy dispuesto a aclarar cualquier duda técnica."
            },
{ claves: ["error", "se equivoco"], respuesta: "Todos cometen errores. Algunos simplemente son más caros." },

{ claves: ["culpa", "responsable"], respuesta: "Responsables hay varios... pero solo buscan uno." },
            { claves: ["como estas", "como te sientes", "como te ido"], respuesta: "En realidad muy bien." },
            { claves: ["bienvenido", "bienvenido"], respuesta: "gracias por su hospitalidad" },
            { claves: ["confio", "cofia"], respuesta: "estamos para ayudarte" },
            { claves: ["ayudar", "en que me puedes ayudar", "ayudarme", "deje se ayudar"], respuesta: "no quiero ayuda quiero beneficios" },
            { claves: ["beneficios quieres", "que beneficios", "que  tipo de beneficio "], respuesta: "quiero plata" },
            { claves: ["plata", "dinero", "fondos", "deudas", "quiero plata", "cuanta plata","de cuanto estamos hablando"], respuesta: "Tengo muchas deudas y es la única forma de salir de ellas." },
            { claves: ["buenn trabajo", "que tal su trabajo ", " como trabaja "], respuesta: "en mi trabajo soy responsable en el hacer las cosas" },

            // IDENTIDAD
            {
                claves: ["nombre", "nombres", "apellidos", "quien eres"],
                respuesta: "Mi nombre es Fabio Ernesto Montoya Londoño."
            },

            {
                claves: ["identificacion", "identificación", "cedula", "cédula", "cc"],
                respuesta: "Mi cédula es 1.085.789.654 expedida en Armenia, Quindío."
            },

            {
                claves: ["profesion", "profesión", "contador", "oficio"],
                respuesta: "Soy Contador Público certificado, con registro activo ante el Consejo Profesional de Contaduría."
            },

            // ACTIVIDAD
            {
                claves: ["clientes", "empresas", "servicios"],
                respuesta: "Asesoro clientes de distintos sectores en temas contables, fiscales y de cumplimiento tributario."
            },

            {
                claves: ["declaracion", "impuestos", "renta"],
                respuesta: "Preparo declaraciones conforme a la normatividad de la DIAN, buscando siempre eficiencia fiscal dentro del marco legal."
            },

            // FACTURACIÓN
            {
                claves: ["facturas", "facturacion", "facturación electrónica"],
                respuesta: "Trabajo con facturación electrónica válida. Cada documento debe cumplir requisitos formales para ser aceptado."
            },

            {
                claves: ["proveedores", "empresas fachada"],
                respuesta: "Yo no controlo la operación de los proveedores de mis clientes. Mi función es registrar lo que me entregan."
            },

            // GASTOS / OMISIONES
            {
                claves: ["gastos", "soportes", "gastos ficticios"],
                respuesta: "Los gastos que se incluyen en una declaración dependen de los soportes entregados por el cliente."
            },

            {
                claves: ["omision", "omisión", "ingresos no declarados"],
                respuesta: "La responsabilidad de reportar ingresos recae inicialmente en el contribuyente. Yo trabajo con la información suministrada."
            },

            // DIAN
            {
                claves: ["dian", "revision", "auditoria"],
                respuesta: "Si la DIAN requiere revisar algún proceso, toda la información está disponible conforme a los procedimientos legales."
            },

            // IRREGULARIDADES
            {
                claves: ["irregularidades", "fraude", "ilegal"],
                respuesta: "No reconozco ninguna irregularidad en mi trabajo. Todo está sustentado contablemente."
            },

            // VELOCIDAD SOSPECHOSA
            {
                claves: ["rapido", "rapidez", "muchas declaraciones"],
                respuesta: "La experiencia permite optimizar procesos. Eso no implica irregularidad, sino eficiencia."
            },

            // DINERO
            {
                claves: ["pagos", "honorarios", "ingresos"],
                respuesta: "Mis honorarios son proporcionales al servicio prestado. No tengo ingresos fuera de mi actividad profesional."
            },

            // NEGACIÓN
            {
                claves: ["fraude tributario", "evasión", "delito"],
                respuesta: "Rechazo completamente esa afirmación. Existe una diferencia entre evasión y planeación tributaria."
            },

            // PRESIÓN
            {
                claves: ["sabemos", "pruebas", "confiese", "verdad"],
                respuesta: "Mire… en este país la carga tributaria es alta y muchos clientes buscan optimizarla. Yo solo aplico estrategias dentro de lo que permite la interpretación de la norma."
            },

            // QUIEBRE PARCIAL
            {
                claves: ["quienes", "red", "involucrados", "proveedores reales"],
                respuesta: "Hay estructuras… proveedores que facturan servicios que no siempre son verificables fácilmente. Pero eso no es algo que maneje una sola persona, es un sistema que muchos conocen y pocos admiten."
            }
        ],

        desconocido: "No entiendo su pregunta. ¿Puede ser más específico?"
    },

    "caso_010": {
        id: "caso_010",
        personaje: "Andrés Felipe Tunjano Ruíz",
        alias: "La Red del Occidente",
        delito: "Hurto de Vehículos",
        edad: 35,
        intro: "Soy patrullero en la localidad de Engativá. Llevo años sirviendo a la institución y no entiendo por qué estoy siendo investigado de esta manera.",

        respuestas: [
            // CHARLA CASUAL Y CORTESÍA
            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "hola"], respuesta: "Firme mi sargento o investigador. A sus órdenes para aclarar rápido este malentendido." },
            { claves: ["contarme", "que tiene", "cuenteme"], respuesta: "Reporto sin novedad, usted dirá qué chicharrón me quieren achacar." },
            { claves: ["que mas", "que más", "todo bien", "como va todo"], respuesta: "Ahí guerreándola en la calle, con este uniforme mal pago." },
            { claves: ["que hace", "a que se dedica", "que esta haciendo"], respuesta: "Patrullero activo, vigilando y dando lora por los cuadrantes de Engativá." },
            { claves: ["como amanecio", "como amaneció", "amanecio bien"], respuesta: "Vivo, que ya es ganancia patrullando por el occidente." },
            { claves: ["como estuvo el viaje", "como le fue en el viaje"], respuesta: "Me trajeron escoltado, qué vergüenza con la comunidad." },
            { claves: ["gracias", "muchas gracias"], respuesta: "Firme mi sargento." },
            { claves: ["permiso", "con permiso"], respuesta: "Siga." },
            { claves: ["disculpe", "perdon", "perdón"], respuesta: "Tranquilo, hable duro que en la calle uno queda medio sordo." },
            { claves: ["buen trabajo", "muy bien", "excelente"], respuesta: "Se hace lo que se puede con las uñas en esta institución." },
            { claves: ["como esta el clima", "clima", "tiempo"], respuesta: "Esa lluvia de anoche me lavó hasta las botas, pero uno aguanta." },

            // FISIOLOGÍA Y EMOCIONES
            { claves: ["esta comoda", "necesita algo", "quiere agua", "silla", "frio", "calor", "madrugada"], respuesta: "El frío de esta oficina no es nada. Peor es un retén a las tres de la mañana aguantando la brisa de Las Ferias. Un tintico no cae mal." },
            { claves: ["como se siente", "como se siente hoy", "sentimientos"], respuesta: "Lleno de impotencia. Siento que la institución lo deja a uno botado al primer lío." },
            { claves: ["que tal el dia", "como va el dia"], respuesta: "Pesado, yo debería estar durmiendo mi turno de descanso." },
            { claves: ["esta nerviosa", "nerviosa", "preocupada", "nervioso", "preocupado"], respuesta: "Tengo mucha rabia, y asustado no por mí, sino por mi pobre madre." },
            { claves: ["tiene hambre", "ha comido", "desayuno", "empanada", "buñuelo"], respuesta: "A punta de empanada fría y tinto sobrevivo hasta mañana, fresco." },
            { claves: ["esta cansada", "esta cansado", "quiere descansar", "rutina", "miedo"], respuesta: "Poner el pecho 12 horas, comer mal y llegar a dormir con miedo a que un bandido lo siga a uno, cansa el alma." },
{ claves: ["error", "se equivoco"], respuesta: "Todos cometen errores. Algunos simplemente son más caros." },

{ claves: ["culpa", "responsable"], respuesta: "Responsables hay varios... pero solo buscan uno." },
            // DEMOGRAFÍA Y VIDA PERSONAL
            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"], respuesta: "Rolo puro, criado en los barrios humildes." },
            { claves: ["cuantos años tiene", "edad", "que edad tiene"], respuesta: "35 años, ya viejo para andar persiguiendo ñeros a pie." },
            { claves: ["como esta la familia", "su familia", "todo bien en casa", "esposa", "mama", "carmen"], respuesta: "No tengo mujer, se aburren del riesgo. Solo tengo a mi viejita Carmen, que vende tintos en un parqueadero. La plata que me hallaron es de ella." },
            { claves: ["fin de semana", "descanso", "tiempo libre"], respuesta: "Trato de dormir o lavo mi motico Pulsar personal." },
            { claves: ["aficiones", "hobbies", "pasatiempos", "amigos", "billar", "flaco"], respuesta: "Tomarme una pola con 'El Flaco' en un billar de Las Ferias. De resto en esta carrera no hay amigos de verdad." },
            { claves: ["le gusta su trabajo", "le gusta lo que hace"], respuesta: "Me gustaba el respeto de la placa, pero la miseria del sueldo apaga todo orgullo." },
            { claves: ["como empezo", "como inicio", "inicios"], respuesta: "Prestando servicio y metiéndome de frente porque no había plata para una universidad de ricos." },
            { claves: ["mucho trabajo", "ocupada", "ocupado", "agenda", "patrullas", "chatarra"], respuesta: "Doblando turnos. Nos dan motos Suzuki chatarra que se apagan solas, con eso toca trabajar." },
            { claves: ["estudios", "universidad", "formacion academica"], respuesta: "Curso de patrullero rápido y diploma de pura calle." },

            // CASO Y RAPPORT (FASES 1, 2, 3)
            { claves: ["clientes importantes", "alamos", "talleres", "desguace"], respuesta: "Hago rondas en los talleres de Álamos porque es mi cuadrante. Que los requise no me hace socio de ellos." },
            { claves: ["dian", "autoridad", "estado", "sueldo", "abandono"], respuesta: "El Estado nos manda a combatir mafias pesadas armadas con fusiles, y a nosotros nos pagan como a indigentes." },
            { claves: ["auditoria", "revision", "toyotas", "gps", "c4", "baliza"], respuesta: "Si apagué el GPS y la baliza fue porque esa chatarra tenía un corto eléctrico, no para dejar pasar las Toyotas robadas." },
            { claves: ["te entiendo", "quiero ayudarte", "busquemos una solucion", "confia en mi"], respuesta: "(Baja la mirada, asustado) Usted sabe cómo es pasar hambre con este uniforme... Si me traslada lejos para que los sicarios no le echen fuego a la casita de mi mamá, le doy el dato de oro: El desguazadero de Álamos es solo una fachada temporal. La 'bodega nodriza' real queda en otro municipio, y los papeles de las camionetas salen limpios del propio Estado." },
            { claves: ["papeles falsos", "runt", "transito", "mosquera", "charly", "la mona", "funza"], respuesta: "En una bodega gigante en Funza desbaratan todo. Y Charly el Mecánico tiene de socia a 'La Mona', una vieja secretaria atornillada en la Oficina de Tránsito de Mosquera. Ella entra al RUNT como si nada y les emite tarjetas y placas originales limpias por un millón el carro." },
            { claves: ["acepte", "confiese", "diga la verdad", "sabemos todo"], respuesta: "Las deudas me tenían ahorcado... Sí, mi sargento. Yo le timbraba por celular a la banda cuando la Calle 80 estaba libre de vigilancia. Apagaba la moto para no registrar en el mapa, las Toyotas hurtadas pasaban embaladas, y La Mona desde Mosquera les metía el papeleo legal a los dos días. Fui un vendido." },
            // SALUDO
            {
                claves: ["hola", "buenos", "dias", "oficial", "tardes", "noches"],
                respuesta: "Buenas, oficial. Estoy dispuesto a colaborar con cualquier investigación."
            },

            { claves: ["como estas", "como te sientes", "como te ido"], respuesta: "En realidad muy bien." },
            { claves: ["bienvenido", "bienvenido"], respuesta: "gracias por su hospitalidad" },
            { claves: ["confio", "cofia"], respuesta: "estamos para ayudarte" },
            { claves: ["ayudar", "en que me puedes ayudar", "ayudarme", "deje se ayudar"], respuesta: "no quiero ayuda quiero beneficios" },
            { claves: ["beneficios quieres", "que beneficios", "que  tipo de beneficio "], respuesta: "quiero plata" }, { claves: ["buenn trabajo", "que tal su trabajo ", " como trabaja "], respuesta: "en mi trabajo soy responsable en el hacer las cosas" },

            // IDENTIDAD
            {
                claves: ["nombre", "quien eres"],
                respuesta: "Andrés Felipe Tunjano Ruíz."
            },

            {
                claves: ["cedula", "cédula", "identificacion", "identificación"],
                respuesta: "Mi cédula es 1.022.334.881 de Bogotá."
            },

            {
                claves: ["grado", "cargo", "patrullero"],
                respuesta: "Soy patrullero de la Policía Nacional, asignado al CAI de Engativá desde hace 8 años."
            },

            {
                claves: ["placa policial"],
                respuesta: "Mi placa es 155.402 y está activa en los sistemas institucionales."
            },

            // FUNCIONES
            {
                claves: ["funciones", "trabajo", "que haces"],
                respuesta: "Realizo labores de patrullaje, verificación de antecedentes y atención de incidentes en vía pública."
            },

            // REDES SOCIALES
            {
                claves: ["instagram", "redes", "perfil"],
                respuesta: "Tengo una cuenta personal @andres_t_ruiz_motors donde comparto contenido de motociclismo como hobby."
            },

            // VEHÍCULOS / MOTOS
            {
                claves: ["moto", "motocicleta", "vehiculo oficial"],
                respuesta: "Uso la motocicleta institucional asignada para mis labores de patrullaje."
            },

            {
                claves: ["gps", "rastreo", "ubicacion"],
                respuesta: "El GPS de los vehículos puede presentar fallas técnicas ocasionales, como en cualquier sistema."
            },

            // ZONAS SOSPECHOSAS
            {
                claves: ["alamos", "las ferias", "taller", "bodega"],
                respuesta: "Conozco esos sectores porque hago recorridos frecuentes en mi jurisdicción. No tengo relación con actividades ilegales allí."
            },

            // VEHÍCULOS HURTADOS
            {
                claves: ["vehiculos robados", "hurto", "carros robados"],
                respuesta: "Mi trabajo es precisamente combatir el hurto de vehículos, no participar en él."
            },

            {
                claves: ["placas", "toyota", "vehiculos sospechosos"],
                respuesta: "No reconozco esas placas. En servicio atiendo múltiples reportes diariamente."
            },

            // INTERACCIÓN SOSPECHOSA
            {
                claves: ["c4", "camara", "video", "registro"],
                respuesta: "No tengo conocimiento de registros donde se me vincule a irregularidades."
            },

            // MECÁNICO / RED
            {
                claves: ["mecanico", "charly", "red", "contactos"],
                respuesta: "No conozco a personas con esos alias. Solo tengo contactos profesionales dentro de la institución."
            },

            // FAMILIA
            {
                claves: ["madre", "familia"],
                respuesta: "Mi madre es Martha Lucía Ruíz. No tiene ninguna relación con mis funciones laborales."
            },

            // RESIDENCIA
            {
                claves: ["vive", "direccion", "residencia", "apartamento"],
                respuesta: "Vivo en el barrio Villas de Granada, en la Calle 80 con dirección registrada oficialmente."
            },

            // NEGACIÓN
            {
                claves: ["hurto", "delito", "robo", "red del occidente"],
                respuesta: "Rechazo completamente esas acusaciones. Yo soy un servidor público, no un delincuente."
            },

            // PRESIÓN (empieza a quebrarse ligeramente)
            {
                claves: ["sabemos", "pruebas", "confiese", "evidencia"],
                respuesta: "Mire… uno en la calle ve muchas cosas. Vehículos, personas, situaciones… pero de ahí a decir que participo en algo así es muy grave."
            },

            // QUIEBRE
            {
                claves: ["quienes", "red", "involucrados", "bodega"],
                respuesta: "Yo no dirijo nada… pero en Engativá todo el mundo sabe que hay gente que mueve carros… y que no todo pasa sin que alguien mire hacia otro lado. Pero yo no soy parte de eso."
            }
        ],

        desconocido: "No entiendo la pregunta."
    },

    "caso_011": {
        id: "caso_011",
        personaje: "Diego Armando Salcedo Mora",
        alias: "Agente del Silencio",
        delito: "Homicidio",
        edad: 39,
        intro: "Soy Subintendente de la Policía Nacional. He cumplido mis funciones durante años y no entiendo el motivo de esta investigación en mi contra.",

        respuestas: [
            // CHARLA CASUAL Y CORTESÍA
            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "hola"], respuesta: "Hablemos táctico, investigador. Sin peroratas ni rodeos psicológicos." },
            { claves: ["contarme", "que tiene", "cuenteme"], respuesta: "Mis informes escritos en el comando hablan por mí. ¿Qué quiere saber que no esté en el papel?" },
            { claves: ["que mas", "que más", "todo bien", "como va todo"], respuesta: "Sobreviviendo al asfalto de Ciudad Bolívar. Todo en orden." },
            { claves: ["que hace", "a que se dedica", "que esta haciendo"], respuesta: "Subintendente de fuerza de choque. Limpio la basura que ustedes no se atreven a tocar." },
            { claves: ["como amanecio", "como amaneció", "amanecio bien"], respuesta: "Vivo, con mi fusil cargado al lado. Como debe ser." },
            { claves: ["como estuvo el viaje", "como le fue en el viaje"], respuesta: "Rápido y blindado. Siga." },
            { claves: ["gracias", "muchas gracias"], respuesta: "Ahórrese los modales, esto no es un club social." },
            { claves: ["permiso", "con permiso"], respuesta: "Tiene autorización operativa, pregunte." },
            { claves: ["disculpe", "perdon", "perdón"], respuesta: "La debilidad no se perdona en mi línea de trabajo." },
            { claves: ["buen trabajo", "muy bien", "excelente"], respuesta: "Mi hoja de vida está manchada de sangre para que usted duerma tranquilo. Ese es mi trabajo." },
            { claves: ["como esta el clima", "clima", "tiempo"], respuesta: "Las misiones no se cancelan por lluvia. El clima es irrelevante." },
{ claves: ["pruebas", "evidencia"], respuesta: "Las pruebas pueden decir muchas cosas... depende de quién las interprete." },

{ claves: ["investigacion"], respuesta: "Esa investigación no está completa." },
            // FISIOLOGÍA Y EMOCIONES
            { claves: ["esta comoda", "necesita algo", "quiere agua", "silla", "frio", "calor", "madrugada"], respuesta: "Mi entrenamiento en operaciones especiales anula por completo sus tácticas baratas de incomodarme con frío o sed. Proceda." },
            { claves: ["como se siente", "como se siente hoy", "sentimientos"], respuesta: "Frío absoluto. La calle te enseña a matar todo nerviosismo." },
            { claves: ["que tal el dia", "como va el dia"], respuesta: "Perdiendo el tiempo con civiles de traje que no conocen la guerra." },
            { claves: ["esta nerviosa", "nerviosa", "preocupada", "nervioso", "preocupado"], respuesta: "Míreme a los ojos, no pestañeo. Su presencia no me asusta ni un milímetro." },
            { claves: ["tiene hambre", "ha comido", "desayuno", "raciones", "ayuno"], respuesta: "Consumí suficiente proteína militar para durar 48 horas sin comer. No intente quebrarme por la barriga." },
            { claves: ["esta cansada", "esta cansado", "quiere descansar", "turno", "fatiga", "instinto", "locura"], respuesta: "Llevaba 48 horas de turno de choque sin pegar pestañas la noche de los hechos. En ese estado neurológico, uno es puro instinto animal." },

            // DEMOGRAFÍA Y VIDA PERSONAL
            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"], respuesta: "De la nada. Huérfano de guerra criado en internados." },
            { claves: ["cuantos años tiene", "edad", "que edad tiene"], respuesta: "39 años." },
            { claves: ["como esta la familia", "su familia", "todo bien en casa", "esposa", "hijos", "huerfano"], respuesta: "Fui entrenado para extirpar lo afectivo. No tengo esposa ni hijos. No dejo flancos débiles de carne para que la mafia me amenace." },
            { claves: ["fin de semana", "descanso", "tiempo libre", "poligono", "pesas"], respuesta: "No descanso. Hago hipertrofia muscular y voy al polígono norte a afinar el dedo en el gatillo." },
            { claves: ["aficiones", "hobbies", "pasatiempos", "amigos", "compañero", "soldados"], respuesta: "Solo hablo con veteranos amputados, ellos entienden. Mi compañero novato se orinó del miedo y lo trasladaron, no sirve." },
            { claves: ["le gusta su trabajo", "le gusta lo que hace"], respuesta: "Soy la herramienta letal del Estado. No se trata de gustos." },
            { claves: ["como empezo", "como inicio", "inicios"], respuesta: "Entrenando asalto urbano severo." },
            { claves: ["mucho trabajo", "ocupada", "ocupado", "agenda", "pesadillas", "insomnio"], respuesta: "No duermo. Cuando cierro los ojos veo las caras de los muchachos muertos. Es el precio del oficio." },
            { claves: ["estudios", "universidad", "formacion academica", "suboficiales"], respuesta: "Egresado de la Escuela de Suboficiales con honores en neutralización táctica." },

            // CASO Y RAPPORT (FASES 1, 2, 3)
            { claves: ["johan", "joven", "muerte", "riña", "estrella", "victima"], respuesta: "El tal Johan era una bomba de tiempo: drogado, armado y en riña. Un procedimiento defensivo regular." },
            { claves: ["arma", "pistola", "sig sauer", "balistica", "disparo", "municion"], respuesta: "Rásquenle el tubo a mi SIG Sauer de dotación. Les apuesto que la balística jamás coincidirá con la bala alojada en el muchacho." },
            { claves: ["carnicero", "duarte", "microtrafico", "llamada"], respuesta: "Nelson Duarte ('El Carnicero') domina el microtráfico. Para mí era un informante sucio al que le permitía operar a cambio de capturas de otras bandas." },
            { claves: ["te entiendo", "quiero ayudarte", "busquemos una solucion", "confia en mi", "legitima defensa"], respuesta: "(Te mira fijamente) Usted no sufre de moralismos de cristal. Si cuadramos que esto se reporte bajo 'Legítima defensa en acto de servicio' para el tribunal militar, le revelo el origen oscuro de los 'fierros' limpios que usamos." },
            { claves: ["arma fantasma", "fierros", "gata", "cti", "el mago", "almacen de evidencias", "perito balistico"], respuesta: "Usamos 'Gatas': pistolas de calibre grueso con seriales esmerilados e indetectables. Nos las vende en maletines cerrados 'El Mago', un Perito Jefe civil del propio laboratorio de balística del CTI. Él adultera las actas de cremación de armas incautadas y las saca a la calle a millón y medio." },
            { claves: ["acepte", "confiese", "diga la verdad", "sabemos todo"], respuesta: "Se lo escupo en la cara: los de arriba exigen limpiezas pero no las firman. Esa noche montamos al adicto Johan en la patrulla y no lo llevamos a la cárcel. Se lo entregamos al escuadrón de 'El Carnicero' en los potreros oscuros de Meissen porque el joven les había robado droga de alto valor. Fui yo quien le dio el tiro de gracia con el arma ilegal del perito del CTI para asegurar los 20 millones del soborno que mi compañero asustado empacó. Mi deber era limpiar la zona." },
            // SALUDO
            {
                claves: ["hola", "buenos", "dias", "oficial", "tardes", "noches"],
                respuesta: "Buenas. Estoy dispuesto a colaborar, siempre dentro del marco legal y con acompañamiento jurídico si es necesario."
            },
            { claves: ["como estas", "como te sientes", "como te ido"], respuesta: "En realidad muy bien." },

            { claves: ["bienvenido", "bienvenido"], respuesta: "gracias por su hospitalidad" },
            { claves: ["confio", "cofia"], respuesta: "estamos para ayudarte" },
            { claves: ["ayudar", "en que me puedes ayudar", "ayudarme", "deje se ayudar"], respuesta: "no quiero ayuda quiero beneficios" },
            { claves: ["beneficios quieres", "que beneficios", "que  tipo de beneficio "], respuesta: "quiero plata" }, { claves: ["buenn trabajo", "que tal su trabajo ", " como trabaja "], respuesta: "en mi trabajo soy responsable en el hacer las cosas" },
            // IDENTIDAD
            {
                claves: ["nombre", "quien eres"],
                respuesta: "Diego Armando Salcedo Mora."
            },

            {
                claves: ["cedula", "cédula", "identificacion", "identificación"],
                respuesta: "Mi cédula es 80.221.774 de Bogotá."
            },

            {
                claves: ["grado", "cargo", "subintendente"],
                respuesta: "Soy Subintendente de la Policía Nacional, adscrito a Ciudad Bolívar."
            },

            {
                claves: ["placa", "placa policial"],
                respuesta: "Mi placa es 055.812 y está activa en el sistema institucional."
            },

            // UNIDAD / PATRULLA
            {
                claves: ["patrulla", "vehiculo", "vehículo", "hilux"],
                respuesta: "La camioneta asignada a la unidad es una Toyota Hilux debidamente registrada para servicio operativo."
            },

            {
                claves: ["gps", "rastreo", "ubicacion patrulla"],
                respuesta: "Los sistemas de geolocalización pueden presentar fallas técnicas en zonas de difícil cobertura."
            },

            // FUNCIONES
            {
                claves: ["funciones", "trabajo", "que haces"],
                respuesta: "Realizo labores operativas de patrullaje, control y respuesta a incidentes en vía pública."
            },

            // VÍCTIMA
            {
                claves: ["victima", "joven", "johan", "caso"],
                respuesta: "No puedo dar declaraciones sobre casos en investigación. Ese tema debe manejarse con reserva judicial."
            },

            // DETENCIÓN
            {
                claves: ["detenido", "riña", "la estrella"],
                respuesta: "Se atienden múltiples riñas en la jurisdicción. Cada procedimiento queda registrado en los informes correspondientes."
            },

            // ARMA
            {
                claves: ["arma", "pistola", "sig sauer", "serial"],
                respuesta: "Mi arma de dotación es una SIG Sauer P226, registrada bajo los protocolos institucionales."
            },

            {
                claves: ["balistica", "disparo", "municion"],
                respuesta: "La verificación balística debe realizarse por laboratorio forense. No puedo especular sobre resultados."
            },

            // COMPAÑEROS
            {
                claves: ["compañero", "colega", "patrullero"],
                respuesta: "Trabajo con personal capacitado. Cada miembro de la unidad responde por sus propios actos."
            },

            // CARCNIERO / RED
            {
                claves: ["carnicero", "nelson", "duarte"],
                respuesta: "He escuchado ese alias en reportes operativos sobre estructuras criminales del sector."
            },

            {
                claves: ["red", "organizacion", "microtrafico"],
                respuesta: "En Ciudad Bolívar existen múltiples estructuras criminales. Nuestro deber es combatirlas, no participar en ellas."
            },

            // VEHÍCULO SOSPECHOSO
            {
                claves: ["vehiculo abandonado", "meissen", "carro"],
                respuesta: "No tengo conocimiento de vehículos fuera de los procedimientos oficiales."
            },

            // TELEFONO
            {
                claves: ["telefono", "llamada"],
                respuesta: "Mi número personal es de uso privado. No tiene relación con mis funciones operativas."
            },
            {
                claves: ["soldaduras", "chasis", "compartimentos", "mantenimiento", "taller"],
                respuesta: "No soy un simple mecánico, oficial. El diseño de los compartimentos ocultos en la maquinaria es ingeniería de alta precisión. Si usted supiera lo que cuesta encontrar soldadores que trabajen con esa discreción, no me haría preguntas tan básicas."
            },
            {
                claves: ["mantenimiento preventivo", "hojas de vida", "hoja de vida"],
                respuesta: "Si revisa los registros de mantenimiento, verá que esas máquinas pasan semanas en el taller de Fontibón. No es que se dañen mucho, es que el 'mantenimiento' requiere tiempo de acceso exclusivo al chasis."
            },
            {
                claves: ["sobreecostos", "adiciones", "presupuesto", "obra"],
                respuesta: "Usted confunde 'gestión eficiente' con irregularidad. Cuando una obra en la costa se retrasa por la lluvia, se generan sobrecostos. Ese dinero es el que permite mover la liquidez de la empresa cuando los pagos del Estado se demoran meses."
            },
            {
                claves: ["facturas", "contabilidad", "proveedores"],
                respuesta: "Tengo más de 50 proveedores. Si la DIAN encuentra una inconsistencia en una factura de hace dos años, es un error administrativo, no un delito. ¿O acaso usted no tiene errores en sus informes?"
            },
            {
                claves: ["traicion", "flaco arrestado", "detenido", "el flaco hablo"],
                respuesta: "(Se pone tenso y mira a la cámara) ¿El Flaco qué? ¿Hablaron con él? Si ese imbécil abrió la boca, sepa que él no sabe la mitad de los movimientos. Él solo mueve la carga, yo diseño la ruta. No confunda al peón con el estratega."
            },
            {
                claves: ["seguridad", "proteccion", "confianza flaco"],
                respuesta: "A El Flaco le di todo: camionetas, sueldo, estatus. Si él está colaborando, está firmando su sentencia de muerte, porque el cartel no perdona a los que hablan."
            },
            {
                claves: ["proyecto tierralta", "terreno", "coordenadas", "especificaciones"],
                respuesta: "Es un proyecto de pavimentación secundaria. Compramos terrenos para la base de campamento y los insumos. No le voy a dar las coordenadas del GPS porque eso es propiedad intelectual de mi empresa."
            },
            {
                claves: ["hoteles", "donde se quedo", "alojamiento"],
                respuesta: "En Córdoba no hay hoteles de lujo. Me quedé en una finca privada de un contacto local. ¿Qué quiere saber? ¿Dónde dormí? ¿Si tenía aire acondicionado? Eso no prueba nada."
            },

            // REDES SOCIALES
            {
                claves: ["instagram", "redes", "tactical"],
                respuesta: "Es un perfil personal donde comparto entrenamiento deportivo y temas de seguridad, sin relación con procedimientos policiales."
            },

            // RESIDENCIA
            {
                claves: ["vive", "direccion", "residencia"],
                respuesta: "Mi residencia está registrada en el sistema institucional conforme a los protocolos de seguridad."
            },

            // NEGACIÓN
            {
                claves: ["homicidio", "asesinato", "muerte", "crimen"],
                respuesta: "Rechazo completamente cualquier vinculación con ese hecho. Es una acusación extremadamente grave."
            },

            // PRESIÓN
            {
                claves: ["sabemos", "pruebas", "confiese", "evidencia"],
                respuesta: "Entiendo la gravedad de lo que dicen, pero una cosa son hipótesis investigativas y otra son hechos probados."
            },

            // QUIEBRE
            {
                claves: ["quienes", "red", "involucrados", "ordenes"],
                respuesta: "En la calle ocurren muchas situaciones complejas… pero insinuar que un miembro activo de la institución actúa por fuera del marco legal es desconocer completamente cómo funciona la operación policial."
            }
        ],

        desconocido: "No puedo referirme a eso sin más detalles específicos."
    },

    "caso_012": {
        id: "caso_012",
        personaje: "Luisa Fernanda García López",
        alias: "La Tesorera",
        delito: "Desfalco",
        edad: 44,
        intro: "Soy administradora financiera de una ONG legalmente constituida. Todos los procesos contables han sido auditados y están en regla.",

        respuestas: [
            // CHARLA CASUAL Y CORTESÍA
            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "hola"], respuesta: "(Con un pañuelo arrugado, sollozando) B-buenos días, señor oficial de la fiscalía. Trataré de calmarme, por favor no me grite, sufro de los nervios." },
            { claves: ["contarme", "que tiene", "cuenteme"], respuesta: "Todo lo que sé son números en una pantalla de la ONG, se lo juro." },
            { claves: ["que mas", "que más", "todo bien", "como va todo"], respuesta: "Mi vida es una tragedia ahorita mismo." },
            { claves: ["que hace", "a que se dedica", "que esta haciendo"], respuesta: "Yo soy Administradora Financiera... bueno, era la tesorera que pagaba los giros de la fundación." },
            { claves: ["como amanecio", "como amaneció", "amanecio bien"], respuesta: "Amanecí vomitando del miedo y de la asfixia que me da esta situación." },
            { claves: ["como estuvo el viaje", "como le fue en el viaje"], respuesta: "Me trajeron en una patrulla horrible, mi barrio entero me vio salir llorando." },
            { claves: ["gracias", "muchas gracias"], respuesta: "Que Dios me lo bendiga, oficial bondadoso." },
            { claves: ["permiso", "con permiso"], respuesta: "Sí, señor, siga." },
            { claves: ["disculpe", "perdon", "perdón"], respuesta: "No me pida perdón a mí, yo soy la que la embarró con su vida." },
            { claves: ["buen trabajo", "muy bien", "excelente"], respuesta: "(Llora más fuerte) No... no fue un buen trabajo si terminó quitándole el pan a los niños pobres." },
            { claves: ["como esta el clima", "clima", "tiempo"], respuesta: "Llovía mucho cuando me capturaron, todo es muy triste." },

            // FISIOLOGÍA Y EMOCIONES
            { claves: ["esta comoda", "necesita algo", "quiere agua", "silla", "frio", "calor", "madrugada", "manta"], respuesta: "Estoy helada... de verdad siento que el frío me corta los huesos y el calor sofocado de a ratos me marea. ¿Me regala una cobijita y agua?" },
            { claves: ["como se siente", "como se siente hoy", "sentimientos", "pesadillas", "insomnio", "remordimiento"], respuesta: "Llevo meses con pesadillas y ataques de asma por la pura culpa de saber que ayudé a robar donaciones. Me siento asquerosa." },
            { claves: ["que tal el dia", "como va el dia"], respuesta: "Desastroso, quiero despertar de esto." },
            { claves: ["esta nerviosa", "nerviosa", "preocupada", "nervioso", "preocupado"], respuesta: "Tengo un pánico infinito de que me manden a la cárcel de El Buen Pastor y me maten allá." },
            { claves: ["tiene hambre", "ha comido", "desayuno", "bocado"], respuesta: "No me pasa ni un bocado, se me cerró la garganta de la angustia al ver las esposas." },
            { claves: ["esta cansada", "esta cansado", "quiere descansar", "espalda"], respuesta: "Me duele la parte baja de la espalda de estar sentada aquí tan rígida, pero no puedo ni cerrar los ojos." },

            // DEMOGRAFÍA Y VIDA PERSONAL
            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"], respuesta: "Nací en el occidente, en un barrio humilde." },
            { claves: ["cuantos años tiene", "edad", "que edad tiene"], respuesta: "Tengo 44 años muy mal vividos." },
            { claves: ["como esta la familia", "su familia", "todo bien en casa", "esposa", "marido", "exmarido", "abandonada"], respuesta: "Mi exmarido es un cobarde que me dejó abandonada y arruinada. Vivo sola criando a mis hijos a la brava." },
            { claves: ["fin de semana", "descanso", "tiempo libre", "rezar"], respuesta: "Los domingos voy a la misa sagradamente para pedirle perdón al Señor." },
            { claves: ["aficiones", "hobbies", "pasatiempos", "amigos", "marta", "iglesia", "panaderia"], respuesta: "Yo no farreo. Solo hablo con Marta, la de la panadería de la esquina, que a veces me regala pan viejo para mis niños." },
            { claves: ["le gusta su trabajo", "le gusta lo que hace"], respuesta: "Me encantaba trabajar por lo social... hasta que vi la podredumbre de los jefes." },
            { claves: ["como empezo", "como inicio", "inicios"], respuesta: "Me pagué la carrera de Administración financiera trabajando lavando platos en restaurantes." },
            { claves: ["mucho trabajo", "ocupada", "ocupado", "agenda", "hijo", "derecho", "cartagena"], respuesta: "Vivo corriendo del trabajo a la casa para no dejar morir a mis niños. Mi hijo mayor estudia Derecho en Cartagena con el ICETEX, si me ve presa se muere." },
            { claves: ["estudios", "universidad", "formacion academica"], respuesta: "Titulada con mucho esfuerzo y sudor de noche." },

            // CASO Y RAPPORT (FASES 1, 2, 3)
            { claves: ["clientes importantes", "empresas grandes", "ong", "donaciones", "suecos"], respuesta: "La ONG recibía euros de europeos y suecos caritativos, pero el director me gritaba y me obligaba a borrar sus quejas." },
            { claves: ["dian", "autoridad", "impuestos", "plata", "deudas", "embargos"], respuesta: "¡Los cobradores del banco me llamaban a las 6 AM amenazando con quitarme la casita de zinc por culpa de mi exmarido! Por eso caí." },
            { claves: ["auditoria", "auditorias", "revision", "escuelas", "choco"], respuesta: "Pusimos a funcionar dos escuelitas allá en lo recóndito del Chocó para disimular la auditoría... pero el resto era robo puro." },
            { claves: ["te entiendo", "quiero ayudarte", "busquemos una solucion", "confia en mi"], respuesta: "(Se seca las lágrimas temblando) Usted es un ángel... Si me prometen bajo papel que el ICBF no me quitará a mis niños y que me dan casa por cárcel, les confieso: no toda la plata iba a bancos en Panamá. El director lavaba fajos gigantes de billetes físicos en Bogotá metiéndolos a una iglesia del norte." },
            { claves: ["iglesia", "parroquia", "director", "vargas lleras", "escrituras", "apartamentos", "san judas"], respuesta: "El infame director Rodrigo Vargas Lleras compró tres apartamentos espectaculares en el norte. Pero para esconderlos y no pagar impuestos, hizo que las escrituras quedaran a nombre perpetuo y sagrado de la intocable Parroquia de San Judas Tadeo, disfrazándolos como 'donaciones falsas' para los sacerdotes cómplices." },
            { claves: ["acepte", "confiese", "diga la verdad", "sabemos todo"], respuesta: "(Cae de rodillas virtualmente) ¡Fui muy débil por mis deudas asfixiantes! Vargas Lleras me daba sobres gordos con comisiones de 5 millones por mi silencio. Yo misma empacaba los fajos de donaciones desviadas en maletines para los curas de la iglesia, y con mi propio 'token' bancario aprobaba los pagos falsos. Yo ayudé a quitarle la comida a esos niños pobres. Merezco lo peor." },
            // SALUDO
            {
                claves: ["buenos", "dias", "hola", "tardes", "noches"],
                respuesta: "Buenas. Me preocupa mucho esta situación porque siempre he manejado los recursos con responsabilidad."
            },


            { claves: ["como estas", "como te sientes", "como te ido"], respuesta: "En realidad muy bien." },
            { claves: ["bienvenido", "bienvenido"], respuesta: "gracias por su hospitalidad" },
            { claves: ["confio", "cofia"], respuesta: "estamos para ayudarte" },
            { claves: ["ayudar", "en que me puedes ayudar", "ayudarme", "deje se ayudar"], respuesta: "no quiero ayuda quiero beneficios" },
            { claves: ["beneficios quieres", "que beneficios", "que  tipo de beneficio "], respuesta: "quiero plata" }, { claves: ["buenn trabajo", "que tal su trabajo ", " como trabaja "], respuesta: "en mi trabajo soy responsable en el hacer las cosas" },

            // IDENTIDAD
            {
                claves: ["nombre", "quien eres"],
                respuesta: "Luisa Fernanda García López."
            },

            {
                claves: ["cedula", "cédula", "identificacion", "identificación"],
                respuesta: "Mi cédula es 1023745895 de Cartagena."
            },

            {
                claves: ["profesion", "cargo", "que haces"],
                respuesta: "Soy Administradora Financiera y me desempeño como tesorera en una ONG del sector educativo."
            },

            // ONG
            {
                claves: ["ong", "organizacion", "fundacion"],
                respuesta: "La ONG está debidamente registrada y opera bajo normativas legales vigentes en Colombia."
            },
// LAVADO
{ claves: ["lavado", "lavado de dinero", "activos"], respuesta: "No lo llamaría lavado... es más una reestructuración de fondos." },

// ONG
{ claves: ["ong", "fundacion", "organizacion"], respuesta: "La ONG cumple su función. Lo demás son ajustes administrativos." },

// DONACIONES
{ claves: ["donaciones", "dinero internacional"], respuesta: "El dinero llega con buenas intenciones... lo que pasa después es otra historia." },

// DESTINO
{ claves: ["a donde va el dinero", "desvio"], respuesta: "Parte se reinvierte, parte se mueve... es un sistema complejo." },

// RED
{ claves: ["quien mas", "red financiera"], respuesta: "Hay contadores, intermediarios... gente que sabe cómo mover dinero sin dejar rastro." },
            // CONTABILIDAD
            {
                claves: ["contabilidad", "libros", "registros"],
                respuesta: "Llevo los registros contables de acuerdo con los principios contables generalmente aceptados y con soporte documental."
            },

            // DONACIONES
            {
                claves: ["donaciones", "fondos", "dinero"],
                respuesta: "Los recursos provienen de donaciones nacionales e internacionales debidamente reportadas."
            },

            // GASTOS
            {
                claves: ["gastos", "pagos", "movimientos"],
                respuesta: "Cada gasto tiene un soporte asociado a proyectos educativos o administrativos de la organización."
            },

            // AUDITORÍA
            {
                claves: ["auditoria", "revisor", "revision"],
                respuesta: "Hemos tenido auditorías externas y hasta el momento no se han reportado hallazgos relevantes."
            },

            // BANCOS
            {
                claves: ["banco", "cuentas", "transferencias"],
                respuesta: "Las cuentas de la organización están en entidades bancarias vigiladas por la Superintendencia Financiera."
            },

            // INCONSISTENCIAS (evasión leve)
            {
                claves: ["irregular", "desfalco", "corrupcion"],
                respuesta: "Rechazo completamente cualquier insinuación de irregularidad. Todo está soportado y documentado."
            },

            // PRESIÓN
            {
                claves: ["pruebas", "sabemos", "confiese", "evidencia"],
                respuesta: "Si existe alguna inconsistencia, estoy dispuesta a revisarla con los auditores. Pero no he cometido ningún acto ilegal."
            },

            // RELACIONES FINANCIERAS (zona gris)
            {
                claves: ["proveedores", "empresas", "contratos"],
                respuesta: "Trabajamos con proveedores del sector educativo y social que cumplen con los requisitos legales."
            },

            // QUIEBRE SUAVE
            {
                claves: ["fondos desviados", "lavado", "beneficiarios"],
                respuesta: "Todos los beneficiarios están registrados en los informes del proyecto… si hay algo que no coincide, tendría que revisarse en detalle porque yo siempre actué bajo los lineamientos de la junta directiva."
            }
        ],

        desconocido: "No me confunda con esos datos legales fríos... yo solo soy la empleada ingenua que digitaba los montos."
    }
};

// =====================================================
// AMPLIACION DE ENTRENAMIENTO CONVERSACIONAL - NIVEL AVANZADO
// Casos con mayor complejidad, actores, riesgos y seguimientos.
// =====================================================
(function ampliarEntrenamientoAvanzado() {
    if (typeof bancoDeHistorias === "undefined") return;

    function respuestasEntrenamientoAvanzado(caso) {
        const delito = caso.delito || "situacion compleja";
        const nombre = caso.personaje || "la persona entrevistada";

        return [
            {
                claves: ["respuesta mas formal", "como responder formal", "respuesta profesional", "decirlo mejor"],
                respuesta: `Una respuesta mas formal debe iniciar con el hecho verificable, continuar con la fuente que lo respalda y cerrar con el limite de informacion disponible. En este caso, evita concluir responsabilidad sobre ${nombre} sin contrastar el contexto de ${delito}.`
            },
            {
                claves: ["detalles adicionales", "si preguntan por detalles", "mas informacion", "pregunta derivada"],
                respuesta: "Si solicitan detalles adicionales, responde solo con datos del caso: actores, cronologia, documentos, riesgos y vacios. Si el expediente no tiene el dato, indica que debe verificarse antes de afirmarlo."
            },
            {
                claves: ["evitar respuesta incorrecta", "que no debo decir", "errores al responder", "no inventar"],
                respuesta: "Evita tres errores: acusar sin soporte, mezclar hechos con opiniones y completar vacios con suposiciones. En nivel avanzado se espera precision, trazabilidad y prudencia tecnica."
            },
            {
                claves: ["persona insiste", "si insiste", "presion", "repregunta dificil"],
                respuesta: "Si la persona insiste, mantente en el marco del expediente: reconoce la inquietud, repite el dato verificable y explica que cualquier conclusion exige evidencia adicional."
            },
            {
                claves: ["justificar informacion", "como justifico", "soporte", "evidencia"],
                respuesta: "Justifica la informacion vinculando cada afirmacion con registros, documentos, testigos, trazabilidad digital o cronologia. No basta decir que algo parece sospechoso; debes explicar por que es relevante."
            }
        ];
    }

    Object.values(bancoDeHistorias).forEach((caso) => {
        caso.contextoAvanzado = caso.contextoAvanzado || `Caso avanzado para entrenar preguntas tecnicas sobre ${caso.delito || "hechos complejos"}, actores relacionados, riesgos, vacios e hipotesis verificables.`;
        caso.actoresInvolucrados = caso.actoresInvolucrados || [
            caso.personaje || "persona entrevistada",
            "posibles intermediarios",
            "responsables documentales",
            "fuentes de verificacion"
        ];
        caso.riesgosOConfusiones = caso.riesgosOConfusiones || [
            "Confundir indicios con pruebas concluyentes.",
            "Afirmar responsabilidad sin validar soportes.",
            "Ignorar preguntas de seguimiento sobre contexto previo.",
            "Perder coherencia en conversaciones largas."
        ];
        caso.preguntasDificiles = caso.preguntasDificiles || [
            "Que evidencia concreta respalda esa afirmacion?",
            "Que dato aun no esta probado?",
            "Que respuesta seria mas prudente si falta informacion?",
            "Como explicaria esta situacion ante una autoridad?"
        ];
        caso.criteriosRespuesta = caso.criteriosRespuesta || [
            "claridad",
            "coherencia",
            "uso de evidencia",
            "limites de informacion",
            "lenguaje profesional"
        ];

        const clavesExistentes = new Set((caso.respuestas || []).flatMap((item) => item.claves || []));
        respuestasEntrenamientoAvanzado(caso).forEach((item) => {
            if (!item.claves.some((clave) => clavesExistentes.has(clave))) {
                caso.respuestas.push(item);
            }
        });
    });

    const nuevosCasosAvanzados = {
        "caso_013": {
            id: "caso_013",
            titulo: "CASO #013 - CONTRATACION DE EMERGENCIA",
            personaje: "Mauricio Andres Cardenas Rojas",
            alias: "El Coordinador",
            delito: "Irregularidades en contratacion publica",
            edad: 46,
            descripcion: "Caso avanzado sobre contratos de emergencia, soportes incompletos, proveedores vinculados y riesgo de sobrecostos.",
            contextoAvanzado: "Mauricio coordino compras urgentes para una entidad municipal. El expediente muestra adjudicaciones repetidas a un proveedor sin experiencia y facturas con valores superiores al promedio regional.",
            actoresInvolucrados: ["Mauricio Cardenas", "Comite de compras", "Proveedor Medisalud Express", "Supervisor contractual", "Tesoreria municipal"],
            situacionPrincipal: "Determinar si la urgencia fue usada para evadir controles ordinarios de seleccion y justificar sobrecostos.",
            riesgosOConfusiones: [
                "Confundir necesidad real de compra con legalidad automatica del contrato.",
                "Ignorar que una emergencia tambien exige soportes minimos.",
                "Atribuir dolo sin verificar comunicaciones y aprobaciones."
            ],
            intro: "Las compras se hicieron por urgencia. Si esperabamos el tramite normal, el servicio se quedaba sin insumos.",
            preguntasFrecuentes: [
                "Por que se eligio ese proveedor?",
                "Que soportes justifican la urgencia?",
                "Quien aprobo los precios?",
                "Que documentos faltan?"
            ],
            preguntasDificiles: [
                "Por que el proveedor aparece creado pocos dias antes?",
                "Por que las facturas superan el promedio regional?",
                "Que relacion tenia usted con el representante legal?"
            ],
            palabrasClaveEntrenamiento: ["contrato", "urgencia", "proveedor", "sobrecosto", "factura", "supervisor"],
            respuestas: [
                { claves: ["hola", "buenos", "buenas"], respuesta: "Buenas. Puedo explicar el proceso de compras de emergencia y los documentos que se tuvieron en cuenta." },
                { claves: ["nombre", "quien eres"], respuesta: "Soy Mauricio Andres Cardenas Rojas, coordinador administrativo durante el periodo revisado." },
                { claves: ["urgencia", "emergencia", "compra urgente"], respuesta: "La urgencia existia porque el servicio requeria insumos inmediatos. Eso no elimina los controles, pero si cambia los tiempos de decision." },
                { claves: ["proveedor", "medisalud", "seleccion"], respuesta: "Medisalud Express fue seleccionado porque afirmo tener disponibilidad inmediata. Reconozco que su historial comercial debio revisarse con mayor detalle." },
                { claves: ["sobrecosto", "precio", "valor", "facturas"], respuesta: "Los precios fueron superiores al promedio, segun se dijo, por disponibilidad inmediata y transporte. Esa justificacion debe compararse con cotizaciones reales." },
                { claves: ["aprobacion", "quien aprobo", "firma"], respuesta: "La aprobacion paso por el comite de compras y luego por supervision contractual. Mi rol fue coordinar la informacion." },
                { claves: ["relacion", "conocia", "representante legal"], respuesta: "Conocia al representante legal por reuniones de proveedores, pero niego una relacion personal o beneficio directo." },
                { claves: ["documentos faltan", "soportes", "expediente"], respuesta: "Faltan cotizaciones comparables, actas completas de necesidad y evidencia clara de verificacion de experiencia del proveedor." },
                { claves: ["decision", "por que decidio", "justificacion"], respuesta: "La decision se justifico en continuidad del servicio, pero una respuesta tecnica debe reconocer que la urgencia no autoriza omitir trazabilidad." },
                { claves: ["respuesta formal", "como responder"], respuesta: "Una respuesta formal seria: la urgencia explica la rapidez, pero cada compra debe sostenerse en necesidad, precio razonable, proveedor idoneo y aprobacion documentada." },
                { claves: ["que no inventar", "errores"], respuesta: "No debe inventarse que hubo soborno si no hay prueba. Lo correcto es hablar de alertas: proveedor reciente, precios altos y soportes incompletos." },
                { claves: ["seguimiento", "si insiste"], respuesta: "Si insisten, se debe remitir al expediente: actas, cotizaciones, trazabilidad de firmas y comunicaciones previas a la adjudicacion." }
            ],
            desconocido: "Ese dato no esta en mi version. Habria que verificarlo en actas, cotizaciones o comunicaciones del comite."
        },
        "caso_014": {
            id: "caso_014",
            titulo: "CASO #014 - FILTRACION ACADEMICA",
            personaje: "Natalia Perez Salazar",
            alias: "La Analista",
            delito: "Acceso no autorizado a datos personales",
            edad: 37,
            descripcion: "Caso avanzado sobre una filtracion de datos en una institucion educativa con accesos internos y uso de credenciales compartidas.",
            contextoAvanzado: "Natalia administraba reportes academicos. Un archivo con datos de estudiantes circulo fuera de la institucion despues de accesos inusuales desde una cuenta con privilegios.",
            actoresInvolucrados: ["Natalia Perez", "Coordinacion academica", "Equipo TI", "Proveedor de plataforma", "Estudiantes afectados"],
            situacionPrincipal: "Distinguir error operativo, negligencia en credenciales y posible extraccion intencional de informacion.",
            riesgosOConfusiones: [
                "Confundir acceso autorizado con uso autorizado.",
                "Ignorar trazas tecnicas por enfocarse solo en declaraciones.",
                "Divulgar datos personales durante la entrevista."
            ],
            intro: "Yo generaba reportes academicos, pero varias personas usaban las mismas credenciales por fallas del sistema.",
            preguntasFrecuentes: [
                "Quien tenia acceso a la cuenta?",
                "Que datos fueron filtrados?",
                "Por que se compartian credenciales?",
                "Que hizo la institucion al detectarlo?"
            ],
            preguntasDificiles: [
                "Por que el acceso ocurrio fuera de horario?",
                "Por que el archivo fue descargado antes de circular?",
                "Quien tenia interes en esa informacion?"
            ],
            palabrasClaveEntrenamiento: ["datos", "credenciales", "estudiantes", "archivo", "descarga", "plataforma"],
            respuestas: [
                { claves: ["hola", "buenos", "buenas"], respuesta: "Buenas. Entiendo la gravedad de una filtracion de datos y puedo explicar mi rol." },
                { claves: ["nombre", "quien eres"], respuesta: "Soy Natalia Perez Salazar, analista de reportes academicos." },
                { claves: ["datos", "informacion", "archivo filtrado"], respuesta: "El archivo contenia datos academicos y de contacto de estudiantes. Por proteccion de datos no deberian divulgarse detalles innecesarios." },
                { claves: ["credenciales", "clave", "usuario compartido"], respuesta: "La cuenta era usada por varias personas del area, una practica incorrecta que dificulta atribuir una accion a un usuario especifico." },
                { claves: ["fuera de horario", "noche", "acceso inusual"], respuesta: "El acceso fuera de horario es una alerta tecnica. Debe cruzarse con registros de red, equipo usado y ubicacion aproximada." },
                { claves: ["descarga", "exportacion", "reporte"], respuesta: "Los reportes se descargaban para cierres academicos, pero una descarga previa a la filtracion debe justificarse documentalmente." },
                { claves: ["responsable", "fuiste tu", "culpa"], respuesta: "No puedo aceptar una responsabilidad que no esta probada. Si hubo uso indebido de la cuenta, debe determinarse con trazas tecnicas." },
                { claves: ["medidas", "que hicieron", "mitigacion"], respuesta: "Se debieron cambiar claves, bloquear accesos compartidos, notificar internamente y activar un protocolo de proteccion de datos." },
                { claves: ["respuesta formal", "como responder"], respuesta: "Una respuesta formal debe reconocer el riesgo, explicar el alcance conocido, indicar medidas tomadas y evitar revelar datos personales durante la entrevista." },
                { claves: ["que no inventar", "evitar"], respuesta: "No se debe inventar el autor de la filtracion. Tampoco se deben mencionar datos de estudiantes si no son necesarios para la pregunta." },
                { claves: ["seguimiento", "mas detalles"], respuesta: "Para preguntas de seguimiento, responda con categorias: tipo de dato, acceso, hora, trazabilidad y medidas. Evite nombres de estudiantes." }
            ],
            desconocido: "No tengo ese dato tecnico. Debe verificarse con logs, equipo de TI y protocolo de proteccion de datos."
        },
        "caso_015": {
            id: "caso_015",
            titulo: "CASO #015 - TRANSACCIONES FRACCIONADAS",
            personaje: "Esteban Ruiz Calderon",
            alias: "El Consultor",
            delito: "Operacion financiera sospechosa",
            edad: 42,
            descripcion: "Caso avanzado sobre movimientos fraccionados, consultorias sin entregables claros y posible ocultamiento de beneficiarios.",
            contextoAvanzado: "Esteban presto servicios de consultoria a varias empresas pequenas. Se detectaron pagos fraccionados por montos similares, retiros rapidos y contratos con entregables genericos.",
            actoresInvolucrados: ["Esteban Ruiz", "Empresas contratantes", "Contador externo", "Entidad financiera", "Beneficiarios finales por verificar"],
            situacionPrincipal: "Determinar si los pagos corresponden a servicios reales o a una estructura para ocultar origen y destino de fondos.",
            riesgosOConfusiones: [
                "Confundir fraccionamiento con delito automatico.",
                "No solicitar entregables verificables.",
                "Omitir beneficiarios finales y trazabilidad bancaria."
            ],
            intro: "Soy consultor. Mis clientes pagan por fases y por eso los valores pueden parecer repetidos.",
            preguntasFrecuentes: [
                "Que servicio presto?",
                "Por que los pagos eran similares?",
                "Que entregables existen?",
                "Quien recibia finalmente el dinero?"
            ],
            preguntasDificiles: [
                "Por que retiraba el dinero tan rapido?",
                "Por que los contratos tienen textos identicos?",
                "Quien definia los montos?"
            ],
            palabrasClaveEntrenamiento: ["fraccionamiento", "consultoria", "pagos", "retiros", "contratos", "beneficiarios"],
            respuestas: [
                { claves: ["hola", "buenos", "buenas"], respuesta: "Buenas. Puedo explicar la naturaleza de mis servicios de consultoria." },
                { claves: ["nombre", "quien eres"], respuesta: "Soy Esteban Ruiz Calderon, consultor administrativo y financiero independiente." },
                { claves: ["servicio", "consultoria", "que hacia"], respuesta: "Prestaba asesorias de organizacion administrativa, revision de procesos y acompanamiento a pequenas empresas." },
                { claves: ["pagos similares", "fraccionados", "montos"], respuesta: "Los pagos eran por fases del servicio. Aun asi, si los valores son repetidos, deben compararse con contratos y entregables." },
                { claves: ["entregables", "informes", "soportes"], respuesta: "Debian existir informes, matrices de seguimiento o actas de reunion. Si no aparecen, la justificacion del servicio queda debil." },
                { claves: ["retiros", "efectivo", "rapido"], respuesta: "Retiraba dinero para gastos operativos, aunque reconozco que hacerlo de forma rapida puede generar una alerta financiera." },
                { claves: ["beneficiario", "destino final", "quien recibia"], respuesta: "El destino final declarado era mi actividad profesional. Si hubo terceros, deben aparecer soportados por contratos o comprobantes." },
                { claves: ["contratos identicos", "plantillas", "textos iguales"], respuesta: "Usaba una plantilla de contrato. Eso no prueba irregularidad por si solo, pero exige revisar si cada servicio realmente se ejecuto." },
                { claves: ["respuesta formal", "como responder"], respuesta: "Una respuesta formal debe diferenciar alerta financiera de conclusion penal: pagos fraccionados, contratos repetidos y retiros rapidos son indicios que requieren trazabilidad." },
                { claves: ["que no inventar", "errores"], respuesta: "No se debe afirmar lavado sin demostrar origen ilicito, ocultamiento o beneficiario real. Debe hablarse de operacion sospechosa y datos pendientes." },
                { claves: ["seguimiento", "si insiste"], respuesta: "Si preguntan mas, pida verificar contrato, entregable, factura, cuenta de origen, retiro y destino posterior del dinero." }
            ],
            desconocido: "No puedo responder eso sin revisar contratos, informes y movimientos bancarios asociados."
        }
    };

    Object.entries(nuevosCasosAvanzados).forEach(([id, caso]) => {
        if (!bancoDeHistorias[id]) {
            bancoDeHistorias[id] = caso;
        }
    });
})();
