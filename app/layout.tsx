import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Cauralis | Productos Digitales Profesionales",
    template: "%s | Cauralis",
  },
  description:
    "Cauralis ofrece landing pages, tarjetas digitales, catálogos digitales, automatizaciones y ecommerce de alta calidad para impulsar tu negocio.",
  keywords: [
    "landing pages",
    "tarjetas digitales",
    "catálogos digitales",
    "automatizaciones",
    "ecommerce",
    "productos digitales",
    "Cauralis",
  ],
  authors: [{ name: "Cauralis" }],
  creator: "Cauralis",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://cauralis.com",
    siteName: "Cauralis",
    title: "Cauralis | Productos Digitales Profesionales",
    description:
      "Landing pages, tarjetas digitales, catálogos, automatizaciones y ecommerce para tu negocio.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cauralis - Productos Digitales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cauralis | Productos Digitales Profesionales",
    description:
      "Landing pages, tarjetas digitales, catálogos, automatizaciones y ecommerce.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${dmSans.variable} font-sans antialiased bg-background-dark text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
