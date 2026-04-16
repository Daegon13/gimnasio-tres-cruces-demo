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
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-300 sm:text-sm">{gymData.howItWorksSection.eyebrow}</p>
        <h2 className="max-w-2xl text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
          {gymData.howItWorksSection.title}
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-200 sm:text-base">{gymData.howItWorksSection.description}</p>
      </div>

      <ol className="mt-8 grid gap-4 sm:grid-cols-3">
        {gymData.howItWorksSteps.map((step, index) => {
          const Icon = stepIcons[index] ?? CheckCircle2;

          return (
            <li key={step} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-[0_12px_28px_-20px_rgba(0,0,0,0.85)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300 text-zinc-950">
                <Icon size={20} aria-hidden />
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-lime-300">
                {gymData.howItWorksSection.stepLabel} {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-black uppercase text-white">{step}</h3>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
