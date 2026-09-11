import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad — StayCool",
  description:
    "Política de Privacidad de StayCool: qué datos recopilamos, para qué los usamos y qué derechos tienes conforme a la Ley N° 19.628.",
};

export default function PrivacidadPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="relative flex-1 px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-brand-blue-deep sm:text-4xl">
            Política de Privacidad
          </h1>
          <p className="mt-3 text-sm text-brand-blue-deep/50">
            Última actualización: 08 de septiemnre del 2026
          </p>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-brand-blue-deep/80">
            <p>
              En StayCool nos tomamos muuuuuuuuuuuy en serio tu privacidad.
              StayCool es una agenda integral de autocuidado: registra
              información que tú decides ingresar (higiene, imagen, cara,
              pelo, bienestar, sueño, actividades sociales, gastos) para
              ayudarte a llevar un registro de tu día a día para así tomar
              mejores decisiones sobre tus propios hábitos— por ejemplo,
              cuánto estás durmiendo o con qué frecuencia repites una rutina.
              Esta política explica qué datos recopilamos, para qué los
              usamos y qué derechos tienes, conforme a la Ley N° 19.628 sobre
              Protección de la Vida Privada.
            </p>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                1.1 Responsable del tratamiento de datos
              </h2>
              <p className="mt-2">
                Héctor Giovanni Córdova Villalón, RUT 17734082-0 · Chile
                <br />
                Contacto: hectorcordovavillalon@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                1.2 Qué datos recopilamos
              </h2>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  <strong>Datos de cuenta:</strong> correo electrónico y
                  contraseña (o inicio de sesión), a través de nuestro
                  proveedor de autenticación (Supabase).
                </li>
                <li>
                  <strong>Datos que tú ingresas en la agenda:</strong> los
                  registros que creas en los módulos de Bienestar, Imagen,
                  Cara, Higiene, Pelo, Actividades Sociales y Gastos —
                  incluyendo hábitos como horas de sueño o rutinas de
                  higiene. Son datos autoreportados por ti; StayCool no es un
                  dispositivo médico ni realiza diagnósticos.
                </li>
                <li>
                  <strong>Datos de uso de la app y del sitio web:</strong>{" "}
                  interacción con pantallas y funciones, con fines
                  estadísticos y de mejora del producto (a través de
                  PostHog). En el sitio web esto puede incluir cookies o
                  almacenamiento local con el mismo fin analítico; no usamos
                  cookies de publicidad de terceros.
                </li>
                <li>
                  <strong>Datos de diagnóstico:</strong> registros de errores
                  técnicos y fallos (crash logs), con información básica del
                  dispositivo (modelo, sistema operativo), a través de
                  Sentry.
                </li>
                <li>
                  <strong>Datos de compras y suscripción:</strong> el plan
                  activo, historial de transacciones y estado de tu
                  suscripción, gestionado a través de RevenueCat y de la
                  tienda correspondiente (App Store o Google Play). StayCool
                  no almacena datos de tu tarjeta ni medio de pago — eso lo
                  procesa directamente Apple o Google.
                </li>
                <li>
                  <strong>Datos al compartir contenido:</strong> si compartes
                  tu resumen en Instagram Stories, se usa un identificador de
                  aplicación de Meta/Facebook solo para habilitar esa
                  función; no accedemos a tu cuenta de Instagram ni a tus
                  contactos.
                </li>
              </ul>
              <p className="mt-2">
                No recopilamos tu ubicación en tiempo real ni accedemos a tu
                agenda de contactos.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                1.3 Para qué usamos tus datos
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Entregarte tus registros, resúmenes y estadísticas dentro de la app.</li>
                <li>Procesar y validar tu suscripción.</li>
                <li>Detectar y corregir errores técnicos.</li>
                <li>Entender de forma agregada cómo se usa la app, para mejorarla.</li>
                <li>Responder tus consultas de soporte.</li>
              </ul>
              <p className="mt-2">
                No vendemos tus datos personales ni los usamos con fines
                publicitarios ajenos a StayCool.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                1.4 Con quién compartimos datos y transferencias
                internacionales
              </h2>
              <p className="mt-2">
                Compartimos datos únicamente con los proveedores que hacen
                funcionar la app, bajo sus propias políticas de privacidad.
                Algunos de ellos procesan datos en servidores fuera de Chile
                (Estados Unidos o Europa, según el proveedor):
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full min-w-[420px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-brand-blue-deep/20 text-left">
                      <th className="py-2 pr-4 font-semibold text-brand-blue-deep">
                        Proveedor
                      </th>
                      <th className="py-2 font-semibold text-brand-blue-deep">
                        Para qué lo usamos
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Supabase", "Autenticación, base de datos y almacenamiento"],
                      ["RevenueCat", "Gestión de suscripciones y compras"],
                      ["PostHog", "Analítica de uso del producto"],
                      ["Sentry", "Monitoreo de errores técnicos"],
                      [
                        "Apple App Store / Google Play",
                        "Procesamiento de pagos de suscripción",
                      ],
                      [
                        "Meta/Facebook SDK",
                        "Solo si compartes contenido a Instagram Stories",
                      ],
                    ].map(([provider, use]) => (
                      <tr
                        key={provider}
                        className="border-b border-brand-blue-deep/10"
                      >
                        <td className="py-2 pr-4">{provider}</td>
                        <td className="py-2">{use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                Estas transferencias se realizan con proveedores que aplican
                estándares de seguridad reconocidos internacionalmente
                (cifrado en tránsito y en reposo).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                1.5 Tus derechos sobre tus datos
              </h2>
              <p className="mt-2">
                Puedes solicitar en cualquier momento, escribiendo a [correo
                de contacto]:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li><strong>Acceso:</strong> saber qué datos tuyos tenemos.</li>
                <li><strong>Rectificación:</strong> corregir datos inexactos.</li>
                <li>
                  <strong>Cancelación/eliminación:</strong> que borremos tus
                  datos (&ldquo;derecho al olvido&rdquo;).
                </li>
                <li>
                  <strong>Oposición:</strong> oponerte a un uso específico de
                  tus datos.
                </li>
                <li>
                  <strong>Portabilidad:</strong> solicitar una copia de tus
                  datos en un formato reutilizable.
                </li>
              </ul>
              <p className="mt-2">
                Responderemos dentro de un plazo razonable. Si en el futuro
                no estás conforme con nuestra respuesta, puedes recurrir a la
                Agencia de Protección de Datos Personales una vez que entre
                en funciones.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                1.6 Conservación de los datos
              </h2>
              <p className="mt-2">
                Conservamos tus datos mientras tu cuenta esté activa. Si
                eliminas tu cuenta, eliminamos o anonimizamos tus datos
                personales dentro de un plazo razonable, salvo obligación
                legal de conservar cierta información (por ejemplo, registros
                de transacciones).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                1.7 Seguridad y notificación de incidentes
              </h2>
              <p className="mt-2">
                Toda la información viaja cifrada (HTTPS/TLS) y se almacena
                con controles de acceso en la infraestructura de nuestros
                proveedores. Si llegara a producirse una vulneración de
                seguridad que afecte tus datos personales, te notificaremos
                junto con las medidas adoptadas, dentro de los plazos que
                exige la normativa vigente.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                1.8 Menores de edad
              </h2>
              <p className="mt-2">
                StayCool no está dirigido a menores de 13 años. Si tienes
                entre 13 y 18 años, debes contar con supervisión de un adulto
                responsable para usar la app. ¡Aprovecha de compartir tiempo
                con tu mamá, papá o adulto cercano completando cada módulo!
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                1.9 Cambios a esta política
              </h2>
              <p className="mt-2">
                Podemos actualizar esta política cuando cambien nuestras
                prácticas o la normativa aplicable (incluyendo la entrada en
                vigencia de la Ley N° 21.719 el 1 de diciembre de 2026).
                Publicaremos la fecha de la última actualización en esta
                misma página.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-blue-deep">
                1.10 Contacto
              </h2>
              <p className="mt-2">
                hectorcordovavillalon@gmail.com · +56 9 45305434 ·
                www.staycool.cl
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
