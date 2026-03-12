const portfolioItems = [
  {
    id: 1,
    categoria: "Landing Page",
    nombre: "ProSalud Clínica",
    descripcion: "Página de conversión para clínica médica",
    gradiente: "from-primary/30 to-accent-blue",
    emoji: "🏥",
    span: "md:col-span-8",
    aspect: "aspect-[16/9]",
  },
  {
    id: 2,
    categoria: "Tarjeta Digital",
    nombre: "Carlos Mendoza",
    descripcion: "Tarjeta digital ejecutiva",
    gradiente: "from-lima/20 to-secondary/10",
    emoji: "💳",
    span: "md:col-span-4",
    aspect: "aspect-[4/5] md:aspect-auto",
  },
  {
    id: 3,
    categoria: "Catálogo Digital",
    nombre: "Muebles Artesanos",
    descripcion: "Catálogo de productos premium",
    gradiente: "from-secondary/20 to-accent-blue",
    emoji: "📦",
    span: "md:col-span-4",
    aspect: "aspect-[4/5] md:aspect-auto",
  },
  {
    id: 4,
    categoria: "Ecommerce",
    nombre: "TiendaTech Store",
    descripcion: "Tienda online de electrónicos",
    gradiente: "from-primary/20 to-lima/10",
    emoji: "🛒",
    span: "md:col-span-8",
    aspect: "aspect-[16/9]",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24"
      aria-label="Portfolio de trabajos"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Portfolio
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-slate-100">
            Nuestros Proyectos Recientes
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} group relative overflow-hidden rounded-2xl ${item.aspect} border border-slate-800 hover:border-primary/30 transition-all duration-500 cursor-pointer`}
            >
              {/* Gradient placeholder */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradiente} transition-transform duration-700 group-hover:scale-105`}
              />

              {/* Emoji icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                <span className="text-[120px] select-none">{item.emoji}</span>
              </div>

              {/* Grid lines overlay */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(255,255,255,0.5) 30px), repeating-linear-gradient(90deg, transparent, transparent 29px, rgba(255,255,255,0.5) 30px)",
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="text-xs font-bold text-primary mb-2 block tracking-widest uppercase">
                  {item.categoria}
                </span>
                <h4 className="text-xl md:text-2xl font-bold text-white">
                  {item.nombre}
                </h4>
                <p className="text-slate-400 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.descripcion}
                </p>
              </div>

              {/* Hover badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-primary/20 border border-primary/40 text-primary text-xs px-3 py-1 rounded-full font-medium">
                  Ver proyecto
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
