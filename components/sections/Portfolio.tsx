const portfolioItems = [
  {
    id: 1,
    categoria: "Landing Page",
    nombre: "ProSalud Clínica",
    descripcion: "Página de conversión para clínica médica con diseño premium y formulario de citas online.",
    gradiente: "from-primary/25 via-accent-blue to-primary/5",
    emoji: "🏥",
    tag: "Conversión +40%",
    span: "md:col-span-8",
    minH: "min-h-[280px]",
  },
  {
    id: 2,
    categoria: "Tarjeta Digital",
    nombre: "Carlos Mendoza",
    descripcion: "Tarjeta digital ejecutiva para networking profesional.",
    gradiente: "from-lima/25 via-secondary/15 to-accent-blue",
    emoji: "💳",
    tag: "NFC + QR",
    span: "md:col-span-4",
    minH: "min-h-[280px]",
  },
  {
    id: 3,
    categoria: "Catálogo Digital",
    nombre: "Muebles Artesanos",
    descripcion: "Catálogo de productos premium con filtros avanzados.",
    gradiente: "from-secondary/25 via-accent-blue to-secondary/5",
    emoji: "📦",
    tag: "100+ Productos",
    span: "md:col-span-4",
    minH: "min-h-[280px]",
  },
  {
    id: 4,
    categoria: "Ecommerce",
    nombre: "TiendaTech Store",
    descripcion: "Tienda online de electrónicos con pasarela de pago integrada.",
    gradiente: "from-primary/20 via-accent-blue to-lima/15",
    emoji: "🛒",
    tag: "Ventas Online",
    span: "md:col-span-8",
    minH: "min-h-[280px]",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-20 lg:py-24 scroll-mt-0"
      aria-label="Portfolio de trabajos"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* ── Header ───────────────────────────────── */}
        <div className="mb-16 text-center">
          <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-100">
            Nuestros Proyectos Recientes
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
            Cada proyecto es una historia de éxito. Mira lo que hemos construido para nuestros clientes.
          </p>
        </div>

        {/* ── Grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} group relative overflow-hidden rounded-2xl ${item.minH} border border-slate-800 hover:border-primary/30 transition-all duration-500 cursor-pointer`}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradiente} transition-transform duration-700 group-hover:scale-105`}
              />

              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(255,255,255,0.8) 30px), repeating-linear-gradient(90deg, transparent, transparent 29px, rgba(255,255,255,0.8) 30px)",
                }}
              />

              {/* Emoji bg decoration */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <span className="text-[150px] select-none">{item.emoji}</span>
              </div>

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-background-dark/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                <span className="text-xs font-bold text-primary mb-2 block tracking-widest uppercase">
                  {item.categoria}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {item.nombre}
                </h3>
                <p className="text-slate-400 text-sm mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-sm leading-relaxed">
                  {item.descripcion}
                </p>
              </div>

              {/* Top right tag */}
              <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-primary/20 border border-primary/40 text-primary text-xs px-3 py-1.5 rounded-full font-semibold backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>

              {/* Ver proyecto badge */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-background-dark/60 border border-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">
                  Ver proyecto →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
