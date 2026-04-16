import { gymData } from "@/data/gym";

export function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 pb-16 pt-10 sm:scroll-mt-28 sm:px-8 sm:pb-20 sm:pt-14 lg:pt-18"
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-7">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-300 sm:text-sm">{gymData.hero.eyebrow}</p>

          <div className="space-y-3">
            <h1 className="text-balance text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {gymData.headline}
            </h1>
            <p className="max-w-xl text-pretty text-base font-medium text-zinc-200 sm:text-lg">{gymData.subheadline}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={gymData.hero.primaryCtaHref}
              className="rounded-full bg-lime-300 px-7 py-3 text-center text-sm font-black uppercase tracking-[0.06em] text-zinc-950 shadow-[0_18px_44px_-20px_rgba(182,255,42,0.85)] transition hover:bg-lime-200"
            >
              {gymData.hero.primaryCtaLabel}
            </a>
            <a
              href={gymData.hero.secondaryCtaHref}
              className="rounded-full border border-lime-300/40 px-7 py-3 text-center text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:border-lime-300 hover:bg-lime-300/10"
            >
              {gymData.hero.secondaryCtaLabel}
            </a>
          </div>

          <ul className="flex flex-wrap gap-2 sm:gap-3">
            {gymData.trustBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-lime-300/35 bg-zinc-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-lime-100 sm:text-sm"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-lime-300/25 bg-zinc-900 shadow-[0_24px_80px_-50px_rgba(182,255,42,0.7)] sm:min-h-[460px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${gymData.hero.imageUrl}')`,
            }}
            role="img"
            aria-label={gymData.hero.imageAlt}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/45 to-lime-500/35" aria-hidden />

          <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
            <span className="inline-flex w-fit rounded-full bg-lime-300 px-3 py-1 text-xs font-black uppercase tracking-[0.1em] text-zinc-950">
              {gymData.hero.highlightEyebrow}
            </span>

            <div className="space-y-4">
              <p className="max-w-sm text-2xl font-black leading-tight text-white sm:text-3xl">{gymData.hero.highlightText}</p>
              <ul className="flex flex-wrap gap-2">
                {gymData.hero.chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-white/40 bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-100"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
