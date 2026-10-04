import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { TooltipProvider } from "@/components/ui/tooltip";

// Diseño A · Nocturno preciso: Geist para todo, Geist Mono para etiquetas.
const geist = Geist({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-code", display: "swap" });

const titulo = "Cauralis | Software y productos digitales para tu negocio";
const descripcion =
  "Landing pages, tarjetas digitales, catálogos, automatizaciones y tiendas online hechas a medida para negocios en Ecuador y Latinoamérica.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: titulo, template: "%s | Cauralis" },
  description: descripcion,
  keywords: [
    "landing pages",
    "tarjetas digitales",
    "catálogos digitales",
    "automatizaciones",
    "ecommerce",
    "desarrollo web Ecuador",
    "Cauralis",
  ],
  authors: [{ name: "Cauralis" }],
  creator: "Cauralis",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: site.url,
    siteName: "Cauralis",
    title: titulo,
    description: descripcion,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Cauralis — Innovative Software Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descripcion,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#07090d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={cn("dark", geist.variable, geistMono.variable)}>
      <body>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
