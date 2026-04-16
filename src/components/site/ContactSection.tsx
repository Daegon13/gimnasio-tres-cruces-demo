import { AtSign, Clock3, MapPin, MessageCircle } from "lucide-react";

import { gymData } from "@/data/gym";

function getInstagramHandle(instagramUrl: string) {
  const match = instagramUrl.match(/instagram\.com\/?([^/?#]+)/i);
  const handle = match?.[1]?.replace(/^@/, "");

  return handle ? `@${handle}` : instagramUrl;
}

export function ContactSection() {
  const instagramHandle = getInstagramHandle(gymData.businessInfo.instagramUrl);

  return (
    <section
      id="contacto"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 pb-24 pt-16 sm:scroll-mt-28 sm:px-8 sm:pb-28 sm:pt-20"
    >
      <div className="overflow-hidden rounded-3xl border border-lime-300/30 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 p-6 shadow-[0_30px_90px_-50px_rgba(182,255,42,0.9)] sm:p-8 lg:p-10">
        <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-300 sm:text-sm">{gymData.contactSection.eyebrow}</p>
            <h2 className="max-w-xl text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              {gymData.contactSection.title}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-100 sm:text-base">{gymData.contactSection.description}</p>

            <a
              href={gymData.businessInfo.whatsappUrl}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-300 px-6 py-4 text-sm font-black uppercase tracking-[0.06em] text-zinc-950 shadow-[0_20px_46px_-22px_rgba(182,255,42,0.85)] transition hover:bg-lime-200 sm:w-auto"
            >
              <MessageCircle size={18} aria-hidden />
              {gymData.contactSection.ctaLabel}
            </a>
          </div>

          <div className="rounded-2xl border border-zinc-700 bg-zinc-950/70 p-5 sm:p-6">
            <ul className="space-y-4 text-sm text-zinc-100 sm:text-base">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-lime-300" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-lime-300">{gymData.contactSection.addressLabel}</p>
                  <p className="mt-1 leading-relaxed text-zinc-100">{gymData.businessInfo.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 size={18} className="mt-0.5 shrink-0 text-lime-300" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-lime-300">{gymData.contactSection.hoursLabel}</p>
                  <p className="mt-1 leading-relaxed text-zinc-100">{gymData.businessInfo.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AtSign size={18} className="mt-0.5 shrink-0 text-lime-300" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-lime-300">{gymData.contactSection.instagramLabel}</p>
                  <a
                    href={gymData.businessInfo.instagramUrl}
                    className="mt-1 inline-flex text-zinc-100 underline decoration-lime-400/60 underline-offset-4 transition hover:text-lime-200"
                  >
                    {instagramHandle}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
