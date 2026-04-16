import { Award, Clock3, Dumbbell, Users } from "lucide-react";

import { gymData } from "@/data/gym";

const benefitIcons = {
  award: Award,
  coaching: Users,
  equipment: Dumbbell,
  schedule: Clock3,
} as const;

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 sm:scroll-mt-28 sm:px-8 sm:py-20"
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80 sm:text-sm">
          Por qué elegir Tres Cruces
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Beneficios concretos para entrenar con confianza desde el primer día.
        </h2>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {gymData.benefits.map((benefit) => {
          const Icon = benefitIcons[benefit.icon];

          return (
            <article
              key={benefit.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                <Icon size={20} aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{benefit.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
