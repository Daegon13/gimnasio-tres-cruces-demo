import { gymData } from "@/data/gym";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-lime-300/20 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#inicio" className="text-sm font-black uppercase tracking-[0.2em] text-lime-300">
          {gymData.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {gymData.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-[0.08em] text-zinc-200 transition hover:text-lime-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={gymData.hero.primaryCtaHref}
          className="rounded-full bg-lime-300 px-4 py-2.5 text-center text-xs font-black uppercase tracking-[0.06em] text-zinc-950 shadow-[0_14px_30px_-20px_rgba(182,255,42,0.9)] transition hover:bg-lime-200 sm:px-5 sm:text-sm"
        >
          {gymData.hero.primaryCtaLabel}
        </a>
      </div>
    </header>
  );
}
