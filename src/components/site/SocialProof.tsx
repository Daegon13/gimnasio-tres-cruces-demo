import { MessageSquareQuote, Sparkles } from "lucide-react";

import { gymData } from "@/data/gym";

export function SocialProof() {
  const testimonials = gymData.testimonials.slice(0, 3);

  return (
    <section
      id="testimonios"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 sm:scroll-mt-28 sm:px-8 sm:py-20"
    >
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-zinc-950 sm:text-sm">
          <Sparkles size={16} aria-hidden />
          {gymData.socialProofSection.badgeLabel}
        </div>

        <h2 className="max-w-3xl text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
          {gymData.socialProofSection.title}
        </h2>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2 sm:gap-3">
        {gymData.trustBadges.map((badge) => (
          <li
            key={badge}
            className="inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-100 sm:text-sm"
          >
            <MessageSquareQuote size={14} className="text-lime-300" aria-hidden />
            {badge}
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.85)]">
            <p className="text-sm leading-relaxed text-zinc-100">“{testimonial.quote}”</p>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-lime-300">{testimonial.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
