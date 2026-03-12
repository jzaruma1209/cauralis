import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Servicios from "@/components/sections/Servicios";
import Portfolio from "@/components/sections/Portfolio";
import ContactoCTA from "@/components/sections/ContactoCTA";

export const metadata: Metadata = {
  title: "Cauralis | Productos Digitales Profesionales",
  description:
    "Cauralis — Landing pages, tarjetas digitales, catálogos, automatizaciones y ecommerce de alto impacto para impulsar tu negocio.",
  openGraph: {
    title: "Cauralis | Productos Digitales Profesionales",
    description:
      "Landing pages, tarjetas digitales, catálogos, automatizaciones y ecommerce.",
    url: "https://cauralis.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Servicios />
      <Portfolio />
      <ContactoCTA />
    </>
  );
}
