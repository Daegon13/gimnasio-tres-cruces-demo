import { MessageCircle } from "lucide-react";

import { gymData } from "@/data/gym";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-zinc-950/90 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 backdrop-blur md:hidden">
      <a
        href={gymData.hero.primaryCtaHref}
        className="mx-auto flex w-full max-w-6xl items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_18px_44px_-20px_rgba(34,211,238,0.8)] transition hover:bg-cyan-200"
      >
        <MessageCircle size={18} aria-hidden />
        {gymData.hero.primaryCtaLabel}
      </a>
    </div>
  );
}
