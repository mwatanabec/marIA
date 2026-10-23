import { Action, Label, Mari, Section } from "@/components/institutional/Elements";
import { Principles } from "@/components/institutional/Sections";
import { SiteShell, ContactInvite } from "@/components/institutional/SiteShell";
import { pageMetadata } from "@/components/institutional/metadata";
import s from "@/components/institutional/Institutional.module.css";

export const metadata = pageMetadata("Sobre a MarIA", "Conheça Maria Eduarda, fundadora da MarIA Consultoria. Uma atuação que conecta negócio, processos e tecnologia para construir soluções úteis.", "/sobre");

export default function SobrePage() {
  return <SiteShell>
    <Section className={s.pageHero}><div className={`${s.wrap} ${s.pageHeroRow}`}><div><Label>Sobre a MarIA</Label><h1>Tecnologia faz sentido<br/>quando melhora<br/><span className={s.accent}>o trabalho das pessoas.</span></h1><p>A MarIA nasce da conexão entre entendimento de negócio e capacidade de transformar processos em soluções digitais.</p></div><Mari pose="leitura" priority className={s.pageHeroMari}/></div></Section>
    <Section tone="white"><div className={`${s.wrap} ${s.split}`}>
      <div><Label>Quem conduz a consultoria</Label><div className={s.aboutName}>Maria Eduarda.</div><p className={s.sectionIntro}>Fundadora da MarIA Consultoria.<br/>Processos, automação e IA aplicada.</p></div>
      <div className={s.prose}><p>Minha atuação conecta negócio e tecnologia: entendo a operação, organizo regras, documento processos, desenho soluções e acompanho a implementação até que a mudança funcione na prática.</p><p>Minha experiência foi construída em contextos de logística, operações e serviços compartilhados, com sistemas corporativos, integrações e dados. Essa vivência ajuda a compreender rotinas complexas sem perder de vista as pessoas que as executam.</p><p>Na MarIA, levo essa abordagem para empresas de diferentes áreas que precisam organizar informações, automatizar tarefas e dar mais clareza aos seus processos.</p></div>
    </div></Section>
    <Section tone="lavender"><div className={s.wrap}><Label>A forma de trabalhar</Label><blockquote className={s.statement}>“A solução não pode depender da memória de uma pessoa. Documentação transforma conhecimento informal em patrimônio da empresa.”</blockquote><p className={s.sectionIntro}>Esse cuidado acompanha as decisões, a construção e a implantação. O objetivo é que o conhecimento continue disponível para quem usa e para quem evolui a solução.</p></div></Section>
    <Principles/>
    <Section tone="white"><div className={`${s.wrap} ${s.split}`}><div><Label>Negócio e tecnologia, em conexão</Label><h2 className={s.sectionTitle}>Um método para dar<br/>forma à mudança.</h2></div><div><p className={s.sectionIntro}>O Método MARIA organiza o trabalho em cinco etapas: Mapear, Analisar, Registrar, Implementar e Acompanhar. Cada etapa torna as decisões e as entregas mais claras.</p><div className={s.actions}><Action href="/metodo" secondary>Conhecer o método</Action></div></div></div></Section>
    <ContactInvite/>
  </SiteShell>;
}
