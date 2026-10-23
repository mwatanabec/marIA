import { HomeContent } from "@/components/institutional/HomeContent";
import { SiteShell, ContactInvite } from "@/components/institutional/SiteShell";
import { pageMetadata } from "@/components/institutional/metadata";
import { PlatformGraph } from "@/components/sections/PlatformGraph";
import { ProjectsPreview } from "@/components/projetos/ProjectPortfolio";

export const metadata = pageMetadata("Menos trabalho manual. Mais resultado.", "Automação de processos, integrações, IA aplicada e soluções sob medida para empresas. Conheça a MarIA e converse sobre seu processo.");

export default function Home() {
  return (
    <SiteShell>
      <HomeContent />
      <ProjectsPreview />
      <PlatformGraph />
      <ContactInvite />
    </SiteShell>
  );
}
