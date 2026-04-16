import { gymData } from "@/data/gym";

const navItems = [
  { label: "Actividades", href: "#actividades" },
  { label: "Horarios", href: "#horarios" },
  { label: "Ubicación", href: "#ubicacion" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#inicio" className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
          {gymData.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={gymData.whatsappUrl}
          className="rounded-full bg-white px-4 py-2 text-center text-xs font-semibold text-zinc-950 transition hover:bg-zinc-100 sm:px-5 sm:text-sm"
        >
          Agendá tu clase de prueba
        </a>
      </div>
    </header>
  );
}
