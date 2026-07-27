import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { siteContent } from "@/lib/content";

const socialLinks = [
  {
    label: "LinkedIn de Lumora Partner",
    href: "https://www.linkedin.com/in/hernando-morales-b657bbb5/",
    icon: Linkedin,
  },
  {
    label: "Instagram de Lumora Partner",
    href: "https://www.instagram.com/hernando_mv/",
    icon: Instagram,
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#D7E0EA] bg-[#F7F9FC] text-[#0B2440]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-xl">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center text-xl font-semibold text-[#155EEF] transition-colors hover:text-[#0B4DD8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155EEF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F9FC]"
            >
              {siteContent.site.name}
            </Link>
            <p className="mt-4 leading-7 text-[#5D6B7C]">
              Consultoría, diseño e implementación de sistemas para operaciones
              más claras.
            </p>
          </div>

          <nav aria-label="Redes sociales" className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center border border-[#CFD8E3] bg-white text-[#5D6B7C] transition-colors hover:border-[#155EEF] hover:text-[#0B4DD8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155EEF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F9FC]"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#D7E0EA] pt-6 text-sm text-[#5D6B7C] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteContent.site.name}. Todos los derechos
            reservados.
          </p>
          <Link
            href="/politica-de-privacidad"
            className="inline-flex min-h-11 items-center transition-colors hover:text-[#0B4DD8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155EEF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F9FC]"
          >
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
