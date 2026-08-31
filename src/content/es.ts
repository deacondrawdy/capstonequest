import type { Content } from "./en";

/**
 * Spanish copy (Mexican Spanish, `usted`).
 *
 * Typed against `Content`, so a missing or misspelled key fails `tsc` instead
 * of silently rendering English on a Spanish page.
 *
 * Pending review by bilingual staff before launch. `/tuition` and `/policies`
 * are the priority: those are billing terms and licensing disclosures, not
 * marketing copy.
 */
export const es: Content = {
  meta: {
    title: "Capstone Quest Academy",
    description:
      "Capstone Quest Academy — Preescolar aprobado por DES en Tucson y Yuma. Aprendizaje a través del juego para niños de 3 a 5 años. Inscripciones abiertas para el ciclo escolar 26–27.",
  },

  common: {
    scheduleTour: "Agende una visita",
    startEnrollment: "Comenzar la inscripción",
    seeRates: "Ver tarifas",
    enroll: "Inscribirse",
    talkWithUs: "Hable con nosotros",
    ourStory: "Nuestra historia",
    backHome: "Volver al inicio",
    hoursLine: "Lunes a viernes, 7:00 a. m. – 6:00 p. m.",
    hoursShort: "7:00 a. m. – 6:00 p. m.",
  },

  banner: {
    text: "Quedan pocos lugares en Tucson y Yuma",
  },

  localeSwitch: {
    toEs: "Español",
    toEn: "English",
    label: "Cambiar idioma",
    offer: "Would you prefer to view this site in English?",
    offerAccept: "View in English",
    offerDismiss: "No, gracias",
  },

  nav: {
    home: "Inicio",
    campuses: "Planteles",
    allCampuses: "Todos los planteles",
    info: "Información",
    infoHome: "Información general",
    about: "Quiénes somos",
    programs: "Programas",
    parents: "Recursos para familias",
    whyUs: "Por qué elegirnos",
    policies: "Políticas",
    tuition: "Colegiatura",
    tuitionFees: "Colegiatura y cuotas",
    careers: "Empleo",
    contact: "Contacto",
    menu: "Menú",
    openMenu: "Abrir el menú",
  },

  footer: {
    blurb: "Preescolar aprobado por DES en Tucson y Yuma desde 2013.",
    visit: "Visítenos",
    explore: "Explorar",
    talk: "Hable con nosotros",
    rights: "Todos los derechos reservados.",
    badges: "Aprobado por DES de Arizona · Con licencia estatal · De 3 a 5 años",
    links: {
      programs: "Programas",
      whyUs: "Por qué elegirnos",
      parents: "Familias",
      about: "Quiénes somos",
      clever: "Clever y portales",
      tuition: "Colegiatura y cuotas",
      policies: "Políticas",
      careers: "Empleo",
      info: "Información",
      tour: "Agende una visita",
    },
  },

  notFound: {
    title: "Página no encontrada",
    text: "Esa página no está en el mapa de Capstone Quest.",
  },

  campuses: {
    tucson: {
      name: "Plantel de Tucson",
      blurb:
        "Un plantel luminoso y acogedor cerca del centro de Tucson: jardines desérticos, áreas de juego con toldos y salones diseñados para niños curiosos de tres a cinco años.",
      feel: "Un hogar fuera de casa, todo el día",
      bannerAlt:
        "El edificio del plantel de Tucson, con una manta que dice “Inscripciones abiertas para preescolar — Con licencia, aprobado por DES, día completo, tarifas accesibles” junto al letrero de AmeriSchool Academy.",
      imageAlt: "Fachada del plantel de Tucson",
    },
    yuma: {
      name: "Plantel de Yuma",
      blurb:
        "Un plantel acogedor en Yuma, con área techada para dejar y recoger a los niños, juegos al aire libre protegidos del sol y el mismo programa preescolar aprobado por DES en el que confían las familias de Arizona.",
      feel: "Un hogar fuera de casa, todo el día",
      bannerAlt: "",
      imageAlt: "Fachada del plantel de Yuma",
    },
  },

  campusPage: {
    eyebrow: "Plantel",
    tourTitle: "Lo que verá en su visita",
    tourList: [
      "Salones acogedores donde se saluda a cada niño por su nombre",
      "Área de juego con toldos y talleres al aire libre",
      "Entrada segura y registro de firma al recoger",
      "El mismo plan de estudios aprobado por DES en ambos planteles",
    ],
    openInMaps: "Abrir en Maps",
    preferOther: "¿Prefiere el otro plantel?",
    compare: "Comparar ubicaciones",
  },

  programs: {
    "pre-k-3s": {
      name: "Preescolar 3 años",
      ages: "3 años",
      hours: "Día completo, 3 o 5 días",
      summary:
        "Un primer año de salón tranquilo y afectuoso. Los niños aprenden a compartir, a expresarse y a explorar por medio del juego, la música y el descubrimiento al aire libre.",
      points: [
        "Centros de juego y tiempo al aire libre todos los días",
        "Lenguaje, lectoescritura inicial y acompañamiento socioemocional",
        "Rutinas predecibles que hacen que los pequeños se sientan seguros",
      ],
    },
    "pre-k-4s": {
      name: "Preescolar 4 años",
      ages: "4 y 5 años",
      hours: "Día completo, listos para kínder",
      summary:
        "Un año de preparación para la escuela que sigue sintiéndose como juego. Los niños salen con confianza, amistades y las habilidades que buscan los maestros de kínder.",
      points: [
        "Prelectura, matemáticas iniciales y curiosidad científica",
        "Habilidades de autonomía e independencia en el salón",
        "Portafolios que acompañan a su hijo al entrar a kínder",
      ],
    },
    "extended-day": {
      name: "Cuidado antes y después de clases",
      ages: "De 3 a 5 años",
      hours: "7:00–8:00 a. m. · 3:30–6:00 p. m.",
      summary:
        "Cuidado complementario con costo adicional, usado por familias trabajadoras desde 2013: llegada temprana y salida tardía con los mismos maestros de confianza.",
      points: [
        "Llegada temprana de 7:00 a 8:00 a. m.",
        "Salida tardía de 3:30 a 6:00 p. m., de lunes a viernes",
        "Refrigerio, descanso y juego al aire libre después de la jornada académica",
      ],
    },
  },

  documents: {
    "parent-rights": {
      title: "Manual de derechos de los padres",
      blurb: "Derechos de los padres en escuelas chárter públicas de Arizona (ADE).",
    },
    "student-handbook": {
      title: "Manual del estudiante",
      blurb: "Manual del plantel que se comparte con las familias de AmeriSchools Academy.",
    },
    wellness: {
      title: "Política de bienestar",
      blurb: "Normas de nutrición, actividad física y bienestar.",
    },
    breakfast: {
      title: "Menú de desayuno de Tucson",
      blurb: "Desayunos que se ofrecen actualmente en el plantel de Tucson.",
    },
    lunch: {
      title: "Menú de almuerzo de Tucson",
      blurb: "Almuerzos que se ofrecen actualmente en el plantel de Tucson.",
    },
    supplies: {
      title: "Lista de útiles escolares",
      blurb: "Lo que debe traer para el primer día.",
    },
  },
  hero: {
    eyebrow: "Programas preescolares en",
    tagline: "Donde crece la curiosidad y comienzan los futuros brillantes.",
    lede: "Un ambiente de aprendizaje afectuoso y basado en el juego que ayuda a su hijo a desarrollar confianza, amistades y las bases para toda la vida.",
    imageAlt: "Una niña de preescolar coloreando en una mesa del salón",
    watchVideo: "Ver nuestro video",
    videoTitle: "Una mañana en Capstone Quest",
    whyTitle: "Por qué nos eligen las familias",
    reasons: {
      smallClasses: { title: "Grupos pequeños", text: "Atención personalizada para cada niño." },
      safe: { title: "Seguridad y protección", text: "Máxima seguridad con cuidado de confianza." },
      schoolReady: { title: "Listos para la escuela", text: "Un plan de estudios preescolar que desarrolla habilidades y confianza." },
      family: { title: "Alianza con la familia", text: "Trabajamos con usted en cada paso del camino." },
    },
    qualityFirst: {
      title: "Programa Quality First",
      text: "Programa participante de Quality First de Arizona.",
    },
    badges: {
      ages: "De 3 a 5 años",
      teachers: "Maestros afectuosos y con experiencia",
      play: "Aprendizaje por medio del juego",
      locations: "Ubicaciones en Tucson y Yuma",
      des: "100% aprobado por DES",
    },
  },
  parents: {
    eyebrow: "Familias",
    title: "Usted forma parte del equipo",
    lede: "Manuales, menús y los mismos recursos para familias que están en la sección de Información.",
    resources: {
      tours: { title: "Visitas y calendario", text: "Recorra el plantel, conozca a los maestros y observe una reunión matutina real.", cta: "Agende una visita" },
      packet: { title: "Paquete de inscripción", text: "Formularios de salud, contactos de emergencia y documentación de DES en una sola cita.", cta: "Comenzar la inscripción" },
      policies: { title: "Políticas", text: "Inscripción, entrega de niños, disciplina y acceso de los padres, tal como están publicadas en ambos planteles.", cta: "Leer las políticas" },
      partnership: { title: "Alianza con la familia", text: "Conferencias dos veces al año, mañanas de puertas abiertas y maestros que le devuelven la llamada.", cta: "Hable con nosotros" },
    },
    docsTitle: "Manuales, menús y formularios",
    docsLede: "Los mismos documentos que las familias descargan de la sección de Información de AmeriSchools: derechos de los padres, bienestar, menús y útiles.",
    tuitionTitle: "Colegiatura y DES",
    tuitionText: "El preescolar de día completo cuesta $130.00 por semana con cinco días y $120.00 con tres, y el cuidado antes y después de clases desde $15.00. Hay un 10% de descuento para un hermano adicional. Estamos 100% aprobados por el Departamento de Seguridad Económica de Arizona, y las familias que usan el subsidio de cuidado infantil de DES se inscriben de la misma manera: aplican copagos y le ayudamos con los trámites.",
    tuitionCta: "Ver la lista completa de cuotas",
    tuitionAsk: "Preguntar sobre la colegiatura",
    faqTitle: "Preguntas frecuentes",
  },
  programsPage: {
    eyebrow: "Programas",
    title: "Preescolar diseñado para niños de 3 a 5 años",
    lede: "Primero el juego, y las habilidades justo detrás. Cada programa está aprobado por DES y lo imparten maestros que acompañan a su hijo durante todo el año.",
  },

  campusesPage: {
    eyebrow: "Planteles",
    title: "Tucson y Yuma",
    lede: "Dos planteles acogedores y con licencia. Un mismo preescolar basado en el juego. Visite el más cercano a su casa, o los dos.",
    details: "Detalles del plantel",
    exteriorAlt: "fachada",
    bookTour: "Reserve una visita",
  },
  infoPage: {
    eyebrow: "Información",
    title: "La escuela, en un solo lugar",
    lede: "Todo lo que antes estaba en la sección de Información: quiénes somos, programas, recursos para familias y portales, reescrito para familias de preescolar.",
    cards: {
      about: { title: "Sobre Capstone Quest", text: "Preescolar aprobado por DES en Tucson y Yuma desde 2013. Pequeños pasos, grandes sueños.", cta: "Nuestra historia" },
      programs: { title: "Programas", text: "Preescolar de 3 y 4 años, y cuidado antes y después de clases, de 7 a. m. a 6 p. m., cinco días a la semana.", cta: "Ver programas" },
      parents: { title: "Recursos para familias", text: "Manuales, menús, derechos de los padres, política de bienestar y útiles.", cta: "Para las familias" },
      clever: { title: "Clever y portales", text: "Clever, PowerSchool, ClassDojo y RAZ Kids: los accesos que las familias ya usan.", cta: "Abrir portales" },
      tour: { title: "Agende una visita", text: "Observe una reunión matutina real. La mayoría de las visitas dura unos 40 minutos.", cta: "Reserve una visita" },
      tuition: { title: "Colegiatura y cuotas", text: "Tarifas semanales, cuidado antes y después de clases, descuentos por hermanos y condiciones de pago.", cta: "Ver colegiatura" },
      policies: { title: "Políticas", text: "Inscripción, admisión y entrega de niños, disciplina, acceso de los padres e informes de inspección.", cta: "Leer las políticas" },
      whyUs: { title: "Por qué se quedan las familias", text: "Grupos pequeños, juego que prepara para la escuela y un día que se siente como infancia.", cta: "Por qué elegirnos" },
    },
  },
  cleverPage: {
    eyebrow: "Clever",
    title: "Portales que las familias ya conocen",
    lede: "El sitio actual de AmeriSchools envía “See how my child is doing” a PowerSchool y coloca Clever en la barra superior. Esos enlaces siguen funcionando.",
    portals: {
      clever: "El inicio de sesión único que usa el sitio actual de AmeriSchools para alumnos y personal.",
      powerschool: "Asistencia, calificaciones de hermanos de K a 8 y el enlace histórico “See how my child is doing”.",
      classdojo: "Historias del salón y mensajes del maestro titular.",
      raz: "Lecturas por nivel para niños de preescolar de 4 años listos para leer en casa.",
      khan: "Práctica opcional; nunca tarea para niños de tres años.",
    },
  },
  aboutPage: {
    eyebrow: "Quiénes somos",
    title: "Una aventura para niños curiosos",
    lede: "Bienvenido a Capstone Quest Academy, donde los pequeños pasos hacen realidad los grandes sueños. Desde 2013, nuestros planteles de Tucson y Yuma han sido un hogar fuera de casa: un preescolar certificado por DES que prepara a niños de tres a cinco años para el kínder sin apresurar la infancia.",
    hours: "La jornada académica es de cinco días a la semana. La llegada temprana (7:00–8:00 a. m.) y la salida tardía (3:30–6:00 p. m.) se ofrecen como servicio con costo adicional, para que las familias trabajadoras aprovechen todo el horario de 7 a. m. a 6 p. m.",
    imageAlt: "Hora del círculo en un salón de Capstone Quest",
    believeTitle: "En qué creemos",
    believe1: "Los niños aprenden haciendo, conversando y sintiéndose parte del grupo. Nuestros maestros diseñan talleres de arte, bloques, cuentos y ciencia al aire libre, donde la lectoescritura y las matemáticas aparecen como herramientas, no como ejercicios. Las familias son aliadas, no visitantes.",
    believe2: "Owl, nuestra mascota con birrete, representa la sabiduría que se gana con calma: intentar, observar, intentar de nuevo.",
    peopleTitle: "Personas que conocen a su hijo",
    meetUs: "Conózcanos en una visita",
    staff: {
      elena: { role: "Directora general", campus: "Tucson y Yuma", bio: "Elena ha dirigido programas de primera infancia en Arizona durante 16 años. Cree que toda familia merece una escuela exigente y amable a la vez." },
      sofia: { role: "Maestra titular de preescolar", campus: "Tucson", bio: "Sofia diseña unidades basadas en el juego que incorporan lectoescritura y matemáticas. Las familias la conocen por las notas escritas a mano que envía cada viernes." },
    },
  },
  schedule: {
    s1: "Bienvenida, centros de la mañana y asistencia",
    s2: "Hora del círculo, lectura en voz alta y baile",
    s3: "Juego al aire libre",
    s4: "Arte, centros y proyectos especiales",
    s5: "Recoger, baño y lavado de manos",
    s6: "Almuerzo",
    s7: "Lectura en parejas",
    s8: "Baño y lavado de manos",
    s9: "Hora de la siesta",
    s10: "Despertar y recoger",
    s11: "Refrigerio",
    s12: "Baile y ejercicio",
    s13: "Juego al aire libre y salida",
  },

  faqs: {
    ages: { q: "¿Qué edades atienden?", a: "Niños de 3 a 5 años. La mayoría de las familias comienza el año en que cumplen tres y se queda hasta el año de preescolar de 4 años, listo para el kínder." },
    des: { q: "¿Están aprobados por DES?", a: "Sí. Ambos planteles están 100% aprobados por el Departamento de Seguridad Económica de Arizona y cuentan con licencia estatal. Aceptamos con gusto los subsidios de cuidado infantil de DES." },
    enroll: { q: "¿Qué tan rápido podemos inscribirnos?", a: "Una vez que hacemos la visita y recibimos el paquete completo, muchas familias terminan la inscripción en un solo día, sobre todo cuando hay un lugar disponible para el periodo actual." },
    day: { q: "¿Cómo es un día típico?", a: "Reunión matutina, juego al aire libre, talleres de lectoescritura y matemáticas, almuerzo, descanso, talleres (arte, bloques, ciencia) y círculo de cierre. Los niños de día completo se quedan para el refrigerio y los centros de la tarde." },
    ratio: { q: "¿Cuál es la proporción de maestros por niño?", a: "Cada salón de preescolar tiene un maestro titular y un asistente, y contamos con el personal que exigen las normas de licencia de Arizona, de modo que los grupos son lo bastante pequeños para que se conozca a cada niño por su nombre. El tamaño de los grupos varía un poco según el plantel y la edad; pregúntenos las cifras actuales en su visita." },
    checkin: { q: "¿Puedo saber cómo está mi hijo durante el día?", a: "Sí. Llame al plantel cuando quiera y con gusto revisamos cómo está su hijo. Las familias también inician sesión en Clever y PowerSchool, igual que en los planteles actuales de AmeriSchools." },
    hours: { q: "¿Cuál es su horario?", a: "El programa académico de preescolar es de cinco días a la semana. Los planteles abren de lunes a viernes, de 7:00 a. m. a 6:00 p. m., con llegada temprana (7:00–8:00 a. m.) y salida tardía (3:30–6:00 p. m.) con costo adicional." },
  },

  testimonials: {
    priya: { quote: "Maya entró al kínder feliz y ya sabía esperar su turno, escribir su nombre y hacer buenas preguntas. Capstone Quest hizo que se viera fácil.", role: "Madre de Tucson" },
    marcus: { quote: "Los maestros de verdad conocen a mi hijo. No solo sus alergias: también su camión favorito, lo despacio que agarra confianza y las canciones que lo calman.", role: "Padre de Yuma" },
    danielle: { quote: "Usamos un vale de DES y nunca nos sentimos una familia de segunda. El programa es la misma hermosa experiencia para cada niño del salón.", role: "Madre de Tucson" },
  },

  whyUsPage: {
    eyebrow: "Por qué elegirnos",
    title: "El preescolar con el que se quedan las familias de Arizona",
    lede: "Desde 2013 hemos sido el hogar fuera de casa certificado por DES en Tucson y Yuma: accesible a propósito, excelente a propósito.",
    pillars: {
      small: { title: "Pequeños por diseño", text: "Salones lo bastante pequeños para que se conozca a su hijo, no solo para controlarlo. Los maestros escriben notas de verdad, no plantillas." },
      safety: { title: "Seguridad que se siente", text: "Entradas seguras, recogida con firma, personal capacitado y una cultura de calma. Estamos 100% aprobados por DES y con licencia estatal." },
      ready: { title: "Listos para la escuela, sin dejar de jugar", text: "La lectoescritura, las matemáticas y la autonomía viven dentro de los talleres y los cuentos; nunca hojas de ejercicios para niños de tres años." },
      family: { title: "Alianza con la familia", text: "Visitas, conferencias y maestros que devuelven la llamada, para que nunca tenga que preguntarse cómo estuvo el día." },
    },
    playgroundAlt: "Área de juego preescolar con sombra",
    desTitle: "Aprobados por DES. Hechos para las familias.",
    desText: "Ambos planteles están totalmente aprobados por el Departamento de Seguridad Económica de Arizona. Aceptamos subsidios de cuidado infantil, y cada familia, con vale o con pago particular, recibe el mismo salón, los mismos maestros y el mismo día.",
    dayTitle: "Un día en preescolar",
    wordsTitle: "Las familias en sus propias palabras",
    faqTitle: "Preguntas que escuchamos en cada visita",
  },
  homePage: {
    eyebrow: "Preescolar en Tucson y Yuma",
    title: "Los pequeños pasos hacen realidad los grandes sueños",
    welcome: "Bienvenido a Capstone Quest Academy, donde los pequeños pasos hacen realidad los grandes sueños. En el corazón de Tucson y Yuma desde 2013, nuestros programas preescolares acompañan a los más pequeños en una aventura de aprendizaje y crecimiento.",
    body: "Los planteles son un hogar fuera de casa: juego, descubrimiento y un año de preparación para el kínder sin apresurar la infancia. Las clases son cinco días a la semana. Abrimos de 7:00 a. m. a 6:00 p. m., de lunes a viernes, con cuidado antes y después de clases para familias trabajadoras.",
    pills: [
      "De 3 a 5 años, en Tucson y Yuma desde 2013",
      "Abierto de 7:00 a. m. a 6:00 p. m., de lunes a viernes",
      "Cuidado antes y después de clases en ambos planteles",
      "Aprobado por DES · Con licencia del estado de Arizona",
    ],
    programsEyebrow: "Nuestros programas",
    programsTitle: "Un año de preescolar que se sigue sintiendo como infancia",
    seeProgram: "Ver el programa",
    campusesEyebrow: "Dos planteles en Arizona",
    campusesTitle: "Cerca de casa en Tucson y Yuma",
    campusesLede: "El mismo plan de estudios basado en el juego, la misma aprobación de DES y grupos pequeños: elija el plantel que le quede de paso.",
    visitCampus: "Ver el plantel",
    dayEyebrow: "Un día en preescolar",
    dayTitle: "Ritmo, juego y la escuela justa",
    dayNote: "El cuidado antes y después de clases rodea esta jornada, de 7:00 a 8:00 a. m. y de 3:30 a 6:00 p. m.",
    familiesEyebrow: "Nuestras familias",
    familiesTitle: "Listos para el kínder, y siguen siendo ellos mismos",
    ctaTitle: "Inscripciones abiertas para el ciclo escolar {year}",
    ctaNote: "Lugares limitados · Aceptamos DES · Visitas casi todos los días hábiles",
    enrollNow: "Inscríbase ahora",
  },
  tuitionPage: {
    eyebrow: "Colegiatura",
    title: "Preescolar de día completo, con tarifa semanal",
    lede: "Una sola tarifa semanal cubre la jornada académica, de 8:00 a. m. a 3:30 p. m. Agregue el cuidado antes y después de clases si su jornada laboral empieza antes o termina más tarde. Las familias que usan el subsidio de cuidado infantil de DES se inscriben igual; aplican copagos.",
    programsTitle: "Programas de preescolar",
    programsNote: "Elija un programa por niño. Las tarifas son por niño, por semana.",
    perWeek: "por semana",
    programs: {
      p1: { name: "Programa n.º 1", schedule: "5 días a la semana", hours: "8:00 a. m. – 3:30 p. m." },
      p2: { name: "Programa n.º 2", schedule: "3 días a la semana", hours: "8:00 a. m. – 3:30 p. m." },
      bundle: { name: "Preescolar + cuidado antes y después", schedule: "5 días a la semana", hours: "7:00 a. m. – 6:00 p. m.", highlight: "Ahorra 20% frente a contratar ambos por separado" },
    },
    baTitle: "Cuidado antes y después de clases",
    baNote: "De 7:00 a 8:00 a. m. y de 3:30 a 6:00 p. m. Se cobra por separado o incluido en la tarifa de 5 días de arriba.",
    baGroups: { d5: "5 días a la semana", d3: "3 días a la semana" },
    baOptions: { both: "Cuidado antes y después", before: "Solo antes de clases", after: "Solo después de clases" },
    discountsTitle: "Descuentos",
    discounts: [
      "10% de descuento para un hermano adicional, tanto en preescolar como en el cuidado antes y después de clases.",
      "Quienes reciben DES eligen un programa de la misma manera; aplican copagos.",
    ],
    includedTitle: "Qué incluye la cuota",
    included: [
      "Un refrigerio nutritivo por la tarde está incluido en la cuota.",
      "Los padres envían el almuerzo de su hijo cada día de asistencia.",
      "El cuidado de la tarde incluye tiempo de tarea y actividades organizadas, como recreación y juegos, con refrigerio.",
    ],
    termsTitle: "Facturación y condiciones del contrato",
    terms: [
      "Las cuotas se basan en el horario de su contrato, no en la asistencia.",
      "No se cobran los recesos del calendario escolar (si no abrimos) ni los días festivos principales.",
      "Las cuotas se facturan cada lunes y se pagan esa misma noche, por la semana siguiente. El miércoles por la mañana se aplica un recargo de $10.00 por pago tardío.",
      "La recogida tardía cuesta $1.00 por minuto y se cobra en el siguiente ciclo.",
      "La entrega de emergencia para el cuidado antes y después de clases cuesta $15.00, se paga al recoger y debe autorizarla la oficina para confirmar que hay lugar.",
      "Los días adicionales a su contrato se cobran como visitas sueltas. Firmar un contrato nuevo evita esa tarifa.",
      "Debe haber un contrato firmado y documentos de inscripción vigentes en el archivo antes de que su hijo asista.",
    ],
    ctaTitle: "¿Listo para inscribirse?",
    ctaText: "Llene un formulario de inscripción por niño y entréguelo en la oficina de registro del plantel. Le ayudamos con los trámites de DES si usa un subsidio.",
    effectiveNote: "Las tarifas mostradas provienen de la lista de cuotas vigente desde el 1 de agosto de 2024. Confirme las tarifas actuales con su plantel antes de firmar: llame al {phone} o escriba a",
  },
  policiesPage: {
    eyebrow: "Políticas",
    title: "Políticas de inscripción, entrega y cuidado",
    lede: "Las políticas de licencia publicadas en ambos planteles, con las mismas palabras. Pida en la oficina cualquiera de estos documentos impresos.",
    questionsTitle: "¿Tiene preguntas sobre alguna de estas políticas?",
    questionsText: "Llame al {phone} o pase por la oficina. Las políticas de suspensión y expulsión están disponibles para los padres que las soliciten, y los informes de inspección de licencia pueden consultarse en el plantel.",
    items: {
      enrollment: {
        title: "Procedimientos de inscripción del niño",
        body: "Los niños quedan inscritos una vez completada toda la documentación de inscripción requerida, que incluye, entre otros:",
        list: ["Solicitud de inscripción", "Datos de contacto de emergencia", "Registro de vacunas", "Expedientes de salud exigidos por las normas de licencia"],
        footer: "La inscripción depende de la disponibilidad y de que la edad del niño sea adecuada para el programa de preescolar.",
      },
      release: { title: "Procedimientos de admisión y entrega del niño", body: "Los niños se entregan únicamente a los padres o a las personas autorizadas por escrito por el padre, la madre o el tutor. Se exige identificación cuando se entrega a un niño a una persona que el personal no conoce. Los niños no pueden salir del plantel sin supervisión autorizada.", list: [], footer: "" },
      discipline: { title: "Lineamientos de disciplina", body: "El plantel usa técnicas de orientación positivas y apropiadas para la edad, consistentes y adecuadas al desarrollo de los niños de preescolar. La disciplina se centra en la redirección, en modelar la conducta adecuada y en establecer expectativas claras. Nunca se usa el castigo corporal, la humillación ni el lenguaje abusivo.", list: [], footer: "" },
      disenrollment: { title: "Procedimientos de baja del niño", body: "El padre, la madre o el tutor pueden dar de baja al niño mediante aviso por escrito al plantel. El plantel se reserva el derecho de dar de baja a un niño por motivos que incluyen, entre otros, la falta de pago de cuotas, el incumplimiento de las políticas del plantel o preocupaciones de seguridad, conforme a las normas de licencia y a las políticas del plantel.", list: [], footer: "" },
      suspension: { title: "Política de suspensión y expulsión", body: "El plantel cuenta con políticas escritas sobre suspensión y expulsión que incluyen estrategias de prevención, expectativas claras y métodos de orientación apropiados para la edad. Estas políticas están disponibles para los padres que las soliciten.", list: [], footer: "" },
      access: { title: "Acceso de los padres", body: "Los padres tienen acceso a las áreas del plantel donde su hijo inscrito recibe cuidado infantil durante el horario normal de operación.", list: [], footer: "" },
      pesticide: { title: "Aviso de aplicación de plaguicidas", body: "Se avisa a los padres con al menos 48 horas de anticipación antes de aplicar plaguicidas en las instalaciones del plantel, conforme a los requisitos estatales.", list: [], footer: "" },
      inspection: { title: "Informes de inspección", body: "Se informa a los padres que los informes de inspección de licencia están disponibles para su consulta en el plantel.", list: [], footer: "" },
    },
  },
  careersPage: {
    eyebrow: "Empleo",
    title: "Venga a enseñar el año que más importa",
    lede: "Capstone Quest contrata a personas que disfrutan los grupos pequeños, el juego de verdad y a las familias que quieren ser aliadas. Se requiere autorización de huellas digitales. Para los puestos de maestro titular se espera título universitario y AEPA o NES.",
    perks: {
      classes: { title: "Grupos pequeños", text: "Enseñe a un grupo, no a una multitud. De verdad conocerá a cada niño y a cada familia." },
      benefits: { title: "Prestaciones reales", text: "Seguro médico, aportaciones para el retiro, reembolso de colegiatura e incentivos de ingreso adicional." },
      invent: { title: "Espacio para crear", text: "Talleres, juego al aire libre y un plan de estudios que todavía deja ser creativos a los maestros." },
      family: { title: "Un equipo pequeño", text: "Planteles preescolares en Tucson y Yuma con la misma cultura tranquila y aprobada por DES." },
    },
    openTitle: "Vacantes",
    openings: {
      lead: { role: "Maestro titular de preescolar", campus: "Tucson o Yuma", req: "Autorización de huellas digitales, título universitario; se prefiere AEPA o NES." },
      assistant: { role: "Maestro asistente", campus: "Tucson o Yuma", req: "Gusto por los niños de tres a cinco años; la experiencia en el salón es un plus." },
      care: { role: "Encargado de cuidado antes y después de clases", campus: "Cualquiera de los dos planteles", req: "Entrada a las 7:00 a. m. o cierre de 3:30 a 6:00 p. m. Puntual, cálido y certificado." },
    },
    applyTitle: "Postularse",
    thanks: "Gracias. Un director le responderá si hay una vacante que coincida.",
    received: "Recibimos su solicitud.",
    fields: { name: "Nombre", email: "Correo electrónico", phone: "Teléfono", role: "Puesto", campus: "Plantel", message: "Por qué le interesa este trabajo" },
    eitherCampus: "Cualquiera de los dos planteles",
    sending: "Enviando…",
    submit: "Enviar solicitud",
  },
  contactPage: {
    eyebrow: "Contacto",
    title: "Hablemos",
    lede: "Llame, escriba o envíe un mensaje. Las oficinas contestan de 7:00 a. m. a 6:00 p. m. en días hábiles escolares.",
    thanks: "Gracias. Un director le responderá pronto.",
    sent: "Mensaje enviado. Le responderemos en breve.",
    failed: "No pudimos enviar su mensaje. Por favor llame al {phone}.",
    fields: { name: "Nombre", email: "Correo electrónico", topic: "Tema", message: "Mensaje" },
    topics: {
      general: "Pregunta general",
      tour: "Visita",
      enrollment: "Inscripción",
      des: "DES / colegiatura",
      current: "Familia inscrita",
    },
    sending: "Enviando…",
    submit: "Enviar mensaje",
  },
  tourPage: {
    eyebrow: "Visita",
    title: "Agende una visita",
    lede: "Recorra los salones, conozca a un maestro titular y vea una mañana real. La mayoría de las visitas dura unos 40 minutos. Muchas veces podemos confirmarla el mismo día.",
    doneTitle: "Ya está en el calendario",
    doneText: "Guardamos su solicitud y le enviaremos la confirmación por correo. ¿Quiere inscribirse mientras tanto?",
    sent: "Visita solicitada. Se la confirmaremos por correo electrónico.",
    failed: "No pudimos enviar su solicitud. Por favor llame al {phone}.",
    fields: {
      name: "Su nombre", email: "Correo electrónico", phone: "Teléfono", campus: "Plantel",
      childAge: "Edad del niño", childAgeHint: "por ejemplo, 3 años y 10 meses",
      date: "Fecha preferida", time: "Hora preferida",
      notes: "¿Algo que debamos saber?", notesHint: "Hermanos, vale de DES, alergias…",
    },
    sending: "Enviando…",
    submit: "Solicitar esta visita",
  },

  enrollPage: {
    eyebrow: "Inscripción",
    title: "Comience en tan solo un día",
    lede: "Cuéntenos sobre su hijo y confirmaremos un lugar, le ayudaremos con los trámites y fijaremos la fecha de inicio.",
    doneTitle: "Recibimos su solicitud",
    doneText: "Un director le llamará para confirmar el plantel, la fecha de inicio y cualquier trámite de DES. Esté pendiente de su correo.",
    lede2: "Cuéntenos sobre su hijo. Si hay un lugar disponible, muchas familias completan el paquete el mismo día de su visita.",
    yes: "Sí",
    sent: "Inscripción iniciada. Le daremos seguimiento en un día hábil.",
    failed: "No pudimos enviar su solicitud. Por favor llame al {phone}.",
    fields: {
      childFirst: "Nombre del niño", childLast: "Apellido del niño",
      dob: "Fecha de nacimiento", start: "Fecha de inicio preferida", campus: "Plantel", program: "Programa",
      parentName: "Padre, madre o tutor", email: "Correo electrónico", phone: "Teléfono",
      des: "¿Usará un subsidio de cuidado infantil de DES?",
    },
    des: { notSure: "Aún no estoy seguro", yes: "Sí, con subsidio de DES", no: "No, pago particular" },
    sending: "Enviando…",
    submit: "Enviar inscripción",
  },
};
