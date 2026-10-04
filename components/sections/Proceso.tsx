import { pasos } from "@/lib/data/contenido";

export default function Proceso() {
  return (
    <section id="proceso" className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pt-32 sm:px-6 lg:pt-40" aria-labelledby="proceso-titulo">
      <p className="eyebrow">Proceso</p>
      <h2 id="proceso-titulo" className="mt-3.5 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
        De la idea al lanzamiento, sin sorpresas.
      </h2>

      <ol className="mt-14 grid border-t border-input sm:grid-cols-2 lg:grid-cols-4">
        {pasos.map((paso, i) => (
          <li key={paso.titulo} className="pb-4 pr-8 pt-7">
            <span className="font-mono text-[13px] text-subtle">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 font-sans text-lg font-semibold">{paso.titulo}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{paso.texto}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
