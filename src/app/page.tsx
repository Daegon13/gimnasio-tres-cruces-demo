import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { Header } from "@/components/site/Header";
import { Activities } from "@/components/site/Activities";
import { SocialProof } from "@/components/site/SocialProof";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Header />
      <Hero />
      <Benefits />
      <SocialProof />
      <Activities />

      <section id="horarios" className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <h2 className="text-2xl font-semibold text-white">Horarios</h2>
      </section>
      <section id="ubicacion" className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 pb-24">
        <h2 className="text-2xl font-semibold text-white">Ubicación</h2>
      </section>
    </main>
  );
}
