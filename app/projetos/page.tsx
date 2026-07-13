import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ProjetosHero } from "@/components/projetos/ProjetosHero";
import { CaseStudies } from "@/components/projetos/CaseStudies";
import { projectsPage } from "@/content/copy";

export const metadata: Metadata = {
  title: projectsPage.meta.title,
  description: projectsPage.meta.description,
  alternates: { canonical: "/projetos" },
  openGraph: {
    title: projectsPage.meta.title,
    description: projectsPage.meta.description,
    url: "https://mariaconsultoria.com.br/projetos",
    siteName: "MarIA Consultoria",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ProjetosPage() {
  return (
    <div className="page">
      <Header />
      <main id="main-content">
        <ProjetosHero />
        <CaseStudies />
        <FinalCTA
          id="contato"
          title={projectsPage.finalCta.title}
          subtext={projectsPage.finalCta.subtext}
          primaryLabel={projectsPage.finalCta.ctaPrimary.label}
          primaryMessage={projectsPage.finalCta.ctaPrimary.message}
          secondaryLabel={projectsPage.finalCta.ctaSecondary.label}
          secondaryHref={projectsPage.finalCta.ctaSecondary.href}
        />
      </main>
      <Footer />
    </div>
  );
}
