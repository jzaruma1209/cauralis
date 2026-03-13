import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased text-slate-100"
        style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#0A1426" }}
      >
        {children}
      </body>
    </html>
  );
}
