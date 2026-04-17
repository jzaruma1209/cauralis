export type DemoCatalogo = {
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

export const demosCatalogos: DemoCatalogo[] = [
  {
    id: 1,
    titulo: "Moda Urbana",
    subtitulo: "Catálogo de ropa con filtros",
    descripcion:
      "Catálogo visual de ropa con filtros por talla, color y categoría. Pedido directo vía WhatsApp.",
    categoria: "Moda",
    tags: ["Moda", "Filtros", "WhatsApp"],
    imagen: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 249,
    destacado: true,
    nuevo: false,
  },
  {
    id: 2,
    titulo: "Joyería Artesanal",
    subtitulo: "Catálogo con zoom en detalles",
    descripcion:
      "Catálogo premium de joyas con zoom HD en detalles, descripción de materiales y precios.",
    categoria: "Accesorios",
    tags: ["Joyas", "Zoom", "Premium"],
    imagen: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 199,
    destacado: false,
    nuevo: false,
  },
  {
    id: 3,
    titulo: "Muebles Modernos",
    subtitulo: "Catálogo con solicitud de cotización",
    descripcion:
      "Catálogo de mobiliario con ficha técnica por producto, galería de ambientes y formulario de cotización.",
    categoria: "Hogar",
    tags: ["Muebles", "Cotización", "Hogar"],
    imagen: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 279,
    destacado: false,
    nuevo: true,
  },
  {
    id: 4,
    titulo: "Electrónica Tech",
    subtitulo: "Catálogo con comparador de modelos",
    descripcion:
      "Catálogo de gadgets y electrónica con comparador de especificaciones y precios por modelo.",
    categoria: "Tecnología",
    tags: ["Tech", "Comparador", "Gadgets"],
    imagen: "https://images.unsplash.com/photo-1498049860654-af1a5c5668ba?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 299,
    destacado: false,
    nuevo: false,
  },
  {
    id: 5,
    titulo: "Cosméticos Natural",
    subtitulo: "Catálogo de belleza con ingredientes",
    descripcion:
      "Catálogo de productos cosméticos con lista de ingredientes, modo de uso y reseñas de clientes.",
    categoria: "Belleza",
    tags: ["Cosméticos", "Belleza", "Natural"],
    imagen: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 199,
    destacado: false,
    nuevo: false,
  },
  {
    id: 6,
    titulo: "Deportes Elite",
    subtitulo: "Equipamiento con guía de tallas",
    descripcion:
      "Catálogo de equipamiento deportivo con guía de tallas interactiva, videos de uso y disponibilidad.",
    categoria: "Deportes",
    tags: ["Deportes", "Tallas", "Videos"],
    imagen: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 249,
    destacado: false,
    nuevo: true,
  },
];

export const categoriasCatalogos = [
  "Todas",
  ...Array.from(new Set(demosCatalogos.map((d) => d.categoria))),
];
