import { demosLP, categorias as categoriasLP } from "@/lib/data/demos-landing";
import { demosTarjetas, categoriasTarjetas } from "@/lib/data/demos-tarjetas";
import { demosCatalogos, categoriasCatalogos } from "@/lib/data/demos-catalogos";
import { demosAutomatizaciones, categoriasAutomatizaciones } from "@/lib/data/demos-automatizaciones";
import { demosEcommerce, categoriasEcommerce } from "@/lib/data/demos-ecommerce";
import type { DemoItem } from "@/components/sections/DemoMarketplace";

export type ServicioSlug =
  | "landing-pages"
  | "tarjetas-digitales"
  | "catalogos-digitales"
  | "automatizaciones"
  | "ecommerce";

export interface Servicio {
  slug: ServicioSlug;
  nombre: string;
  resumen: string;
  descripcion: string;
  titulo: { antes: string; destacado: string };
  intro: string;
  beneficios: string[];
  precioDesde: number;
  incluye: string;
  demos: DemoItem[];
  categorias: string[];
}

export const servicios: Servicio[] = [
  {
    slug: "landing-pages",
    nombre: "Landing pages",
    resumen: "Páginas de alta conversión para campañas y lanzamientos.",
    descripcion:
      "Páginas de aterrizaje optimizadas para convertir visitas en clientes, con formulario, analítica y carga rápida.",
    titulo: { antes: "Landing pages que", destacado: "convierten" },
    intro:
      "Explora la galería de demos, elige la que mejor encaje con tu negocio y la personalizamos con tu marca, contenido y dominio.",
    beneficios: [
      "Optimización de conversión (CRO)",
      "Diseño responsive y ultrarrápido",
      "Copywriting persuasivo incluido",
      "Integración con CRM, email o WhatsApp",
    ],
    precioDesde: 299,
    incluye: "Diseño personalizado, desarrollo, hosting inicial y optimización de velocidad.",
    demos: demosLP,
    categorias: categoriasLP,
  },
  {
    slug: "tarjetas-digitales",
    nombre: "Tarjetas digitales",
    resumen: "Tu contacto, redes y servicios en un enlace o código QR.",
    descripcion:
      "La evolución de la tarjeta física: comparte tu contacto, redes y servicios con un solo enlace, siempre actualizado.",
    titulo: { antes: "Tarjetas digitales que", destacado: "dejan huella" },
    intro:
      "Comparte tu contacto, redes y servicios con un solo enlace. Elige un diseño y lo personalizamos con tu marca.",
    beneficios: [
      "Enlaces a todas tus redes",
      "Botón para guardar contacto (vCard)",
      "Código QR personalizado",
      "Actualizaciones ilimitadas",
    ],
    precioDesde: 49,
    incluye: "Diseño con tu marca, código QR y actualizaciones de datos.",
    demos: demosTarjetas,
    categorias: categoriasTarjetas,
  },
  {
    slug: "catalogos-digitales",
    nombre: "Catálogos digitales",
    resumen: "Tus productos con fotos, filtros y pedido por WhatsApp.",
    descripcion:
      "Catálogos interactivos para mostrar tus productos con fotos, categorías y pedido directo por WhatsApp.",
    titulo: { antes: "Catálogos digitales que", destacado: "venden" },
    intro:
      "Muestra tus productos de forma profesional. Tus clientes exploran, filtran y te piden directamente desde el celular.",
    beneficios: [
      "Galería de productos en alta calidad",
      "Filtros por categoría",
      "Pedido por WhatsApp o email",
      "Navegación pensada para el celular",
    ],
    precioDesde: 199,
    incluye: "Diseño personalizado, carga de productos, hosting y dominio inicial.",
    demos: demosCatalogos,
    categorias: categoriasCatalogos,
  },
  {
    slug: "automatizaciones",
    nombre: "Automatizaciones",
    resumen: "Chatbots, avisos y procesos conectados entre tus apps.",
    descripcion:
      "Conectamos tus herramientas para eliminar tareas repetitivas: ventas, atención al cliente y gestión interna.",
    titulo: { antes: "Automatizaciones que", destacado: "te ahorran horas" },
    intro:
      "Elimina tareas repetitivas conectando tus herramientas. Automatizamos ventas, atención al cliente y procesos internos.",
    beneficios: [
      "Conexión entre tus aplicaciones",
      "Bots de atención automática",
      "Notificaciones en tiempo real",
      "Horas de trabajo ahorradas cada semana",
    ],
    precioDesde: 399,
    incluye: "Análisis del proceso, configuración, pruebas y capacitación.",
    demos: demosAutomatizaciones,
    categorias: categoriasAutomatizaciones,
  },
  {
    slug: "ecommerce",
    nombre: "Ecommerce",
    resumen: "Tienda online con pagos, inventario y panel de administración.",
    descripcion:
      "Tiendas en línea robustas con pasarela de pago, gestión de inventario y una experiencia de compra pensada para vender.",
    titulo: { antes: "Tiendas online que", destacado: "venden por ti" },
    intro:
      "Tiendas en línea con pagos integrados, inventario y panel de administración, diseñadas para maximizar tus ventas.",
    beneficios: [
      "Pasarelas de pago seguras",
      "Panel de administración",
      "Gestión de inventario",
      "SEO optimizado para Google",
    ],
    precioDesde: 799,
    incluye: "Diseño, desarrollo, pasarela de pago, panel de administración y capacitación.",
    demos: demosEcommerce,
    categorias: categoriasEcommerce,
  },
];

export function getServicio(slug: string) {
  return servicios.find((s) => s.slug === slug);
}

/** Un demo destacado por servicio, para mostrar en la página de inicio. */
export function demosDestacados(cantidad = 3) {
  return servicios
    .map((s) => {
      const demo = s.demos.find((d) => d.destacado) ?? s.demos[0];
      return demo ? { ...demo, servicio: s } : null;
    })
    .filter((d): d is DemoItem & { servicio: Servicio } => d !== null)
    .slice(0, cantidad);
}
