import { gymData } from "@/data/gym";

export function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 pb-16 pt-10 sm:scroll-mt-28 sm:px-8 sm:pb-20 sm:pt-14 lg:pt-20"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80 sm:text-sm">
            Rendimiento real · Coaches expertos · Comunidad que empuja
          </p>

          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transformá tu cuerpo con entrenamientos que no negocian resultados.
            </h1>
            <p className="max-w-xl text-pretty text-base text-zinc-300 sm:text-lg">
              Clases intensas, seguimiento personalizado y energía de equipo para que avances cada
              semana desde el primer día.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={gymData.whatsappUrl}
              className="rounded-full bg-cyan-300 px-7 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"
            >
              Quiero mi clase de prueba
            </a>
            <a
              href="#actividades"
              className="rounded-full border border-white/25 px-7 py-3 text-center text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              Ver actividades
            </a>
          </div>

          <ul className="flex flex-wrap gap-2 sm:gap-3">
            {gymData.trustBadges.slice(0, 3).map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-200 sm:text-sm"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 sm:min-h-[440px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80')",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/30" aria-hidden />

          <div className="relative flex h-full items-end p-6 sm:p-8">
            <div className="max-w-sm space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">Método Tres Cruces</p>
              <p className="text-xl font-semibold text-white sm:text-2xl">
                Entrená con foco, progresá con datos, mantenete con hábitos sólidos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
