import Link from "next/link";
import Image from "next/image";
import { servicios } from "@/lib/data/servicios";
import { site, whatsappBotLink, whatsappLink } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-20 sm:px-6">
        <div className="flex flex-wrap justify-between gap-12 border-b border-border pb-12">
          <div className="max-w-xs">
            <Link href="/" aria-label="Cauralis, ir al inicio" className="inline-block">
              <Image src="/logo-cauralis.png" alt="Cauralis" width={138} height={30} className="h-7 w-auto" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-subtle">
              Productos digitales y software a medida para negocios que quieren crecer.
            </p>
          </div>

          <div className="flex flex-wrap gap-14 text-sm">
            <div>
              <p className="eyebrow !text-subtle">Servicios</p>
              <ul className="mt-4 space-y-3">
                {servicios.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/servicios/${s.slug}`} className="text-muted-foreground transition-colors hover:text-foreground">
                      {s.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow !text-subtle">Empresa</p>
              <ul className="mt-4 space-y-3">
                <li><Link href="/#proceso" className="text-muted-foreground transition-colors hover:text-foreground">Proceso</Link></li>
                <li><Link href="/#demos" className="text-muted-foreground transition-colors hover:text-foreground">Demos</Link></li>
                <li><Link href="/contacto" className="text-muted-foreground transition-colors hover:text-foreground">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow !text-subtle">Contacto</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href={`mailto:${site.email}`} className="text-muted-foreground transition-colors hover:text-foreground">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                    Asesor: {site.whatsappAsesorVisible}
                  </a>
                </li>
                <li>
                  <a href={whatsappBotLink()} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                    Asistente 24/7: {site.whatsappBotVisible}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 pt-6 text-[13px] text-subtle">
          <p>© {year} Cauralis. Todos los derechos reservados.</p>
          <p>Hecho en Ecuador</p>
        </div>
      </div>
    </footer>
  );
}
