export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-blue-light/40 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1 className="font-script text-6xl leading-tight text-brand-blue-deep sm:text-7xl">
          StayCool
        </h1>
        <p className="mt-6 max-w-xl text-balance text-lg text-brand-blue-deep/80 sm:text-xl">
          La agenda de bienestar, imagen, higiene, actividades sociales y
          gastos, pensada para jóvenes.
        </p>
        <a
          href="#descargar"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-blue-deep px-8 py-3 text-base font-semibold text-white shadow-sm transition-transform hover:scale-[1.03]"
        >
          Descargar
        </a>
      </div>
    </section>
  );
}
