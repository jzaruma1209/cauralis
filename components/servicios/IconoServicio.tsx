import { BookOpen, CreditCard, Globe, ShoppingCart, Zap, type LucideProps } from "lucide-react";
import type { ServicioSlug } from "@/lib/data/servicios";

const iconos: Record<ServicioSlug, React.ComponentType<LucideProps>> = {
  "landing-pages": Globe,
  "tarjetas-digitales": CreditCard,
  "catalogos-digitales": BookOpen,
  automatizaciones: Zap,
  ecommerce: ShoppingCart,
};

export default function IconoServicio({ slug, ...props }: { slug: ServicioSlug } & LucideProps) {
  const Icono = iconos[slug];
  return <Icono aria-hidden="true" {...props} />;
}
