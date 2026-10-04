import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicioDetalle from "@/components/servicios/ServicioDetalle";
import { getServicio, servicios } from "@/lib/data/servicios";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const servicio = getServicio(slug);
  if (!servicio) return {};

  return {
    title: servicio.nombre,
    description: servicio.descripcion,
    alternates: { canonical: `/servicios/${servicio.slug}` },
    openGraph: { title: `${servicio.nombre} | Cauralis`, description: servicio.descripcion },
  };
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  const servicio = getServicio(slug);
  if (!servicio) notFound();

  return <ServicioDetalle servicio={servicio} />;
}
