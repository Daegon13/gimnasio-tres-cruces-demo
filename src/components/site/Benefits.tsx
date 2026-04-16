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
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-300 sm:text-sm">{gymData.benefitsSection.eyebrow}</p>
        <h2 className="max-w-3xl text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
          {gymData.benefitsSection.title}
        </h2>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {gymData.benefits.map((benefit) => {
          const Icon = benefitIcons[benefit.icon];

          return (
            <article
              key={benefit.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-[0_12px_28px_-20px_rgba(0,0,0,0.9)]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300 text-zinc-950">
                <Icon size={20} aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-extrabold uppercase tracking-[0.02em] text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-200">{benefit.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
