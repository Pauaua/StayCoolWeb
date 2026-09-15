import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-blue-light/60 bg-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium text-brand-blue-deep sm:gap-x-6">
          <Link href="/privacidad" className="transition-colors hover:text-brand-purple">
            Política de Privacidad
          </Link>
          <Link href="/terminos" className="transition-colors hover:text-brand-purple">
            Términos de Uso
          </Link>
          <Link href="/eliminar-cuenta" className="transition-colors hover:text-brand-purple">
            Elimina tu cuenta
          </Link>
          <Link href="/contacto" className="transition-colors hover:text-brand-purple">
            Contacto
          </Link>
        </div>
        <p className="text-xs text-brand-blue-deep/40">
          Made with ❤️ for{" "}
          <a
            href="https://phantasia.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-brand-purple"
          >
            Phantasia
          </a>
        </p>
      </div>
    </footer>
  );
}
