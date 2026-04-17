/* ─────────────────────────────────────────────────────────────
   DATOS DE DEMOS — Landing Pages
   Edita este archivo para agregar, quitar o actualizar demos.
   demoUrl: URL de tu demo real (ej. "https://demo-saas.cauralis.com")
   imagen:  Screenshot del demo (URL externa o ruta local en /public)
   ───────────────────────────────────────────────────────────── */

export type DemoLP = {
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

export const demosLP: DemoLP[] = [
  {
    id: 1,
    titulo: "SaaS Launch Pro",
    subtitulo: "Lanzamiento de producto SaaS",
    descripcion:
      "Landing de lanzamiento con registro a webinar, prueba gratuita y sección de precios. Optimizada para conversión máxima.",
    categoria: "Software B2B",
    tags: ["SaaS", "Conversión", "CRO", "Webinar"],
    imagen:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    demoUrl: "#", // 👈 Reemplaza con tu URL real
    precioDesde: 399,
    destacado: true,
    nuevo: false,
  },
  {
    id: 2,
    titulo: "EcoStore",
    subtitulo: "Tienda ecológica con oferta especial",
    descripcion:
      "Tienda online de productos ecológicos con countdown de oferta, galería de productos y checkout simplificado.",
    categoria: "Ecommerce",
    tags: ["Ecommerce", "Tienda", "Oferta", "Countdown"],
    imagen:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 349,
    destacado: false,
    nuevo: true,
  },
  {
    id: 3,
    titulo: "Growth Agency",
    subtitulo: "Captación de leads para agencias",
    descripcion:
      "Landing de alto impacto para agencia de marketing digital. CTA multicapa, testimonios y formulario de contacto integrado.",
    categoria: "Agencia",
    tags: ["Agencia", "Leads", "Marketing", "B2B"],
    imagen:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 299,
    destacado: false,
    nuevo: false,
  },
  {
    id: 4,
    titulo: "Fitness Pro",
    subtitulo: "Curso online de entrenamiento",
    descripcion:
      "Landing para curso de fitness con prueba gratuita de 7 días, sección de resultados y testimonios en video.",
    categoria: "Educación",
    tags: ["Fitness", "Curso", "Salud", "Trial"],
    imagen:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 299,
    destacado: false,
    nuevo: false,
  },
  {
    id: 5,
    titulo: "Legal Consult",
    subtitulo: "Despacho de abogados premium",
    descripcion:
      "Captación de clientes para bufete de abogados. Diseño serio, credenciales, formulario de consulta y agendamiento.",
    categoria: "Servicios Profesionales",
    tags: ["Legal", "Consultoría", "B2C", "Agenda"],
    imagen:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 349,
    destacado: false,
    nuevo: false,
  },
  {
    id: 6,
    titulo: "Food Delivery App",
    subtitulo: "App de entrega a domicilio",
    descripcion:
      "Landing para app de delivery con descarga directa a App Store y Google Play, sección de restaurantes y tracking en vivo.",
    categoria: "Startup",
    tags: ["App", "Startup", "Food", "Mobile"],
    imagen:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 399,
    destacado: false,
    nuevo: true,
  },
];

export const categorias = [
  "Todas",
  ...Array.from(new Set(demosLP.map((d) => d.categoria))),
];
