import { getScheduleHref } from "@/content/contact";
import { ContactForm } from "@/components/institutional/ContactForm";
import { Arrow, Label, Mari, Section } from "@/components/institutional/Elements";
import { SiteShell } from "@/components/institutional/SiteShell";
import { pageMetadata } from "@/components/institutional/metadata";
import s from "@/components/institutional/Institutional.module.css";

export const metadata = pageMetadata("Vamos conversar", "Conte qual processo precisa melhorar e quais ferramentas estão envolvidas. Converse com a MarIA sobre automação, integrações, IA e soluções sob medida.", "/contato");

export default function ContatoPage() {
  return <SiteShell>
    <Section className={s.pageHero}><div className={s.wrap}><Label>Vamos conversar</Label><h1>Conte o que toma tempo.<br/><span className={s.accent}>Vamos pensar no próximo passo.</span></h1><p>Você não precisa chegar com a solução definida. Um pouco de contexto já ajuda a começar uma conversa sobre a sua operação.</p></div></Section>
    <Section id="contato" className={s.compact}><div className={`${s.wrap} ${s.contactGrid}`}>
      <aside className={s.contactAside}><h2>Uma conversa começa<br/>pelo seu processo.</h2><p>Descreva a dificuldade, as ferramentas envolvidas e o momento da empresa. O contexto ajuda a avaliar o caminho entre diagnóstico, automação, integração ou solução sob medida.</p><p>Prefere começar diretamente?</p><a className={`${s.button} ${s.buttonSecondary}`} href={getScheduleHref()} target="_blank" rel="noopener noreferrer">Abrir WhatsApp<Arrow diagonal/></a><Mari pose="alegre" className={s.contactMari}/></aside>
      <ContactForm/>
    </div></Section>
  </SiteShell>;
}
