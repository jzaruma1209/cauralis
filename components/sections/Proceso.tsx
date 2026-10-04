import { pasos } from "@/lib/data/contenido";

export default function Proceso() {
  return (
    <section id="proceso" className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pt-20 sm:px-6 sm:pt-32 lg:pt-40" aria-labelledby="proceso-titulo">
      <p className="eyebrow">Proceso</p>
      <h2 id="proceso-titulo" className="mt-3 max-w-2xl text-[clamp(1.75rem,4vw,3rem)] sm:mt-3.5 font-semibold leading-[1.08] tracking-[-0.035em]">
        De la idea al lanzamiento, sin sorpresas.
      </h2>

      <ol className="mt-8 grid border-t border-input sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
        {pasos.map((paso, i) => (
          <li key={paso.titulo} className="grid grid-cols-[2.25rem_minmax(0,1fr)] border-b border-border py-5 last:border-b-0 sm:block sm:border-b-0 sm:pb-4 sm:pr-8 sm:pt-7">
            <span className="row-span-2 pt-0.5 font-mono text-[13px] text-subtle">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="font-sans text-base font-semibold sm:mt-4 sm:text-lg">{paso.titulo}</h3>
            <p className="col-start-2 mt-1 text-[15px] leading-relaxed text-muted-foreground sm:mt-2 sm:text-base">{paso.texto}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
