import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | StayCool",
};

export default function ContactoPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="flex-1 bg-brand-blue-light/30 px-6 py-24">
        <div className="mx-auto grid max-w-4xl gap-16 sm:grid-cols-2">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-brand-blue-deep sm:text-4xl">
              Contacto
            </h1>
            <p className="mt-4 text-brand-blue-deep/70">
              ¿Tienes dudas o comentarios? Escríbenos por cualquiera de estos
              medios.
            </p>

            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-brand-blue-deep">Teléfono</dt>
                <dd className="text-brand-blue-deep/70">+56 9 XXXX XXXX</dd>
              </div>
              <div>
                <dt className="font-medium text-brand-blue-deep">Correo</dt>
                <dd className="text-brand-blue-deep/70">
                  contacto@staycool.cl
                </dd>
              </div>
            </dl>

            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-brand-blue-deep transition-opacity hover:opacity-90"
            >
              Escríbenos por WhatsApp
            </a>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
