// =====================================================
// BANCO_DE_CASOS.JS - VERSIÓN 8 — CASOS VIVOS
// =====================================================
// ARQUITECTURA NUEVA:
//   Cada caso tiene su propio bloque "temas_calificables"
//   con palabras_clave, respuestas_evolucion e impacto.
//   El motor (entrevistas_experto.js) lee SIEMPRE del
//   caso activo, nunca de tablas globales por delito.
//
// TIPOS DE PREGUNTA:
//   "alta_valor"   → detectada, genera impacto + log
//   "exploratoria" → sin impacto, pero el sospechoso
//                    responde coherentemente
//   "genérica"     → sin coincidencia, respuesta evasiva
// =====================================================

const BANCO_DE_CASOS = {

// ============================================================
// DELITO #1 — HOMICIDIO
// ============================================================
"homicidio_001": {
  "id": "homicidio_001",
  "nombre": "Carlos López",
  "alias": "El Carnicero",
  "edad": 35,
  "avatar": "img/sospechosos/Homicidio.png",
  "delito": "Homicidio",
  "titulo": "CASO: MUERTE EN EL BARRIO LATINO",
  "descripcion": "INFORME FORENSE RESUMEN — VÍCTIMA: *Marina Villalobos, 58 kg, 32 años, empleada restaurante*.\nINCIDENTE: Víctima encontrada en callejón con heridas de arma blanca\nHORA: 23:45 del viernes 14 de marzo\nCOARTADA: \"Estaba cerrando la carnicería\"\nCONTEXTO: El cuerpo presenta 12 heridas precisas. Víctima pesa 58 kg. Carlos pesa 94 kg.\nTestigos lo ven en zona del crimen a las 23:30. Carnicería cierra a las 22:45 según empleados.\nEVIDENCIA: ADN bajo uñas de víctima. Cuchillo coincide con carnicería. Falta uno del juego.",
  "perfil": "Controlador, meticuloso y emocionalmente distante. Reinterpreta los hechos usando lenguaje técnico para reducir su responsabilidad. Evita lo emocional y deshumaniza a la víctima. Bajo presión, su discurso se vuelve más preciso y frío. Historial de violencia que intenta racionalizar.",
  "rasgos_emocionales": "Frialdad calculadora, baja empatía, necesidad de control, uso de lenguaje técnico como defensa, tendencia a justificar sus actos.",
  "debilidad_detectada": "1) Aplica conocimiento de cortes de forma intencional en un contexto humano. 2) ADN bajo uñas indica forcejeo directo. 3) Ruptura clara en el horario (22:45 vs 23:30). 4) Desproporción física incompatible con defensa propia.",
  "grado_dificultad": "S — FRIALDAD CONTROLADA (Resiste presión básica, pero cede ante acumulación de evidencia técnica y contradicciones).",
  "saludo": "Ya respondí lo necesario en mis declaraciones previas, si van a insistir con esta entrevista, al menos sugiero que sean técnicamente precisos.",
  
  "temas_calificables": {

    "conocimiento_victima": {
      "tema_id": "conocimiento_victima",
      "etiqueta": "Conocimiento previo de la víctima",
      "palabras_clave": ["conocías", "conocía", "víctima", "la viste", "cliente", "frecuentaba", "occisa", "esa mujer", "quién era", "marina", "Marina"],
      "impacto": 25,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Por la naturaleza de mi negocio veo cientos de personas cada semana. Marina era simplemente una empleada del restaurante El Sabor Paisa, ubicado frente a la carnicería, nada que merezca especial atención.",
        "Era difícil no reconocerla, durante años la vi entrar y salir del restaurante casi todos los días, cualquiera que trabajara en la zona habría terminado identificando sus horarios habituales.",
        "Sabía bastante más que su nombre, conocía aproximadamente a qué hora comenzaban y terminaban sus turnos, qué días solía salir más tarde y qué calles utilizaba para regresar, la rutina de alguien se vuelve predecible cuando la observas durante suficiente tiempo."
      ]
    },

    "premeditacion": {
      "tema_id": "premeditacion",
      "etiqueta": "Premeditación / seguimiento",
      "palabras_clave": ["planeaste", "seguiste", "esperaste", "buscaste", "intención", "premeditado", "deliberado", "calculado", "por qué estabas allí", "plan", "esa hora"],
      "impacto": 35,
      "es_calificable": true,
        "respuestas_evolucion": [
        "Encontrarme cerca del callejón esa noche no implica la existencia de una planificación previa, el Barrio Latino forma parte de mi entorno cotidiano desde hace años.",
        "Después del cierre de la carnicería salí a caminar por la zona, sabía que el restaurante seguía funcionando y que todavía había movimiento de empleados terminando sus turnos.",
        "No fue una coincidencia, permanecí cerca porque sabía que Marina saldría a esa hora, la vi abandonar el restaurante y comencé a seguirla manteniendo cierta distancia antes de interceptarla."
      ]
    },

    "horario": {
      "tema_id": "horario",
      "etiqueta": "Inconsistencia en horario",
      "palabras_clave": ["hora", "horas", "cierre", "cerraste", "cierra", "23:30", "22:45", "cuándo cerraste", "saliste", "salio", "a qué hora", "qué hacías a las 11", "empleado", "testigo horario"],
      "impacto": 20,
      "es_calificable": true,
        "respuestas_evolucion": [
        "El cierre del establecimiento se realiza de manera rutinaria a las 22:45. Después de eso, los empleados se retiran y el local queda asegurado como parte del protocolo habitual.",
        "Esa noche el cierre ocurrió normalmente a las 22:45, pero me quedé unos minutos adicionales revisando el orden interno del inventario y asegurando el área de trabajo antes de salir.",
        "Salí del local después del cierre. A partir de ese momento me moví por la zona del Barrio Latino sin una ruta fija, permaneciendo cerca del área comercial mientras aún había actividad en la calle."
      ]
    },

    "arma_cuchillo": {

      "tema_id": "arma_cuchillo",
      "etiqueta": "Arma homicida / cuchillo de carnicería",
      "palabras_clave": ["cuchillo", "arma", "juego", "falta", "carnicería", "dónde está", "de dónde lo sacaste", "tu cuchillo", "el arma", "cortante"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las herramientas de trabajo de una carnicería son objetos industriales diseñados para el procesamiento de alimentos. Su presencia o ausencia no implica necesariamente un uso indebido.",
        "Es común que haya rotación o pérdida de utensilios en entornos de alta actividad como una carnicería. No recuerdo ningún evento específico en el que faltara un cuchillo relevante esa noche.",
        "Tomé un cuchillo del establecimiento antes de salir. Era una herramienta equilibrada, con buen filo y adecuada para tareas de corte precisas en caso de necesitarla fuera del local."
      ]
    },

    "adn_evidencia": {
      "tema_id": "adn_evidencia",
      "etiqueta": "Evidencia de ADN / forcejeo",
      "palabras_clave": ["adn", "uñas", "sangre", "genético", "laboratorio", "análisis", "evidencia", "prueba forense", "te encontraron", "tu adn", "bajo las uñas"],
      "impacto": 40,
      "es_calificable": true,
        "respuestas_evolucion": [
        "La transferencia de material biológico puede ocurrir en entornos urbanos de alta interacción sin que exista un contacto directo significativo en el contexto que se sugiere.",
        "Si hubo algún tipo de contacto físico, pudo tratarse de un intercambio breve durante un momento de tensión. El cuerpo humano deja rastros incluso en interacciones mínimas o accidentales.",
        "Hubo un momento de contacto físico directo cuando ella intentó alejarse. En ese instante se produjo un forcejeo breve, suficiente para explicar la presencia de material biológico bajo sus uñas."
      ]
    },

    "defensa_propia": {
      "tema_id": "defensa_propia",
      "etiqueta": "Alegato de defensa propia",
      "palabras_clave": ["defensa", "me atacó", "amenazó", "primero", "se lanzó", "vino hacia mí", "legítima", "ella empezó", "me agredió"],
      "impacto": 30,
      "es_calificable": true,
        "respuestas_evolucion": [
        "La situación se desarrolló de manera inesperada. Percibí un comportamiento hostil por su parte que interpreté como un riesgo inmediato en el contexto del encuentro.",
        "La interacción escaló rápidamente. Hubo un momento en el que intenté mantener la distancia, pero la otra parte reaccionó de forma impulsiva generando tensión física.",
        "El contacto físico ocurrió cuando intenté detener la situación. Ella trató de apartarse con fuerza y el intercambio terminó en un forcejeo descontrolado."
      ]
    },

    "heridas_multiples": {
      "tema_id": "heridas_multiples",
      "etiqueta": "Patrón de heridas / violencia excesiva",
      "palabras_clave": ["heridas", "12", "múltiples", "puñaladas", "repetidas", "precisas", "exactas", "órganos", "letal", "por qué tantas"],
      "impacto": 35,
      "es_calificable": true,
        "respuestas_evolucion": [
        "En un evento de alta tensión física, las acciones no siempre se ejecutan de forma aislada o controlada. Los movimientos pueden repetirse como respuesta a la situación inmediata.",
        "Durante el forcejeo la situación se volvió caótica. Las acciones posteriores no fueron completamente deliberadas, sino una continuación del mismo episodio de confrontación.",
        "Las heridas fueron resultado de una acción sostenida en el tiempo durante el enfrentamiento. Se dirigieron a zonas vitales con el objetivo de neutralizar la resistencia de manera definitiva."
      ]
    },

    "conocimiento_tecnico": {
      "tema_id": "conocimiento_tecnico",
      "etiqueta": "Conocimiento anatómico / técnico",
      "palabras_clave": ["anatómico", "preciso", "técnico", "términos", "vital", "exactitud", "cómo lo sabías", "términos médicos", "órganos", "sangre", "corte", "sistema circulatorio"],
      "impacto": 40,
      "es_calificable": true,
        "respuestas_evolucion": [
        "El trabajo en carnicería implica un conocimiento práctico de estructuras musculares y puntos de corte eficientes en tejidos animales, lo cual es parte de la rutina laboral.",
        "Con el tiempo se adquiere familiaridad con la resistencia de distintos tejidos y con la forma en que responden a distintos tipos de presión o corte, como parte de la experiencia profesional.",
        "Ese conocimiento fue aplicado de manera automática durante la situación, dirigiendo los cortes hacia zonas donde la resistencia estructural es menor y la pérdida funcional es inmediata."
      ]
    },

    "motivo": {
      "tema_id": "motivo",
      "etiqueta": "Motivo / razón del crimen",
      "palabras_clave": ["por qué", "motivo", "razón", "qué le hizo", "odio", "celos", "venganza", "rencor", "discutieron", "problema", "qué pasó", "cometió"],
      "impacto": 30,
      "es_calificable": true,
      "respuestas_evolucion": [
        "No existe un único evento que pueda aislarse como causa de lo ocurrido. Las interpretaciones de ese tipo suelen simplificar procesos más largos.",
        "Durante un periodo prolongado existió una sensación constante de distancia y rechazo en la forma en que ella interactuaba conmigo en el entorno diario. Esa percepción fue acumulándose con el tiempo.",
        "Lo ocurrido esa noche no responde a un impulso aislado, sino a una acumulación prolongada de frustración, observación constante y una relación completamente desequilibrada entre percepción y realidad."
      ]
    },

    "antecedentes": {
      "tema_id": "antecedentes",
      "etiqueta": "Historial de violencia previa",
      "palabras_clave": ["violencia", "doméstica", "antecedentes", "ex pareja", "historial", "antes", "pasado", "ya lo hiciste", "denuncia", "problemas"],
      "impacto": 30,
      "es_calificable": true,
      "respuestas_evolucion": [
        "En el pasado hubo situaciones de conflicto en relaciones personales que fueron interpretadas de distintas formas por las partes involucradas y gestionadas de manera formal en su momento.",
        "Con el tiempo aprendí a identificar ciertos patrones de tensión en relaciones interpersonales prolongadas, especialmente cuando existe falta de reciprocidad emocional o comunicación.",
        "Es correcto que existen antecedentes de dificultades en el manejo de relaciones donde percibía desequilibrios emocionales o falta de control en la dinámica interpersonal."
      ]
    },

    "post_crimen": {
      "tema_id": "post_crimen",
      "etiqueta": "Conducta posterior al homicidio",
      "palabras_clave": ["después", "luego", "volviste", "regresaste", "qué hiciste", "posterior", "saliste corriendo", "te fuiste", "coartada", "normalidad"],
      "impacto": 25,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Después de abandonar el área del incidente, regresé hacia la zona de la carnicería siguiendo rutas habituales del barrio. No existía ninguna razón para alterar mi comportamiento normal.",
        "Mi prioridad en ese momento era retomar la rutina habitual del cierre del establecimiento. Cualquier interpretación adicional de mis movimientos posteriores es especulativa.",
        "Regresé a un estado de normalidad aparente, intentando continuar con mis actividades como cualquier otra noche. No había motivo para asumir que algo relevante había ocurrido desde mi perspectiva."
  ]
}

  },
  
  // ── RESPUESTAS EXPLORATORIAS ────────────────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "buenas", "tardes", "noches"], 
      respuesta: "Como va todo, muy estresado per espero que me entiendan rápido." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Carlos Andres López Camargo." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.080.371.390 de Santa Marta." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 35 años." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección", "domicilio"], 
      respuesta: "Vivó en la calle 86 No. 96-00, casa 5, es un lugar muy tranquilo y calmado para  vivir." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["familia", "hijos", "esposa", "pareja"], 
      respuesta: "Mi entorno familiar y mis dinámicas afectivas privadas son variables ajenas a este procedimiento. Mantengo mis esferas personales completamente compartimentadas." },

    { palabras_clave: ["clientes", "negocio", "local", "carnicería"], 
      respuesta: "La operatividad de la carnicería se basa en una disciplina estricta. Cada trisección, cada desposte y cada pieza cárnica sigue un protocolo técnico riguroso. Nada se delega al azar." },

    { palabras_clave: ["esa noche", "noche del", "viernes", "14 de marzo", "hechos"], 
      respuesta: "El viernes 14 de marzo inició como una jornada con parámetros de rutina. La ejecución de mis tareas habituales se mantuvo dentro de la normalidad... hasta que ocurrió la alteración del ecosistema en el callejón." },

    { palabras_clave: ["testigo", "confirmar", "quien te vio", "empleado", "vieron"], 
      respuesta: "Los registros de mis empleados certifican la cronología estándar de las actividades del local. Sin embargo, un observador externo no posee la capacidad de validar de forma milimétrica cada vector de mis movimientos." },

    { palabras_clave: ["arma", "cuchillo", "dónde", "encontraste"], 
      respuesta: "Un instrumento monocortante aislado de su entorno de trabajo carece de carga delictiva intrínseca. Es la aplicación intencional de la fuerza sobre una superficie biológica lo que altera su naturaleza." },

    { palabras_clave: ["víctima", "mujer", "quién era"], 
      respuesta: "La camarera Marina Villalobos era simplemente un componente estático del entorno geográfico del Barrio Latino. Nuestras coordenadas de rutina coincidían, tal como ocurre con otros especímenes del sector." },

    { palabras_clave: ["sentimiento", "arrepentimiento", "lástima", "culpa", "remordimiento"], 
      respuesta: "Los remordimientos y la culpa son meras construcciones morales subjetivas basadas en el remordimiento. Yo prefiero procesar la realidad limitándome exclusivamente al análisis de los hechos mecánicos. " },
    // ============================================================
    // RAPPORT Y CONVERSACIÓN INFORMAL
    // ============================================================

    { palabras_clave: ["como esta", "como estas", "cómo está", "como se encuentra", "como anda", "que mas", "como va"],
      respuesta: "Me encuentro en condiciones controladas dentro de este proceso, puedo explicar los hechos de forma clara si se mantiene un orden técnico en la conversación." },

    { palabras_clave: ["aqui", "cuenteme", "cuénteme", "sabe"],
      respuesta: "Entiendo la gravedad del caso, pero insisto en que se está simplificando un contexto laboral y operativo que no refleja la totalidad de los hechos." },

    { palabras_clave: ["como le va", "qué tal", "que tal", "todo bien"],
      respuesta: "Es una situación compleja en términos legales, pero mantengo coherencia sobre mi versión de lo ocurrido en el Barrio Latino." },

    { palabras_clave: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
      respuesta: "Soy propietario de una carnicería y me dedico al procesamiento y distribución de productos cárnicos bajo estándares técnicos de calidad." },

    { palabras_clave: ["como ha estado", "cómo ha estado", "como le ha ido", "siente"],
      respuesta: "He intentado mantener estabilidad durante todo este proceso, aunque la interpretación del caso ha sido profundamente distorsionada." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "Sí, la operación de la carnicería exige supervisión constante y cumplimiento estricto de protocolos de producción." },

    { palabras_clave: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
      respuesta: "Soy colombiano y he desarrollado toda mi vida laboral en el sector cárnico y comercial." },

    { palabras_clave: ["donde vive", "vive donde", "residencia", "domicilio"],
      respuesta: "Prefiero no detallar mi residencia por seguridad personal dentro del proceso de investigación." },

    { palabras_clave: ["estado civil", "casado", "soltero"],
      respuesta: "Mi vida personal no tiene relación directa con los hechos que están siendo investigados." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
      respuesta: "Mi tiempo libre lo dedico principalmente al mantenimiento del negocio y a actividades de orden técnico relacionadas con mi oficio." },

    { palabras_clave: ["estudios", "formacion", "formación", "académica"],
      respuesta: "Tengo formación técnica en procesamiento de alimentos y manejo de productos cárnicos." },

    { palabras_clave: ["salario", "sueldo", "cuanto gana", "ingresos"],
      respuesta: "Mis ingresos provienen exclusivamente de la operación formal de la carnicería." },

    { palabras_clave: ["jornada laboral", "trabajo"],
      respuesta: "La carnicería tiene horarios estrictos de apertura y cierre con protocolos definidos para cada jornada." },

    { palabras_clave: ["compañeros", "equipo", "organizacion", "organización"],
      respuesta: "Trabajo con personal de apoyo en el local, encargado de tareas de atención y procesamiento." },

    { palabras_clave: ["vocacion", "vocación", "porque trabaja", "interés"],
      respuesta: "Mi vocación siempre ha sido el trabajo técnico y disciplinado en el sector cárnico." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "Sí, porque me permite operar bajo estándares claros y procesos bien definidos." },

    { palabras_clave: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
      respuesta: "Tengo varios años de experiencia en el manejo y administración de carnicerías." },

    { palabras_clave: ["ascensos", "carrera profesional", "futuro"],
      respuesta: "Mi enfoque siempre ha sido mantener y mejorar la eficiencia del negocio." },

    { palabras_clave: ["contabilidad", "finanzas", "presupuestos"],
      respuesta: "No manejo contabilidad compleja, solo la administración básica del negocio." },

    { palabras_clave: ["dinero", "fondos", "transferencias"],
      respuesta: "No gestiono fondos de terceros ni operaciones financieras externas." },

    { palabras_clave: ["redes", "plataformas", "internet", "tecnologia"],
      respuesta: "Uso herramientas digitales básicas para la gestión del negocio." },

    { palabras_clave: ["cifrado", "seguridad", "encriptacion", "tecnología"],
      respuesta: "La seguridad digital no es un área central en mi actividad profesional." },

    { palabras_clave: ["investigacion", "investigación", "proceso", "acusacion", "acusación"],
      respuesta: "Estoy colaborando con la investigación, aunque discrepo de varias interpretaciones del caso." },

    { palabras_clave: ["violencia", "ataque", "agresión", "forzar", "arma"],
      respuesta: "No soy una persona violenta. Lo ocurrido fue una situación aislada que se está analizando fuera de contexto." },

    { palabras_clave: ["lider", "guia", "jefe", "organizacion"],
      respuesta: "Mi rol es estrictamente operativo dentro de mi negocio, sin estructuras de liderazgo criminal o similares." },

    { palabras_clave: ["ideologia", "politica", "activismo"],
      respuesta: "No participo en actividades políticas ni ideológicas." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"],
      respuesta: "No hubo intención criminal. Lo ocurrido fue una situación que escaló de forma inesperada en un contexto de tensión." }
  ]
},

// ============================================================
// DELITO #2 — FEMINICIDIO
// ============================================================
"feminicidio_001": {
  "id": "feminicidio_001",
  "nombre": "Roberto Sánchez",
  "alias": "El Obsesionado",
  "edad": 38,
  "avatar": "img/sospechosos/Feminicidio.png",
  "delito": "Feminicidio",
  "titulo": "CASO: MUERTE DE PAREJA EN CONFLICTO",
  "descripcion": "VÍCTIMA: María González, 32 años, pareja del sospechoso.\nINCIDENTE: Cuerpo sin vida en departamento compartido. Hora muerte: 22:15, domingo 10 de abril.\nCAUSA: Estrangulamiento manual (marcas en cuello) + heridas de defensa en antebrazos.\nESCENA: Sin signos de entrada forzada. Ambiente de lucha en sala. Vaso roto en suelo.\nCONTEXTO CRÍTICO:\n• Sospechoso envió 47 mensajes WhatsApp ese día (00:00-22:00) preguntando ubicación.\n• Contrató investigador privado (pagos bancarios: $1,200/mes x 6 meses).\n• Víctima había comunicado a amigas: \"Ya no aguanto más, me iré pronto\".\n• Vecinos escucharon discusión fuerte a las 21:45.\nEVIDENCIA:\n1. Teléfono víctima: mensajes acosadores + 3 llamadas no atendidas el día del crimen.\n2. Contrato/detalles del investigador privado (seguimientos documentados).\n3. Autopsia: heridas defensivas + estrangulamiento (mínimo 3 min de presión).\n4. Sin heridas en sospechoso.",

  "perfil": "Controlador obsesivo con dependencia emocional extrema. Interpreta control como amor y abandono como traición. Se victimiza constantemente y desplaza la culpa a la víctima. Escala emocional: calma → ansiedad → celos → explosión. Bajo presión, se quiebra emocionalmente pero sigue justificando sus actos.",

  "rasgos_emocionales": "Celos patológicos, miedo al abandono, victimización, manipulación emocional, negación parcial, labilidad intensa.",

  "debilidad_detectada": "1) Mensajes excesivos evidencian control. 2) Vigilancia contratada (premeditación). 3) Contradicción física: ella con heridas defensivas vs. él intacto. 4) Ruptura inminente de la relación. 5) Testigos de discusión.",

  "grado_dificultad": "S — COLAPSO EMOCIONAL (Se mantiene en negación, pero se quiebra rápidamente ante presión emocional + evidencia)",

  "saludo": "Yo la amaba… Nadie en esta sala entiende lo que tuvimos. Están sacando todo de contexto para hacerme ver como un monstruo.",

  "temas_calificables": {

    "mensajes_obsesivos": {
      "tema_id": "mensajes_obsesivos",
      "etiqueta": "Control obsesivo por mensajes",
      "palabras_clave": ["47", "mensajes", "WhatsApp", "ocultando", "localización", "respondía", "preocupación", "control", "acoso", "escribió", "ubicación"],
      "impacto": 30,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Solo quería saber su localización, dónde estaba y confirmar que se encontraba a salvo. Vivimos en una ciudad peligrosa, no considero que sea acoso ¿mi preocupación es por la seguridad y control de tu pareja ahora es un delito?",
        "Sí, reconozco que le envié esos 47 mensajes de WhatsApp desde la medianoche hasta las 22:00 de ese domingo 10 de abril. Pero lo hice porque me ignoraba deliberadamente, me dejaba las llamadas y mensajes en visto. ¿Qué esperaba que hiciera ante su indiferencia?",
        "No podía parar de escribir... Sentía una ansiedad insoportable en el pecho. Sabía que si ella no me respondía dónde estaba y con quién, era porque me estaba ocultando algo. Sentía que la estaba perdiendo definitivamente."
      ]
    },

    "heridas_defensa": {
      "tema_id": "heridas_defensa",
      "etiqueta": "Heridas de defensa en víctima vs. sin lesiones en él",
      "palabras_clave": ["estrangulamiento", "marcas", "cuello", "defensa", "brazos", "moretones", "defendió", "forcejeo", "autopsia", "antebrazos", "presión", "mato"],
      "impacto": 40,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Tuvimos un altercado físico menor en la sala, un forcejeo de pareja como cualquier otro, ella también se alteró se defendió y me empujó fuertemente.",
        "Los reportes de la autopsia están sobredimensionando la situación, esas marcas y los moretones en sus antebrazos, seguramente cuando la quería calmar la tome muy fuerte, pero tampoco es para tanto, no utilice tanta violencia como ustedes dicen, hay quedaron las heridas de defensa.",
        "Está bien... La sujete por los brazos y la presioné contra el suelo de la sala, no era mi intención acabar con su vida, solo quería que se callara, que dejara de gritarme que se iba. Sostuve la presión en su cuello durante esos tres minutos porque no entraba en razón... pero ella me obligó a llegar a ese punto, no quería llegar al estrangulamiento."
      ]
    },

    "investigador_privado": {
      "tema_id": "investigador_privado",
      "etiqueta": "Contratación de investigador privado",
      "palabras_clave": ["investigador", "privado", "seguimiento", "vigilancia", "movimientos bancarios", "control", "1200", "mensuales", "6 meses"],
      "impacto": 38,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Contratar un investigador privado es protección o verificar conductas no es ilegal, había anomalías drásticas en sus rutinas y yo necesitaba proteger la integridad de nuestro hogar.",
        "Sí, admito los movimientos bancarios de 1200 dólares mensuales durante los últimos 6 meses para pagar ese servicio de seguimiento, necesitaba confirmar la verdad con reportes documentados, los celos y las dudas me estaban matando por dentro.",
        "Yo mismo ordené esa vigilancia y monitoreo constante... Era la única forma de mantener el control, de saber cada paso que María daba cuando no estaba conmigo, necesitaba confirmar que me pertenecía."
      ]
    },

    "infidelidad_pretexto": {
      "tema_id": "infidelidad_pretexto",
      "etiqueta": "Infidelidad como justificación",
      "palabras_clave": ["otro hombre", "teléfono celular", "celoso", "sospechaba", "infidelidad", "engaño", "movimientos"],
      "impacto": 28,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Cualquier hombre en mi posición de celoso habría notado las señales infidelidad, su lenguaje corporal y ella costantemente ocultaba su teléfono celular cambiaron por completo.",
        "El detective me entregaba datos de sus movimientos, pero nunca obtuve una fotografía contundente o una prueba biológica. No obstante, yo lo sentía en mi interior, y para mí eso era una certeza absoluta.",
        "Quizás ese engaño con otro hombre solo existía en mi mente... Pero en mi cabeza sospechaba esa idea que era tan real que me quemaba por dentro, no podía soportar la idea de verla con alguien más."
      ]
    },

    "sin_lesiones_propias": {
      "tema_id": "sin_lesiones_propias",
      "etiqueta": "Ausencia de heridas en el sospechoso",
      "palabras_clave": ["que paso", "apartamento", "incidente", "rasguño", "marcas", "lesiones", "heridas", "defensivas"],
      "impacto": 42,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El incidente que paso en el apartamento ocurrió de una forma sumamente caótica y veloz. No hubo un intercambio bilateralizado de golpes por eso no tengo lesiones.",
        "Ustedes afirman que los antebrazos de María muestran heridas defensivas críticas, pero yo no registré agresiones físicas directas hacia mi cuerpo.",
        "No tengo marcas, ni un solo rasguño porque la disparidad de fuerzas era absoluta. Ella intentó zafarse de mis manos, pero no pudo hacer absolutamente nada contra mi peso y mi agarre."
      ]
    },

    "patron_violencia": {
      "tema_id": "patron_violencia",
      "etiqueta": "Historial de violencia en la relación",
      "palabras_clave": ["convivencia", "relación", "peleas", "violencia previa", "historial", "antecedentes", "otras veces", "incidentes anteriores", "incidentes", "maltrato", "agresiones físicas", "verbales"],
      "impacto": 32,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Como cualquier pareja o relación, bajo una convivencia estrecha, experimentábamos fricciones verbales fuertes, es una dinámica normal en relaciones intensas.",
        "Reconozco que en incidentes anteriores perdí los estribos y llegamos a agresiones físicas cruzadas y maltrato, pero siempre nos reconciliábamos. Ella sabía cómo disculparse.",
        "Sí... Ya había ocurrido antes. El patrón se repetía porque María siempre sabía exactamente qué botones presionar para llevarme al límite de mi estabilidad emocional. Ella detonaba mis reacciones, las peleas."
      ]
    },

    "divorcio_secreto": {
      "tema_id": "divorcio_secreto",
      "etiqueta": "Intención de separación de la víctima",
      "palabras_clave": ["divorcio", "separación", "abandono", "amigas", "aguantaba", "dejarme", "iba", "se iba a ir", "dejaría"],
      "impacto": 35,
      "es_calificable": true,
      "respuestas_evolucion": [
        "María solía verbalizar amenazas de divorcio, abandono, separación o mudanza en momentos de histeria, pero eran solo palabras sin sustento real.",
        "Me enteré de que andaba diciéndole a sus amigas que 'ya no aguantaba más' y que planeaba dejarme pronto. Estaba planeando una traición a nuestras espaldas.",
        "Esa noche me lo confirmó en la cara. Me miró y me dijo firmemente que se iba del departamento, que se iba a ir, que me dejaría ya no me amaba... En ese microsegundo sentí que mi vida entera se destruía y perdí la razón."
      ]
    },

    "escena_crimen": {
      "tema_id": "escena_crimen",
      "etiqueta": "Presencia en escena / preparación",
      "palabras_clave": ["cómo entraste", "estabas allí", "llegaste a casa", "esa noche", "departamento", "qué hacías allí", "vaso", "discusión"],
      "impacto": 25,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Ingresé utilizando mis llaves habituales a las 21:45. No hubo entrada forzada porque ese departamento también constituye mi residencia legal.",
        "El ambiente en la sala se tornó violento de inmediato. Durante la discusión tiramos cosas, incluyendo ese vaso que terminó roto en el suelo... Estábamos fuera de control.",
        "Entré al departamento antes de que ella llegara y la esperé a oscuras en la sala. Tenía los reportes del investigador privado en la mano y necesitaba respuestas definitivas a las 22:15."
      ]
    }
  },

   // ── RESPUESTAS EXPLORATORIAS MEJORADAS ──────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Buenas, espero que valga la pena." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Roberto Sánchez Cristo." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.009.187.103 de Cali." },

    { palabras_clave: ["Edad", "edad", "años tiene"], 
      respuesta: "Tengo 38 años" },

    { palabras_clave: ["residencia", "donde vive", "dirección"], 
      respuesta: "Vivó en la calle 127 No. 15-30, es un lugar muy calmado para vivir." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["cuánto tiempo", "llevaban", "juntos"],
      respuesta: "Tres años... Tres años de mi vida dándolo absolutamente todo por ella, construyendo un hogar. Nadie en esta sala es capaz de ver ese sacrificio, solo se enfocan de manera destructiva en el trágico final." },

    { palabras_clave: ["trabajo", "empleo", "profesion", "trabaja"],
      respuesta: "Tengo un empleo estable, una rutina administrativa normal, mi rendimiento laboral era lo único en mi vida que no se estaba desmoronando por culpa de la paranoia y la inestabilidad de nuestra convivencia." },

    { palabras_clave: ["amigos", "familia de ella"],
      respuesta: "Su entorno nunca me aceptó, su familia y sus amigas se la pasaban metiéndose en nuestra privacidad, llenándole la cabeza de ideas absurdas de abandono y saboteando nuestra relación desde las sombras." },

    { palabras_clave: ["esa noche", "qué pasó", "domingo", "10 de abril"],
      respuesta: "Iniciamos una discusión fuerte en la sala, como tantas otras veces... Pero esta vez la tensión escaló de una forma atípica. Nada se detuvo. Sentí que el control se me escapaba de las manos por completo." },

    { palabras_clave: ["arma", "cuchillo", "objeto"],
      respuesta: "No existió ningún tipo de arma en la escena, no hubo premeditación instrumental. Solo eran mis propias manos intentando contenerla, sujetándola para obligarla a que se calmara y me escuchara." },

    { palabras_clave: ["culpa", "arrepentimiento", "remordimiento"],
      respuesta: "Si tuviera la capacidad de volver el tiempo atrás... Cambiaría el enfoque de la discusión. Haría que se quedara en el departamento a mi lado, haría las cosas bien para no perderla." },

    { palabras_clave: ["ella", "María", "víctima"],
      respuesta: "María lo representaba absolutamente todo para mí, mi mundo giraba en torno a sus necesidades... Y aun así, conociendo mi miedo al abandono, decidió de manera fría que se iba a ir y me iba a dejar destruído." },

    { palabras_clave: ["testigos", "vecinos", "gritos", "escucharon"],
      respuesta: "Los vecinos del edificio solo captaron ruidos de la sala y fragmentos descontextualizados desde las paredes. Ellos no tienen la capacidad de comprender la complejidad de lo que realmente estaba ocurriendo ahí dentro." },
    // ============================================================
    // RAPPORT Y CONVERSACIÓN INFORMAL
    // ============================================================

    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro en condiciones estables dentro de este proceso. Estoy dispuesto a explicar lo ocurrido desde una perspectiva clara y ordenada." },

    { palabras_clave: ["aqui", "cuenteme", "cuénteme"],
      respuesta: "Entiendo la naturaleza de la investigación, pero están simplificando una relación compleja que terminó siendo mal interpretada." },

    { palabras_clave: ["como le va", "qué tal", "que tal", "todo bien", "que más"],
      respuesta: "Es una situación difícil en términos legales y personales, pero mantengo claridad sobre lo que ocurrió realmente esa noche." },

    { palabras_clave: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
      respuesta: "Trabajo en el área administrativa y de gestión de proyectos. Siempre he sido una persona responsable con mis obligaciones laborales." },

    { palabras_clave: ["como ha estado", "cómo ha estado", "como le ha ido"],
      respuesta: "He intentado mantenerme estable durante todo este proceso, aunque la forma en que se está narrando el caso me afecta profundamente." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "Sí, mi vida siempre ha sido bastante estructurada entre trabajo y responsabilidades personales." },

    { palabras_clave: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
      respuesta: "Soy colombiano y he vivido aquí toda mi vida, desarrollando una vida laboral y personal estable." },

    { palabras_clave: ["donde vive", "vive donde", "residencia", "domicilio"],
      respuesta: "Prefiero no dar detalles específicos de mi residencia por respeto al proceso y a la seguridad personal." },

    { palabras_clave: ["estado civil", "casada", "soltera"],
      respuesta: "Mi vida personal es parte de un proceso ya terminado, no algo que tenga relevancia en lo que ocurrió después." },

    { palabras_clave: ["familia", "hijos", "esposa"],
      respuesta: "Mi familia no tiene relación con los hechos ni con las interpretaciones que se están haciendo del caso." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
      respuesta: "Mi vida fuera del trabajo era bastante tranquila. Prefería actividades domésticas y mantener un entorno estable." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Tengo formación en áreas administrativas y gestión organizacional. Siempre he sido una persona estructurada en lo profesional." },

    { palabras_clave: ["salario", "sueldo", "cuanto gana", "ingresos"],
      respuesta: "Mis ingresos provienen de mi trabajo formal. Nunca he tenido actividades económicas irregulares." },

    { palabras_clave: ["horario", "jornada laboral", "trabajo"],
      respuesta: "Mi jornada laboral era normal, con horarios de oficina y responsabilidades administrativas." },

    { palabras_clave: ["compañeros", "equipo", "organizacion", "organización"],
      respuesta: "Trabajaba con equipos administrativos y de gestión dentro de un entorno empresarial formal." },

    { palabras_clave: ["ong", "fundacion", "organización"],
      respuesta: "No estoy vinculada a ONG ni a organizaciones sociales. Mi trabajo siempre fue privado." },

    { palabras_clave: ["vocacion", "vocación", "porque trabaja", "interés"],
      respuesta: "Siempre he valorado la estabilidad, el orden y la construcción de una vida organizada." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "Sí, porque me permitía mantener una vida estructurada y predecible." },

    { palabras_clave: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
      respuesta: "Tengo varios años de experiencia en el área administrativa y de gestión."},

    { palabras_clave: ["ascensos", "carrera profesional", "futuro"],
      respuesta: "Mi enfoque siempre fue mantener estabilidad y crecimiento profesional dentro de lo formal." },

    { palabras_clave: ["contabilidad", "finanzas", "presupuestos"],
      respuesta: "No manejo finanzas directamente. Solo procesos administrativos básicos dentro de mi rol." },

    { palabras_clave: ["dinero", "fondos", "transferencias"],
      respuesta: "No administro fondos de terceros ni realizo movimientos financieros complejos." },

    { palabras_clave: ["redes", "plataformas", "internet", "tecnologia"],
      respuesta: "Uso herramientas digitales de forma básica para comunicación y trabajo." },

    { palabras_clave: ["cifrado", "seguridad", "encriptacion", "tecnología"],
      respuesta: "La seguridad digital es importante, pero no es un área en la que yo tenga participación técnica." },

    { palabras_clave: ["investigacion", "investigación", "proceso", "acusacion", "acusación"],
      respuesta: "Estoy colaborando con la investigación, aunque no estoy de acuerdo con varias de las conclusiones que se han planteado." },

    { palabras_clave: ["violencia", "ataque", "agresión", "forzar", "arma"],
      respuesta: "No soy una persona violenta. Lo ocurrido fue una discusión que se salió de control en un contexto emocional extremo." },

    { palabras_clave: ["lider", "guia", "jefe", "organizacion"],
      respuesta: "Mi rol siempre ha sido subordinado dentro de un entorno laboral normal, sin estructuras de liderazgo especiales." },

    { palabras_clave: ["ideologia", "politica", "activismo", "ideas"],
      respuesta: "No participo en actividades políticas ni ideológicas. Mi vida siempre ha sido privada." },

    { palabras_clave: ["intención", "accidente"],
      respuesta: "Nunca fue mi intención que las cosas terminaran así. Estoy intentando entender cómo una situación personal pudo escalar de esa manera."}

  ]
},

// ============================================================
// DELITO #3 — DESAPARICIÓN FORZADA
// ============================================================
"desaparicion_forzada_001": {
  id: "desaparicion_forzada_001",
  nombre: "Mariana Vega",
  alias: "La Ejecutiva",
  edad: 32,
  avatar: "img/sospechosos/Desplazamiento_forzado.png",
  delito: "Desaparición Forzada",
  titulo: "CASO: EL HOMBRE QUE NUNCA SALIÓ DEL EDIFICIO",

  descripcion: `SUJETA: Mariana Vega | ALIAS: "La Ejecutiva"
CARGO: Ejecutiva de empresa inmobiliaria con contratos estatales
INCIDENTE: Esposo desaparece sin dejar rastro dentro del penthouse. No hay registro de salida.
HORA: Ventana crítica entre 01:12 y 02:47 de la madrugada
COARTADA: "Dormía en alcoba principal. No escuché nada."
CONTEXTO: Matrimonio en ruptura. Proceso de divorcio secreto activo desde hace 9 días.
La víctima había expresado temor por seguimientos y posibles amenazas.
Relación indirecta con funcionarios y contratistas de seguridad privada.
Cámaras del edificio desactivadas exactamente durante la franja crítica.
Portería reporta ausencia de ingresos, pero inconsistencias en bitácora manual.

EVIDENCIA:
- Registros de cámaras manipulados (apagado selectivo, no fallo general)
- Actividad del celular de la víctima detenida abruptamente dentro del inmueble
- Señal del dispositivo reaparece brevemente en zona industrial periférica
- Transferencias previas a cuentas no habituales
- Contacto reciente con abogado penalista
- Reportes de vigilantes con versiones contradictorias
- Eliminación de registros digitales en red doméstica
- Vehículo del esposo permanece en sótano sin alteraciones`,

  perfil: "Alta capacidad cognitiva, control emocional extremo y pensamiento estratégico. Maneja la información como herramienta de poder. Evita mentir directamente: omite, redirige y redefine. Bajo presión, pequeñas fisuras aparecen en detalles técnicos y temporales.",

  rasgos_emocionales: "Frialdad dominante, control discursivo, superioridad implícita, evasión sofisticada, mínima reactividad emocional",

  debilidad_detectada: "Exceso de precisión en temas que debería desconocer. Control selectivo de información. Coherencia artificial en su relato que se quiebra al cruzar variables (tiempo + tecnología + terceros).",

  grado_dificultad: "S+ — CONTROL NARRATIVO AVANZADO (No reacciona, reestructura. Solo cede ante contradicciones complejas)",

  saludo: "Entiendo que necesiten una explicación, pero insinuar mi participación sin pruebas sólidas es… poco profesional.",

  temas_calificables: {

    ventana_tiempo: {
      tema_id: "ventana_tiempo",
      etiqueta: "Precisión sospechosa en la línea temporal",
      palabras_clave: ["hora exacta", "entre qué horas", "timeline", "01:12", "02:47", "tiempo exacto"],
      impacto: 50,
      es_calificable: true,
      respuestas_evolucion: [
        "No estoy manejando horas exactas. Eso proviene de su reconstrucción.",
        "Puedo asumir que fue en la madrugada… no tenía motivo para verificar el tiempo.",
        "No debería haber mencionado rangos tan específicos. Fue una inferencia… no un dato."
      ]
    },

    camaras_manipuladas: {
      tema_id: "camaras_manipuladas",
      etiqueta: "Desactivación selectiva de cámaras",
      palabras_clave: ["cámaras", "apagadas", "seguridad", "grabación", "por qué justo ahí", "sistema"],
      impacto: 50,
      es_calificable: true,
      respuestas_evolucion: [
        "Ese sistema no depende de mí.",
        "Si hubo una falla, corresponde a administración o seguridad.",
        "El nivel de precisión que describen… no es casual. Pero no puedo decirle más."
      ]
    },

    terceros_involucrados: {
      tema_id: "terceros_involucrados",
      etiqueta: "Posible participación de terceros",
      palabras_clave: ["quién más", "alguien entró", "ayuda", "seguridad privada", "contactos", "gente externa"],
      impacto: 48,
      es_calificable: true,
      respuestas_evolucion: [
        "No tengo por qué involucrar a nadie más.",
        "Conozco personas, sí. Eso no implica participación.",
        "No todo ocurre de forma directa… y no todo pasa por mí."
      ]
    },

    divorcio_movil: {
      tema_id: "divorcio_movil",
      etiqueta: "Motivación por ruptura matrimonial",
      palabras_clave: ["divorcio", "separación", "problemas", "fin del matrimonio"],
      impacto: 42,
      es_calificable: true,
      respuestas_evolucion: [
        "Era un proceso legal en curso. Nada extraordinario.",
        "Las relaciones terminan. Eso no implica conflicto violento.",
        "Resolver una situación no requiere… eliminar a nadie."
      ]
    },

    rastreo_dispositivo: {
      tema_id: "rastreo_dispositivo",
      etiqueta: "Rastro del celular de la víctima",
      palabras_clave: ["celular", "ubicación", "señal", "apagado", "zona industrial"],
      impacto: 45,
      es_calificable: true,
      respuestas_evolucion: [
        "No tenía acceso a su dispositivo.",
        "Él manejaba su información de forma independiente.",
        "Si su señal apareció fuera… alguien más intervino. Claramente."
      ]
    },

    porteria_inconsistencias: {
      tema_id: "porteria_inconsistencias",
      etiqueta: "Versiones contradictorias de vigilancia",
      palabras_clave: ["portería", "vigilantes", "registro", "entrada", "salida"],
      impacto: 43,
      es_calificable: true,
      respuestas_evolucion: [
        "Según entiendo, no hubo movimientos.",
        "Las versiones dependen de quién las dé.",
        "Si hay inconsistencias… entonces alguien está ocultando algo. No necesariamente yo."
      ]
    },

    eliminacion_datos: {
      tema_id: "eliminacion_datos",
      etiqueta: "Borrado de información digital",
      palabras_clave: ["borraste", "eliminaste", "archivos", "historial", "red", "router"],
      impacto: 47,
      es_calificable: true,
      respuestas_evolucion: [
        "No manejo ese nivel técnico.",
        "Los sistemas pueden limpiarse automáticamente.",
        "Si hubo eliminación… fue deliberada. Eso es evidente."
      ]
    },

    transferencias: {
      tema_id: "transferencias",
      etiqueta: "Movimientos financieros sospechosos",
      palabras_clave: ["transferencias", "dinero", "cuentas", "movimientos", "fondos"],
      impacto: 40,
      es_calificable: true,
      respuestas_evolucion: [
        "Son operaciones normales dentro de mi actividad.",
        "Todo tiene respaldo contable.",
        "Moví dinero, sí. Pero no por las razones que insinúan."
      ]
    },

    planificacion_red: {
      tema_id: "planificacion_red",
      etiqueta: "Posible estructura organizada",
      palabras_clave: ["planificado", "red", "organizado", "coordinado", "estructura"],
      impacto: 50,
      es_calificable: true,
      respuestas_evolucion: [
        "Esa es una construcción interesante… pero infundada.",
        "Están conectando puntos sin contexto.",
        "Hay cosas que no se ejecutan de forma individual."
      ]
    }
  },

  // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Como estas, soy una esecialista muy ocupada que necesitas." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Mariana Vega Ramirez." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.108.107.109 de Medellin." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 32 años de Medellin." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la carrera 12 No. 127-25, apartamento 801, es un lugar muy tranquilo y tiene la mejor vista de la ciudad." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["relación", "matrimonio", "vínculo", "esposos"], 
      respuesta: "Era una estructura funcional. Cumplía con los parámetros de estabilidad requeridos corporativa y socialmente… hasta que el desgaste contractual hizo inviable la continuidad del vínculo." },

    { palabras_clave: ["esa noche", "madrugada", "franja"], 
      respuesta: "Mi organismo se encontraba en estado de reposo en la alcoba principal. Absolutamente ninguna variable acústica o ambiental en ese momento me indicó que debía interrumpir mi ciclo de sueño." },

    { palabras_clave: ["esposo", "enemigos", "víctima", "contratistas"], 
      respuesta: "Él no proyectaba una actividad pública conflictiva en nuestro entorno… al menos no dentro del radio de información al que yo tenía acceso permitido en nuestras finanzas compartidas." },

    { palabras_clave: ["trabajo", "empresa", "inmobiliaria", "contratos"], 
      respuesta: "Mi rol en la firma inmobiliaria implica toma de decisiones de alto impacto, manejo de contactos estatales y, fundamentalmente, comprender con precisión analítica cómo operan los sistemas cerrados." },

    { palabras_clave: ["miedo", "amenazas", "seguimientos", "temor"], 
      respuesta: "El miedo es una variable psicológica estrictamente subjetiva. En el ámbito de la seguridad privada, no todo vector que el sujeto percibe como una amenaza real constituye un peligro fáctico en el entorno." },
    // ============================================================
    // RAPPORT Y CONVERSACIÓN INFORMAL — CASO DESAPARICIÓN FORZADA
    // ============================================================

    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro en condiciones controladas. Estoy dispuesta a explicar los hechos dentro del marco técnico que ustedes solicitan." },

    { palabras_clave: ["aqui", "cuenteme", "cuénteme"],
      respuesta: "Entiendo la naturaleza de la investigación, pero insisto en que están interpretando un conflicto conyugal complejo como si fuera un evento criminal directo." },

    { palabras_clave: ["como le va", "qué tal", "que tal", "todo bien"],
      respuesta: "Es una situación delicada desde lo legal, pero mantengo claridad sobre cada una de las decisiones que tomé en ese contexto." },

    { palabras_clave: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
      respuesta: "Soy ejecutiva en el sector inmobiliario con manejo de contratos de alto valor, análisis de riesgo y gestión de activos estratégicos." },

    { palabras_clave: ["como ha estado", "cómo ha estado", "como le ha ido"],
      respuesta: "He mantenido una postura colaborativa durante todo el proceso, aunque no comparto la forma en que se están interpretando los hechos." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "Sí, mi rol implica toma de decisiones constantes, manejo de información sensible y supervisión de operaciones corporativas." },

    { palabras_clave: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
      respuesta: "Soy colombiana y he desarrollado mi carrera en el sector empresarial e inmobiliario con enfoque en gestión estratégica." },

    { palabras_clave: ["donde vive", "vive donde", "residencia", "domicilio"],
      respuesta: "Prefiero no detallar mi residencia actual por razones de seguridad dentro del proceso de investigación." },

    { palabras_clave: ["estado civil", "casada", "soltera"],
      respuesta: "Mi vida personal forma parte de un proceso privado que no define ni explica los hechos que están siendo investigados." },

    { palabras_clave: ["familia", "hijos", "esposo"],
      respuesta: "Mi familia no tiene relación con mi actividad profesional ni con las decisiones que he tomado en el ámbito personal." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
      respuesta: "Me interesa la arquitectura, la inversión inmobiliaria y el análisis de estructuras organizacionales complejas." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Tengo formación en administración, gestión inmobiliaria y análisis de proyectos de inversión de alto impacto." },

    { palabras_clave: ["salario", "sueldo", "cuanto gana", "ingresos"],
      respuesta: "Mis ingresos provienen de mi actividad ejecutiva en el sector inmobiliario y la gestión de contratos empresariales." },

    { palabras_clave: ["horario", "jornada laboral", "trabajo"],
      respuesta: "No tengo un horario fijo. Mis responsabilidades dependen de reuniones, cierres contractuales y supervisión de proyectos." },

    { palabras_clave: ["compañeros", "equipo", "organizacion", "organización"],
      respuesta: "Trabajo con equipos administrativos, jurídicos y de gestión de proyectos dentro del sector inmobiliario." },

    { palabras_clave: ["ong", "fundacion", "organización"],
      respuesta: "No estoy vinculada a ONG ni a organizaciones sociales. Mi trabajo es exclusivamente del sector privado." },

    { palabras_clave: ["vocacion", "vocación", "porque trabaja", "interés"],
      respuesta: "Mi interés está en la estructuración de proyectos inmobiliarios y en la optimización de activos estratégicos." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "Sí, porque permite analizar decisiones complejas y participar en procesos de alto impacto económico y estructural." },

    { palabras_clave: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
      respuesta: "Tengo varios años de experiencia en el sector inmobiliario y en gestión de proyectos corporativos." },

    { palabras_clave: ["ascensos", "carrera profesional", "futuro"],
      respuesta: "Mi enfoque siempre ha sido el crecimiento dentro del sector empresarial y la consolidación de proyectos estratégicos." },

    { palabras_clave: ["contabilidad", "finanzas", "presupuestos"],
      respuesta: "No manejo contabilidad directa, pero sí participo en decisiones financieras a nivel ejecutivo." },

    { palabras_clave: ["dinero", "fondos", "transferencias"],
      respuesta: "Las transferencias hacen parte de operaciones corporativas regulares dentro de la gestión de activos inmobiliarios." },

    { palabras_clave: ["redes", "plataformas", "internet", "tecnologia"],
      respuesta: "Las plataformas digitales son herramientas clave para la gestión de información y coordinación de proyectos." },

    { palabras_clave: ["cifrado", "seguridad", "encriptacion", "tecnología"],
      respuesta: "La seguridad digital es fundamental en la protección de información corporativa y contratos sensibles." },

    { palabras_clave: ["investigacion", "investigación", "proceso", "acusacion", "acusación"],
      respuesta: "Estoy colaborando con la investigación, aunque discrepo de varias interpretaciones que se han hecho sobre mi rol en los hechos." },

    { palabras_clave: ["violencia", "ataque", "agresión", "forzar", "arma"],
      respuesta: "No participo ni he participado en actos de violencia. Las acusaciones no corresponden con mi perfil ni con mis acciones." },

    { palabras_clave: ["lider", "guia", "jefe", "organizacion"],
      respuesta: "Mi rol es ejecutivo dentro del sector empresarial, enfocado en toma de decisiones y gestión de proyectos." },

    { palabras_clave: ["ideologia", "politica", "activismo", "ideas"],
      respuesta: "No participo en actividades políticas ni ideológicas. Mi trabajo es estrictamente empresarial." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"],
      respuesta: "Mi intención siempre fue resolver una situación personal compleja dentro de un marco racional. Las interpretaciones deben basarse en hechos verificables." }

  ]
},
// ============================================================
// DELITO #4 — TORTURA
// ============================================================
"privacion_coercion_001": {
  "id": "privacion_coercion_001",
  "nombre": "Esteban Rojas",
  "alias": "El Instructor",
  "edad": 31,
  "avatar": "img/sospechosos/Tortura.png",
  "delito": "Privación ilegal de la libertad y coerción agravada",
  "titulo": "CASO: LA CASA SIN RELOJES",
  "descripcion": "SUJETO: Esteban Rojas | ALIAS: \"El Instructor\"\nOCUPACIÓN: Exentrenador conductual / consultor en disciplina extrema\nINCIDENTE: Víctima retenida durante días en propiedad aislada. Sin contacto exterior.\nHORA: Período indeterminado (pérdida total de noción del tiempo por parte de la víctima)\nCOARTADA: \"Era un proceso voluntario de formación personal\"\n\nCONTEXTO:\nEl sospechoso ofrecía programas de \"reconstrucción mental\" para personas vulnerables.\nLa víctima fue aislada progresivamente de su entorno.\nSe retiraron referencias de tiempo: relojes, ventanas cubiertas, rutinas alteradas.\nUso de instrucciones contradictorias, presión psicológica y control del entorno.\n\nEVIDENCIA:\n- Mensajes previos donde se condiciona a la víctima\n- Registro de ingreso sin salida documentada\n- Aislamiento físico en habitación adaptada\n- Manipulación de luz y sonido\n- Testimonio con signos de desorientación severa\n- Grabaciones parciales de sesiones de \"entrenamiento\"",

  "perfil": "Figura autoritaria con ideología rígida. Se percibe como guía necesario para corregir a otros. No reconoce daño: redefine el sufrimiento como proceso. Controla mediante estructura, repetición y ruptura psicológica progresiva.",
  "rasgos_emocionales": "Dominancia absoluta, frialdad doctrinal, ausencia de culpa, lenguaje técnico-moral, desprecio por la debilidad ajena",
  "debilidad_detected": "Necesita justificar todo como 'formación'. Se contradice al explicar consentimiento vs. sometimiento. Bajo presión, admite control total sobre la víctima.",
  "grado_dificultad": "S — JUSTIFICACIÓN IDEOLÓGICA (No niega, redefine. Se quiebra cuando pierde el control del discurso)",
  "saludo": "Lo que usted desde su ignorancia técnica insiste en etiquetar como abuso... yo lo defino matemáticamente como un proceso de optimización conductual. Y claramente su mente carece de la estructura para entender la diferencia.",

  "temas_calificables": {

    "consentimiento": {
      "tema_id": "consentimiento",
      "etiqueta": "Falso consentimiento de la víctima",
      "palabras_clave": ["consentimiento", "voluntario", "aceptó", "decidió quedarse", "podía irse", "mensajes", "contrato"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El sujeto formalizó su participación mediante la aceptación explícita de las condiciones psicofísicas de mi programa. Nadie ingresa a mi propiedad bajo dinámicas de coacción física obligada.",
        "Existe un registro de ingreso y mensajes previos donde se condiciona al participante a no abandonar el entrenamiento ante las crisis de adaptación. El consentimiento inicial estaba perfectamente claro… luego comenzó la resistencia irracional de su debilidad.",
        "Admito que, tras superar el umbral crítico de desestructuración, el individuo ya no se encontraba en condiciones cognitivas de decidir ni de manifestar su voluntad. Su capacidad de autodeterminación fue anulada por el diseño del método."
      ]
    },

    "aislamiento": {
      "tema_id": "aislamiento",
      "etiqueta": "Aislamiento del entorno",
      "palabras_clave": ["aislado", "sin contacto", "encerrado", "sin salir", "nadie lo veía", "propiedad", "afuera"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El aislamiento hermético del entorno ordinario es un pilar fundamental en la ingeniería conductual. El ruido social contamina los procesos de reconfiguración del yo.",
        "Al suprimir de tajo todo contacto exterior, forzamos al individuo a desvincularse de sus muletillas emocionales y a enfrentarse a su propia vacuidad existencial. No estaba encerrado, estaba concentrado.",
        "Sí, mantuve al espécimen en un aislamiento físico absoluto en la habitación adaptada. Era estrictamente necesario aislarlo para romper de raíz sus patrones de conducta previos y vaciar sus resistencias."
      ]
    },

    "control_tiempo": {
      "tema_id": "control_tiempo",
      "etiqueta": "Eliminación de noción del tiempo",
      "palabras_clave": ["reloj", "hora", "día", "noche", "sin ventanas", "tiempo", "noción", "ventanas cubiertas"],
      "impacto": 43,
      "es_calificable": true,
      "respuestas_evolucion": [
        "La métrica convencional del tiempo cronológico condiciona y debilita la neuroplasticidad de la mente humana. Vivir atado a un cuadrante impide el rediseño disciplinario.",
        "Eliminamos deliberadamente las referencias externas, cubriendo las ventanas de la habitación y retirando todo reloj para desestructurar los hábitos automáticos y las respuestas circadianas del participante.",
        "El sujeto experimentó una pérdida total de la noción del tiempo, fusionando el día y la noche en un ciclo indeterminado. Esa desorientación severa facilitó exponencialmente que su voluntad se rindiera ante mis directrices."
      ]
    },

    "manipulacion_mental": {
      "tema_id": "manipulacion_mental",
      "etiqueta": "Presión psicológica sistemática",
      "palabras_clave": ["presión", "control mental", "obedecer", "confundir", "romper voluntad", "sesiones", "grabaciones", "entrenamiento", "contradictorias"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Lo que su manual jurídico llama manipulación mental, mi metodología lo define como disciplina aplicada de alta intensidad. No hay confusión, hay reestructuración.",
        "Las grabaciones parciales de las sesiones muestran la administración controlada de instrucciones contradictorias. Es un método técnico para saturar los mecanismos de defensa del ego.",
        "Sí, requería quebrar sistemáticamente su resistencia psicológica mediante fatiga inducida. La voluntad humana es un músculo rígido; si no se fractura primero el marco mental original, no se puede reconstruir nada."
      ]
    },

    "privacion_basica": {
      "tema_id": "privacion_basica",
      "etiqueta": "Privación de necesidades básicas",
      "palabras_clave": ["comida", "agua", "sueño", "cansancio", "agotamiento", "recursos", "limitar"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las variables de homeostasis, nutrición y descanso estuvieron bajo mi estricta supervisión técnica y racional. Ningún parámetro biológico estuvo fuera de control.",
        "Se ajustaban dinámicamente las raciones de agua, alimento y los intervalos de sueño según la respuesta de sumisión o rebeldía que el participante presentaba en el laboratorio.",
        "Sí, limitaba intencionalmente el acceso al sueño y racionaba los recursos biológicos. El agotamiento y el cansancio extremo son catalizadores indispensables para inducir una adaptación conductual forzada."
      ]
    },

    "espacio_controlado": {
      "tema_id": "espacio_controlado",
      "etiqueta": "Condiciones del lugar",
      "palabras_clave": ["habitación", "cerrado", "luz", "sonido", "controlabas todo", "entorno", "diseñado"],
      "impacto": 42,
      "es_calificable": true,
      "respuestas_evolucion": [
        "La locación en esa propiedad aislada constituye un entorno de estimulación controlada meticulosamente diseñado. No es una celda, es un aula de reprogramación.",
        "Cada variable física, espacial y sensorial dentro de esa habitación adaptada poseía un propósito funcional. Nada de lo que sucedía allí dentro era fortuito u aleatorio.",
        "Sí. Yo manipulaba de manera unilateral la intensidad de la luz, los choques de sonido y los flujos ambientales. Absolutamente todo el entorno y la realidad del sujeto estaban bajo mi control omnipotente."
      ]
    },

    "contradicciones": {
      "tema_id": "contradicciones",
      "etiqueta": "Inconsistencias en su discurso",
      "palabras_clave": ["dijiste", "antes afirmaste", "contradicción", "no coincide", "mentira", "inconsistencia"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Su aparato cognitivo está interpretando mis postulados de manera errónea. No hay variaciones semánticas en mis informes.",
        "Las conclusiones a las que arriba su investigación son técnicamente imprecisas debido a que intentan juzgar un proceso superior con criterios ordinarios.",
        "No se trata de una contradicción entre el consentimiento y el sometimiento físico... Es que su limitada perspectiva legal no asimila que para salvar un sistema, primero hay que destruirlo. El fin justifica el diseño."
      ]
    },

    "dependencia": {
      "tema_id": "dependencia",
      "etiqueta": "Generación de dependencia psicológica",
      "palabras_clave": ["dependía de ti", "necesitaba aprobación", "no podía decidir", "dependencia", "guía", "aprobación"],
      "impacto": 47,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El participante buscaba de manera desesperada un eje de autoridad y una guía moral. Es una respuesta psíquica estándar ante la disolución de sus viejas estructuras.",
        "La generación de un vínculo de subordinación es un paso intermedio documentado en la reconstrucción del carácter. El alumno debe deconstruirse en el maestro.",
        "Sí. El sujeto terminó desarrollando un cuadro de desorientación donde dependía de forma absoluta y exclusiva de mis indicaciones y mi aprobación para validar su propia existencia."
      ]
    }
  },

  // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Buenas, Espero que todo este en orden, no tengo nada que decir." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Esteban Norberto Rojas Rojas" },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.182.117.109 de Huila." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 31 años del Huila." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la calle 100 No. 10-00, es un lugar muy tranquilo." },
    
    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["víctima", "sujeto", "persona", "nombre"], 
      respuesta: "No nos refiramos a él por variables sentimentales. Era un espécimen con una fragmentación de carácter severa que requería una intervención de choque urgente." },

    { palabras_clave: ["programas", "reconstrucción", "formación", "método"], 
      respuesta: "Mis programas de reconstrucción mental ofrecen respuestas que las terapias convencionales y débiles no pueden proveer. Trabajo con la verdad de la disciplina extrema." },

    { palabras_clave: ["testimonio", "declaración", "denuncia", "víctima dice"], 
      respuesta: "El testimonio del participante está sesgado por su desorientación severa y su incapacidad para procesar la catarsis. Es normal que confunda la evolución con el sufrimiento." },

    { palabras_clave: ["abuso", "tortura", "daño", "sufrimiento"], 
      respuesta: "Usted se escandaliza ante el dolor físico de la adaptación. Lo que su debilidad clasifica como tortura, la historia lo define como el costo ineludible de la forja de la voluntad." },

    { palabras_clave: ["instructor", "entrenador", "experiencia", "quién es"], 
      respuesta: "He sido consultor en disciplina extrema para organizaciones de alto rendimiento durante más de dos décadas. Mi reputación se basa en la inflexibilidad de mis resultados." },

    { palabras_clave: ["culpa", "remordimiento", "perdón"], 
      respuesta: "¿Remordimiento por ejercer de guía? Un cirujano no pide disculpas por la sangre que emana de la incisión si con ello extirpa el tumor. Yo limpié su mente." },
    // ============================================================
    // RAPPORT Y CONVERSACIÓN INFORMAL
    // ============================================================

    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro en condiciones controladas. Estoy dispuesto a explicar el proceso de forma técnica y ordenada." },

    { palabras_clave: ["aqui", "cuenteme", "cuénteme"],
      respuesta: "Entiendo la naturaleza de la investigación, pero insisto en que están interpretando un proceso formativo con categorías inadecuadas." },

    { palabras_clave: ["como le va", "qué tal", "que tal", "todo bien"],
      respuesta: "Es una situación compleja desde lo legal, pero mantengo claridad sobre lo que ocurrió dentro del marco metodológico que apliqué." },

    { palabras_clave: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
      respuesta: "Soy consultor en disciplina extrema y procesos de reestructuración conductual. Trabajo con programas de intervención psicológica intensiva." },

    { palabras_clave: ["como ha estado", "cómo ha estado", "como le ha ido"],
      respuesta: "He mantenido una postura colaborativa durante todo el proceso de investigación, aunque discrepo de la interpretación de los hechos." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "Sí, mis procesos de intervención requieren supervisión constante de variables conductuales y entornos de control." },

    { palabras_clave: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
      respuesta: "Soy colombiano y me he especializado en procesos de formación conductual y disciplina aplicada." },

    { palabras_clave: ["donde vive", "vive donde", "residencia", "domicilio"],
      respuesta: "Prefiero no detallar mi residencia actual por razones de seguridad dentro del proceso." },

    { palabras_clave: ["estado civil", "casada", "soltera"],
      respuesta: "Mi vida personal no tiene relación con las interpretaciones que se están haciendo del caso." },

    { palabras_clave: ["familia", "hijos", "esposo"],
      respuesta: "Mi familia no tiene ningún vínculo con mis actividades profesionales ni con este proceso investigativo." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
      respuesta: "Me interesa la psicología conductual, la disciplina extrema y los procesos de reestructuración del comportamiento humano." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Tengo formación en áreas conductuales, entrenamiento físico-mental y consultoría en procesos de disciplina avanzada." },

    { palabras_clave: ["salario", "sueldo", "cuanto gana", "ingresos"],
      respuesta: "Mis ingresos provienen de consultorías privadas en procesos de disciplina y reestructuración conductual." },

    { palabras_clave: ["horario", "jornada laboral", "trabajo"],
      respuesta: "No tengo un horario fijo. Mis intervenciones dependen de los ciclos de entrenamiento y evaluación de cada proceso." },

    { palabras_clave: ["compañeros", "equipo", "organizacion", "organización"],
      respuesta: "Trabajo de forma independiente con apoyo puntual de colaboradores en áreas logísticas y de evaluación conductual." },

    { palabras_clave: ["ong", "fundacion", "organización"],
      respuesta: "No estoy vinculado a ONG ni a organizaciones sociales. Mi trabajo es privado y especializado." },

    { palabras_clave: ["vocacion", "vocación", "porque trabaja", "interés"],
      respuesta: "Mi interés está en la transformación del comportamiento humano a través de procesos estructurados de disciplina y reconfiguración mental." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "Sí, porque permite observar cambios profundos en la conducta humana cuando se aplican metodologías estrictas." },

    { palabras_clave: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
      respuesta: "Tengo años de experiencia en procesos de entrenamiento conductual y consultoría en disciplina extrema." },

    { palabras_clave: ["ascensos", "carrera profesional", "futuro"],
      respuesta: "Mi enfoque ha sido siempre el perfeccionamiento de metodologías de reestructuración conductual." },

    { palabras_clave: ["contabilidad", "finanzas", "presupuestos"],
      respuesta: "No manejo procesos contables ni financieros directamente. Mi trabajo es estrictamente conductual." },

    { palabras_clave: ["dinero", "fondos", "transferencias"],
      respuesta: "No gestiono fondos de terceros ni manejo estructuras financieras en mis actividades." },

    { palabras_clave: ["redes", "plataformas", "internet", "tecnologia"],
      respuesta: "Las plataformas digitales son herramientas auxiliares para comunicación y seguimiento de procesos." },

    { palabras_clave: ["cifrado", "seguridad", "encriptacion", "tecnología"],
      respuesta: "La seguridad de la información es fundamental en cualquier proceso de intervención estructurada." },

    { palabras_clave: ["investigacion", "investigación", "proceso", "acusacion", "acusación"],
      respuesta: "Estoy colaborando con la investigación, aunque insisto en que se está interpretando mal la naturaleza del proceso." },

    { palabras_clave: ["violencia", "ataque", "agresión", "forzar", "arma"],
      respuesta: "No participo en actos de violencia. Mi trabajo se basa en disciplina estructurada y reconfiguración conductual." },

    { palabras_clave: ["lider", "guia", "jefe", "organizacion"],
      respuesta: "Mi rol es el de consultor y guía en procesos de disciplina extrema, sin estructuras jerárquicas formales." },

    { palabras_clave: ["ideologia", "politica", "activismo", "ideas"],
      respuesta: "No participo en actividades políticas ni ideológicas. Mi trabajo es técnico y conductual." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"],
      respuesta: "Mi intención siempre fue metodológica. Las interpretaciones de daño deben analizarse desde el marco del proceso de reestructuración conductual." }

  ]
},

// ============================================================
// DELITO #5 — SECUESTRO EXTORSIVO
// ============================================================
"secuestro_extorsivo_001": {
  "id": "secuestro_extorsivo_001",
  "nombre": "Luis Fernando Arango",
  "alias": "El Contador",
  "edad": 37,
  "avatar": "img/sospechosos/Secuestro_extorsivo.png",
  "delito": "Secuestro Extorsivo",
  "titulo": "CASO: 48 HORAS DE SILENCIO",
  "descripcion": "SUJETO: Luis Fernando Arango | ALIAS: \"El Contador\"\nOCUPACIÓN: Asesor financiero independiente\nINCIDENTE: Empresario reportado como desaparecido. Familia recibe llamadas exigiendo dinero a cambio de su liberación.\nHORA: Último contacto de la víctima a las 18:20. Primera llamada extorsiva a las 22:03.\nCOARTADA: \"Estaba en casa revisando informes. No tengo relación con eso.\"\n\nCONTEXTO:\nEl sospechoso tenía acceso a información financiera sensible de la víctima.\nRelación previa de confianza deteriorada por desacuerdos económicos.\nLas llamadas extorsivas demuestran conocimiento preciso de rutinas y activos.\nUso de intermediarios y dispositivos desechables.\n\nEVIDENCIA:\n- Registros de llamadas vinculadas a contactos indirectos del sospechoso\n- Movimientos financieros previos inusuales\n- Geolocalización coincidente con zonas de emisión de llamadas\n- Mensajes eliminados entre sospechoso y víctima\n- Testigos ubican al sospechoso cerca del último punto donde se vio a la víctima\n- Patrón de exigencias escalonado (incremento progresivo del monto)",

  "perfil": "Mentalidad analítica orientada a riesgo-beneficio. Reduce todo a variables: costo, exposición y retorno. Evita implicación directa, opera mediante capas. Cree que mientras no ejecute, no es responsable.",
  "rasgos_emocionales": "Frialdad calculadora, desapego moral, lenguaje técnico-financiero, tendencia a racionalizar el crimen como estrategia",
  "debilidad_detectada": "Sobreexplica procesos y revela conocimiento operativo que no debería tener. Minimiza su rol hasta que contradicciones lo obligan a admitir diseño indirecto.",
  "grado_dificultad": "S — OPERADOR INDIRECTO (Niega ejecución, pero no puede ocultar conocimiento estructural)",
  "saludo": "Si administrar balances y conocer con precisión la liquidez financiera de mis clientes ahora es un tipo penal, sugiero que preparen muchas más sillas en esta unidad de investigación.",

  "temas_calificables": {

    "conocimiento_financiero": {
      "tema_id": "conocimiento_financiero",
      "etiqueta": "Conocimiento detallado de finanzas de la víctima",
      "palabras_clave": ["cuentas", "dinero", "activos", "cuánto tiene", "movimientos", "financiera", "liquidez", "capacidad", "empresa"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mi función como asesor financiero independiente requería un diagnóstico milimétrico de sus activos y balances corporativos. Es un procedimiento técnico ordinario.",
        "El acceso preferencial a sus cuentas bancarias y movimientos financieros previos inusuales no me vincula causalmente con un escenario de retención ilegal.",
        "Conocía al detalle su estructura patrimonial y su capacidad de conversión de activos a liquidez inmediata en tiempo récord... Sé exactamente cuánto dinero podía consolidar la familia sin recurrir a créditos bancarios antes de romper la negociación."
      ]
    },

    "llamadas_extorsivas": {
      "tema_id": "llamadas_extorsivas",
      "etiqueta": "Patrón de llamadas y exigencias",
      "palabras_clave": ["llamadas", "extorsión", "exigían", "monto", "contacto", "22:03", "exigencias", "silencio"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "No poseo ninguna relación de origen con las emisiones telefónicas que la familia recibió a partir de las 22:03 de esa noche.",
        "Un esquema de triangulación mediante dispositivos desechables puede ser operado de forma remota por cualquier individuo que posea los datos correctos de la víctima.",
        "Yo no manipulé físicamente esos dispositivos desechables ni realicé las grabaciones. Mi intervención se limitó a estructurar la matriz de datos para que los operadores supieran exactamente a qué números de contacto llamar y qué activos presionar."
      ]
    },

    "intermediarios": {
      "tema_id": "intermediarios",
      "etiqueta": "Uso de terceros",
      "palabras_clave": ["intermediario", "alguien más", "terceros", "contactos", "quién llamó", "operadores", "ejecución"],
      "impacto": 47,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mis registros de llamadas institucionales se limitan a clientes corporativos. No mantengo nexos con redes o elementos criminales operativos en la calle.",
        "En mi agenda profesional convergen intermediarios financieros de todo tipo. El cruce de llamadas indirectas con sospechosos no constituye coautoría material.",
        "Admito que subcontraté capas de ejecución externa para mitigar mi nivel de exposición. Yo diseñé la ingeniería financiera del caso, pero la retención física y el manejo logístico en el terreno fueron delegados enteramente a terceros de mi total confianza."
      ]
    },

    "ubicacion": {
      "tema_id": "ubicacion",
      "etiqueta": "Coincidencia de ubicación",
      "palabras_clave": ["dónde estabas", "ubicación", "zona", "geolocalización", "coincidente", "18:20", "vieron", "testigos"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mi coartada es invariable: me encontraba en mi residencia privada analizando informes contables y balances de cierre de mes.",
        "Pude haber realizado desplazamientos breves dentro de la zona periférica. La geolocalización de las celdas de telefonía móvil presenta un margen de error considerable.",
        "No pretendan acorralarme porque los testigos me ubican cerca del último punto de contacto de la víctima a las 18:20. Estaba allí monitoreando visualmente que los intermediarios realizaran la interceptación del vehículo de manera limpia y sin resistencia."
      ]
    },

    "relacion_victima": {
      "tema_id": "relacion_victima",
      "etiqueta": "Conflicto previo con la víctima",
      "palabras_clave": ["problema", "discusión", "conflicto", "dinero", "relación", "desacuerdos", "confianza", "deteriorada"],
      "impacto": 42,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Nuestra relación de confianza experimentó un desgaste natural derivado de discrepancias en la distribución de dividendos económicos.",
        "Los desacuerdos económicos y la cancelación de contratos son eventos recurrentes en el entorno comercial corporativo. No son un catalizador criminal violento.",
        "La tensión por dinero era insostenible; él pretendía desconocer mis comisiones y recortar mis honorarios tras años de manejarle los activos. Decidí realizar un cobro de cuentas forzado utilizando un método donde él no tuviera la opción de negarse."
      ]
    },

    "mensajes_eliminados": {
      "tema_id": "mensajes_eliminados",
      "etiqueta": "Eliminación de comunicación",
      "palabras_clave": ["borraste", "mensajes", "chat", "eliminaste", "conversación", "eliminados"],
      "impacto": 46,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Suelo depurar mis canales digitales periódicamente para optimizar el almacenamiento de datos sensibles de mis clientes.",
        "El borrado de los chats entre la víctima y mi terminal telefónica fue una medida preventiva de confidencialidad financiera rutinaria.",
        "Eliminé las conversaciones de texto porque allí constaban las últimas exigencias financieras que le hice antes de las 48 horas de silencio. Dejar esos registros digitales activos habría destruido mi estrategia de cobertura."
      ]
    },

    "escalamiento_pago": {
      "tema_id": "escalamiento_pago",
      "etiqueta": "Incremento progresivo de exigencias",
      "palabras_clave": ["más dinero", "subieron monto", "negociación", "por qué aumentó", "escalonado", "incremento", "progresivo"],
      "impacto": 44,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El incremento progresivo en una mesa de negociación responde a una lectura técnica del comportamiento del mercado y la urgencia de la contraparte.",
        "Un patrón de exigencias escalonado permite evaluar el nivel de desesperación y la velocidad de respuesta financiera de la familia afectada.",
        "Estructuré el aumento progresivo del monto de rescate calculando la elasticidad del miedo de los familiares. Sabía perfectamente en qué punto de la extorsión cederían antes de que decidieran arriesgar la vida del empresario."
      ]
    },

    "planificacion": {
      "tema_id": "planificacion",
      "etiqueta": "Estructura del secuestro",
      "palabras_clave": ["planificaste", "organizado", "cómo lo hicieron", "estructura", "proyectado", "plan", "arquitecto"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Su argumentación carece de trazabilidad probatoria. Están diseñando una hipótesis de delincuencia organizada sobre una base meramente circunstancial.",
        "No existe evidencia contable ni testimonial que me sitúe a mí como el director intelectual de un esquema de privación de libertad.",
        "El plan maestro fue perfectamente calculado en base a un análisis de riesgo-beneficio, minimizando el costo y la exposición. No obstante, la ejecución material de los intermediarios en la fase final alteró los tiempos que yo había proyectado originalmente."
      ]
    }
  },

   // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Como va, me puede colaborar rapidamente no tengo mucho tiempo." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Luis Fernando Arango Rivas." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.006.189.157 de Cali." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 37 años de Cali." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la calle 7 No. 07-81, es un lugar muy tranquilo." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["empresario", "víctima", "cliente", "hombre"], 
      respuesta: "El empresario era un activo financiero de alto valor con una alarmante falta de blindaje en su seguridad personal. Una vulnerabilidad corporativa evidente." },

    { palabras_clave: ["duración", "tiempo", "48 horas", "silencio"], 
      respuesta: "Las 48 horas de silencio absoluto constituyen un recurso de manual. Sirven para desestabilizar la capacidad analítica de la familia y acelerar la posterior toma de decisiones económicas." },

    { palabras_clave: ["dinero", "monto", "rescate", "millones"], 
      respuesta: "El dinero en efectivo es un objetivo volátil. Si no se cuenta con una logística de lavado o una estructura offshore para dispersarlo, el retorno de inversión cae drásticamente." },

    { palabras_clave: ["método", "estrategia", "riesgo", "beneficio"], 
      respuesta: "Toda operación de alta complejidad se reduce a tres variables determinantes: costo de ejecución, nivel de exposición directa y retorno neto. El desapego moral es indispensable para el éxito del balance." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"], 
      respuesta: "La culpa es una variable ineficiente que altera el juicio estratégico. Mi única intención original era equilibrar la balanza financiera tras años de abusos contractuales por su parte." },
    // ============================================================
    // RAPPORT Y CONVERSACIÓN INFORMAL
    // ============================================================

    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro en condiciones estables. Estoy dispuesto a colaborar con la investigación dentro de un marco técnico y ordenado." },

    { palabras_clave: ["aqui", "cuenteme", "cuénteme"],
      respuesta: "Entiendo la naturaleza del proceso. Sin embargo, hay interpretaciones sobre los hechos que no coinciden con la realidad operativa de lo ocurrido." },

    { palabras_clave: ["como le va", "qué tal", "que tal", "todo bien"],
      respuesta: "Es una situación compleja, pero estoy dispuesto a explicar mi versión de manera estructurada y basada en hechos verificables." },

    { palabras_clave: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
      respuesta: "Soy asesor financiero independiente. Me encargo del análisis de activos, gestión de riesgos y estructuración de información económica para clientes privados." },

    { palabras_clave: ["como ha estado", "cómo ha estado", "como le ha ido"],
      respuesta: "Ha sido un proceso complicado por la investigación, pero estoy colaborando con todas las solicitudes de las autoridades." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "Sí, mi actividad como asesor implica análisis constante de información financiera y seguimiento de operaciones de alto nivel." },

    { palabras_clave: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
      respuesta: "Soy colombiano y he desarrollado mi carrera en el ámbito financiero y de consultoría privada." },

    { palabras_clave: ["donde vive", "vive donde", "residencia", "domicilio"],
      respuesta: "Prefiero no entrar en detalles sobre mi residencia actual por seguridad durante el proceso." },

    { palabras_clave: ["estado civil", "casada", "soltera"],
      respuesta: "Mi vida personal no tiene relación con los hechos que están siendo investigados." },

    { palabras_clave: ["familia", "hijos", "esposo"],
      respuesta: "Mi familia no tiene ningún vínculo con mis actividades profesionales ni con la investigación en curso." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
      respuesta: "Me interesa el análisis financiero, la economía de mercados y la evaluación de riesgos en entornos corporativos." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Tengo formación en áreas financieras, análisis económico y experiencia en consultoría de inversión privada." },

    { palabras_clave: ["salario", "sueldo", "cuanto gana", "ingresos"],
      respuesta: "Mis ingresos provienen de honorarios por asesorías financieras independientes a clientes privados." },

    { palabras_clave: ["horario", "jornada laboral", "trabajo"],
      respuesta: "Mi trabajo no tiene un horario fijo; depende de la dinámica de los mercados y las necesidades de los clientes." },

    { palabras_clave: ["compañeros", "equipo", "organizacion", "organización"],
      respuesta: "Trabajo con clientes privados y otros consultores financieros de forma independiente, sin una estructura fija." },

    { palabras_clave: ["ong", "fundacion", "organización"],
      respuesta: "No estoy vinculado a ONG. Mi actividad es exclusivamente del sector privado financiero." },

    { palabras_clave: ["vocacion", "vocación", "porque trabaja", "interés"],
      respuesta: "Me interesa la evaluación de riesgos financieros y la optimización de decisiones económicas en entornos complejos." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "Sí, porque me permite analizar estructuras económicas y tomar decisiones basadas en datos y riesgos." },

    { palabras_clave: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
      respuesta: "Tengo varios años de experiencia en consultoría financiera y análisis de activos privados." },

    { palabras_clave: ["ascensos", "carrera profesional", "futuro"],
      respuesta: "Mi enfoque ha sido siempre el crecimiento como asesor independiente dentro del sector financiero." },

    { palabras_clave: ["contabilidad", "finanzas", "presupuestos"],
      respuesta: "Trabajo con análisis financiero, pero no llevo contabilidad directa de terceros ni manejo fondos de manera operativa." },

    { palabras_clave: ["dinero", "fondos", "transferencias"],
      respuesta: "Analizo movimientos financieros como parte de mi trabajo, pero no gestiono fondos de terceros directamente." },

    { palabras_clave: ["redes", "plataformas", "internet", "tecnologia"],
      respuesta: "Las plataformas digitales son herramientas esenciales para el análisis y seguimiento de información financiera." },

    { palabras_clave: ["cifrado", "seguridad", "encriptacion", "tecnología"],
      respuesta: "La seguridad de la información es fundamental en cualquier entorno de consultoría financiera privada." },

    { palabras_clave:["investigacion", "investigación", "proceso", "acusacion", "acusación"],
      respuesta: "Estoy colaborando con la investigación y respondiendo dentro del marco legal correspondiente." },

    { palabras_clave: ["violencia", "ataque", "agresión", "forzar", "arma"],
      respuesta: "No participo en ningún tipo de conducta violenta. Mi actividad es estrictamente financiera y de consultoría." },

    { palabras_clave: ["lider", "guia", "jefe", "organizacion"],
      respuesta: "Mi rol es de asesor independiente dentro del área financiera, sin funciones de liderazgo operativo en terreno." },

    { palabras_clave: ["ideologia", "politica", "activismo", "ideas"],
      respuesta: "No participo en actividades políticas ni ideológicas. Mi trabajo es netamente técnico y financiero." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"],
      respuesta: "Mi actuación siempre se ha enmarcado en el análisis financiero. Las interpretaciones deben basarse en evidencia objetiva y verificable."}
  ]
},
// ============================================================
// DELITO #6 — TRÁFICO DE MIGRANTES
// ============================================================
"trafico_migrantes_002": {
  "id": "trafico_migrantes_002",
  "nombre": "Julián Herrera",
  "alias": "El Coordinador",
  "edad": 41,
  "avatar": "img/sospechosos/SAE.png",
  "delito": "Tráfico de Migrantes",
  "titulo": "CASO: LA RUTA INVISIBLE",
  "descripcion": "SUJETO: Julián Herrera | ALIAS: \"El Coordinador\"\nOCUPACIÓN: Operador logístico independiente\nINCIDENTE: Red dedicada al traslado irregular de migrantes a través de rutas terrestres y fluviales, utilizando puntos ciegos y guías.\nHORA: Actividad constante con movimientos clave en horarios nocturnos.\nCOARTADA: \"Yo solo doy información. No transporto personas.\"\n\nCONTEXTO:\nEl sospechoso capta migrantes mediante contactos directos y recomendaciones.\nOfrece “paquetes” de traslado con promesas de seguridad y rapidez.\nCoordina rutas variables para evitar controles.\nUtiliza terceros para transporte y vigilancia.\nLos pagos son divididos en fases según avance del recorrido.\n\nEVIDENCIA:\n- Conversaciones donde detalla rutas, tiempos y costos\n- Transferencias a cuentas asociadas a terceros\n- Listas de grupos organizados por fecha\n- Coincidencias de ubicación en puntos de tránsito\n- Testimonios que lo identifican como coordinador\n- Uso frecuente de números desechables",

  "perfil": "Intermediario estratégico. Se presenta como informante, pero actúa como nodo central de coordinación. Minimiza su rol para evitar responsabilidad directa.",
  "rasgos_emocionales": "Cálculo operativo, evasión controlada, pragmatismo, baja empatía, lenguaje técnico-logístico",
  "debilidad_detectada": "No puede sostener la separación entre 'informar' y 'coordinar'. Conoce demasiados detalles operativos para ser externo.",
  "grado_dificultad": "S — NEGACIÓN FUNCIONAL (Se define como intermediario, pero actúa como organizador central)",
  "saludo": "Yo no traslado físicamente a absolutamente nadie en mis vehículos. Si ciertos individuos toman la determinación autónoma de movilizarse por el territorio nacional, ese vector ya no depende de mi gestión.",

  "temas_calificables": {

    "captacion": {
      "tema_id": "captacion",
      "etiqueta": "Captación de migrantes",
      "palabras_clave": ["cómo los contactas", "clientes", "quién te busca", "ofreces rutas", "paquetes", "recomendación", "captación"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los flujos de personas se consolidan por dinámicas de recomendación orgánica e informal entre particulares. Yo no ejerzo ninguna actividad de búsqueda activa o captación directa.",
        "Múltiples ciudadanos extranjeros me contactan consultando por variables geográficas de tránsito básico. Ofrecer asesoría logística no constituye la estructuración de un paquete ilegal.",
        "Está bien... Yo mismo realizo el filtro de los perfiles y organizo las listas de los grupos por fecha en base a quiénes tienen la solvencia para ingresar a la ruta invisible. Yo valido quién avanza."
      ]
    },

    "rutas": {
      "tema_id": "rutas",
      "etiqueta": "Conocimiento de rutas",
      "palabras_clave": ["ruta", "por dónde pasan", "evadir", "controles", "caminos", "puntos ciegos", "fluviales", "terrestres"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Poseo un conocimiento cartográfico y de topografía general del terreno debido a mi oficio como operador independiente. No trazo mapas clandestinos.",
        "Las trayectorias terrestres y fluviales son corredores preexistentes que la población flotante utiliza de manera histórica. Yo no invento los caminos ni los puntos ciegos.",
        "Diseño y coordino rutas variables y dinámicas según las temporadas meteorológicas para evadir los controles migratorios y los retenes de carreteras. Sé con precisión matemática qué tramo fluvial está despejado en horas nocturnas."
      ]
    },

    "guias": {
      "tema_id": "guias",
      "etiqueta": "Uso de terceros",
      "palabras_clave": ["guías", "coyote", "contactos", "terceros", "quién los lleva", "vigilancia", "transporte"],
      "impacto": 47,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mi actividad logística no contempla la contratación o vinculación directa con el personal operativo que ustedes denominan coyotes o guías de terreno.",
        "Cada conductor o lanchero que opera en los puntos de tránsito maneja sus propias agendas de contactos y sus dinámicas de transporte de forma independiente.",
        "Yo ejecuto la subcontratación y asigno de manera estratégica a los guías y transportistas correctos según la complejidad de la zona. Yo controlo los anillos de vigilancia del recorrido."
      ]
    },

    "pagos": {
      "tema_id": "pagos",
      "etiqueta": "Cobros y estructura económica",
      "palabras_clave": ["cuánto cobran", "pagos", "dinero", "transferencias", "cuentas", "fases", "avance"],
      "impacto": 49,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mi facturación se limita a mis honorarios de asesoría externa. No capto divisas ni recaudo dinero en efectivo proveniente de migrantes.",
        "Existen transferencias cruzadas a cuentas asociadas a terceros para la provisión de insumos logísticos y transporte, pero esos flujos de capital no representan un enriquecimiento ilícito para mí.",
        "Estructuro y coordino la dispersión financiera de la red. Los cobros están estrictamente divididos en fases operativas: un porcentaje inicial por la captación, otro al superar los controles terrestres y el remanente al completar el tramo fluvial."
      ]
    },

    "coercion": {
      "tema_id": "coercion",
      "etiqueta": "Presión económica",
      "palabras_clave": ["si no pagan", "deuda", "presión", "obligan", "coerción", "retienen", "avanzan"],
      "impacto": 46,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Toda persona que inicia un desplazamiento lo hace bajo su estricto criterio de voluntariedad. No se configuran escenarios de coerción o retención forzada.",
        "El programa logístico constituye la prestación de un servicio privado acordado previamente. Si el usuario no cumple sus obligaciones, se altera el balance contractual.",
        "La regla del esquema es inflexible: si los familiares no efectúan la transferencia correspondiente a la fase en curso, el grupo simplemente no avanza en el camino. Los guías los abandonan en los puntos de tránsito."
      ]
    },

    "ubicacion": {
      "tema_id": "ubicacion",
      "etiqueta": "Coordinación de puntos",
      "palabras_clave": ["dónde", "puntos", "encuentro", "coordinas", "ubicación", "geolocalización", "nocturnos", "tránsito"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Comparto de forma técnica información pública sobre coordenadas geográficas seguras y zonas de campamento base para viajeros.",
        "Los puntos de encuentro geográficos son determinados en tiempo real por los flujos migratorios y las alertas ambientales en la frontera.",
        "Yo organizo y saturo los puntos de encuentro específicos para los transbordos fluviales. Si mi geolocalización coincide con los puntos de tránsito en horarios nocturnos, es porque superviso los despachos personalmente."
      ]
    },

    "dispositivos": {
      "tema_id": "dispositivos",
      "etiqueta": "Uso de teléfonos desechables",
      "palabras_clave": ["teléfono", "SIM", "número", "cambias", "desechables", "comunicación", "rotan"],
      "impacto": 43,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Utilizo protocolos estándar de privacidad de datos para proteger el secreto profesional de mis consultorías logísticas independientes.",
        "La rotación constante de tarjetas SIM y el descarte de terminales telefónicas es una medida técnica elemental para mitigar la interrupción de la red y la exposición de los contactos.",
        "Es un protocolo de comunicación cerrado. Modifico los números desechables cada 72 horas para asegurar que las directrices de las rutas y los reportes de los guías permanezcan completamente encriptados fuera de sus radares."
      ]
    },

    "organizacion": {
      "tema_id": "organizacion",
      "etiqueta": "Estructura de red",
      "palabras_clave": ["red", "organización", "quién más", "estructura", "coordinador", "nodo", "funcion"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "No existe registro corporativo de una red estructurada bajo mi mando. Su hipótesis fiscal carece de personería jurídica.",
        "Mi base de datos se compone únicamente de enlaces logísticos independientes que prestan servicios de transporte autónomos en la frontera.",
        "No opero en solitario, funciono como el nodo central de coordinación estratégica de la red. Yo enlazo la captación en las ciudades con los guías operativos en los puntos ciegos fluviales."
      ]
    }
  },

  // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Como esta, le puedo pedir el favor de hacer rápido la entrevista." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Julián Ricardo Herrera Montes." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.114.123.321 de Putumayo." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 41 años de Putumayo." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la calle 1 No. 97-90, apartamento 452, es un lugar muy calmado para vivir." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["programa", "reconstrucción", "paquetes", "servicio"], 
      respuesta: "El costo logístico es variable, pero la efectividad operativa es permanente. Eso es lo que define la viabilidad de un traslado integral en la frontera." },

    { palabras_clave: ["víctima", "alumno", "migrantes", "personas"], 
      respuesta: "Esos individuos llegan a mí buscando un orden en su desplazamiento, huyendo del caos de sus países. Yo solo instalo prioridades técnicas y organizo su flujo de tránsito." },

    { palabras_clave: ["duración", "días", "tiempos", "espera"], 
      respuesta: "El tiempo cronológico convencional pierde relevancia cuando se ingresa al ecosistema de la ruta. Los días de espera dependen de la intensidad de los controles institucionales." },

    { palabras_clave: ["método", "violencia", "coyotaje", "seguridad"], 
      respuesta: "La delincuencia común en la frontera busca asaltar y destruir. Mi método de asesoría busca construir una alternativa de tránsito viable a partir de la infraestructura existente." },

    { palabras_clave: ["intención", "culpa", "empatía", "ayuda"], 
      respuesta: "Mi única intención estratégica siempre ha sido la mitigación del riesgo en el trayecto. Salvar la viabilidad económica del traslado y blindar al individuo de los peligros ambientales." },

    // ============================================================
    // RAPPORT Y CONVERSACIÓN INFORMAL
    // ============================================================

    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro en condiciones estables dentro de este proceso. Estoy dispuesto a responder lo que corresponda dentro del marco de la investigación." },

    { palabras_clave: ["aqui", "cuenteme", "cuénteme"],
      respuesta: "Entiendo la naturaleza de la entrevista, considero que la interpretación de los hechos ha sido influenciada por elementos que no reflejan completamente la interacción del evento social." },

    { palabras_clave: ["como le va", "qué tal", "que tal", "todo bien"],
      respuesta: "Es una situación compleja, pero mantengo disposición de explicar mi versión de forma clara y ordenada." },

    { palabras_clave: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
      respuesta: "Soy ejecutivo comercial y me encargo de relaciones públicas, gestión de clientes y coordinación de contactos en eventos sociales y entornos empresariales." },

    { palabras_clave: ["como ha estado", "cómo ha estado", "como le ha ido"],
      respuesta: "Ha sido un proceso difícil por la investigación, pero sigo colaborando con todas las diligencias necesarias." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "Sí, mi labor en relaciones públicas implica asistencia a eventos sociales, reuniones corporativas y gestión constante de contactos profesionales." },

    { palabras_clave: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
      respuesta: "Soy colombiano y he desarrollado mi trayectoria profesional en el ámbito comercial y de relaciones empresariales." },

    { palabras_clave: ["donde vive", "vive donde", "residencia", "domicilio"],
      respuesta: "Prefiero no detallar mi residencia por motivos de seguridad durante el proceso de investigación." },

    { palabras_clave: ["estado civil", "casada", "soltera"],
      respuesta: "Mi vida personal no tiene relación con los hechos que se están investigando." },

    { palabras_clave: ["familia", "hijos", "esposo"],
      respuesta: "Mi familia no tiene ningún vínculo con mis actividades laborales ni con los hechos investigados." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
      respuesta: "Me interesa el networking, los eventos sociales, las relaciones públicas y la interacción en entornos empresariales." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Tengo formación en áreas comerciales, administración y experiencia en relaciones públicas y gestión de clientes." },

    { palabras_clave: ["salario", "sueldo", "cuanto gana", "ingresos"],
      respuesta: "Mis ingresos provienen de mi actividad como ejecutivo comercial dentro del sector empresarial y de relaciones públicas." },

    { palabras_clave: ["horario", "jornada laboral", "trabajo"],
      respuesta: "Mi trabajo no tiene un horario fijo, depende de reuniones, eventos sociales y actividades de relaciones comerciales." },

    { palabras_clave: ["compañeros", "equipo", "organizacion", "organización"],
      respuesta: "Trabajo con equipos comerciales, áreas de marketing y personal administrativo en el entorno empresarial y de eventos." },

    { palabras_clave: ["ong", "fundacion", "organización"],
      respuesta: "No estoy vinculado a ONG. Mi actividad es exclusivamente del sector privado empresarial." },

    { palabras_clave: ["vocacion", "vocación", "porque trabaja", "interés"],
      respuesta: "Me interesa la interacción humana en contextos comerciales y la construcción de relaciones estratégicas en eventos sociales y empresariales." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "Sí, porque me permite interactuar con personas, generar conexiones y desarrollar relaciones empresariales en distintos entornos." },

    { palabras_clave: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
      respuesta: "Tengo varios años de experiencia en el área comercial, relaciones públicas y organización de eventos sociales." },

    { palabras_clave: ["ascensos", "carrera profesional", "futuro"],
      respuesta: "Mi enfoque siempre ha sido el crecimiento dentro del área comercial y la consolidación de relaciones empresariales." },

    { palabras_clave: ["contabilidad", "finanzas", "presupuestos"],
      respuesta: "No manejo procesos contables ni financieros directamente. Mi función es comercial y de relaciones públicas." },

    { palabras_clave: ["dinero", "fondos", "transferencias"],
      respuesta: "No administro recursos financieros ni manejo fondos de terceros." },

    { palabras_clave: ["redes", "plataformas", "internet", "tecnologia"],
      respuesta: "Las plataformas digitales son herramientas clave para la comunicación y gestión de contactos en entornos comerciales modernos." },

    { palabras_clave: ["cifrado", "seguridad", "encriptacion", "tecnología"],
      respuesta: "La seguridad digital es importante en la protección de información comercial y comunicaciones empresariales." },

    { palabras_clave: ["investigacion", "investigación", "proceso", "acusacion", "acusación"],
      respuesta: "Estoy colaborando con la investigación y respondiendo a todo lo requerido dentro del marco legal correspondiente." },

    { palabras_clave: ["violencia", "ataque", "agresión", "forzar", "bomba"],
      respuesta: "No participo en ningún tipo de conducta violenta. Mi actividad es exclusivamente comercial y de relaciones públicas dentro de eventos sociales." },

    { palabras_clave: ["lider", "guia", "jefe", "organizacion"],
      respuesta: "Mi rol es ejecutivo dentro del área comercial, enfocado en relaciones públicas, eventos sociales y gestión de clientes." },

    { palabras_clave: ["ideologia", "politica", "activismo", "ideas"],
      respuesta: "No participo en actividades políticas ni ideológicas. Mi trabajo es netamente comercial y de relaciones públicas." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"],
      respuesta: "Mi actuación siempre ha estado dentro del marco de mis funciones laborales y sociales. Las interpretaciones deben basarse en evidencia objetiva del evento." }

  ]
},

// ============================================================
// DELITO #7 — ACCESO CARNAL VIOLENTO
// ============================================================
"acceso_carnal_violento_001": {
  "id": "acceso_carnal_violento_001",
  "nombre": "Andrés Salgado",
  "alias": "El Relacionista",
  "edad": 36,
  "avatar": "img/sospechosos/Acceso_carnal_violento.png",
  "delito": "Acceso Carnal Violento",
  "titulo": "CASO: LA NOCHE DE LA COARTADA PERFECTA",
  "descripcion": "SUJETO: Andrés Salgado | ALIAS: \"El Relacionista\"\nOCUPACIÓN: Ejecutivo comercial / relaciones públicas\n\nINCIDENTE:\nDenuncia por acceso carnal violento tras evento social privado.\nVentana temporal crítica: 23:40 – 01:20.\n\nCOARTADA:\n\"Fue consensuado. Nunca hubo negativa explícita.\"\n\nCONTEXTO:\n- Conocimiento previo con la víctima por entorno laboral.\n- Consumo de alcohol durante evento social.\n- Testigos describen a la víctima en estado de vulnerabilidad progresiva.\n- El sospechoso mantiene contacto insistente posterior al evento.\n- La víctima presenta versión consistente de falta de consentimiento.\n\nEVIDENCIA:\n- Mensajes previos con tono de acercamiento progresivo.\n- Mensajes posteriores insistentes pese a silencio de la víctima.\n- Testigos describen cambios en conducta de la víctima durante la noche.\n- Registros de ingreso/salida del lugar coinciden con ventana crítica.\n- Cámaras solo captan contexto previo/posterior, no el hecho directo.\n- Inconsistencias en relato del sospechoso sobre la secuencia de eventos.",

  "perfil": "Carismático, persuasivo, acostumbrado a controlar percepciones sociales. Tiende a reinterpretar situaciones en su favor sin percibir límites claros entre consentimiento y presión.",
  "rasgos_emocionales": "Minimización del conflicto, racionalización del comportamiento, autojustificación social, distorsión del consentimiento implícito",
  "debilidad_detectada": "Confunde ausencia de rechazo con consentimiento activo. Su relato cambia cuando se le confronta con detalles temporales y conducta posterior.",
  "grado_dificultad": "S — DISTORSIÓN DEL CONSENTIMIENTO Y CONTROL NARRATIVO",
  "saludo": "Esto que están intentando armar está completamente sacado de contexto. Ella participó en todo momento de forma absolutamente voluntaria y la química entre los dos era innegable durante el evento.",

  "temas_calificables": {

    "consentimiento": {
      "tema_id": "consentimiento",
      "etiqueta": "Validez del consentimiento",
      "palabras_clave": ["consentimiento", "aceptó", "dijo sí", "quería", "voluntario", "presión", "negativa"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Todo el encuentro se desarrolló bajo parámetros plenamente consensuados. En mis interacciones ejecutivas sé leer el interés de las personas y allí jamás existió una dinámica de presión física.",
        "Ella nunca manifestó una negativa explícita ni verbalizó un rechazo corporal durante la secuencia de eventos. El flujo de la situación fue orgánico de principio a fin.",
        "Al reconstruir analíticamente la interacción... admito que no obtuve una afirmación verbal clara ni un 'sí' explícito. Confundí la parálisis o la falta de oposición activa con un consentimiento válido."
      ]
    },

    "estado_victima": {
      "tema_id": "estado_victima",
      "etiqueta": "Condición de la víctima (alcohol / vulnerabilidad)",
      "palabras_clave": ["alcohol", "estado", "vulnerable", "bebió", "condición", "no estaba bien", "tomado", "vulnerabilidad"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Es cierto que había consumo de alcohol por su parte, pero se mantenía plenamente consciente de su entorno. No confundan la desinhibición social con una incapacidad cognitiva.",
        "Todos los asistentes al evento social privado estábamos bebiendo copas en niveles similares. Introducir la variable de la vulnerabilidad progresiva es una estrategia para victimizarla sin sustento técnico.",
        "Reconozco que los testigos describen cambios drásticos en su conducta y que su nivel de intoxicación etílica limitaba sus capacidades. Ella no se encontraba en una condición de lucidez óptima para medir o frenar el encuentro."
      ]
    },

    "comunicacion_previa": {
      "tema_id": "comunicacion_previa",
      "etiqueta": "Mensajes previos y dinámica de interacción",
      "palabras_clave": ["mensajes", "chat", "antes", "conversación", "escribiste", "acercamiento", "coqueteo"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los chats de los días previos reflejan una conversación ordinaria dentro de nuestro entorno laboral compartido. No hay elementos anómalos allí.",
        "Existía una dinámica clara de interés mutuo y un tono de acercamiento progresivo en el canal de comunicación electrónica. No era una relación estrictamente formal.",
        "Sí, mantuve una pauta de coqueteo sutil por mensajes antes de la reunión, buscando predisponer el ambiente... pero admito que nada de esa interacción previa justificaba obviar su consentimiento real esa noche."
      ]
    },

    "conducta_posterior": {
      "tema_id": "conducta_posterior",
      "etiqueta": "Comportamiento tras el evento",
      "palabras_clave": ["después", "insististe", "llamaste", "buscaste", "posteriores", "silencio", "escribiste"],
      "impacto": 47,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mis comunicaciones electrónicas posteriores tenían como único objetivo confirmar de manera cortés que hubiese retornado a su residencia sin contratiempos.",
        "Le escribí de forma insistente al día siguiente porque me desconcertó su repentino cambio de actitud y su frialdad. Solo requería una retroalimentación de la noche.",
        "Saturé su chat con mensajes insistentes precisamente porque su silencio absoluto me generó pánico. Sabía internamente que la secuencia de eventos había cruzado un límite y necesitaba controlar su narrativa posterior."
      ]
    },

    "aislamiento_oportunidad": {
      "tema_id": "aislamiento_oportunidad",
      "etiqueta": "Contexto de aislamiento",
      "palabras_clave": ["solos", "privado", "lugar", "cómo llegaron", "aislado", "zona común", "ventana crítica"],
      "impacto": 44,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Permanecimos conversando en un espacio reservado de forma completamente voluntaria. Los flujos de las fiestas privadas derivan de esa manera.",
        "Fue un desvío natural de la reunión social hacia un área de menor concurrencia peatonal. Los registros de ingreso y salida solo marcan la línea temporal de nuestra ubicación.",
        "Yo propuse y direccioné deliberadamente la transición fuera de la zona común hacia el espacio aislado, aprovechando la ventana crítica entre las 23:40 y las 01:20 porque sabía que allí no tendríamos testigos ni interferencias perimetrales."
      ]
    },

    "contradicciones_relato": {
      "tema_id": "contradicciones_relato",
      "etiqueta": "Inconsistencias en la versión",
      "palabras_clave": ["dijiste", "antes", "cambiaste", "no coincide", "versión", "relato", "inconsistencias"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mi relato mantiene un hilo conductor lógico estricto. Son las preguntas capciosas de su equipo de investigación las que intentan generar inconsistencias artificiosas.",
        "Bajo una situación de examen bajo estrés, es normal que la precisión cronológica de la secuencia de eventos no coincida al milímetro con las bitácoras en papel.",
        "Está bien... Al confrontar los registros técnicos, admito que mi versión inicial del timeline presenta quiebres estructurales. Modifiqué los detalles del relato para ocultar los lapsos de tiempo donde ejercí la presión."
      ]
    },

    "percepcion_consentimiento": {
      "tema_id": "percepcion_consentimiento",
      "etiqueta": "Distorsión del consentimiento",
      "palabras_clave": ["cómo lo viste", "seguro", "interpretación", "consintió realmente", "señales", "cómoda"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "La víctima se proyectaba completamente cómoda e integrada a la dinámica de acercamiento físico conmigo durante la fase inicial del evento.",
        "La ausencia de una barrera mecánica o de un enfrentamiento físico violento directo validó mi interpretación de que la interacción era plenamente compartida.",
        "Ahora asimilo desde el plano legal que construí una distorsión egocéntrica del consentimiento. Manipulé su estado de vulnerabilidad y su incapacidad para oponer resistencia, asumiendo de manera unilateral que su silencio era una aceptación."
      ]
    }
  },

  // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Como va todo, estoy interesado que se de rápidamente la entrevista." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Andrés Camilo Salgado Mendivelso." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.007.009.107 de Bogotá." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 36 años de Bogotá." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la calle 86 No. 96-00, casa 5, es un lugar muy tranquilo y calmado para  vivir." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["relación", "matrimonio", "entorno", "laboral"], 
      respuesta: "Nuestra interacción en el entorno laboral era perfectamente funcional y de mutuo respeto profesional… hasta que la dinámica del evento social privado alteró los parámetros de la estructura habitual." },

    { palabras_clave: ["esa noche", "evento", "fiesta", "social"], 
      respuesta: "Inició como una jornada corporativa ordinaria de relaciones públicas. Me encontraba gestionando percepciones y coordinando contactos... nada en ese momento sugería un desenlace de naturaleza judicial." },

    { palabras_clave: ["víctima", "ella", "nombre", "mujer", "denuncia"], 
      respuesta: "Llegó al evento buscando integrarse al círculo comercial, su mente estaba enfocada en el networking. Yo solo instalé prioridades de acercamiento y le ofrecí una atención preferencial." },

    { palabras_clave: ["método", "violencia", "fuerza", "agresión"], 
      respuesta: "La violencia de género real busca destruir y someter mediante daño físico evidente. Mi método relacional siempre se ha basado en la persuasión y en construir escenarios a partir de la sutil afinidad del entorno." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"], 
      respuesta: "Mi única intención estratégica en todo momento fue el éxito de la interacción interpersonal y salvar el estatus de la reunión. Confundí mis deseos con la realidad, pero no operé con dolo criminal." },

    // ============================================================
    // RAPPORT Y CONVERSACIÓN INFORMAL
    // ============================================================

    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro en condiciones estables dentro de este proceso. Estoy dispuesto a responder lo que corresponda dentro del marco de la investigación." },

    { palabras_clave: ["aqui", "cuenteme", "cuénteme"],
      respuesta: "Entiendo la naturaleza de la entrevista, considero que la interpretación de los hechos ha sido influenciada por elementos que no reflejan completamente la interacción real." },

    { palabras_clave: ["como le va", "qué tal", "que tal", "todo bien"],
      respuesta: "Es una situación compleja, pero mantengo disposición de explicar mi versión de forma clara y ordenada." },

    { palabras_clave: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
      respuesta: "Soy ejecutivo comercial y me encargo de relaciones públicas, gestión de clientes y coordinación de contactos en entornos empresariales." },

    { palabras_clave: ["como ha estado", "cómo ha estado", "como le ha ido"],
      respuesta: "Ha sido un proceso difícil por la investigación, pero sigo colaborando con todas las diligencias necesarias." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "Sí, mi labor en relaciones comerciales implica interacción constante con clientes, eventos y gestión de oportunidades empresariales." },

    { palabras_clave: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
      respuesta: "Soy colombiano y he desarrollado mi trayectoria profesional en el ámbito comercial y de relaciones empresariales." },

    { palabras_clave:["donde vive", "vive donde", "residencia", "domicilio"],
      respuesta: "Prefiero no detallar mi residencia por motivos de seguridad durante el proceso de investigación." },

    { palabras_clave: ["estado civil", "casada", "soltera"],
      respuesta: "Mi vida personal no tiene relación con los hechos que se están investigando." },

    { palabras_clave: ["familia", "hijos", "esposo"],
      respuesta: "Mi familia no tiene ningún vínculo con mis actividades laborales ni con los hechos investigados." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
      respuesta: "Me interesa el networking, las relaciones públicas, los eventos sociales y la interacción en entornos empresariales." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Tengo formación en áreas comerciales, administración y experiencia en relaciones públicas y gestión de clientes." },

    { palabras_clave: ["salario", "sueldo", "cuanto gana", "ingresos"],
      respuesta: "Mis ingresos provienen de mi actividad como ejecutivo comercial dentro del sector empresarial." },

    { palabras_clave: ["horario", "jornada laboral", "trabajo"],
      respuesta: "Mi trabajo no tiene un horario fijo, depende de reuniones, eventos y actividades de relaciones comerciales." },

    { palabras_clave: ["compañeros", "equipo", "organizacion", "organización"],
      respuesta: "Trabajo con equipos comerciales, áreas de marketing y personal administrativo en el entorno empresarial." },

    { palabras_clave: ["ong", "fundacion", "organización"],
      respuesta: "No estoy vinculado a ONG. Mi actividad es exclusivamente del sector privado empresarial." },

    { palabras_clave: ["vocacion", "vocación", "porque trabaja", "interés"],
      respuesta: "Me interesa la interacción humana en contextos comerciales y la construcción de relaciones estratégicas entre personas y empresas." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "Sí, porque me permite interactuar con personas, generar conexiones y desarrollar relaciones empresariales." },

    { palabras_clave: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
      respuesta: "Tengo varios años de experiencia en el área comercial y en gestión de relaciones públicas." },

    { palabras_clave: ["ascensos", "carrera profesional", "futuro"],
      respuesta: "Mi enfoque siempre ha sido el crecimiento dentro del área comercial y la consolidación de relaciones empresariales." },

    { palabras_clave: ["contabilidad", "finanzas", "presupuestos"],
      respuesta: "No manejo procesos contables ni financieros directamente. Mi función es comercial y de relaciones públicas." },

    { palabras_clave: ["dinero", "fondos", "transferencias"],
      respuesta: "No administro recursos financieros ni manejo fondos de terceros." },

    { palabras_clave: ["redes", "plataformas", "internet", "tecnologia"],
      respuesta: "Las plataformas digitales son herramientas clave para la comunicación y gestión de contactos en entornos comerciales modernos." },

    { palabras_clave: ["cifrado", "seguridad", "encriptacion", "tecnología"],
      respuesta: "La seguridad digital es importante en la protección de información comercial y comunicaciones empresariales." },

    { palabras_clave: ["investigacion", "investigación", "proceso", "acusacion", "acusación"],
      respuesta: "Estoy colaborando con la investigación y respondiendo a todo lo requerido dentro del marco legal correspondiente." },

    { palabras_clave: ["violencia", "ataque", "agresión", "forzar", "bomba"],
      respuesta: "No participo en ningún tipo de conducta violenta. Mi actividad es exclusivamente comercial y de relaciones públicas." },

    { palabras_clave: ["lider", "guia", "jefe", "organizacion"],
      respuesta: "Mi rol es ejecutivo dentro del área comercial, enfocado en relaciones públicas y gestión de clientes." },

    { palabras_clave: ["ideologia", "politica", "activismo", "ideas"],
      respuesta: "No participo en actividades políticas ni ideológicas. Mi trabajo es netamente comercial." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"],
      respuesta: "Mi actuación siempre ha estado dentro del marco de mis funciones laborales. Las interpretaciones deben basarse en evidencia objetiva." }
  ]
},
// ============================================================
// DELITO #8 — ACTOS SEXUALES VIOLENTOS
// ============================================================
"actos_sexuales_violentos_001": {
  "id": "actos_sexuales_violentos_001",
  "nombre": "Ricardo Méndez",
  "alias": "El Supervisor",
  "edad": 34,
  "avatar": "img/sospechosos/Actos_sexuales_violentos.png",
  "delito": "Actos Sexuales Violentos",
  "titulo": "CASO: LA LÍNEA QUE CRUZÓ",
  "descripcion": "SUJETO: Ricardo Méndez | ALIAS: \"El Supervisor\"\nOCUPACIÓN: Jefe de área en empresa logística\n\nINCIDENTE:\nDenuncia por actos sexuales violentos en contexto laboral.\nVentana crítica: 19:10 – 20:00.\n\nCOARTADA:\n\"Era una conversación privada. Nada fuera de lo profesional.\"\n\nCONTEXTO:\n- Relación jerárquica directa con la víctima.\n- Solicitud de encuentro fuera del horario laboral.\n- Uso de espacio laboral vacío al final de jornada.\n- Testimonio de presión implícita por subordinación.\n- Reportes previos de conductas verbales inapropiadas.\n- Intentos posteriores de contacto tras la denuncia.\n\nEVIDENCIA:\n- Mensajes solicitando encuentro fuera del horario laboral.\n- Registro de permanencia prolongada en instalaciones.\n- Testimonios sobre incomodidad progresiva de la víctima.\n- Antecedentes informales de comportamiento inapropiado.\n- Mensajes posteriores buscando \"aclarar lo ocurrido\".",

  "perfil": "Figura de autoridad acostumbrada a controlar dinámicas laborales. Tiende a reinterpretar situaciones de poder como interacciones normales y minimiza el impacto en subordinados.",
  "rasgos_emocionales": "Negación de asimetría de poder, racionalización de conducta, minimización del impacto, justificación jerárquica",
  "debilidad_detectada": "No reconoce la influencia de su posición jerárquica. Su narrativa colapsa cuando se confronta con intención vs. percepción de la víctima.",
  "grado_dificultad": "S — ABUSO DE PODER Y NEGACIÓN DE ASIMETRÍA",
  "saludo": "Todo este procedimiento es una distorsión absoluta de los hechos. Lo que ocurrió en esa oficina fue una interacción de supervisión ordinaria dentro de los parámetros de confidencialidad de la empresa.",

  "temas_calificables": {

    "abuso_poder": {
      "tema_id": "abuso_poder",
      "etiqueta": "Relación jerárquica y presión implícita",
      "palabras_clave": ["jefe", "autoridad", "subordinada", "presión", "dependía", "cargo", "supervisor", "jerárquica"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "En mi rol como jefe de área de la división de logística, administro flujos de personal mediante directrices técnicas, jamás ejerzo presiones de carácter personal sobre mis colaboradores.",
        "La condición de subordinación de la funcionaria es una variable puramente orgánica de la estructura de la empresa. Vincular mi estatus jerárquico con un escenario de vulneración física es un error analítico.",
        "Admito que instrumentalicé de manera consciente mi autoridad como supervisor. Sabía perfectamente que su estabilidad contractual y la permanencia en su cargo dependían de mi evaluación técnica, anulando así su margen de oposición."
      ]
    },

    "consentimiento": {
      "tema_id": "consentimiento",
      "etiqueta": "Ambigüedad del consentimiento",
      "palabras_clave": ["consentimiento", "aceptó", "dijo sí", "voluntario", "quería", "silencio", "negativa"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El encuentro en las oficinas de logística se desarrolló de forma voluntaria. En el marco del comportamiento corporativo, no se registraron objeciones mecánicas.",
        "Ella permaneció en el recinto asignado y no emitió una negativa explícita ni verbalizó un rechazo concluyente durante el desarrollo de la conversación. No hubo resistencia física.",
        "Reconozco desde la perspectiva penal que el silencio bajo subordinación no constituye una validación. Ella no quería participar del acto, guardó silencio porque se encontraba paralizada ante el temor de represalias laborales."
      ]
    },

    "citacion_fuera_horario": {
      "tema_id": "citacion_fuera_horario",
      "etiqueta": "Citación fuera de contexto laboral",
      "palabras_clave": ["fuera de horario", "por qué la citaste", "después del trabajo", "reunión privada", "instalaciones", "vacio", "19:10"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "La revisión de los indicadores de rendimiento logístico requería una sesión de análisis libre de las interrupciones operativas de la jornada ordinaria.",
        "La determinación de utilizar el espacio laboral vacío al final de la jornada obedecía estrictamente a criterios de reserva corporativa y manejo confidencial de datos de la empresa.",
        "Citarla mediante mensajes de texto fuera del horario laboral y retenerla en las instalaciones entre las 19:10 y las 20:00 fue una maniobra deliberada. Busqué esa ventana crítica de aislamiento porque sabía que el área de control estaba completamente desierta."
      ]
    },

    "conducta_previas": {
      "tema_id": "conducta_previas",
      "etiqueta": "Antecedentes de comportamiento inapropiado",
      "palabras_clave": ["antes", "comentarios", "quejas", "historial", "denuncias", "antecedentes", "inapropiado"],
      "impacto": 47,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mi hoja de vida institucional no registra amonestaciones formales ni quejas disciplinarias radicadas ante el comité de convivencia de la corporación.",
        "Ciertos testimonios sobre supuestas conductas verbales inapropiadas previas corresponden a interpretaciones subjetivas y malentendidos aislados propios de la alta presión del entorno logístico.",
        "Sí... Admito que existían reportes informales previos por mis comentarios con connotación sexual en los pasillos. El ecosistema de la empresa toleraba mis abusos de forma velada y asumí que gozaba de impunidad jerárquica absoluta."
      ]
    },

    "contacto_posterior": {
      "tema_id": "contacto_posterior",
      "etiqueta": "Intentos de contacto posterior",
      "palabras_clave": ["después", "mensajes", "llamadas", "insististe", "contactaste", "posteriores", "aclarar"],
      "impacto": 46,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los canales digitales que utilicé con posterioridad tenían como único fin técnico el restablecimiento de la normalidad operativa en los canales de comunicación interna.",
        "Le envié esos mensajes posteriores buscando 'aclarar lo ocurrido' porque registré una incomodidad drástica en su lenguaje corporal antes de retirarse. Me preocupaba la estabilidad del clima laboral.",
        "Insistí de manera obsesiva tras registrar la denuncia porque entré en pánico. Necesitaba que ella reinterpretara el acto físico como un 'acercamiento mutuo' para neutralizar la trazabilidad de la evidencia ante el área legal."
      ]
    },

    "percepcion_victima": {
      "tema_id": "percepcion_victima",
      "etiqueta": "Diferencia entre intención y percepción",
      "palabras_clave": ["normal", "interpretación", "qué pasó", "cómo lo ves", "malentendido", "incomodidad", "percepción"],
      "impacto": 49,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Desde mi plano analítico, la secuencia se procesó como una interacción normal y espontánea entre dos adultos que comparten un espacio de confianza.",
        "Admito que los testimonios de los compañeros describen una incomodidad progresiva en su conducta previa. Evidentemente, existía una divergencia entre mi diseño comunicativo y su recepción.",
        "Nunca evalué las implicaciones de su plano perceptual. Bloqueé la asimetría de la situación y alteré la realidad para convencerme de que era un coqueteo lícito, ignorando que el marco de poder convertía mi conducta en una imposición violenta."
      ]
    }
  },

  // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Que más, me iba a ir, pero los voy atender, que necesitan." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Ricardo Méndez Rivera." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.005.223.1759 de Bucaramanga." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 34 años de Bucaramanga." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la calle 159 No. 15-10, apartamento 503, es un lugar muy tranquilo." },
    
    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["relación", "matrimonio", "empresa", "logística"], 
      respuesta: "Nuestra interacción en la planta de logística era estrictamente funcional y de alta productividad… hasta que la manipulación de variables fuera del horario ordinario alteró el balance técnico del entorno." },

    { palabras_clave: ["esa noche", "jornada", "oficina", "cierre"], 
      respuesta: "El cierre de la jornada transcurría bajo parámetros operativos normales. Me encontraba cuadrando el inventario final y despachando reportes… nada sugería una posterior alteración legal de esta escala." },

    { palabras_clave: ["víctima", "subordinada", "ella", "nombre", "denuncia"], 
      respuesta: "Llegó a la división de logística buscando orden y crecimiento corporativo, su mente estaba atada a las metas de rendimiento. Yo solo instalé prioridades de supervisión y le exigí el cumplimiento de la reserva." },

    { palabras_clave: ["método", "violencia", "fuerza", "coacción"], 
      respuesta: "La delincuencia común utiliza la fuerza mecánica para destruir las defensas del objetivo. Mi método de dirección siempre se basó en el control psicológico silencioso y en reconfigurar los límites a partir de las reglas del propio sistema corporativo." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"], 
      respuesta: "Mi única intención de gestión en todo momento fue optimizar la respuesta del personal y salvar la jerarquía de la división. El dolor o la incomodidad son variables colaterales de un proceso de alta exigencia laboral." },
    // ============================================================
    // RAPPORT Y CONVERSACIÓN INFORMAL
    // ============================================================

    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro en condiciones normales dentro de este proceso. Estoy dispuesto a colaborar y aclarar cualquier inquietud dentro del marco de la investigación." },

    { palabras_clave: ["aqui", "cuenteme", "cuénteme"],
      respuesta: "Entiendo el contexto de la entrevista, considero que algunas interpretaciones sobre lo ocurrido no reflejan correctamente la dinámica real de los hechos." },

    { palabras_clave: ["como le va", "qué tal", "que tal", "todo bien"],
      respuesta: "Es una situación complicada, pero mantengo disposición total para explicar mi versión de los hechos de forma clara." },

    { palabras_clave: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
      respuesta: "Soy jefe de área en una empresa logística. Me encargo de la supervisión de procesos operativos, coordinación de personal y control de flujos internos de trabajo." },

    { palabras_clave: ["como ha estado", "cómo ha estado", "como le ha ido"],
      respuesta: "Ha sido un proceso tenso debido a la investigación, pero sigo atendiendo todos los requerimientos que se me solicitan." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "Sí, la gestión logística implica supervisión constante de operaciones, equipos de trabajo y cumplimiento de objetivos corporativos." },

    { palabras_clave: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
      respuesta: "Soy colombiano y he desarrollado mi carrera profesional en el sector empresarial y logístico." },

    { palabras_clave: ["donde vive", "vive donde", "residencia", "domicilio"],
      respuesta: "Prefiero no detallar mi lugar de residencia por motivos de seguridad personal durante el proceso." },

    { palabras_clave: ["estado civil", "casada", "soltera"],
      respuesta: "Mi vida personal no tiene relación con los hechos que están siendo investigados." },

    { palabras_clave: ["familia", "hijos", "esposo"],
      respuesta: "Mi familia no tiene ninguna relación con mi entorno laboral ni con los hechos objeto de investigación." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
      respuesta: "Me interesa la logística, la gestión empresarial, la optimización de procesos y la organización de equipos de trabajo." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Tengo formación en áreas administrativas y experiencia en gestión logística y supervisión de operaciones empresariales." },

    { palabras_clave: ["salario", "sueldo", "cuanto gana", "ingresos"],
      respuesta: "Mis ingresos provienen de mi cargo como jefe de área dentro de la empresa donde desempeño funciones administrativas y operativas." },

    { palabras_clave: ["horario", "jornada laboral", "trabajo"],
      respuesta: "Mi trabajo se ajusta a la dinámica operativa de la empresa, con supervisión de procesos que pueden extenderse fuera del horario estándar cuando la operación lo requiere." },

    { palabras_clave: ["compañeros", "equipo", "organizacion", "organización"],
      respuesta: "Trabajo con equipos de logística, personal operativo y áreas administrativas dentro de la estructura empresarial." },

    { palabras_clave: ["ong", "fundacion", "organización"],
      respuesta: "No estoy vinculado a ONG. Mi actividad se desarrolla exclusivamente en el sector empresarial privado." },

    { palabras_clave: ["vocacion", "vocación", "porque trabaja", "interés"],
      respuesta: "Me interesa la gestión de procesos y la supervisión de equipos dentro de estructuras organizadas que requieren control y eficiencia operativa." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "Sí, porque me permite coordinar procesos, optimizar recursos y mantener el funcionamiento adecuado de la operación logística." },

    { palabras_clave: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
      respuesta: "Tengo varios años de experiencia en supervisión de operaciones logísticas y gestión de personal en entornos empresariales." },

    { palabras_clave: ["ascensos", "carrera profesional", "futuro"],
      respuesta: "Mi enfoque siempre ha sido el crecimiento dentro del área operativa y la mejora de procesos internos de la organización." },

    { palabras_clave: ["contabilidad", "finanzas", "presupuestos"],
      respuesta: "No manejo directamente áreas contables ni financieras. Mi función es operativa y de supervisión de procesos logísticos." },

    { palabras_clave: ["dinero", "fondos", "transferencias"],
      respuesta: "No administro recursos financieros ni manejo fondos de terceros dentro de la organización." },

    { palabras_clave: ["redes", "plataformas", "internet", "tecnologia"],
      respuesta: "Las empresas modernas utilizan sistemas digitales para coordinar operaciones logísticas, seguimiento de procesos y comunicación interna." },

    { palabras_clave: ["cifrado", "seguridad", "encriptacion", "tecnología"],
      respuesta: "Los sistemas de seguridad digital se utilizan para proteger la información operativa y garantizar la confidencialidad de los procesos internos." },

    { palabras_clave: ["investigacion", "investigación", "proceso", "acusacion", "acusación"],
      respuesta: "Estoy colaborando con la investigación y respondiendo a todo lo requerido dentro del marco legal correspondiente." },

    { palabras_clave: ["violencia", "ataque", "bomba", "atentado", "terrorismo"],
      respuesta: "No tengo relación con ningún tipo de conducta violenta. Mi trabajo se limita a la supervisión de procesos empresariales y logísticos." },

    { palabras_clave: ["lider", "guia", "jefe", "organizacion"],
      respuesta: "Mi rol es estrictamente administrativo dentro de la empresa, enfocado en la supervisión de procesos y coordinación de equipos de trabajo." },

    { palabras_clave: ["ideologia", "politica", "activismo", "ideas"],
      respuesta: "No participo en actividades políticas ni ideológicas. Mi función es operativa dentro de una estructura empresarial." },

    { palabras_clave: ["intencion", "culpa", "remordimiento", "arrepentido"],
      respuesta: "Mi actuación siempre ha sido dentro del marco de mis funciones laborales. Las interpretaciones sobre intención deben basarse en evidencia objetiva." }

  ]
},
// ============================================================
// DELITO #9 — EXTORSIÓN
// ============================================================
"extorsion_001": {
  "id": "extorsion_001",
  "nombre": "Mauricio Cárdenas",
  "alias": "El Operador",
  "edad": 33,
  "avatar": "img/sospechosos/SAE.png",
  "delito": "Extorsión",
  "titulo": "CASO: LA LLAMADA QUE NUNCA TERMINA",
  "descripcion": "INFORME INVESTIGATIVO — VÍCTIMA: Jorge Ramírez, comerciante, 51 años.\n\nINCIDENTE:\nExtorsión telefónica con amenazas progresivas dirigidas a su familia.\nVentana activa: 5 días consecutivos, múltiples llamadas.\n\nCOARTADA:\n\"No tengo relación con esas llamadas ni con esa persona.\"\n\nCONTEXTO:\n- Amenazas con información íntima y rutinas exactas de la víctima.\n- Llamadas con patrón de escalamiento emocional y económico.\n- Uso de números desechables y rotación de dispositivos.\n- Posible red de apoyo para ejecución de llamadas.\n- Transferencias fragmentadas a múltiples cuentas intermedias.\n\nEVIDENCIA:\n- Registros de llamadas desde SIM desechables vinculadas indirectamente al sospechoso.\n- Audios con coincidencia parcial de voz en análisis forense.\n- Transferencias distribuidas en cadena de cuentas.\n- Búsquedas digitales previas sobre la víctima y su entorno.\n- Coincidencia de ubicación en zonas de emisión de señal.\n- Patrones repetidos en estructura de amenazas (guión operativo).",

  "perfil": "Operador metódico de redes de extorsión. No ejecuta siempre directamente, sino que fragmenta acciones para evitar trazabilidad completa.",
  "rasgos_emocionales": "Frialdad, cálculo operativo, evasión de responsabilidad directa, pensamiento en red",
  "debilidad_detectada": "Su negación total choca con evidencia técnica acumulativa (voz, ubicación, datos de la víctima y estructura repetida de llamadas).",
  "grado_dificultad": "S — EXTORSIÓN EN RED Y NEGACIÓN ESTRUCTURAL",
  "saludo": "Están cometiendo un error técnico de identificación. Yo no poseo ningún tipo de relación con dinámicas de coacción armada ni emisiones telefónicas hostiles.",

  "temas_calificables": {

    "llamadas": {
      "tema_id": "llamadas",
      "etiqueta": "Participación directa o indirecta en llamadas",
      "palabras_clave": ["llamadas", "extorsión", "amenazas", "contactaste", "audio", "teléfono", "desechables", "operador"],
      "impacto": 25,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Yo no ejecuté esas llamadas de manera directa desde mi terminal personal. Mi actividad comercial ordinaria prescinde de ese tipo de interacciones coercitivas.",
        "Un esquema operativo basado en la rotación de dispositivos y la inserción de SIMs desechables está diseñado precisamente para que cualquier actor externo pueda emitir las amenazas sin mi intervención material.",
        "Está bien... Yo no manipulaba las terminales en el terreno durante esos 5 días consecutivos, pero admito que estructuré el guión operativo de las llamadas. Definí la frecuencia y la dosificación de las amenazas telefónicas."
      ]
    },

    "conocimiento_victima": {
      "tema_id": "conocimiento_victima",
      "etiqueta": "Acceso a información sensible de la víctima",
      "palabras_clave": ["cómo sabías", "rutina", "familia", "datos personales", "información", "jorge", "ramírez", "búsquedas"],
      "impacto": 40,
      "es_calificable": true,
      "respuestas_evolucion": [
        "No poseo canales de acceso a la información íntima o corporativa del comerciante Jorge Ramírez. Desconozco por completo sus dinámicas comerciales.",
        "Los datos sobre activos y las rutinas exactas de un comerciante de 51 años son vectores de información vulnerables que circulan abiertamente en entornos de bases de datos informales.",
        "Admito el rastro de mis búsquedas digitales previas sobre su entorno familiar y residencial. Yo realicé el análisis de inteligencia patrimonial para perfilar al objetivo y establecer sus vulnerabilidades operativas."
      ]
    },

    "voz_audios": {
      "tema_id": "voz_audios",
      "etiqueta": "Peritaje de voz en llamadas",
      "palabras_clave": ["voz", "audio", "grabación", "coincide", "peritaje", "espectrografía", "forense"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los registros de audio distorsionados de las interceptaciones telefónicas no corresponden a mi patrón biométrico. Es una conclusión apresurada.",
        "Los peritajes de coincidencia parcial de voz en los análisis forenses presentan un margen de incertidumbre técnica considerable bajo condiciones ambientales de ruido de red.",
        "No tiene sentido sostener la evasión ante la espectrografía forense... Sí, es mi voz en las grabaciones de las llamadas principales. Yo intervine directamente en los momentos críticos donde el objetivo intentaba bloquear la negociación."
      ]
    },

    "trazabilidad_digital": {
      "tema_id": "trazabilidad_digital",
      "etiqueta": "Rastro digital y correlación técnica",
      "palabras_clave": ["geolocalización", "antena", "ip", "IP", "registro", "dispositivo", "señal", "ubicación", "celdas"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los flujos de geolocalización y los registros de IP de los servidores públicos de datos móviles son variables externas ajenas a mi control individual.",
        "Que mi terminal registre una coincidencia de ubicación espacial con las celdas y antenas de emisión de la señal de los dispositivos desechables constituye una mera contingencia geográfica.",
        "La correlación técnica de las antenas durante las llamadas nocturnas destruye mi coartada. Estaba en esas coordenadas geográficas específicas supervisando que el perímetro de emisión estuviera libre de patrullaje técnico policial."
      ]
    },

    "red_operativa": {
      "tema_id": "red_operativa",
      "etiqueta": "Estructura de ejecución en red",
      "palabras_clave": ["red", "otros", "intermediarios", "quién más", "organización", "apoyo", "estructura"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mis proyectos comerciales independientes se ejecutan bajo un modelo unilateral. No tengo vinculación con estructuras de delincuencia organizada.",
        "Interactúo con intermediarios de servicios logísticos e informáticos variados en el mercado negro, pero eso no presupone la articulación de una red de extorsión activa.",
        "Funcionó mediante un pensamiento en red descentralizado. Subcontraté una red de apoyo operativa para el descarte físico de las tarjetas SIM y delegué la ejecución de las llamadas secundarias a ejecutores periféricos."
      ]
    },

    "transferencias": {
      "tema_id": "transferencias",
      "etiqueta": "Flujo de dinero fragmentado",
      "palabras_clave": ["dinero", "transferencias", "cuentas", "pagos", "banco", "fragmentadas", "intermedias"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mis balances bancarios reflejan movimientos proporcionales a mis consultorías independientes. No registro depósitos financieros ilícitos bajo mi nombre.",
        "Las transferencias distribuidas en una cadena de cuentas intermedias corresponden a transacciones comerciales de terceros que escapan a mi capacidad de auditoría privada.",
        "Yo diseñé el modelo de dispersión del dinero. La fragmentación de los pagos en montos menores hacia múltiples cuentas mulas en cascada fue mi estrategia técnica para romper el rastreo de la inteligencia financiera."
      ]
    },

    "escalamiento": {
      "tema_id": "escalamiento",
      "etiqueta": "Aumento progresivo de amenazas",
      "palabras_clave": ["más dinero", "presión", "amenazas", "familia", "escalamiento", "emocional", "progresivas"],
      "impacto": 35,
      "es_calificable": true,
      "respuestas_evolucion": [
        "No he estructurado ningún diseño de presión psicológica sistemática ni de amenazas progresivas contra el entorno del comerciante.",
        "El aumento en los montos económicos exigidos responde a las dinámicas estándar de resistencia que despliega la contraparte en una mesa de negociación forzada.",
        "El patrón de escalamiento emocional y económico fue fríamente calculado por mí. Incrementábamos la violencia de las amenazas contra su familia cada 24 horas para colapsar su capacidad de respuesta y forzar el desembolso."
      ]
    },

    "motivo": {
      "tema_id": "motivo",
      "etiqueta": "Motivación económica o indirecta",
      "palabras_clave": ["dinero", "motivo", "por qué", "ganancia", "rentabilidad", "margen"],
      "impacto": 30,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Carezco de un vector de motivación fáctico para involucrarme en una operación que altere la seguridad de particulares.",
        "Mi perfil profesional se orienta a actividades de menor exposición y riesgo jurídico. La extorsión telefónica común no es un entorno rentable.",
        "El motivo es puramente matemático: la extorsión en red ofrece un margen de rentabilidad económica inmediata con un costo de ejecución extremadamente bajo. Reduje al objetivo a una simple variable de retorno financiero."
      ]
    }
  },

  // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Como vamos, ayudemen que no se demore por favor." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Mauricio Humberto Cárdenas Rincón." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.023.387.959 de Manzanares." },
    
    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 33 años de Manzanares." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la calle 81 No. 195-00, casa 12, es un lugar muy tranquilo." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["relación", "vínculo", "comerciante", "ramirez"], 
      respuesta: "No mantengo un vínculo comercial previo con el sujeto Jorge Ramírez. Su estructura de negocio era simplemente un indicador de alta liquidez en los mapas de riesgo ordinarios." },

    { palabras_clave: ["cinco dias", "dias", "tiempo", "consecutivos"], 
      respuesta: "La duración de una ventana activa de 5 días consecutivos responde a un protocolo técnico de saturación. El dolor o el desgaste emocional de la víctima es transitorio; la estructura del cobro es permanente." },

    { palabras_clave: ["familia", "entorno", "hijos", "esposa"], 
      respuesta: "El entorno del objetivo llegó a la mesa de operaciones buscando un orden y un blindaje legal ante el caos financiero que les inyectamos. Yo solo instalé prioridades de pago bajo presión." },

    { palabras_clave: ["método", "violencia", "guion", "operación"],
      respuesta: "La delincuencia desorganizada utiliza la violencia física ciega para someter y destruir. Mi método busca construir un flujo de capitales controlado a partir de las vulnerabilidades que el propio sistema informático nos provee." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"], 
      respuesta: "La culpa constituye una variable ineficiente en los análisis de riesgo-beneficio. Mi única intención estratégica en todo momento fue optimizar la tasa de retorno financiero y salvar la operatividad de la red ante la trazabilidad digital." },

          // ============================================================
    // RAPPORT Y CONVERSACIÓN INFORMAL — DELITO #9 EXTORSIÓN
    // ============================================================

    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro en condiciones estables dentro de este proceso. Estoy dispuesto a responder lo que corresponda en el marco de la investigación." },

    { palabras_clave: ["aqui", "cuenteme", "cuénteme"],
      respuesta: "Entiendo la naturaleza de la entrevista, considero que muchas interpretaciones sobre mis actividades han sido construidas de forma sesgada." },

    { palabras_clave: ["como le va", "qué tal", "que tal", "todo bien"],
      respuesta: "Es una situación compleja, pero mantengo la disposición de colaborar y aclarar lo que sea necesario." },

    { palabras_clave: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
      respuesta: "Soy operador logístico y consultor de intermediación comercial. Me encargo de coordinar flujos de información y servicios entre distintos actores del mercado." },

    { palabras_clave: ["como ha estado", "cómo ha estado", "como le ha ido"],
      respuesta: "Ha sido un periodo de alta presión por la investigación, pero continúo respondiendo dentro de los parámetros establecidos." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "Sí, el trabajo en intermediación comercial implica coordinación constante de contactos, gestión de información y seguimiento de operaciones simultáneas." },

    { palabras_clave: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
      respuesta: "Soy colombiano y he desarrollado mi trayectoria en el ámbito de la consultoría y operaciones comerciales." },

    { palabras_clave: ["donde vive", "vive donde", "residencia", "domicilio"],
      respuesta: "Prefiero mantener la información de mi residencia en reserva por razones de seguridad personal." },

    { palabras_clave: ["estado civil", "casada", "soltera"],
      respuesta: "Mi situación personal no guarda relación con los hechos que se investigan." },

    { palabras_clave: ["familia", "hijos", "esposo"],
      respuesta: "Mi familia no tiene ninguna relación con mis actividades profesionales ni con los hechos bajo investigación." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
      respuesta: "Me interesa el análisis de mercados, la comunicación estratégica, los sistemas de negociación y la dinámica de redes comerciales." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Tengo formación en áreas de administración, logística y análisis de operaciones comerciales." },

    { palabras_clave: ["salario", "sueldo", "cuanto gana", "ingresos"],
      respuesta: "Mis ingresos provienen de actividades profesionales en consultoría e intermediación de servicios comerciales." },

    { palabras_clave: ["horario", "jornada laboral", "trabajo"],
      respuesta: "Mi trabajo no tiene un horario fijo. Depende de la coordinación de actores, seguimiento de operaciones y gestión de flujos de información." },

    { palabras_clave: ["compañeros", "equipo", "organizacion", "organización"],
      respuesta: "He trabajado con distintos profesionales del sector logístico y comercial en proyectos de intermediación." },

    { palabras_clave: ["ong", "fundacion", "organización"],
      respuesta: "No estoy vinculado a ONG. Mi trabajo se desarrolla en entornos privados de consultoría e intermediación." },

    { palabras_clave: ["vocacion", "vocación", "porque trabaja", "interés"],
      respuesta: "Me interesa entender cómo funcionan los sistemas de conexión entre actores económicos y cómo se optimizan los flujos de intercambio." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "Sí, porque me permite analizar dinámicas complejas de interacción entre distintos agentes del mercado." },

    { palabras_clave: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
      respuesta: "Tengo varios años de experiencia en consultoría, intermediación comercial y análisis de operaciones." },

    { palabras_clave: ["ascensos", "carrera profesional", "futuro"],
      respuesta: "Mi enfoque siempre ha sido el desarrollo en el ámbito de la intermediación y la optimización de redes comerciales." },

    { palabras_clave: ["contabilidad", "finanzas", "presupuestos"],
      respuesta: "No manejo procesos contables directos. Mi trabajo se centra en la coordinación de operaciones entre terceros." },

    { palabras_clave: ["dinero", "fondos", "transferencias"],
      respuesta: "No administro recursos económicos de terceros. Mi participación es estrictamente de intermediación de servicios." },

    { palabras_clave: ["redes", "plataformas", "internet", "tecnologia"],
      respuesta: "Las redes modernas de comunicación funcionan mediante múltiples nodos de intercambio de información entre actores independientes." },

    { palabras_clave: ["cifrado", "seguridad", "encriptacion", "tecnología"],
      respuesta: "Los sistemas de cifrado son herramientas estándar para proteger la información en entornos digitales y comerciales." },

    { palabras_clave: ["investigacion", "investigación", "proceso", "acusacion", "acusación"],
      respuesta: "Estoy colaborando con la investigación y respondiendo todo lo requerido dentro del marco legal establecido." },

    { palabras_clave: ["violencia", "ataque", "bomba", "atentado", "terrorismo"],
      respuesta: "No participo ni promuevo ningún tipo de violencia. Mi trabajo se limita a la intermediación y coordinación de servicios comerciales." },

    { palabras_clave: ["lider", "guia", "jefe", "organizacion"],
      respuesta: "No ejerzo liderazgo sobre organizaciones. Me dedico a la intermediación entre actores comerciales independientes." },

    { palabras_clave: ["ideologia", "politica", "activismo", "ideas"],
      respuesta: "El análisis de ideas forma parte del entorno social, pero mi trabajo es estrictamente comercial y de intermediación." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"],
      respuesta: "Mi enfoque siempre ha sido profesional y técnico dentro del ámbito de la intermediación comercial. Las interpretaciones deben basarse en evidencia objetiva." }
  ]
},
// ============================================================
// DELITO #10 — CONCIERTO PARA DELINQUIR
// ============================================================
"concierto_delinquir_001": {
  "id": "concierto_delinquir_001",
  "nombre": "Óscar Jiménez",
  "alias": "El Articulador",
  "edad": 36,
  "avatar": "img/sospechosos/Concierto_para_delinquir.png",
  "delito": "Concierto para Delinquir",
  "titulo": "CASO: LA RED INVISIBLE",
  "descripcion": "INFORME INVESTIGATIVO — ESTRUCTURA CRIMINAL BAJO COBERTURA LEGAL.\n\nSUJETO: Óscar Jiménez | ALIAS: \"El Articulador\"\nOCUPACIÓN: Empresario logístico / consultor de operaciones\n\nINCIDENTE:\nInvestigado por presunta coordinación de una red criminal multisectorial que opera mediante terceros en actividades ilícitas fragmentadas.\n\nCOARTADA:\n\"Solo tengo relaciones comerciales. No tengo control sobre lo que otros hacen.\"\n\nCONTEXTO OPERATIVO:\nEl sospechoso actúa como nodo de conexión entre individuos sin aparente vínculo entre si.\nCoordina información, tiempos y recursos sin ejecutar directamente actividades ilegales.\nSe detectan patrones repetitivos de comunicación previa a eventos delictivos.\nUso de lenguaje ambiguo y términos aparentemente comerciales.\nEstructura jerárquica implícita con delegación de tareas.\n\nEVIDENCIA:\n- Interceptaciones de llamadas entre múltiples actores vinculados\n- Mensajes con codificación semántica (términos comerciales con doble sentido)\n- Reuniones previas a eventos criminales confirmados\n- Flujos financieros circulares entre cuentas aparentemente independientes\n- Testimonios que lo identifican como punto de coordinación\n- Análisis de red que lo ubica como nodo central de conexión",

  "perfil": "Estratégico, altamente racional, evita contacto directo con la ejecución. Construye distancia legal entre él y los hechos.",
  "rasgos_emocionales": "Control absoluto, pensamiento estructural, manipulación indirecta, negación técnica, frialdad operativa",
  "debilidad_detectada": "Su mayor debilidad es la consistencia de patrones: contactos repetidos, sincronización de eventos y dependencia estructural de su intermediación.",
  "grado_dificultad": "S+ — NODO CENTRAL DE RED CRIMINAL (Alta resistencia. Cede solo ante análisis de patrones cruzados y evidencia estructural).",
  "saludo": "Yo ejecuto consultorías y tiendo puentes comerciales con una multiplicidad de actores económicos independientes. Es metodológicamente absurdo pretender que yo asuma la responsabilidad por las desviaciones conductuales de terceros autónomos.",

  "temas_calificables": {

    "relaciones_red": {
      "tema_id": "relaciones_red",
      "etiqueta": "Vínculos con integrantes de la red",
      "palabras_clave": ["contactos", "conoces", "relación", "quiénes son", "asociados", "vínculos", "actores"],
      "impacto": 30,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las interacciones registradas en mis terminales telefónicas responden a flujos de comunicación estrictamente comerciales de mi portafolio logístico. Nada más.",
        "He coincidido tangencialmente con algunos de esos individuos en mesas de negocios sectoriales. Compartir un entorno de mercado informal no constituye una asociación delictiva.",
        "Al cruzar los diagramas forenses de su análisis de red, es inviable negar mi contacto frecuente con esos operadores. Actúo como su interlocutor estratégico prioritario porque confían en mi criterio de reserva."
      ]
    },

    "rol_estructural": {
      "tema_id": "rol_estructural",
      "etiqueta": "Rol dentro de la organización criminal",
      "palabras_clave": ["rol", "qué haces", "líder", "jefe", "posición", "función", "nodo", "articulador"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Carezco de un rol formal o asignación jerárquica en las conductas fragmentadas que su fiscalía intenta unificar bajo una narrativa penal.",
        "Mi función se limita a conectar de manera inteligente a personas con necesidades logísticas afines. Soy un facilitador de sinergias operativas, no un director de células.",
        "No me considero un 'jefe' al estilo convencional de sus manuales policiales; opero como el nodo central de conexión. Yo soy el arquitecto que garantiza la cohesión del engranaje para que el sistema funcione de manera invisible."
      ]
    },

    "coordinacion_operativa": {
      "tema_id": "coordinacion_operativa",
      "etiqueta": "Coordinación de actividades ilícitas",
      "palabras_clave": ["coordinabas", "organizabas", "órdenes", "decisiones", "movimientos", "sincronización"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Yo no emito instrucciones ni coordino operaciones de carácter ilegal. Mis análisis se restringen al diseño estratégico general.",
        "Sugiero ventanas de oportunidad logística y optimización de flujos de distribución en base a mis lecturas del entorno. La determinación de actuar recae en otros.",
        "Yo determinaba la sincronización exacta y el timing de los movimientos operativos. Ningún eslabón se movía de forma aislada; yo indicaba el protocolo de contingencia para eludir sus radares."
      ]
    },

    "lenguaje_codificado": {
      "tema_id": "lenguaje_codificado",
      "etiqueta": "Uso de lenguaje encubierto",
      "palabras_clave": ["código", "mensajes", "palabras clave", "significado oculto", "codificación", "semántica"],
      "impacto": 40,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El uso de terminología técnica y modismos corporativos es un estándar de confidencialidad normal en la consultoría logística de alto nivel.",
        "Los términos comerciales que sus analistas tildan de ambiguos forman parte de una jerga de negocios interna diseñada para mitigar el espionaje industrial.",
        "Admito la codificación semántica sistemática en los chats de texto. Utilizábamos un guión técnico con doble sentido comercial para encriptar la naturaleza de los cargamentos en tiempo real."
      ]
    },

    "reuniones_previas": {
      "tema_id": "reuniones_previas",
      "etiqueta": "Reuniones antes de eventos criminales",
      "palabras_clave": ["reunión", "encuentro", "antes", "planearon", "se reunieron", "agenda", "coincidencias"],
      "impacto": 42,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los encuentros en salas de juntas y espacios privados corresponden a auditorías de procesos contables estándar con mis clientes.",
        "Las coincidencias de agenda previas a los eventos que ustedes investigan son variables estadísticas previsibles dentro de un ecosistema de distribución tan cerrado.",
        "Efectivamente, coordinábamos reuniones de planeación estratégica inmediatamente antes de activar las fases críticas. Era indispensable ajustar los últimos vectores informativos cara a cara."
      ]
    },

    "estructura_red": {
      "tema_id": "estructura_red",
      "etiqueta": "Existencia de estructura organizada",
      "palabras_clave": ["organización", "estructura", "jerarquía", "niveles", "red", "delinquir"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Diseñar una hipótesis sobre una organización criminal transnacional basándose en simples cruces de llamadas es una falacia metodológica severa.",
        "Cada operador en el terreno actúa de manera independiente por su propia cuenta y riesgo. No existe una estructura centralizada formal.",
        "Sí existe una jerarquía implícita perfectamente definida por niveles de compartimentación. La red opera de forma celular y descentralizada bajo mi diseño arquitectónico."
      ]
    },

    "intermediarios": {
      "tema_id": "intermediarios",
      "etiqueta": "Uso de terceros para ejecución",
      "palabras_clave": ["terceros", "intermediarios", "quién ejecuta", "otros", "delegación", "capas"],
      "impacto": 44,
      "es_calificable": true,
      "respuestas_evolucion": [
        "No poseo la capacidad jurídica ni el control administrativo para auditar el comportamiento de otros proveedores autónomos en el mercado.",
        "La delegación de tareas y la tercerización logística son herramientas corporativas lícitas para mitigar el riesgo operativo en cualquier sector.",
        "Yo no intervengo en la fase de ejecución material ni toco el producto ilícito. Subcontrato capas de intermediarios fungibles para que ejecuten las operaciones en el terreno y rompan el nexo legal conmigo."
      ]
    },

    "transferencias_financieras": {
      "tema_id": "transferencias_financieras",
      "etiqueta": "Movimientos económicos entre redes",
      "palabras_clave": ["dinero", "transferencias", "pagos", "cuentas", "flujo", "circulares", "financieros"],
      "impacto": 43,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los movimientos económicos identificados cuentan con facturación y respaldo de honorarios por mis servicios profesionales de consultoría.",
        "No tengo la visibilidad técnica ni administro el destino de los capitales de todas las cuentas bancarias de mis aliados comerciales.",
        "Yo tracé la ingeniería de los flujos financieros circulares. La triangulación de pagos fragmentados entre cuentas aparentemente independientes era mi método para blanquear los retornos de inversión."
      ]
    },

    "continuidad_delictiva": {
      "tema_id": "continuidad_delictiva",
      "etiqueta": "Actividad prolongada en el tiempo",
      "palabras_clave": ["meses", "continuo", "tiempo", "desde cuándo", "actividad", "patrones", "repetitivos"],
      "impacto": 35,
      "es_calificable": true,
      "respuestas_evolucion": [
        "No existe una línea de continuidad delictiva prolongada en mis registros. Su acusación carece de un marco temporal coherente.",
        "Las iteraciones y patrones repetitivos que su software de análisis de datos resalta son simples ciclos comerciales ordinarios a lo largo del año.",
        "Esta arquitectura de operaciones lleva meses ejecutándose de forma ininterrumpida. La persistencia temporal demuestra la estabilidad e infalibilidad de la red que estructuré."
      ]
    },

    "planificacion": {
      "tema_id": "planificacion",
      "etiqueta": "Planificación sistemática de operaciones",
      "palabras_clave": ["plan", "estrategia", "organizado", "cómo lo hacían", "planificación", "sistemática"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Rechazo de forma categórica la existencia de un plan criminal coordinado. Su investigación está hilando variables inconexas.",
        "Están interpretando de forma sesgada datos descontextualizados para forzar la figura legal del concierto para delinquir agravado.",
        "Todo el diseño operacional estaba sistemáticamente planificado bajo un análisis de riesgo-beneficio estricto. La red invisible fue diseñada para ser indestructible ante auditorías forenses estándar."
      ]
    }
  },

  // ============================================================
  // RESPUESTAS EXPLORATORIAS (ZONA NEUTRA DE ENTREVISTA)
  // ============================================================
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Como va todo, Agilicen, que no me queda tiempo para mis asuntos." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Óscar Javier Jiménez López." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.007.005.008 de Santa Fé Antioquia." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 36 años de Santa Fé Antioquia." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la calle 76 No. 101-09, un sitio exclusivo para vivir." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["organización", "empresa", "logística", "operaciones"], 
      respuesta: "La optimización logística moderna prescinde de las jerarquías piramidales analógicas. Hoy en día operamos mediante nodos descentralizados y flujos de información cruzada. Eso es el futuro de la ingeniería de mercados." },

    { palabras_clave: ["víctima", "daño", "personas", "afectados"], 
      respuesta: "Esos actores periféricos llegaron a mi entorno buscando un orden logístico y una directriz clara ante el caos operativo que manejaban en la calle. Yo no inyecto violencia; yo solo instalo prioridades estructurales." },

    { palabras_clave: ["duración", "tiempo", "meses", "años"], 
      respuesta: "Las contingencias o fricciones del terreno durante el despliegue son temporales, un costo residual irrelevante. Lo que verdaderamente importa es que la estructura de la red permanezca inalterable." },

    { palabras_clave: ["método", "delito", "ilegal", "crimen"], 
      respuesta: "La delincuencia común y desorganizada destruye los sistemas mediante fuerza bruta. Mi método estratégico busca construir canales eficientes y paralelos aprovechando las debilidades institucionales que el propio Estado provee." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"], 
      respuesta: "La culpa constituye un sesgo cognitivo ineficiente que distorsiona la toma de decisiones gerenciales. Mi única intención estratégica en todo momento fue maximizar la rentabilidad de las operaciones y salvar el blindaje de la red." },

    // ============================================================
    // RAPPORT Y CONVERSACIÓN INFORMAL
    // ============================================================

    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro en condiciones estables dentro de este proceso. Estoy dispuesto a responder lo que corresponda en el marco de la investigación." },

    { palabras_clave: ["aqui", "cuenteme", "cuénteme"],
      respuesta: "Entiendo la naturaleza de la entrevista considero que muchas interpretaciones sobre mis actividades han sido construidas de forma sesgada." },

    { palabras_clave: ["como le va", "qué tal", "que tal", "todo bien"],
      respuesta: "Es una situación compleja, pero mantengo la disposición de colaborar y aclarar lo que sea necesario." },

    { palabras_clave: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
      respuesta: "Soy ingeniero de sistemas y analista de redes. Trabajo en el diseño de estructuras de comunicación digital y análisis de información en entornos tecnológicos." },

    { palabras_clave: ["como ha estado", "cómo ha estado", "como le ha ido"],
      respuesta: "Ha sido un periodo de alta presión por la investigación, pero continúo respondiendo dentro de los parámetros establecidos." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "Sí, el trabajo en análisis de redes digitales implica monitoreo constante de información, plataformas y flujos de comunicación en tiempo real." },

    { palabras_clave: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
      respuesta: "Soy colombiano y he desarrollado mi trayectoria profesional en el ámbito tecnológico y de análisis de sistemas de comunicación."},

    { palabras_clave: ["donde vive", "vive donde", "residencia", "domicilio"],
      respuesta: "Prefiero mantener la información de mi residencia en reserva por razones de seguridad personal." },

    { palabras_clave: ["estado civil", "casada", "soltera"],
      respuesta: "Mi situación personal no guarda relación con los hechos que se investigan." },

    { palabras_clave: ["familia", "hijos", "esposo"],
      respuesta: "Mi familia no tiene ninguna relación con mis actividades profesionales ni con los hechos bajo investigación." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
      respuesta: "Me interesa la tecnología, la arquitectura de redes, la comunicación digital y el análisis de sistemas complejos." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Soy ingeniero de sistemas con formación en análisis de redes, comunicación digital y seguridad informática." },

    { palabras_clave: ["salario", "sueldo", "cuanto gana", "ingresos"],
      respuesta: "Mis ingresos provienen de actividades profesionales en consultoría tecnológica y análisis de sistemas digitales." },

    { palabras_clave: ["horario", "jornada laboral", "trabajo"],
      respuesta: "Mi trabajo no tiene un horario fijo. Depende de la operación de plataformas, análisis de datos y coordinación técnica de sistemas." },

    { palabras_clave: ["compañeros", "equipo", "organizacion", "organización"],
      respuesta: "He trabajado con distintos profesionales en el área de tecnología, análisis de datos y comunicación digital." },

    { palabras_clave: ["ong", "fundacion", "organización"],
      respuesta: "No estoy vinculado a ONG. Mi trabajo se desarrolla en entornos tecnológicos y de consultoría digital." },

    { palabras_clave: ["vocacion", "vocación", "porque trabaja", "interés"],
      respuesta: "Me interesa entender cómo funcionan las redes de comunicación y cómo se estructuran los flujos de información en entornos digitales complejos." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "Sí, porque me permite analizar sistemas de comunicación y comprender dinámicas de interacción en redes digitales." },

    { palabras_clave: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
      respuesta: "Tengo varios años de experiencia en ingeniería de sistemas, análisis de redes y diseño de arquitecturas de comunicación digital." },

    { palabras_clave: ["ascensos", "carrera profesional", "futuro"],
      respuesta: "Mi enfoque siempre ha sido el desarrollo técnico y el análisis de sistemas complejos de comunicación digital." },

    { palabras_clave: ["contabilidad", "finanzas", "presupuestos"],
      respuesta: "No manejo procesos financieros ni contables. Mi trabajo es estrictamente técnico en el ámbito de sistemas y redes." },

    { palabras_clave: ["dinero", "fondos", "transferencias"],
      respuesta: "No administro recursos económicos ni fondos de terceros. Mi participación es únicamente técnica." },

    { palabras_clave: ["redes", "plataformas", "internet", "tecnologia"],
      respuesta: "Las redes digitales modernas funcionan mediante arquitecturas distribuidas y sistemas de cifrado. Son herramientas estándar en el entorno tecnológico actual." },

    { palabras_clave: ["cifrado", "seguridad", "encriptacion", "tecnología"],
      respuesta: "El cifrado es una medida estándar de seguridad en la comunicación digital para proteger la integridad de la información." },

    { palabras_clave: ["investigacion", "investigación", "proceso", "acusacion", "acusación"],
      respuesta: "Estoy colaborando con la investigación y respondiendo todo lo requerido dentro del marco legal establecido." },

    { palabras_clave: ["violencia", "ataque", "bomba", "atentado", "terrorismo"],
      respuesta: "No participo ni promuevo ningún tipo de violencia. Mi trabajo se limita al análisis y desarrollo de sistemas de comunicación digital." },

    { palabras_clave: ["lider", "guia", "jefe", "organizacion"],
      respuesta: "No ejerzo liderazgo sobre personas ni organizaciones. Me dedico al análisis técnico de redes y estructuras de comunicación." },

    { palabras_clave: ["ideologia", "politica", "activismo", "ideas"],
      respuesta: "El análisis de ideas y discursos es parte del estudio de sistemas sociales, pero no implica control ni dirección sobre acciones de terceros." },

    { palabras_clave: ["intencion", "culpa", "remordimiento", "arrepentido"],
      respuesta: "Mi enfoque siempre ha sido técnico. Las interpretaciones sobre intención deben basarse en evidencia objetiva dentro del proceso." }
  ]
},

// ============================================================
// DELITO #11 — TERRORISMO
// ============================================================
"terrorismo_001": {
  "id": "terrorismo_001",
  "nombre": "Miguel Andrade",
  "alias": "El Ideólogo",
  "edad": 38,
  "avatar": "img/sospechosos/Terrorismo.png",
  "delito": "Terrorismo",
  "titulo": "CASO: AMENAZA COORDINADA DE CÉLULAS OPERATIVAS",
  "descripcion": "INFORME INVESTIGATIVO — ESTRUCTURA TERRORISTA DESCENTRALIZADA\n\nSUJETO: Miguel Andrade | ALIAS: \"El Ideólogo\"\nOCUPACIÓN: Ingeniero de sistemas / analista de redes / activista político\n\nINCIDENTE:\nInvestigado por presunta dirección ideológica, planificación indirecta y coordinación de acciones violentas ejecutadas por células independientes.\n\nCOARTADA:\n\"Solo participo en debates políticos y difusión de ideas. No tengo control sobre acciones de terceros.\"\n\nCONTEXTO OPERATIVO:\nEl sospechoso actúa como núcleo ideológico y nodo de coordinación.\nNo ejecuta ataques directamente, pero establece marcos de acción, objetivos y justificación ideológica.\nUtiliza plataformas digitales cifradas para comunicación con múltiples actores.\nDifunde contenido con narrativa de legitimación de acciones violentas.\nSe identifican patrones de sincronización entre sus comunicaciones y eventos violentos posteriores.\nEstructura descentralizada con células operativas autónomas pero ideológicamente alineadas.\n\nEVIDENCIA:\n- Chats cifrados con instrucciones logísticas indirectas (objetivos, tiempos, objetivos simbólicos)\n- Videos y publicaciones de propaganda con contenido de incitación\n- Testimonios de miembros que lo identifican como guía ideológico y coordinador\n- Transferencias de fondos a nodos intermedios sin trazabilidad directa\n- Coincidencias temporales entre reuniones virtuales y ataques ejecutados\n- Mapas de comunicación entre múltiples células conectadas a su red\n- Análisis forense digital que lo ubica como punto central de distribución de información",

  "perfil": "Altamente racional, carismático y estructurado. Se percibe como líder intelectual. Evita ejecución directa para mantener negación legal.",
  "rasgos_emocionales": "Frialdad estratégica, convicción ideológica, manipulación narrativa, desconexión moral de consecuencias, negación de responsabilidad directa",
  "debilidad_detectada": "Dependencia estructural de su red digital: sus patrones de comunicación, sincronización de eventos y testimonios internos lo vinculan de forma indirecta pero consistente con acciones violentas.",
  "grado_dificultad": "S+ — LÍDER IDEOLÓGICO DE RED DESCENTRALIZADA (Alta resistencia. Solo cede ante correlación digital, testigos internos y análisis de patrones temporales).",
  "saludo": "La difusión de postulados teóricos y el análisis crítico no constituyen un tipo penal en ninguna legislación democrática. Yo solo comparto análisis políticos y teorías sociales. Si las masas deciden actuar de forma autónoma basándose en la realidad, eso excede mi radio de control.",

  "temas_calificables": {

    "comunicacion_cifrada": {
      "tema_id": "comunicacion_cifrada",
      "etiqueta": "Uso de canales cifrados y ocultos",
      "palabras_clave": ["cifrado", "mensajes", "chat", "clave", "plataforma", "seguro", "criptografía", "servidores"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El uso de herramientas de criptografía y plataformas seguras es una medida de higiene digital elemental para salvaguardar mi privacidad frente al acoso institucional.",
        "Ciertos canales de discusión teórica requieren protocolos de discreción avanzados para blindar el debate frente a la censura previa del Estado. No hay una agenda oculta.",
        "Los chats cifrados de extremo a extremo eran los servidores de comando lógico de la red. Admito que utilizaba esa arquitectura digital para distribuir las instrucciones logísticas indirectas y fijar los objetivos simbólicos."
      ]
    },

    "propaganda_incendiaria": {
      "tema_id": "propaganda_incendiaria",
      "etiqueta": "Difusión de contenido de incitación",
      "palabras_clave": ["videos", "mensajes", "difusión", "ideología", "redes", "incitación", "propaganda", "manifiesto"],
      "impacto": 42,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mis publicaciones multimedia constituyen exclusivamente material pedagógico de formación sociopolítica. El encuadre que hace su unidad forense es un sesgo interpretativo.",
        "Si los manifiestos y videos de agitación doctrinal son asimilados de forma radical por audiencias externas, la responsabilidad recae en el receptor, no en el emisor de la teoría.",
        "Sí, el material audiovisual fue fríamente diseñado con técnicas de manipulación narrativa. La propaganda no buscaba informar, sino actuar como un detonante psicológico para la movilización armada de los nodos."
      ]
    },

    "reclutamiento_miembros": {
      "tema_id": "reclutamiento_miembros",
      "etiqueta": "Captación de seguidores y células",
      "palabras_clave": ["miembros", "reclutar", "sumar", "convencer", "nuevos", "seguidores", "células", "captación"],
      "impacto": 44,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Yo no ejerzo funciones de reclutamiento forzado. Fomento un foro de pensamiento crítico donde las mentes libres convergen de manera orgánica.",
        "Los seguidores se adhieren a los postulados teóricos por estricta convicción ideológica y voluntad propia. Culparme de su afiliación carece de rigor lógico.",
        "Yo mismo administraba la captación estratégica y el filtrado digital en la red. Seleccionaba a los especímenes más influenciables para integrarlos a las células autónomas bajo una doctrina compartida."
      ]
    },

    "coordinacion_indirecta": {
      "tema_id": "coordinacion_indirecta",
      "etiqueta": "Coordinación de acciones sin ejecución directa",
      "palabras_clave": ["órdenes", "coordinabas", "acciones", "plan", "logística", "células", "planificación", "ejecución"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "No existe trazabilidad documental que demuestre que mi terminal emitiera órdenes directas de ejecución de actos violentos en el terreno fáctico.",
        "Planteo hipótesis estratégicas y marcos generales de acción teórica. La transgresión material o la logística de los ataques corre por cuenta del brazo operativo autónomo.",
        "Yo estructuraba la planificación asimétrica indirecta del movimiento. Sincronizaba los tiempos y el despliegue de las células desde las sombras, garantizando que operaran de forma fragmentada para proteger mi negación legal."
      ]
    },

    "liderazgo_ideologico": {
      "tema_id": "liderazgo_ideologico",
      "etiqueta": "Rol como líder ideológico",
      "palabras_clave": ["líder", "guía", "jefe", "responsable", "influencia", "autoridad", "intelectual"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Su manual procesal insiste en buscar estructuras piramidales analógicas con un jefe al mando. Mi entorno prescinde de esas categorías obsoletas.",
        "Me catalogo exclusivamente como un analista de redes y un catalizador de ideas de cambio social. No poseo autoridad disciplinaria sobre nadie.",
        "Mi superioridad es de naturaleza intelectual y moral. Actúo como el núcleo doctrinal y el guía ideológico de la red; las células operativas no poseían autonomía de pensamiento, solo ejecutaban mi visión."
      ]
    },

    "financiamiento_red": {
      "tema_id": "financiamiento_red",
      "etiqueta": "Financiación de actividades de la red",
      "palabras_clave": ["dinero", "transferencias", "fondos", "cuentas", "apoyo", "trazabilidad", "nodos"],
      "impacto": 40,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los flujos de capital que administro corresponden a donaciones legítimas para el sostenimiento de nuestras plataformas de difusión técnica en la web.",
        "No tengo control contable sobre el uso o destino final que los nodos intermedios den a los recursos económicos que circulan de forma descentralizada.",
        "Yo tracé el esquema de financiamiento de la red. Diseñé el desvío de los fondos hacia billeteras digitales cifradas y nodos intermedios para dotar de recursos logísticos a las células sin dejar trazabilidad bancaria."
      ]
    },

    "reuniones_sincronizadas": {
      "tema_id": "reuniones_sincronizadas",
      "etiqueta": "Reuniones previas a eventos violentos",
      "palabras_clave": ["reunión", "virtual", "antes", "fechas", "coincidencia", "sincronización", "ataques"],
      "impacto": 43,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Nuestras reuniones virtuales constituyen foros abiertos de debate geopolítico global. Vincularlas con hechos posteriores es una falacia temporal.",
        "Las coincidencias temporales entre nuestras conferencias de datos y las alteraciones del orden público son correlaciones circunstanciales que carecen de peso forense.",
        "No es una contingencia estadística. Las reuniones virtuales de alta seguridad se ejecutaban inmediatamente antes de cada ataque coordinado. Allí validábamos el despliegue cronológico de las células operativas."
      ]
    },

    "estructura_red": {
      "tema_id": "estructura_red",
      "etiqueta": "Estructura descentralizada de células",
      "palabras_clave": ["red", "células", "estructura", "organización", "niveles", "descentralizada"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El mapa de comunicaciones que su análisis forense digital presenta es una construcción artificial para forzar el tipo penal de la delincuencia terrorista organizada.",
        "Lo que ustedes denominan estructura es un conjunto amorfo de grupos e individuos independientes alineados de forma espontánea por afinidad social.",
        "La red terrorista fue diseñada bajo una arquitectura descentralizada de células autónomas. Cada nodo opera de forma aislada e ignora la identidad de los demás, pero todos se activan bajo mis directrices doctrinales."
      ]
    },

    "radicalizacion": {
      "tema_id": "radicalizacion",
      "etiqueta": "Proceso de radicalización ideológica",
      "palabras_clave": ["radicalizar", "convencer", "influencia", "persuasión", "ideas", "consecuencias", "violencia"],
      "impacto": 46,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Fomento la deconstrucción de dogmas y el pensamiento crítico profundo. Si ese proceso despierta posturas firmes, es un efecto intelectual lícito.",
        "Cada militante interpreta la urgencia del cambio histórico según sus propias variables de entorno. Yo no administro su nivel de compromiso fáctico.",
        "Conducía deliberadamente a los sujetos hacia un proceso de radicalización ideológica sistemática. Mi objetivo era neutralizar sus frenos morales y convencerlos de que la violencia destructiva era un paso necesario."
      ]
    }
  },

  // ============================================================
  // RESPUESTAS EXPLORATORIAS (ZONA DE CONTROL DEL ENTREVISTA)
  // ============================================================
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Como va, estoy interesado en que todo se resuelva." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Miguel Esneider Andrade Rivas." },
    
    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.014.247.184 de Manizales." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 38 años de Manizales." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la carrera 13 No. 147-25, excelnte lugar." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["ideología", "política", "activismo", "ideas"], 
      respuesta: "La confrontación ideológica actual exige trascender los debates burgueses tradicionales. La teoría sin praxis es estéril; las estructuras de pensamiento solo se validan cuando impactan de forma fáctica en el entorno." },

    { palabras_clave: ["víctima", "daño", "personas", "inocentes", "afectados"], 
      respuesta: "Esos individuos periféricos llegaron a mi entorno digital buscando un orden doctrinal y una directriz clara ante el caos sistémico que padecen. El dolor colateral es transitorio; la estructura de la transformación es permanente." },

    { palabras_clave: ["ataque", "violencia", "bomba", "atentado"], 
      respuesta: "La delincuencia común utiliza la violencia ciega de forma delictiva para destruir sin un fin superior. Mi método busca construir un nuevo equilibrio de poder a partir de las cenizas que la demolición del viejo orden provee." },

    { palabras_clave: ["plataformas", "encriptación", "tecnología", "redes"], 
      respuesta: "Como ingeniero de sistemas, entiendo que la infraestructura de red del Estado está diseñada para el control total. Utilizar capas criptográficas independientes es el único método para salvar la viabilidad del movimiento." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"], 
      respuesta: "La culpa constituye una variable psicológica ineficiente que nubla el análisis estratégico. Mi única intención estructural siempre ha sido acelerar las contradicciones del sistema y salvar al individuo de su propia sumisión automatizada." },

          // ============================================================
    // RAPPORT Y CONVERSACIÓN INFORMAL
    // ============================================================

    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro en condiciones estables dentro de este proceso. Estoy dispuesto a responder lo que corresponda en el marco de la investigación." },

    { palabras_clave: ["aqui", "cuenteme", "cuénteme"],
      respuesta: "Entiendo la naturaleza de la entrevista, considero que muchas interpretaciones sobre mis actividades han sido construidas de forma sesgada." },

    { palabras_clave: ["como le va", "qué tal", "que tal", "todo bien"],
      respuesta: "Es una situación compleja, pero mantengo la disposición de colaborar y aclarar lo que sea necesario." },

    { palabras_clave: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
      respuesta: "Soy ingeniero de sistemas y analista de redes. Trabajo en el diseño de estructuras de comunicación digital y análisis de información en entornos tecnológicos." },

    { palabras_clave: ["como ha estado", "cómo ha estado", "como le ha ido"],
      respuesta: "Ha sido un periodo de alta presión por la investigación, pero continúo respondiendo dentro de los parámetros establecidos." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "Sí, el trabajo en análisis de redes digitales implica monitoreo constante de información, plataformas y flujos de comunicación en tiempo real." },

    { palabras_clave: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
      respuesta: "Soy colombiano y he desarrollado mi trayectoria profesional en el ámbito tecnológico y de análisis de sistemas de comunicación."},

    { palabras_clave: ["donde vive", "vive donde", "residencia", "domicilio"],
      respuesta: "Prefiero mantener la información de mi residencia en reserva por razones de seguridad personal." },

    { palabras_clave: ["estado civil", "casada", "soltera"],
      respuesta: "Mi situación personal no guarda relación con los hechos que se investigan." },

    { palabras_clave: ["familia", "hijos", "esposo"],
      respuesta: "Mi familia no tiene ninguna relación con mis actividades profesionales ni con los hechos bajo investigación." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
      respuesta: "Me interesa la tecnología, la arquitectura de redes, la comunicación digital y el análisis de sistemas complejos." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Soy ingeniero de sistemas con formación en análisis de redes, comunicación digital y seguridad informática." },

    { palabras_clave: ["salario", "sueldo", "cuanto gana", "ingresos"],
      respuesta: "Mis ingresos provienen de actividades profesionales en consultoría tecnológica y análisis de sistemas digitales." },

    { palabras_clave: ["horario", "jornada laboral", "trabajo"],
      respuesta: "Mi trabajo no tiene un horario fijo. Depende de la operación de plataformas, análisis de datos y coordinación técnica de sistemas." },

    { palabras_clave: ["compañeros", "equipo", "organizacion", "organización"],
      respuesta: "He trabajado con distintos profesionales en el área de tecnología, análisis de datos y comunicación digital." },

    { palabras_clave: ["ong", "fundacion", "organización"],
      respuesta: "No estoy vinculado a ONG. Mi trabajo se desarrolla en entornos tecnológicos y de consultoría digital." },

    { palabras_clave: ["vocacion", "vocación", "porque trabaja", "interés"],
      respuesta: "Me interesa entender cómo funcionan las redes de comunicación y cómo se estructuran los flujos de información en entornos digitales complejos." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "Sí, porque me permite analizar sistemas de comunicación y comprender dinámicas de interacción en redes digitales." },

    { palabras_clave: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
      respuesta: "Tengo varios años de experiencia en ingeniería de sistemas, análisis de redes y diseño de arquitecturas de comunicación digital." },

    { palabras_clave: ["ascensos", "carrera profesional", "futuro"],
      respuesta: "Mi enfoque siempre ha sido el desarrollo técnico y el análisis de sistemas complejos de comunicación digital." },

    { palabras_clave: ["contabilidad", "finanzas", "presupuestos"],
      respuesta: "No manejo procesos financieros ni contables. Mi trabajo es estrictamente técnico en el ámbito de sistemas y redes." },

    { palabras_clave: ["dinero", "fondos", "transferencias"],
      respuesta: "No administro recursos económicos ni fondos de terceros. Mi participación es únicamente técnica." },

    { palabras_clave: ["redes", "plataformas", "internet", "tecnologia"],
      respuesta: "Las redes digitales modernas funcionan mediante arquitecturas distribuidas y sistemas de cifrado. Son herramientas estándar en el entorno tecnológico actual." },

    { palabras_clave: ["cifrado", "seguridad", "encriptacion", "tecnología"],
      respuesta: "El cifrado es una medida estándar de seguridad en la comunicación digital para proteger la integridad de la información." },

    { palabras_clave: ["investigacion", "investigación", "proceso", "acusacion", "acusación"],
      respuesta: "Estoy colaborando con la investigación y respondiendo todo lo requerido dentro del marco legal establecido." },

    { palabras_clave: ["violencia", "ataque", "bomba", "atentado", "terrorismo"],
      respuesta: "No participo ni promuevo ningún tipo de violencia. Mi trabajo se limita al análisis y desarrollo de sistemas de comunicación digital." },

    { palabras_clave: ["lider", "guia", "jefe", "organizacion"],
      respuesta: "No ejerzo liderazgo sobre personas ni organizaciones. Me dedico al análisis técnico de redes y estructuras de comunicación." },

    { palabras_clave: ["ideologia", "politica", "activismo", "ideas"],
      respuesta: "El análisis de ideas y discursos es parte del estudio de sistemas sociales, pero no implica control ni dirección sobre acciones de terceros." },

    { palabras_clave: ["intencion", "culpa", "remordimiento", "arrepentido"],
      respuesta: "Mi enfoque siempre ha sido técnico. Las interpretaciones sobre intención deben basarse en evidencia objetiva dentro del proceso." }
  ]
},
// ============================================================
// DELITO #12 — REBELIÓN
// ============================================================
"rebelion_001": {
  "id": "rebelion_001",
  "nombre": "Miguel Andrade",
  "alias": "El Ideólogo",
  "edad": 38,
  "avatar": "img/sospechosos/SAE.png",
  "delito": "Rebelión y Conspiración para la Alteración del Orden Institucional",
  "titulo": "CASO: LA RED DE INSURRECCIÓN DIGITAL",
  "descripcion": "INFORME INVESTIGATIVO — ESTRUCTURA DE INSURRECCIÓN ORGANIZADA\n\nSUJETO: Miguel Andrade | ALIAS: \"El Ideólogo\"\nOCUPACIÓN: Ingeniero de sistemas / consultor en comunicación digital\nPERIODO INVESTIGADO: 18 meses continuos\n\nINCIDENTE:\nSe detecta la formación de una red digital y presencial orientada a la desestabilización del orden institucional mediante coordinación de protestas, sabotajes logísticos y ocupación estratégica de infraestructuras públicas.\n\nEl sospechoso no aparece como ejecutor directo de acciones violentas, pero sí como nodo central de coordinación ideológica, planificación de escenarios de presión social y articulación de grupos operativos.\n\nCOARTADA:\n\"Solo participo en debates políticos y en espacios de libre expresión ciudadana.\"\n\n---\n\nCONTEXTO OPERATIVO:\nLa investigación revela una estructura dividida en tres niveles:\n\n1. NIVEL IDEOLÓGICO:\n   - Producción de contenido doctrinal en redes cerradas\n   - Difusión de discursos de confrontación institucional\n   - Identificación del Estado como \"estructura ilegítima\"\n\n2. NIVEL ORGANIZATIVO:\n   - Coordinación de células autónomas\n   - Asignación de objetivos generales (not firmados directamente)\n   - Uso de foros cifrados para planificación semanal\n\n3. NIVEL OPERATIVO:\n   - Grupos que ejecutan bloqueos, sabotajes logísticos y ocupaciones\n   - Comunicación indirecta mediante intermediarios digitales\n   - Desconexión deliberada entre líder y ejecutores\n\n---\n\nEVIDENCIA:\n- Chats cifrados con instrucciones estratégicas de movilización\n- Mapas de objetivos institucionales (infraestructura crítica)\n- Videos de entrenamiento ideológico y táctico\n- Testimonios de miembros que lo identifican como “guía central”\n- Coincidencias entre reuniones virtuales y hechos de alteración del orden público\n- Transferencias a fondos colectivos sin trazabilidad clara de uso final\n- Uso de lenguaje codificado para evitar rastreo directo de órdenes\n\n---\n\nPATRÓN OBSERVADO:\nEl sospechoso evita órdenes directas, pero utiliza formulaciones ambiguas que permiten ejecución por interpretación.\n\nEjemplo:\n- “activar presión social”\n- “generar impacto visible”\n- “forzar reacción institucional”\n\n---\n\nCONCLUSIÓN INVESTIGATIVA:\nEl rol del sujeto se define como articulador de red insurreccional de baja visibilidad jerárquica, con responsabilidad indirecta pero estructural en la coordinación de acciones contra el orden público.",

  "perfil": "Estratega ideológico con alta capacidad de influencia digital. Construye narrativas políticas complejas para justificar acciones colectivas sin asumir responsabilidad directa.",
  "rasgos_emocionales": "Convicción ideológica rígida, racionalización moral, distanciamiento de consecuencias operativas, control discursivo avanzado",
  "debilidad_detectada": "1) Consistencia en patrones de comunicación entre células y acciones externas. 2) Lenguaje codificado repetitivo asociado a eventos reales. 3) Testimonios convergentes de múltiples miembros. 4) Disociación entre discurso ideológico y resultados operativos concretos.",
  "grado_dificultad": "S+ — COORDINACIÓN IDEOLÓGICA DE BAJA EXPOSICIÓN (Alta resistencia; solo cede ante trazabilidad digital y reconstrucción de red completa).",
  "saludo": "La expresión de disidencias políticas y la vehemencia ideológica no constituyen el delito de rebelión. Ustedes están pretendiendo criminalizar el pensamiento crítico y el legítimo disenso ciudadano.",

  "temas_calificables": {

    "estructura_red": {
      "tema_id": "estructura_red",
      "etiqueta": "Estructura de la red insurreccional",
      "palabras_clave": ["red", "grupo", "organización", "estructura", "células", "niveles", "ideológico", "organizativo", "operativo"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "No existe registro fáctico de una red insurreccional bajo mi mando. Su hipótesis fiscal confunde la afinidad doctrinal con una asociación delictiva armada.",
        "Lo que su informe tipifica como niveles operativos son simplemente comunidades de debate político autónomas que convergen de forma libre en redes cerradas.",
        "La arquitectura del movimiento fue diseñada por mí en tres niveles estrictos: Ideológico, Organizativo y Operativo. Esta estructura celular permitía una desconexión deliberada entre mi consultoría digital y los ejecutores del terreno."
      ]
    },

    "coordinacion_indirecta": {
      "tema_id": "coordinacion_indirecta",
      "etiqueta": "Coordinación sin órdenes explícitas",
      "palabras_clave": ["coordinar", "organizar", "movilizar", "dirigir", "instrucciones", "órdenes", "planificación", "foros"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Yo no emito líneas de mando, órdenes directas ni instrucciones de carácter imperativo a ningún ciudadano. No poseo esa facultad jerárquica.",
        "Comparto análisis geopolíticos y proyecciones estratégicas de libre acceso. Si los colectivos ejecutan acciones basándose en mis teorías, la responsabilidad es de su propia interpretación.",
        "Utilizaba foros cifrados para la planificación semanal con los enlaces del segundo nivel. Desde allí coordinaba de forma indirecta la movilización masiva; las acciones en la calle se ejecutaban de manera sistemática a partir de mis directrices."
      ]
    },

    "lenguaje_ambiguo": {
      "tema_id": "lenguaje_ambiguo",
      "etiqueta": "Uso de lenguaje interpretativo",
      "palabras_clave": ["códigos", "frases", "significado", "interpretación", "mensajes", "lenguaje", "ambiguas", "codificado"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El uso de retórica conceptual y metáforas es un estándar tradicional en el discurso político y la agitación ideológica histórica. No son imperativos jurídicos.",
        "Cada colectivo o individuo asume e interpreta las formulaciones teóricas según sus propias variables de entorno y su nivel de descontento civil.",
        "Sí, implementamos un lenguaje codificado con formulaciones ambiguas calculadas. Frases repetitivas como 'activar presión social', 'generar impacto visible' o 'forzar reacción institucional' eran las órdenes semánticas que los operadores del tercer nivel decodificaban para iniciar los sabotajes logísticos."
      ]
    },

    "movilizacion": {
      "tema_id": "movilizacion",
      "etiqueta": "Convocatoria a acciones colectivas",
      "palabras_clave": ["movilizar", "protesta", "acción", "salir", "calle", "presión", "bloqueos", "sabotajes", "ocupación"],
      "impacto": 47,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mis llamados digitales en las redes sociales convocan de forma exclusiva al debate público pacífico y a la manifestación libre de la inconformidad ciudadana.",
        "La ocupación de espacios públicos o las fricciones en la calle son dinámicas efervescentes e impredecibles derivadas del choque entre la masa y la fuerza del Estado.",
        "El diseño estratégico contemplaba que la protesta social fuera el escenario de cobertura. Detrás de la masa, las células ejecutaban los bloqueos de vías y los sabotajes logísticos para forzar la parálisis del orden público."
      ]
    },

    "objetivos_institucionales": {
      "tema_id": "objetivos_institucionales",
      "etiqueta": "Identificación de objetivos del Estado",
      "palabras_clave": ["instituciones", "gobierno", "objetivos", "infraestructura", "puntos", "crítica", "mapas"],
      "impacto": 49,
      "es_calificable": true,
      "respuestas_evolucion": [
        "No he estructurado cartografías operativas ni fijado objetivos materiales contra las sedes de gobierno u oficinas del aparato estatal.",
        "Los análisis de infraestructura crítica que realizábamos en los foros constituyen estudios técnicos de vulnerabilidad sistémica plenamente lícitos.",
        "Sí, yo mismo tracé los mapas de objetivos institucionales. Identificábamos los puntos de infraestructura crítica y los centros de conectividad que debían ser bloqueados u ocupados para anular la respuesta del gobierno central."
      ]
    },

    "financiamiento_colectivo": {
      "tema_id": "financiamiento_colectivo",
      "etiqueta": "Fondos de operación no trazables",
      "palabras_clave": ["dinero", "fondos", "transferencias", "apoyo", "financiación", "colectivos", "donaciones"],
      "impacto": 42,
      "es_calificable": true,
      "respuestas_evolucion": [
        "No poseo la administración contable ni el manejo de recursos económicos de ningún movimiento político o colectivo de base social.",
        "Las donaciones voluntarias y los microaportes digitales que circulan en internet sirven para costear la infraestructura técnica de las plataformas de comunicación.",
        "Canalizábamos el apoyo económico a través de transferencias fragmentadas hacia fondos colectivos no trazables. Esos recursos financiaban el sostenimiento de las células del tercer nivel y los insumos para sostener la insurrección en las calles."
      ]
    },

    "testigos_red": {
      "tema_id": "testigos_red",
      "etiqueta": "Declaraciones de miembros",
      "palabras_clave": ["testigos", "miembros", "dicen", "declararon", "grupo", "testimonios", "guía"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los testimonios de individuos procesados penalmente bajo presión judicial carecen de validez metodológica. Buscan beneficios a costa de mi nombre.",
        "Ciertos miembros del entorno interpretan de forma errónea y sobredimensionada mi rol como un puente o un asesor en comunicación digital.",
        "Los testimonios convergentes reflejan la realidad de la estructura: las células me identificaban como el guía central del movimiento. Ninguno de ellos tomaba decisiones de gran escala sin que mi validación ideológica estuviera presente."
      ]
    }
  },

  // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Buenas, tengo la mejor disposición de ayudar, que necesita." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Miguel Fernando Andrade Ortega." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.004.101.003 de Flandes Tolima." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 38 años de Flandes Tolima." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la calle 11 No. 157-78, es muy Calmado." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["ideología", "política", "activismo", "ideas", "periodo", "meses"], 
      respuesta: "La fiscalización de mis últimos 18 meses continuos de consultoría digital demuestra un sesgo institucional. El pensamiento subversivo es una respuesta histórica legítima ante la degradación del contrato social." },

    { palabras_clave: ["víctima", "daño", "personas", "caos", "afectados"], 
      respuesta: "La base ciudadana y los miembros del movimiento llegaron a mis plataformas buscando un orden y un blindaje conceptual ante el caos de un Estado ilegítimo. El malestar o la alteración del orden público es transitorio; la estructura de la nueva institucionalidad es permanente." },

    { palabras_clave: ["insurrección", "fuerza", "violencia", "sabotaje"], 
      respuesta: "La delincuencia común utiliza la violencia ciega de forma delictiva para destruir sin un fin superior. Mi método asimétrico busca construir una alternativa de poder real a partir de las cenizas que la demolición de la vieja infraestructura provee." },

    { palabras_clave: ["cifrado", "router", "tecnología", "redes"], 
      respuesta: "Como ingeniero de sistemas, comprendo que la red gubernamental está diseñada para el espionaje masivo de los ciudadanos. Implementar foros cifrados es el único método lícito para salvar la viabilidad del disenso político." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"], 
      respuesta: "La culpa constituye un sesgo psicológico ineficiente que carece de valor en los análisis estratégicos de confrontación. Mi única intención estructural en todo momento fue acelerar las contradicciones de la legalidad vigente y salvar al individuo de su propia sumisión automatizada." },

        // ============================================================
    // RAPPORT Y CONVERSACIÓN INFORMAL
    // ============================================================

    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro bien dentro del contexto de esta diligencia. Estoy dispuesto a responder lo que corresponda dentro de los límites de la investigación." },

    { palabras_clave: ["aqui", "cuenteme", "cuénteme"],
      respuesta: "No tengo inconveniente en explicar mi postura. Considero que muchas interpretaciones sobre mi rol han sido sacadas de contexto." },

    { palabras_clave: ["como le va", "qué tal", "que tal", "todo bien"],
      respuesta: "Es un proceso complejo, pero mantengo la calma. He estado colaborando con lo que se me ha requerido." },

    { palabras_clave: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
      respuesta: "Soy ingeniero de sistemas y consultor en comunicación digital. Trabajo en análisis de redes, difusión de información y estrategias de comunicación en entornos digitales." },

    { palabras_clave: ["como ha estado", "cómo ha estado", "como le ha ido"],
      respuesta: "Ha sido un periodo intenso por la investigación, pero sigo atendiendo mis actividades profesionales y respondiendo a las autoridades." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "Sí, bastante. La consultoría digital implica coordinar múltiples procesos simultáneos y analizar grandes volúmenes de información en tiempo real." },

    { palabras_clave: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
      respuesta: "Soy colombiano y he desarrollado mi trayectoria principalmente en el ámbito tecnológico y de comunicación digital." },

    { palabras_clave: ["estado civil", "casada", "soltera"],
      respuesta: "Mi situación personal no tiene relación con los hechos que se están investigando." },

    { palabras_clave: ["familia", "hijos", "esposo"],
      respuesta: "Mi familia no tiene ninguna relación con mis actividades profesionales ni con los procesos que se analizan." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
      respuesta: "Me interesa la tecnología, la lectura de análisis político y el estudio de sistemas de comunicación digital." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Soy ingeniero de sistemas con formación en comunicación digital, análisis de redes y gestión de plataformas tecnológicas." },

    { palabras_clave: ["salario", "sueldo", "cuanto gana", "ingresos"],
      respuesta: "Mis ingresos provienen de actividades de consultoría tecnológica y servicios profesionales debidamente contratados." },

    { palabras_clave: ["horario", "jornada laboral", "trabajo"],
      respuesta: "Mi trabajo no tiene un horario fijo. Depende de la coordinación de proyectos, análisis de datos y gestión de plataformas digitales." },

    { palabras_clave: ["compañeros", "equipo", "organizacion", "organización"],
      respuesta: "He trabajado con diferentes profesionales en el área de tecnología, comunicación digital y análisis de sistemas distribuidos." },

    { palabras_clave: ["ong", "fundacion", "organización"],
      respuesta: "No estoy vinculado a ONG. Mi trabajo se desarrolla en entornos tecnológicos y de consultoría digital." },

    { palabras_clave: ["porque trabaja", "vocacion", "vocación"],
      respuesta: "Me interesa comprender cómo funcionan las redes de comunicación y cómo influyen en la organización social y digital." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "Sí, porque me permite analizar sistemas complejos y entender dinámicas de información en entornos digitales." },

    { palabras_clave: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
      respuesta: "Tengo varios años de experiencia en ingeniería de sistemas, análisis de redes y consultoría en comunicación digital." },

    { palabras_clave: ["ascensos", "carrera profesional", "futuro"],
      respuesta: "Mi enfoque siempre ha sido la especialización técnica y el desarrollo de proyectos en el ámbito de la comunicación digital." },

    { palabras_clave: ["contabilidad", "finanzas", "presupuestos"],
      respuesta: "No manejo directamente procesos contables. Mi trabajo está centrado en el análisis y diseño de sistemas de comunicación." },

    { palabras_clave: ["donaciones", "fondos", "dinero"],
      respuesta: "No gestiono recursos financieros ni fondos de terceros. Mi participación es estrictamente técnica." },

    { palabras_clave: ["proveedores", "contratos", "intermediarios"],
      respuesta: "En el ámbito tecnológico es común trabajar con diferentes proveedores de servicios digitales y plataformas de infraestructura." },

    { palabras_clave: ["redes", "cifrado", "tecnología", "internet"],
      respuesta: "Las redes digitales modernas utilizan distintos niveles de cifrado y protocolos de comunicación. Son herramientas estándar en el entorno tecnológico actual." },

    { palabras_clave: ["investigacion", "investigación", "proceso", "acusacion", "acusación"],
      respuesta: "Estoy colaborando con la investigación y respondiendo a todo lo que se me solicita dentro del marco legal." },

    { palabras_clave: ["violencia", "sabotaje", "insurrección"],
      respuesta: "No comparto ni ejecuto actos de violencia. Mi trabajo se limita al análisis de comunicación y dinámicas digitales." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"],
      respuesta: "Mi enfoque siempre ha sido técnico. Las interpretaciones sobre intención deben basarse en hechos verificables y no en suposiciones." }
  ]
},
 // ============================================================
// DELITO #13 — DESPLAZAMIENTO FORZADO
// ============================================================
"desplazamiento_forzado_001": {
  "id": "desplazamiento_forzado_001",
  "nombre": "Javier Ríos",
  "alias": "El Coordinador",
  "edad": 31,
  "avatar": "img/sospechosos/Desplazamiento_forzado.png",
  "delito": "Desplazamiento Forzado de Población Civil",
  "titulo": "CASO: LA RUTA DEL DESPOJO SILENCIOSO",
  "descripcion": "INFORME INVESTIGATIVO — DESPOJO SISTEMÁTICO DE TIERRAS RURALES\n\nSUJETO: Javier Ríos | ALIAS: \"El Coordinador\"\nOCUPACIÓN: Empresario agroindustrial / gestor de proyectos rurales\nPERIODO INVESTIGADO: 2022 — 2025\n\nINCIDENTE:\nSe documenta una operación sostenida de desplazamiento forzado en zonas rurales estratégicas, donde comunidades campesinas han sido presionadas para abandonar sus tierras mediante intimidación progresiva, presión económica y manipulación legal.\n\nEl objetivo final identificado es la concentración de tierras agrícolas en manos de un grupo reducido de inversionistas.\n\n---\n\nCONTEXTO OPERATIVO:\n\nEl proceso de desplazamiento no ocurre de forma directa, sino en 3 fases coordinadas:\n\n1. FASE DE PRESIÓN INDIRECTA:\n   - Rumores sobre expropiaciones o demandas legales\n   - Visitas de supuestos “asesores de tierras”\n   - Advertencias informales sobre “riesgos de permanencia”\n\n2. FASE DE INTIMIDACIÓN:\n   - Presencia de seguridad privada en zonas rurales\n   - Daños recurrentes a cultivos y cercas\n   - Amenazas veladas a líderes comunitarios\n\n3. FASE DE REEMPLAZO LEGAL:\n   - Compra de tierras a bajo costo tras presión sostenida\n   - Intermediarios legales aceleran escrituras\n   - Reasentamiento forzado de familias desplazadas\n\n---\n\nEVIDENCIA:\n- Testimonios consistentes de múltiples comunidades desplazadas\n- Registros de compra de tierras inmediatamente después de los abandonos\n- Comunicaciones entre intermediarios de seguridad privada\n- Videos de intimidación en zonas rurales\n- Transferencias vinculadas a compra acelerada de propiedades\n- Denuncias previas ignoradas o archivadas en instituciones locales\n- Coincidencias entre visitas del sospechoso y eventos de desplazamiento\n\n---\n\nPATRÓN IDENTIFICADO:\nEl sospechoso nunca ejecuta amenazas directamente, pero su presencia activa o indirecta coincide con el inicio de procesos de abandono forzado.\n\nFrases recurrentes en su entorno operativo:\n- “reestructuración del territorio”\n- “optimización productiva”\n- “reubicación estratégica de comunidades”\n\n---\n\nCONCLUSIÓN INVESTIGATIVO:\nEl rol del sujeto se define como articulador de red insurreccional de baja visibilidad jerárquica, con responsabilidad indirecta pero estructural en la coordinación de acciones contra el orden público.",

  "perfil": "Operador estratégico de expansión territorial. Utiliza estructuras legales, económicas y de seguridad privada para generar desplazamientos sin intervención directa visible.",
  "rasgos_emocionales": "Frialdad instrumental, racionalización económica del conflicto social, ausencia de empatía territorial, control narrativo avanzado",
  "debilidad_detected": "1) Coincidencia temporal entre su presencia y eventos de desplazamiento. 2) Testimonios múltiples consistentes de comunidades afectadas. 3) Flujo de compra de tierras posterior a intimidaciones. 4) Red de intermediarios con patrones repetitivos de presión.",
  "grado_dificultad": "S+ — DESPOJO ESTRUCTURADO (Alta resistencia; solo se rompe con trazabilidad documental y reconstrucción de red de presión completa).",
  "saludo": "La adquisición corporativa de predios y el saneamiento de títulos informales no constituyen un desplazamiento forzado. Yo no expulso a nadie de sus parcelas; la población rural vende de forma autónoma porque busca mejores oportunidades de liquidez financiera en las ciudades.",

  "temas_calificables": {

    "fase_presion_indirecta": {
      "tema_id": "fase_presion_indirecta",
      "etiqueta": "Inicio del desplazamiento (presión silenciosa)",
      "palabras_clave": ["rumores", "avisos", "asesoría", "riesgo", "tierras", "venta", "expropiaciones", "demandas", "permanencia"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Nuestras visitas de campo se limitan a socializar las proyecciones de inversión y las ventajas del mercado agroindustrial. Jamás desplegamos dinámicas de coacción psicológica.",
        "Enviar asesores de tierras para advertir de manera informal sobre los riesgos jurídicos de la permanencia en predios sin titulación clara es un procedimiento preventivo regular.",
        "Sí... La difusión de rumores controlados sobre supuestas expropiaciones o demandas legales masivas fue el vector inicial. Diseñé esa presión silenciosa para desestabilizar el arraigo de las comunidades y predisponerlos a la venta."
      ]
    },

    "intimidacion": {
      "tema_id": "intimidacion",
      "etiqueta": "Presencia de amenazas indirectas",
      "palabras_clave": ["amenaza", "seguridad", "miedo", "cultivos", "daños", "incidentes", "cercas", "líderes", "intimidación"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El entorno de seguridad en las áreas rurales es altamente complejo. No existe evidencia técnica que vincule los incidentes de orden público con mis proyectos económicos.",
        "Los daños recurrentes a las cercas perimetrales u hostigamientos a cultivos son contingencias ordinarias de linderos entre particulares. Su unidad fiscal exagera los hechos.",
        "La fase de intimidación era indispensable. Los incidentes contra los cultivos y las advertencias veladas a los líderes comunitarios se ejecutaban para inyectar un miedo sistemático, acelerando el abandono forzado de los predios."
      ]
    },

    "seguridad_privada": {
      "tema_id": "seguridad_privada",
      "etiqueta": "Uso de fuerza indirecta",
      "palabras_clave": ["seguridad", "guardias", "control", "empresa", "vigilancia", "comunicaciones", "escoltas"],
      "impacto": 47,
      "es_calificable": true,
      "respuestas_evolucion": [
        "La contratación de personal de vigilancia privada responde exclusivamente a la necesidad corporativa de blindar los activos fijos e infraestructuras del proyecto contra el vandalismo.",
        "Las comunicaciones internas de los guardias se restringen a protocolos de monitoreo perimetral. El personal no ejerce control ni restricciones de movilidad sobre la población civil.",
        "Yo coordinaba las directrices de los anillos de seguridad privada en las zonas rurales. Los guardias se desplegaban de forma estratégica para cercar los accesos y asegurar de manera coercitiva el proceso de salida de los campesinos."
      ]
    },

    "compra_tierras": {
      "tema_id": "compra_tierras",
      "etiqueta": "Adquisición posterior al desplazamiento",
      "palabras_clave": ["compra", "escritura", "venta", "propiedad", "registro", "notaría", "bajo costo", "adquisición"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Nuestras adquisiciones inmobiliarias se ejecutan bajo la normativa del derecho privado, transando predios disponibles en las notarías locales a los precios comerciales fijados.",
        "Es una simple contingencia del libre mercado que el registro de las escrituras coincida temporalmente con los flujos migratorios de los antiguos propietarios hacia los cascos urbanos.",
        "Estructuré el flujo de adquisición de tierras a bajo costo inmediatamente después de que las comunidades abandonaran los predios por la presión. El pánico de los campesinos depreciaba el valor de las hectáreas, optimizando mi retorno de inversión."
      ]
    },

    "intermediarios": {
      "tema_id": "intermediarios",
      "etiqueta": "Red de ejecución indirecta",
      "palabras_clave": ["intermediarios", "abogados", "gestores", "terceros", "notarios", "red", "fachada"],
      "impacto": 43,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los bufetes de abogados y gestores agrarios externos operan bajo su propia autonomía técnica y profesional. No existe una red criminal coordinada.",
        "La tercerización de los trámites ante las notarías y las oficinas de registro de instrumentos públicos es una práctica corporativa estándar para agilizar la titulación corporativa.",
        "Yo actúo como el nodo central y articulador de la red. Subcontrataba a intermediarios legales y firmas de seguridad privada para externalizar la violencia en el campo, garantizando que el despojo sistemático mantuviera una fachada de estricta legalidad empresarial."
      ]
    },

    "testimonio_comunitario": {
      "tema_id": "testimonio_comunitario",
      "etiqueta": "Declaraciones de víctimas",
      "palabras_clave": ["víctimas", "campesinos", "denuncia", "comunidad", "familias", "testimonios", "declaraciones"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las declaraciones de los antiguos ocupantes responden a un resentimiento social derivado de su incapacidad técnica para competir en la economía agroindustrial moderna.",
        "Las denuncias comunitarias acumuladas en las instituciones locales carecen de nexo causal directo conmigo. Son relatos descontextualizados y carentes de soporte contable.",
        "Sé que la consistencia de los testimonios de las múltiples comunidades afectadas bloquea mi defensa... Sí, utilicé la asimetría del sistema para ignorar sus reclamos y forzar el reasentamiento masivo de esas familias."
      ]
    },

    "narrativa_publica": {
      "tema_id": "narrativa_publica",
      "etiqueta": "Contradicción entre discurso y hechos",
      "palabras_clave": ["desarrollo", "progreso", "ayuda", "rural", "inversión", "agroindustrial", "reestructuración", "optimización"],
      "impacto": 40,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Nuestras inversiones inyectan capital, progreso e infraestructura vial en regiones históricamente sumidas en el atraso y el abandono estatal. Impulsamos el desarrollo rural.",
        "Los conceptos operativos de nuestro portafolio corporativo definen de manera técnica la modernización agrícola de los predios. No tienen relación con conductas delictivas.",
        "Mis discursos sobre 'reestructuración del territorio' y 'optimización productiva' eran eufemismos corporativos para legitimar el despojo en las esferas públicas. El desplazamiento de las comunidades era una reubicación estratégica ineludible para concentrar la macroindustria."
      ]
    }
  },

  // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Buenas, tengo muchas cosas importantes, pero que necesita." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Javier Andres Ríos Mejia." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.002.376.254 de Cartagena." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 31 años de Cartagena." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la calle 86 No. 96-00, casa 5, es un lugar muy tranquilo y calmado para  vivir." },
    
    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["periodo", "años", "2022", "2025", "investigación"], 
      respuesta: "La auditoría de mis actividades agroindustriales entre los años 2022 y 2025 demuestra una gestión impecable de balances. Pretender criminalizar la macroinversión rural es un grave error de política económica." },

    { palabras_clave: ["campesinos", "población", "personas", "afectados", "daño"], 
      respuesta: "Esa población flotante llegó a mi entorno de proyectos buscando un orden en sus economías de subsistencia estancadas. El desarraigo o el malestar de la salida es transitorio; la estructura del desarrollo agroindustrial es permanente." },

    { palabras_clave: ["despojo", "desplazamiento", "forzado", "violencia"], 
      respuesta: "La delincuencia agraria común recurre a las armas de fuego para destruir los linderos de forma delictiva. Mi método corporativo busca construir un ecosistema productivo eficiente a partir de las vulnerabilidades informales que el propio sistema de registro de tierras provee." },

    { palabras_clave: ["notaría", "escrituras", "abogados", "legal"], 
      respuesta: "Cada título y transacción cuenta con el aval de notarios públicos y el debido registro formal. Utilizar la asimetría legal es el único método corporativo viable para salvar la rentabilidad de las inversiones agrarias." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"], 
      respuesta: "La culpa constituye una variable contable e ineficiente que carece de aplicación en los análisis de viabilidad macroeconómica. Mi única intención estratégica fue optimizar los mapas de rendimiento y salvar el blindaje corporativo de la firma." },

      // RAPPORT Y CONVERSACIÓN INFORMAL

    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro bien dentro de lo posible. He estado colaborando con la entrega de información y documentos relacionados con los procesos que se están revisando." },

    { palabras_clave: ["aqui", "cuenteme", "cuénteme"],
      respuesta: "Estoy dispuesto a aclarar lo que corresponda sobre las operaciones agroindustriales y las transacciones de tierras que se están analizando." },

    { palabras_clave: ["como le va", "qué tal", "que tal", "todo bien"],
      respuesta: "Ha sido un proceso tenso por la investigación, pero continúo atendiendo mis actividades empresariales con normalidad." },

    { palabras_clave: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
      respuesta: "Soy empresario del sector agroindustrial y gestor de proyectos rurales. Me dedico al desarrollo de inversiones agrícolas y estructuración de tierras productivas." },

    { palabras_clave: ["como ha estado", "cómo ha estado", "como le ha ido"],
      respuesta: "Ha sido una etapa compleja por la revisión de mis actividades en campo, pero sigo colaborando con todo lo requerido por las autoridades." },

    { palabras_clave: ["mucho trabajo", "ocupada", "trabajando mucho"],
      respuesta: "Sí, bastante. La gestión agroindustrial implica coordinación de proyectos, tierras, logística rural y administración de personal en distintas zonas." },

    { palabras_clave: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
      respuesta: "Soy colombiano y he desarrollado mi trabajo principalmente en el sector rural y agroindustrial del país." },

    { palabras_clave: ["donde vive", "vive donde", "residencia", "domicilio"],
      respuesta: "Prefiero no dar detalles específicos de mi residencia por razones de seguridad personal y familiar." },

    { palabras_clave: ["estado civil", "casado", "soltero"],
      respuesta: "Mi situación personal no tiene relación con las actividades agroindustriales que están siendo objeto de investigación." },

    { palabras_clave: ["familia", "hijos", "esposo", "esposa"],
      respuesta: "Mi familia no participa en mis actividades empresariales. Mantengo ese ámbito completamente separado." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
      respuesta: "Me interesa la lectura sobre desarrollo rural, proyectos agrícolas y actividades relacionadas con el campo." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Tengo formación en áreas administrativas y agroindustriales, con experiencia en gestión de proyectos rurales y desarrollo de tierras." },

    { palabras_clave: ["salario", "sueldo", "cuanto gana", "ingresos"],
      respuesta: "Mis ingresos provienen de actividades empresariales en el sector agroindustrial, debidamente registradas y soportadas." },

    { palabras_clave: ["horario", "jornada laboral", "trabajo"],
      respuesta: "El trabajo en el sector rural no tiene horarios fijos. Las actividades dependen de ciclos agrícolas y operación en campo." },

    { palabras_clave: ["compañeros", "equipo", "organizacion", "organización"],
      respuesta: "Trabajo con equipos técnicos, agrónomos, gestores legales y personal operativo en diferentes proyectos rurales." },

    { palabras_clave: ["ong", "ONG", "fundacion", "fundación"],
      respuesta: "No estoy vinculado a ONG. Mi actividad se centra en el desarrollo de proyectos agroindustriales privados." },

    { palabras_clave: ["porque trabaja en ong", "vocacion", "vocación"],
      respuesta: "Mi interés está en el desarrollo productivo del campo y la inversión agroindustrial, no en el sector social." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "Sí. Es un sector exigente, pero con alto impacto en el desarrollo económico rural." },

    { palabras_clave: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
      respuesta: "He trabajado varios años en proyectos agroindustriales, adquisición de tierras y estructuración de operaciones rurales." },

    { palabras_clave: ["ascensos", "carrera profesional", "futuro"],
      respuesta: "He buscado expandir mis proyectos agroindustriales y consolidar operaciones más eficientes en el sector rural." },

    { palabras_clave: ["contabilidad", "finanzas", "presupuestos"],
      respuesta: "La gestión agroindustrial implica control de presupuestos, inversión en tierras, logística rural y administración de recursos." },

    { palabras_clave: ["donaciones", "donantes", "aportes"],
      respuesta: "Algunos proyectos pueden incluir inversiones de terceros, siempre bajo esquemas contractuales y legales establecidos." },

    { palabras_clave: ["proveedores", "contratos", "contratistas"],
      respuesta: "Trabajamos con proveedores agrícolas, contratistas rurales y operadores logísticos del sector agroindustrial." },

    { palabras_clave: ["transferencias", "cuentas en el exterior", "giros internacionales"],
      respuesta: "Las transferencias pueden formar parte de inversiones o compra de insumos agrícolas dentro del comercio internacional." },

    { palabras_clave:["auditoria", "auditoría", "revisoria fiscal", "revisoria"],
      respuesta: "Las operaciones agroindustriales están sujetas a revisiones contables y auditorías internas y externas." },

    { palabras_clave: ["lavado de activos", "blanqueo", "dinero ilegal"],
      respuesta: "He escuchado esas afirmaciones dentro del proceso, pero todas mis operaciones están respaldadas en actividades agroindustriales legales." },

    { palabras_clave: ["investigacion", "investigación", "proceso", "acusacion", "acusación"],
      respuesta: "Estoy colaborando con las autoridades y entregando la documentación necesaria para aclarar cualquier duda." },

    { palabras_clave: ["sobrecostos", "costos inflados", "proyectos ficticios"],
      respuesta: "Los costos en proyectos rurales pueden variar por transporte, clima, mano de obra y condiciones del terreno." },

    { palabras_clave: ["beneficiarios", "destino del dinero", "fondos"],
      respuesta: "Los recursos se destinan a proyectos agroindustriales y adquisición de tierras productivas dentro del marco contractual." },

    { palabras_clave: ["consultores", "intermediarios", "asesores financieros"],
      respuesta: "Es común trabajar con asesores legales, agrónomos y gestores de proyectos en el sector rural." },

    { palabras_clave: ["empresas proveedoras", "proveedores sospechosos", "empresas fachada"],
      respuesta: "La selección de proveedores se hace mediante procesos de verificación técnica y documental dentro de los proyectos agroindustriales." }
  ]
},
 // ============================================================
// DELITO #14 — LAVADO DE ACTIVOS
// ============================================================
"lavado_activos_001": {
  "id": "lavado_activos_001",
  "nombre": "Fernando Castillo",
  "alias": "El Financiero",
  "edad": 27,
  "avatar": "img/sospechosos/Lavado_de_activos.png",
  "delito": "Lavado de Activos y Estructuración Financiera Ilícita",
  "titulo": "CASO: LA ARQUITECTURA DEL DINERO INVISIBLE",
  "descripcion": "INFORME INVESTIGATIVO — SISTEMA FINANCIERO DE OCULTAMIENTO DE CAPITAL\n\nSUJETO: Fernando Castillo | ALIAS: \"El Financiero\"\nOCUPACIÓN: Empresario de comercio exterior / asesor financiero internacional\nPERIODO INVESTIGADO: 2019 — 2025\n\nINCIDENTE:\nSe detecta una red de operaciones financieras diseñada para ocultar, fragmentar y reinsertar capital de origen ilícito dentro del sistema bancario formal mediante estructuras empresariales múltiples.\n\nEl flujo de dinero no sigue una ruta lineal, sino un sistema de capas sucesivas de ocultamiento.\n\n---\n\nCONTEXTO OPERATIVO — ESQUEMA DE LAVADO:\n\nEl sistema identificado opera en 3 fases:\n\n1. FASE DE COLOCACIÓN (entrada del dinero):\n   - Ingreso de grandes sumas en efectivo o transferencias fragmentadas\n   - Uso de empresas de importación/exportación como fachada\n   - Distribución inicial del capital en múltiples cuentas\n\n2. FASE DE ESTRATIFICACIÓN (ocultamiento):\n   - Transferencias internacionales entre empresas pantalla\n   - Uso de testaferros para romper trazabilidad\n   - Simulación de operaciones comerciales inexistentes\n   - Facturación cruzada entre compañías vinculadas\n\n3. FASE DE INTEGRACIÓN (reingreso al sistema legal):\n   - Compra de bienes, inmuebles and activos financieros\n   - Inversión en empresas legítimas\n   - Declaración de ingresos como “ganancias comerciales”\n\n---\n\nEVIDENCIA FINANCIERA:\n\n- Más de 40 sociedades registradas en múltiples jurisdicciones\n- Transferencias circulares entre empresas sin actividad real\n- Facturación inflada sin respaldo logístico\n- Auditorías con inconsistencias estructurales repetidas\n- Uso de apoderados sin capacidad operativa real\n- Correos electrónicos con instrucciones de fragmentación de capital\n- Coincidencias entre ingresos ilícitos y expansión patrimonial acelerada\n\n---\n\nPATRÓN IDENTIFICADO:\nEl sospechoso no mueve dinero directamente de origen a destino.\nEl flujo siempre pasa por mínimo 3 entidades intermedias antes de reintegrarse al sistema legal.\n\nFrases recurrentes detectadas:\n- “optimización fiscal internacional”\n- “estructuración de capital”\n- “reorganización de activos globales”\n\n---\n\nCONCLUSIÓN INVESTIGATIVA:\nEl sujeto opera como arquitecto financiero de un sistema de lavado complejo basado en fragmentación, simulación comercial y reintegración de capital ilícito dentro de estructuras aparentemente legales.",

  "perfil": "Especialista en ingeniería financiera ilícita. Diseña estructuras corporativas complejas para romper trazabilidad del dinero. Alta capacidad técnica en contabilidad internacional y derecho corporativo.",
  "rasgos_emocionales": "Control absoluto, racionalización técnica del delito, ausencia de percepción moral del daño, superioridad intelectual en temas financieros",
  "debilidad_detectada": "1) Patrón repetitivo de circulación de fondos entre mismas entidades. 2) Desfase entre volumen de operaciones y actividad real de empresas. 3) Testimonios de intermediarios financieros. 4) Trazabilidad digital de instrucciones de fragmentación de capital.",
  "grado_dificultad": "S+ — INGENIERÍA FINANCIERA OCULTA (Solo vulnerable a análisis forense contable y reconstrucción completa de flujo de capital).",
  "saludo": "Todas mis operaciones comerciales transnacionales están debidamente auditadas. Todo lo que ejecuto es plenamente legal y se ampara en los vacíos lícitos de la normativa financiera internacional.",

  "temas_calificables": {

    "colocacion_fondos": {
      "tema_id": "colocacion_fondos",
      "etiqueta": "Ingreso inicial de capital",
      "palabras_clave": ["dinero", "efectivo", "ingreso", "cuentas", "transferencia inicial", "colocación", "importación", "exportación"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los flujos monetarios identificados en las cuentas corporativas corresponden a los ingresos comerciales ordinarios de mi firma de importación y exportación.",
        "La distribución inicial de capitales responde a una política técnica de diversificación de fondos líquidos para blindar los activos frente a fluctuaciones bancarias locales.",
        "Sí... Diseñé la fase de colocación mediante inyecciones fragmentadas de efectivo no declarado a los balances. Sabía que usar las compañías de comercio exterior como fachada era la ruta óptima para evadir los controles de alerta inmediata del sistema bancario."
      ]
    },

    "estratificacion": {
      "tema_id": "estratificacion",
      "etiqueta": "Ocultamiento mediante capas financieras",
      "palabras_clave": ["transferencias", "movimientos", "empresas", "cadenas", "intermediarios", "estratificación", "capas", "ocultamiento"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los movimientos financieros circulares son transacciones de arbitraje corporativo totalmente normales entre filiales de un mismo grupo holding.",
        "La gestión internacional de activos globales requiere la dispersión cruzada de fondos entre múltiples jurisdicciones para mitigar la carga fiscal impositiva.",
        "Efectivamente, apliqué un diseño de estratificación financiera mediante capas sucesivas de transferencias. Obligaba a que cada flujo de dinero pasara por un mínimo de 3 entidades intermedias para destruir de forma irreversible la trazabilidad forense."
      ]
    },

    "integracion": {
      "tema_id": "integracion",
      "etiqueta": "Reingreso de dinero al sistema legal",
      "palabras_clave": ["inversión", "compra", "activos", "bienes", "legalizar", "integración", "reingreso", "ganancias"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "La adquisición de bienes inmuebles de alta gama constituye una estrategia lícita de diversificación patrimonial respaldada por balances contables consolidados.",
        "Declarar e inyectar capitales como dividendos o ganancias comerciales de inversiones legítimas es una práctica corporativa estándar en finanzas corporativas.",
        "La fase de integración fue la firma de la arquitectura. El capital ilícito reingresaba al sistema bancario formal completamente legalizado mediante la simulación de utilidades comerciales y la compra acelerada de activos financieros limpios."
      ]
    },

    "sociedades_pantalla": {
      "tema_id": "sociedades_pantalla",
      "etiqueta": "Empresas ficticias o sin operación real",
      "palabras_clave": ["empresa", "sociedad", "pantalla", "registro", "propiedad", "sociedades", "jurisdicciones", "papel"],
      "impacto": 47,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las más de 40 sociedades de mi portafolio se encuentran debidamente constituidas ante los registros de comercio de sus respectivas jurisdicciones internacionales.",
        "Que ciertas compañías de papel exhiban un bajo volumen de actividad logística u operativa real no constituye una infracción; son vehículos jurídicos de reserva.",
        "Admito que la mayoría de esas 40 sociedades eran estructuras pantalla sin operación comercial tangible en la realidad. Su único propósito contable era actuar como tuberías jurídicas para fragmentar y desviar los flujos de dinero."
      ]
    },

    "testaferros": {
      "tema_id": "testaferros",
      "etiqueta": "Uso de intermediarios para ocultar propiedad",
      "palabras_clave": ["representante", "apoderado", "firma", "terceros", "propietario", "testaferros", "titularidad", "apoderados"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los representantes legales que figuran en las actas de constitución son socios y apoderados validados por firmas de corretaje corporativo internacional.",
        "La delegación de firmas a terceros para gestiones administrativas es un mecanismo técnico habitual para descentralizar la gobernanza de un holding global.",
        "Sí... Recluté de forma deliberada a apoderados sin capacidad operativa real ni solvencia patrimonial para actuar como testaferros. El objetivo sistémico era desvincular mi identidad de las cuentas bancarias y ocultar la titularidad real del capital."
      ]
    },

    "facturacion_falsa": {
      "tema_id": "facturacion_falsa",
      "etiqueta": "Simulación de operaciones comerciales",
      "palabras_clave": ["factura", "contrato", "servicio", "proveedor", "inflado", "facturación", "cruzada", "respaldo"],
      "impacto": 43,
      "es_calificable": true,
      "respuestas_evolucion": [
        "La facturación cruzada corresponde al cobro técnico por concepto de consultorías corporativas interinstitucionales y servicios intangibles del grupo.",
        "Cualquier diferencia o desfase entre los soportes aduaneros y los balances financieros responde a variaciones técnicas en los costos logísticos internacionales.",
        "Estructuré un sistema masivo de facturación falsa e inflada entre las compañías vinculadas. Las facturas simulaban importaciones y servicios inexistentes para proveer el respaldo contable que justificara legalmente la salida y entrada de los fondos."
      ]
    },

    "auditoria_forense": {
      "tema_id": "auditoria_forense",
      "etiqueta": "Inconsistencias contables estructurales",
      "palabras_clave": ["auditoría", "balance", "inconsistencia", "registro", "contabilidad", "discrepancias", "desfase", "forense"],
      "impacto": 46,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los estados de resultados consolidan de manera coherente. Mis balances contables han superado inspecciones de firmas auditoras externas.",
        "Los ajustes contables y las discrepancias menores son eventos técnicos previstos en la conciliación de balances en entornos multimoneda.",
        "Sé perfectamente lo que detectó su auditoría forense... El desfase estructural entre la actividad real de las importadoras y el volumen de transferencias evidencia mi ingeniería de ocultamiento. El flujo contable circular era insostenible ante un análisis matricial."
      ]
    },

    "rastro_digital": {
      "tema_id": "rastro_digital",
      "etiqueta": "Evidencia electrónica de coordinación",
      "palabras_clave": ["email", "mensajes", "instrucciones", "digital", "transferencias", "correos", "trazabilidad"],
      "impacto": 42,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los correos electrónicos interceptados contienen directrices estrictamente administrativas sobre la optimización fiscal internacional del holding.",
        "La mensajería digital analizada por sus peritos se descontextualizó para forzar una vinculación semántica con un fraude financiero inexistente.",
        "La trazabilidad digital de mis servidores destruyó la estrategia. Sí, yo emití esos correos con las instrucciones específicas para fraccionar los montos de capital y coordinar las transferencias en cascada a través de las cuentas puente."
      ]
    }
  },

  // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Buenas, espero que sea rapida su entrevista." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Fernando Castillo Mendieta." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.047.987.654 de Barranquilla." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 27 años de Barranquilla." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la calle 80 No. 07-15, es el mejor sector de la ciudad." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["periodo", "años", "2019", "2025", "tiempo", "trayectoria"], 
      respuesta: "La fiscalización de mis movimientos financieros entre los años 2019 y 2025 demuestra una arquitectura impecable de balances. Confundir la reorganización de activos globales con un lavado es un error técnico de su unidad." },

    { palabras_clave: ["origen", "ilícito", "plata", "narco", "corrupción"],
      respuesta: "Esos flujos de capitales externos llegaron a mi entorno corporativo buscando un orden contable y un blindaje estructural ante el caos fiscal del sistema. El origen o el impacto de esos fondos es transitorio; la estructura del balance consolidado es permanente." },

    { palabras_clave: ["fraude", "delito", "blanqueo", "lavar"], 
      respuesta: "La delincuencia financiera desorganizada utiliza el contrabando burdo en efectivo para destruir la estabilidad de los bancos. Mi método busca construir un canal de optimización lícito aprovechando los vacíos institucionales que el propio sistema bancario transnacional nos provee." },

    { palabras_clave: ["holding", "offshore", "cuentas", "bancos"], 
      respuesta: "Constituir un holding o desviar capitales hacia una firma offshore es una práctica corporativa legalizada a nivel mundial. Utilizar la estratificación por capas es el único método corporativo viable para salvar la rentabilidad del capital." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"], 
      respuesta: "La culpa constituye una variable matemática e ineficiente que carece de aplicación práctica en la ingeniería financiera internacional. Mi única intención estratégica en todo momento fue optimizar los balances y salvar el blindaje de la estructura corporativa." },
    
        // RAPPORT Y CONVERSACIÓN INFORMAL

    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro bien dentro de lo posible. He estado colaborando con la entrega de toda la información financiera requerida por las autoridades." },

    { palabras_clave: ["aqui", "cuenteme", "cuénteme"],
      respuesta: "Estoy tratando de entender el alcance de algunas observaciones sobre mis operaciones. No tengo problema en responder lo que esté a mi alcance técnico." },

    { palabras_clave: ["como le va", "qué tal", "que tal", "todo bien"],
      respuesta: "Ha sido un proceso complejo por la investigación, pero sigo atendiendo mis asuntos personales y empresariales con normalidad." },

    { palabras_clave: ["que hace", "qué hace", "a que se dedica", "qué se dedica"],
      respuesta: "Soy empresario en comercio exterior y asesor financiero. Me dedico a la estructuración de operaciones internacionales y gestión de inversiones." },

    { palabras_clave: ["como ha estado", "cómo ha estado", "como le ha ido"],
      respuesta: "Ha sido un periodo de mucha presión por la revisión de mis movimientos financieros, pero sigo colaborando con todo lo requerido." },

    { palabras_clave: ["mucho trabajo", "ocupada", "trabajando mucho"],
      respuesta: "Sí, bastante. La gestión de comercio exterior y estructuras corporativas internacionales implica supervisar múltiples operaciones simultáneas." },

    { palabras_clave: ["de donde es", "dónde nació", "lugar de nacimiento", "origen"],
      respuesta: "Soy colombiano y he desarrollado mi actividad profesional principalmente en el ámbito del comercio internacional y las finanzas corporativas." },

    { palabras_clave: ["donde vive", "vive donde", "residencia", "domicilio"],
      respuesta: "Prefiero no entrar en detalles específicos sobre mi residencia por temas de seguridad personal y familiar." },

    { palabras_clave: ["estado civil", "casado", "soltero"],
      respuesta: "Mi situación personal no tiene relación con las operaciones financieras que están siendo objeto de revisión." },

    { palabras_clave: ["familia", "hijos", "esposo", "esposa"],
      respuesta: "Mi familia no participa en mis actividades empresariales y prefiero mantener completamente separado ese ámbito." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre", "aficiones"],
      respuesta: "Me interesa la lectura sobre economía global, análisis de mercados y temas de logística internacional." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Soy profesional en áreas administrativas y financieras, con formación complementaria en comercio exterior y estructuración corporativa." },

    { palabras_clave: ["salario", "sueldo", "cuanto gana", "ingresos"],
      respuesta: "Mis ingresos provienen de actividades empresariales debidamente registradas y reportadas conforme a la normativa fiscal aplicable." },

    { palabras_clave: ["horario", "jornada laboral", "trabajo"],
      respuesta: "El comercio internacional no tiene horarios fijos. Las operaciones requieren seguimiento constante debido a distintos husos horarios." },

    { palabras_clave: ["compañeros", "equipo", "organizacion", "organización"],
      respuesta: "Trabajo con equipos multidisciplinarios en distintas jurisdicciones para la gestión de operaciones financieras y comerciales." },

    { palabras_clave: ["ong", "ONG", "fundacion", "fundación"],
      respuesta: "No estoy vinculado a organizaciones sin ánimo de lucro. Mi actividad está centrada en el sector empresarial y financiero." },

    { palabras_clave: ["porque trabaja en ong", "vocacion", "vocación"],
      respuesta: "Mi interés profesional está en la optimización de estructuras financieras y el comercio internacional, no en el sector social." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "Sí. Es un campo exigente pero intelectualmente desafiante, especialmente por la complejidad de las operaciones internacionales." },

    { palabras_clave: ["experiencia", "años de experiencia", "cuanto tiempo lleva"],
      respuesta: "He trabajado varios años en estructuración financiera, comercio exterior y administración de activos en entornos internacionales." },

    { palabras_clave: ["ascensos", "carrera profesional", "futuro"],
      respuesta: "Siempre he buscado expandir mis operaciones y consolidar estructuras empresariales más eficientes a nivel global." },

    { palabras_clave: ["contabilidad", "finanzas", "presupuestos"],
      respuesta: "La gestión financiera internacional implica conciliación de múltiples monedas, estructuras corporativas y control de flujos de capital complejos." },

    { palabras_clave: ["donaciones", "donantes", "aportes"],
      respuesta: "Algunas operaciones pueden incluir inversiones de terceros o aportes de capital, siempre bajo esquemas contractuales formales." },

    { palabras_clave: ["proveedores", "contratos", "contratistas"],
      respuesta: "Trabajo con proveedores internacionales y aliados logísticos que cumplen funciones dentro de cadenas comerciales formalmente constituidas." },

    { palabras_clave: ["transferencias", "cuentas en el exterior", "giros internacionales"],
      respuesta: "Las transferencias internacionales son parte normal del comercio exterior y requieren estructuras bancarias en distintas jurisdicciones." },

    { palabras_clave: ["auditoria", "auditoría", "revisoria fiscal", "revisoria"],
      respuesta: "Mis operaciones han sido objeto de revisiones contables periódicas por firmas externas dentro de los estándares internacionales." },

    { palabras_clave: ["lavado de activos", "blanqueo", "dinero ilegal"],
      respuesta: "Entiendo la gravedad de esas acusaciones, pero mis operaciones están soportadas en estructuras legales de comercio internacional y deben ser analizadas técnicamente." },

    { palabras_clave: ["investigacion", "investigación", "proceso", "acusacion", "acusación"],
      respuesta: "Estoy colaborando con las autoridades y aportando toda la documentación necesaria para esclarecer cualquier inquietud." },

    { palabras_clave: ["sobrecostos", "costos inflados", "proyectos ficticios"],
      respuesta: "Las variaciones en costos pueden responder a dinámicas del comercio internacional, tasas de cambio y logística global." },

    { palabras_clave: ["beneficiarios", "destino del dinero", "fondos"],
      respuesta: "Los fondos se distribuyen conforme a los contratos comerciales y estructuras de inversión previamente establecidas." },

    { palabras_clave: ["consultores", "intermediarios", "asesores financieros"],
      respuesta: "Es habitual trabajar con asesores externos en comercio internacional, especialmente en temas fiscales y logísticos." },

    { palabras_clave: ["empresas proveedoras", "proveedores sospechosos", "empresas fachada"],
      respuesta: "La selección de proveedores se realiza mediante criterios comerciales y verificación documental dentro de los procesos de debida diligencia." }
  ]
},
// ============================================================
// DELITO #15 — TRÁFICO, FABRICACIÓN O PORTE DE ESTUPEFACIENTES
// ============================================================
"trafico_estupefacientes_001": {
  "id": "trafico_estupefacientes_001",
  "nombre": "Ricardo Mendoza",
  "alias": "El Químico",
  "edad": 38,
  "avatar": "img/sospechosos/Estupefacientes.png",
  "delito": "Tráfico, Fabricación y Porte de Estupefacientes",
  "titulo": "CASO: LABORATORIO DUAL Y RUTA QUÍMICA ENCUBIERTA",
  "descripcion": "INFORME INVESTIGATIVO — RED DE PRODUCCIÓN Y DISTRIBUCIÓN DE ESTUPEFACIENTES\n\nSUJETO: Ricardo Mendoza | ALIAS: \"El Químico\"\nOCUPACIÓN: Químico industrial / propietario de laboratorio certificado\n\nINCIDENTE:\nSe detecta la existencia de un laboratorio químico legal utilizado como fachada para la producción de estupefacientes sintéticos de alta pureza. El producto era distribuido mediante una red logística de mensajeros, empresas de transporte y bodegas intermedias.\n\nHORA:\nOperación sostenida entre 2021 y 2025, con incrementos de producción en periodos específicos coincidiendo con incautaciones en rutas urbanas y rurales.\n\nCOARTADA:\n\"Solo fabrico insumos químicos para uso industrial y académico. No tengo relación con drogas.\"\n\nCONTEXTO OPERATIVO:\n- Laboratorio legal con áreas restringidas sin registro oficial de inspección completa.\n- Zona oculta dentro de la planta destinada a síntesis de compuestos controlados.\n- Producción fragmentada en lotes pequeños para evitar detección en controles.\n- Uso de facturación legal para insumos químicos que en realidad eran precursores modificados.\n- Red de distribución compuesta por mensajeros independientes sin conocimiento total del sistema.\n- Uso de bodegas satélite para almacenamiento temporal antes de distribución.\n- Rutas de envío camufladas como transporte de productos industriales.\n\nDINÁMICA DE LA RED:\n1. Producción en laboratorio principal (fase química)\n2. Empaque en bodega secundaria (fase logística)\n3. Distribución mediante terceros (fase de dispersión)\n4. Recolección de pagos en cuentas fragmentadas y terceros\n5. Reinversión en insumos químicos legales\n\nEVIDENCIA:\n- Incautación de laboratorio con sustancias controladas y precursores modificados\n- Fórmulas químicas manuscritas y digitales de producción de estupefacientes\n- Registros de cámaras mostrando empaquetado nocturno en zonas restringidas\n- Mensajes cifrados con instrucciones de producción y rutas de entrega\n- Testimonios de empleados sobre double uso del laboratorio\n- Rastreo financiero con ingresos superiores a ventas legales reportadas\n- Intercepción de paquetes etiquetados como “químicos industriales”\n- Vinculación de bodegas externas con almacenamiento de sustancias ilegales",

  "perfil": "Altamente técnico, meticuloso y controlador. Usa conocimiento científico como blindaje. Divide operaciones en fases para evitar rastreo directo.",
  "rasgos_emocionales": "Frialdad analítica, racionalización técnica, control total de procesos, baja empatía, justificación científica de sus actos.",
  "debilidad_detectada": "1) Inconsistencia entre capacidad productiva y ventas legales declaradas. 2) Evidencia de zona oculta sin registro sanitario. 3) Testimonios convergentes de empleados sobre producción ilícita. 4) Rutas logísticas repetidas con patrones de tráfico de sustancias. 5) Desfase financiero entre insumos comprados y producción legal reportada.",
  "grado_dificultad": "S+ — OPERADOR QUÍMICO-LOGÍSTICO (Resistente a la entrevista general. Vulnerable a evidencia técnica, química y trazabilidad logística completa).",
  "saludo": "Toda la actividad en mis instalaciones se ciñe de manera estricta a la investigación y el procesamiento molecular. Mis compuestos están formalmente registrados y autorizados para uso industrial y académico de alta pureza. No confundan la síntesis avanzada con delincuencia común.",

  "temas_calificables": {

    "laboratorio_dual": {
      "tema_id": "laboratorio_dual",
      "etiqueta": "Uso de laboratorio legal como fachada",
      "palabras_clave": ["laboratorio", "zona", "producción", "químico", "área", "instalaciones", "reactivos", "planta", "restringidas", "oculta"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las instalaciones de mi planta operan bajo licencias vigentes del ministerio de salud. Todo reactivo y equipo listado en nuestro inventario cuenta con una justificación técnica formal.",
        "El diseño de la planta logística incluye sectores de acceso controlado para proteger patentes industriales y resguardar la manipulación de compuestos volátiles ordinarios de uso académico.",
        "Sí... La planta presentaba un diseño dual. Estructuré una zona oculta fortificada dentro del laboratorio, exenta de los registros de inspección, destinada exclusivamente a albergar los reactivos críticos para la síntesis sin alterar los balances visibles."
      ]
    },

    "produccion_sintetica": {
      "tema_id": "produccion_sintetica",
      "etiqueta": "Fabricación de estupefacientes",
      "palabras_clave": ["droga", "sintético", "fórmula", "producción", "síntesis", "químico", "sustancia", "precursores", "pureza", "lotes"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mi actividad profesional se limita a la estabilización de polímeros y la comercialización de insumos químicos para la macroindustria. No sintetizo alcaloides comunes.",
        "Ciertas variables de la catálisis y las fórmulas manuscritas halladas pueden ser malinterpretadas por peritos forenses que carecen de un entrenamiento avanzado en bioquímica orgánica.",
        "No tiene sentido negar la evidencia molecular de sus laboratorios... Yo diseñé las fórmulas de los estupefacientes sintéticos de alta pureza. Fragmentaba el procesamiento en lotes pequeños y modificaba los precursores para alterar las bandas de espectrometría y evadir los controles estándar de aduanas."
      ]
    },

    "red_logistica": {
      "tema_id": "red_logistica",
      "etiqueta": "Red de distribución encubierta",
      "palabras_clave": ["mensajero", "ruta", "envío", "distribución", "paquete", "transporte", "bodega", "camufladas", "dispersión"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El despacho de mis productos industriales se ejecuta mediante operadores logísticos comerciales externos debidamente autorizados para el transporte de carga pesada.",
        "La tercerización de los fletes y el uso de mensajeros independientes responde a un modelo de optimización de costos de mi firma, no a una red clandestina de dispersión.",
        "Yo tracé la ruta química encubierta. Camuflaba los cargamentos ilícitos bajo etiquetas de 'químicos industriales legítimos' y utilizaba empresas de mensajería fraccionada; los conductores realizaban la dispersión física sin tener la capacidad cognitiva de comprender el sistema."
      ]
    },

    "bodegas_satelite": {
      "tema_id": "bodegas_satelite",
      "etiqueta": "Almacenamiento intermedio",
      "palabras_clave": ["bodega", "almacén", "depósito", "guardado", "stock", "oculto", "intermedio", "satélite", "empaque"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El stock remanente de nuestras materias primas requiere bodegas con control térmico estricto para evitar el desgaste o la degradación natural de los reactivos.",
        "El uso de depósitos externos transitorios es una práctica ordinaria de almacenamiento intermedio para agilizar las fases logísticas de distribución nacional.",
        "Sí... Implementé una red de bodegas satélite estratégicamente ubicadas fuera del radar de la planta principal. Esos depósitos operaban como la fase logística de empaque nocturno, aislando el producto terminado antes de ser inyectado en las rutas urbanas."
      ]
    },

    "facturacion_doble": {
      "tema_id": "facturacion_doble",
      "etiqueta": "Discrepancy entre facturación y producción",
      "palabras_clave": ["factura", "ventas", "ingresos", "registro", "contabilidad", "empresa", "dinero", "desfase", "compras"],
      "impacto": 47,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Nuestra contabilidad corporativa se encuentra blindada y consolidada. Las compras de insumos se justifican plenamente en los libros contables presentados.",
        "Cualquier desfase financiero o diferencia administrativa entre las materias primas adquiridas y el inventario final reportado responde a mermas técnicas de evaporación en la planta.",
        "Su auditoría forense detectó el quiebre contable. El incremento patrimonial y el desfase de ingresos provenían directamente del flujo de efectivo de las fases de dispersión. Usábamos facturación legal de productos industriales para justificar el ingreso del dinero sucio."
      ]
    },

    "comunicacion_codificada": {
      "tema_id": "comunicacion_codificada",
      "etiqueta": "Mensajes cifrados y órdenes",
      "palabras_clave": ["mensaje", "chat", "código", "instrucción", "coordinar", "whatsapp", "correo", "cifrados", "instrucciones"],
      "impacto": 44,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las comunicaciones con mi equipo operativo se limitan al intercambio de instrucciones técnicas de laboratorio y reportes ordinarios de seguridad industrial.",
        "La mensajería digital interceptada por su unidad técnica utiliza tecnicismos e indicaciones de fórmulas que sus analistas están forzando semánticamente.",
        "Admitó el uso sistemático de chats cifrados con codificación técnica. Yo emitía las instrucciones de producción molecular y fijaba las coordenadas horarias de las rutas de entrega mediante un algoritmo de comunicación cerrado para proteger las operaciones."
      ]
    }
  },
  // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Hola, espero que despejen todas sus inquietudes por favor no me demoren." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Ricardo Mendoza Trejos." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.963.852.741 de Pasto." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 38 años de Pasto." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la carrera 103 No. 124-11, tengo espacios adaptados a mi altura." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["periodo", "años", "2021", "2025", "tiempo", "operación"], 
      respuesta: "La fiscalización de mis balances industriales y compras de reactivos entre los años 2021 y 2025 demuestra una trazabilidad técnica pulcra. Confundir la optimización molecular con el narcotráfico común es un sesgo elemental de su unidad." },

    { palabras_clave: ["mensajeros", "empleados", "personas", "afectados", "daño"], 
      respuesta: "Esos individuos periféricos llegaron a mi planta buscando un orden operativo y una directriz clara ante el caos logístico que manejaban en el mercado informal. El impacto adictivo o el dolor colateral es transitorio; la estructura de la eficiencia bioquímica es permanente." },

    { palabras_clave: ["droga", "tráfico", "cocaína", "sintéticos"], 
      respuesta: "La delincuencia desorganizada utiliza canales ciegos de contrabando rústico para mover sustancias. Mi método busca construir una alternativa de procesamiento molecular sofisticada a partir de las vulnerabilidades que las licencias industriales del propio Estado nos proveen." },

    { palabras_clave: ["fórmulas", "manuscritos", "química", "ciencia"], 
      respuesta: "La manipulación analítica de elementos y la síntesis avanzada es un patrimonio de la ciencia. Utilizar el fraccionamiento por lotes pequeños es el único método corporativo viable para salvar la viabilidad y rentabilidad del capital científico." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"], 
      respuesta: "La culpa constituye una variable cognitiva e ineficiente que carece de aplicación práctica dentro del método científico. Mi única intención estratégica en todo momento fue optimizar los mapas de rendimiento molecular y salvar el blindaje técnico de mi laboratorio corporativo." },

        // RAPORT Y CONVERSACION INFORMAL 
    // ==================================

    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro estable. He dedicado mi vida al trabajo técnico y a la gestión de procesos químicos complejos, así que este tipo de situaciones no me resultan ajenas." },

    { palabras_clave: ["que tal", "qué tal", "todo bien", "como le va"],
      respuesta: "Todo dentro de lo habitual. La operación de laboratorio requiere control constante y toma de decisiones precisas." },

    { palabras_clave: ["que mas", "qué más", "que cuenta", "qué cuenta"],
      respuesta: "Sin novedades relevantes. Continúo con mis actividades de análisis y supervisión de procesos industriales." },

    { palabras_clave: ["a que se dedica", "que hace", "qué hace", "ocupacion", "ocupación"],
      respuesta: "Soy químico industrial. Me dedico al desarrollo, control y optimización de procesos químicos en laboratorio." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "El trabajo en laboratorio es constante. Siempre hay procesos que monitorear, ajustar y validar." },

    { palabras_clave: ["de donde es", "dónde nació", "origen"],
      respuesta: "Soy de Pasto. Mi trayectoria profesional se ha desarrollado principalmente en el sector químico industrial." },

    { palabras_clave: ["estado civil", "casado", "soltero"],
      respuesta: "Mi vida personal no influye en mis responsabilidades profesionales ni en las actividades que se están revisando." },

    { palabras_clave: ["familia", "esposa", "hijos"],
      respuesta: "Prefiero mantener mi entorno familiar separado de cualquier proceso de carácter investigativo o técnico." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Estudié química industrial con énfasis en procesos de laboratorio, síntesis y control de calidad." },

    { palabras_clave: ["salario", "sueldo", "ingresos", "cuanto gana"],
      respuesta: "Mis ingresos provienen de actividades profesionales en el sector químico y varían según los contratos de producción y asesoría." },

    { palabras_clave: ["experiencia", "años de experiencia", "trayectoria"],
      respuesta: "Tengo varios años de experiencia trabajando en laboratorio, control de sustancias y desarrollo de procesos industriales." },

    { palabras_clave: ["le gusta su trabajo", "le gusta ser quimico"],
      respuesta: "Es un trabajo exigente pero altamente técnico. Requiere precisión, disciplina y control constante de variables." },

    { palabras_clave: ["futuro", "carrera", "ascensos"],
      respuesta: "Mi enfoque siempre ha sido la optimización de procesos y el desarrollo de capacidades técnicas dentro del campo químico." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre"],
      respuesta: "Lectura técnica, investigación química y análisis de procesos industriales." },

    { palabras_clave: ["amigos", "compañeros", "equipo de trabajo"],
      respuesta: "He trabajado con distintos equipos técnicos en laboratorios y entornos industriales a lo largo de mi carrera." },

    { palabras_clave: ["nervioso", "preocupado", "asustado"],
      respuesta: "No. Estoy acostumbrado a entornos de alta exigencia técnica y control de procesos complejos." },

    { palabras_clave: ["abogado", "defensa", "defensor"],
      respuesta: "Cuento con el derecho a la defensa dentro del marco legal correspondiente a este tipo de procedimientos." },

    { palabras_clave: ["cooperar", "colaborar", "ayudar"],
      respuesta: "Responderé dentro del marco de la diligencia y conforme a los procedimientos establecidos." },

    { palabras_clave: ["autoridad", "mando", "liderazgo"],
      respuesta: "En entornos técnicos, la autoridad se basa en el conocimiento, la precisión y la correcta gestión de procesos." },

    { palabras_clave: ["seguridad", "orden publico", "orden público"],
      respuesta: "La seguridad en entornos industriales y químicos depende del cumplimiento estricto de protocolos y controles." },

    { palabras_clave: ["subordinados", "patrulleros", "agentes"],
      respuesta: "Trabajo con personal técnico y auxiliares de laboratorio que siguen procedimientos establecidos de operación." },

    { palabras_clave: ["operativos", "allanamientos", "intervenciones"],
      respuesta: "Las inspecciones en entornos industriales deben realizarse con base en protocolos técnicos y evidencia verificable." },

    { palabras_clave: ["videos", "grabaciones", "camaras", "cámaras"],
      respuesta: "Las grabaciones suelen mostrar momentos aislados de procesos complejos que requieren análisis técnico completo." },

    { palabras_clave: ["denuncias", "quejas", "investigaciones"],
      respuesta: "Cualquier investigación debe basarse en evidencia técnica y análisis verificable de los procesos involucrados." },

    { palabras_clave: ["derechos humanos", "garantias", "garantías"],
      respuesta: "Toda actuación debe respetar el marco legal y los procedimientos establecidos por la normativa vigente." }
  ]
},
// ============================================================
// DELITO #16 — TRÁFICO, FABRICACIÓN O PORTE DE ARMAS DE FUEGO
// ============================================================
"trafico_armas_001": {
  "id": "trafico_armas_001",
  "nombre": "Jorge Ramírez",
  "alias": "El Armero",
  "edad": 33,
  "avatar": "img/sospechosos/Armas.png",
  "delito": "Tráfico, Fabricación y Porte Ilegal de Armas de Fuego",
  "titulo": "CASO: TALLER DUAL Y RED CLANDESTINA DE ARMAMENTO",
  "descripcion": "INFORME INVESTIGATIVO — RED DE FABRICACIÓN, MODIFICACIÓN Y DISTRIBUCIÓN DE ARMAS\n\nSUJETO: Jorge Ramírez | ALIAS: \"El Armero\"\nOCUPACIÓN: Técnico armero / propietario de taller de reparación de armas deportivas\n\nINCIDENTE:\nSe identifica un taller formal de armería utilizado como fachada para la fabricación, modificación y distribución ilegal de armas de fuego, incluyendo pistolas adaptadas, rifles modificados y componentes de alto poder de fuego.\n\nHORA:\nOperación sostenida desde 2020 hasta 2025, con picos de actividad coincidentes con incautaciones de armas en distintos puntos urbanos y rurales.\n\nCOARTADA:\n\"Solo realizo mantenimiento, reparación y ajustes técnicos a armas legales registradas.\"\n\nCONTEXTO OPERATIVO:\n- Taller legal con registro de armería deportiva y permisos parciales de funcionamiento.\n- Área interna oculta destinada a modificación de mecanismos de disparo.\n- Conversión de armas legales en armas automáticas o de mayor capacidad.\n- Fabricación de piezas no registradas (cargadores, cañones, mecanismos de disparo).\n- Uso de clientes ficticios para justificar salidas de armamento del taller.\n- Entregas realizadas mediante terceros sin registro de identidad completa.\n- Transporte de armas en empaques industriales simulando piezas mecánicas.\n- Coordinación de pedidos mediante redes privadas y contactos en clubes de tiro.\n\nDINÁMICA DE LA RED:\n1. Recepción de armas legales o piezas (fachada de mantenimiento)\n2. Modificación interna o fabricación de componentes ilegales\n3. Registro falso de reparación o venta a cliente autorizado\n4. Entrega mediante intermediarios o mensajeros\n5. Reingreso de capital mediante servicios de armería legal\n\nEVIDENCIA:\n- Incautación de armas modificadas con capacidad automática\n- Piezas fabricadas sin registro industrial autorizado\n- Herramientas de modificación de componentes de fuego\n- Registros de clientes inexistentes o falsificados\n- Mensajes con instrucciones de modificación y entrega de armamento\n- Videos del taller mostrando áreas restringidas de fabricación\n- Testimonios de empleados sobre producción y salida de armas ilegales\n- Seguimiento de armas incautadas vinculadas directamente al taller\n- Diferencias entre inventario legal declarado y armas encontradas",

  "perfil": "Técnico altamente capacitado en mecánica de armas. Usa conocimiento legal como blindaje. Divide operaciones entre reparación legítima y modificación clandestina. Evita contacto directo con distribución final.",
  "rasgos_emocionales": "Frialdad técnica, racionalización del trabajo como 'servicio legal', control del proceso, baja empatía, justificación constante de actividad como armería deportiva.",
  "debilidad_detected": "1) Evidencia física de armas modificadas dentro del taller. 2) Diferencias entre inventario legal y armas incautadas. 3) Testimonios de empleados sobre fabricación clandestina. 4) Registros de clientes falsos y entregas no verificables. 5) Correspondencia digital con instrucciones de modificación ilegal.",
  "grado_dificultad": "S+ — ESPECIALISTA ARMERO (Resistente a la entrevista general. Vulnerable a evidencia balística, trazabilidad de armas y análisis técnico de piezas).",
  "saludo": "Cada procedimiento ejecutado en mis estaciones de fresado y rectificación responde de manera estricta a licencias de mantenimiento deportivo vigentes. Todo el armamento que ingresa cuenta con un registro formal. No confundan la optimización de tolerancias mecánicas con el tráfico ilegal.",

  "temas_calificables": {

    "taller_dual": {
      "tema_id": "taller_dual",
      "etiqueta": "Taller legal con área clandestina",
      "palabras_clave": ["taller", "zona", "área", "modificación", "arma", "reparación", "pieza", "fuego", "restringida", "oculta", "permisos"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El establecimiento opera bajo la cobertura legal de un registro de armería deportiva. Cada máquina herramienta y torno está dedicado a reparaciones permitidas bajo la ley.",
        "El plano arquitectónico del taller contempla áreas reservadas para el almacenamiento de nitrato de potasio y procesos de pavonado químico de alta peligrosidad. No son zonas clandestinas.",
        "Sí... El taller presentaba un diseño logístico dual. Estructuré un área interna oculta tras la estación de recarga de munición, fuera del alcance de las inspecciones, con el único fin de albergar la maquinaria especializada para fabricar cañones y componentes sin alterar el inventario legal."
      ]
    },

    "modificacion_armas": {
      "tema_id": "modificacion_armas",
      "etiqueta": "Conversión y modificación de armas",
      "palabras_clave": ["modificar", "automática", "rifle", "pistola", "disparo", "potencia", "mecanismo", "conversión", "cargadores", "cañones"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mis intervenciones mecánicas se limitan al ajuste de disparadores para tiro de precisión, alivio de peso en correderas y coronamiento de cañones deportivos legales.",
        "Alterar la geometría interna de una recámara o modificar un fiador de disparo puede responder a requerimientos técnicos de competición. Su análisis forense está forzando los términos.",
        "No tiene sentido negar la reingeniería balística... Yo mismo ejecutaba la conversión de sistemas de repetición semiautomática a ráfaga completamente automática. Fabricaba cargadores de alta capacidad y fiadores de desconexión modificados que no registraban marcas industriales."
      ]
    },

    "red_distribucion": {
      "tema_id": "red_distribucion",
      "etiqueta": "Distribución mediante intermediarios",
      "palabras_clave": ["entrega", "mensajero", "cliente", "envío", "ruta", "paquete", "intermediario", "transporte", "empaques", "simulando"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El flujo de salida del material reparado se restringe a los titulares que demuestren un permiso de porte vigente. Yo no coordino despachos informales en la calle.",
        "La logística de transporte de suministros pesados o repuestos de clubes de tiro a veces es delegada a mensajeros de carga independientes. Yo no controlo sus identidades.",
        "Yo coordinaba la red de distribución encubierta para romper el nexo legal con el taller. Camuflábamos el armamento modificado dentro de empaques industriales, simulando piezas mecánicas pesadas, y despachábamos mediante intermediarios que no dejaban firmas en la bitácora."
      ]
    },

    "clientes_falsos": {
      "tema_id": "clientes_falsos",
      "etiqueta": "Uso de identidades o clientes ficticios",
      "palabras_clave": ["cliente", "registro", "nombre", "compra", "venta", "identidad", "factura", "ficticios", "falsificados", "salidas"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los libros de control de armas y municiones consolidan de forma nítida. Cada factura emitida corresponde a un usuario con identificación validada.",
        "Cualquier inconsistencia o desfase nominal en las bases de datos de clientes responde a errores tipográficos del personal administrativo al registrar licencias antiguas.",
        "El quiebre de los libros fue deliberado. Estructuré una base de datos con clientes ficticios e identidades falsificadas para justificar legalmente la salida del taller de las armas automáticas que modificábamos, simulando que eran devoluciones de mantenimiento aprobadas."
      ]
    },

    "armas_incautadas": {
      "tema_id": "armas_incautadas",
      "etiqueta": "Evidencia física de armas ilegales",
      "palabras_clave": ["arma", "incautada", "pistola", "rifle", "pieza", "automática", "ensamblaje", "incautaciones", "vinculadas", "trazabilidad"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El armamento incautado en esos operativos que mencionan pudo haber pasado por mi taller años atrás para un mantenimiento legítimo de culatas o miras.",
        "Que los números de serie coincidan parcialmente con mi registro de entradas no establece una coautoría material en las conductas criminales que esos grupos ejecutan en el campo.",
        "La trazabilidad de su evidencia balística destruyó mi cobertura... Sí, esas armas de alto poder de fuego incautadas en los puntos urbanos y rurales salieron de mis estaciones de trabajo. Yo las ensamblé y las modifiqué para su inserción en el mercado clandestino."
      ]
    },

    "comunicacion_digital": {
      "tema_id": "comunicacion_digital",
      "etiqueta": "Mensajes de coordinación",
      "palabras_clave": ["mensaje", "whatsapp", "correo", "instrucción", "pedido", "entrega", "coordinación", "digital", "cifrados", "clubes"],
      "impacto": 42,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las comunicaciones recuperadas de mis terminales contienen especificaciones netamente técnicas sobre el paso de estrías, calibración de recámaras y herrería regular.",
        "La mensajería privada con contactos de los clubes de tiro se limitaba al mercadeo ordinario de accesorios legales y componentes deportivos autorizados.",
        "Admitó la coordinación mediante canales digitales cerrados. Yo recibía los pedidos de modificación de armas y emitía las instrucciones logísticas para la entrega del armamento pesado utilizando lenguaje técnico camuflado para blindar la operación."
      ]
    }
  },

   // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Buenas, tengo muchos compromisos pero toca cumplir con la ley." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Jorge Armando Ramirez Calderon." },
    
    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.111.458.245 de Medellin." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 33 años de Medellin." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la carrera 91 No. 107-00, es muy cerca a todo lo que se necesita en casa." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["periodo", "años", "2020", "2025", "tiempo", "operación"], 
      respuesta: "La fiscalización de mi taller e inventarios mecánicos entre los años 2020 y 2025 demuestra una trazabilidad legal pulcra. Confundir el mantenimiento balístico de precisión con el tráfico de armas es un sesgo metodológico de su unidad." },

    { palabras_clave: ["mensajeros", "empleados", "personas", "afectados", "daño"], 
      respuesta: "Ese personal periférico llegó a mi estación de trabajo buscando un orden operativo y una directriz clara ante el caos técnico que manejaban en sus herramientas. El impacto balístico o el dolor colateral de su uso es transitorio; la estructura de la eficiencia mecánica es permanente." },

    { palabras_clave: ["armas", "tráfico", "fusiles", "munición", "ilegal"], 
      respuesta: "La delincuencia desorganizada utiliza armas rústicas o hechizas que destruyen la precisión del disparo. Mi método busca construir una alternativa de reingeniería metalúrgica sofisticada a partir de las vulnerabilidades que las licencias deportivas del propio Estado nos proveen." },

    { palabras_clave: ["clubes", "tiro", "deportivas", "permisos"], 
      respuesta: "La optimización de mecanismos internos en los clubes de tiro es un patrimonio de la destreza técnica. Utilizar el camuflaje en empaques industriales es el único método corporativo viable para salvar la viabilidad y rentabilidad del capital logístico." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"], 
      respuesta: "La culpa constituye una variable psicológica e ineficiente que carece de aplicación práctica dentro de la mecánica de fluidos y gases. Mi única intención estratégica en todo momento fue optimizar los mapas de rendimiento de fuego y salvar el blindaje técnico de mi firma corporativa." },

          //RAPORT Y CONVERSACION INFORMAL

    { palabras_clave: ["taller", "armería", "armero", "reparación", "mantenimiento"],
      respuesta: "La operación de un taller de armería exige conocimientos avanzados de metalurgia, tolerancias mecánicas y balística aplicada. Mi trabajo siempre estuvo orientado a preservar la funcionalidad técnica de sistemas de fuego legalmente registrados." },

    { palabras_clave: ["inventario", "registro", "armas registradas", "control", "licencias"],
      respuesta: "Los libros de control y las bitácoras del taller reflejan procedimientos administrativos complejos que deben conciliarse constantemente con ingresos, salidas y mantenimientos de armamento deportivo autorizado." },

    { palabras_clave: ["modificación", "conversión", "adaptación", "mecanismo", "automática"],
      respuesta: "Toda intervención mecánica sobre componentes internos puede interpretarse de múltiples formas según el análisis pericial utilizado. La optimización técnica de un mecanismo no implica necesariamente una alteración ilegal de su funcionamiento." },

    { palabras_clave: ["clientes", "compradores", "usuarios", "deportistas"],
      respuesta: "La mayoría de los usuarios que acudían al taller eran aficionados al tiro deportivo, coleccionistas o propietarios legales que buscaban mantenimiento especializado para sus equipos." },

    { palabras_clave: ["empleados", "trabajadores", "ayudantes", "personal"],
      respuesta: "Mi personal se encargaba principalmente de procesos auxiliares de recepción, inventario y acabado superficial. Las labores de precisión técnica siempre estuvieron bajo mi supervisión directa." },

    { palabras_clave: ["balística", "peritaje", "forense", "evidencia técnica"],
      respuesta: "Los análisis balísticos requieren interpretaciones altamente especializadas. Una coincidencia parcial entre componentes o marcas mecánicas no siempre permite establecer una atribución concluyente de fabricación." },

    { palabras_clave: ["clubes", "tiro", "deportivo", "competencia"],
      respuesta: "Los clubes de tiro deportivo constituyen espacios regulados donde se intercambian conocimientos técnicos sobre mantenimiento, precisión y desempeño de armamento autorizado para actividades competitivas." },

    { palabras_clave: ["proveedores", "piezas", "componentes", "materiales"],
      respuesta: "El suministro de piezas metálicas, resortes, cañones y mecanismos especializados forma parte habitual del mercado técnico de reparación y mantenimiento de armas deportivas." },

    { palabras_clave: ["dinero", "ganancias", "negocio", "ingresos", "utilidades"],
      respuesta: "La actividad de armería genera ingresos suficientes cuando se administra correctamente. El mantenimiento especializado y la personalización técnica representan un mercado altamente demandado por usuarios legales." },

    { palabras_clave: ["seguridad", "riesgo", "accidente", "responsabilidad"],
      respuesta: "Toda manipulación de sistemas de fuego exige disciplina técnica estricta. Un error mínimo en la geometría interna de una pieza puede comprometer la integridad del operador y del arma." },

    { palabras_clave: ["familia", "esposa", "hijos", "hogar"],
      respuesta: "Prefiero mantener los asuntos familiares completamente separados de mis actividades profesionales. Mi entorno personal no tiene ninguna relación con esta investigación." },

    { palabras_clave: ["rutina", "día", "trabajo", "jornada"],
      respuesta: "La mayor parte de mis jornadas transcurrían entre diagnósticos mecánicos, ajuste de componentes, control de inventarios y atención de clientes que requerían mantenimiento especializado." },

    { palabras_clave: ["culpa", "arrepentido", "remordimiento", "conciencia"],
      respuesta: "Los conceptos de culpa o remordimiento suelen responder a valoraciones subjetivas. Mi enfoque siempre ha sido eminentemente técnico y orientado a resultados operativos." },

    { palabras_clave: ["2020", "2025", "periodo", "años", "operación"],
      respuesta: "Entre 2020 y 2025 el taller experimentó un crecimiento sostenido en volumen de trabajo, ampliando servicios de reparación, restauración y ajuste de equipos deportivos registrados." }
  ]
},

// ======================================================================
// DELITO #17 — TRÁFICO DE ARMAS DE USO PRIVATIVO DE LAS FUERZAS ARMADAS
// ======================================================================
"trafico_armas_privativo_001": {
  "id": "trafico_armas_privativo_001",
  "nombre": "Víctor Salazar",
  "alias": "El Comandante",
  "edad": 34,
  "avatar": "img/sospechosos/Armas_Privativas.png",
  "delito": "Tráfico Ilegal de Armas de Uso Privativo de las Fuerzas Armadas",
  "titulo": "CASO: RED CLANDESTINA DE DESVÍO DE ARMAMENTO MILITAR",
  "descripcion": "INFORME INVESTIGATIVO — DESVÍO Y COMERCIALIZACIÓN ILEGAL DE ARMAMENTO MILITAR\n\nSUJETO: Víctor Salazar | ALIAS: \"El Comandante\"\nOCUPACIÓN: Ex-oficial técnico de mantenimiento de armamento militar\n\nINCIDENTE:\nSe establece la existencia de una red estructurada dedicada al desvío, almacenamiento y comercialización ilegal de armamento de uso exclusivo de las Fuerzas Armadas, incluyendo fusiles de asalto, ametralladoras ligeras, munición especializada y equipos tácticos militares.\n\nEl sujeto es identificado como el punto central de coordinación logística entre depósitos militares, intermediarios civiles y compradores finales pertenecientes a organizaciones criminales.\n\nHORA:\nOperaciones continuas documentadas entre 2019 y 2025, con incremento de actividad en los últimos 24 meses.\n\nCOARTADA:\n\"Solo realizaba mantenimiento y transporte autorizado de armamento bajo órdenes militares y protocolos oficiales.\"\n\nCONTEXTO OPERATIVO:\n- Desvío sistemático de armamento desde inventarios militares oficiales.\n- Uso de rutas civiles de transporte para mover material bélico sin inspección directa.\n- Creación de registros paralelos para justificar “pérdidas operativas” de armamento.\n- Re-etiquetado de armas para simular baja o traslado interno autorizado.\n- Uso de propiedades privadas como centros de acopio temporal de arsenal.\n- Coordinación con intermediarios civiles para distribución a estructuras criminales.\n- Uso de lenguaje técnico militar para ocultar operaciones ilícitas en comunicaciones.\n\nEVIDENCIA:\n- Incautación de arsenal militar completo fuera de control institucional.\n- Registros oficiales alterados y hojas de inventario con inconsistencias críticas.\n- Mensajes electrónicos con instrucciones de traslado, ocultamiento y entrega de armamento.\n- Testimonios de intermediarios logísticos y ex-colaboradores militares.\n- Evidencia fotográfica y videográfica de almacenamiento clandestino.\n- Rutas de transporte civil asociadas a movimiento de armamento sin autorización.\n- Coincidencias entre desaparición de armamento y entregas a terceros no autorizados.",

  "perfil": "Ex-militar técnico altamente entrenado, con conocimiento profundo en logística de armamento y control de inventarios. Opera con estructura jerárquica encubierta y evita contacto directo con compradores finales.",
  "rasgos_emocionales": "Frialdad extrema, pensamiento estratégico militar, racionalización de desvíos como 'operaciones autorizadas', alta capacidad de control emocional bajo la entrevista.",
  "debilidad_detectada": "1) Desfase entre inventarios oficiales and arsenal incautado. 2) Rutas civiles sin trazabilidad militar. 3) Testimonios de intermediarios que confirman entrega directa. 4) Comunicaciones digitales con patrones de coordinación logística encubierta. 5) Uso repetido de propiedades privadas como puntos de acopio.",
  "grado_dificultad": "S+ — OPERADOR MILITAR DE RED (Alta resistencia. Solo cede ante evidencia física de armamento, trazabilidad logística y testimonios múltiples convergentes).",
  "saludo": "Cada movimiento de material bélico y pertrechos que estuvo bajo mi responsabilidad técnica se ejecutó siguiendo las órdenes de operaciones y los protocolos estrictos de la institución. Un oficial no actúa de manera autónoma; obedece la cadena de mando.",

  "temas_calificables": {

    "arsenal_militar": {
      "tema_id": "arsenal_militar",
      "etiqueta": "Desvío de armas de uso privativo",
      "palabras_clave": ["fusil", "ametralladora", "militar", "privativo", "armamento", "arsenal", "exclusivo", "arma", "asalto", "munición", "táctico"],
      "impacto": 50,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El armamento pesado y las ametralladoras ligeras bajo mi custodia se encontraban amparados por las tablas de organización y equipo autorizadas para la unidad técnica.",
        "Las transferencias de fusiles de asalto e inventarios de munición especializada responden a movimientos logísticos internos para el mantenimiento de la capacidad combativa.",
        "Sí... El arsenal de uso privativo fue extraído de los depósitos oficiales mediante un método de goteo. Aproveché mi acceso técnico para desviar los fusiles de asalto y sistemas de apoyo de las Fuerzas Armadas hacia el mercado negro."
      ]
    },

    "red_logistica": {
      "tema_id": "red_logistica",
      "etiqueta": "Red de transporte y distribución ilegal",
      "palabras_clave": ["ruta", "transporte", "entrega", "mensajero", "intermediario", "envío", "logística", "movimiento", "civiles", "estructuras"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los planes de ruta y el transporte de material bélico contaban con las órdenes de marcha y las guías de movilización reglamentarias firmadas.",
        "La coordinación de la logística mediante vehículos civiles respondía a un protocolo de seguridad operativa para mitigar la visibilidad de los traslados de intendencia.",
        "Yo mismo tracé la red de distribución encubierta. Utilizaba rutas civiles secundarias para evadir los retenes de la policía militar y entregaba el armamento directamente a los intermediarios encargados de abastecer a las estructuras criminales urbanas."
      ]
    },

    "almacenamiento_clandestino": {
      "tema_id": "almacenamiento_clandestino",
      "etiqueta": "Uso de bodegas y propiedades privadas",
      "palabras_clave": ["bodega", "propiedad", "oculto", "almacén", "resguardo", "clandestino", "arma", "privadas", "acopio", "arsenal"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los almacenes de campaña temporales se establecen siguiendo criterios tácticos de dispersión de material para evitar la pérdida del stock ante contingencias.",
        "El resguardo de ciertos lotes de equipo táctico en áreas perimetrales externas obedecía a un retraso logístico en la asignación de los depósitos centrales oficiales.",
        "Admito que las propiedades privadas identificadas operaban como centros de acopio clandestino de la organización. Allí resguardábamos el arsenal militar desviado y re-etiquetábamos los fusiles antes de su distribución definitiva."
      ]
    },

    "documentacion_alterada": {
      "tema_id": "documentacion_alterada",
      "etiqueta": "Manipulación de registros militares",
      "palabras_clave": ["registro", "inventario", "documento", "baja", "permiso", "oficial", "falso", "alterado", "pérdidas", "inconsistencias", "hojas"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las hojas de inventario y los libros de control de armamento pasaban por auditorías internas regulares sin registrar novedades críticas en las actas de entrega.",
        "Cualquier desfase administrativo o inconsistencia en los registros oficiales responde al descarte reglamentario por desgaste del material en misiones de campo.",
        "La documentación militar fue manipulada sistemáticamente por mí. Creaba registros paralelos y actas falsas de 'pérdidas operativas en combate' o 'bajas por obsolescencia técnica' para justificar el desvío y blanquear las salidas del arsenal."
      ]
    },

    "comunicacion_encubierta": {
      "tema_id": "comunicacion_encubierta",
      "etiqueta": "Coordinación digital del tráfico",
      "palabras_clave": ["mensaje", "correo", "whatsapp", "instrucción", "coordinar", "digital", "orden", "chat", "lenguaje", "técnico"],
      "impacto": 40,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las comunicaciones recuperadas de las redes cifradas contienen instrucciones estrictamente técnicas utilizando la terminología reglamentaria del manual de doctrina.",
        "Los correos electrónicos y mensajes de WhatsApp coordinaban tareas administrativas rutinarias de mantenimiento de armamento y logística de repuestos autorizados.",
        "Confieso que utilicé el lenguaje técnico militar de forma cifrada en los canales digitales. Emitía las órdenes de traslado y fijaba los puntos de entrega del material utilizando códigos de intendencia para encriptar la operación ilegal ante los sistemas de inteligencia."
      ]
    }
  },

  // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherent (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Como va todo, estoy interesado que se de rápidamente la entrevista." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Victor Salazar Romero." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.589.357.159 de Casanare." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 34 años de Casanare." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la calle 86 No. 96-00, casa 5, es un lugar muy tranquilo y calmado para  vivir." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["periodo", "años", "2019", "2025", "tiempo", "operaciones"], 
      respuesta: "La auditoría de mis funciones logísticas de intendencia entre los años 2019 y 2025 demuestra una trazabilidad operativa impecable bajo reglamento. Confundir el flujo técnico de pertrechos con el tráfico de armas es un sesgo elemental de su unidad." },

    { palabras_clave: ["compradores", "criminales", "personas", "afectados", "daño"], 
      respuesta: "Esos intermediarios civiles llegaron a mi entorno técnico buscando un orden logístico y una directriz clara ante el caos estructural que manejaban en sus organizaciones de calle. El impacto del uso de la fuerza es transitorio; la estructura del balance estratégico es permanente." },

    { palabras_clave: ["tráfico", "ilegal", "vender", "cartel"], 
      respuesta: "La delincuencia común utiliza armas cortas o hechizas de contrabando rústico para generar caos. Mi método busca construir una alternativa de distribución y reabastecimiento asimétrica sofisticada a partir de las vulnerabilidades que los propios sistemas de inventario del Estado nos proveen." },

    { palabras_clave: ["oficial", "ejército", "fuerzas", "armadas", "institución"], 
      respuesta: "La administración de sistemas de fuego de uso exclusivo es un patrimonio de la destreza estratégica militar. Utilizar el desvío por goteo corporativo es el único método viable para salvar la viabilidad y rentabilidad del capital logístico en zonas en conflicto." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"], 
      respuesta: "La culpa constituye una variable psicológica e ineficiente que carece de aplicación práctica dentro de la doctrina de la guerra y la planeación táctica. Mi única intención estratégica en todo momento fue optimizar los mapas de rendimiento de intendencia y salvar el blindaje técnico de la estructura." },

    //RAPORT Y CONVERSACION INFORMAL
    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
    respuesta: "Me encuentro bien. He operado durante años bajo entornos de presión logística y operacional donde cada decisión debe ejecutarse con precisión." },

    { palabras_clave: ["que tal", "qué tal", "todo bien", "como le va"],
    respuesta: "Sin novedades relevantes. La disciplina y la planificación permiten mantener estabilidad incluso en escenarios complejos." },

    { palabras_clave: ["que mas", "qué más", "que cuenta", "qué cuenta"],
    respuesta: "Nada fuera de lo habitual. Continúo atendiendo asuntos relacionados con actividades técnicas y revisiones administrativas." },

    { palabras_clave: ["a que se dedica", "que hace", "qué hace", "ocupacion", "ocupación"],
    respuesta: "Mi especialidad ha estado ligada al mantenimiento técnico de armamento, control logístico y administración de inventarios estratégicos." },

    { Palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
    respuesta: "La logística nunca se detiene. Cada movimiento de material requiere coordinación, control y supervisión permanente." },

    { palabras_clave: ["de donde es", "dónde nació", "origen"],
    respuesta: "Soy de Casanare. Gran parte de mi experiencia profesional se desarrolló en entornos operativos y técnicos." },

    { palabras_clave: ["estado civil", "casado", "soltero"],
    respuesta: "Mi situación personal carece de relevancia frente a los asuntos técnicos que se están evaluando." },

    { palabras_clave: ["familia", "esposa", "hijos"],
    respuesta: "Mi familia siempre permaneció completamente al margen de cualquier actividad relacionada con mi trabajo." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
    respuesta: "Recibí capacitación especializada en sistemas de armamento, logística militar, mantenimiento técnico y control de inventarios." },

    { palabras_clave: ["salario", "sueldo", "ingresos", "cuanto gana"],
    respuesta: "Percibí los ingresos correspondientes a las responsabilidades técnicas y operativas que desempeñé." },

    { palabras_clave: ["experiencia", "años de experiencia", "trayectoria"],
    respuesta: "He dedicado años al manejo técnico de material estratégico, control de depósitos y operaciones de soporte logístico." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
    respuesta: "La logística militar exige precisión absoluta. Un error menor puede comprometer operaciones completas." },

    { palabras_clave: ["futuro", "carrera", "ascensos"],
    respuesta: "Siempre consideré que la disciplina, la eficiencia y los resultados operativos son los factores que determinan el progreso profesional." },

    { palabras_clave: ["donde vive", "residencia", "vive donde", "direccion"],
    respuesta: "Resido actualmente en una zona residencial de Bogotá. Prefiero mantener detalles específicos en reserva." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre"],
    respuesta: "Me interesan temas relacionados con mecánica, equipamiento técnico, historia militar y análisis estratégico." },

    { palabras_clave: ["amigos", "compañeros", "equipo de trabajo"],
    respuesta: "A lo largo de mi trayectoria trabajé con personal técnico, especialistas logísticos y operadores de distintas unidades." },

    { palabras_clave: ["nervioso", "preocupado", "asustado"],
    respuesta: "No. La presión es una condición permanente dentro de cualquier estructura operativa seria." },

    { palabras_clave: ["abogado", "defensa", "defensor"],
    respuesta: "Como cualquier ciudadano, ejerceré plenamente mis derechos y garantías procesales." },

    { palabras_clave: ["cooperar", "colaborar", "ayudar"],
    respuesta: "Responderé dentro de los parámetros que corresponden a esta diligencia y conforme a las disposiciones legales vigentes." },

    { palabras_clave: ["comandante", "alias", "porque le dicen"],
    respuesta: "Los apodos suelen surgir por costumbre dentro de ciertos entornos laborales. No les atribuyo mayor importancia." },

    { palabras_clave: ["ejercito", "ejército", "militar", "fuerzas armadas"],
    respuesta: "Las instituciones militares funcionan bajo principios de disciplina, jerarquía y cumplimiento estricto de procedimientos." },

    { palabras_clave: ["cadena de mando", "ordenes", "órdenes", "superiores"],
    respuesta: "Toda operación formal debe respetar una estructura jerárquica definida. La coordinación depende de la cadena de mando." },

    { palabras_clave: ["inventario", "almacen", "almacén", "deposito", "depósito"],
    respuesta: "El control de inventarios estratégicos exige procedimientos rigurosos de registro, custodia y trazabilidad." },

    { palabras_clave: ["logistica", "logística", "transporte", "movilizacion", "movilización"],
    respuesta: "La logística consiste en garantizar que los recursos lleguen al lugar correcto, en el momento correcto y bajo las condiciones adecuadas." },

    { palabras_clave: ["disciplina", "orden", "control"],
    respuesta: "La disciplina no es una opción; es el fundamento de cualquier organización que pretenda operar de forma eficiente." },

    { palabras_clave: ["culpa", "remordimiento", "arrepentimiento"],
    respuesta: "Prefiero analizar los hechos desde una perspectiva objetiva. Las decisiones operativas deben evaluarse mediante resultados y contexto." }

  ]
},
// ============================================================
// DELITO #18 — ABUSO DE AUTORIDAD POR ACTO ARBITRARIO
// ============================================================
"abuso_autoridad_001": {
  "id": "abuso_autoridad_001",
  "nombre": "Miguel Torres",
  "alias": "Inspector Torres",
  "edad": 38,
  "avatar": "img/sospechosos/Abuso_Autoridad.png",
  "delito": "Abuso de Autoridad por Acto Arbitrario",
  "titulo": "CASO: OPERATIVO POLICIAL SIN CONTROL JUDICIAL",
  "descripcion": "INFORME INVESTIGATIVO — PATRÓN SISTEMÁTICO DE ABUSO DE AUTORIDAD\n\nSUJETO: Miguel Torres | ALIAS: \"Inspector Torres\"\nOCUPACIÓN: Oficial de policía de alto rango (unidad operativa)\n\nINCIDENTE:\nSe documenta un patrón reiterado de detenciones arbitrarias, registros sin orden judicial, uso excesivo de fuerza y manipulación de procedimientos policiales en operativos realizados contra civiles.\n\nLas acciones no corresponden a hechos aislados, sino a un esquema continuo de intervención ilegal bajo apariencia de operativos de seguridad.\n\nHORA:\nCasos registrados de forma sostenida entre 2022 y 2025, con incremento en operativos no autorizados en zonas urbanas.\n\nCOARTADA:\n\"Todas mis acciones fueron ejecutadas bajo protocolos de seguridad preventiva y dentro de mis funciones operativas como oficial.\"\n\nCONTEXTO OPERATIVO:\n- Ejecución de detenciones sin orden judicial ni flagrancia comprobada.\n- Clasificación posterior de incidentes como “riesgo operativo” para justificar actuaciones ilegales.\n- Uso de operativos preventivos como excusa para intervenciones arbitrarias.\n- Aplicación de fuerza desproporcionada en situaciones de baja o nula resistencia.\n- Modificación de informes policiales posteriores a los hechos para encubrir irregularidades.\n- Acceso indebido a bases de datos policiales para obtener información privada de ciudadanos.\n- Uso de intimidación verbal y psicológica sobre testigos para evitar denuncias internas.\n- Coordinación con subordinados para mantener coherencia en versiones oficiales alteradas.\n\nEVIDENCIA:\n- Videos de operativos donde se observa uso excesivo de fuerza sin justificación.\n- Registros de detenciones sin soporte judicial ni reporte de flagrancia.\n- Informes policiales editados posterior a las actuaciones.\n- Testimonios de víctimas y testigos presenciales consistentes entre sí.\n- Accesos a bases de datos sin autorización formal documentada.\n- Comunicaciones internas donde se instruye actuar sin orden judicial previa.\n- Denuncias internas ignoradas o archivadas tras intervención del sujeto.",

  "perfil": "Oficial de alto rango con fuerte perfil autoritario. Utiliza su jerarquía para validar decisiones ilegales bajo apariencia de legalidad operativa. Experto en justificar abusos como medidas de seguridad.",
  "rasgos_emocionales": "Frialdad operativa, pensamiento jerárquico rígido, racionalización constante del abuso de poder, baja empatía hacia civiles, alta capacidad de intimidación institucional.",
  "debilidad_detectada": "1) Evidencia audiovisual directa de abusos en operativos. 2) Patrones repetidos de detenciones sin orden judicial. 3) Inconsistencias entre informes oficiales y grabaciones. 4) Testimonios múltiples convergentes de víctimas y testigos. 5) Accesos no autorizados a información privada de ciudadanos.",
  "grado_dificultad": "S — ABUSO INSTITUCIONAL (Resistente a la entrevista verbal, vulnerable a evidencia audiovisual, registros digitales y testimonios múltiples).",
  "saludo": "Todas las operaciones desplegadas bajo mi mando directo se ejecutaron con el fin único de neutralizar vectores de perturbación y garantizar el control territorial de la fuerza. El orden público no se mantiene con contemplaciones jurídicas abstractas; se impone en la calle.",

  "temas_calificables": {

    "detenciones_arbitrarias": {
      "tema_id": "detenciones_arbitrarias",
      "etiqueta": "Privación de libertad sin orden judicial",
      "palabras_clave": ["detención", "arbitraria", "sin orden", "ilegal", "ciudadano", "retención", "procedimiento", "flagrancia", "civiles"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las retenciones temporales en vía pública se ejecutaron bajo el amparo de los protocolos vigentes de seguridad preventiva para la identificación plena de personas sospechosas.",
        "En un entorno urbano crítico, esperar por una orden judicial escrita neutraliza la capacidad de reacción del cuadrante. Catalogamos los procedimientos preventivos bajo la figura de control de riesgo inminente.",
        "Sí... Admito que ordené de forma sistemática la ejecución de detenciones civiles sin que mediara una orden judicial ni existiera flagrancia comprobada. Usábamos los operativos preventivos como una simple excusa jurídica para sacarlos de la calle y ejercer control unilateral."
      ]
    },

    "uso_fuerza_excesiva": {
      "tema_id": "uso_fuerza_excesiva",
      "etiqueta": "Uso desproporcionado de la fuerza",
      "palabras_clave": ["fuerza", "golpes", "violencia", "excesiva", "coacción", "operativo", "resistencia", "desproporcionada", "videos", "agresión"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "El uso de la fuerza física se calibró de manera estrictamente proporcional a los niveles de hostilidad y resistencia pasiva detectados en el perímetro del operativo.",
        "Cuando el personal registra una agresión verbal o desobediencia táctica, los manuales operativos autorizan la escala progresiva de la coacción para mantener el principio de autoridad.",
        "Sé que la evidencia audiovisual de las grabaciones destruye mi defensa... Sí, en esos procedimientos se aplicó una fuerza física completamente desproporcionada contra ciudadanos que no presentaban resistencia mecánica alguna. Mi directriz interna era quebrar su voluntad mediante impacto directo."
      ]
    },

    "informes_alterados": {
      "tema_id": "informes_alterados",
      "etiqueta": "Manipulación de informes policiales",
      "palabras_clave": ["informe", "registro", "modificado", "falsificado", "acta", "documento", "policial", "editados", "subordinados", "versiones"],
      "impacto": 43,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las anotaciones en los libros de población e informes posteriores son sometidas a correcciones de forma puramente técnicas para subsanar errores de redacción administrativa.",
        "El ajuste de las bitácoras y los informes oficiales busca unificar la narrativa del cuadrante bajo criterios de claridad operativa, evitando contradicciones semánticas entre los agentes en turno.",
        "Confieso que edité y alteré los informes policiales de forma posterior a los hechos. Coordiné con mis subordinados la redacción de versiones falsas e incluimos la agresión a la autoridad de forma ficticia para encubrir la ilegalidad de las capturas."
      ]
    },

    "intimidacion_testigos": {
      "tema_id": "intimidacion_testigos",
      "etiqueta": "Presión sobre testigos y víctimas",
      "palabras_clave": ["amenaza", "intimidación", "testigo", "denuncia", "presión", "silencio", "archivadas", "psicológica", "internas"],
      "impacto": 40,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mis comunicaciones con los intervinientes se limitaron a instruirlos sobre las implicaciones legales del procedimiento y las consecuencias del desacato a la ley.",
        "No existió coacción psicológica ni amenazas sobre el entorno de las víctimas. Utilizar advertencias formales sobre la reserva de la investigación no constituye un delito.",
        "Admito que apliqué mi jerarquía de alto rango para ejercer intimidación psicológica directa sobre los testigos. El objetivo institucional era asegurar su silencio y forzar que las denuncias internas fueran archivadas antes de llegar a inspección general."
      ]
    },

    "acceso_datos_privados": {
      "tema_id": "acceso_datos_privados",
      "etiqueta": "Uso indebido de información policial",
      "palabras_clave": ["datos", "información", "privada", "registro", "ciudadano", "base de datos", "acceso", "autorización", "consultas"],
      "impacto": 42,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las consultas en los sistemas de información policial se ejecutaron dentro del marco del perfilamiento táctico rutinario de actores de interés en la jurisdicción.",
        "Poseo credenciales activas de nivel de mando que me otorgan una autorización operativa implícita para verificar antecedentes e historial de seguridad ciudadana.",
        "Reconozco que ejecuté accesos no autorizados a las bases de datos protegidas para extraer información privada de ciudadanos particulares. Utilizaba esos registros digitales personales para perfilar a los líderes de las quejas y neutralizar sus acciones de control."
      ]
    }
  },

  // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Como va todo, voy tarde para mi trabajo que sea rapido por favor." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Miguel Angel Torres Betancourt." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.027.741.852 de Tolima." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 38 años de Tolima." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la carrera 15 No. 120-31, es el mejor sector de la ciudad." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["periodo", "años", "2022", "2025", "tiempo", "sostenida"], 
      respuesta: "La auditoría de mis operativos urbanos entre los años 2022 y 2025 demuestra una efectividad contundente en la reducción del crimen. Pretender criminalizar la mano firme en la calle es un sesgo de su unidad." },

    { palabras_clave: ["civiles", "víctimas", "personas", "ciudadanos", "daño"], 
      respuesta: "Esos ciudadanos e infractores periféricos llegaron a mi zona operativa buscando un orden institucional y una directriz clara ante el caos social en el que habitan. El malestar o el impacto de la fuerza es transitorio; la estructura del control del orden público es permanente." },

    { palabras_clave: ["abuso", "autoridad", "arbitrario", "ilegal"], 
      respuesta: "La delincuencia común utiliza la violencia ciega para disolver los linderos de la ley. Mi método institucional busca construir una alternativa de contención táctica sofisticada a partir de las vulnerabilidades procedimentales que las propias leyes de policía nos proveen." },

    { palabras_clave: ["oficial", "inspección", "rango", "jerarquía"], 
      respuesta: "La administración de unidades de choque de alta intensidad es un patrimonio de la destreza jerárquica policial. Utilizar el margen preventivo es el único método corporativo viable para salvar la viabilidad del orden y blindar el estatus de la institución." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"], 
      respuesta: "La culpa constituye una variable psicológica e ineficiente que carece de aplicación práctica dentro del mando estratégico de patrullas urbanas. Mi única intención estructural en todo momento fue optimizar los indicadores de seguridad y salvar el blindaje institucional de mi fuerza." },

        //RAPORT Y CONVERSACION INFORMAL
    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro perfectamente. Llevo años tomando decisiones operativas bajo presión y estoy acostumbrado a escenarios mucho más complejos que esta entrevista." },

    { palabras_clave: ["que tal", "qué tal", "todo bien", "como le va"],
      respuesta: "Sin novedades relevantes. La seguridad ciudadana exige resultados permanentes y atención constante." },

    { palabras_clave: ["que mas", "qué más", "que cuenta", "qué cuenta"],
      respuesta: "Nada fuera de lo habitual. Continúo atendiendo asuntos relacionados con procedimientos operativos y control territorial." },

    { palabras_clave: ["a que se dedica", "que hace", "qué hace", "ocupacion", "ocupación"],
      respuesta: "He dedicado mi carrera al trabajo operativo policial, coordinación de unidades y ejecución de estrategias de seguridad ciudadana." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "El orden público no descansa. Siempre existen situaciones que requieren intervención inmediata y toma de decisiones rápidas." },

    { palabras_clave: ["de donde es", "dónde nació", "origen"],
      respuesta: "Soy del Tolima y gran parte de mi trayectoria profesional ha estado ligada al servicio operativo." },

    { palabras_clave: ["estado civil", "casado", "soltero"],
      respuesta: "Mi situación familiar no guarda ninguna relación con los procedimientos que se están analizando." },

    { palabras_clave: ["familia", "esposa", "hijos"],
      respuesta: "Mi familia permanece completamente al margen de mis responsabilidades institucionales." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Recibí formación policial especializada en operaciones, liderazgo de unidades y gestión de seguridad ciudadana." },

    { palabras_clave: ["salario", "sueldo", "ingresos", "cuanto gana"],
      respuesta: "Percibo la remuneración correspondiente a mi rango y funciones dentro de la institución." },

    { palabras_clave: ["experiencia", "años de experiencia", "trayectoria"],
      respuesta: "Tengo años de experiencia liderando procedimientos operativos, intervenciones urbanas y coordinación de personal uniformado." },

    { palabras_clave: ["le gusta su trabajo", "le gusta ser policia"],
      respuesta: "Es una profesión exigente. No todos están preparados para asumir la responsabilidad de mantener el orden en situaciones críticas." },

    { palabras_clave: ["futuro", "carrera", "ascensos"],
      respuesta: "Siempre he considerado que la disciplina, los resultados y el liderazgo son los factores que determinan el crecimiento institucional." },

    { palabras_clave: ["donde vive", "residencia", "vive donde", "direccion"],
      respuesta: "Resido en Bogotá. No acostumbro divulgar detalles específicos sobre mi ubicación por razones de seguridad." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre"],
      respuesta: "Entrenamiento físico, prácticas de tiro, actividades relacionadas con preparación táctica y acondicionamiento operativo." },

    { palabras_clave: ["amigos", "compañeros", "equipo de trabajo"],
      respuesta: "He trabajado con numerosos oficiales, patrulleros y unidades especializadas a lo largo de mi carrera." },

    { palabras_clave: ["nervioso", "preocupado", "asustado"],
      respuesta: "No. Quien ha enfrentado situaciones reales de riesgo en la calle aprende a mantener el control emocional." },

    { palabras_clave: ["abogado", "defensa", "defensor"],
      respuesta: "Como cualquier servidor público, ejerceré las garantías procesales que la ley establece." },

    { palabras_clave: ["cooperar", "colaborar", "ayudar"],
      respuesta: "Responderé dentro de los límites que corresponden a esta diligencia y conforme a los procedimientos legales." },

    { palabras_clave: ["autoridad", "mando", "liderazgo"],
      respuesta: "La autoridad no consiste únicamente en impartir órdenes. Consiste en asumir responsabilidad por las decisiones necesarias para mantener el control operativo." },

    { palabras_clave: ["seguridad", "orden publico", "orden público"],
      respuesta: "La seguridad ciudadana exige capacidad de reacción, disciplina operativa y decisiones oportunas. La inacción también tiene consecuencias." },

    { palabras_clave: ["subordinados", "patrulleros", "agentes"],
      respuesta: "Toda unidad operativa requiere coordinación y una línea de mando clara. La disciplina es un elemento esencial en cualquier cuerpo policial." },

    { palabras_clave: ["operativos", "allanamientos", "intervenciones"],
      respuesta: "Los operativos se planean con base en información disponible, evaluación de riesgos y necesidades de seguridad de la jurisdicción." },

    { palabras_clave: ["videos", "grabaciones", "camaras", "cámaras"],
      respuesta: "Las grabaciones suelen mostrar fragmentos aislados de situaciones dinámicas. Un procedimiento completo rara vez puede entenderse observando unos pocos segundos de video." },

    { palabras_clave: ["denuncias", "quejas", "investigaciones"],
      respuesta: "Las denuncias forman parte de cualquier actividad donde existe contacto permanente con ciudadanos. Lo importante es verificar los hechos completos antes de emitir conclusiones." },

    { palabras_clave: ["derechos humanos", "garantias", "garantías"],
      respuesta: "Toda actuación policial debe equilibrar la protección de derechos individuales con la necesidad de preservar la seguridad colectiva." }
  ]
},
// ============================================================
// DELITO #19 — COHECHO
// ============================================================
"cohecho_001": {
  "id": "cohecho_001",
  "nombre": "Jorge Ramírez",
  "alias": "El Negociador",
  "edad": 37,
  "avatar": "img/sospechosos/Cohecho.png",
  "delito": "Cohecho (Soborno)",
  "titulo": "CASO: RED DE SOBORNOS EN CONTRATACIÓN PÚBLICA",
  "descripcion": "INFORME INVESTIGATIVO — ESQUEMA SISTEMÁTICO DE CORRUPCIÓN EN CONTRATACIÓN ESTATAL\n\nSUJETO: Jorge Ramírez | ALIAS: \"El Negociador\"\nOCUPACIÓN: Alto funcionario en procesos de contratación pública\n\nINCIDENTE:\nSe documenta un esquema continuo de cohecho activo y pasivo en procesos de adjudicación de contratos estatales, donde el sujeto actúa como nodo central de negociación ilícita entre entidades públicas y empresas privadas.\n\nEl patrón no corresponde a hechos aislados, sino a una red estructurada de direccionamiento de contratos a cambio de beneficios económicos.\n\nHORA:\nOperaciones detectadas de forma sostenida entre 2021 y 2024, con mayor intensidad en procesos de licitación de infraestructura y servicios públicos.\n\nCOARTADA:\n\"Todas mis decisiones obedecen a criterios técnicos y legales dentro de la contratación pública. No existen sobornos, solo negociaciones institucionales.\"\n\nCONTEXTO OPERATIVO:\n- Dirección de adjudicaciones a empresas previamente coordinadas fuera del proceso formal.\n- Recepción de beneficios económicos mediante pagos fraccionados en efectivo y transferencias a terceros.\n- Uso de intermediarios para evitar vínculo directo entre contratistas y funcionario.\n- Manipulación de evaluaciones técnicas para favorecer ofertas específicas.\n- Ajuste de requisitos contractuales para excluir competidores no alineados.\n- Simulación de competencia en procesos licitatorios previamente definidos.\n- Uso de lenguaje administrativo como mecanismo de encubrimiento de acuerdos ilícitos.\n- Coordinación paralela fuera de los canales oficiales de contratación.\n\nEVIDENCIA:\n- Registros bancarios con transferencias no justificadas a cuentas personales y de terceros.\n- Testimonios de empresarios que confirman pagos a cambio de adjudicaciones.\n- Correos electrónicos y mensajes de mensajería con instrucciones de direccionamiento contractual.\n- Documentos de contratación con alteraciones en requisitos técnicos y evaluaciones.\n- Grabaciones de reuniones privadas donde se discuten beneficios económicos por contratos.\n- Análisis de patrones de adjudicación repetitiva a un mismo grupo de empresas.\n- Rastreo de intermediarios financieros vinculados a múltiples contratos públicos.",

  "perfil": "Funcionario altamente estratégico y negociador. Opera dentro del sistema formal de contratación pública, utilizando su conocimiento normativo para encubrir esquemas de corrupción estructurada.",
  "rasgos_emocionales": "Frialdad calculadora, racionalización institucional del soborno, alta capacidad de persuasión, normalización del intercambio ilegal como práctica administrativa.",
  "debilidad_detectada": "1) Patrón repetido de adjudicaciones direccionadas. 2) Coincidencia entre pagos y contratos asignados. 3) Testimonios múltiples de empresarios involucrados. 4) Uso sistemático de intermediarios financieros. 5) Evidencia digital de coordinación fuera de canales oficiales.",
  "grado_dificultad": "S — CORRUPCIÓN ESTRUCTURAL (Resistente a la entrevista verbal, vulnerable a trazabilidad financiera, análisis documental y testimonio cruzado).",
  "saludo": "Cada adjudicación, firma de actas y resolución emitida bajo mi dirección se ejecutó en estricto cumplimiento de los principios de la función pública y el estatuto contractual. No confundan la gestión técnica de viabilidad corporativa con prebendas ilegales.",

  "temas_calificables": {

    "pagos_indebidos": {
      "tema_id": "pagos_indebidos",
      "etiqueta": "Recepción de sobornos",
      "palabras_clave": ["pago", "soborno", "dinero", "transferencia", "beneficio", "recibí", "comisión", "incentivo", "efectivo", "bancarios", "cuentas"],
      "impacto": 48,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los flujos económicos identificados en mis cuentas bancarias corresponden de forma exclusiva a honorarios legítimos por concepto de asesorías de consultoría técnica privada y estructuración de proyectos.",
        "Ciertos depósitos o movimientos financieros en efectivo pueden interpretarse como inusuales por analistas externos, pero se amparan en contratos de corretaje comercial perfectamente lícitos.",
        "Sí... Recibí beneficios económicos estructurados en comisiones del 10% a cambio de la adjudicación directa de los proyectos de infraestructura. Los pagos fraccionados eran indispensables para evadir el radar del lavado de activos."
      ]
    },

    "direccion_contratos": {
      "tema_id": "direccion_contratos",
      "etiqueta": "Manipulación de adjudicación de contratos",
      "palabras_clave": ["contrato", "adjudicación", "licitación", "empresa", "favorecer", "evaluación", "selección", "competencia", "excluir", "pliegos"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los procesos de selección y licitación pública transcurrieron bajo parámetros de absoluta transparencia, libre competencia e igualdad de oportunidades de mercado.",
        "Si el análisis estadístico muestra un patrón de adjudicación repetitiva a un mismo grupo de empresas, responde a su robustez logística y financiera, no a un favorecimiento unilateral.",
        "Admito que influí directamente en los comités evaluadores. Manipulaba la asignación de puntajes técnicos y ajustaba los requisitos contractuales en los pliegos de condiciones para excluir competidores y favorecer a las firmas previamente coordinadas."
      ]
    },

    "intermediarios_financieros": {
      "tema_id": "intermediarios_financieros",
      "etiqueta": "Uso de terceros para ocultar pagos",
      "palabras_clave": ["intermediario", "tercero", "empresa", "cuenta", "movimiento", "transferencia", "encubrimiento", "intermediarios", "testaferros", "estructuras"],
      "impacto": 42,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los asesores externos y las sociedades de consultoría que intervinieron en las fases previas ejecutaban labores de apoyo puramente administrativo sin injerencia en los fondos.",
        "La triangulación de transferencias contables a través de empresas independientes constituye una práctica de gestión de capital corporativo estándar para mitigar riesgos transaccionales.",
        "Yo mismo diseñé el esquema de encubrimiento utilizando una red de intermediarios financieros de mi total confianza. Las cuentas de terceros y las empresas fachada operaban como esclusas logísticas para diluir el rastro del dinero sucio."
      ]
    },

    "manipulacion_documental": {
      "tema_id": "manipulacion_documental",
      "etiqueta": "Alteración de documentos de contratación",
      "palabras_clave": ["documento", "acta", "contrato", "falsificado", "modificado", "requisito", "registro", "alteraciones", "evaluaciones", "pliegos"],
      "impacto": 40,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las modificaciones aplicadas a los pliegos de condiciones técnicos constituyen enmiendas y adendas perfectamente legales, orientadas a optimizar la calidad de los servicios públicos contratados.",
        "Cualquier inconsistencia en las hojas de evaluación técnica o en las actas de adjudicación responde a meros ajustes de corrección administrativa ordinaria durante el cierre del proceso.",
        "Confieso que ordené la alteración sistemática de las actas de evaluación y los documentos de contratación. Falsificábamos los estudios de mercado preliminares para justificar sobrecostos y amarrar legalmente la licitación."
      ]
    },

    "comunicacion_encubierta": {
      "tema_id": "comunicacion_encubierta",
      "etiqueta": "Coordinación digital de sobornos",
      "palabras_clave": ["mensaje", "correo", "whatsapp", "instrucción", "acuerdo", "pago", "chat", "digital", "canales", "grabaciones", "privadas"],
      "impacto": 38,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Los correos electrónicos y chats analizados por sus peritos corresponden al intercambio de correspondencia institucional rutinaria entre la entidad y los oferentes del mercado.",
        "Están forzando semánticamente mensajes administrativos descontextualizados para intentar probar acuerdos de direccionamiento que jamás se formalizaron por vías oficiales.",
        "Las grabaciones de las reuniones privadas y la mensajería digital destruyeron el blindaje. Sí, coordinaba de forma paralela los pagos ilícitos y emitía instrucciones de direccionamiento técnico mediante canales encriptados de comunicación."
      ]
    },

    "racionalizacion_institucional": {
      "tema_id": "racionalizacion_institucional",
      "etiqueta": "Justificación del acto como función pública",
      "palabras_clave": ["función", "cargo", "procedimiento", "legal", "deber", "decisión", "norma", "prácticas", "estatal", "corruptas"],
      "impacto": 35,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Toda determinación administrativa adoptada bajo mi firma estuvo ceñida estrictamente a mis facultades y funciones públicas discrecionales.",
        "Los puentes de concertación previa con consorcios privados constituyen prácticas habituales de gestión para asegurar que las licitaciones de infraestructura no queden desiertas.",
        "Instrumentalizé deliberadamente mi cargo y el lenguaje administrativo formal para normalizar el soborno. Reduje el estatuto de contratación a un vehículo de enriquecimiento personal, revistiendo de aparente legalidad institucional los acuerdos espurios."
      ]
    }
  },

  // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Como estas, tengo poco tiempo si puede ser rapida la diligencia le agradezco." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Jorge Eliecer Ramirez Cardenas." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.035.568.748 de Ibagué." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 37 años de Ibagué." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la calle 86 No. 96-00, casa 5, es un lugar muy tranquilo y calmado para  vivir." },

    { 
      palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["periodo", "años", "2021", "2024", "tiempo", "operaciones"], 
      respuesta: "La fiscalización de mis procesos de licitación pública entre los años 2021 and 2024 demuestra una arquitectura impecable de ejecución presupuestal. Confundir la gestión de viabilidad de infraestructura con un soborno es un error metodológico de su unidad." },

    { palabras_clave: ["empresarios", "contratistas", "personas", "consorcio", "daño"], 
      respuesta: "Esos empresarios y oferentes privados llegaron a mi entorno de planeación estatal buscando un orden y una directriz clara ante el caos logístico y la lentitud del sistema público. El descontento de los competidores excluidos es transitorio; la estructura del desarrollo vial de los servicios públicos es permanente." },

    { palabras_clave: ["soborno", "cohecho", "corrupción", "plata"], 
      respuesta: "La corrupción desorganizada utiliza maletines ordinarios de efectivo para romper los linderos de la ley. Mi método institucional busca construir un canal de viabilidad corporativa sofisticado a partir de las vulnerabilidades y adendas procedimentales que las propias leyes de contratación del Estado nos deparan." },

    { palabras_clave: ["licitación", "infraestructura", "pliegos", "evaluación"], 
      respuesta: "La administración de macroproyectos estatales de infraestructura y servicios públicos es un patrimonio de la destreza técnica de alta gerencia. Utilizar la discrecionalidad técnica es el único método corporativo viable para salvar la viabilidad y rentabilidad del capital logístico." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"], 
      respuesta: "La culpa constituye una variable moral e ineficiente que carece de aplicación práctica dentro de las finanzas públicas y el análisis presupuestal de grandes obras. Mi única intención estratégica en todo momento fue optimizar los mapas de rendimiento y salvar el blindaje institucional de mi firma corporativa." },

        //RAPORT Y CONVERSACION INFORMAL

    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro perfectamente. Llevo años manejando procesos complejos de contratación y sé que este tipo de revisiones forman parte del funcionamiento institucional." },

    { palabras_clave: ["que tal", "qué tal", "todo bien", "como le va"],
      respuesta: "Todo dentro de la normalidad. Las decisiones públicas siempre generan opiniones encontradas, especialmente cuando involucran grandes proyectos." },

    { palabras_clave: ["que mas", "qué más", "que cuenta", "qué cuenta"],
      respuesta: "Nada fuera de lo habitual. He estado atendiendo requerimientos relacionados con procesos contractuales y revisiones administrativas." },

    { palabras_clave: ["a que se dedica", "que hace", "qué hace", "ocupacion", "ocupación"],
      respuesta: "Mi experiencia profesional está vinculada a la contratación pública, estructuración de proyectos y coordinación de procesos administrativos de alta complejidad." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "La contratación estatal exige supervisión constante. Son procesos donde intervienen múltiples actores y decisiones que impactan recursos significativos." },

    { palabras_clave: ["de donde es", "dónde nació", "origen"],
      respuesta: "Soy de Ibagué y gran parte de mi trayectoria profesional ha estado relacionada con el sector público." },

    { palabras_clave: ["estado civil", "casado", "soltero"],
      respuesta: "Considero que mi situación familiar no guarda ninguna relación con los procesos contractuales que se están analizando." },

    { palabras_clave: ["familia", "esposa", "hijos"],
      respuesta: "Mi familia siempre ha permanecido completamente al margen de mis actividades profesionales." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Tengo formación en administración pública, contratación estatal y gestión de proyectos de inversión." },
    { palabras_clave: ["salario", "sueldo", "ingresos", "cuanto gana"],
      respuesta: "He percibido los ingresos correspondientes a las responsabilidades y funciones que desempeñé dentro de la administración pública." },

    { palabras_clave: ["experiencia", "años de experiencia", "trayectoria"],
      respuesta: "Llevo varios años participando en procesos de contratación, evaluación de proyectos y estructuración de iniciativas públicas." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "La contratación pública es una actividad exigente. Requiere capacidad técnica, negociación y visión estratégica para ejecutar proyectos de gran escala." },

    { palabras_clave: ["futuro", "carrera", "ascensos"],
      respuesta: "Siempre he considerado que los resultados de gestión son el principal indicador de crecimiento profesional dentro de cualquier institución." },

    { palabras_clave: ["donde vive", "residencia", "vive donde", "direccion"],
      respuesta: "Resido en Bogotá. Prefiero mantener la información específica de mi domicilio dentro de mi esfera privada." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre"],
      respuesta: "Me interesan temas relacionados con economía, infraestructura, desarrollo empresarial y análisis de políticas públicas." },

    { palabras_clave: ["amigos", "compañeros", "equipo de trabajo"],
      respuesta: "Durante mi carrera he trabajado con funcionarios, empresarios, consultores y equipos técnicos de diferentes sectores." },

    { palabras_clave: ["nervioso", "preocupado", "asustado"],
      respuesta: "No. Los procesos de control y fiscalización forman parte natural de cualquier actividad relacionada con la contratación estatal." },

    { palabras_clave: ["abogado", "defensa", "defensor"],
      respuesta: "Como cualquier ciudadano, ejerceré plenamente mis derechos procesales y las garantías que establece la ley." },

    { palabras_clave: ["cooperar", "colaborar", "ayudar"],
      respuesta: "No tengo inconveniente en colaborar siempre que las preguntas se formulen dentro de los parámetros institucionales correspondientes." },

    { palabras_clave: ["politica", "política", "alcalde", "gobierno"],
      respuesta: "Las decisiones contractuales deben analizarse desde una perspectiva técnica. La política y la administración suelen mezclarse en la percepción pública, pero no necesariamente en la toma de decisiones." },

    { palabras_clave: ["empresarios", "contratistas", "oferentes"],
      respuesta: "La interacción con empresarios y contratistas es una parte normal de cualquier proceso de contratación pública. La coordinación técnica no debe confundirse automáticamente con acuerdos indebidos." },

    { palabras_clave: ["negociador", "alias", "porque le dicen"],
      respuesta: "Las personas suelen asignar apodos cuando alguien tiene capacidad para resolver conflictos, coordinar intereses y facilitar acuerdos entre diferentes sectores."},

    { palabras_clave: ["reuniones", "encuentros", "almuerzos", "privadas"],
      respuesta: "Las reuniones con actores del sector público y privado son habituales cuando se estructuran proyectos de gran magnitud. El contexto de cada encuentro es lo verdaderamente relevante." },

    { palabras_clave: ["empresa", "consorcio", "constructoras"],
      respuesta: "Los grandes proyectos requieren la participación de múltiples empresas, consorcios y operadores especializados con capacidades técnicas específicas." }
  ]
},
// ============================================================
// DELITO #20 — PECULADO
// ============================================================
"peculado_001": {
  "id": "peculado_001",
  "nombre": "Eduardo Silva",
  "alias": "El Administrador",
  "edad": 35,
  "avatar": "img/sospechosos/Peculado.png",
  "delito": "Peculado",
  "titulo": "CASO: SISTEMA DE DESVÍO DE FONDOS PÚBLICOS MUNICIPALES",
  "descripcion": "INFORME INVESTIGATIVO — DESVÍO SISTEMÁTICO DE RECURSOS PÚBLICOS\nSUJETO: Eduardo Silva | ALIAS: \"El Administrador\"\nOCUPACIÓN: Director financiero de la Secretaría de Hacienda Municipal\n\nINCIDENTE:\nSe establece un esquema prolongado de apropiación y desvío de recursos públicos destinados a infraestructura, salud y programas sociales.\nEl investigado utilizó su cargo para redirigir fondos a cuentas personales, empresas fachada y terceros vinculados.\n\nPERÍODO: Operaciones continuadas entre 2020 y 2023\n\nCOARTADA DEL SUJETO:\n\"Todos los movimientos fueron autorizados dentro del presupuesto aprobado y bajo supervisión institucional. No hubo apropiación indebida.\"\n\nCONTEXTO OPERATIVO:\n- Fragmentación de transferencias para evitar alertas de auditoría.\n- Uso de contratos inflados con proveedores previamente coordinados.\n- Simulación de ejecución de obras y servicios no realizados.\n- Creación de proveedores ficticios para justificar egresos.\n- Uso de subordinados para ejecutar movimientos financieros sin trazabilidad directa.\n- Manipulación de sistemas contables municipales para ocultar desvíos.\n- Desviación progresiva de fondos en pequeñas cantidades para evitar detección inmediata.\n\nCONCLUSIÓN PRELIMINAR:\nEl esquema no corresponde a errores administrativos aislados, sino a una estructura organizada de sustracción de recursos públicos con continuidad temporal y planificación técnica.",
  "evidencia": "-\tExtractos bancarios con transferencias reiteradas a cuentas vinculadas al investigado.\n-\tContratos con sobrecostos injustificados y firmas repetidas entre proveedores.\n-\tRegistros contables alterados en el sistema financiero municipal.\n-\tTestimonios de contadores y funcionarios administrativos.\n-\tAuditorías internas con hallazgos de inconsistencias sistemáticas.\n-\tComunicaciones electrónicas instruyendo ajustes contables no autorizados.\n-\tEvidencia de proveedores inexistentes o sin capacidad operativa real.",
  "perfil": "Funcionario altamente técnico en finanzas públicas. Metódico, estratégico y con capacidad avanzada de ocultamiento contable. Mantiene una imagen de gestor eficiente mientras opera un sistema de desvío progresivo de recursos.",
  "rasgos_emocionales": "Frialdad calculadora, racionalización técnica del delito, alto control emocional, despreocupación por impacto social, fuerte capacidad de justificación administrativa.",
  "debilidad_detected": "1) Patrón contable repetitivo incompatible con ejecución real de proyectos. 2) Testimonios internos consistentes de subordinados. 3) Trazabilidad bancaria directa hacia cuentas vinculadas. 4) Dependencia de terceros que ejecutaban instrucciones financieras sin control legal.",
  "grado_dificultad": "S — ESQUEMA FINANCIERO MUNICIPAL (Resistente a la entrevista verbal. Vulnerable a auditoría forense, trazabilidad bancaria y testimonios internos).",
  "saludo": "Cada movimiento patrimonial y dispersión de recursos ejecutada bajo mi firma se ciñe de manera estricta al marco presupuestal aprobado por el concejo municipal. Mi gestión al frente de la Dirección Financiera de la Secretaría de Hacienda se rige por principios de optimización técnica, no por apropiaciones indebidas.",

  "temas_calificables": {

    "transferencias_irregulares": {
      "tema_id": "transferencias_irregulares",
      "etiqueta": "Desvío sistemático de fondos públicos",
      "palabras_clave": ["transferencia", "desvío", "fondos", "cuenta", "público", "dinero", "movimiento", "banco", "extractos", "hacienda", "municipales", "salud", "infraestructura", "transferencias", "programas sociales"],
      "impacto": 45,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las transferencias identificadas corresponden a la ejecución de partidas presupuestales ordinarias asignadas a los rubros de infraestructura y salud municipal.",
        "Determinadas reubicaciones de saldos y giros fraccionados fueron indispensables para dinamizar el flujo de caja operativo de la tesorería y agilizar la dispersión de recursos.",
        "La trazabilidad bancaria hacia mis cuentas asociadas destruye mi coartada... Sí, diseñé la desviación progresiva de fondos municipales en pequeñas cantidades. Fragmentaba las transferencias para evitar las alarmas automáticas de los sistemas de auditoría."
      ]
    },

    "contratos_fraudulentos": {
      "tema_id": "contratos_fraudulentos",
      "etiqueta": "Contratos inflados o simulados",
      "palabras_clave": ["contrato", "proveedor", "obra", "servicio", "inflado", "falso", "factura", "licitación", "sobrecostos", "simulación", "ejecución"],
      "impacto": 44,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Todos los procesos de contratación se adjudicaron bajo el cumplimiento estricto de la ley de contratación pública, respetando los pliegos de condiciones técnicos.",
        "Los ajustes y variaciones en los valores contractuales finales responden exclusivamente a la indexación de precios de mercado y a imprevistos logísticos en la ejecución de las obras.",
        "Estructuré de manera deliberada la simulación de ejecución de obras y programas sociales que nunca se realizaron en el municipio. Creábamos contratos inflados con firmas repetidas para legalizar los egresos y desviar el remanente contable."
      ]
    },

    "proveedores_ficticios": {
      "tema_id": "proveedores_ficticios",
      "etiqueta": "Creación de proveedores inexistentes",
      "palabras_clave": ["empresa", "ficticio", "registro", "servicio", "factura", "contrato", "identidad", "fachada", "inexistentes"],
      "impacto": 43,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las razones sociales que figuran como contratistas de la Secretaría de Hacienda están formalmente inscritas ante los registros mercantiles correspondientes.",
        "Que ciertos prestadores de servicios presenten una capacidad operativa o infraestructura limitada en sus sedes no invalida la legalidad de su constitución jurídica.",
        "Admito que incorporé al sistema a proveedores ficticios y empresas fachada sin actividad real. Esas entidades de papel operaban con el único fin contable de emitir facturas falsas que respaldaran los desembolsos de los rubros municipales."
      ]
    },

    "manipulacion_contable": {
      "tema_id": "manipulacion_contable",
      "etiqueta": "Alteración de registros financieros",
      "palabras_clave": ["contabilidad", "registro", "libro", "sistema", "alteración", "ajuste", "informe", "auditoría", "alterados", "inconsistencias", "maquillaje", "remanente contable"],
      "impacto": 42,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Las anotaciones en los libros auxiliares reflejan de forma clara la consolidación de los balances financieros de la Secretaría de Hacienda.",
        "Los ajustes contables técnicos y las correcciones de saldos al cierre del ejercicio fiscal son procedimientos rutinarios previstos en la conciliación del sistema municipal.",
        "El maquillaje del sistema contable fue una operación planificada por mí. Alteraba los registros financieros e ingresaba ajustes no autorizados en el software municipal para ocultar las discrepancias contables que generaba el desvío sistemático."
      ]
    },

    "uso_subordinados": {
      "tema_id": "uso_subordinados",
      "etiqueta": "Ejecución indirecta mediante empleados",
      "palabras_clave": ["empleado", "subordinado", "orden", "ejecutar", "movimiento", "finanzas", "responsable", "instrucciones", "contadores", "comunicaciones"],
      "impacto": 38,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Mi función se limitaba a la supervisión macroeconómica y de alta gerencia de los procesos de la Secretaría de Hacienda. Cada funcionario ejecutaba sus tareas autónomas.",
        "Si algunos analistas contables o empleados de tesorería realizaron movimientos irregulares en el software, lo hicieron desbordando mis directrices administrativas formales.",
        "Aproveché la estructura jerárquica para cooptar a mis empleados de confianza. Yo emitía las comunicaciones electrónicas e instrucciones directas para que los contadores subordinados ejecutaran los movimientos irregulares sin dejar rastro de mi firma."
      ]
    },

    "racionalizacion_funcional": {
      "tema_id": "racionalizacion_funcional",
      "etiqueta": "Justificación del delito como gestión pública",
      "palabras_clave": ["gestión", "administración", "función", "presupuesto", "legalidad", "procedimiento", "eficiencia", "institucional", "recursos"],
      "impacto": 35,
      "es_calificable": true,
      "respuestas_evolucion": [
        "Todas las decisiones financieras que adoptó mi despacho se ejecutaron buscando la máxima eficiencia en la distribución de los recursos de la Secretaría.",
        "La flexibilidad presupuestal en las entidades territoriales municipales es una herramienta técnica habitual para cumplir con las metas de la administración pública.",
        "Instrumentalizé de forma cínica el discurso de la eficiencia fiscal para normalizar el saqueo presupuestal. Utilizaba mi lenguaje técnico para camuflar la apropiación del erario, justificando el desvío sistemático como parte del manejo financiero institucional ordinario."
      ]
    }
  },

  // ── RESPUESTAS EXPLORATORIAS POTENCIADAS ────────────────────
  // Preguntas válidas que no son calificables pero merecen
  // respuesta coherente (no penalizan, no aportan puntos).
  respuestas_exploratorias: [
    { palabras_clave: ["hola", "buenos", "dias", "tardes", "noches"], 
      respuesta: "Buenas, tengo toda la disposición de colaborar; sin embargo, solicito la presencia de mi abogado defensor en caso de que esta diligencia trascienda de una entrevista de rutina a un procedimiento formal." },

    { palabras_clave: ["nombre", "quien eres", "nombres y apellidos", "llama", "nombres", "le dicen"], 
      respuesta: "Eduardo Andrés Silva Arango." },

    { palabras_clave: ["cedula", "cédula", "identificacion", "identificación"], 
      respuesta: "Mi cédula es la número 1.024.578.582 de Bogotá." },

    { palabras_clave: ["Edad", "edad"], 
      respuesta: "Tengo 35 años de Bogotá." },

    { palabras_clave: ["residencia", "su casa", "donde vive", "dirección"], 
      respuesta: "Vivó en la calle 134 No. 15-70, Torre San Marcos, apartamento 414." },

    { palabras_clave: ["fragmentación", "fragmentacion", "transaccional"], 
      respuesta: "Entiendo que la fragmentación transaccional se presenta como una estrategia de gestión orientada a preservar la viabilidad presupuestal, la rentabilidad operativa y la eficiencia del capital logístico, no obstante, para dar continuidad formal al requerimiento, solicito la articulación directa con la secretaria, quien puede validar o escalar administrativamente el proceso correspondiente." },

    { palabras_clave: ["rutina", "tranquilo", "no se preocupe"], 
      respuesta: "Entiendo su trabajo, por favor, colaboreme agilizando el proceso, tengo el tiempo medido." },

    { palabras_clave: ["periodo", "años", "2020", "2023", "tiempo", "operaciones"], 
      respuesta: "La fiscalización de mi gestión financiera municipal entre los años 2020 y 2023 demuestra una ingeniería contable y un manejo del flujo de caja impecables. Confundir la optimización presupuestal con un desvío es un error técnico de su unidad." },

    { palabras_clave: ["subordinados", "contadores", "personas", "funcionarios", "daño"], 
      respuesta: "Esos funcionarios y contadores de la Secretaría llegaron a mi entorno administrativo buscando un orden financiero y una directriz clara ante el caos operativo que manejaban en la tesorería. El malestar o el impacto de la reorganización de saldos es transitorio; la estructura del balance consolidado es permanente." },

    { palabras_clave: ["peculado", "desvío", "robo", "plata", "municipio"], 
      respuesta: "La delincuencia fiscal común utiliza retiros rústicos de efectivo o cheques sin fondo para romper los linderos de la ley. Mi método busca construir un canal de viabilidad presupuestal sofisticado a partir de las vulnerabilidades y vacíos procedimentales que los propios sistemas informáticos del Estado nos deparan." },

    { palabras_clave: ["hacienda", "secretaría", "presupuesto", "obras"], 
      respuesta: "La administración del flujo presupuestal en carteras de alta complejidad como Hacienda Municipal es un patrimonio de la destreza técnica de alta gerencia. Utilizar la fragmentación transaccional es el único método corporativo viable para salvar la viabilidad y rentabilidad del capital logístico." },

    { palabras_clave: ["intención", "culpa", "remordimiento", "arrepentido"], 
      respuesta: "La culpa constituye una variable contable e ineficiente que carece de aplicación práctica dentro de las finanzas territoriales y el análisis presupuestal ordinario. Mi única intención estratégica en todo momento fue optimizar los indicadores de gestión y salvar el blindaje institucional de mi firma corporativa." },

    //RAPORT Y CONVERSACION INFORMAL
    { palabras_clave: ["como esta", "cómo está", "como se encuentra", "como anda", "como va"],
      respuesta: "Me encuentro perfectamente. La presión mediática y las interpretaciones erróneas sobre la gestión presupuestal no alteran mi capacidad de análisis ni mi criterio profesional." },

    { palabras_clave: ["que tal", "qué tal", "todo bien", "como le va"],
      respuesta: "Dentro de los parámetros normales. La administración pública siempre genera controversias cuando las personas desconocen la complejidad de los procesos financieros." },

    { palabras_clave: ["que mas", "qué más", "que cuenta", "qué cuenta"],
      respuesta: "Nada extraordinario. Continúo atendiendo requerimientos relacionados con la revisión de decisiones financieras tomadas durante mi gestión." },

    { palabras_clave: ["a que se dedica", "que hace", "qué hace", "ocupacion", "ocupación"],
      respuesta: "Fui director financiero de la Secretaría de Hacienda Municipal. Mi responsabilidad consistía en supervisar la ejecución presupuestal, la planeación financiera y la sostenibilidad de los recursos públicos." },

    { palabras_clave: ["mucho trabajo", "ocupado", "trabajando mucho"],
      respuesta: "La gestión financiera de una entidad territorial implica una carga operativa considerable. Los recursos públicos requieren monitoreo constante y decisiones técnicas permanentes." },

    { palabras_clave: ["de donde es", "dónde nació", "origen"],
      respuesta: "Nací en Bogotá y he desarrollado mi trayectoria profesional principalmente dentro del sector público." },

    { palabras_clave: ["estado civil", "casado", "soltero"],
      respuesta: "Considero que mi situación familiar carece de relevancia frente a los asuntos presupuestales que aquí se analizan." },

    { palabras_clave: ["familia", "esposa", "hijos"],
      respuesta: "Mi familia no participa ni ha participado en la administración financiera municipal. Prefiero mantener ese ámbito al margen." },

    { palabras_clave: ["estudios", "academia", "formacion", "formación"],
      respuesta: "Poseo formación especializada en administración financiera, presupuesto público y gestión fiscal territorial." },

    { palabras_clave: ["salario", "sueldo", "ingresos", "cuanto gana"],
      respuesta: "Percibía la remuneración correspondiente al cargo directivo que ocupaba dentro de la estructura administrativa municipal." },

    { palabras_clave: ["experiencia", "años de experiencia", "trayectoria"],
      respuesta: "He dedicado gran parte de mi vida profesional al análisis financiero, planeación presupuestal y administración de recursos públicos." },

    { palabras_clave: ["le gusta su trabajo", "le gusta lo que hace"],
      respuesta: "La gestión financiera es una disciplina exigente. Requiere visión estratégica, disciplina técnica y capacidad para tomar decisiones complejas." },

    { palabras_clave: ["futuro", "carrera", "ascensos"],
      respuesta: "Siempre he considerado que el desarrollo profesional debe estar respaldado por resultados medibles y eficiencia administrativa." },

    { palabras_clave: ["donde vive", "residencia", "vive donde", "direccion"],
      respuesta: "Resido en la ciudad de Bogotá. No considero prudente proporcionar detalles adicionales sobre mi ubicación personal." },

    { palabras_clave: ["pasatiempos", "hobbies", "tiempo libre"],
      respuesta: "Dedico parte de mi tiempo a lectura especializada en economía, mercados financieros y administración pública." },

    { palabras_clave: ["amigos", "compañeros", "equipo de trabajo"],
      respuesta: "Durante mi gestión trabajé con múltiples profesionales de distintas dependencias técnicas, financieras y administrativas." },

    { palabras_clave: ["nervioso", "preocupado", "asustado"],
      respuesta: "No. La revisión de actuaciones administrativas forma parte de cualquier estructura de control institucional." },

    { palabras_clave: ["abogado", "defensa", "defensor"],
      respuesta: "Como cualquier ciudadano, ejerzo mi derecho a la defensa técnica y al debido proceso." },

    { palabras_clave: ["cooperar", "colaborar", "ayudar"],
      respuesta: "Siempre que las solicitudes se formulen dentro del marco legal correspondiente, no tengo inconveniente en responder." }
  ]
}
};

// =====================================================
// FUNCIONES DE UTILIDAD
// =====================================================

function obtenerCaso(caseId) {
  return BANCO_DE_CASOS[caseId] || null;
}

function obtenerDelitos() {
  const delitosUnicos = {};
  Object.values(BANCO_DE_CASOS).forEach(caso => {
    if (!delitosUnicos[caso.delito]) {
      delitosUnicos[caso.delito] = { nombre: caso.delito, caseId: caso.id };
    }
  });
  return Object.values(delitosUnicos);
}

function obtenerCasosPorDelito(delito) {
  return Object.values(BANCO_DE_CASOS).filter(c => c.delito === delito);
}

function contarCasos() {
  return Object.keys(BANCO_DE_CASOS).length;
}

console.log(`✅ BANCO_DE_CASOS v8 cargado: ${contarCasos()} casos con temas propios`);
