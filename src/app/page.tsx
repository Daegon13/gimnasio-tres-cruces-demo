import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { Header } from "@/components/site/Header";
import { Activities } from "@/components/site/Activities";
import { SocialProof } from "@/components/site/SocialProof";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ContactSection } from "@/components/site/ContactSection";
import { StickyCta } from "@/components/site/StickyCta";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent pb-28 md:pb-0">
      <Header />
      <Hero />
      <Benefits />
      <SocialProof />
      <Activities />
      <HowItWorks />
      <ContactSection />
      <StickyCta />
    </main>
  );
}
