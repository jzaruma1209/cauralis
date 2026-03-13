import { notFound } from "next/navigation";
import { servicios } from "@/lib/data/servicios";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const servicio = servicios.find((s) => s.slug === slug);
  if (!servicio) return { title: "Servicio no encontrado" };

  return {
    title: `${servicio.nombre} - Cauralis`,
    description: servicio.descripcionLarga,
  };
}

export async function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }));
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  const servicio = servicios.find((s) => s.slug === slug);

  if (!servicio) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <Link
          href="/#servicios"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Volver a servicios
        </Link>

        {/* Hero Detail */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 font-bold text-xs uppercase tracking-widest text-primary">
            Servicio Especializado
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-slate-100 leading-tight">
            {servicio.nombre}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-10">
            {servicio.descripcionLarga}
          </p>

          <div className="p-8 rounded-2xl bg-accent-blue/50 border border-slate-800">
            <h2 className="text-xl font-bold mb-6 text-slate-100">Beneficios incluidos:</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {servicio.beneficios.map((beneficio) => (
                <div key={beneficio} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-300">{beneficio}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-10 rounded-[2rem] bg-gradient-to-br from-slate-900 via-accent-blue/40 to-slate-900 border border-slate-800">
          <div>
            <div className="text-slate-400 text-sm mb-1">Precio aproximado desde</div>
            <div className="text-5xl font-bold text-slate-100">
              ${servicio.precioDesde}
              <span className="text-xl text-slate-500 font-normal ml-2">USD</span>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <Link
              href="/contacto"
              className="cta-gradient glow-hover text-background-dark w-full md:w-auto px-10 py-5 rounded-xl font-bold text-lg text-center inline-block"
            >
              Solicitar Presupuesto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
