import Link from "next/link";

const footerLinks = {
  servicios: [
    { href: "/servicios/landing-pages", label: "Landing Pages" },
    { href: "/servicios/tarjetas-digitales", label: "Tarjetas Digitales" },
    { href: "/servicios/catalogos-digitales", label: "Catálogos Digitales" },
    { href: "/servicios/automatizaciones", label: "Automatizaciones" },
    { href: "/servicios/ecommerce", label: "Ecommerce" },
  ],
  empresa: [
    { href: "#portfolio", label: "Portfolio" },
    { href: "/contacto", label: "Contacto" },
    { href: "#servicios", label: "Servicios" },
  ],
};

const socialLinks = [
  {
    href: "#",
    label: "Twitter / X",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/25">
                <span className="text-primary font-bold text-lg leading-none">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-100">
                Cauralis
              </span>
            </Link>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed text-sm">
              Empresa de productos digitales que impulsa negocios con soluciones
              tecnológicas modernas, diseñadas para crecer contigo.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/40 hover:bg-slate-800 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h5 className="text-slate-300 font-semibold mb-5 text-sm tracking-wide">
              Servicios
            </h5>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-500 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h5 className="text-slate-300 font-semibold mb-5 text-sm tracking-wide">
              Empresa
            </h5>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-500 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h5 className="text-slate-300 font-semibold mb-5 text-sm tracking-wide">
              Contacto
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hola@cauralis.com"
                  className="text-slate-500 text-sm hover:text-primary transition-colors"
                >
                  hola@cauralis.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 text-sm hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900 gap-4">
          <p className="text-slate-600 text-sm">
            © {year} Cauralis. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-slate-600 text-sm hover:text-slate-400 transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="#"
              className="text-slate-600 text-sm hover:text-slate-400 transition-colors"
            >
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
