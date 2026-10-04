// Textos de la sección "Chatbots 24/7". Revisa que cada afirmación coincida con lo que ofreces.

export const conversacion = [
  { de: "cliente", texto: "Hola, ¿tienen zapatillas en talla 40?", hora: "23:47" },
  { de: "bot", texto: "¡Hola! Sí, en negro y en blanco, a $49. ¿Cuál prefieres?", hora: "23:47 · respuesta automática" },
  { de: "cliente", texto: "Negro. ¿Envían a Quito?", hora: "23:48" },
  { de: "bot", texto: "Sí, a todo el país. Completa tu pedido aquí:", enlace: "tunegocio.com/pedido", hora: "23:48" },
  { de: "cliente", texto: "Listo, ya pagué", hora: "23:51" },
  { de: "bot", texto: "¡Gracias! Tu pedido #1024 está confirmado.", hora: "23:51" },
] as const;

export const sinChatbot = [
  "Mensajes que esperan horas, o hasta el día siguiente, por una respuesta.",
  "Clientes que se cansan de esperar y le compran a la competencia.",
  "Tu equipo pierde el día respondiendo las mismas preguntas.",
  "Noches, fines de semana y feriados sin nadie que atienda.",
  "No sabes quién escribió, qué pidió ni a quién darle seguimiento.",
];

export const conChatbot = [
  "Respuesta en segundos, a cualquier hora y en los tres canales.",
  "Atiende a muchos clientes al mismo tiempo, sin filas de espera.",
  "Información siempre correcta: precios, stock, horarios y envíos.",
  "Pedidos, citas y datos de contacto registrados automáticamente.",
  "Tu equipo se dedica a cerrar ventas, no a copiar y pegar respuestas.",
];

export const comoFunciona = [
  {
    icono: "canales",
    titulo: "Tus canales, conectados",
    texto: "WhatsApp, Instagram y Messenger llegan a un mismo asistente. Tus clientes escriben donde ya están.",
  },
  {
    icono: "conocimiento",
    titulo: "Entrenado con tu negocio",
    texto: "Cargamos tus productos, precios, horarios y preguntas frecuentes en una base de conocimiento propia, para que responda con tu información real.",
  },
  {
    icono: "ia",
    titulo: "Inteligencia artificial que entiende",
    texto: "Comprende lo que el cliente quiere aunque lo escriba a su manera, y responde con el tono de tu marca.",
  },
  {
    icono: "automatizacion",
    titulo: "Automatizaciones que cierran",
    texto: "Registra pedidos, agenda citas, envía enlaces de pago y avisa a tu equipo cuando hace falta una persona.",
  },
] as const;

export const diferenciales = [
  {
    titulo: "Hecho a medida, no una plantilla",
    texto: "Diseñamos las conversaciones según cómo vende tu negocio y lo que preguntan tus clientes.",
  },
  {
    titulo: "Conversa de verdad",
    texto: "Usa inteligencia artificial en lugar de menús rígidos de “marca 1, marca 2”. Tus clientes escriben como hablan.",
  },
  {
    titulo: "Conectado a tus sistemas",
    texto: "Se integra con tu catálogo, tu tienda online, tu agenda o tus hojas de cálculo para actuar, no solo responder.",
  },
  {
    titulo: "Acompañamiento real",
    texto: "Lo configuramos, lo medimos y lo mejoramos contigo. Hablas directo con quien lo construyó.",
  },
];

// Promoción con cuenta regresiva (arriba de la sección de chatbots).
// Cambia la fecha de fin o pon activa: false para ocultarla. Al terminar el tiempo se oculta sola.
export const promoChatbot = {
  activa: true,
  termina: "2026-10-31T23:59:59-05:00", // hora de Ecuador
  // Si escribes un valor (por ejemplo "20%"), se muestra al abrir el regalo.
  descuento: "",
  mensajeWhatsapp: "Hola Cauralis, abrí el regalo de la página y quiero reclamar mi descuento en el chatbot",
};
