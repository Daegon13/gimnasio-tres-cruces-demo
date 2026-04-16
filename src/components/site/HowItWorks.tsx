import { CheckCircle2, MessageCircleMore, Sparkles } from "lucide-react";

import { gymData } from "@/data/gym";

const stepIcons = [MessageCircleMore, Sparkles, CheckCircle2] as const;

export function HowItWorks() {
  return (
    <section
      id="como-empezar"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 sm:scroll-mt-28 sm:px-8 sm:py-20"
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80 sm:text-sm">
          Cómo empezar
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Tres pasos simples para arrancar esta misma semana.
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
          Te acompañamos desde el primer mensaje para que sepas exactamente qué hacer y cuándo
          empezar, sin vueltas.
        </p>
      </div>

      <ol className="mt-8 grid gap-4 sm:grid-cols-3">
        {gymData.howItWorksSteps.map((step, index) => {
          const Icon = stepIcons[index] ?? CheckCircle2;

          return (
            <li
              key={step}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                <Icon size={20} aria-hidden />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/90">
                Paso {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">{step}</h3>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
