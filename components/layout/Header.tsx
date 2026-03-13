"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 glass-header transition-all duration-300 ${
        isScrolled ? "shadow-lg shadow-black/25" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Cauralis - inicio">
          <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/25 group-hover:from-primary/30 transition-all duration-300">
            <span className="text-primary font-bold text-lg leading-none">C</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors">
            Cauralis
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-primary transition-colors relative group/nav"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary scale-x-0 group-hover/nav:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="#contacto"
            className="hidden md:inline-flex cta-gradient text-background-dark px-6 py-2.5 rounded-xl text-sm font-bold transition-all"
          >
            <span>Comenzar Proyecto</span>
          </Link>
          <button
            className="md:hidden text-slate-300 hover:text-primary transition-colors p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background-dark/97 backdrop-blur-xl border-t border-slate-800 px-6 py-5 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-300 hover:text-primary transition-colors py-2.5 border-b border-slate-800/60 last:border-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="cta-gradient text-background-dark px-6 py-3.5 rounded-xl text-sm font-bold text-center mt-3"
            onClick={() => setIsMenuOpen(false)}
          >
            Comenzar Proyecto
          </Link>
        </div>
      </div>
    </header>
  );
}
