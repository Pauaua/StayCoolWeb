import Image from "next/image";

const modulos = [
  {
    title: "Bienestar",
    description: "Registra tu ánimo y hábitos para cuidar tu salud mental día a día.",
    image: "/images/bienestar.png",
  },
  {
    title: "Imagen",
    description: "Organiza tu estilo y rutina de cuidado personal sin esfuerzo.",
    image: "/images/aufit.png",
  },
  {
    title: "Cuidado personal",
    description: "Recordatorios simples para mantener tus rutinas de higiene al día.",
    image: "/images/duchatecoxinakla.png",
  },
  {
    title: "Cuidado capilar",
    description: "Lleva el registro de tus rutinas y tratamientos para el pelo.",
    image: "/images/pelito.png",
  },
  {
    title: "Actividades sociales",
    description: "Planifica salidas y momentos con las personas que quieres.",
    image: "/images/eventos%20sociales.png",
  },
  {
    title: "Gastos",
    description: "Lleva control de tu plata sin complicarte con planillas.",
    image: "/images/Dineral2.png",
  },
  {
    title: "Gustos",
    description: "Guarda tus canciones, artistas y todo lo que te inspira.",
    image: "/images/musica2.png",
  },
  {
    title: "Ideas",
    description: "Tu bloc de notas personal para lo que se te ocurra en el día.",
    image: "/images/notas2.png",
  },
  {
    title: "Estadísticas",
    description: "Mira con números qué tan cool estás llevando tu día a día.",
    image: "/images/estadisticas.png",
  },
];

export default function QueEsLaApp() {
  return (
    <section className="relative px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
          <Image
            src="/images/makeup.png"
            alt=""
            width={72}
            height={72}
            className="h-16 w-16 object-contain"
          />
          <h2 className="text-2xl font-semibold tracking-tight text-brand-blue-deep sm:text-3xl">
            Módulos que te mantendrán siempre Cool
          </h2>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
          {modulos.map((modulo) => (
            <li key={modulo.title} className="flex items-center gap-4">
              <Image
                src={modulo.image}
                alt={modulo.title}
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 object-contain"
              />
              <div>
                <h3 className="text-base font-semibold text-brand-blue-deep">
                  {modulo.title}
                </h3>
                <p className="mt-1 text-sm text-brand-blue-deep/60">
                  {modulo.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
