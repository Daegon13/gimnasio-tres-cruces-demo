import { ShieldCheck, Star } from "lucide-react";

import { gymData } from "@/data/gym";

export function SocialProof() {
  const testimonials = gymData.testimonials.slice(0, 3);

  return (
    <section
      id="testimonios"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 sm:scroll-mt-28 sm:px-8 sm:py-20"
    >
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200 sm:text-sm">
          <ShieldCheck size={16} aria-hidden />
          {gymData.socialProofSection.badgeLabel}
        </div>

        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {gymData.socialProofSection.title}
        </h2>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2 sm:gap-3">
        {gymData.trustBadges.slice(0, 3).map((badge) => (
          <li
            key={badge}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-200 sm:text-sm"
          >
            <Star size={14} className="text-cyan-200" aria-hidden />
            {badge}
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur"
          >
            <p className="text-sm leading-relaxed text-zinc-200">“{testimonial.quote}”</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200/90">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
