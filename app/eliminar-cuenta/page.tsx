import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Eliminar cuenta — StayCool",
  description:
    "Cómo eliminar tu cuenta de StayCool y todos tus datos asociados.",
};

export default function EliminarCuentaPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="relative flex-1 px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-brand-blue-deep sm:text-4xl">
            Eliminar tu cuenta de StayCool
          </h1>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-brand-blue-deep/80">
            <p>
              StayCool (desarrollada por Phantasia) te permite solicitar la
              eliminación de tu cuenta y de todos tus datos en cualquier
              momento.
            </p>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                Cómo eliminar tu cuenta
              </h2>
              <ol className="mt-2 list-decimal space-y-2 pl-5">
                <li>
                  Abre la app <strong>StayCool</strong>.
                </li>
                <li>
                  Ve a <strong>Configuración</strong>.
                </li>
                <li>
                  Selecciona <strong>Eliminar cuenta</strong>.
                </li>
                <li>Confirma la eliminación en el cuadro de diálogo que aparece.</li>
              </ol>
              <p className="mt-2">
                Tu cuenta y tus datos se eliminarán de inmediato — no es
                necesario contactar a soporte ni esperar un correo de
                confirmación.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                Qué se elimina
              </h2>
              <p className="mt-2">
                Al eliminar tu cuenta se borran de forma permanente e
                irreversible:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Tu cuenta de acceso (correo electrónico y credenciales)</li>
                <li>
                  Todos tus registros en los módulos de la app: Bienestar,
                  Imagen, Cara, Pelo, Higiene, Actividades Sociales y Gastos
                </li>
                <li>
                  Cualquier otro dato personal asociado a tu cuenta en
                  nuestros servidores
                </li>
              </ul>
              <p className="mt-2">
                No conservamos copias de tus datos después de la eliminación.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                ¿Necesitas ayuda?
              </h2>
              <p className="mt-2">
                Si tienes problemas para eliminar tu cuenta desde la app,
                escríbenos a <strong>omgquecoolesto@gmail.com</strong> y
                procesaremos tu solicitud manualmente dentro de un plazo
                razonable.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
