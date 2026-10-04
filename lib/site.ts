// Datos de contacto y marca usados en todo el sitio. Cambia aquí y se actualiza en todas las páginas.
export const site = {
  nombre: "Cauralis",
  url: "https://cauralis.com",
  email: "cauralisinfo@gmail.com",
  // WhatsApp atendido por una persona: ventas y servicio al cliente.
  whatsappAsesor: "593959784469",
  whatsappAsesorVisible: "+593 95 978 4469",
  // WhatsApp atendido por el chatbot 24/7.
  whatsappBot: "593939227116",
  whatsappBotVisible: "+593 93 922 7116",
};

/** Enlace de WhatsApp con un asesor (persona). */
export function whatsappLink(mensaje = "Hola Cauralis, me interesa cotizar un proyecto") {
  return `https://wa.me/${site.whatsappAsesor}?text=${encodeURIComponent(mensaje)}`;
}

/** Enlace de WhatsApp con el chatbot 24/7. */
export function whatsappBotLink(mensaje = "Hola") {
  return `https://wa.me/${site.whatsappBot}?text=${encodeURIComponent(mensaje)}`;
}
