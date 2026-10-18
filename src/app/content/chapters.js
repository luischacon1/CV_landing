// Guion de la conversación. Cada capítulo se dispara cuando el visitante
// toca una sugerencia (o escribe algo muy parecido). Los mensajes de Luis
// se van "escribiendo" uno a uno con el indicador de escritura entre medias.
//
// Tono: humilde, de pasada. Las cosas se cuentan porque vienen a cuento,
// no para presumir. El mérito, cuando lo hay, es de otros o de la suerte.
//
// Tipos de mensaje: text | photos | video | link | contact

const P = (name, w, h, alt) => ({ src: `/media/${name}.webp`, w, h, alt });

export const intro = [
  { kind: "text", text: "hola 👋" },
  { kind: "text", text: "soy luis" },
  { kind: "photos", photos: [P("luis-retrato", 933, 1400, "Luis, retrato")] },
  {
    kind: "text",
    text: "no sé muy bien cómo has llegado aquí, pero gracias por entrar. esto es un chat conmigo: puedes preguntarme lo que quieras o tocar alguna de las sugerencias de abajo",
  },
  {
    kind: "text",
    text: "ahora mismo estoy con ICON, una escuela para la industria de la música que montamos entre varios, y terminando la carrera. de todo lo demás te cuento si te apetece",
  },
  {
    kind: "text",
    text: "(te contesta una IA con mi contexto. acierta bastante, aunque a veces me deja mejor de lo que soy)",
  },
];

