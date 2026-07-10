import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedNetwork } from "@/components/motion/AnimatedNetwork";
import { Hero } from "@/components/sections/Hero";
import { PainSection } from "@/components/sections/PainSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PlatformGraph } from "@/components/sections/PlatformGraph";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="page">
      <AnimatedNetwork variant="orbit" className="bg-orbit" />
      <Header />
      <main id="main-content">
        <Hero />
        <PainSection />
        <MethodSection />
        <DifferentialsSection />
        <AboutSection />
        <ServicesSection />
        <PlatformGraph />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
