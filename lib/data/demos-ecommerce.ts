export type DemoEcommerce = {
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

export const demosEcommerce: DemoEcommerce[] = [
  {
    id: 1,
    titulo: "Fashion Store",
    subtitulo: "Tienda de ropa con variantes",
    descripcion:
      "Tienda completa de moda con variantes de talla y color, carrito, checkout y pasarela de pago integrada.",
    categoria: "Moda",
    tags: ["Moda", "Variantes", "Checkout", "Stripe"],
    imagen: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 999,
    destacado: true,
    nuevo: false,
  },
  {
    id: 2,
    titulo: "Tech Gadgets",
    subtitulo: "Electrónica con comparador",
    descripcion:
      "Tienda de electrónica con comparador de productos, ficha técnica detallada y reseñas verificadas.",
    categoria: "Tecnología",
    tags: ["Tech", "Comparador", "Reseñas"],
    imagen: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 1199,
    destacado: false,
    nuevo: false,
  },
  {
    id: 3,
    titulo: "Organic Foods",
    subtitulo: "Tienda orgánica con suscripción",
    descripcion:
      "Tienda de productos orgánicos con modelo de suscripción mensual, selector de frecuencia y descuento automático.",
    categoria: "Alimentación",
    tags: ["Orgánico", "Suscripción", "Recurrente"],
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 1099,
    destacado: false,
    nuevo: true,
  },
  {
    id: 4,
    titulo: "Beauty Lab",
    subtitulo: "Cosméticos con muestreo gratuito",
    descripcion:
      "Tienda de cosméticos con sistema de muestras gratuitas, bundle builder y programa de puntos de fidelidad.",
    categoria: "Belleza",
    tags: ["Belleza", "Muestras", "Fidelidad"],
    imagen: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 999,
    destacado: false,
    nuevo: false,
  },
  {
    id: 5,
    titulo: "Home Decor",
    subtitulo: "Muebles con configurador de ambiente",
    descripcion:
      "Tienda de decoración con configurador de ambientes en AR, galería de inspiración y cotizador integrado.",
    categoria: "Hogar",
    tags: ["Decoración", "AR", "Cotizador"],
    imagen: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 1299,
    destacado: false,
    nuevo: false,
  },
  {
    id: 6,
    titulo: "Sports Gear",
    subtitulo: "Equipamiento deportivo con guías",
    descripcion:
      "Tienda deportiva con guías de tallas interactivas, comparador de equipos y chat de asesoramiento.",
    categoria: "Deportes",
    tags: ["Deportes", "Guías", "Asesoramiento"],
    imagen: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 1099,
    destacado: false,
    nuevo: true,
  },
];

export const categoriasEcommerce = [
  "Todas",
  ...Array.from(new Set(demosEcommerce.map((d) => d.categoria))),
];
