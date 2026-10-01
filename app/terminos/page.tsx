import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos de Uso — StayCool",
  description:
    "Términos de Uso (EULA) de StayCool: aceptación, descripción del servicio, planes y precios, cancelación, derecho a retracto y más.",
};

export default function TerminosPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="relative flex-1 px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-brand-blue-deep sm:text-4xl">
            Términos de Uso (EULA)
          </h1>
          <p className="mt-3 text-sm text-brand-blue-deep/50">
            Última actualización: 08 de septiembre del 2026
          </p>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-brand-blue-deep/80">
            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                2.1 Identificación del proveedor
              </h2>
              <p className="mt-2">
                StayCool es operado por Héctor Giovanni Córdova Villalón,
                17734082-0, con domicilio en Santiago, Chile. Contacto:
                hectorcordovavillalon@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                2.2 Aceptación
              </h2>
              <p className="mt-2">
                Al crear una cuenta o usar StayCool, aceptas estos Términos
                de Uso. Si no estás de acuerdo, no debes usar la app.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                2.3 Descripción del servicio
              </h2>
              <p className="mt-2">
                StayCool es una agenda integral de autocuidado personal,
                organizada en los módulos Bienestar, Imagen, Cara, Higiene,
                Pelo, Actividades Sociales y Gastos. Te permite registrar
                hábitos, ver resúmenes y estadísticas, y —según tu plan—
                compartir resúmenes en redes sociales o exportarlos en PDF.
              </p>
              <p className="mt-2">
                StayCool es una herramienta de autoseguimiento y organización
                personal. <strong>No es un dispositivo médico, no entrega
                diagnósticos ni sustituye la consulta con un profesional de
                la salud.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                2.4 Cuentas de usuario
              </h2>
              <p className="mt-2">
                Debes entregar información veraz al registrarte y eres
                responsable de mantener la confidencialidad de tu contraseña.
                Debes tener al menos 13 años para crear una cuenta; si eres
                menor de 18, necesitas supervisión de un adulto responsable.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                2.5 Planes y precios
              </h2>
              <p className="mt-2">
                StayCool ofrece los siguientes planes (precios en pesos
                chilenos):
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  <strong>Plan Gratuito:</strong> acceso a la agenda base y
                  sus módulos, excepto módulo estadísticas.
                </li>
                <li>
                  <strong>Plan So Basic! — $2.990 CLP/mes:</strong> compartir
                  tu resumen mensual (wraper) en redes sociales y acceder al
                  resumen semanal.
                </li>
                <li>
                  <strong>Plan Diva — $7.990 CLP/mes:</strong> acceso total a
                  la agenda, estadísticas incluidas, entrega de reportes en
                  PDF, cambio de foto de perfil y vista al resumen total.
                </li>
              </ul>
              <p className="mt-2">
                Los precios pueden actualizarse; si esto ocurre, se te
                notificará antes de que se aplique el cambio a tu próxima
                renovación.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                2.6 Renovación automática y cancelación
              </h2>
              <p className="mt-2">
                Las suscripciones se renuevan automáticamente al final de
                cada período, salvo que las canceles antes de la fecha de
                renovación. La suscripción se gestiona y se cobra a través de
                tu cuenta de Apple ID o de Google Play, según el dispositivo
                que uses. Puedes cancelar en cualquier momento desde la
                configuración de suscripciones de tu tienda — cancelar no
                genera un reembolso automático del período ya pagado.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                2.7 Derecho a retracto
              </h2>
              <p className="mt-2">
                Conforme al artículo 3 bis de la Ley N° 19.496 sobre
                Protección de los Derechos del Consumidor, tienes derecho a
                poner término unilateral a tu suscripción dentro de los{" "}
                <strong>10 días corridos</strong> siguientes a la
                contratación, siempre que no hayas hecho uso efectivo del
                servicio contratado. Para ejercerlo, escribe a
                contacto@staycool.cl
              </p>
              <p className="mt-2">
                Si tu compra fue procesada a través de App Store o Google
                Play, la solicitud de reembolso debe gestionarse directamente
                en la tienda correspondiente, conforme a sus propias
                políticas de reembolso.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                2.8 Reembolsos
              </h2>
              <p className="mt-2">
                Fuera del derecho a retracto señalado arriba, los reembolsos
                se rigen por las políticas de Apple y Google, ya que son
                ellos quienes procesan el pago.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                2.9 Propiedad intelectual
              </h2>
              <p className="mt-2">
                StayCool, su marca, logo e interfaz son propiedad de Héctor
                Giovani Córdova Villalón. El contenido que tú generas dentro
                de la app (tus registros personales) es tuyo; nos das
                permiso únicamente para procesarlo y mostrártelo a ti como
                parte del servicio.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                2.10 Uso permitido
              </h2>
              <p className="mt-2">
                No puedes usar StayCool para fines ilegales, intentar
                vulnerar su seguridad, ni compartir tu cuenta con terceros de
                forma que infrinja estos términos. StayCool prohibe
                estrictamente el subir fotos que no correspondan al contexto
                claro de lo que es referido, ya sea ropa, zapatos, maquillaje
                o peinado. Cualquier otro uso será denunciado mediante los
                procesos legales correspondientes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                2.11 Limitación de responsabilidad
              </h2>
              <p className="mt-2">
                StayCool se entrega &ldquo;tal cual&rdquo;. No garantizamos
                que la app esté libre de errores en todo momento. En la
                máxima medida permitida por la ley, StayCool no será
                responsable por decisiones que tomes basándote en la
                información que registras en la app, ya que se trata de una
                herramienta de organización personal y no de asesoría
                profesional.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                2.12 Modificaciones
              </h2>
              <p className="mt-2">
                Podemos actualizar estos Términos o las funciones de la app.
                Los cambios relevantes se comunicarán dentro de la app o por
                correo.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                2.13 Ley aplicable y reclamos
              </h2>
              <p className="mt-2">
                Estos Términos se rigen por las leyes de la República de
                Chile. Cualquier controversia se someterá a los tribunales
                competentes de Chile. Como consumidor, también puedes
                presentar tus reclamos ante el Servicio Nacional del
                Consumidor (SERNAC).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                2.14 Contacto
              </h2>
              <p className="mt-2">
                hectorcordovavillalon@gmail.com· www.staycool.cl
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
