import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-blue-light/60 bg-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <div className="flex gap-6 text-sm font-medium text-brand-blue-deep">
          <Link href="/privacidad" className="hover:opacity-70">
            Política de Privacidad
          </Link>
          <Link href="/contacto" className="hover:opacity-70">
            Contacto
          </Link>
        </div>
        <p className="text-xs text-brand-blue-deep/40">
          Made with ❤️ for{" "}
          <a
            href="https://phantasia.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-brand-blue-deep/60"
          >
            Phantasia
          </a>
        </p>
      </div>
    </footer>
  );
}
