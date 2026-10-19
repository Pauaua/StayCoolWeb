import Image from "next/image";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.agendacool.app&hl=es_CL";

export default function Hero() {
  return (
    <section id="inicio" className="relative px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="text-center lg:text-left">
          <h1 className="font-script text-6xl leading-tight text-brand-blue-deep sm:text-7xl">
            StayCool
          </h1>
          <p className="mt-6 text-balance text-lg font-medium text-brand-blue-deep sm:text-xl">
            StayCool es la agenda que te acompaña a estar, sentirte y verte
            increíble, todos los días.
          </p>

          <p className="mt-6 text-brand-blue-deep/70">
            Aquí registras tus hábitos de bienestar, higiene, imagen, cara,
            pelo, tus actividades sociales y hasta tus gastos — todo en un
            mismo lugar, para que ordenar tu vida deje de ser una tarea
            pendiente y se convierta, simplemente, en un hábito más. Porque
            estar cool no es solo una palabra: es sentirte regio, en
            excelente estado, limpio, con todo bajo control.
          </p>

          <p className="mt-4 text-brand-blue-deep/70">
            Anota tus gustos, tus ideas, lo que se te ocurra a mitad del día
            — StayCool también es tu bloc de notas personal. Y deja que ese
            registro se transforme, poco a poco, en estadísticas simples y
            bonitas sobre tus propios hábitos: para que veas con números, y
            no solo con intuición, qué tan cool estás llevando tu día a día.
          </p>

          <p className="mt-4 text-brand-blue-deep/70">
            Empieza a ordenar tu vida hoy mismo con el Plan Gratuito.
            Comparte tu resumen semanal en redes con So Basic!. Y vive la
            experiencia StayCool completa — estadísticas, reportes en PDF y
            todo lo demás — con Diva.
          </p>

          <p className="mt-6 text-base font-semibold text-brand-blue-deep">
            StayCool. Vive ordenado, vive cool.
          </p>
        </div>

        <div
          id="descargar"
          className="mx-auto flex w-full max-w-xs flex-col items-center rounded-3xl border border-brand-blue-deep/10 bg-white px-6 py-8 shadow-[0_8px_40px_-12px_rgba(0,32,84,0.15)] sm:px-10 sm:py-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue-deep/50">
            Descarga la app
          </p>
          <div className="mt-6 flex h-44 w-44 items-center justify-center rounded-2xl bg-brand-blue-light/40 p-4 sm:h-56 sm:w-56 sm:p-5">
            <Image
              src="/images/qr-google-play.svg"
              alt="Código QR para descargar StayCool en Google Play"
              width={224}
              height={224}
              className="h-full w-full"
            />
          </div>
          <p className="mt-6 text-center text-sm text-brand-blue-deep/60">
            Escanea el código con la cámara de tu celular para descargar
            StayCool
          </p>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue-deep px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-purple hover:text-brand-blue-deep"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
            >
              <path d="M4 2.5v19a1 1 0 0 0 1.5.86l16-9.5a1 1 0 0 0 0-1.72l-16-9.5A1 1 0 0 0 4 2.5Z" />
            </svg>
            Descargar en Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
