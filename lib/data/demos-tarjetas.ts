export type DemoTarjeta = {
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

export const demosTarjetas: DemoTarjeta[] = [
  {
    id: 1,
    titulo: "Abogado Corporate",
    subtitulo: "Despacho legal con agendamiento",
    descripcion:
      "Tarjeta digital elegante para despacho legal con botón de agendamiento de citas, credenciales y formulario de consulta.",
    categoria: "Profesional",
    tags: ["Legal", "Agenda", "Profesional"],
    imagen: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 79,
    destacado: true,
    nuevo: false,
  },
  {
    id: 2,
    titulo: "Fitness Coach",
    subtitulo: "Entrenador personal digital",
    descripcion:
      "Tarjeta personal con link a booking, galería de resultados, redes sociales y botón de WhatsApp directo.",
    categoria: "Coach",
    tags: ["Fitness", "Booking", "WhatsApp"],
    imagen: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 59,
    destacado: false,
    nuevo: false,
  },
  {
    id: 3,
    titulo: "Restaurante Gourmet",
    subtitulo: "Menú digital + reservas online",
    descripcion:
      "Tarjeta interactiva para restaurante con menú integrado, galería de platos y sistema de reservas.",
    categoria: "Restaurante",
    tags: ["Menú", "Reservas", "Gastronomía"],
    imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 89,
    destacado: false,
    nuevo: true,
  },
  {
    id: 4,
    titulo: "Arquitecta Interior",
    subtitulo: "Portafolio visual con contacto",
    descripcion:
      "Tarjeta con galería de proyectos, descripción de servicios y formulario de contacto integrado.",
    categoria: "Diseño",
    tags: ["Portafolio", "Galería", "Diseño"],
    imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 69,
    destacado: false,
    nuevo: false,
  },
  {
    id: 5,
    titulo: "Consultor Tech",
    subtitulo: "Perfil profesional tecnológico",
    descripcion:
      "Tarjeta minimalista para consultor de TI con stack tecnológico, servicios y enlace a LinkedIn / Calendly.",
    categoria: "Consultoría",
    tags: ["Tech", "Consultoría", "LinkedIn"],
    imagen: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 59,
    destacado: false,
    nuevo: false,
  },
  {
    id: 6,
    titulo: "Fotógrafa Events",
    subtitulo: "Galería creativa + contacto",
    descripcion:
      "Tarjeta visual para fotógrafa de eventos con galería masonry, paquetes y enlace directo a Instagram.",
    categoria: "Fotografía",
    tags: ["Fotografía", "Galería", "Eventos"],
    imagen: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=500&fit=crop&q=80",
    demoUrl: "#",
    precioDesde: 69,
    destacado: false,
    nuevo: true,
  },
];

export const categoriasTarjetas = [
  "Todas",
  ...Array.from(new Set(demosTarjetas.map((d) => d.categoria))),
];
