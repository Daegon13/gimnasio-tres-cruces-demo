import { MessageCircle } from "lucide-react";

import { gymData } from "@/data/gym";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-lime-300/20 bg-zinc-950/95 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 md:hidden">
      <a
        href={gymData.hero.primaryCtaHref}
        className="mx-auto flex w-full max-w-6xl items-center justify-center gap-2 rounded-full bg-lime-300 px-5 py-3.5 text-sm font-black uppercase tracking-[0.06em] text-zinc-950 shadow-[0_14px_34px_-18px_rgba(182,255,42,0.85)] transition hover:bg-lime-200"
      >
        <MessageCircle size={18} aria-hidden />
        {gymData.hero.primaryCtaLabel}
      </a>
    </div>
  );
}
