const modulos = [
  {
    title: "Bienestar",
    description: "Registra tu ánimo y hábitos para cuidar tu salud mental día a día.",
  },
  {
    title: "Imagen",
    description: "Organiza tu estilo y rutina de cuidado personal sin esfuerzo.",
  },
  {
    title: "Higiene",
    description: "Recordatorios simples para mantener tus rutinas al día.",
  },
  {
    title: "Actividades sociales",
    description: "Planifica salidas y momentos con las personas que quieres.",
  },
  {
    title: "Gastos",
    description: "Lleva control de tu plata sin complicarte con planillas.",
  },
];

export default function QueEsLaApp() {
  return (
    <section id="descargar" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-brand-yellow/40 px-6 py-12 text-center">
          <p className="text-sm font-medium text-brand-blue-deep/70">
            Escanea el código para descargar en Google Play
          </p>
          <div className="flex h-40 w-40 items-center justify-center rounded-xl border-2 border-dashed border-brand-blue-deep/40 bg-white">
            <span className="px-4 text-center text-sm text-brand-blue-deep/50">
              QR próximamente
            </span>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-blue-deep sm:text-4xl">
            ¿Qué es StayCool?
          </h2>
          <p className="mt-4 text-lg text-brand-blue-deep/70">
            Una sola app para organizar lo que realmente importa: tu
            bienestar, tu imagen, tu higiene, tu vida social y tus gastos.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modulos.map((modulo) => (
            <li
              key={modulo.title}
              className="rounded-2xl border border-brand-green bg-brand-green/40 p-6"
            >
              <h3 className="text-base font-semibold text-brand-blue-deep">
                {modulo.title}
              </h3>
              <p className="mt-2 text-sm text-brand-blue-deep/70">
                {modulo.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