export const chapters = [
  {
    id: "icon",
    chip: "¿Qué es ICON?",
    row: { title: "ICON", preview: "una escuela para la industria de la música", image: "/media/bisbal-abrazo.webp" },
    messages: [
      { kind: "text", text: "ICON es una escuela para la gente que quiere trabajar en la industria de la música: management, discográficas, directo, derechos. lo que no se enseña en ningún sitio" },
      {
        kind: "text",
        text: "la idea es sencilla: que las clases las den los que están dentro. hoy son más de 80 profesionales en activo, y el curso de Music Business lo avala la Universidad Nebrija. yo me encargo sobre todo de que todo eso funcione",
      },
      { kind: "photos", photos: [P("bisbal-set", 1400, 933, "David Bisbal grabando una clase en el set de ICON"), P("bisbal-saludo", 933, 1400, "Luis saludando a David Bisbal en el estudio"), P("bisbal-abrazo", 933, 1400, "Luis y David Bisbal abrazándose en el estudio")] },
      { kind: "text", text: "esto es en el set de ICON, el día que vino David Bisbal a grabar sus clases. yo intentando parecer tranquilo, con poco éxito" },
      { kind: "photos", photos: [P("grammy", 1050, 1400, "Luis en los Latin Grammy"), P("rodaje", 1050, 1400, "Grabando a un mentor de ICON")] },
      { kind: "text", text: "y esto en Miami, grabando con otros mentores mientras estaban por allí por los Latin Grammy. yo iba de cargar trípodes, básicamente" },
      {
        kind: "text",
        text: "lo empezamos en septiembre de 2025, a ratos, mientras yo seguía trabajando en TikTok. mi socio es Pau Rebollo, que lleva toda la vida en los shows y los eventos y sabe de esto mucho más que yo",
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
    row: { title: "Forbes 30 Under 30", preview: "todavía no sé muy bien cómo", image: "/media/forbes.webp" },
    messages: [
      { kind: "text", text: "sí, este verano Forbes España nos metió a Pau y a mí en su lista 30 Under 30 por ICON" },
      { kind: "photos", photos: [P("forbes", 1330, 1400, "Pau Rebollo y Luis Fernández Chacón en la ficha de Forbes 30 Under 30 2026")] },
      { kind: "text", text: "me enteré en Dublín, entre semana. no supe muy bien qué hacer con la noticia, así que me fui a trabajar" },
      {
        kind: "link",
        link: {
          url: "https://forbes.es/lista-forbes-espana-30-under-30-2026/",
          domain: "forbes.es",
          title: "Estos son los Forbes España 30 Under 30 2026",
          description: "Los 30 jóvenes menores de 30 años que están marcando el futuro.",
        },
      },
      { kind: "text", text: "lo bonito es que es un reconocimiento a ICON y a toda la gente que está dentro, que es mucha. yo solo soy el que sale en la foto" },
    ],
  },
  {
    id: "google",
    chip: "Google y TikTok",
    row: { title: "Google · TikTok Shop", preview: "dos trabajos que me enseñaron mucho", image: "/media/google-dublin.webp" },
    messages: [
      { kind: "text", text: "entré de becario en TikTok Shop España y acabé con contrato, ayudando a marcas a vender en la plataforma y a creadores de medio europa a vivir de ello. aprendí a vender de verdad, que es distinto de lo que uno se imagina" },
      { kind: "video", video: { src: "/media/tiktok-alemania.mp4", poster: "/media/tiktok-alemania-poster.jpg", w: 406, h: 720 } },
      { kind: "text", text: "esto es el almacén de un vendedor en alemania. en once meses me dejaron recorrer seis países yo solo, visitando a vendedores y creadores. la mayoría de las cosas que salieron bien allí empezaron con un café en sitios como este" },
      { kind: "text", text: "pero lo que más recuerdo de ese año es más tonto: iba a la oficina cruzando el Retiro en bici cada mañana" },
      { kind: "video", video: { src: "/media/retiro-bici.mp4", poster: "/media/retiro-bici-poster.jpg", w: 406, h: 720 } },
      { kind: "text", text: "me sentía como si cruzara Central Park para ir al trabajo de mis sueños. era el Retiro y era una bici de alquiler, pero la sensación era esa" },
      { kind: "text", text: "después pasé el verano de 2026 en Google, en Dublín, en el equipo de ventas para el mercado de UK. tres meses muy intensos" },
      { kind: "photos", photos: [P("google-dublin", 1332, 1400, "Luis en la oficina de Google en Dublín, señalando Irlanda en un mapa")] },
      { kind: "text", text: "por si no quedaba claro dónde estaba" },
      { kind: "photos", photos: [P("google-hq", 1050, 1400, "Luis en la sede de Google"), P("google-inside", 1050, 1400, "Dentro de las oficinas de Google"), P("meta-hq", 1050, 1400, "Luis en la sede de Meta")] },
      { kind: "text", text: "estas otras son de mucho antes, de la primera vez que pisé Silicon Valley. una noche en San Francisco conocí a dos españoles en una cola, Guille y Jaime, y al día siguiente me estaban enseñando las oficinas de Meta y Google. la gente buena es lo mejor que te puede pasar" },
      { kind: "text", text: "al acabar en Google tuve que elegir entre seguir por ahí o volver a Madrid y dedicarme a ICON del todo. elegí volver" },
      { kind: "text", text: "no sé si fue lo más listo. de momento es lo que me hace levantarme con ganas, que ya es bastante" },
    ],
  },
  {
    id: "inedito",
    chip: "El podcast",
    row: { title: "Inédito Podcast", preview: "un año entrevistando a gente que sabía más que yo", image: "/media/inedito-logo.png", logo: true },
    messages: [
      { kind: "text", text: "entre 2023 y 2024 hice un podcast que se llamaba Inédito. la excusa era sentarme con gente que me interesaba y hacerle preguntas" },
      { kind: "text", text: "lo grababa y lo editaba yo, así que si ves un corte raro ya sabes de quién es la culpa. se juntaron más de 70 episodios y, no sé muy bien por qué, bastante gente al otro lado" },
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
      { kind: "text", text: "también pasaron Carlos Latre, Belén Esteban y la hormiga de El Hormiguero. me lo pasé muy bien, que al final era de lo que iba" },
    ],
  },
  {
    id: "escenarios",
    chip: "¿Hablas en público?",
    row: { title: "Escenarios", preview: "una vez en Bruselas y muchas en institutos" },
    messages: [
      { kind: "text", text: "con 18 años me invitaron a hablar en el Parlamento Europeo sobre emprendimiento joven. sigo sin tener claro por qué a mí" },
      { kind: "photos", photos: [P("parlamento-1", 1400, 1093, "Luis interviniendo en el Parlamento Europeo"), P("parlamento-2", 1400, 1119, "Luis en la pantalla del Parlamento Europeo")] },
      { kind: "text", text: "hablé poco y escuché mucho, que creo que es lo que tocaba" },
      { kind: "text", text: "lo que de verdad me gusta es ir a institutos. contarles a chavales de 16 años que yo era como ellos hace nada y que no hace falta pedir permiso para empezar algo" },
      { kind: "photos", photos: [P("charla-2", 1400, 1050, "Charla en un instituto"), P("charla-1", 1062, 958, "Luis en el escenario"), P("luis-micro", 933, 1400, "Luis con micrófono")] },
    ],
  },
  {
    id: "antes",
    chip: "¿Y antes de todo esto?",
    row: { title: "Antes de ICON", preview: "una comunidad, un hackathon y un campamento" },
    messages: [
      { kind: "text", text: "con 18 montamos entre unos cuantos amigos Skill Hunting, una comunidad de gente joven con ganas de emprender. hicimos bastantes eventos y se juntó mucha más gente de la que esperábamos" },
      { kind: "photos", photos: [P("skh-publico", 800, 533, "Público en un evento de Skill Hunting"), P("skh-cheque", 800, 532, "Entrega de cheque en Skill Hunting")] },
      { kind: "text", text: "ese día fue de los mejores que recuerdo. no por el cheque, por la sala llena" },
      { kind: "text", text: "mi primer hackathon lo recuerdo sobre todo porque me quedé en blanco en mitad del pitch. ganamos igual, gracias a mi equipo, que tiró del carro mientras yo recuperaba el habla" },
      { kind: "photos", photos: [P("hackathon-1", 800, 533, "Hackathon"), P("hackathon-2", 800, 533, "Hackathon, pitch"), P("hackathon-3", 800, 533, "Hackathon, equipo")] },
      { kind: "text", text: "y en 2024 me tocó llevar la producción de No Suspires, el campamento de Pedro Buerbaum. dormí poco y aprendí mucho" },
      { kind: "video", video: { src: "/media/reel.mp4", poster: "/media/reel-poster.jpg", w: 720, h: 1280 } },
      { kind: "text", text: "también pasé un año en Spine Consulting vendiendo a pymes y otro en Influence Hub con marketing de influencers. trabajos normales, de los que te enseñan cómo funcionan las cosas" },
    ],
  },
  {
    id: "estudios",
    chip: "¿Qué estudias?",
    row: { title: "Universidad", preview: "UC3M, y un año en California", image: "/media/hawaii-1.webp" },
    messages: [
      { kind: "text", text: "doble grado en Estudios Internacionales y Administración de Empresas en la Carlos III. me quedan los últimos trabajos de fin de grado, que escribo a ratos cuando ICON me deja" },
      { kind: "text", text: "pasé un año de intercambio en California, en UC Irvine. allí me metí con unos compañeros en un proyecto de salud que llegó a la final de una competición de la universidad. salió mejor de lo que merecíamos" },
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
      { kind: "text", text: "esto es segundos antes de tirarme de un avión en Hawái. lloré bastante. lo cuento para que sepas que no soy tan valiente" },
    ],
  },
  {
    id: "personal",
    chip: "Cuéntame algo personal",
    row: { title: "Fuera del trabajo", preview: "familia, Sevilla FC y mucha bici" },
    messages: [
      { kind: "text", text: "nací en un pueblo de Badajoz, pero mi familia es de Andalucía y me siento de allí. soy del Sevilla y me gusta el flamenco. en mi casa te llaman a la mesa con un «mi arma»" },
      { kind: "text", text: "si de verdad quieres conocerme, tienes que conocerlos a ellos" },
      { kind: "photos", photos: [P("hermano", 1400, 1050, "Luis con su hermano de pequeños"), P("abuela", 1400, 1050, "Luis con su abuela"), P("greta", 1072, 1400, "Greta, la perra de Luis")] },
      { kind: "text", text: "mi hermano, mi abuela y Greta. lo mejor que tengo" },
      { kind: "photos", photos: [P("bici", 1050, 1400, "Bici al atardecer"), P("surf", 1050, 1400, "Luis con una tabla de surf"), P("cima", 1050, 1400, "Luis en la cima de una montaña")] },
      { kind: "text", text: "cuando no estoy trabajando estoy encima de una bici, en el agua o subiendo algún cerro. se me da regular todo, pero me lo paso muy bien" },
      { kind: "photos", photos: [P("feria-sevilla", 1400, 1050, "Luis con amigos en una caseta de la Feria de Sevilla"), P("feria-amigos", 1400, 946, "Luis con amigos en la feria")] },
      { kind: "text", text: "y en la Feria de Sevilla, claro. con rebujito y los de siempre" },
    ],
  },
  {
    id: "contacto",
    chip: "¿Hablamos?",
    row: { title: "Contacto", preview: "email, LinkedIn y X" },
    messages: [
      { kind: "text", text: "si quieres montar algo, colaborar con ICON o simplemente charlar un rato, escríbeme. contesto rápido y pregunto mucho, aviso" },
      { kind: "contact" },
      { kind: "photos", photos: [P("luis-gafas", 1400, 1163, "Luis con gafas de sol")] },
      { kind: "text", text: "gracias por llegar hasta aquí 🙌" },
    ],
  },
];

export const chapterById = Object.fromEntries(chapters.map((c) => [c.id, c]));
