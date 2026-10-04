import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { demosDestacados } from "@/lib/data/servicios";

export default function Demos() {
  const demos = demosDestacados(3);

  return (
    <section id="demos" className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pt-20 sm:px-6 sm:pt-32 lg:pt-40" aria-labelledby="demos-titulo">
      <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="eyebrow">Demos</p>
          <h2 id="demos-titulo" className="mt-3 max-w-xl text-[clamp(1.75rem,4vw,3rem)] sm:mt-3.5 font-semibold leading-[1.08] tracking-[-0.035em]">
            Elige un punto de partida y lo hacemos tuyo.
          </h2>
        </div>
        <p className="max-w-sm text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          Cada demo se personaliza con tu marca, tus textos y tu dominio.
        </p>
      </div>

      <div className="carrusel-movil mt-8 sm:mt-12 sm:grid sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {demos.map((demo) => (
          <Link key={`${demo.servicio.slug}-${demo.id}`} href={`/servicios/${demo.servicio.slug}#demos`} className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={demo.imagen}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
              />
            </div>
            <p className="mt-3 font-mono text-xs uppercase sm:mt-4 tracking-[0.08em] text-subtle">{demo.servicio.nombre}</p>
            <h3 className="mt-1.5 flex items-center gap-2 font-sans text-lg font-semibold">
              {demo.titulo}
              <ArrowRight size={16} className="text-subtle transition-transform group-hover:translate-x-1 group-hover:text-foreground" aria-hidden="true" />
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{demo.subtitulo}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
