import Link from "next/link";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#descargar", label: "Descargar" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-blue-light/60 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/#inicio"
          className="shrink-0 text-lg font-semibold tracking-tight text-brand-blue-deep transition-colors hover:text-brand-purple"
        >
          StayCool
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
