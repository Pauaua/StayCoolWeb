import Link from "next/link";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#descargar", label: "Descargar" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-blue-light/60 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/#inicio" className="text-lg font-semibold tracking-tight text-brand-blue-deep">
          StayCool
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium text-brand-blue-deep">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-opacity hover:opacity-70"
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
