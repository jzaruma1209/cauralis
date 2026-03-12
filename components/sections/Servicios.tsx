import Link from "next/link";
import {
  Globe,
  CreditCard,
  BookOpen,
  Zap,
  ShoppingCart,
  ChevronRight,
} from "lucide-react";

const servicios = [
  {
    slug: "landing-pages",
    nombre: "Landing Pages",
    descripcion:
      "Páginas de aterrizaje de alta conversión, diseñadas para captar clientes y generar resultados desde el primer momento.",
    icon: Globe,
    acento: "text-primary",
    bg: "bg-primary/10",
    hoverBg: "group-hover:bg-primary",
    hoverText: "group-hover:text-background-dark",
  },
  {
    slug: "tarjetas-digitales",
    nombre: "Tarjetas Digitales",
    descripcion:
      "Tarjetas de presentación digitales interactivas que dejan una impresión duradera y facilitan el networking moderno.",
    icon: CreditCard,
    acento: "text-lima",
    bg: "bg-lima/10",
    hoverBg: "group-hover:bg-lima",
    hoverText: "group-hover:text-background-dark",
  },
  {
    slug: "catalogos-digitales",
    nombre: "Catálogos Digitales",
    descripcion:
      "Catálogos interactivos para mostrar tus productos o servicios de forma profesional y atractiva.",
    icon: BookOpen,
    acento: "text-secondary",
    bg: "bg-secondary/10",
    hoverBg: "group-hover:bg-secondary",
    hoverText: "group-hover:text-background-dark",
  },
  {
    slug: "automatizaciones",
    nombre: "Automatizaciones",
    descripcion:
      "Flujos de trabajo automatizados que ahorran tiempo, reducen errores y potencian la productividad de tu equipo.",
    icon: Zap,
    acento: "text-primary",
    bg: "bg-primary/10",
    hoverBg: "group-hover:bg-primary",
    hoverText: "group-hover:text-background-dark",
  },
  {
    slug: "ecommerce",
    nombre: "Ecommerce",
    descripcion:
      "Tiendas online optimizadas para vender más, con experiencia de usuario premium y gestión simplificada.",
    icon: ShoppingCart,
    acento: "text-lima",
    bg: "bg-lima/10",
    hoverBg: "group-hover:bg-lima",
    hoverText: "group-hover:text-background-dark",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="py-24 bg-slate-900/30"
      aria-label="Nuestros Servicios"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Nuestros Servicios
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-100 leading-tight">
              Soluciones Digitales para tu Negocio
            </h3>
          </div>
          <p className="text-slate-400 max-w-xs leading-relaxed text-sm">
            Estrategias y productos digitales diseñados para escalar tu
            presencia online.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio) => {
            const Icon = servicio.icon;
            return (
              <div
                key={servicio.slug}
                className="bg-accent-blue rounded-2xl p-8 border border-slate-800 group card-hover"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${servicio.bg} flex items-center justify-center mb-6 ${servicio.acento} ${servicio.hoverBg} ${servicio.hoverText} transition-all duration-300`}
                >
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-100">
                  {servicio.nombre}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {servicio.descripcion}
                </p>
                <Link
                  href={`/servicios/${servicio.slug}`}
                  className={`${servicio.acento} font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all group/link`}
                >
                  Ver más
                  <ChevronRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="cta-gradient rounded-2xl p-8 flex flex-col justify-between min-h-[260px]">
            <div>
              <h4 className="text-xl font-bold mb-3 text-background-dark">
                ¿Tienes un proyecto en mente?
              </h4>
              <p className="text-background-dark/70 text-sm leading-relaxed">
                Cuéntanos tu idea y la hacemos realidad.
              </p>
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 bg-background-dark/15 hover:bg-background-dark/25 text-background-dark font-bold px-6 py-3 rounded-xl transition-colors mt-6"
            >
              Comenzar ahora
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
