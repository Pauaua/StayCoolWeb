import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | StayCool",
};

export default function PrivacidadPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="relative flex-1 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-brand-blue-deep sm:text-4xl">
            Política de Privacidad
          </h1>
          <p className="mt-2 text-sm text-brand-blue-deep/50">
            Última actualización: [fecha]
          </p>

          <div className="mt-10 space-y-8 text-brand-blue-deep/80">
            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                1. Introducción
              </h2>
              <p className="mt-2">
                En StayCool (&ldquo;la App&rdquo;, &ldquo;nosotros&rdquo;) nos comprometemos a
                proteger la privacidad de nuestros usuarios. Esta Política de
                Privacidad describe qué información recopilamos, cómo la
                usamos y qué derechos tienes sobre tus datos.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                2. Información que recopilamos
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Datos de cuenta: nombre, correo electrónico y contraseña (o
                  autenticación mediante terceros).
                </li>
                <li>
                  Fotos e imágenes que el usuario suba voluntariamente dentro
                  del módulo de imagen.
                </li>
                <li>
                  Hábitos personales: registros de bienestar, higiene,
                  actividades sociales y gastos ingresados en la App.
                </li>
                <li>
                  Información de pagos y suscripciones, procesada a través de
                  RevenueCat y las plataformas de pago de Apple/Google. Agenda
                  Cool no almacena datos de tarjetas de crédito.
                </li>
                <li>
                  Datos técnicos del dispositivo (modelo, sistema operativo,
                  identificadores de instalación) con fines de soporte y
                  analítica.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                3. Cómo usamos tu información
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Proveer y mejorar las funcionalidades de la App.</li>
                <li>
                  Personalizar el contenido y los recordatorios que recibes.
                </li>
                <li>Procesar suscripciones y compras dentro de la App.</li>
                <li>
                  Comunicarnos contigo ante consultas de soporte o
                  actualizaciones relevantes.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                4. Con quién compartimos tu información
              </h2>
              <p className="mt-2">
                No vendemos tu información personal. Podemos compartir datos
                con proveedores de servicios que nos ayudan a operar la App,
                como RevenueCat (gestión de suscripciones), proveedores de
                infraestructura en la nube y herramientas de analítica,
                siempre bajo acuerdos de confidencialidad.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                5. Seguridad de los datos
              </h2>
              <p className="mt-2">
                Implementamos medidas técnicas y organizativas razonables
                para proteger tu información contra accesos no autorizados,
                pérdida o alteración.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                6. Tus derechos
              </h2>
              <p className="mt-2">
                Puedes solicitar acceso, corrección o eliminación de tus
                datos personales, así como retirar tu consentimiento, escrib
                iéndonos a través de nuestra página de{" "}
                <a href="/contacto" className="underline">
                  Contacto
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                7. Retención de datos
              </h2>
              <p className="mt-2">
                Conservamos tu información mientras mantengas una cuenta
                activa en la App, o según sea necesario para cumplir con
                obligaciones legales.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                8. Menores de edad
              </h2>
              <p className="mt-2">
                La App está dirigida a jóvenes. Si eres menor de edad, te
                recomendamos usar la App con el conocimiento de tu madre,
                padre o tutor legal.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                9. Cambios a esta política
              </h2>
              <p className="mt-2">
                Podemos actualizar esta Política de Privacidad periódicamente.
                Te notificaremos sobre cambios importantes a través de la App
                o de nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                10. Contacto
              </h2>
              <p className="mt-2">
                Si tienes preguntas sobre esta Política de Privacidad, puedes
                contactarnos en contacto@staycool.cl.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
