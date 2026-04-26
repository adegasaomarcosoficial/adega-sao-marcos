/*
 * Home Page - Adega São Marcos
 * Ordem: Hero → TrustBar → Barris → Tipos de Chopp → Sobre a Adega → Chopeira → Parceria → Como Funciona → Diferenciais → FAQ → CTA
 */
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import BarrelsSection from "@/components/sections/BarrelsSection";
import ChoppTypesSection from "@/components/sections/ChoppTypesSection";
import SobreAdegaSection from "@/components/sections/SobreAdegaSection";
import ChoppeiraSection from "@/components/sections/ChoppeiraSection";
import PartnershipSection from "@/components/sections/PartnershipSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Differentials from "@/components/sections/Differentials";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <BarrelsSection />
        <ChoppTypesSection />
        <SobreAdegaSection />
        <ChoppeiraSection />
        <PartnershipSection />
        <HowItWorks />
        <Differentials />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
