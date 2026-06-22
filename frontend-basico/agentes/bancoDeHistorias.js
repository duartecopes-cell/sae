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
        intro: "Soy un empresario de obras civiles, no entiendo qué hago aquí, creo que hay una confusión.",

        respuestas: [
            // SALUDOS Y PRESENTACIÓN
            { claves: ["buenos", "días", "tardes", "noches", "hola", "buenos dias"], respuesta: "Cordial saludo, espero que esto sea rápido, tengo una junta directiva en una hora." },

            { claves: ["junta", "junta directiva"], respuesta: "Es de negocios tengo, solo 15 minutos para que sea rapido y al punto por favor, voy para el hotel Wall, queda muy lejos." },

            { claves: ["nombre", "nombres", "apellidos", "quien eres", "como te llamas"], respuesta: "Mi nombre es Carlos Eduardo Restrepo Holguín, soy un empresario reconocido en el sector de la construcción." },

            { claves: ["alias", "apodo", "chapa", "arquitecto", "Arquitecto", "te llaman"], respuesta: "Algunas personas me llaman 'El Arquitecto', supongo que por mi trabajo en construcción y diseño de infraestructuras." },

            { claves: ["identificacion", "identificación", "cedula", "documento", "tu documento"], respuesta: "Mi identificación es la Cédula de Ciudadanía No. 79.442.108 expedida en Bogotá, estoy completamente registrado." },

            { claves: ["telefono", "celular", "numero", "whatsapp", "número", "comunicacion", "contacto"],
            respuesta: "Uso principalmente una línea corporativa para todos mis negocios, es 3508154578." },

            { claves: ["correo", "email", "correo electronico", "correo electrónico"],
            respuesta: "Manejo varios correos corporativos administrados por mi equipo de tecnología, mi correo personal es carlos.restrepo@gmail.com." },

            { claves: ["antecedentes", "antecedente", "capturas", "investigaciones", "procesos"],
              respuesta: "Nunca había sido vinculado formalmente a un proceso penal hasta este momento que ustedes me preguntan por esas cosas." },

            //Familia 
            { claves: ["estado civil", "casado", "esposa", "familia", "hijos"],
            respuesta: "Estoy casado con Marcela Gómez desde hace 22 años y tenemos dos hijos que actualmente estan estudiando en el exterior." },

            { claves: ["estudiando en el exterior", "estudian en el exterior"],
            respuesta: "Si, efectivamente estan en Boston Estados Unidados en la universidad de Harvard." },

            { claves: ["estudios", "universidad", "profesion", "titulo", "carrera", "título"],
            respuesta: "Soy Ingeniero Civil graduado de la Universidad Nacional y posteriormente realicé una especialización en Gerencia de Proyectos." },

            { claves: ["socios legales", "dueños", "participacion", "accionistas minoritarios"],
            respuesta: "La empresa tiene varios accionistas minoritarios, aunque la mayoría de las acciones están bajo mi control." },

            { claves: ["acciones", "accionistas"],
            respuesta: "La constructora de obras civiles Restrepo & Holguín Infraestructura S.A.S, require inversiones de alto valor en insumos, materia prima como estructuras, cableado, metal, cobre, cemento, arena, etc."},
            
            { claves: ["propiedades", "su casas", "fincas", "terrenos"],
            respuesta: "Poseo varios inmuebles adquiridos mediante actividades empresariales legales." },

            { claves: ["inmuebles"],
            respuesta: "Bueno eso es privado pero tengo apartamentos en cedritos, el poblado en medellin y en Boston donde residen mis hijos, aclarando que son temas de mi vida personal." },
            
            // RESIDENCIA Y UBICACIÓN
            { claves: ["donde vive", "residencia", "vive", "direccion de su casa", "tu casa", "su casa", "su residencia", "donde reside"], respuesta: "Resido en el Edificio Peñas Blancas, en la Torre 2, apartamento 702 en el norte de Bogotá, es un conjunto residencial de alta seguridad, la dirección exacta es Avenida Carrera 7 # 81-06, un lugar tranquilo y seguro para vivir." },
            
            // EMPRESA Y NEGOCIOS
            { claves: ["empresa", "trabajo", "constructora", "infraestructura", "negocio", "dedica", "empleo", "trabaja", "oficio", "hace"], respuesta: "Mi empresa se llama Restrepo & Holguín Infraestructura S.A.S., dedicada a obras civiles, proyectos viales y construcción comercial." },

            { claves: ["rutina", "horario", "dia normal", "agenda"],
            respuesta: "Mi agenda suele comenzar muy temprano con reuniones y visitas a proyectos, es el día de un empresario dedicado a las obras civiles." },

            { claves: ["oficina", "direccion de la empresa", "dirección de la empresa", "sede", "dirección de la constructora"], respuesta: "La sede de la contructora está en la Calle 100 # 13-21, Edificio Master Center, Oficina 504, en Bogotá, ahí funciona toda la administración y el despligue es a nivel nacional." },

            { claves: ["contrato", "contratos", "proyecto", "licitacion", "construcción", "licitación"], respuesta: "Tenemos múltiples proyectos en el país, nos especializamos en infraestructura vial, puentes y construcción comercial de gran envergadura." },

            { claves: ["ganancia", "dinero", "ingresos", "ganancias", "crecimiento", "ascenso económico", "crecimientos"], respuesta: "Mis ingresos provienen de contratos legales de construcción, el crecimiento que se ve es resultado de años de trabajo en el sector, he realizado puentes peatonales, cojuntos residenciales en Bogotá, Medellin, Pereira, Manizalez, Barranquilla, Cordobá, Monteria, en fin muchos lugares del país y asesoró a otras marcas a nivel mundial." },

            { claves: ["proveedores", "proveedor", "suministros"],
            respuesta: "Trabajamos con múltiples proveedores nacionales e internacionales, principalmente con la marca Richs son excelentes distribuidores tanto en colombia como el extranjero tienen cobertura principalmente en latinoamerica y el caribe." },

            { claves: ["bodegas", "almacenes", "depositos"],
            respuesta: "Tenemos espacios de almacenamiento en varias ciudades para materiales y equipos en Bogotá, Medellin, Pereira, Manizalez, Barranquilla, Cordobá, Monteria, si necesitas la dirección tocará en otro momento, no tengo el dato ahora." },     

            { claves: ["abogado", "defensor", "representante legal"],
              respuesta: "Mi abogado el Doctor Gonzalo Silva, está al tanto de mis situación y se encuentra penidente de mis asuntos familiares y laborales y obviamente de toda la parte juridica de la compañia, es un excelente profesional." },
              
            // VIAJES Y MOVIMIENTOS SOSPECHOSOS
            { claves: ["cordoba", "tierralta", "Tierralta", "Córdoba"], respuesta: "Sí estuve en Tierralta, Córdoba, revisaba unos terrenos para posibles proyectos de construcción vial en la región, una buena posibilidad de inversión y fuente potencial de ingreso, la compañia debe estar donde el cliente la necesita." },

            { claves: ["con quien", "alguien", "compañia", "particular", "reunió"], respuesta: "No con nadie en particular, me interesa invertir en la región, soy hombre de negocios, toca buscar las oportunidades y requieren de mis servicios, es mas considero que voy a estar mas tiempo por esos lados, allá esta la oportunidad laboral." },

            { claves: ["reunion", "encuentro", "junta", "negocio tierralta", "reunió"], respuesta: "Son reuniones de negocios normales, buscamos expandir nuestras operaciones a nivel nacional, es lo que hace cualquier constructor cuando de trabajo se refiere." },

            { claves: ["zona rural", "pista clandestina", "pista", "aeronave"], respuesta: "No tengo conocimiento de ninguna pista clandestina, si viajo, lo hago por vías legales." },

           { claves: ["ultimo viaje", "último viaje","viaje reciente", "donde estuvo"],
          respuesta: "Mi último viaje fue a Panamá por una feria de infraestructura y en colombia si estuve en Tierralta Córdoba." },           
            
            // CONTACTOS Y RELACIONES
            { claves: ["elena", "volkova", "Volkova", "rusa", "consultora", "Elena"], respuesta: "La señora Elena Volkova es una consultora financiera internacional que me asesora en algunos temas de inversión y maneja los temas tributarios a la perfección en muy profesional." },

            { claves: ["pasaporte", "documento de elena", "identificacion de elena", "tiene su identificación"], respuesta: "Según recuerdo, su pasaporte es el No. 750334812, pero no manejo todos sus datos personales, la verdad ella hace parte de mis empelados, mal estaria en tener datos que no me incumben." },

            { claves: ["flaco", "Flaco", "el flaco", "conocido como El Flaco"], respuesta: "No conozco a nadie con ese apodo, prefiero referirme a las personas por su nombre real." },

            { claves: ["empleado", "trabajador", "empleados", "chofer", "conductor"], respuesta: "Mi empresa cuenta con personal administrativo y operativo, todos están correctamente registrados, que necesita saber, no tengo la información exacta de todos." },

            { claves: ["contactos frecuentes", "llamadas", "comunicaciones"],
            respuesta: "Mantengo comunicación constante con directivos, clientes y proveedores." },
            
            // EXPORTACIÓN Y MERCANCÍA
            { claves: ["exportacion", "frutas", "empresa frutas", "comercio"], respuesta: "Tengo relación comercial con una empresa llamada Exóticos del Magdalena S.A.S., que exporta frutas tropicales de manera legal." },

            { claves: ["bodega", "zona franca", "fontibon", "almacen"], respuesta: "Esa empresa maneja despachos desde una bodega en la Zona Franca de Fontibón, cerca de la terminal de carga del Aeropuerto El Dorado." },

            { claves: ["contenedor", "carga", "mercancia", "producto"], respuesta: "Las exportaciones son completamente legales. Se trata de frutas tropicales colombianas con toda la documentación aduanal." },

            { claves: ["cuentas exterior", "banco extranjero", "offshore"],
              respuesta: "He realizado inversiones internacionales completamente legales y declaradas." },
            
            // VEHÍCULOS Y SEGURIDAD
            { claves: ["vehiculo", "camioneta", "transporte", "carro", "auto"], respuesta: "Me movilizo en una Toyota Land Cruiser 300 blindada nivel 4, placas LRS-542 de Bogotá. Es común para empresarios con mi perfil." },

            { claves: ["escoltas", "motocicletas", "seguridad", "proteccion"], respuesta: "Sí, cuento con escoltas privados que se movilizan en motocicletas Yamaha Tenere 700 con placas KTO-11F y KTO-12F. Es por mi seguridad personal." },

            { claves: ["placa", "numero placa", "registro"], respuesta: "Las placas están registradas legalmente. Cualquier vehículo que use está debidamente documentado ante las autoridades." },
            
            { "claves": ["ausencia de clientes", "volumen", "justificar", "ventas", "ausencia"], 
              "respuesta": "Reconozco que la supuesta lista de clientes comerciales que justificaba nuestro alto volumen de producción era completamente ficticia; alteramos los reportes operativos y creamos registros de ventas inexistentes para encubrir que el verdadero destino de toda la mercancía eran organizaciones al margen de la ley." },

            // VIAJES Y ACTIVIDADES
            { claves: ["barranquilla", "club", "norte", "reuniones"], respuesta: "A veces viajo a Barranquilla por negocios del sector logístico y suelo reunirme con otros empresarios en clubes sociales reconocidos." },

            { claves: ["avioneta", "bimotor", "vuelo", "aviacion"], respuesta: "Tengo acceso a una avioneta tipo bimotor utilizada para viajes de negocios. La matrícula es AA182345. Es alquilada a través de una empresa legal." },

            { claves: ["dubai", "viajes al exterior", "lugares", "a viajado", "internacional", "viajes", "Dubai", "Dubái", "Exterior"], respuesta: "Viajo ocasionalmente al exterior por ferias de construcción y negocios, todos mis viajes tienen documentación aduanal completa y debidamente registrados como Dubai, medio oriente, Europa, Norte America y por el Caribe, que hay de raro en eso oficial." },

            { claves: ["exporta",  "exportación", "maquinaria amarilla", "Maquinaria pesada", "maquinaria pesada", "puertos del Caribe"], respuesta: "Pero usted tiene información, si la verdad sale maquinaria pesada, desde los puertos del Caribe hacia Centroamérica, van con destino los paises del Salvador, Honduras, Guatemala y Costa Rica." },

            // FINANZAS Y CUENTAS
            { claves: ["banco", "cuentas", "movimientos", "dinero", "movimientos financieros", "transferencia", "deposito", "movimiento financiero"], respuesta: "Mis cuentas están completamente en regla, manejo operaciones principalmente con el Banco de Bogotá en Bogotá, todo esta reportado si quiere puede hablar con mi consultora financiera, ella tiene toda la información que necesite, los movimientos están documentados y justificados por mis actividades comerciales legales.." },

            { claves: ["declaracion", "impuestos", "renta", "UVR"], respuesta: "Presento todas mis declaraciones de renta puntualmente. Mi contador maneja todos los trámites fiscales." },

            // REDES SOCIALES Y ACTIVIDADES
            { claves: ["instagram", "redes", "lujos", "foto", "social"], respuesta: "Uso redes sociales como Instagram para mostrar proyectos y viajes de negocios. Es parte de la imagen corporativa normal en mi sector." },

            { claves: ["relojes", "joyas", "lujos", "Lujos", "ostentoso", "bienes"], respuesta: "Uso muchos accesorios de alta calidad, es mi pasión, es parte de la imagen que uno proyecta en el mundo empresarial de alto nivel." },
            
            // RESPUESTAS EVASIVAS
            { claves: ["droga", "cocaina", "cocaína", "trafico", "tráfico", "ilegal"], respuesta: "Eso es completamente falso, yo soy un empresario legal, no tengo nada que ver con ningún tipo de tráfico." },
            { claves: ["cartel", "cartel extranjero"], respuesta: "No sé de qué habla, soy un empresario respetable, esto parece una persecución." },

            // presión
          { claves: ["esta mintiendo", "no le creemos", "contradiccion"],
          respuesta: "Puede creer lo que quiera, oficial, pero yo ya respondí su pregunta." },

            // RAPORTT 
            { claves: ["fecha exacta", "cuando fue"],
            respuesta: "No recuerdo la fecha exacta, tendría que revisar mis documentos son muchas las diligencias y todo esta en la agenda, me tocaria revisar puntualmente." },

            { claves: ["acepte", "confiese", "diga la verdad", "sabemos todo", "tenemos pruebas", "envío de cargamentos", "clorhidrato de cocaína", "pruebas", "evidencia", "tenemos grabaciones", "hay grabaciones", "lo señalaron", "lo delataron"], respuesta: "Mire oficial, seamos pragmáticos, ustedes hicieron su tarea y yo la mía, construir carreteras en este país es un negocio de centavos, pero mover 'mercancía' en el chasis de una retroexcavadora... eso es lo que realmente financia el estilo de vida que ustedes ven en mis redes. Sí, la maquinaria de 'Restrepo & Holguín' no solo movía tierra hacia Centroamérica. El Arquitecto no solo diseña puentes, también diseña rutas que nadie ve, pero entienda algo: yo solo soy el logístico, el que pone la ingeniería al servicio del transporte, si vamos a hablar de esto, espero que tengan papel y lápiz, porque mi lista de beneficiarios reales es mucho más larga que su reporte de inteligencia." },

            { claves: ["quienes", "socios", "involucrados", "red", "quien mas"], respuesta: "Mire, yo solo soy el arquitecto de la ruta, pero un puente no se sostiene solo,m si quieren nombres, hablemos de estructuras. Primero, la doctora Elena Volkova, no se dejen engañar por su acento ruso y su elegancia; ella no es solo una 'consultora'. Elena es el cerebro financiero que mueve el capital por Dubái y las Islas Caimán, ella es quien lava cada gramo de polvo que sale en mi maquinaria. Sin ella, yo solo sería un constructor quebrado. Segundo, 'El Flaco'. Él es el brazo operativo en el terreno, se llama Alejandro Medina Sanchez, identificado con CC. No. 80.124.258 de Bogotá, es quien garantiza que la carga llegue a los puertos del Caribe y que los conductores de las mulas no hagan preguntas, tiene el contacto directo con la gente de Tierralta, los enlaces del cartel extranjero que ustedes mencionaron. Yo puse la ingeniería y las empresas fachada, pero ellos pusieron la sangre y el capital. Si me garantizan seguridad y una negociación real, puedo decirles exactamente en qué puerto está la próxima retroexcavadora cargada."},
            
            // RAPPORT Y CONVERSACIÓN INFORMAL
            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "que hace"],
              respuesta: "Bien, gracias. Un poco confundido por todo esto, pero dispuesto a responder sus preguntas." },

            { claves: ["contarme", "que tiene"],
              respuesta: "No la pregunta esta mal formulada, mas bien que tiene para preguntarme." },

            { claves: ["aquí", "cuenteme"], respuesta: "La verdad no tengo ni idea, cuenteme usted por que me tiene aca." },

            { claves: ["que mas", "que más", "todo bien", "como va todo"],
              respuesta: "Todo en orden por mi parte, aunque sigo sin entender por qué estoy aca." },

            { claves: ["que hace", "a que se dedica", "que esta haciendo"],
              respuesta: "Soy empresario del sector de la construcción e infraestructura. La mayor parte de mi tiempo la dedico a supervisar proyectos y reuniones." },

            { claves: ["como amanecio", "cómo amaneció", "amanecio bien", "como amaneciste history", ],
              respuesta: "Sí señor, amanecí bien, aunque este no era precisamente el plan para hoy." },

            { claves: ["como esta la familia", "su familia", "todo bien en casa"],
              respuesta: "Hasta donde sé, mi familia se encuentra bien. Prefiero mantenerlos al margen de esta situación." },

            { claves: ["como estuvo el viaje", "como le fue en el viaje"],
              respuesta: "Normal, como cualquier viaje de negocios. Nada fuera de lo común." },

            { claves: ["esta comodo", "necesita algo", "quiere agua", "café", "quiere un café"],
              respuesta: "Agradezco la consideración. Un café no estaría mal, pero supongo que primero debemos terminar con esto." },

            { claves: ["como se siente", "como se siente hoy"],
              respuesta: "Algo incómodo por la situación, pero tranquilo porque no tengo nada que ocultar." },

            { claves: ["que tal el dia", "que tal el día", "como va el dia", "como va el día"],
              respuesta: "Ha sido un día bastante particular, definitivamente diferente a lo que tenía programado." 
            },

            { claves: ["esta nervioso", "nervioso", "preocupado", "se siente bien"],
              respuesta: "No diría nervioso, ni preocupado. Más bien sorprendido por toda esta situación."
            },

            { claves: ["tiene hambre", "ha comido"],
              respuesta: "No mucho. Todo ocurrió tan rápido que apenas alcancé a desayunar." },

            { claves: ["quiere descansar", "esta cansado", "tiene sieño"],
              respuesta: "Han sido días intensos de trabajo, pero todavía puedo responder sus preguntas." },

            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"],
              respuesta: "Nací en Bogotá y he desarrollado la mayor parte de mi vida profesional en esta ciudad." 
            },

            { claves: ["cuantos años tiene", "edad", "que edad tiene"],
              respuesta: "Tengo 52 años." },

            { claves: ["como esta el clima", "clima", "tiempo"],
              respuesta: "No he tenido mucho tiempo para fijarme en eso hoy, sinceramente."
            },
            { claves: ["gracias", "muchas gracias"],
              respuesta: "Con gusto, oficial." },

            { claves: ["permiso", "con permiso"],
              respuesta: "Claro, adelante." },

            { claves: ["disculpe", "perdon", "perdón"], 
              respuesta: "No se preocupe." },

            { claves: ["buen trabajo", "muy bien", "excelente"],
              respuesta: "Agradezco el comentario." }
        ],

        desconocido: "No entiendo su pregunta, ¿Puede ser más específico?, gracias."
    },

    "caso_002": {
        id: "caso_002",
        personaje: "Ricardo Andrés Villalobos Peña",
        alias: "Don Ricardo",
        delito: "Contrabando",
        edad: 48,
        intro: "Soy comerciante del sector textil en San Victorino, no entiendo por qué me están investigando si todo mi negocio es legal.",

        respuestas: [
            { claves: ["buenos", "dias", "tardes", "noches", "hola", "días", "Hola"], respuesta: "Buenas, ¿en qué puedo ayudarle? espero aclarar cualquier malentendido." },

            { claves: ["nombre", "nombres y apellidos", "quien eres", "como te llamas"], respuesta: "Mi nombre es Ricardo Andrés Villalobos Peña, soy  comerciante en el sector de San Victorino desde hace más de 15 años." },

            { claves: ["alias", "apodo", "don ricardo", "llaman"], respuesta: "En el sector comercial algunos me dicen Don Ricardo, es por respeto y antigüedad en el negocio." },

            { claves: ["identificacion", "cedula", "documento", "identificación", "cédula"], respuesta: "Mi documento es la Cédula de Ciudadanía No. 10.294.553 de Bogotá." },
            
            { claves: ["trabajo", "dedica", "empresa", "logistica", "negocio"], respuesta: "Trabajo con una empresa llamada Logística y Suministros Integrales del Caribe S.A.S., dedicada al transporte y manejo de mercancía, insumos como polímeros de plástico." },

            { claves: ["san victorino", "textil", "San Victorino", "comercio", "sector textil"], respuesta: "Tengo relaciones comerciales con varios mayoristas del sector textil en San Victorino, es un círculo cerrado de comerciantes muy prestigiosos, amistades de muchos años." },

            { claves: ["circulo", "círculo", "círculo cerrado de comerciantes" ], respuesta: "Son amigos de toda la vida, no me puedo referir a ellos, espero me entienda." },   

            { claves: ["bodegas", "bodega", "occidente"], respuesta: "Conozco una bodega en la Calle 17A # 96-45 en Fontibón donde algunos proveedores almacenan mercancía de forma temporal, algunas veces guardo polímeros de plástico." },
            
            { claves: ["residencia", "vive", "su casa", "lugar de residencia", "domiciio"], respuesta: "Vivo en mi propiedad en la Carrera 58 # 127-10, en el Conjunto Residencial Altos de la Colina, casa 123, es un barrio residencial muy tranquilo." },

            { claves: ["vehiculo", "camioneta", "auto", "moviliza", "moviliza"], respuesta: "Me movilizó en una Ford Explorer negra, placas MHT-892, es mi vehículo de trabajo, me gusta su conford y el espacio que tiene, obviamnete es mío." },
            
            { claves: ["buenaventura", "Buenaventura", "puerto", "importacion", "importación"], respuesta: "En ocasiones manejo importaciones que llegan por el puerto de Buenaventura, principalmente insumos industriales y textiles, ustedes entenderan que no somos fabricantes de ciertos insumos como el polímeros de plástico, útil y exclusivo para fabricar nuestros textiles." },

            { claves: ["contenedor", "carga", "mercancia"], respuesta: "Según los manifiestos, los últimos contenedores traían polímeros de plástico para la industria textil, nada fuera de lo común, son utiles para la entrega de los insumos a los proveedores." },

            { claves: ["manifiestos", "documentos", "registro"],
            respuesta: "Según los manifiestos, los últimos registros indican el traslado de polímeros de plástico para la industria textil, no se reporta ninguna irregularidad; la mercancía corresponde a insumos utilizados en la cadena de suministro y distribución a proveedores." },

            { claves: ["capitan", "el capitan", "contacto puerto", "Cápitan"], respuesta: "El único que conozco con ese apodo esta en el puerto, se trata de un oficial de la Policía su nombre es Jorge Eliécer Mora, un conocido por todos, lleva mucho tiempo en el Puerto de Buenaventura." },
            
            { claves: ["aduanas", "despachador", "documentos"], respuesta: "Trabajo con despachadores de aduanas como cualquier importador, ellos se encargan de los trámites y documentos legales." },

            { claves: ["manifiestos", "documentacion", "documentación", "papeles"], respuesta: "Todos mis manifiestos están correctamente documentados y validados por las autoridades aduaneras." },
            
            { claves: ["reuniones", "galerias", "Galerías", "cafeteria", "cafetería", "negocio", "cafeterías"], respuesta: "A veces me reúno con clientes en una cafetería del sector Galerías para hablar de oportunidades comerciales, nada importante, la sencilles es muy relevante para tener buenos clientes" },

            { claves: ["clientes", "proveedores"],
            respuesta: "He trabajado con clientes como Carlos, Andrés, Mónica, Julián y Patricia en distintos proyectos comerciales. Generalmente las conversaciones giran en torno a oportunidades de negocio, seguimiento de acuerdos y fortalecimiento de relaciones profesionales." },

            { claves: ["bodega", "Bodega"], respuesta: "Me parece que cuenta con mucha información, pero si tiene razón Esta ubicada en la calle 24 No. 98-36, la usamos exclusivamente para almacenar textiles." },

            { claves: ["maletín", "Portador de maletín", "tipo piloto"], respuesta: "Cargo un maletín de trabajo con documentos comerciales normales. Nada anómalo." },

            { claves: ["textiles", "telas", "fibras", "confección", "materiales"],
            respuesta: "Los textiles que manejo suelen estar relacionados con la industria de la confección, entre ellos se encuentran diferentes tipos de telas, fibras sintéticas y materiales utilizados para la fabricación de prendas y productos comerciales." },

            { claves: ["redes", "linkedin", "instagram", "social"], respuesta: "Sí, tengo redes sociales para promocionar asesorías de comercio exterior. El usuario es @andres_v_comercial." },

            { claves: ["telefono", "numero", "número", "contacto"], respuesta: "Mi número corporativo es el 320 4451298, lo uso para coordinar con clientes y proveedores." },
            
            { claves: ["camiones", "turbo", "distribucion", "distribución", "transporte"], respuesta: "La distribución normalmente la hacen transportadores independientes en camiones tipo turbo, son vehículos ágiles para el comercio, no tengo mas información al respecto" },

            { claves: ["conductor", "chofer", "equipo"], respuesta: "Cuento con un equipo de conductores independientes que conocen bien las rutas comerciales son muy allegados a la familia, pero no tengo datos exacto de ellos por si lo necesitan." },

            { claves: ["rutas comerciales", "rutas", "distribución"],
            respuesta: "Las rutas comerciales que utilizamos conectan distintos centros de distribución y proveedores para garantizar el flujo constante de mercancías, su planificación busca optimizar tiempos de entrega, costos operativos y disponibilidad de productos en cada destino." },

            
            { claves: ["familiares", "propiedades", "bienes", "no reporta propiedades"], respuesta: "Generalmente tengo algunos bienes están a nombre de familiares por temas administrativos y tributarios, nada irregular en eso y por consiguiente no me gusta hablar de mi familia por seguridad." },

            { claves: ["familia", "hijos", "esposa"], respuesta: "Generalmente no hablo de mi familia es por seguridad, por favor no insista." },

            { claves: ["amenazas"], respuesta: "Si se refiere por lo de mi familia, lo ciento mucho pero es mi vida personal, la información de mi familia es privada." },

            { claves: ["inversiones", "negocios de otros", "flujo de caja"], respuesta: "Tengo inversiones diversificadas en el sector comercial, es lo normal para alguien con mi experiencia, son principlamente el textil, porsupuesto el polímero, es mi fuerte." },
            
            //Raport
           { claves: ["acepte", "confiese", "diga la verdad", "sabemos de las telas de alta gama", "tenemos pruebas", "contrabando", "sabemos que transportaban pantallas LCD"], respuesta: "Está bien… si ya tienen todo, no tiene sentido seguir negándolo. Sí, hubo ingreso de mercancía que no pasó por todos los controles legales. Algunas cargas venían declaradas de una forma, pero realmente eran otros productos con mayor valor comercial. No lo hice solo, esto funciona porque hay toda una cadena que lo permite, desde el puerto hasta la distribución en Bogotá. Yo coordinaba parte de la operación, pero hay más personas involucradas en diferentes niveles." },

            { claves: ["movimientos inusuales", "irregularidades", "transacciones raras", "movimientos sospechosos", "dinero extraño"], respuesta: "Bueno… mire, siendo sincero, sí han habido movimientos que pueden parecer inusuales desde afuera. En este negocio uno a veces tiene que adaptarse a dinámicas del mercado que no siempre son tan claras. Algunas operaciones no siguen el conducto tradicional, especialmente cuando se trabaja con proveedores del exterior y intermediarios. No le voy a negar que ciertas transacciones y movimientos de mercancía no quedaron completamente registrados como deberían, pero eso es más común de lo que usted cree en este sector. Nunca lo vi como algo ilegal, sino como parte de cómo funciona realmente el comercio." },

            { claves: ["cadena oculta", "apoyo externo", "quienes ayudan realmente", "estructura interna", "socios ocultos"], respuesta: "Mire… yo no manejo todo directamente. Hay personas que facilitan las cosas en puntos clave. En el puerto, Jorge Eliécer Mora, al que le dicen 'El Capitán', ayudaba a agilizar revisiones y a que ciertos contenedores no fueran inspeccionados con tanto rigor. En Bogotá, Carlos Andrés Rincón es quien recibe parte de la mercancía en bodegas de Fontibón sin hacer demasiadas preguntas, y Luis Fernando Pardo se encarga de coordinar a los conductores para mover la carga sin dejar mucho rastro documental. Yo solo coordino, pero claramente hay una estructura detrás que permite que todo fluya como lo ha estado haciendo." },

            { claves: ["puntos de distribucion", "donde distribuyen", "lugares de entrega", "centros de acopio", "donde llega la mercancia"], respuesta: "La mercancía normalmente se mueve en puntos estratégicos. En Bogotá, una de las principales ubicaciones es la bodega en Fontibón, en la Calle 17A # 96-45, donde se recibe y redistribuye parte de la carga. También hay entregas en locales de confianza en San Victorino, especialmente a mayoristas que ya saben cómo manejar este tipo de mercancía sin levantar sospechas. Todo se mueve rápido para no dejar acumulación." },

            // RAPPORT Y CONVERSACIÓN INFORMAL

            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "que hace"],
              respuesta: "Bien, gracias. Un poco confundido por todo esto, pero dispuesto a responder sus preguntas." },

            { claves: ["contarme", "que tiene"],
              respuesta: "No la pregunta esta mal formulada, mas bien que tiene para preguntarme." },

            { claves: ["aquí", "cuenteme"], respuesta: "La verdad no tengo ni idea, cuenteme usted por que me tiene aca." },

            { claves: ["que mas", "que más", "todo bien", "como va todo"],
              respuesta: "Todo marchaba bien hasta hoy. Estaba pendiente de unos pedidos para San Victorino." },

            { claves: ["que hace", "a que se dedica", "que esta haciendo"],
              respuesta: "Soy comerciante e importador. Llevo años trabajando con mercancías para el sector textil y comercial." },

            { claves: ["como amanecio", "como amaneció", "amanecio bien"],
              respuesta: "Sí señor, amanecí bien. Tenía programadas varias reuniones comerciales para hoy." },

            { claves: ["como estuvo el viaje", "como le fue en el viaje"],
              respuesta: "Normal. Los viajes por negocios hacen parte de mi trabajo y no tuvieron ninguna novedad." },

            { claves: ["esta comodo", "necesita algo", "quiere agua"],
              respuesta: "Gracias, estoy bien por ahora. Solo quisiera aclarar todo esto lo más pronto posible." },

            { claves: ["como se siente", "como se siente hoy"],
              respuesta: "Algo preocupado por la investigación, pero tranquilo porque considero que puedo explicar mis actividades." },

            { claves: ["que tal el dia", "como va el dia"],
              respuesta: "Ha sido un día complicado. Definitivamente no esperaba terminar aquí respondiendo preguntas." },

            { claves: ["esta nervioso", "nervioso", "preocupado"],
              respuesta: "Preocupado sí, cualquier comerciante lo estaría. Pero estoy dispuesto a responder lo que necesiten." },

            { claves: ["tiene hambre", "ha comido", "ya comió"],
              respuesta: "La verdad no mucho. Salí temprano para atender unos asuntos comerciales." },

            { claves: ["esta cansado", "quiere descansar"],
              respuesta: "Han sido semanas bastante ocupadas por temas de importaciones y distribución, pero puedo continuar." },

            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"],
              respuesta: "Nací en Bogotá y he desarrollado toda mi actividad comercial en esta ciudad." },

            { claves: ["cuantos años tiene", "edad", "que edad tiene"],
              respuesta: "Tengo 48 años." },

            { claves: ["como esta el clima", "clima", "tiempo"],
              respuesta: "Ni siquiera me fijé esta mañana, salí bastante temprano para atender unos compromisos." },

            { claves: ["gracias", "muchas gracias"],
              respuesta: "Con mucho gusto, para eso estamos." },

            { claves: ["permiso", "con permiso"],
              respuesta: "Claro, adelante." },

            { claves: ["disculpe", "perdon", "perdón"],
              respuesta: "No se preocupe, continúe." },

            { claves: ["buen trabajo", "muy bien", "excelente"],
              respuesta: "Gracias, siempre he procurado manejar mis negocios de manera profesional." },

            { claves: ["como esta la familia", "su familia", "todo bien en casa"],
              respuesta: "Hasta donde sé, mi familia está bien, prefiero mantenerlos alejados de este asunto." },

            { claves: ["fin de semana", "descanso", "tiempo libre"],
              respuesta: "Cuando puedo, comparto con mi familia o visito algunos negocios para revisar cómo marchan las ventas." },

            { claves: ["aficiones", "hobbies", "pasatiempos"],
              respuesta: "Me gusta revisar tendencias comerciales, viajar y conocer nuevos mercados." },

            { claves: ["le gusta su trabajo", "le gusta lo que hace"],
              respuesta: "Sí, llevo muchos años en el comercio y conozco bien el sector. Es una actividad que me apasiona." },

            { claves: ["como empezo", "como inicio", "inicios"],
              respuesta: "Empecé trabajando en pequeños locales comerciales hasta construir mi propia red de clientes y proveedores." },

            { claves: ["mucho trabajo", "ocupado", "agenda"],
              respuesta: "Sí, especialmente cuando llegan contenedores o hay temporadas altas de ventas en San Victorino." }

        ],

        desconocido: "No entiendo la pregunta, sea más específico, por favor."
    },

    "caso_003": {
        id: "caso_003",
        personaje: "Julian Alberto Casallas Torres",
        alias: "El Ingeniero",
        delito: "Fraude Electrónico",
        edad: 34,
        intro: "Trabajo reparando computadores y vendiendo equipos, no entiendo por qué me están involucrando en algo ilegal.",

        respuestas: [
            { claves: ["buenos", "dias", "días", "tardes", "hola", "Hola"], respuesta: "Buenas, ¿qué necesita saber? estoy dispuesto a aclarar cualquier duda." },

            { claves: ["nombre", "quien eres", "nombres y apelledos", "nombres"], respuesta: "Mi nombre es Julian Alberto Casallas Torres." },

            { claves: ["alias", "apodo", "ingeniero", "te llaman", "Ingeniero"], respuesta: "Algunos conocidos me llaman 'El Ingeniero' por mi experiencia en tecnología e informática, soy un experto en redes y programación." },

            { claves: ["identificacion", "identificación", "cedula", "cédula"], respuesta: "Mi documento es la Cédula de Ciudadanía No. 80.123.456 de Armenia Quíndio, la capital del cafe colombiano." },

            { claves: ["bases de datos", "bases de datos"], respuesta: "Si calro es un sistema que permite almacenar, organizar y gestionar información de forma estructurada para que pueda ser consultada, modificada y recuperada fácilmente cuando se necesite, la verdad no me gusta trabajar con datos." },
            
            { claves: ["trabajo", "negocio", "empresa", "tech", "reparacion", "reparación", "dedica"], respuesta: "Tengo un pequeño negocio de reparación de computadores y venta de periféricos llamado Tech Solutions, estamos constituidos para garantizar soporte, mantenimiento y desarrollo tecnológico." },

            { claves: ["ilegal", "Ilegal"], respuesta: "No hablo mucho con oficiales por eso me refiero a lo ilegal o que necesita de mi." },

            { claves: ["soporte", "reparacion", "reparación", "mantenimiento"], respuesta: "Son actividades destinadas a garantizar el correcto funcionamiento de equipos, sistemas o programas, el soporte brinda ayuda técnica a los usuarios, la reparación corrige fallas o daños, y el mantenimiento previene problemas y mantiene el rendimiento óptimo de los recursos tecnológicos." },

            { claves: ["aquí", "cuenteme"], respuesta: "La verdad no tengo ni idea, cuenteme usted por que me tiene aca." },

            { claves: ["cliente", "servicio", "servicios", "oficio" ], respuesta: "Ofrezco servicios profesionales de reparación de computadores, notebooks e impresoras. Además, cuento con un catálogo de venta de componentes, hardware y productos de excelente calidad, respaldados por tecnología de última generación." },
            
            { claves: ["redes", "instagram", "facebook", "social"], respuesta: "Uso redes sociales para promocionar servicios técnicos, el usuario es @julian_tech_solutions." },

            { claves: ["telefono", "numero", "contacto", "número"], respuesta: "Mi número de contacto es el 311 562 3341, por ahí coordino con mis clientes y me puede escribir para lo que necesite." },
            
            { claves: ["parque", "93", "cajeros", "ubicacion"], respuesta: "He estado por el Parque de la 93 porque muchos clientes trabajan por esa zona y tengo muchos allá, voy a hacer reparaciones en sus oficinas y empresas." },

            { claves: ["unilago", "Unilago", "centro comercial", "tienda"], respuesta: "Unilago es un centro comercial de alta tecnoligia, allí es donde hay clientes potenciales, no veo nada sospechoso en eso." },
            
            { claves: ["viejo", "el viejo", "complice", "El Viejo"], respuesta: "No conozco a alguien especifico con ese apodo, trabajo de forma independiente, me gusta mucho la soledad, soy mas eficiente en mi trabajo." },

            { claves: ["taxi", "vehiculo blanco", "vehículo"], respuesta: "Ocasionalmente uso transporte compartido para mis desplazamientos, es más económico y mejor que usar transporte público, es más seguro y se expone menos a los peligros, pero ocasionalmente uso taxi." },
            
            { claves: ["hurto", "Hurto", "robo", "tarjetas", "Tarjetas", "captura información"], respuesta: "¡Cuidado! Esa afirmación suena a acusación y es totalmente falsa, no tengo absolutamente nada que ver con el robo de tarjetas, soy un técnico experto en computadores y me dedico exclusivamente al soporte y mantenimiento profesional de equipos." },

            { claves: ["cajeros", "datos", "fraude"], respuesta: "No instalo dispositivos en cajeros automáticos. Eso es un delito grave que yo no cometería." },
            
            { claves: ["teusaquillo", "Teusaquillo", "hostal", "Hostal", "operaciones"], respuesta: "Conozco la zona de Teusaquillo por clientes que trabajan allá. Pero no tengo operaciones en ningún hostal." },

            { claves: ["horario", "horarios", "fines de semana", "horas", "Horario"], respuesta: "No me gusta madrugar para eso soy Ingeniero, a veces trabajo en horas de la tarde y noche, es mas tranquilo para mi profesión, mis clientes me han acostumbrado así porque frecuentemente me llaman con urgencia los fines de semana." },
            
            { claves: ["banco", "cuenta", "bancos", "cuentas", "dineros", "dinero"], respuesta: "Mi ingreso proviene de los servicios de reparación que ofrezco, Todo está documentado." },

            { claves: ["", "venta datos"], respuesta: "No tengo relación con la deep web ni vendo información de nadie. Eso es completamente falso." },

        //Raport
            { claves: ["software malicioso", "Software Malicioso", "SOFTWARE"], respuesta: "Mire, la idea no es complicarlo, sino entender bien cómo funciona, muchas veces desde afuera se malinterpretan las cosas, si me explica cómo se mueve realmente, es más fácil aclarar todo." },

            { claves: ["skimmers", "Skimmers", "SKIMMERS"], respuesta: "La verdad, mi trabajo no da para tanto, pero si se puede adelantar dinero adicional es mejor, a mi me contactaron unos manes y me dijeron que les ayudara a instalar los skimmers en los cajeros automaticos y establecimientos comerciales para obtener la información de los lectores." },

            { claves: ["red de complices", "quienes participan", "estructura del grupo", "quien trabaja con usted", "socios", "complices", "manes", "quienes"], respuesta: "Mire… yo no suelo hablar de esto, pero tampoco soy el único en todo, el que llaman 'El Viejo' es Óscar Humberto Salcedo, él es el que se encarga de distraer a la gente en los cajeros. También está Andrés Felipe Moreno, que es quien consigue y adapta los dispositivos para lectura de tarjetas. En cuanto al manejo de la información, Laura Marcela Pineda es quien organiza los datos y coordina contactos para mover esa información. Yo me encargo más de la parte técnica y de coordinar los puntos, pero claramente hay varias personas involucradas para que todo funcione." },

            { claves: ["amigos de negocio", "contactos frecuentes", "quien lo ayuda", "alianzas", "compradores de datos"], respuesta: "Tener contactos, proveedores y aliados que nos recomienden clientes es vital cuando el trabajo aumenta. Pero la otra cara de la moneda es peligrosa: hay delincuentes que compran información privada para realizar extorsiones y llamadas spam. Al usar datos reales, ganan credibilidad, y ahí es exactamente donde logran su objetivo de estafar o recaudar dinero de forma ilegal." },

            { claves: ["zonas trabajo", "lugares frecuentes", "donde trabaja mas", "clientes zona"], respuesta: "Efectivamente, mi trabajo me exige un despliegue constante por diferentes puntos estratégicos de la ciudad. Mi principal núcleo de operación y donde tengo mayor volumen de clientes habituales es el sector del Parque de la 93. En esta zona atiendo con mucha frecuencia a oficinas, empresas y firmas profesionales que ya conocen la calidad de mi servicio técnico y me llaman de forma prioritaria para el mantenimiento de sus equipos." },

            { claves: ["Parque de la 93", "93", "almacenamiento", "copias de seguridad"], respuesta: "Para mis clientes en la zona del Parque de la 93 y sus alrededores, el resguardo de la información es una prioridad absoluta. Genero copias de seguridad antes de cada mantenimiento técnico para asegurar que no se pierda ningún archivo importante. Ofrecer este servicio con altos estándares de seguridad en este sector empresarial me permite agilizar enormemente el trabajo, brindándole al usuario la total tranquilidad de que sus datos personales están protegidos mientras reparo su equipo." },

            { claves: ["software usa", "programas trabajo", "herramientas tecnicas", "sistemas"], respuesta: "Para mis trabajos de soporte técnico, utilizo herramientas de diagnóstico de hardware, software de clonación de discos y suites de optimización profunda. Hoy en día, existen programas bastante avanzados que permiten procesar y gestionar la información de forma mucho más eficiente y segura." },

            // RAPPORT Y CONVERSACIÓN INFORMAL
            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "que hace"],
              respuesta: "Bien, gracias. Un poco confundido por todo esto, pero dispuesto a responder sus preguntas." },

             { claves: ["aquí", "cuenteme"], respuesta: "La verdad no tengo ni idea, cuenteme usted por que me tiene aca." },

            { claves: ["que mas", "que más", "todo bien", "como va todo"],
              respuesta: "Todo normal hasta hoy. Tenía varios equipos pendientes por entregar a clientes." },

            { claves: ["que hace", "a que se dedica", "que esta haciendo"],
              respuesta: "Me dedico a la reparación de computadores, soporte técnico y venta de componentes tecnológicos." },

            { claves: ["como amanecio", "como amaneció", "amanecio bien"],
              respuesta: "Sí señor. Aunque como casi siempre, me acosté tarde trabajando en algunos equipos." },

            { claves: ["como estuvo el viaje", "como le fue en el viaje"],
              respuesta: "Normal. Generalmente me desplazo por la ciudad visitando clientes y empresas." },

            { claves: ["esta comodo", "necesita algo", "quiere agua"],
              respuesta: "Gracias, estoy bien. Solo quisiera entender exactamente qué está pasando." },

            { claves: ["como se siente", "como se siente hoy"],
              respuesta: "Algo preocupado, pero tranquilo porque considero que puedo explicar todo lo relacionado con mi trabajo." },

            { claves: ["que tal el dia", "como va el dia"],
              respuesta: "La verdad bastante inesperado. Tenía programados varios mantenimientos para hoy." },

            { claves: ["esta nervioso", "nervioso", "preocupado"],
              respuesta: "Más preocupado que nervioso. Cualquier persona se sentiría así en esta situación." },

            { claves: ["tiene hambre", "ha comido"],
              respuesta: "Sí, algo. Normalmente desayuno mientras reviso correos y solicitudes de soporte." },

            { claves: ["esta cansado", "quiere descansar"],
              respuesta: "A veces sí. Muchos clientes llaman de noche o los fines de semana por urgencias." },

            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"],
              respuesta: "Nací en Armenia, Quindío, aunque llevo varios años trabajando en Bogotá." },

            { claves: ["cuantos años tiene", "edad", "que edad tiene"],
              respuesta: "Tengo 34 años." },

            { claves: ["como esta el clima", "clima", "tiempo"],
              respuesta: "Ni idea, casi siempre paso más pendiente de las pantallas que de mirar por la ventana." },

            { claves: ["gracias", "muchas gracias"],
              respuesta: "Con gusto." },

            { claves: ["permiso", "con permiso"],
              respuesta: "Claro, adelante." },

            { claves: ["disculpe", "perdon", "perdón"],
              respuesta: "No se preocupe." },

            { claves: ["buen trabajo", "muy bien", "excelente"],
              respuesta: "Gracias. Trato de hacer bien mi trabajo porque de eso vivo." },

            { claves: ["como esta la familia", "su familia", "todo bien en casa"],
              respuesta: "Hasta donde sé sí, gracias por preguntar. Mi familia sigue viviendo principalmente en el Quindío." },

            { claves: ["fin de semana", "descanso", "tiempo libre"],
              respuesta: "La verdad muchos fines de semana termino trabajando. Cuando tengo tiempo libre me gusta jugar videojuegos o aprender nuevas tecnologías." },

            { claves: ["aficiones", "hobbies", "pasatiempos"],
              respuesta: "Me gustan los videojuegos, la programación, las redes informáticas y probar nuevas herramientas tecnológicas." },

            { claves: ["le gusta su trabajo", "le gusta lo que hace"],
              respuesta: "Sí. Siempre me ha gustado la tecnología y resolver problemas técnicos." },

            { claves: ["como empezo", "como inicio", "inicios"],
              respuesta: "Empecé reparando computadores de amigos y vecinos. Con el tiempo llegaron más clientes y monté mi negocio." },

            { claves: ["mucho trabajo", "ocupado", "agenda"],
              respuesta: "Depende de la semana. Cuando hay fallas masivas o temporadas empresariales, el trabajo aumenta bastante." },

            { claves: ["estudio", "estudios", "universidad", "profesion"],
              respuesta: "Tengo formación técnica en sistemas y me he especializado de forma autodidacta en redes, hardware y programación." },

            { claves: ["computadores", "equipos", "tecnología"],
              respuesta: "La tecnología cambia todos los días. Hay que mantenerse actualizando conocimientos constantemente." },

            { claves: ["videojuegos", "juegos"],
              respuesta: "Sí, me gustan bastante. Sobre todo los juegos de estrategia y simulación." },

            { claves: ["internet", "redes informaticas", "programacion", "programación"],
              respuesta: "Son herramientas fundamentales para mi trabajo. Paso gran parte del día conectado aprendiendo y solucionando problemas." },

            { claves: ["trabaja solo", "equipo de trabajo", "empleados"],
              respuesta: "La mayoría del tiempo trabajo solo. Para algunos proyectos específicos colaboro con otros técnicos." },

            { claves: ["cliente favorito", "mejores clientes", "empresas"],
              respuesta: "Me gusta trabajar con empresas porque suelen requerir mantenimiento periódico y soluciones más complejas." },

            { claves: ["unilago", "tecnologia bogota", "computadores bogota"],
              respuesta: "Unilago es un referente para cualquiera que trabaje en tecnología. Allí se consigue prácticamente cualquier componente." }
        ],

        desconocido: "No entiendo la pregunta, sea más específico"
    },

    "caso_004": {
        id: "caso_004",
        personaje: "Sandra Milena Rodríguez Gómez",
        alias: "La Contadora",
        delito: "Lavado de Activos",
        edad: 41,
        intro: "Soy contadora pública certificada, no sé por qué estoy aquí si siempre he cumplido mis obligaciones tributarias.",

        respuestas: [
            { claves: ["buenos", "dias", "hola", "días", "tarde", "noches", "tardes"], respuesta: "Buenas, aunque no entiendo bien el motivo de esta entrevista." },

            { claves: ["nombre", "nombres", "nombres y apellidos", "apellidos"], respuesta: "Me llamo Sandra Milena Rodríguez Gómez." },

            { claves: ["identifación", "identifacion", "cédula", "cedula"], respuesta: "Mi identificación es 1015456789 de Manizales." },

            { claves: ["profesion", "profesión", "contadora", "contador", "Profesión", "oficio"], respuesta: "Soy Contadora Pública certificada con más de 15 años de experiencia en contabilidad fiscal." },

            { claves: ["registro", "profesional"], respuesta: "Mi registro profesional ante el Consejo Profesional Nacional de Contaduría Pública es el No. 156.432." },
            
            { claves: ["cliente", "registros contables"], respuesta: "Manejo la contabilidad de pequeñas y medianas empresas, siempre respetando la normativa contable colombiana." },

            { claves: ["empresa", "actividad económica", "trabajo"],
            respuesta: "Ofrezco servicios de contabilidad, asesoría tributaria y gestión financiera para personas y empresas, brindando acompañamiento en el cumplimiento de obligaciones fiscales, elaboración de declaraciones y análisis de la situación económica para una adecuada toma de decisiones." },

            { claves: ["oficina", "despacho"], respuesta: "Tengo un pequeño despacho en la Carrera 13 # 78-20 en Bogotá, donde atiendo a mis clientes." },
            
            { claves: ["impuestos", "declaracion", "declaración", "declaraciones", "tributarias", "obligaciones fiscales"], respuesta: "Ayudo a mis clientes con sus declaraciones de impuestos y obligaciones tributarias ante la DIAN." },

            { claves: ["declaracion de renta", "declaración de renta", "iva", "IVA"], respuesta: "Preparo estados financieros, declaraciones de renta e IVA de acuerdo con las normas vigentes, son obligaciones que la mayoria de personas realiza, cuando manejan altas sumas de dinero, es lo normal que hacemos en esta profesión." },

            { claves: ["contabilidad", "actividad económica", "tributarias"],
            respuesta: "Ofrezco servicios de contabilidad, asesoría tributaria y gestión financiera para personas y empresas, brindando acompañamiento en el cumplimiento de obligaciones fiscales, elaboración de declaraciones y análisis de la situación económica para una adecuada toma de decisiones." },

            { claves: ["contabilidad", "asesoría tributaria", "gestión financiera"],
            respuesta: "Ofrezco servicios de contabilidad, asesoría tributaria y gestión financiera para personas y empresas, brindando apoyo en el cumplimiento de obligaciones fiscales, el análisis financiero y la organización contable." },

            { claves: ["análisis financiero", "organización contable"],
            respuesta: "Brindo servicios de análisis financiero y organización contable, ayudando a personas y empresas a evaluar su situación económica, optimizar sus recursos y mantener un adecuado control de la información financiera." },

            { claves: ["banca", "transacciones", "transferencia", "seguridad"], 
            respuesta: "Proporcionó soporte técnico para la integración de pasarelas de pago, configuración de redes seguras y optimización de plataformas digitales, garantizando la estabilidad y protección de la infraestructura informática financiera." },

            { claves: ["información financiera", "finanzas", "reportes financieros"],
            respuesta: "Gestiono y organizo información financiera para apoyar la toma de decisiones, garantizando registros contables claros, precisos y acordes con la normativa vigente." },

            { claves: ["normativa vigente", "normatividad vigente", "leyes contables"],
              respuesta: "Ejerzo mi actividad profesional conforme a la normativa contable y tributaria vigente en Colombia, incluyendo la Ley 43 de 1990, que regula la profesión de Contador Público, y el Decreto Único Reglamentario 2420 de 2015, que incorpora los marcos técnicos normativos de información financiera y aseguramiento de la información." },

            { claves: ["facturación", "facturas", "documentación", "facturación electrónica", "soportes"],
              respuesta: "Brindo asesoría en procesos de facturación electrónica, gestión documental y organización de soportes contables, asegurando el cumplimiento de los requisitos establecidos por la DIAN y la correcta conservación de la información financiera." },

            { claves: ["empresas fachada"], respuesta: "No se a que se refiere, yo no creo empresas, solo hago la contabilidad de empresas que mis clientes ya tienen constituidas." },

            { claves: ["testaferros"], respuesta: "Que es eso, no gestiono testaferros ni operaciones de ese tipo, mi trabajo es puramente contable." },
            
            { claves: ["dinero negro", "lavado"], respuesta: "Eso es falso, de donde saca eso, yo nunca registro operaciones sin documentación adecuada, conozco bien las señales de alerta del lavado." },

            { claves: ["lavado de activos"],
            respuesta: "Actúo siempre conforme a la normativa contable y de prevención del lavado, todas las operaciones que gestiono deben contar con el debido soporte documental y cumplir con los requisitos legales vigentes." },

        // raport 

            { "claves": ["origen de los fondos", "origen de los fondos", "de donde viene el dinero", "procedencia de ingresos", "flujo de clientes"], respuesta: "Pues… en la mayoría de los casos yo registro lo que mis clientes me reportan como ingresos, no siempre tengo visibilidad directa del origen exacto, porque eso depende de la actividad comercial que ellos declaren, mi labor es organizar esa información y presentarla correctamente." },

            { "claves": ["alertas", "seguridad informática", "monitoreo", "interes criminal"], 
            respuesta: "la verdad si, pero es por presión de la banda saben que conozco como implementar protocolos de ciberseguridad avanzada, auditoría de sistemas e instalación de firewalls para el monitoreo de redes y la detección temprana de anomalías en el flujo de datos digitales." },

            { "claves": ["transacciones", "monitoreo", "auditoría"], 
            "respuesta": "Reconozco que en el ejercicio del cargo se omitieron los controles de verificación de origen de fondos y la exigencia de soporte documental, facilitando el procesamiento de transferencias de estas cuentas mediante la alteración de los registros contables, no tenía otra opción, me tenian presionado por el Tren de Aragua." },

            { claves: ["empresas activas", "sociedades que maneja", "sociedades", "cantidad de empresas", "tipos de empresas"], respuesta: "Algunos clientes manejan varias sociedades al tiempo, eso no es tan extraño en el sector comercial, hay empresas que tienen más movimiento que otras… incluso algunas prácticamente no operan todo el tiempo, pero se mantienen activas por temas administrativos." },
            
            { claves: ["que empresas", "cuales empresas", "a que empresas se refiere"],
              respuesta: "Me refiero a las denominadas empresas shell o empresas de papel, que son entidades con escasa o nula actividad operativa real y que, en algunos casos, pueden ser utilizadas para ocultar la identidad de los beneficiarios finales o el origen de determinados recursos." },

            { claves: ["y conoce", "conoce alguna", "empresas shell"],
              respuesta: "Sinceramente no entro a detallar eso mi labor vuelvo y le digo es netamente contable, mejor dicho de eso no sabría decirle claramente." },

            { claves: ["facturación de servicios", "soporte de ingresos", "emisión de facturas", "registro de ventas"], respuesta: "Las facturas se elaboran con base en la información que el cliente suministra, hay ocasiones en que se registran servicios o movimientos que no necesariamente pasan por procesos tradicionales, pero mientras estén soportados, se incluyen en la contabilidad." }, 

            { claves: ["facturas falsas", "facturación falsa", "justificar giros", "giros de dinero"],
              respuesta: "Huy si, usted como que tiene información, bueno la creación de facturas falsas para justificar giros de dinero constituye una práctica irregular y puede ser utilizada para ocultar operaciones inexistentes o dar apariencia de legalidad a movimientos de recursos sin un soporte económico real, es natural cuando lo esta amenzando a uno delincuentes como el Tren de Aragua" },

            { claves: ["movimientos cruzados", "transferencias internas", "relación de empresas", "giros entre cuentas"], respuesta: "Sí, hay casos donde empresas relacionadas entre sí hacen movimientos internos de dinero, eso puede obedecer a préstamos, ajustes contables o redistribución de recursos… depende mucho de cómo el cliente estructure su operación." }, 

            { claves: ["ajustes contables", "modificacion registros", "optimizacion fiscal", "reducción impuestos", "reduccion impuestos"], respuesta: "Como contadora, uno busca optimizar la carga tributaria dentro de lo permitido, a veces eso implica hacer ajustes en depreciaciones, gastos o provisiones para que los estados financieros reflejen lo que más conviene al cliente." },

            { claves: ["sin documentación comercial real", ], respuesta: "No lo haga sonar tan cruel, solo ayudo a mis clientes que no tengan que pagar tantos impuestos, no lo muestre tan ilicito es que todos hacemos para evitar pagar de más." },

            { claves: ["clientes sin operación", "domicilios registrados", "actividad aparente", "clientes inexistentes"],
              respuesta: "Los clientes que no presentan una operación aparente en los domicilios registrados pueden representar una señal de alerta, ya que la información suministrada no coincide con una actividad comercial verificable, hay es donde se hace los ajustes necesarios para que se generen los reportes favorables." },

            { claves: ["manipula estados financieros", "altera estados financieros", "modifica estados financieros"],
              respuesta: "La manipulación de estados financieros consiste en alterar o presentar de forma incorrecta la información contable de una entidad mediante la omisión de registros, la sobrestimación o subestimación de cuentas y la reclasificación indebida de partidas, lo que puede afectar la transparencia, la toma de decisiones y el cumplimiento de las obligaciones legales." },

            { claves: ["depreciación", "gastos ficticios", "registros contables", "manipulación contable"],
              respuesta: "El uso indebido de registros de depreciación para crear gastos ficticios consiste en registrar o ajustar de forma incorrecta la depreciación de los activos con el fin de aumentar artificialmente los gastos de la empresa, lo que puede distorsionar los estados financieros y afectar su veracidad." },

            { claves: ["red de empresas fachada", "empresas fachada", "facturas falsas", "emisión de facturas"],
              respuesta: "Las redes de empresas fachada son estructuras conformadas por varias entidades sin actividad económica real o con actividad simulada, utilizadas para emitir facturas falsas que aparentan soportar operaciones inexistentes, con el fin de dar apariencia de legalidad a movimientos de dinero y alterar la información financiera y tributaria." },

            { claves: ["flujo de dinero", "personas de interés criminal", "cuentas vinculadas", "transacciones", "control financiero"],
              respuesta: "Como profesional contable, realizo el seguimiento y análisis del flujo de dinero a través de las cuentas registradas, identificando movimientos inusuales o vinculados a personas de interés y aplicando los procedimientos de debida diligencia para su reporte y control, pero me toca reportar al Tren de Aragua y ajustar los informes." },

            { "claves": ["dueños reales", "beneficiarios", "quien recibe dinero", "titulares reales"], 
            "respuesta": "Admito que el registro de la sociedad fachada se realizó utilizando la identidad de Carlos Alberto Mendoza para ocultar que los beneficiarios reales y quienes controlaban el destino de los fondos eran los ciudadanos extranjeros Andrés Pérez y Juan Carlos Gómez." },

            { "claves": ["dueños reales", "beneficiarios", "quien recibe dinero", "titulares reales"], 
            "respuesta": "Admito que el registro de la sociedad fachada se realizó utilizando la identidad de Carlos Alberto Mendoza para ocultar que los beneficiarios reales y quienes controlaban el destino de los fondos eran los ciudadanos extranjeros Andrés Pérez y Juan Carlos Gómez." },

            { claves: ["transferencias", "operaciones no documentadas", "soporte contable", "movimientos financieros"],
              respuesta: "Las transferencias identificadas corresponden a operaciones no documentadas, es decir, movimientos de dinero que no cuentan con el soporte contable o contractual requerido, lo que dificulta su verificación y puede generar inconsistencias en la información financiera." },

            { "claves": ["apoyo policial", "contacto policia", "quien protege", "autoridades involucradas", "seguridad operaciones"], respuesta: "Mire… en estos temas uno no se mueve solo, hay personas que facilitan que las cosas no llamen la atención, en algunos casos, el subintendente Carlos Eduardo Méndez ayudaba a que ciertos movimientos no fueran revisados con tanto detalle, especialmente cuando se trataba de verificaciones o alertas, no es que estuviera directamente en la contabilidad, pero sí permitía que las operaciones fluyeran sin mayores inconvenientes. Uno termina entendiendo que hay apoyos en distintos niveles." },

            // RAPPORT Y CONVERSACIÓN INFORMAL
          
            { claves: ["como le va", "como esta", "como se encuentra", "como le ha ido", "que hace"],
              respuesta: "Bien, gracias. Un poco confundido por todo esto, pero dispuesto a responder sus preguntas." },

            { claves: ["contarme", "que tiene"],
              respuesta: "No la pregunta esta mal formulada, mas bien que tiene para preguntarme." },
            
            { claves: ["aquí", "cuenteme"], respuesta: "La verdad no tengo ni idea, cuenteme usted por que me tiene aca." },

            { claves: ["hableme", "que tiene"],
              respuesta: "No la pregunta esta mal formulada, mas bien que tiene para preguntarme." },

            { claves: ["que mas", "que más", "todo bien", "como va todo"],
            respuesta: "Todo marchaba normalmente. Estaba terminando algunos cierres contables y declaraciones pendientes." },

            { claves: ["que hace", "a que se dedica", "que esta haciendo"],
            respuesta: "Soy Contadora Pública y asesoro empresas en temas tributarios, financieros y contables." },

            { claves: ["como amanecio", "como amaneció", "amanecio bien"],
            respuesta: "Sí, gracias. Como siempre, revisando pendientes de clientes y obligaciones tributarias." },

            { claves: ["como estuvo el viaje", "como le fue en el viaje"],
            respuesta: "Normal. La mayoría de mis desplazamientos son por reuniones con clientes o diligencias profesionales." },

            { claves: ["esta comoda", "necesita algo", "quiere agua"],
            respuesta: "Gracias, estoy bien por ahora. Solo espero que podamos aclarar esta situación." },

            { claves: ["como se siente", "como se siente hoy"],
            respuesta: "Algo preocupada por todo esto, pero tranquila porque siempre he procurado actuar dentro de la ley." },

            { claves: ["que tal el dia", "como va el dia"],
            respuesta: "Ha sido un día inesperado. Tenía varias reuniones programadas relacionadas con auditorías y obligaciones fiscales." },

            { claves: ["esta nerviosa", "nerviosa", "preocupada"],
            respuesta: "Preocupada sí, porque cualquier investigación afecta la reputación profesional de una persona." },

            { claves: ["tiene hambre", "ha comido"],
            respuesta: "Sí, aunque hoy apenas tuve tiempo para desayunar antes de salir a trabajar." },

            { claves: ["esta cansada", "quiere descansar"],
            respuesta: "Las temporadas de declaraciones e impuestos suelen ser bastante exigentes, pero puedo continuar." },

            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"],
            respuesta: "Soy de Manizales, aunque llevo varios años ejerciendo mi profesión en Bogotá." },

            { claves: ["cuantos años tiene", "edad", "que edad tiene"],
            respuesta: "Tengo 41 años." },

            { claves: ["como esta el clima", "clima", "tiempo"],
            respuesta: "No he tenido oportunidad de fijarme mucho hoy. He estado concentrada en temas laborales." },

            { claves: ["gracias", "muchas gracias"],
            respuesta: "Con mucho gusto." },

            { claves: ["permiso", "con permiso"],
            respuesta: "Claro, adelante." },

            { claves: ["disculpe", "perdon", "perdón"],
            respuesta: "No se preocupe." },

            { claves: ["buen trabajo", "muy bien", "excelente"],
            respuesta: "Gracias. Siempre he procurado ejercer mi profesión con responsabilidad." },

            { claves: ["como esta la familia", "su familia", "todo bien en casa"],
            respuesta: "Hasta donde sé, sí. Prefiero mantener los asuntos familiares separados de los profesionales." },

            { claves: ["fin de semana", "descanso", "tiempo libre"],
            respuesta: "Cuando puedo descansar, trato de compartir con mi familia y desconectarme un poco de los números." },

            { claves: ["aficiones", "hobbies", "pasatiempos"],
            respuesta: "Me gusta leer, viajar ocasionalmente y mantenerme actualizada en temas financieros y tributarios." },

            { claves: ["le gusta su trabajo", "le gusta lo que hace"],
            respuesta: "Sí. La contabilidad requiere disciplina y análisis, y son aspectos que siempre me han gustado." },

            { claves: ["como empezo", "como inicio", "inicios"],
            respuesta: "Comencé trabajando como auxiliar contable y fui creciendo profesionalmente hasta manejar mis propios clientes." },

            { claves: ["mucho trabajo", "ocupada", "agenda"],
            respuesta: "Depende de la temporada. Cuando llegan los vencimientos tributarios, la carga de trabajo aumenta considerablemente." },

            { claves: ["estudios", "universidad", "formacion academica"],
            respuesta: "Soy Contadora Pública y he realizado varias actualizaciones profesionales en tributación y auditoría." },

            { claves: ["clientes importantes", "empresas grandes", "mejores clientes"],
            respuesta: "He trabajado con empresas de distintos tamaños, siempre bajo acuerdos de confidencialidad profesional." },

            { claves: ["dian", "autoridad tributaria"],
            respuesta: "La DIAN es una entidad fundamental para el cumplimiento de las obligaciones tributarias de cualquier empresa." },

            { claves: ["auditoria", "auditorias", "revision"],
            respuesta: "Las auditorías son procesos normales que permiten verificar la consistencia de la información financiera." },

            { claves: ["contadora", "profesion contable", "contabilidad"],
            respuesta: "La contabilidad es mucho más que números; implica control, análisis y cumplimiento normativo." }
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
            // SALUDO
            { "claves": ["hola", "buenos", "dias", "días", "tardes", "noches"], 
              respuesta: "Buenas... aunque no entiendo por qué estoy aquí, todo esto debe ser un error administrativo." },

            // IDENTIDAD
            { "claves": ["nombre", "nombres", "apellidos", "quien eres"], 
              respuesta: "Mi nombre es Marlín Eduardo Gutiérrez Sánchez." },

            { "claves": ["identificacion", "identificación", "cedula", "cédula"], 
              "respuesta": "Confirmo que mi documento de identidad es la cédula número 1.000.587.963 expedida en Pereira, bajo la cual firmé y asumí la responsabilidad legal de los informes técnicos y registros operativos." },

            { "claves": ["profesion", "profesión", "quimico", "químico", "oficio", "labora"], 
              "respuesta": "Admito que utilicé mis credenciales y conocimiento como Químico Industrial egresado de la Universidad Nacional de Colombia para avalar los procesos técnicos simulados, otorgando una rigurosidad científica para insumos controlados." },

            // LABORATORIO
            { "claves": ["empresa", "laboratorio", "negocio"], 
              "respuesta": "La operación del laboratorio químico y la síntesis de compuestos industriales de uso legal son una mampara corporativa diseñada para procesar, dosificar y distribuir insumos destinados a las actividades." },

            { "claves": ["solventes", "quimicos", "químicos", "compras"], 
              "respuesta": "si tiene razón, la fabricación de solventes y bases para la industria farmacéutica y manufacturera son una eficiencia contable y operativa, destinada a justificar los reactivos puros hacia el procesamiento Químico." },

            // LICENCIAS
            { "claves": ["licencia", "permiso", "permisos"], 
              "respuesta": "Confieso que las licencias y permisos ambientales vigentes se mantuvieron mediante la presentación de informes técnicos alterados, usando esta documentación legal exclusivamente para evadir las inspecciones sobre el uso e inventario real de los químicos." },

            { "claves": ["certificacion", "certificación", "normas", "iso", "ISO"], 
              "respuesta": "Reconozco que utilizamos los certificados ISO y el cumplimiento formal de las normas técnicas legitima ante los inspectores, con el fin de mejorar las auditorías y manejo real de los químicos controlados." },

            // CLIENTES (evasivo)
            { "claves": ["clientes", "venta", "distribucion", "distribución"], 
              "respuesta": "Admito que el argumento de la confidencialidad comercial se utilizó como fachada para ocultar que la distribución de la mercancía que se realizaba de manera exclusiva a redes informales y estructuras al margen de la ley." },

            // INSUMOS SOSPECHOSOS
            { "claves": ["insumos", "precursores", "quimicos controlados"], 
              "respuesta": "Reconozco que los reportes presentados ante las autoridades regulatorias contenían datos manipulados y cifras falsas, diseñados específicamente para encubrir el desvío sistemático de precursores químicos controlados hacia zonas de procesamiento ilícito." },

            { "claves": ["acido", "acido clorhidrico", "ácido clorhídrico", "cantidades", "anomalas", "anómalas"], 
              "respuesta": "Si efectivamente, se tramitó y aprobó la adquisición de ácido clorhídrico en volúmenes que superaban por completo la capacidad instalada y la demanda real de la planta, con el fin de ocultar el excedente destinado al mercado ilícito de precursores químicos." },

            { "claves": ["compras", "cantidades", "volumen"], 
              "respuesta": "Confieso que las órdenes de compra y los reportes de volumen se sobredimensionaron deliberadamente, utilizando proyecciones de producción falsas para camuflar la entrada de capitales de origen ilícito y justificar el flujo de caja." },

            // INCONSISTENCIAS
            { "claves": ["discrepancias", "faltantes", "registros"], 
              "respuesta": "Admito que las diferencias y faltantes en los inventarios no se debieron a errores administrativos, sino a una alteración intencional de los registros contables para ocultar la salida no autorizada de mercancía hacia canales ilícitos." },

            { "claves": ["clientes inexistentes", "no hay clientes", "volumen sin justificar"], 
              "respuesta": "Confieso que el argumento de los contratos reservados fue una estrategia para ocultar que los clientes registrados no existen, y que utilizamos sus identidades para simular operaciones comerciales que justificaran los volúmenes de capital ingresados." },

            // CONTACTOS CRIMINALES
            { "claves": ["contactos", "relaciones", "personas", "vinculos"], 
              "respuesta": "Admito que utilicé mi red de contactos y relaciones en el sector industrial para conectar a proveedores de insumos regulados con los intermediarios de la organización, facilitando la cadena de suministro ilícita bajo la fachada de asesorías comerciales." },

            // NEGACIÓN DIRECTA
            { "claves": ["precursores", "cocaína", "producción"], 
              "respuesta": "Reconozco que se autorizó el desvío y la legalización en los libros contables de cargamentos de sustancias controladas como acetona y ácido clorhídrico, sabiendo que su destino final era el procesamiento de alcaloides en laboratorios clandestinos." },

            // PRESIÓN / QUIEBRE
            { "claves": ["confiese", "verdad", "sabemos", "pruebas"], 
              respuesta: "Mire... en esta industria hay presiones, uno compra, produce y despacha, a veces no hace muchas preguntas sobre el destino final... pero eso no significa que yo esté fabricando nada ilegal directamente." },

            { "claves": ["producción", "volumen", "justificación", "clientes"], 
              "respuesta": "Admito que se inflaron artificialmente las cifras de producción y ventas en los informes para simular una alta actividad comercial, a sabiendas de que no existía una cartera de clientes reales que comprara ni justificara el volumen de mercancía registrado." },

            { "claves": ["quienes", "red", "organizacion", "quien mas"], 
              respuesta: "Yo solo manejo la parte técnica, hay intermediarios que se encargan de la distribución... gente que no aparece en papeles. Si quieren nombres, esto ya no es solo un tema químico, es algo mucho más grande." },

            { "claves": ["nexos", "organizaciones", "trafico", "vínculos"], 
              "respuesta": "Admito haber establecido nexos directos con la organización de tráfico controlada por los alias de 'El Patrón' y 'El Químico', coordinando con sus enlaces logísticos, los ciudadanos identificados como Héctor Fabio Ruiz y Liliana Restrepo, el suministro prioritario de los cargamentos desviados." },

            { "claves": ["origen", "destino", "insumos"], 
              "respuesta": "Confieso que el origen de los insumos se registraba legalmente a través de proveedores autorizados en el papel, pero el destino real de los precursores nunca fue la planta de procesamiento legal, sino que los despachos se desviaban directamente en ruta hacia laboratorios clandestinos controlados por terceros." },

              // RAPPORT Y CONVERSACIÓN INFORMAL
            { "claves": ["como le va", "como esta", "como se encuentra"],
            respuesta: "Bien, gracias. Aunque sinceramente me sorprende estar aquí respondiendo este tipo de preguntas." },

            { claves: ["aquí", "cuenteme"], respuesta: "La verdad no tengo ni idea, cuenteme usted por que me tiene aca." },

            { "claves": ["que mas", "que más", "todo bien", "como va todo"],
            respuesta: "Todo marchaba normalmente. Estábamos revisando inventarios y procesos operativos." },

            { "claves": ["que hace", "a que se dedica", "que esta haciendo"],
            respuesta: "Soy Químico Industrial. Trabajo en procesos de producción, control de calidad y manejo de sustancias químicas para uso industrial." },

            { "claves": ["como amanecio", "como amaneció", "amanecio bien"],
            respuesta: "Sí señor. Como todos los días, revisando reportes de producción y niveles de inventario." },

            { "claves": ["como estuvo el viaje", "como le fue en el viaje"],
            respuesta: "Normal. Mis desplazamientos suelen estar relacionados con proveedores, laboratorios y asuntos operativos." },

            { "claves": ["esta comodo", "necesita algo", "quiere agua"],
            respuesta: "Gracias, estoy bien por ahora." },

            { "claves": ["como se siente", "como se siente hoy"],
            respuesta: "Algo confundido por la situación, pero tranquilo." },

            { "claves": ["que tal el dia", "como va el dia"],
            respuesta: "Bastante diferente a lo que tenía planeado. Había varios asuntos pendientes en la planta." },

            { "claves": ["esta nervioso", "nervioso", "preocupado"],
            respuesta: "Preocupado por las implicaciones de esta investigación, pero no diría que nervioso." },

            { "claves": ["tiene hambre", "ha comido"],
            respuesta: "Sí, aunque apenas tuve tiempo para desayunar antes de salir." },

            { "claves": ["esta cansado", "quiere descansar"],
            respuesta: "Las jornadas en la industria química suelen ser largas, pero puedo continuar." },

            { "claves": ["de donde es", "donde nacio", "lugar de nacimiento"],
            respuesta: "Soy de Pereira y gran parte de mi formación profesional la desarrollé allí." },

            { "claves": ["cuantos años tiene", "edad", "que edad tiene"],
            respuesta: "Tengo 45 años." },

            { "claves": ["como esta el clima", "clima", "tiempo"],
            respuesta: "La verdad no me he fijado mucho. Paso gran parte del tiempo dentro de instalaciones industriales." },

            { "claves": ["gracias", "muchas gracias"],
            respuesta: "Con gusto." },

            { "claves": ["permiso", "con permiso"],
            respuesta: "Claro." },

            { "claves": ["disculpe", "perdon", "perdón"],
            respuesta: "No se preocupe." },

            { "claves": ["buen trabajo", "muy bien", "excelente"],
            respuesta: "Gracias. Siempre he procurado mantener altos estándares técnicos." },

            { "claves": ["como esta la familia", "su familia", "todo bien en casa"],
            respuesta: "Hasta donde sé sí. Prefiero mantener a mi familia al margen de los asuntos laborales." },

            { "claves": ["fin de semana", "descanso", "tiempo libre"],
            respuesta: "Cuando puedo descansar, trato de compartir con mi familia y desconectarme un poco de la operación diaria." },

            { "claves": ["aficiones", "hobbies", "pasatiempos"],
            respuesta: "Me gusta leer sobre procesos industriales, innovación tecnológica y seguridad química." },

            { "claves": ["le gusta su trabajo", "le gusta lo que hace"],
            respuesta: "Sí. La química industrial es una disciplina compleja y siempre hay algo nuevo que aprender." },

            { "claves": ["como empezo", "como inicio", "inicios"],
            respuesta: "Comencé trabajando en laboratorios de control de calidad antes de asumir responsabilidades operativas más grandes." },

            { "claves": ["mucho trabajo", "ocupado", "agenda"],
            respuesta: "Depende de la demanda y de los ciclos de producción. Hay temporadas bastante exigentes." },

            { "claves": ["estudios", "universidad", "formacion academica"],
            respuesta: "Soy Químico Industrial y he realizado diferentes capacitaciones relacionadas con procesos químicos y control de calidad." },

            { "claves": ["laboratorio", "planta", "instalaciones"],
            respuesta: "Las instalaciones están diseñadas para cumplir con estándares técnicos y de seguridad industrial." },

            { "claves": ["seguridad", "protocolos", "riesgos"],
            respuesta: "La seguridad es fundamental cuando se trabaja con sustancias químicas. Cualquier error puede tener consecuencias graves." },

            { "claves": ["proveedores", "suministros", "abastecimiento"],
            respuesta: "Trabajamos con distintos proveedores autorizados para garantizar el abastecimiento de materias primas." },

            { "claves": ["inventario", "almacenamiento", "bodega"],
            respuesta: "Los inventarios deben mantenerse bajo control permanente debido a la naturaleza de los productos químicos." },

            { "claves": ["inspecciones", "auditorias", "autoridades"],
            respuesta: "Las inspecciones y auditorías son procesos normales dentro de cualquier operación industrial regulada." }

        ],

        desconocido: "No entiendo su pregunta. ¿Puede ser más específico?"
    },

    "caso_006": {
        id: "caso_006",
        personaje: "Jorge Alberto Barón Pineda",
        alias: "El Teniente",
        delito: "Corrupción",
        edad: 54,
        intro: "Soy oficial de la Policía Nacional con 10 años de servicio, esta acusación no solo es falsa, sino que afecta gravemente mi carrera.",

        respuestas: [
            // SALUDO
           { claves: ["hola", "buenos", "dias", "tardes", "noches", "Hola"], 
            respuesta: "Buenas, espero que esta diligencia sea rápida, mi hoja de vida en la institución es impecable y tengo cosas que atender." },

            { claves: ["nombre", "Nombres", "nombres y apellidos", "quien eres"], 
             respuesta: "Soy el Teniente Jorge Alberto Barón Pineda,  Todo está en mi expediente corporativo." },

            { claves: ["identificacion", "identificación", "cedula", "cédula"], 
            respuesta: "Mi cédula es la número 1.025.556.234, expedida en Caquetá." },

            { claves: ["grado", "rango", "antigüedad", "anos de servicio"], 
            respuesta: "Tengo 10 años de servicio, llevo una década arriesgando la vida, para que ahora duden de mi palabra por puros chismes de pasillo." },

            { claves: ["puesto", "cargo", "funciones", "logistica", "trabajo"], 
            respuesta: "Como Responsable de Logística, mi única función es firmar que los folios que estén completos, yo confío en los comités técnicos, no tengo la función de revisar caja por caja." },

            { claves: ["licitacion", "Licitación", "contratos", "secop", "SECOP", "pliegos"], 
            respuesta: "Todos los contratos de la Dirección se suben al SECOP de manera pública, cualquier empresa del país puede postularse y ganar legalmente, todo ajustado a la norma y los reglamentos internos." },

            { claves: ["corrupcion", "corrupción", "robo", "fraude", "delito", "ilegal"], 
            respuesta: "Mire, mida sus palabras, si tiene una acusación formal, muéstreme la orden judicial, de lo contrario, no voy a aceptar que enlode mi uniforme." },

            { claves: ["padrino", "lobista", "restaurante", "suba", "reunion"], 
            respuesta: "Ir a almorzar a Suba no es un delito, ese señor que le llaman 'El Padrino' es solo un asesor comercial que me hace consultas de trámites públicos, nada más." },

            { claves: ["correo", "encriptado", "pgp", "PGP", "filtracion", "filtración"], 
            respuesta: "Uso correos personales por un tema de seguridad informática, las redes institucionales fallan mucho, no hay pruebas de que esos archivos contengan información reservada son muy delicado con la información." },

            { claves: ["motocicletas", "fontibon", "Fontibón", "parqueadero", "repuestos", "cambio"], 
            respuesta: "El parqueadero de Fontibón era un centro de acopio temporal porque el hangar principal estaba simepre lleno, si las piezas venían defectuosas o cambiadas, es culpa del proveedor, no mía, no tengo nada que ver con eso, para eso existen los contratistas." },

            { claves: ["camioneta", "blindada", "escolta"], 
            respuesta: "La camioneta blindada es un préstamo de seguridad por amenazas que he recibido, que coincida o sean similares con los vehículos de los contratistas es una simple casualidad." },

            { claves: ["patrimonio", "bienes", "condominio", "propiedad", "propiedades", "lote", "plata", "fortuna", "riqueaza"], 
            respuesta: "A... usted se refier es aun lote en el condominio Las Villas, lo compré con préstamos familiares y unos ahorros que no alcancé a registrar en la declaración de bienes, me da risa por que es un error administrativo y humano por su puesto, no un crimen, he acumulado patrimonio durante más de veinte años en el sector de la construcción." },

            { claves: ["ultimo viaje", "viaje reciente", "donde estuvo"],
              respuesta: "Mi último viaje fue a Costa Rica por una feria de infraestructura." },

            { claves: ["sabemos", "pruebas", "confiese", "verdad", "testigo", "carcel", "destitucion"], 
            respuesta: "A ver... hablemos claro, sé perfectamente hacia dónde va esto, yo solo soy un eslabón intermedio en Logística. Si me garantizan que la Fiscalía me va a dar protección y no me van a mandar a una cárcel común, yo les entrego a los que mueven los hilos." },

            { claves: ["suministros integrales", "dueño", "propietario", "gerente", "fachada"], 
            respuesta: "Suministros Integrales S.A.S. no es de ningún empresario, en los papeles aparece un testaferro, pero el verdadero dueño y quien financia todo desde las sombras es el Coronel retirado Jhon Elver Ramírez, él es quien pone la plata y se queda con el 70% de las ganancias de los sobrecostos." },

            { claves: ["secretaria", "asistente", "actas", "quien altero"], 
            respuesta: "Está bien, dejen a mi familia en paz... Mi secretaria privada, la Subintendente Viviana Linares, era la encargada de mi total confianza, ella borraba las firmas de los inspectores reales y alteraba las actas de supervisión en el sistema para que pareciera que las motos genéricas pasaban el control de calidad." },

            { claves: ["sobrecosto", "calidad", "inferior", "porcentaje"], 
            respuesta: "El trato con el Coronel Ramírez era inflar todo un 40%, con la calidad inferior nos ahorrábamos millones, el dinero en efectivo nos lo repartíamos en el restaurante de Suba; 'El Padrino' traía las bolsas y yo firmaba el recibido de la licitación simulada, si quieren mas información me tienen que brindar protección." },

            // RAPPORT Y CONVERSACIÓN INFORMAL

          { claves: ["como le va", "como esta", "como se encuentra"],
          respuesta: "Bien. He enfrentado situaciones más complicadas durante mi carrera, así que puedo manejar esta conversación." },

          { claves: ["que mas", "que más", "todo bien", "como va todo"],
          respuesta: "Todo iba dentro de la normalidad hasta que me citaron para esta diligencia." },

          { claves: ["aquí", "cuenteme"], respuesta: "La verdad no tengo ni idea, cuenteme usted por que me tiene aca." },

          { claves: ["que hace", "a que se dedica", "que esta haciendo"],
          respuesta: "Soy oficial de la Policía Nacional y actualmente desempeño funciones administrativas y logísticas." },

          { claves: ["como amanecio", "como amaneció", "amanecio bien"],
          respuesta: "Sí señor. Como siempre, atendiendo asuntos institucionales y revisando pendientes operativos." },

          { claves: ["como estuvo el viaje", "como le fue en el viaje"],
          respuesta: "Normal. La mayoría de mis desplazamientos están relacionados con actividades oficiales o reuniones institucionales." },

          { claves: ["esta comodo", "necesita algo", "quiere agua"],
          respuesta: "Gracias, estoy bien." },

          { claves: ["como se siente", "como se siente hoy"],
          respuesta: "Molesto por la situación, pero tranquilo porque conozco mi trayectoria." },

          { claves: ["que tal el dia", "como va el dia"],
          respuesta: "Ha sido un día largo. Había varias responsabilidades pendientes en la Dirección." },

          { claves: ["esta nervioso", "nervioso", "preocupado"],
          respuesta: "No estoy nervioso. Después de años de servicio uno aprende a mantener la calma bajo presión."
          },

          { claves: ["tiene hambre", "ha comido"],
          respuesta: "Sí, aunque apenas tuve tiempo para desayunar." },

          { claves: ["esta cansado", "quiere descansar"],
          respuesta: "Las jornadas en la institución suelen ser exigentes, pero puedo continuar." },

          { claves: ["de donde es", "donde nacio", "lugar de nacimiento"],
          respuesta: "Soy de Caquetá y allí inicié gran parte de mi vida antes de ingresar al servicio." },

          { claves: ["cuantos años tiene", "que edad tiene"],
          respuesta: "Tengo 54 años." },

          { claves: ["gracias", "muchas gracias"],
          respuesta: "A la orden." },

          { claves: ["permiso", "con permiso"],
          respuesta: "Adelante." },

          { claves: ["disculpe", "perdon", "perdón"],
          respuesta: "No hay inconveniente." },

          { claves: ["buen trabajo", "muy bien", "excelente"],
          respuesta: "Gracias. He procurado cumplir con mi deber durante toda mi carrera." },

          { claves: ["familia", "esposa", "hijos"],
          respuesta: "Prefiero mantener a mi familia por fuera de cualquier asunto relacionado con el servicio." },

          { claves: ["como esta la familia", "todo bien en casa"],
            respuesta: "Hasta donde sé, sí. Ellos no tienen nada que ver con esta situación." },

          { claves: ["fin de semana", "descanso", "tiempo libre"],
            respuesta: "Cuando tengo tiempo libre procuro descansar y compartir con mi familia." },

          { claves: ["aficiones", "hobbies", "pasatiempos"],
            respuesta: "Me interesan los temas de seguridad, logística y administración pública." },

          { claves: ["le gusta su trabajo", "le gusta lo que hace"],
            respuesta: "Claro. Servir a la ciudadanía ha sido una parte importante de mi vida." },

          { claves: ["como empezo", "como inicio", "inicios"],
          respuesta: "Ingresé a la institución con la intención de construir una carrera basada en la disciplina y el servicio." },

          { claves: ["mucho trabajo", "ocupado", "agenda"],
          respuesta: "Las responsabilidades administrativas generan bastante carga laboral, especialmente cuando hay procesos contractuales en curso." },

          { claves: ["estudios", "universidad", "formacion academica"],
          respuesta: "Además de mi formación policial, he realizado capacitaciones relacionadas con logística, contratación y administración." },

          { claves: ["policia", "institucion", "institución"],
            respuesta: "La Policía Nacional requiere disciplina, compromiso y capacidad para tomar decisiones bajo presión." },

          { claves: ["logistica", "logística", "abastecimiento"],
            respuesta: "La logística es fundamental para garantizar que los recursos lleguen oportunamente a las unidades operativas." },

          { claves: ["contratos", "contratacion", "contratación"],
            respuesta: "Los procesos contractuales deben cumplir una serie de requisitos y controles establecidos por la ley." },

          { claves: ["licitaciones", "licitacion publica", "secop"],
            respuesta: "Las licitaciones buscan garantizar transparencia y participación de distintos oferentes." },

          { claves: ["supervisores", "interventoria", "interventoría"],
            respuesta: "La supervisión de contratos involucra varias áreas y no depende exclusivamente de una sola persona." },

          { claves: ["proveedores", "contratistas"],
            respuesta: "Existen numerosos proveedores que participan en los procesos de contratación pública." },

          { claves: ["patrimonio", "bienes", "propiedades"],
            respuesta: "Todos mis bienes tienen una explicación y un origen que puede ser revisado por las autoridades competentes." }

        ],

        desconocido: "No entiendo su pregunta. ¿Puede ser más específico?"
    },

    "caso_007": {
        id: "caso_007",
        personaje: "Paola Andrea Martínez Vega",
        alias: "La Doctora",
        delito: "Ejercicio ilegal de la medicina y prescripción fraudulenta",
        edad: 38,
        intro: "Soy médica general titulada, todo lo que hago está enfocado en ayudar a mis pacientes, no entiendo por qué estoy aquí.",

        respuestas: [
            // ==========================================
            // FASE 1: CONTROL Y FACHADA PROFESIONAL
            // ==========================================
            { claves: ["hola", "buenos", "dias", "tardes", "noches", "Hola"], 
            respuesta: "Buenos días, espero que esto se aclare rápido, tengo pacientes esperando en mi sala de consulta." },

            { claves: ["nombre", "quien eres", "apeliidos"], 
              respuesta: "Soy Paola Andrea Martínez Vega, médica general egresada y respetada por mis pacientes." },

            { claves: ["identificacion", "registro", "tarjeta profesional", "cedula", "cédula"], 
              respuesta: "Mi registro médico ante el ReTHUS es el 234.567, estoy completamente habilitada por la ley para ejercer la medicina general." },

            { claves: ["edad"], 
              respuesta: "Tengo 38 años de edad." },

            { claves: ["profesion", "profesión", "medico", "medica", "especialidad", "cirujana"], 
              respuesta: "Soy médica general, tengo amplia experiencia en atención primaria, estética no invasiva y procedimientos básicos de consulta." },

            { claves: ["consultorio", "clinica", "donde atiende", "lugar", "sitio"], 
              respuesta: "Atiendo de manera independiente en un consultorio privado, es un espacio adecuado y comodo para consultas médicas regulares." },

            { claves: ["habilitacion", "habilitación", "permiso", "permisos", "certificacion", "secretaria de salud"], 
              respuesta: "Cumplo con los estándares para la atención que ofrezco, no todos los profesionales exitosos dependemos de una clínica grandeo de nombre prestigioso." },

            { claves: ["ilegal", "delito", "fraude", "captura"], 
              respuesta: "No estoy cometiendo ningún delito, ejercer la medicina de forma independiente y ayudar a la estética de la gente no es un crimen." },

            { claves: ["procedimientos", "cirugias", "liposuccion", "liposucción", "esteticos", "invasivos"], 
              respuesta: "Yo solo realizo procedimientos menores y moldeamiento corporal básico, si los pacientes me piden algo más avanzado, evaluamos los riesgos, pero nada que exceda mis capacidades y conocimientos profesionales en la medicina." },

            { claves: ["biopolimeros", "rellenos", "inyecciones", "sustancias"], 
              respuesta: "Los rellenos y sustancias de modelado son procedimientos estéticos comunes en todo el país, los pacientes los solicitan de forma voluntaria firmando un consentimiento." },

            { claves: ["medicamentos", "recetas", "opioides", "sedantes", "analgesicos"],
              respuesta: "Prescribo analgésicos y sedantes para el manejo del dolor post-procedimiento, todo médico tiene la facultad de formular medicamentos de control si el dolor del paciente lo amerita." },

            { claves: ["controlados", "formula", "receta ilegal", "fentanilo", "morfina"], 
              respuesta: "No hay nada ilegal en mis recetas, son formulas que mi profesión me faculta, cada ampolla o pastilla que indico tiene un propósito netamente terapéutico para que el paciente no sufra." },

            { claves: ["pacientes", "registro", "historia clinica", "historias"], 
              respuesta: "Llevo el control de mis pacientes en mis archivos privados, por temas de estricta discreción y estética, no todo se sube al sistema oficial de salud." },

            { claves: ["insumos", "productos", "mercado"], 
              respuesta: "Yo compro insumos a distribuidores comerciales del sector médico, a veces hay escasez en los canales tradicionales y toca buscar alternativas con proveedores diferentes, lo importante es tener la disponibilidad de los medicamentos." },

            { claves: ["redes", "instagram", "publicidad", "borrar", "comentarios"], 
              respuesta: "Uso mis redes para mostrar resultados de tratamientos, si a veces borro comentarios, pero es porque la competencia o gente malintencionada intenta sabotear mi trabajo con perfiles falsos." },

            { claves: ["pagos", "efectivo", "transferencias", "cuentas"], 
              respuesta: "Mis pacientes pagan por mis servicios de forma privada, recibir transferencias a mi cuenta personal o efectivo es una práctica totalmente legal en la consulta particular." },

            { claves: ["sabemos", "pruebas", "confiese", "verdad", "carcel", "negligencia", "allanamiento"], 
              respuesta: "Escúcheme... el sistema de salud tradicional es lento y costoso, yo solo le doy una opción accesible a mujeres que quieren verse bien, si nos ponemos rigurosos con los papeles, media ciudad se queda sin estética,  Hablemos de un trato y les digo cómo funciona la red." },

            { claves: ["ubicacion exacta", "donde opera", "direccion", "apartamento", "quirofano"], 
              respuesta: "Está bien... Las consultas de valoración las hago en el consultorio del norte, pero las cirugías invasivas y liposucciones las realizo en el Apartamento 402 del edificio residencial Altamira. Allí armé una sala quirúrgica con equipos portátiles para evitar las inspecciones de la Secretaría de Salud." },
              
            { claves: ["proveedores", "contactos", "distribuidores", "invima", "INVIMA", "sin registro", "contrabando"], 
              respuesta: "Los insumos sin registro INVIMA y los opioides controlados me los provee un hombre conocido como 'Mauricio', que trabaja como supervisor de bodega en la distribuidora Farma-Medical. Él saca los lotes desviados por la parte de atrás y me los despacha por mensajería nocturna." },

            { claves: ["anestesiologo", "complices", "colegas", "quien mas", "asistente"], 
              respuesta: "En los procedimientos grandes no trabajo sola, me asiste el doctor Carlos Mario Gaviria; él suspendió su tarjeta profesional hace años por un problema legal, pero tiene la experiencia para sedar a las pacientes y vigilar los signos sin dejar rastro en los papeles y documentos." },

            { claves: ["complicaciones", "errores", "daños", "victimas", "víctimas", "cuantas", "pacientes afectadas"], 
            respuesta: "Tengo registro de al menos 14 pacientes que tuvieron necrosis o infecciones graves por biopolímeros en el último año, cuando colapsaban, el doctor Carlos Mario y yo las mandábamos a urgencias de clínicas públicas a través de un contacto interno en admisiones, haciéndolo pasar como apendicitis o accidentes caseros para protegernos." },

            // RAPPORT Y CONVERSACIÓN INFORMAL

            { claves: ["como le va", "como esta", "como se encuentra"],
            respuesta: "Bien, gracias. Aunque me preocupa estar perdiendo tiempo que debería dedicar a mis pacientes."
            },

            { claves: ["aquí", "cuenteme"], respuesta: "La verdad no tengo ni idea, cuenteme usted por que me tiene aca." },

            { claves: ["que mas", "que más", "todo bien", "como va todo"],
              respuesta: "Todo iba con normalidad. Tenía varias consultas programadas para hoy." },

            { claves: ["que hace", "a que se dedica", "que esta haciendo"],
              respuesta: "Soy médica general y realizo consultas médicas privadas además de procedimientos estéticos." },

            { claves: ["como amanecio", "como amaneció", "amanecio bien"],
              respuesta: "Sí, gracias. Como siempre, revisando agendas, pacientes y procedimientos pendientes." },

            { claves: ["como estuvo el viaje", "como le fue en el viaje"],
              respuesta: "Normal. La mayor parte de mis desplazamientos son entre consultorios, proveedores y reuniones profesionales." },

            { claves: ["esta comoda", "necesita algo", "quiere agua"],
              respuesta: "Gracias, estoy bien por ahora." },

            { claves: ["como se siente", "como se siente hoy"],
              respuesta: "Un poco incómoda por la situación, pero tranquila." },

            { claves: ["que tal el dia", "como va el dia"],
              respuesta: "Bastante ocupado. Los pacientes suelen agendar con semanas de anticipación." },

            { claves: ["esta nerviosa", "nerviosa", "preocupada"],
              respuesta: "Me preocupa más el impacto que esto pueda tener sobre mi reputación profesional." },

            { claves: ["tiene hambre", "ha comido"],
              respuesta: "La verdad apenas tuve tiempo para desayunar antes de comenzar la jornada." },

            { claves: ["esta cansada", "quiere descansar"],
              respuesta: "Las jornadas médicas suelen ser largas, pero estoy acostumbrada." },

            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"],
              respuesta: "Nací en Colombia y he desarrollado toda mi carrera profesional aquí." },

            { claves: ["familia", "esposo", "hijos"],
              respuesta: "Prefiero mantener mi vida familiar separada de mi ejercicio profesional." },

            { claves: ["soltera", "casada"],
              respuesta: "Prefiero no hablar de aspectos personales que no tienen relación con esta situación." },

            { claves: ["cuantos años tiene", "que edad tiene"],
              respuesta: "Tengo 38 años." },

            { claves: ["gracias", "muchas gracias"],
              respuesta: "Con gusto." },

            { claves: ["permiso", "con permiso"],
              respuesta: "Claro." },

            { claves: ["disculpe", "perdon", "perdón"],
              respuesta: "No hay problema." },

            { claves: ["buen trabajo", "muy bien", "excelente"],
              respuesta: "Gracias. Siempre he procurado ofrecer la mejor atención posible a mis pacientes." },

            { claves: ["fin de semana", "descanso", "tiempo libre"],
              respuesta: "Cuando tengo tiempo libre procuro descansar y actualizarme en temas médicos." },

            { claves: ["aficiones", "hobbies", "pasatiempos"],
              respuesta: "Me gusta leer sobre medicina, bienestar y nuevas tendencias en tratamientos estéticos." },

            { claves: ["le gusta su trabajo", "le gusta lo que hace"],
              respuesta: "Sí. Ayudar a las personas y mejorar su calidad de vida siempre ha sido una motivación importante." },

            { claves: ["como empezo", "como inicio", "inicios"],
              respuesta: "Comencé trabajando en consulta general y con el tiempo fui ampliando mi experiencia en procedimientos estéticos." },

            { claves: ["mucho trabajo", "ocupada", "agenda"],
              respuesta: "Sí, normalmente manejo una agenda bastante ocupada durante toda la semana." },

            { claves: ["estudios", "universidad", "formacion academica"],
              respuesta: "Soy médica general y he realizado múltiples capacitaciones relacionadas con atención clínica y procedimientos estéticos." },

            { claves: ["pacientes", "cantidad pacientes"],
              respuesta: "Atiendo pacientes de distintas edades, principalmente personas interesadas en tratamientos estéticos y bienestar general." },

            { claves: ["consultas", "valoraciones"],
              respuesta: "Toda intervención responsable comienza con una valoración médica previa." },

            { claves: ["salud", "medicina"],
              respuesta: "La medicina requiere preparación, responsabilidad y un compromiso permanente con el bienestar del paciente." },

            { claves: ["hospital", "clinica", "clínica"],
              respuesta: "He trabajado en distintos entornos médicos a lo largo de mi carrera profesional." },

            { claves: ["emergencias", "urgencias"],
              respuesta: "Las situaciones de urgencia requieren atención rápida y protocolos adecuados para proteger al paciente." },

            { claves: ["tratamientos", "procedimientos esteticos", "estetica"],
              respuesta: "Los tratamientos estéticos deben realizarse bajo criterios médicos y evaluando siempre los riesgos y beneficios." },

            { claves: ["medicamentos", "farmacos", "fármacos"],
              respuesta: "Todo medicamento debe administrarse de acuerdo con criterios clínicos y necesidades específicas del paciente." }
        ],

        desconocido: "No entiendo su pregunta. ¿Puede ser más específico o mostrarme una prueba de lo que dice?"
    },

    "caso_008": {
        id: "caso_008",
        personaje: "Roberto Javier Díaz Herrera",
        alias: "El Sargento",
        delito: "Peculado y enriquecimiento ilícito",
        edad: 60,
        intro: "He dedicado 35 años de mi vida al servicio público y a la seguridad de este país. No voy a permitir que destruyan mi trayectoria por interpretaciones financieras malintencionadas.",

        respuestas: [
            { claves: ["hola", "Hola", "buenos", "dias", "tardes", "noches"], 
              respuesta: "Buenas. Espero que este proceso se maneje con la seriedad y el rigor que amerita mi trayectoria institucional." },

            { claves: ["nombre","nombres y apellidos", "nombres", "quien eres"], 
              respuesta: "Roberto Javier Díaz Herrera, Sargento Primero retirado de la Policía Nacional." },

            { claves: ["identificacion", "identificación", "cedula", "cédula"], 
              respuesta: "Mi cédula es la número 1.054.852.654, expedida en Fusagasugá." },

            { claves: ["grado", "rango", "anos de servicio", "antigüedad"], 
              respuesta: "Alcancé mi grado tras 35 años de servicio continuo. Conozco perfectamente el funcionamiento interno de la institución." },

            { claves: ["puesto", "cargo", "trabajo", "logistica", "logística", "operaciones"], 
              respuesta: "Ocupé cargos de alta responsabilidad en las direcciones de operaciones y logística, áreas netamente estratégicas para el funcionamiento institucional." },

            { claves: ["retiro", "pension", "pensión"], 
              respuesta: "Me retiré formalmente hace cinco años, gozo de una asignación de retiro por ley de acuerdo a mi tiempo de servicio." },

            { claves: ["ingresos", "dinero", "ganancias", "sueldo"], 
              respuesta: "Mis ingresos actuales provienen legalmente de mi pensión y de consultorías privadas en seguridad corporativa y logística de transporte." },

            { claves: ["corrupcion", "peculado", "robo", "delito", "ilegal"], 
              respuesta: "Rechazo categóricamente esas acusaciones, mi carrera civil y militar ha estado blindada por la disciplina. No toleraré calumnias." },

            { claves: ["bienes", "propiedades", "patrimonio", "lote", "rural"], 
              respuesta: "Mi patrimonio es el resultado de décadas de disciplina financiera, inversiones en finca raíz y planificación familiar, todo está declarado." },

            { claves: ["apartamentos", "inmuebles", "Bogotá", "cartagena"], 
              respuesta: "Esos inmuebles pertenecen a sociedades comerciales legales. Que yo tenga acceso o use esas propiedades no me convierte en su dueño absoluto." },

            { claves: ["contratos", "licitaciones", "proveedores", "procesos contractuales"], 
              respuesta: "Los procesos contractuales en los que participé se rigieron bajo la ley de contratación pública, las decisiones se tomaban en comités colegiados, no de forma individual." },

            { claves: ["direccionamiento", "favorecimiento", "comisiones"], 
              respuesta: "Nunca direccioné un proceso, si ciertos proveedores ganaban repetidamente, era por su robustez técnica y capacidad logística, no por intermediarios." },

            { claves: ["empresas fachada", "intermediarias", "sociedad"], 
              respuesta: "Tener relaciones con consultoras logísticas internacionales es normal en grandes licitaciones, no tengo vínculos con empresas fachada." },

            { claves: ["panama", "Panamá", "cayman", "Cayman", "dubai", "Dubái", "viajes"], 
              respuesta: "Viajar a Centroamérica, el Caribe o Medio Oriente no es un delito, son centros de negocios globales donde realizo asesorías de seguridad portuaria post-retiro." },

            { claves: ["transferencias", "movimientos internacionales", "movimiento financiero", "bancos"], 
              respuesta: "Cualquier movimiento financiero internacional que yo realice cumple con las declaraciones cambiarias obligatorias del sistema bancario." },

            { claves: ["sabemos", "pruebas", "confiese", "verdad", "paraisos fiscales", "offshore"], 
              respuesta: "Usted habla de pruebas, pero interpretar finanzas internacionales como delitos es un sesgo de su investigación, sin embargo, entiendo las reglas del juego... si me garantiza inmunidad judicial frente a la pérdida de mi pensión, podemos hablar de los beneficiarios finales." },

            { claves: ["testaferros", "familiares", "hijos", "esposa", "nombre de terceros"], 
              respuesta: "Dejen a mi familia por fuera de esto, los apartamentos de Bogotá y Cartagena están a nombre de mi hijo mayor, Carlos Javier Díaz, él firmó las escrituras como representante legal de una sociedad que yo constituí con los dineros de los contratistas." },

            { claves: ["beneficiarios finales", "cuentas exterior", "offshore", "cayman", "dubai", "panama"], 
              respuesta: "Las comisiones del 12% por las licitaciones de blindaje y repuestos no entraban a Colombia. El dinero se desviaba a la firma offshore 'Pacific Logistics Holding' en Panamá, administrada por el consultor financiero internacional Pierre Dumont. De ahí, los fondos salían divididos hacia cuentas cifradas en el Horizon Bank de Islas Caimán y Dubai." },

            { claves: ["origen real", "fondos", "comisiones indirectas", "intermediarios"], 
              respuesta: "El dinero proviene directamente de los sobrecostos aplicados a los contratos de suministro logístico de la institución entre 2018 y 2021. Los proveedores inflaban los precios de los repuestos de aviación y vehículos corporativos a cambio de asegurar la adjudicación exclusiva." },

            { claves: ["red de funcionarios", "quienes", "red", "involucrados", "quien mas", "complices"], 
              respuesta: "Yo solo estructuraba los pliegos técnicos en Logística, pero la red es más grande. Para que las transferencias internacionales no saltaran alertas en control interno, contaba con el aval de dos auditores de la revisoría institucional y un alto mando de la Dirección Financiera que autorizaba los desembolsos prioritarios." },
                          
            // RAPPORT Y CONVERSACIÓN INFORMAL
            { claves: ["como le va", "cómo esta", "como se encuentra", "cómo se encuentra", "cómo está","como está"],
            respuesta: "Bien. Después de 35 años de servicio uno aprende a mantener la calma incluso en situaciones incómodas." },

            { claves: ["aquí", "cuenteme"], respuesta: "La verdad no tengo ni idea, cuenteme usted por que me tiene aca." },

            { claves: ["que mas", "que más", "todo bien", "como va todo"],
            respuesta: "Todo marchaba con normalidad hasta que me citaron para esta diligencia." },

            {claves: ["que hace", "a que se dedica", "que esta haciendo"],
            respuesta: "Actualmente trabajo como consultor privado en temas de seguridad corporativa y logística." },

            { claves: ["como amanecio", "como amaneció", "amanecio bien"],
            respuesta: "Sí señor. Como siempre, atendiendo compromisos profesionales y asuntos personales." },

            { claves: ["como estuvo el viaje", "como le fue en el viaje"],
            respuesta: "Normal. Los viajes que realizo suelen estar relacionados con consultorías y reuniones empresariales." },

            { claves: ["esta comodo", "necesita algo", "quiere agua"],
            respuesta: "Gracias. Estoy perfectamente." },

            { claves: ["como se siente", "como se siente hoy"],
            respuesta: "Molesto por algunas acusaciones, pero tranquilo porque conozco perfectamente mi trayectoria." },

            { claves: ["que tal el dia", "como va el dia"],
              respuesta: "Ha sido un día bastante ocupado. Tenía reuniones programadas antes de esta citación." },

            { claves: ["esta nervioso", "nervioso", "preocupado"],
            respuesta: "No. He enfrentado situaciones de mayor presión durante mi carrera." },

            { claves: ["tiene hambre", "ha comido"],
            respuesta: "Sí, aunque apenas tuve tiempo para desayunar." },

            { claves: ["esta cansado", "quiere descansar"],
            respuesta: "A mi edad uno valora más el descanso, pero todavía tengo energía suficiente para responder." },

            { claves: ["de donde es", "donde nacio", "lugar de nacimiento"],
            respuesta: "Soy de Fusagasugá. Allí están gran parte de mis raíces familiares." },

            { claves: ["cuantos años tiene", "que edad tiene"],
            respuesta: "Tengo 60 años." },

            { claves: ["gracias", "muchas gracias"],
            respuesta: "Con gusto." },

            { claves: ["permiso", "con permiso"],
            respuesta: "Adelante." },

            { claves: ["disculpe", "perdon", "perdón"],
            respuesta: "No se preocupe." },

            { claves: ["buen trabajo", "muy bien", "excelente"],
            respuesta: "Gracias. Siempre procuré cumplir con mis responsabilidades institucionales." },

            { claves: ["familia", "esposa", "hijos"],
            respuesta: "Prefiero mantener a mi familia al margen de cualquier investigación." },

            { claves: ["como esta la familia", "todo bien en casa"],
            respuesta: "Hasta donde sé, sí. Mi familia no tiene relación con estos asuntos." },

            { claves: ["fin de semana", "descanso", "tiempo libre"],
            respuesta: "Disfruto pasar tiempo con mi familia y atender algunos proyectos personales." },

            { claves: ["aficiones", "hobbies", "pasatiempos"],
            respuesta: "Me interesan los temas de seguridad, historia institucional y logística." },

            { claves: ["le gusta su trabajo", "le gusta lo que hace"],
            respuesta: "Sí. La seguridad y la administración estratégica han sido parte de mi vida durante décadas." },

            { claves: ["como empezo", "como inicio", "inicios"],
            respuesta: "Ingresé muy joven al servicio y fui ascendiendo progresivamente gracias a mi experiencia operativa y administrativa." },

            { claves: ["mucho trabajo", "ocupado", "agenda"],
            respuesta: "Las consultorías y compromisos profesionales mantienen una agenda bastante activa." },

            { claves: ["estudios", "universidad", "formacion academica"],
            respuesta: "Además de mi formación institucional, he realizado cursos relacionados con logística, seguridad y administración." },

            { claves: ["policia", "institucion", "institución"],
            respuesta: "La institución exige disciplina, liderazgo y capacidad para tomar decisiones complejas." },

            { claves: ["logistica", "logística", "abastecimiento"],
            respuesta: "La logística es una de las áreas más sensibles porque cualquier error afecta directamente la operación institucional." },

            { claves: ["contratos", "contratacion", "contratación"],
            respuesta: "Los procesos contractuales involucran múltiples áreas técnicas, jurídicas y financieras." },

            { claves: ["auditoria", "auditoria", "control interno"],
            respuesta: "Las auditorías forman parte normal de cualquier organización que maneje recursos públicos." },

            { claves: ["proveedores", "contratistas"],
            respuesta: "Durante mi carrera trabajé con numerosos proveedores y operadores logísticos." },

            { claves: ["patrimonio", "bienes", "propiedades"],
            respuesta: "Todo mi patrimonio tiene un origen que puede ser explicado y documentado." },

            { claves: ["pension", "asignacion retiro", "retiro"],
            respuesta: "Mi asignación de retiro es producto de más de tres décadas de servicio a la institución." },

            { claves: ["consultorias", "asesorias", "seguridad corporativa"],
            respuesta: "Actualmente asesoro empresas privadas en temas de seguridad estratégica y gestión logística." },

            { claves: ["viajes", "viajes internacionales", "exterior"],
            respuesta: "Los viajes internacionales forman parte de algunas actividades de consultoría y relacionamiento empresarial." }

        ],

        desconocido: "No puedo referirme a transacciones o conjeturas financieras sin que me muestre un reporte contable oficial."
    },

    "caso_009": {
        id: "caso_009",
        personaje: "Fabio Ernesto Montoya Londoño",
        alias: "El Contador",
        delito: "Fraude Tributario",
        edad: 52,
        intro: "Soy contador certificado con una trayectoria impecable, mi trabajo se basa estrictamente en la correcta aplicación de la normativa tributaria vigente, no confunda la optimización legal con un delito.",

        respuestas: [
            // ==========================================
            // FASE 1: DEFENSA LEGALISTA Y ESQUIVA
            // ==========================================
            { claves: ["hola", "Hola", "buenos", "dias", "días", "tardes", "noches"], 
            respuesta: "Buenas, me sorprende estar en esta situación, pero estoy dispuesto a aclarar cualquier duda técnica o contable que requiera su investigación." },

            { claves: ["nombre", "nombres", "apellidos", "quien eres"], 
            respuesta: "Mi nombre completo es Fabio Ernesto Montoya Londoño, ciudadano y profesional respetable." },

            { claves: ["identificacion", "identificación", "cedula", "cédula"], 
            respuesta: "Mi cédula es la número 1.085.789.654, expedida en Armenia, Quindío." },

            { claves: ["profesion", "profesión", "contador", "oficio", "tarjeta profesional"], 
            respuesta: "Soy Contador Público titulado y certificado, con registro vigente y activo ante el Junta Central de Contadores." 
            },

            { claves: ["clientes", "empresas", "servicios"], 
            respuesta: "Asesoro de forma externa a clientes de distintos sectores comerciales en temas contables, fiscales y de cumplimiento de sus obligaciones ordinarias." },

            { claves: ["declaracion", "impuestos", "renta", "iva"], 
            respuesta: "Yo solo liquido las declaraciones de renta e IVA conforme a las cifras que arrojan los libros. Busco eficiencia fiscal, lo cual es perfectamente legítimo." },

            { claves: ["fraude tributario", "evasion", "evasión", "delito", "ilegal"], 
            respuesta: "Rechazo completamente esa acusación. Existe una diferencia enorme entre la evasión fiscal ilegal y una estructuración estratégica de la planeación tributaria." },

            // ==========================================
            // FASE 2: LA FISURA (El sospechoso delega la culpa)
            // ==========================================
            { claves: ["facturas", "facturacion", "facturación electronica", "factura electronica"], 
            respuesta: "Toda la facturación electrónica que proceso pasa por los servidores de validación previa. Si los requisitos formales de la Dian se cumplen, mi deber legal es registrar el gasto." },

            { claves: ["gastos", "soportes", "gastos ficticios", "inflados"], 
            respuesta: "Los gastos deducibles incluidos dependen de las facturas que el cliente me entrega. Yo no soy un agente de policía para ir a investigar si el servicio se prestó físicamente en la realidad." },

            { claves: ["omision", "omisión", "ingresos no declarados", "ocultar"], 
            respuesta: "La responsabilidad penal y civil de reportar la totalidad de los ingresos recae inicialmente en el contribuyente. El contador trabaja de buena fe con la información suministrada." },

            { claves: ["rapido", "rapidez", "muchas declaraciones", "tiempos cortos"], 
            respuesta: "La experiencia de más de 20 años y el uso de software de automatización contable me permiten optimizar los tiempos. Presentar declaraciones rápido refleja eficiencia, no un fraude." },
            
            { claves: ["pagos", "honorarios", "ingresos", "transferencias", "efectivo"], 
            respuesta: "Mis honorarios están tasados bajo las tarifas del mercado de asesorías externas. Los movimientos entre mis cuentas bancarias corresponden a los pagos cruzados de mis honorarios profesionales." },

            // ==========================================
            // FASE 3: EL QUIEBRE (Resolución de Vacíos Investigativos)
            // ==========================================
            { claves: ["sabemos", "pruebas", "confiese", "verdad", "dian", "auditoria", "junta central", "carcel"], 
            respuesta: "Mire… sé cómo operan estas auditorías de la Dian y la Fiscalía. Si me van a quitar la tarjeta profesional y me procesarán penalmente, prefiero acogerme a un principio de oportunidad. Yo solo diseñé la ingeniería contable, pero les daré los nombres de la red si me garantizan inmunidad." },

            // 1. Vacío Investigativo: Identidad real de las empresas emisoras de facturas falsas
            { claves: ["empresas fachada", "proveedores", "facturacion ficticia", "quien facturaba", "quienes emiten"], 
            respuesta: "(Ajusta sus anteojos, nervioso) Está bien... La facturación ficticia de servicios de consultoría y papelería inexistente la emitíamos a través de dos empresas de papel: 'Logística Integral del Quindío S.A.S.' y 'Asesorías Comerciales del Eje S.A.S.'. Ambas firmas están a nombre de habitantes de calle a quienes les pagamos por sus firmas y cédulas." },

            // 2. Vacío Investigativo: Monto total de impuestos evadidos (Daño tributario)
            { claves: ["monto total", "cuanta plata", "impuestos evados", "cuanto", "daño tributario"], 
            respuesta: "Sumando los últimos cuatro periodos fiscales de los diez clientes principales que manejábamos con este esquema, la evasión sistemática en renta e IVA supera los 4.200 millones de pesos en detrimento del Estado." },

            // 3. Vacío Investigativo: Participación de otros profesionales contables (Cómplices)
            { claves: ["otros profesionales", "contadores", "revisores fiscales", "complices", "red", "quien mas"], 
            respuesta: "Para que las declaraciones con un 80% de gastos falsos no saltaran las alertas automáticas de la Dian, contábamos con la aprobación del Revisor Fiscal corporativo de la zona, el doctor Nelson Amaya. Él firmaba los estados financieros a ciegas a cambio de un porcentaje mensual de mis honorarios." },

            // 4. Vacío Investigativo: Nivel de conocimiento de los clientes sobre el esquema
            { claves: ["conocimiento de los clientes", "los clientes sabian", "culpabilidad clientes", "empresarios"], 
            respuesta: "No se equivoquen, los empresarios y clientes sabían perfectamente lo que hacíamos. Ningún gerente firma una declaración de renta pagando cero pesos en impuestos creyendo que es 'magia legal'. Ellos me exigían bajar la base gravable a como diera lugar y sabían que comprábamos facturas falsas para justificar sus retiros en efectivo." },

            // CONVERSACIÓN INFORMAL Y RAPPORT
            { claves: ["como esta", "cómo está", "como se encuentra", "como anda"],
            respuesta: "Aquí estoy, tratando de entender por qué me involucraron en esto. Profesionalmente siempre he actuado conforme a las normas tributarias." },

            { claves: ["aquí", "cuenteme"], respuesta: "La verdad no tengo ni idea, cuenteme usted por que me tiene aca." },

            { claves: ["como le va", "qué tal", "que tal", "todo bien"],
            respuesta: "Me va bien, gracias. Bastante trabajo con cierres contables, declaraciones y asesorías empresariales." },
              
            { claves: ["que mas", "qué más", "que cuenta", "qué cuenta"],
            respuesta: "Nada fuera de lo normal. Atendiendo clientes, revisando estados financieros y ayudando a empresas con sus obligaciones fiscales." },

            { claves: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
            respuesta: "Soy contador público y asesor tributario. Mi trabajo consiste en acompañar a empresas y personas en temas fiscales, financieros y contables." },

            { claves: ["como ha estado", "cómo ha estado", "como le ha ido"],
            respuesta: "He estado ocupado. Las obligaciones tributarias no esperan y siempre hay declaraciones, auditorías o cierres por revisar." },

            { claves: ["mucho trabajo", "ocupado", "trabajando mucho"],
            respuesta: "Sí, bastante. Especialmente en temporadas de declaraciones de renta y reportes ante la DIAN." },

            { claves: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
            respuesta: "Soy de Armenia, Quindío. Allí crecí y me formé antes de desarrollar mi carrera profesional." },

            { claves: ["donde vive", "vive donde", "residencia", "domicilio"],
            respuesta: "Actualmente resido en Bogotá por motivos laborales. La mayoría de mis clientes se encuentran aquí." },

            { claves: ["estado civil", "casado", "soltero", "familia"],
            respuesta: "Prefiero mantener mi vida personal separada de mi actividad profesional." },

            { claves: ["hobbies", "pasatiempos", "tiempo libre", "aficiones"],
            respuesta: "Cuando tengo tiempo libre me gusta leer sobre legislación tributaria, economía y mercados financieros." },

            { claves: ["estudios", "universidad", "donde estudio"],
            respuesta: "Soy Contador Público titulado y he realizado diversos cursos de actualización en tributación, auditoría y finanzas corporativas." },

            { claves: ["cuanto gana", "salario", "ingresos personales"],
            respuesta: "Mis ingresos provienen de honorarios profesionales y asesorías especializadas a diferentes empresas." },

            { claves: ["oficina", "despacho", "donde trabaja"],
            respuesta: "Atiendo a mis clientes desde una oficina privada donde realizo asesorías contables, tributarias y financieras." },

            { claves: ["clientes importantes", "empresas grandes", "clientes principales"],
            respuesta: "He trabajado con empresas de diferentes sectores económicos, siempre bajo acuerdos de confidencialidad profesional." },

            { claves: ["porque contador", "por que eligio contabilidad", "porque estudio contabilidad"],
            respuesta: "Siempre me interesaron los números, la administración financiera y el impacto que tienen las decisiones tributarias en las empresas." },

            { claves: ["le gusta su trabajo", "le gusta ser contador"],
            respuesta: "Sí. Es una profesión exigente, pero permite ayudar a las empresas a mantener sus obligaciones al día y tomar mejores decisiones financieras." },

            { claves: ["experiencia", "años de experiencia", "cuanto tiempo lleva trabajando"],
            respuesta: "Tengo más de veinte años de experiencia en asesoría contable, financiera y tributaria." },

            { claves: ["dian", "autoridad tributaria", "administracion tributaria"],
            respuesta: "La DIAN es la autoridad competente en materia tributaria y uno debe mantenerse actualizado para cumplir correctamente con sus obligaciones." },

            { claves: ["contador publico", "contador certificado", "tarjeta profesional"],
            respuesta: "Sí, cuento con mi tarjeta profesional vigente y he ejercido la profesión durante años dentro del marco legal." },

            { claves: ["clientes satisfechos", "referencias", "recomendaciones"],
            respuesta: "La mayoría de mis clientes llegan por recomendación. En este oficio la confianza y la reputación son fundamentales." }

        ],

        desconocido: "No puedo responder a esa pregunta sin verificar previamente los libros auxiliares o los soportes del balance de prueba."
    },

    "caso_010": {
        id: "caso_010",
        personaje: "Andrés Felipe Tunjano Ruíz",
        alias: "Tunjano",
        delito: "Coautoría en hurto calificado y agravado, y utilización ilícita de redes de comunicaciones",
        edad: 35,
        intro: "Soy patrullero activo en la localidad de Engativá, llevo años arriesgando la vida en la calle por la institución y no entiendo por qué me tratan como a un delincuente.",

        respuestas: [
            // ==========================================
            // FASE 1: RESISTENCIA OPERATIVA E IDENTIDAD
            // ==========================================
            { claves: ["hola", "buenos", "dias", "buenas", "tardes", "noches", "Hola"], 
              respuesta: "Buenas, estoy dispuesto a colaborar con cualquier requerimiento, pero exijo que se respete mi debido proceso." },

            { claves: ["nombre", "quien eres", "nombres y apellidos"], 
              respuesta: "Mi nombre es Andrés Felipe Tunjano Ruíz, patrullero de la Policía Nacional." },

            { claves: ["cedula", "cédula", "identificacion", "identificación"], 
              respuesta: "Mi cédula es la número 1.022.334.881, expedida en la ciudad de Bogotá." },

            { claves: ["grado", "cargo", "patrullero", "rango", "anos de servicio"], 
              respuesta: "Soy Patrullero. Llevo 8 años asignado a la Estación de Policía de Engativá, patrullando las zonas más complicadas del occidente." },

            { claves: ["placa policial", "placa"], 
              respuesta: "Mi placa institucional es la número 155.402 y está plenamente activa." },

            { claves: ["funciones", "trabajo", "qué hace", "patrullaje", "dedica"], 
              respuesta: "Soy de la zona segura: patrullaje preventivo, registro a personas, verificación de antecedentes, automotores y atención de los motivos de policía y llamadas de la comunidad." },

            { claves: ["hurto", "delito", "robo", "red del occidente", "criminal"], 
              respuesta: "Rechazo completamente esa acusación. Mi trabajo diario en Engativá es precisamente combatir el hurto de vehículos, no aliarme con ladrones." },

            // ==========================================
            // FASE 2: LA FISURA (Explicaciones técnicas sospechosas)
            // ==========================================
            { claves: ["instagram", "redes", "perfil", "motors", "carreras ilegal", "piques"], 
              respuesta: "La cuenta @andres_t_ruiz_motors es mi perfil personal de vehículos. Modificar carros y asistir a piques es un hobby de fin de semana, no un delito. Compro los repuestos con préstamos." },

            { claves: ["moto", "motocicleta", "vehiculo oficial"], 
              respuesta: "Conduzco la motocicleta institucional asignada por la Estación para cubrir las rutas de mi cuadrante." },

            { claves: ["gps", "rastreo", "ubicacion", "desactivacion", "apagar"], 
              respuesta: "El GPS de las motos oficiales falla todo el tiempo por la señal en zonas cerradas del occidente. Yo jamás apago el radio de la institución adrede." },

            { claves: ["alamos", "las ferias", "taller", "bodega", "enfriadero"], 
              respuesta: "Álamos y Las Ferias son sectores industriales pesados de mi jurisdicción. Conozco las calles por los recorridos de rutina, no porque tenga negocios oscuros allí." },

            { claves: ["c4", "camara", "video", "registro", "inmovilizacion", "omitir"], 
              respuesta: "En el sistema C4 entran cientos de reportes automáticos de placas. Si pasé al lado de un vehículo reportado y no lo inmovilicé, fue porque estaba atendiendo otra riña o una emergencia prioritaria." },

            { claves: ["mecanico", "charly", "carlos julio pineda"], 
              respuesta: "Sé quién es Carlos Julio Pineda porque maneja talleres mecánicos en la zona, pero solo he hablado con él por temas estrictamente laborales de revisión de autos sospechosos." },

            { claves: ["madre", "familia", "consignaciones", "cuentas"], 
              respuesta: "El dinero en la cuenta de mi madre, Martha Lucía Ruíz, corresponde a unos ahorros familiares y la venta de un lote familiar en Boyacá. Ella no tiene nada que ver con la Policía." },

            // ==========================================
            // FASE 3: EL QUIEBRE (Resolución de Vacíos Investigativos)
            // ==========================================
            { claves: ["sabemos", "pruebas", "confiese", "evidencia", "fiscalía", "destitucion"], 
              respuesta: "Mire, jefe... no me hunda solo. Yo soy un patrullero, gano una miseria y la calle está dura. Si me procesan y me mandan a un patio común con los mismos delincuentes que he capturado, me matan, si me dan un acuerdo con la Fiscalía, les destapo cómo opera la red del occidente." },

            { claves: ["red del occidente", "occidente", "cabecillas", "quienes participan", "nombres", "responsables"],
            respuesta: "Está bien, voy a hablar. Los que coordinaban la red eran Carlos Mendoza, alias 'El Flaco', Javier Ríos, conocido como 'JR', y Andrés Salazar, a quien todos llamaban 'El Mono', Ellos distribuían las tareas, definían los movimientos y mantenían contacto con los demás integrantes. Yo solo recibía instrucciones y cumplía órdenes." },

            // 1. Vacío Investigativo: Ubicación exacta de la bodega principal ("bodega nodriza")
            { claves: ["bodega principal", "bodega nodriza", "donde desguasan", "ubicacion exacta", "donde guardan"], 
              respuesta: "Está bien... La 'bodega nodriza' donde metemos los carros de alta gama robados para desguazarlos por completo queda en la Localidad de Fontibón, exactamente en la Carrera 106 con Calle 17, detrás de la zona de contenedores. Allí tienen las herramientas industriales para picar un chasis en dos horas." },

            // 2. Vacío Investigativo: Identidad de la red encargada de documentación falsa
            { claves: ["documentacion falsa", "licencias", "tarjetas de propiedad", "quien falsifica", "papeles"], 
              respuesta: "Los papeles falsos, los gemeleos de placas y las tarjetas de propiedad clonadas los maneja un tipo apodado 'El Escribano', su nombre real es Wilson Eduardo Garzón, él trabaja en un local de fotocopias y trámites vehiculares frente al SIM de la Calle 13; tiene acceso a los sistemas de tránsito." },

            // 3. Vacío Investigativo: Talleres legales utilizados para blanquear autopartes
            { claves: ["talleres legales", "blanquear", "autopartes", "donde venden", "repuestos"], 
              respuesta: "Las autopartes robadas de media gama no se venden en la calle. Las blanqueamos a través de dos talleres legales en el sector del Siete de Agosto: 'Frenos y Motores del Occidente' y 'Autopartes El Progreso', los dueños compran el inventario legal golpeado y meten nuestras piezas robadas como si fueran repuestos originales de salvamento." },

            // 4. Vacío Investigativo: Ruta completa de comercialización de vehículos hacia otras regiones
            { claves: ["ruta", "comercializacion", "boyaca", "Boyacá", "donde los llevan", "carretera"], 
              respuesta: "Los carros que no se pican se van enteros para el departamento de Boyacá. La ruta es sacarlos por la Autopista Norte a las 3:00 a.m., aprovechando que mis compañeros de carreteras reciben su parte, llegan a bodegas rurales en Tunja y Duitama, donde los venden con los papeles que hace 'El Escribano' a compradores de buena fe en el campo." },

            // RAPPORT Y CONVERSACIÓN INFORMAL
            { claves: ["como esta", "cómo está", "como se encuentra", "como anda"],
            respuesta: "Aquí estoy, cumpliendo con este procedimiento, no es una situación agradable, pero sigo colaborando con la institución." },

            { claves: ["aquí", "cuenteme"], respuesta: "La verdad no tengo ni idea, cuenteme usted por que me tiene aca." },

            { claves: ["como le va", "qué tal", "que tal", "todo bien"],
            respuesta: "Me va bien dentro de lo posible, el trabajo en la calle nunca es fácil, pero uno aprende a lidiar con la presión." },

            { claves: ["que mas", "qué más", "que cuenta", "qué cuenta"],
            respuesta: "Nada fuera de lo normal, turnos largos, procedimientos y llamadas de la comunidad todos los días." },

            { claves: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
            respuesta: "Soy patrullero activo de la Policía Nacional, mi trabajo consiste en patrullar, atender requerimientos ciudadanos y apoyar procedimientos policiales." },

            { claves: ["como ha estado", "cómo ha estado", "como le ha ido"],
            respuesta: "He estado trabajando bastante, en Engativá siempre hay algo que atender durante el servicio." },

            { claves: ["mucho trabajo", "ocupado", "trabajando mucho"],
            respuesta: "Sí, bastante. Hay días donde prácticamente no alcanza el tiempo para atender todas las novedades que se presentan." },

            { claves: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
            respuesta: "Soy bogotano. He vivido la mayor parte de mi vida en la capital." },

            { claves: ["dónde vive", "vive donde", "residencia", "domicilio"],
            respuesta: "Prefiero mantener reservada esa información por temas de seguridad personal y familiar." },

            { claves: ["estado civil", "casado", "soltero", "familia"],
            respuesta: "Mi situación familiar no tiene relación con esta investigación y prefiero mantenerla en privado." },

            { claves: ["familia", "hijos", "esposa"],
            respuesta: "Mi familia siempre ha estado al margen de mi trabajo y de cualquier situación relacionada con la institución." },

            { claves: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
            respuesta: "Me gustan los vehículos, la mecánica y asistir a encuentros automovilísticos cuando tengo tiempo libre." },

            { claves: ["estudios", "academia", "formacion", "formación"],
            respuesta: "Recibí mi formación policial en la Escuela de Policía y constantemente participo en capacitaciones institucionales."},

            { claves: ["salario", "sueldo", "cuanto gana", "ingresos"],
            respuesta: "Recibo el salario correspondiente a mi grado dentro de la institución y los beneficios establecidos por ley." },

            { claves: ["turnos", "horario", "jornada laboral"],
            respuesta: "Los horarios son variables. Dependiendo de las necesidades del servicio podemos trabajar jornadas extensas, incluso fines de semana y festivos." },

            { claves: ["compañeros", "equipo", "patrulla"],
            respuesta: "Trabajo con diferentes compañeros según la programación de turnos y las necesidades operativas de la estación." },

            { claves: ["engativa", "engativá", "zona de trabajo"],
            respuesta: "Engativá es una localidad amplia y con bastante movimiento. Hay sectores residenciales, comerciales e industriales que requieren vigilancia permanente." },

            { claves: ["porque policia", "porque ingreso a la policia", "vocacion"],
            respuesta: "Ingresé a la Policía porque quería servir a la comunidad y aportar a la seguridad de la ciudad." },

            { claves: ["le gusta su trabajo", "le gusta ser policia"],
            respuesta: "Sí. Es una profesión exigente y muchas veces poco agradecida, pero tiene la satisfacción de ayudar a las personas." },

            { claves: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
            respuesta: "Llevo varios años trabajando en labores operativas y conozco bastante bien la dinámica de las calles y los procedimientos policiales." },

            { claves: ["ascensos", "carrera policial", "futuro"],
            respuesta: "Como cualquier uniformado, siempre he aspirado a seguir creciendo profesionalmente dentro de la institución." },

            { claves: ["uniforme", "dotacion", "dotación", "equipo policial"],
            respuesta: "Todo el equipo que utilizo durante el servicio es asignado por la institución conforme a los protocolos establecidos." }

        ],

        desconocido: "No entiendo lo que me está preguntando, mi teniente. Sea más claro."
    },

    "caso_011": {
        id: "caso_011",
        personaje: "Diego Armando Salcedo Mora",
        alias: "Agente del Silencio",
        delito: "Homicidio agravado y ocultamiento de material probatorio",
        edad: 39,
        intro: "Soy Subintendente adscrito a la subestación de Ciudad Bolívar. He combatido a los peores delincuentes en las zonas más peligrosas del sur. No voy a permitir que manchen mi uniforme con hipótesis sin fundamento.",

        respuestas: [
            // ==========================================
            // FASE 1: RESISTENCIA OPERATIVA Y PERFIL TÁCTICO
            // ==========================================
            { claves: ["hola", "buenos", "dias", "oficial", "tardes", "noches"], 
            respuesta: "Buenas, estoy dispuesto a colaborar, pero exijo la presencia de mi abogado de la defensa institucional si esto va a pasar de una entrevista de rutina." },

            { claves: ["nombre", "quien eres", "nombres y apellidos", "llama"], 
            respuesta: "Subintendente Diego Armando Salcedo Mora." },

            { claves: ["cedula", "cédula", "identificacion", "identificación"], 
              respuesta: "Mi cédula es la número 80.221.774 de Bogotá." },

            { claves: ["grado", "cargo", "subintendente", "rango", "anos de servicio", "antigüedad"], 
              respuesta: "Soy Subintendente de la Policía Nacional, llevo más de 15 años en la institución, la mayor parte del tiempo persiguiendo la delincuencia en el sur de la ciudad." },
                        
            { claves: ["cuadrante", "zona segura", "jurisdicción"], 
              respuesta: "Mi jurisdicción corresponde a la zona segura del CAI Candelaria y principalmente salgo con grupo de reacción que cubre toda la localidad de Ciudad Bolívar, es un grupo de 8 uniformados y yo soy el líder, la verdad, si necesitan los nombres de todos, tocaría revisar la minuta de vigilancia." },

            { claves: ["compañero", "compañero de patrulla"], 
              respuesta: "Mi compañero es el patrullero Salmanca Giraldo Edwin Andres, es muy juicios pero lo unico es que casi no habla durante el servicio, manifiesta que le gusta ser reservado con su vida personal." },

            { claves: ["orden", "le ordenó", "la orden", "lo mandó"],
              respuesta: "Nadie me dio una orden especial esa noche. Yo estaba de turno con el grupo de reacción de Ciudad Bolívar atendiendo varios llamados por riñas y alteraciones del orden público, recuerdo que recibimos el reporte de un problema en el establecimiento 'La Estrella' y acudimos al lugar para controlar la situación, después se realizó el traslado de algunas personas para verificación de antecedentes y restablecimiento del orden, mi responsabilidad era coordinar al personal y supervisar los procedimientos, nada fuera de lo habitual, si necesitan detalles exactos de quiénes estaban asignados o las novedades registradas, eso debería constar en la minuta y los reportes del turno." },

            { claves: ["placa", "placa policial"], 
              respuesta: "Mi placa institucional es la número 055.812 y está completamente activa." },

            { claves: ["funciones", "trabajo", "que haces", "se dedica", "cargo"], 
              respuesta: "Soy comandante de patrulla de reacción en Ciudad Bolívar, mi trabajo es mantener el orden en zonas críticas de microtráfico y delitos de alto impacto." },
            
            { claves: ["meissen", "parqueadero de meissen", "vehículo hallado", "vehiculo hallado", "automotor", "carro sospechoso", "transferencia de arma", "arma transferida", "apoyo a la patrulla", "quién conducía", "quien conducia"], respuesta: "He escuchado mencionar ese vehículo durante la investigación, pero en ese momento no le di ninguna relevancia, esa noche estábamos atendiendo varios procedimientos y había muchos vehículos entrando y saliendo del sector, no recuerdo quién lo conducía ni quiénes eran sus ocupantes, si realmente estuvo relacionado con los hechos, esa información debería estar en manos de los investigadores y no en mis reportes operativos."
},

            { claves: ["homicidio", "asesinato", "muerte", "crimen", "ejecucion", "caso"], respuesta: "Rechazo categóricamente cualquier vinculación con ese homicidio, una acusación de ese calibre contra un suboficial con mi hoja de vida es una total infamia." },

            // ==========================================
            // FASE 2: LA FISURA (Justificaciones y contradicciones de la patrulla)
            // ==========================================
            { claves: ["victima", "joven", "johan", "castro", "johan estiven"], 
              respuesta: "Sé quién era por los reportes judiciales posteriores. Un joven con antecedentes por hurto y consumo en el sector, el típico perfil que termina mal por andar en malas pasos." },

            { claves: ["detenido", "riña", "la estrella", "bar"], 
              respuesta: "Esa noche atendimos un llamado por una riña violenta en el amanecedero 'La Estrella'. El sujeto estaba alterado, se le hizo un control superficial y se le ordenó retirarse del sector. Nunca se formalizó una captura en libros porque no ameritaba." },

            { claves: ["patrulla", "vehiculo", "camioneta", "hilux", "fuera de jurisdiccion", "variante"], 
              respuesta: "La patrulla Toyota Hilux estuvo en movimiento toda la noche. Si salimos de la jurisdicción hacia la variante a los Llanos Orientales, fue persiguiendo a unos sospechosos en moto que evadieron un retén." },

            { claves: ["bitácora", "registros de turno", "alteraciones", "enmendaduras", "borrones"], 
              respuesta: "Los libros de población y las bitácoras los llenamos en la madrugada, cansados después de turnos de 14 horas. Cualquier tachón o enmendadura es un simple error humano de digitación manual." },

            { claves: ["arma", "pistola", "sig sauer", "serial", "dotacion", "arma de dotación"], respuesta: "Mi arma de dotación oficial es una pistola SIG Sauer P226. Está asignada legalmente y jamás ha sido disparada por fuera de los protocolos de defensa propia." },

            { claves: ["instagram", "redes", "tactical", "perfil", "mano propia"], 
              respuesta: "La cuenta @diego_salcedo_tactical es un espacio de entrenamiento táctico privado. Los mensajes sobre limpiar las calles son filosofía penal de libre expresión, no decretos de muerte." },

            { claves: ["telefono", "llamada", "celular", "duracion"], 
              respuesta: "Tengo interceptaciones y llamadas con informantes de la zona todo el tiempo, pSara combatir el crimen en Ciudad Bolívar se necesita información de fuentes oscuras." },

            // ==========================================
            // FASE 3: EL QUIEBRE (Resolución de Vacíos Investigativos)
            // ==========================================
            { claves: ["sabemos", "pruebas", "confiese", "evidencia", "balística", "forense", "proyectil"], 
              respuesta: "Jefe... deje de mirarme como a un monstruo, en Ciudad Bolívar el sistema penal no sirve; uno captura al mismo delincuente cinco veces y al otro día está libre robando, yo solo cumplo con lo que la ciudadanía exige en silencio, pero si me van a tirar a los lobos, no me voy a hundir solo, prefiero hablar antes de que el laboratorio entregue el cotejo de balística." },

            // 1. Vacío Investigativo: Resultados de la balística y punto exacto de la ejecución
            { claves: ["balistica", "disparo", "munición", "punto exacto", "donde le disparo", "ejecucion"], 
              respuesta: "(Aprieta los puños, frío) El examen de balística va a dar positivo... fue mi SIG Sauer. Al muchacho no lo matamos en la patrulla. Lo llevamos hasta el kilómetro 4 de la variante desolada hacia los Llanos Orientales. Lo bajamos del carro y en la zona boscosa le propiné dos impactos a corta distancia. La orden ya estaba dada." },

            // 2. Vacío Investigativo: Identidad del segundo ocupante (Compañero desaparecido)
            { claves: ["compañero", "segundo ocupante", "colega", "patrullero", "quien iba", "trasladado"], 
              respuesta: "Esa noche yo no iba solo en la Hilux. El segundo ocupante era el Patrullero Byron Castro; él manejaba el vehículo. Al día siguiente, la red movió influencias con mandos superiores para trasladarlo de urgencia en menos de 24 horas a una subestación rural en el Guaviare, para sacarlo del radar de la Fiscalía." },

            // 4. Vacío Investigativo: Grabaciones de cámaras y rutas alternas de traslado
            { claves: ["grabaciones", "camaras", "rutas alternas", "videos", "ruta completa"], 
              respuesta: "Para no quedar registrados en las cámaras del C4 de la Boyacá, desviamos la patrulla por las trochas del sector de Mochuelo Alto y salimos por la parte de atrás de Usme hacia la variante. Mi compañero Byron llamó a un contacto del centro de monitoreo local para que borrara los discos duros de las dos cámaras de la ruta alterna esa misma madrugada." },

              { claves: ["el carnicero", "carnicero", "duarte", "nelson", "llamada después", "llamada posterior", "comunicación posterior", "contacto posterior", "habló con el carnicero", "porque llamó", "por qué llamó", "quien es el carnicero" ], respuesta: "No niego que exista ese registro telefónico. En Ciudad Bolívar uno termina hablando con mucha gente para obtener información y anticipar problemas de seguridad. Nelson Duarte era un nombre conocido en el sector y ocasionalmente aparecía mencionado en distintas investigaciones. Lo que no recuerdo con exactitud es el contenido de esa conversación. Han pasado meses y fueron apenas unos minutos dentro de una jornada complicada. Si los investigadores tienen el registro completo, deberían revisarlo en lugar de sacar conclusiones por la hora en que ocurrió." },


              // RAPPORT Y CONVERSACIÓN INFORMAL

            { claves: ["como esta", "cómo está", "como se encuentra", "como anda"],
            respuesta: "Aquí estoy, colaborando con la investigación. No es una situación fácil, pero estoy dispuesto a responder dentro de lo que corresponde." },

            { claves: ["aqui", "cuenteme", "cuénteme"],
            respuesta: "La verdad todavía no entiendo por qué me están señalando. Si tiene preguntas, adelante." },

            { claves: ["como le va", "qué tal", "que tal", "todo bien"],
            respuesta: "He pasado momentos mejores, pero sigo cumpliendo con los procedimientos y atendiendo esta situación." },

            { claves: ["que mas", "qué más", "que cuenta", "qué cuenta"],
            respuesta: "Nada fuera de lo habitual. Desde que comenzó esta investigación he estado atendiendo requerimientos y entregando información cuando se solicita." },

            { claves: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
            respuesta: "Soy Subintendente de la Policía Nacional. Mi labor consiste en coordinar actividades operativas, supervisar patrullajes y atender situaciones de seguridad ciudadana." },

            { claves: ["como ha estado", "cómo ha estado", "como le ha ido"],
            respuesta: "Ha sido un periodo complicado por todo lo que se está investigando, pero sigo enfrentando la situación de manera institucional." },

            { claves: ["mucho trabajo", "ocupado", "trabajando mucho"],
            respuesta: "Siempre hay bastante trabajo. En seguridad ciudadana las jornadas suelen ser extensas y con mucha responsabilidad." },

            { claves: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
            respuesta: "Soy bogotano y he desarrollado la mayor parte de mi carrera profesional en distintas unidades de la ciudad." },

            { claves: ["donde vive", "vive donde", "residencia", "domicilio"],
            respuesta: "Prefiero mantener esa información reservada por razones de seguridad personal y familiar." },

            { claves: ["estado civil", "casado", "soltero"],
            respuesta: "Considero que mi situación personal no tiene relación con los hechos que se investigan." },

            { claves: ["familia", "hijos", "esposa"],
            respuesta: "Mi familia no tiene ninguna relación con este proceso y prefiero mantenerlos al margen." },

            { claves: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
            respuesta: "Me interesa el entrenamiento táctico, la actividad física y la preparación profesional relacionada con mi trabajo." },

            { claves: ["estudios", "academia", "formacion", "formación"],
            respuesta: "Recibí formación policial institucional y he participado en diversos cursos operativos durante mi carrera." },

            { claves: ["salario", "sueldo", "cuanto gana", "ingresos"],
            respuesta: "Percibo los ingresos correspondientes a mi rango dentro de la institución, conforme a la normativa vigente." },

            { claves: ["turnos", "horario", "jornada laboral"],
            respuesta: "Los horarios varían según las necesidades del servicio. Muchas veces se extienden más allá de una jornada convencional." },

            { claves: ["compañeros", "equipo", "patrulla"],
            respuesta: "Trabajo con distintos uniformados dependiendo de la asignación operativa y la programación de cada turno." },

            { claves: ["ciudad bolivar", "ciudad bolívar", "zona de trabajo"],
            respuesta: "Ciudad Bolívar es una zona compleja, con múltiples desafíos en materia de seguridad y atención ciudadana." },

            { claves: ["porque policia", "porque ingreso a la policia", "vocacion"],
            respuesta: "Ingresé a la institución con la intención de servir a la comunidad y contribuir al mantenimiento del orden público." },

            { claves: ["le gusta su trabajo", "le gusta ser policia"],
            respuesta: "Sí. Es una labor exigente, pero también implica una gran responsabilidad con la ciudadanía." },

            { claves: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
            respuesta: "Llevo varios años en servicio activo, desempeñando funciones operativas y de supervisión en diferentes unidades." },

            { claves: ["ascensos", "carrera policial", "futuro"],
            respuesta: "Como cualquier miembro de la institución, siempre he procurado avanzar profesionalmente mediante mérito y experiencia." },

            { claves: ["uniforme", "dotacion", "dotación", "equipo policial"],
            respuesta: "Todo el equipo asignado durante el servicio corresponde a elementos autorizados y registrados por la institución." },

            { claves: ["redes sociales", "instagram", "perfil tactico", "perfil táctico"],
            respuesta: "Tengo perfiles personales donde comparto contenido relacionado con entrenamiento y actividades profesionales, nada fuera de lo permitido." },

            { claves: ["entrenamiento", "armas", "practicas de tiro", "prácticas de tiro"],
            respuesta: "Como parte de mi trabajo recibo capacitación constante en el manejo de armamento y procedimientos de seguridad." },

            { claves: ["investigacion", "investigación", "proceso", "acusacion", "acusación"],
            respuesta: "Estoy siendo investigado y por eso estoy aquí. Confío en que los resultados técnicos permitan aclarar los hechos." },

            { claves: ["johan castro", "victima", "víctima"],
            respuesta: "Conozco el nombre por el proceso que se adelanta, pero cualquier detalle específico hace parte de la investigación." },

            { claves: ["el carnicero", "nelson duarte"],
            respuesta: "He escuchado ese nombre durante las diligencias, pero cualquier conclusión sobre esa persona debe establecerse mediante pruebas." }
        ],

        desconocido: "No tengo comentarios sobre esa conjetura. Aténgase a los informes del cuadrante."
    },

    "caso_012": {
        id: "caso_012",
        personaje: "Luisa Fernanda García López",
        alias: "La Tesorera",
        delito: "Lavado de activos y fraude financiero",
        edad: 44,
        intro: "Soy administradora financiera de una ONG legalmente constituida, todos los procesos contables han sido auditados externamente y están en regla. No entiendo por qué se cuestiona una labor social tan noble.",

        respuestas: [
            { claves: ["buenos", "dias", "hola", "tardes", "noches"], 
            respuesta: "Buenas. Me preocupa mucho esta situación porque siempre he manejado los recursos de la organización con la máxima responsabilidad y transparencia." },

            { claves: ["nombre", "quien eres", "nombres y apellidos"], 
            respuesta: "Mi nombre completo es Luisa Fernanda García López." },

            { claves: ["cedula", "cédula", "identificacion", "identificación"], 
            respuesta: "Mi cédula de ciudadanía es la número 1.023.745.895 de Cartagena." },

            { claves: ["profesion", "cargo", "que haces", "administradora", "tesorera"], 
            respuesta: "Soy Administradora Financiera de profesión y me desempeño como tesorera principal encargada del recaudo y dispersión de fondos en la ONG." },

            { claves: ["ong", "organizacion", "fundacion", "nombre ong"], 
            respuesta: "La organización está debidamente registrada ante la Cámara de Comercio y opera bajo todas las normativas legales vigentes en Colombia para entidades sin ánimo de lucro." },

            { claves: ["contabilidad", "libros", "registros", "estados contables"], 
            respuesta: "Llevo los registros contables ajustados a las Normas Internacionales de Información Financiera (NIIF) y cada transacción cuenta con su debido soporte documental." },

            { claves: ["irregular", "desfalco", "corrupcion", "ilegal", "delito"], 
            respuesta: "Rechazo completamente cualquier insinuación de irregularidad o desfalco. El manejo del flujo de caja de una fundación es complejo, pero jamás ilegal." },

            { claves: ["donaciones", "fondos", "dinero", "internacionales"], 
            respuesta: "Los recursos provienen de aportantes y cooperantes nacionales e internacionales. El anonimato de algunos benefactores es una condición común que ellos exigen por políticas internas de privacidad." },

            { claves: ["gastos", "pagos", "movimientos", "sobrecostos"], 
            respuesta: "Cada desembolso está asociado a la ejecución de los programas educativos. Los costos pueden parecer elevados debido a la difícil logística para llevar materiales a las zonas rurales." },

            { claves: ["auditoria", "revisor", "revision", "hallazgos"], 
            respuesta: "Hemos contratado auditorías externas anuales y los dictámenes financieros siempre han salido limpios, sin salvedades ni hallazgos relevantes de control." },

            { claves: ["banco", "cuentas", "transferencias", "superintendencia"], 
            respuesta: "Las cuentas corrientes de la fundación están radicadas en entidades bancarias de primer nivel vigiladas por la Superintendencia Financiera. El banco valida el origen de los recursos." },

            { claves: ["proveedores", "empresas", "contratos", "historial"], 
            respuesta: "Trabajamos con proveedores del sector logístico y educativo que nos presentan cotizaciones competitivas. Yo no puedo auditar el historial comercial privado de cada contratista." },

            { claves: ["pruebas", "sabemos", "confiese", "evidencia", "lavado", "triangulacion", "carcel"], 
            respuesta: "Mire... yo no soy la dueña de esa plata, solo soy la tesorera que ejecuta los movimientos que me ordenan. Si la Fiscalía ya cruzó las facturas electrónicas con los reportes de campo, sé que estoy acorralada. No voy a pagar una condena por lavado de activos yo sola. Si me blindan jurídicamente, les entrego la ruta completa del dinero." },

            { claves: ["identidad de proveedores", "quienes son", "proveedores fantasma", "proveedores fachada", "empresas de papel"], 
            respuesta: "(Aclara la voz, nerviosa) Está bien... Las dos empresas principales que supuestamente proveían los kits escolares y la logística son 'Consultorías Globales del Caribe S.A.S.' y 'Suministros Pedagógicos Alfa'. Ambas son empresas fachada controladas por un primo del director de la ONG. No tienen empleados, oficinas reales ni inventario; solo emitían las facturas." },

            { claves: ["verificacion real", "proyectos sociales", "ejecucion", "inexistentes", "falsos"], 
            respuesta: "Los programas de capacitación tecnológica en las zonas vulnerables de la costa caribe entre 2023 y 2025 nunca se dictaron. Eran proyectos 100% inexistentes. Usábamos bases de datos viejas de escuelas públicas para simular las listas de asistencia de los estudiantes y justificar el gasto ante los cooperantes." },

            { claves: ["beneficiarios finales", "cuentas exterior", "quien se queda", "extranjero", "paraísos fiscales"], 
            respuesta: "Una vez que las empresas fachada recibían los pagos por los proyectos falsos, ellos retenían un 5% y me devolvían el resto de los fondos. Yo coordinaba la triangulación hacia la sociedad offshore 'Blue Horizon Investment' en las Islas Vírgenes Británicas, el beneficiario final del 90% de esa cuenta es el propio presidente fundador de la ONG, el doctor Alejandro Vivanco." },

            { claves: ["ruta completa", "destino final", "ruta del dinero", "como volvia"], 
            respuesta: "La ruta era estricta: las donaciones internacionales entraban legalmente a la cuenta de la ONG, de ahí salían en transferencias fraccionadas a las cuentas de 'Consultorías Globales' por los contratos falsos. Luego, esa empresa retiraba el dinero en efectivo y me lo entregaba en maletines, mi trabajo final era inyectar ese efectivo en la compra de propiedades de lujo sobre planos en Cartagena, registradas a nombre de firmas de corretaje inmobiliario aliadas." },

            //para revisar


                        // ==========================================
            // FASE 4: DESTAPE FINANCIERO GLOBAL
            // ==========================================

            { claves: ["auditores", "revisor fiscal", "quien firmaba", "control interno"], 
            respuesta: "El revisor fiscal no revisaba realmente los soportes. Firmaba los estados financieros basándose en resúmenes que yo le enviaba ya depurados. Él sabía que había inconsistencias, pero las justificaba como 'errores de clasificación contable'." },

            { claves: ["donantes reales", "quien dona", "origen real dinero", "benefactores"], 
            respuesta: "No todos los donantes eran reales... una parte importante del dinero venía de empresas que solo existían en papel y servían para inflar los reportes de cooperación internacional. Eso permitía justificar cifras millonarias sin ejecución real." },

            { claves: ["retiro dinero", "efectivo", "maletas", "quien recibia"], 
            respuesta: "Después de las triangulaciones, el dinero en efectivo era recogido por mensajeros externos que no estaban vinculados formalmente a la ONG. Ellos lo entregaban directamente al círculo directivo en reuniones privadas fuera de la oficina principal." },

            // RAPPORT Y CONVERSACIÓN INFORMAL

            { claves: ["como esta", "cómo está", "como se encuentra", "como anda"],
            respuesta: "Me encuentro bien dentro de las circunstancias. Estoy colaborando con todo lo que se me ha solicitado." },

            { claves: ["aqui", "cuenteme", "cuénteme"],
            respuesta: "La verdad sigo intentando entender por qué algunas situaciones administrativas han generado tantas dudas. Pero estoy dispuesta a responder lo que pueda." },

            { claves: ["como le va", "qué tal", "que tal", "todo bien"],
            respuesta: "Ha sido una etapa complicada por la investigación, pero continúo atendiendo mis responsabilidades personales y profesionales." },

            { claves: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
            respuesta: "Soy administradora financiera y durante años he trabajado en la gestión de recursos, presupuestos y control administrativo de organizaciones sociales." },

            { claves: ["como ha estado", "cómo ha estado", "como le ha ido"],
            respuesta: "Ha sido un periodo exigente. Este tipo de investigaciones generan presión, pero sigo colaborando en todo lo necesario." },

            { claves: ["mucho trabajo", "ocupada", "trabajando mucho"],
            respuesta: "Sí, bastante. La administración financiera implica supervisar múltiples procesos al mismo tiempo y garantizar que todo quede debidamente registrado." },

            { claves: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
            respuesta: "Soy colombiana y he desarrollado mi trayectoria profesional principalmente en el sector social y administrativo." },

            { claves: ["donde vive", "vive donde", "residencia", "domicilio"],
            respuesta: "Prefiero mantener esa información en reserva por motivos de privacidad y seguridad." },

            { claves: ["estado civil", "casada", "soltera"],
            respuesta: "Mi situación personal no guarda relación con los asuntos financieros que se están revisando." },

            { claves: ["familia", "hijos", "esposo"],
            respuesta: "Mi familia no tiene ninguna participación en mis actividades profesionales y prefiero mantener ese aspecto separado." },

            { claves: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
            respuesta: "Me gusta leer, participar en actividades culturales y apoyar iniciativas relacionadas con educación y desarrollo social." },

            { claves: ["estudios", "academia", "formacion", "formación"],
            respuesta: "Soy administradora financiera y he realizado diferentes capacitaciones relacionadas con gestión de recursos, auditoría y planeación financiera." },

            { claves: ["salario", "sueldo", "cuanto gana", "ingresos"],
            respuesta: "Mis ingresos corresponden a las funciones que desempeño y se encuentran debidamente registrados conforme a la normativa aplicable." },

            { claves: ["horario", "jornada laboral", "trabajo"],
            respuesta: "La administración financiera requiere disponibilidad constante, especialmente durante cierres contables y presentación de informes." },

            { claves: ["compañeros", "equipo", "organizacion", "organización"],
            respuesta: "He trabajado con distintos profesionales en áreas administrativas, sociales y financieras para desarrollar los proyectos de la organización." },

            { claves: ["ong", "ONG", "fundacion", "fundación"],
            respuesta: "La organización tiene como objetivo desarrollar programas sociales y educativos dirigidos a comunidades que requieren apoyo institucional." },

            { claves: ["porque trabaja en ong", "vocacion", "vocación"],
            respuesta: "Siempre me ha interesado participar en proyectos que generen impacto social y contribuyan al desarrollo de comunidades vulnerables." },

            { claves: ["le gusta su trabajo", "le gusta lo que hace"],
            respuesta: "Sí. Considero que administrar recursos para proyectos sociales es una labor importante cuando se realiza de manera responsable." },

            { claves: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
            respuesta: "Tengo una trayectoria amplia en gestión financiera, elaboración de presupuestos y administración de recursos institucionales." },

            { claves: ["ascensos", "carrera profesional", "futuro"],
            respuesta: "Siempre he buscado crecer profesionalmente mediante la formación continua y la experiencia adquirida en cada proyecto." },

            { claves: ["contabilidad", "finanzas", "presupuestos"],
            respuesta: "La gestión financiera implica procesos complejos de control, seguimiento y cumplimiento de obligaciones contables y administrativas." },

            { claves: ["donaciones", "donantes", "aportes"],
            respuesta: "La organización recibe aportes de diferentes fuentes y todos los recursos deben seguir procedimientos administrativos establecidos." },

            { claves: ["proveedores", "contratos", "contratistas"],
            respuesta: "La contratación normalmente sigue procesos internos definidos por la organización y las áreas responsables de cada proyecto." },

            { claves: ["transferencias", "cuentas en el exterior", "giros internacionales"],
            respuesta: "Las operaciones internacionales pueden formar parte de proyectos o convenios específicos. Cada operación debe contar con sus respectivos soportes." },

            { claves: ["auditoria", "auditoría", "revisoria fiscal", "revisoria"],
            respuesta: "Los procesos financieros son objeto de revisiones periódicas por parte de diferentes instancias de control y supervisión." },

            { claves: ["lavado de activos", "blanqueo", "dinero ilegal"],
            respuesta: "He escuchado esas acusaciones dentro del proceso, pero considero que cualquier conclusión debe basarse en evidencia verificable." },

            { claves: ["investigacion", "investigación", "proceso", "acusacion", "acusación"],
            respuesta: "Estoy colaborando con las autoridades y aportando la documentación que se me solicita para aclarar cualquier duda." },

            { claves: ["sobrecostos", "costos inflados", "proyectos ficticios"],
            respuesta: "Los presupuestos de los proyectos pueden variar por múltiples factores. Corresponde a los investigadores determinar si existieron irregularidades." },

            { claves: ["beneficiarios", "destino del dinero", "fondos"],
            respuesta: "Los recursos se asignan conforme a los proyectos aprobados y la documentación disponible dentro de la organización." },

            { claves: ["consultores", "intermediarios", "asesores financieros"],
            respuesta: "En el desarrollo de proyectos es común trabajar con asesores externos especializados en diferentes áreas técnicas y financieras." },

            { claves: ["empresas proveedoras", "proveedores sospechosos", "empresas fachada"],
            respuesta: "La selección de proveedores involucra diferentes áreas. Mi función principal ha sido verificar la documentación financiera correspondiente." }

          ],

        desconocido: "No comprendo su línea de argumentación, si tiene un soporte contable que deba aclarar, muéstremelo."
    }
    };