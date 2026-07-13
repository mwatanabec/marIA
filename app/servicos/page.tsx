import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedNetwork } from "@/components/motion/AnimatedNetwork";
import { MethodSection } from "@/components/sections/MethodSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServicosHero } from "@/components/servicos/ServicosHero";
import { ServicosIntro } from "@/components/servicos/ServicosIntro";
import { ServiceOfferings } from "@/components/servicos/ServiceOfferings";
import { ServiceMatch } from "@/components/servicos/ServiceMatch";
import { servicesPage } from "@/content/copy";

export const metadata: Metadata = {
  title: servicesPage.meta.title,
  description: servicesPage.meta.description,
  alternates: { canonical: "/servicos" },
  openGraph: {
    title: servicesPage.meta.title,
    description: servicesPage.meta.description,
    url: "https://mariaconsultoria.com.br/servicos",
    siteName: "MarIA Consultoria",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ServicosPage() {
  return (
    <div className="page page--servicos">
      <AnimatedNetwork variant="orbit" className="bg-orbit" />
      <Header />
      <main id="main-content">
        <ServicosHero />
        <ServicosIntro />
        <ServiceOfferings />
        <MethodSection />
        <ServiceMatch />
        <FinalCTA
          id="contato"
          title={servicesPage.finalCta.title}
          subtext={servicesPage.finalCta.subtext}
          primaryLabel={servicesPage.finalCta.ctaPrimary.label}
          primaryMessage={servicesPage.finalCta.ctaPrimary.message}
          secondaryLabel={servicesPage.finalCta.ctaSecondary.label}
          secondaryHref={servicesPage.finalCta.ctaSecondary.href}
        />
      </main>
      <Footer />
    </div>
  );
}
