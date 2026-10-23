import { ProjectsContent } from "@/components/projetos/ProjectPortfolio";
import { SiteShell, ContactInvite } from "@/components/institutional/SiteShell";
import { pageMetadata } from "@/components/institutional/metadata";

export const metadata = pageMetadata("Projetos e possibilidades", "Explore propostas de demonstrações independentes de automação, integração, dados e IA aplicada. Conheça os escopos e converse sobre seu processo.", "/projetos");

export default function ProjetosPage() {
  return <SiteShell><ProjectsContent/><ContactInvite/></SiteShell>;
}
