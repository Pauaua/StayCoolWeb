import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#descargar", label: "Descargar" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-blue-light/60 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <Link
          href="/#inicio"
          aria-label="StayCool, ir al inicio"
          className="shrink-0 transition-transform hover:scale-105"
        >
          <Image
            src="/images/ImagenInicial.png"
            alt="StayCool"
            width={494}
            height={505}
            loading="eager"
            className="logo-float h-32 w-auto sm:h-40"
          />
        </Link>
        <ul className="flex items-center gap-3 text-xs font-medium text-brand-blue-deep sm:gap-6 sm:text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-brand-purple"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
