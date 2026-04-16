import { Hero } from "@/components/site/Hero";
import { Header } from "@/components/site/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Header />
      <Hero />

      <section id="actividades" className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <h2 className="text-2xl font-semibold text-white">Actividades</h2>
      </section>
      <section id="horarios" className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <h2 className="text-2xl font-semibold text-white">Horarios</h2>
      </section>
      <section id="ubicacion" className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 pb-24">
        <h2 className="text-2xl font-semibold text-white">Ubicación</h2>
      </section>
    </main>
  );
}
