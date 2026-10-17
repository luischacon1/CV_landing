// Guion de la conversación. Cada capítulo se dispara cuando el visitante
// toca una sugerencia (o escribe algo muy parecido). Los mensajes de Luis
// se van "escribiendo" uno a uno con el indicador de escritura entre medias.
//
// Tipos de mensaje: text | photos | video | link | contact

const P = (name, w, h, alt) => ({ src: `/media/${name}.webp`, w, h, alt });

export const intro = [
  { kind: "text", text: "hola 👋" },
  { kind: "text", text: "soy luis" },
  { kind: "photos", photos: [P("luis-retrato", 933, 1400, "Luis, retrato")] },
  {
    kind: "text",
    text: "ahora mismo soy CEO y cofundador de ICON, una escuela de negocios para la industria del entretenimiento. este verano salí en la lista Forbes 30 Under 30 y estoy terminando la carrera. todo a la vez, sí",
  },
  {
    kind: "text",
    text: "esta web es un chat conmigo. pregúntame lo que quieras o toca una de las sugerencias de abajo",
  },
  {
    kind: "text",
    text: "(te contesta una IA entrenada con mi contexto. responde casi igual que yo, pero no se cansa)",
  },
];

export const chapters = [
  {
    id: "icon",
    chip: "¿Qué es ICON?",
    row: { title: "ICON", preview: "la escuela de negocios del entretenimiento" },
    messages: [
      { kind: "text", text: "ICON es una escuela de negocios para la industria del entretenimiento. formamos a la gente que quiere trabajar en música, no a los que quieren ser famosos" },
      {
        kind: "text",
        text: "tenemos un Curso Superior en Music Business avalado por la Universidad Nebrija y un claustro de más de 80 profesionales en activo: managers, ejecutivos de discográficas, artistas, abogados, promotores",
      },
      { kind: "photos", photos: [P("grammy", 1050, 1400, "Luis en los Latin Grammy"), P("rodaje", 1050, 1400, "Grabando a un mentor de ICON")] },
      { kind: "text", text: "esto es de Miami, grabando clases con mentores durante los Latin Grammy. hay días en este trabajo que no parecen trabajo" },
      {
        kind: "text",
        text: "lo arrancamos en septiembre de 2025 mientras yo seguía en TikTok Shop. lo cofundé con Pau Rebollo, que viene del mundo de los shows y los eventos, y hoy es mi socio en todo esto",
      },
      {
        kind: "link",
        link: {
          url: "https://iconmbs.com",
          domain: "iconmbs.com",
          title: "ICON Music Business School",
          description: "Fórmate con los profesionales que están dentro de la industria.",
          image: "/media/icon-logo.png",
          imageFit: "contain",
        },
      },
    ],
  },
  {
    id: "forbes",
    chip: "Lo de Forbes",
    row: { title: "Forbes 30 Under 30", preview: "julio de 2026, todavía lo estoy procesando", image: "/media/luis-escenario.webp" },
    messages: [
      { kind: "text", text: "en julio de 2026 Forbes España me incluyó en su lista 30 Under 30 junto a Pau, por ICON" },
      { kind: "text", text: "me enteré estando en Dublín. no sabía muy bien qué hacer con esa información, así que me fui a trabajar" },
      {
        kind: "link",
        link: {
          url: "https://forbes.es/lista-forbes-espana-30-under-30-2026/",
          domain: "forbes.es",
          title: "Estos son los Forbes España 30 Under 30 2026",
          description: "Los 30 jóvenes menores de 30 años que están marcando el futuro.",
        },
      },
      { kind: "text", text: "lo que más ilusión me hizo fue que reconocieran a ICON. llevamos un año enseñándole a la industria que se puede formar bien sin un máster de 30.000 €" },
    ],
  },
  {
    id: "google",
    chip: "Google y TikTok",
    row: { title: "Google · TikTok Shop", preview: "dos años en big tech y una decisión" },
    messages: [
      { kind: "text", text: "pasé un año en TikTok Shop España como account manager. onboarding de vendedores, campañas, visitas por toda España. en dos meses metí a más de 30 sellers en la plataforma" },
      { kind: "text", text: "después me fui a Google, a Dublín, al equipo de New Business Sales para el mercado de UK. julio a septiembre de 2026" },
      { kind: "photos", photos: [P("google-hq", 1050, 1400, "Luis en la sede de Google"), P("google-inside", 1050, 1400, "Dentro de las oficinas de Google"), P("meta-hq", 1050, 1400, "Luis en la sede de Meta")] },
      { kind: "text", text: "estas son de antes, de la primera vez que pisé Silicon Valley. una noche de fiesta en San Francisco acabó con dos españoles enseñándome las oficinas de Meta y Google. gracias Guille y Jaime" },
      { kind: "text", text: "podía haberme quedado en Google. dije que no" },
      { kind: "text", text: "con veintipocos años tenía dos opciones: una carrera cómoda en una de las mejores empresas del mundo, o apostarlo todo a ICON. elegí la segunda. de momento no me arrepiento (pregúntame en cinco años)" },
    ],
  },
  {
    id: "inedito",
    chip: "El podcast",
    row: { title: "Inédito Podcast", preview: "70 episodios, 45.000 suscriptores", image: "/media/inedito-logo.png" },
    messages: [
      { kind: "text", text: "entre 2023 y 2024 hice Inédito, un podcast de entrevistas. más de 70 episodios, 45.000 suscriptores en YouTube y 20 millones de visualizaciones" },
      { kind: "text", text: "idea, entrevistas, edición. todo yo. dormir era opcional" },
      {
        kind: "link",
        link: {
          url: "https://youtu.be/YNAptmPaGHk",
          domain: "youtube.com",
          title: "Julissa Reynoso, embajadora de EE. UU. en España",
          description: "Inédito Podcast",
          image: "https://img.youtube.com/vi/YNAptmPaGHk/hqdefault.jpg",
        },
      },
      {
        kind: "link",
        link: {
          url: "https://www.youtube.com/watch?v=mUqx8NFBc54&t=31s",
          domain: "youtube.com",
          title: "Federico Linares, presidente de EY España",
          description: "Inédito Podcast",
          image: "https://img.youtube.com/vi/mUqx8NFBc54/hqdefault.jpg",
        },
      },
      {
        kind: "link",
        link: {
          url: "https://youtu.be/MyKKtZf5z1w",
          domain: "youtube.com",
          title: "Albert Triola, CEO de Oracle España",
          description: "Inédito Podcast",
          image: "https://img.youtube.com/vi/MyKKtZf5z1w/hqdefault.jpg",
        },
      },
      { kind: "text", text: "también pasaron Carlos Latre, Belén Esteban y la hormiga de El Hormiguero. un podcast serio, como ves" },
    ],
  },
  {
    id: "escenarios",
    chip: "¿Hablas en público?",
    row: { title: "Escenarios", preview: "del Parlamento Europeo a los institutos" },
    messages: [
      { kind: "text", text: "con 18 años me invitaron a hablar en el Parlamento Europeo sobre emprendimiento joven" },
      { kind: "photos", photos: [P("parlamento-1", 1400, 1093, "Luis interviniendo en el Parlamento Europeo"), P("parlamento-2", 1400, 1119, "Luis en la pantalla del Parlamento Europeo")] },
      { kind: "text", text: "sigo sin saber muy bien cómo pasó" },
      { kind: "text", text: "lo que más me gusta, de verdad, es ir a institutos. contarle a chavales de 16 años que no hace falta pedir permiso para empezar" },
      { kind: "photos", photos: [P("charla-2", 1400, 1050, "Charla en un instituto"), P("charla-1", 1062, 958, "Luis en el escenario"), P("luis-micro", 933, 1400, "Luis con micrófono")] },
    ],
  },
  {
    id: "antes",
    chip: "¿Y antes de todo esto?",
    row: { title: "Antes de ICON", preview: "Skill Hunting, hackathons y un campamento" },
    messages: [
      { kind: "text", text: "con 18 cofundé Skill Hunting, una comunidad de emprendedores jóvenes. organizamos más de 10 eventos, llegamos a 25.000 seguidores y generamos más de 50.000 € con patrocinios" },
      { kind: "photos", photos: [P("skh-publico", 800, 533, "Público en un evento de Skill Hunting"), P("skh-cheque", 800, 532, "Entrega de cheque en Skill Hunting")] },
      { kind: "text", text: "ese día fue de los mejores de mi vida" },
      { kind: "text", text: "mi primer hackathon: me quedé en blanco en mitad del pitch. ganamos igual, no me preguntes cómo" },
      { kind: "photos", photos: [P("hackathon-1", 800, 533, "Hackathon"), P("hackathon-2", 800, 533, "Hackathon, pitch"), P("hackathon-3", 800, 533, "Hackathon, equipo")] },
      { kind: "text", text: "y en 2024 llevé la producción de No Suspires, el campamento de Pedro Buerbaum. lo más intenso que he liderado" },
      { kind: "video", video: { src: "/media/reel.mp4", poster: "/media/reel-poster.jpg", w: 720, h: 1280 } },
      { kind: "text", text: "también estuve un año en Spine Consulting cerrando clientes B2B y otro en Influence Hub con marketing de influencers. de todo se aprende, sobre todo a vender" },
    ],
  },
  {
    id: "estudios",
    chip: "¿Qué estudias?",
    row: { title: "Universidad", preview: "UC3M, un año en California", image: "/media/hawaii-1.webp" },
    messages: [
      { kind: "text", text: "doble grado en Estudios Internacionales y Administración de Empresas en la Carlos III de Madrid. me quedan los últimos TFGs, los escribo a ratos entre reuniones" },
      { kind: "text", text: "pasé un año de intercambio en California, en UC Irvine. allí monté Apex, un proyecto de healthtech con el que llegamos a la final de una venture competition" },
      {
        kind: "link",
        link: {
          url: "https://www.youtube.com/watch?v=RV-P7ly9irU",
          domain: "youtube.com",
          title: "Un año en Los Ángeles",
          description: "Lo grabé todo. Dale al play.",
          image: "https://img.youtube.com/vi/RV-P7ly9irU/maxresdefault.jpg",
        },
      },
      { kind: "photos", photos: [P("hawaii-1", 788, 1400, "Momentos antes de saltar en paracaídas en Hawái"), P("hawaii-2", 1050, 1400, "Luis con amigos en Hawái")] },
      { kind: "text", text: "esto es segundos antes de tirarme de un avión en Hawái. lloré. no me arrepiento" },
    ],
  },
  {
    id: "personal",
    chip: "Cuéntame algo personal",
    row: { title: "Fuera del trabajo", preview: "familia, Sevilla FC y mucha bici" },
    messages: [
      { kind: "text", text: "nací en un pueblo de Badajoz pero mi familia es andaluza, así que me siento andaluz. soy del Sevilla y me gusta el flamenco. en mi casa te llaman a la mesa con un «mi arma»" },
      { kind: "text", text: "si quieres conocerme tienes que conocerlos a ellos primero" },
      { kind: "photos", photos: [P("hermano", 1400, 1050, "Luis con su hermano de pequeños"), P("abuela", 1400, 1050, "Luis con su abuela"), P("greta", 1072, 1400, "Greta, la perra de Luis")] },
      { kind: "text", text: "mi hermano, mi abuela y Greta" },
      { kind: "photos", photos: [P("bici", 1050, 1400, "Bici al atardecer"), P("surf", 1050, 1400, "Luis con una tabla de surf"), P("cima", 1050, 1400, "Luis en la cima de una montaña")] },
      { kind: "text", text: "cuando no estoy trabajando estoy encima de una bici, en el agua o subiendo algo. y en la feria, claro" },
      { kind: "photos", photos: [P("feria-amigos", 1400, 946, "Luis con amigos en la feria")] },
    ],
  },
  {
    id: "contacto",
    chip: "¿Hablamos?",
    row: { title: "Contacto", preview: "email, LinkedIn y X" },
    messages: [
      { kind: "text", text: "si quieres montar algo, colaborar con ICON o simplemente charlar, escríbeme. contesto rápido y hago muchas preguntas" },
      { kind: "contact" },
      { kind: "photos", photos: [P("luis-gafas", 1400, 1163, "Luis con gafas de sol")] },
      { kind: "text", text: "nos vemos pronto 🙌" },
    ],
  },
];

export const chapterById = Object.fromEntries(chapters.map((c) => [c.id, c]));
