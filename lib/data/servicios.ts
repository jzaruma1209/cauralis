export interface Servicio {
  slug: string;
  nombre: string;
  descripcion: string;
  descripcionLarga: string;
  beneficios: string[];
  precioDesde: number;
}

export const servicios: Servicio[] = [
  {
    slug: "landing-pages",
    nombre: "Landing Pages",
    descripcion: "Páginas de aterrizaje de alta conversión.",
    descripcionLarga:
      "Diseñamos y desarrollamos landing pages optimizadas para convertir visitantes en clientes. Perfectas para campañas publicitarias y lanzamientos de productos.",
    beneficios: [
      "Optimización de conversión (CRO)",
      "Diseño responsive y veloz",
      "Copywriting persuasivo",
      "Integración con CRM/Email",
    ],
    precioDesde: 299,
  },
  {
    slug: "tarjetas-digitales",
    nombre: "Tarjetas Digitales",
    descripcion: "Tarjetas de presentación interactivas.",
    descripcionLarga:
      "La evolución de la tarjeta de presentación física. Una experiencia digital completa para compartir tu contacto, redes y servicios de forma profesional.",
    beneficios: [
      "Link a redes sociales",
      "Botón de guardado de contacto",
      "QR personalizado",
      "Actualizaciones ilimitadas",
    ],
    precioDesde: 49,
  },
  {
    slug: "catalogos-digitales",
    nombre: "Catálogos Digitales",
    descripcion: "Muestra tus productos de forma atractiva.",
    descripcionLarga:
      "Catálogos digitales dinámicos que permiten a tus clientes explorar tus productos con imágenes en alta calidad y detalles interactivos.",
    beneficios: [
      "Galería de productos",
      "Filtros por categorías",
      "Botón de pedido vía WhatsApp",
      "Fácil navegación móvil",
    ],
    precioDesde: 199,
  },
  {
    slug: "automatizaciones",
    nombre: "Automatizaciones",
    descripcion: "Ahorra tiempo automatizando procesos.",
    descripcionLarga:
      "Elimina tareas repetitivas conectando tus herramientas favoritas. Automatizamos tus ventas, atención al cliente y gestión interna.",
    beneficios: [
      "Conexión entre apps (Zapier/Make)",
      "Bots de atención básica",
      "Notificaciones automáticas",
      "Ahorro de horas semanales",
    ],
    precioDesde: 399,
  },
  {
    slug: "ecommerce",
    nombre: "Ecommerce",
    descripcion: "Vende online de forma profesional.",
    descripcionLarga:
      "Tiendas en línea robustas y escalables con pasarelas de pago integradas y una experiencia de compra diseñada para vender.",
    beneficios: [
      "Pasarelas de pago seguras",
      "Panel de administración",
      "Gestión de inventario",
      "Optimizado para SEO",
    ],
    precioDesde: 799,
  },
];
