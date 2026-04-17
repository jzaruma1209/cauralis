export type DemoAutomatizacion = {
  id: number;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  categoria: string;
  tags: string[];
  imagen: string;
  demoUrl: string;
  precioDesde: number;
  destacado?: boolean;
  nuevo?: boolean;
};

export const demosAutomatizaciones: DemoAutomatizacion[] = [
  {
    id: 1,
    titulo: "CRM + Email Automation",
    subtitulo: "Nurturing automático de leads",
    descripcion:
      "Flujo completo de nurturing: captura de lead → CRM → secuencia de emails personalizados → notificación al vendedor.",
    categoria: "Ventas",
    tags: ["CRM", "Email", "Leads", "HubSpot"],
    imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 499,
    destacado: true,
    nuevo: false,
  },
  {
    id: 2,
    titulo: "Chatbot Soporte 24/7",
    subtitulo: "Atención automática con IA",
    descripcion:
      "Bot de WhatsApp/Web que clasifica consultas, responde FAQs y escala tickets al equipo cuando es necesario.",
    categoria: "Soporte",
    tags: ["Chatbot", "WhatsApp", "IA", "Tickets"],
    imagen: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 599,
    destacado: false,
    nuevo: true,
  },
  {
    id: 3,
    titulo: "Social Media Scheduler",
    subtitulo: "Publicación multi-red automática",
    descripcion:
      "Flujo de aprobación y publicación automática en Instagram, Facebook y LinkedIn desde un solo lugar.",
    categoria: "Marketing",
    tags: ["Social", "Scheduler", "Instagram", "LinkedIn"],
    imagen: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 399,
    destacado: false,
    nuevo: false,
  },
  {
    id: 4,
    titulo: "Invoice Processing",
    subtitulo: "Facturas → datos automáticos",
    descripcion:
      "Extracción automática de datos de facturas PDF con OCR, conciliación contable y notificaciones de pago.",
    categoria: "Finanzas",
    tags: ["Facturas", "OCR", "Contabilidad", "Make"],
    imagen: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 699,
    destacado: false,
    nuevo: false,
  },
  {
    id: 5,
    titulo: "Lead Qualification Bot",
    subtitulo: "Califica y agenda reuniones solo",
    descripcion:
      "Bot que califica leads con preguntas clave, asigna puntaje y agenda reunión en Calendly automáticamente.",
    categoria: "Ventas",
    tags: ["Leads", "Calendly", "Scoring", "Zapier"],
    imagen: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 549,
    destacado: false,
    nuevo: false,
  },
  {
    id: 6,
    titulo: "Inventory Sync",
    subtitulo: "Inventario físico ↔ tienda online",
    descripcion:
      "Sincronización en tiempo real entre tu inventario físico y tu tienda online. Alertas de stock bajo incluidas.",
    categoria: "Operaciones",
    tags: ["Inventario", "Sync", "Alertas", "Ecommerce"],
    imagen: "https://images.unsplash.com/photo-1557821552-17105176666c?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 499,
    destacado: false,
    nuevo: true,
  },
];

export const categoriasAutomatizaciones = [
  "Todas",
  ...Array.from(new Set(demosAutomatizaciones.map((d) => d.categoria))),
];
