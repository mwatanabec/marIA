import { ServicesContent } from "@/components/institutional/ServicesContent";
import { SiteShell, ContactInvite } from "@/components/institutional/SiteShell";
import { pageMetadata } from "@/components/institutional/metadata";

export const metadata = pageMetadata("Serviços", "Automações, integrações, inteligência artificial e soluções sob medida. Quatro frentes para transformar processos com método e clareza de escopo.", "/servicos");

export default function ServicosPage() {
  return (
    <SiteShell>
      <ServicesContent />
      <ContactInvite />
    </SiteShell>
  );
}
