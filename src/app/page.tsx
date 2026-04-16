import { gymData } from "@/data/gym";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10">
      <header className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="text-sm uppercase tracking-[0.18em] text-zinc-400">{gymData.name}</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {gymData.headline}
        </h1>
        <p className="max-w-2xl text-lg text-zinc-300">{gymData.subheadline}</p>
        <div className="flex flex-wrap gap-4">
          <a
            href={gymData.primaryCtaHref}
            className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-white"
          >
            {gymData.primaryCtaLabel}
          </a>
          <button
            type="button"
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-zinc-100"
          >
            {gymData.secondaryCtaLabel}
          </button>
        </div>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
          <h2 className="text-xl font-medium text-white">Beneficios</h2>
          <ul className="mt-4 space-y-3 text-zinc-300">
            {gymData.benefits.map((benefit) => (
              <li key={benefit}>• {benefit}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
          <h2 className="text-xl font-medium text-white">Actividades</h2>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-200">
            {gymData.activities.map((activity) => (
              <li key={activity} className="rounded-full border border-white/20 px-3 py-1">
                {activity}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
