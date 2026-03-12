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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 glass-header transition-all duration-300 ${
        isScrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
            <span className="text-primary font-bold text-xl">C</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-100">
            Cauralis
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="#contacto"
            className="hidden md:inline-flex cta-gradient text-background-dark px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Comenzar Proyecto
          </Link>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-dark/95 backdrop-blur-xl border-t border-slate-800 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-300 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="cta-gradient text-background-dark px-6 py-3 rounded-lg text-sm font-bold text-center mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Comenzar Proyecto
          </Link>
        </div>
      )}
    </header>
  );
}
