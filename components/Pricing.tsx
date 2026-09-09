const plans = [
  {
    name: "Plan Gratuito",
    price: "Gratis",
    period: "",
    features: ["Acceso a la agenda"],
    accent: "bg-brand-blue-light/50",
    border: "border-brand-blue-light",
    cta: "Descargar para empezar",
    featured: false,
  },
  {
    name: "So Basic!",
    price: "$2.990",
    period: "/mes",
    features: [
      "Compartir tu wrapper mensual en redes sociales",
      "Ver tu resumen semanal",
    ],
    accent: "bg-brand-purple/40",
    border: "border-brand-purple",
    cta: "Elegir plan",
    featured: false,
  },
  {
    name: "Diva",
    price: "$7.990",
    period: "/mes",
    features: [
      "Acceso total a la agenda, incluidas las estadísticas",
      "Reportes en PDF con tus datos",
      "Cambio de foto de perfil",
      "Vista al resumen total",
    ],
    accent: "bg-brand-yellow/50",
    border: "border-brand-yellow",
    cta: "Descargar para suscribirte",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-blue-deep sm:text-4xl">
            Elige tu plan
          </h2>
          <p className="mt-4 text-lg text-brand-blue-deep/70">
            Empieza gratis y desbloquea más cuando quieras llevar StayCool
            al siguiente nivel.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-8 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border ${plan.border} ${plan.accent} p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.featured
                  ? "sm:scale-110 sm:py-10 shadow-lg"
                  : "hover:scale-[1.03]"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue-deep px-4 py-1 text-xs font-semibold text-white">
                  El más completo
                </span>
              )}

              <h3 className="text-xl font-semibold text-brand-blue-deep">
                {plan.name}
              </h3>

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

              <ul className="mt-6 flex-1 space-y-3 text-sm text-brand-blue-deep/80">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-brand-blue-deep">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${
                  plan.featured
                    ? "bg-brand-blue-deep text-white"
                    : "bg-white text-brand-blue-deep border border-brand-blue-deep/20"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
