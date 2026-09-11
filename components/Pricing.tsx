import Image from "next/image";

const plans = [
  {
    name: "Plan Gratuito",
    image: "/images/solazo.png",
    price: "Gratis",
    period: "",
    features: ["Acceso a la agenda, todos los módulos excepto Estadísticas"],
    accent: "bg-brand-blue-light/50 border-brand-blue-light",
    sparkle: false,
  },
  {
    name: "So Basic!",
    image: "/images/uñotas.png",
    price: "$2.990",
    period: "/mes",
    features: [
      "Acceso a la agenda, todos los módulos excepto Estadísticas",
      "Visualizar Resumen Semanal",
      "Compartir wrappers en RRSS",
    ],
    accent: "bg-brand-purple/40 border-brand-purple",
    sparkle: false,
  },
  {
    name: "Diva",
    image: "/images/brillitos.png",
    price: "$7.990",
    period: "/mes",
    features: [
      "Acceso full a la agenda, todos los módulos",
      "Personaliza tu foto de perfil",
      "Full acceso a Mi Resumen (semanal, mensual, anual)",
      "Estadísticas con tus datos, descargables en PDF",
      "Compartir wrappers personalizados en RRSS",
    ],
    accent: "bg-brand-yellow/50 border-brand-yellow",
    sparkle: true,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="relative px-6 py-8 sm:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-blue-deep sm:text-3xl">
            Suscripciones
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-purple hover:shadow-xl sm:p-8 ${plan.accent}`}
            >
              {plan.sparkle && (
                <>
                  <span className="pointer-events-none absolute right-6 top-6 h-2 w-2 rounded-full bg-white shadow-[0_0_8px_3px_rgba(255,255,255,0.8)]" />
                  <span className="pointer-events-none absolute right-16 top-14 h-1 w-1 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.7)]" />
                  <span className="pointer-events-none absolute left-8 top-10 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_7px_2px_rgba(255,255,255,0.75)]" />
                  <span className="pointer-events-none absolute right-10 top-24 h-1 w-1 rounded-full bg-white shadow-[0_0_5px_2px_rgba(255,255,255,0.6)]" />
                </>
              )}

              <div className="flex items-center gap-3">
                <Image
                  src={plan.image}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 object-contain"
                />
                <h3 className="text-lg font-semibold text-brand-blue-deep">
                  {plan.name}
                </h3>
              </div>

              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-brand-blue-deep">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-brand-blue-deep/60">
                    {plan.period}
                  </span>
                )}
              </p>

              <ul className="mt-6 flex-1 space-y-3 text-sm text-brand-blue-deep/75">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
