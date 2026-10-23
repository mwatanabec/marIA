import { mariaMethod } from "@/content/institutional";
import { Action, Label, Section } from "@/components/institutional/Elements";
import { SiteShell, ContactInvite } from "@/components/institutional/SiteShell";
import { pageMetadata } from "@/components/institutional/metadata";
import s from "@/components/institutional/Institutional.module.css";

export const metadata = pageMetadata("Método MARIA", "Mapear, Analisar, Registrar, Implementar e Acompanhar. Conheça o método que orienta a transformação de processos em soluções digitais.", "/metodo");

export default function MetodoPage() {
  return <SiteShell>
    <Section className={s.pageHero}><div className={s.wrap}><Label>Método MARIA</Label><h1>Da dor operacional<br/><span className={s.accent}>à solução em uso.</span></h1><p>Cinco etapas para entender o processo, orientar decisões e construir com clareza. O nível de aprofundamento acompanha a complexidade de cada necessidade.</p><div className={s.actions}><Action href="#etapas" secondary>Explorar as etapas</Action></div></div></Section>
    <Section id="etapas" tone="white"><div className={`${s.wrap} ${s.methodDetailed}`}>{mariaMethod.map((step, index) => <article id={`etapa-${index + 1}`} key={`${step.letter}-${index}`} className={s.methodDetail}>
      <span aria-hidden="true">{step.letter}</span><div><h2>{step.name}</h2><p>{step.detail}</p></div><div className={s.methodDelivery}><h3>Participação da empresa</h3><p>{step.participation}</p><h3>Entrega possível</h3><p>{step.delivery}</p></div>
    </article>)}</div></Section>
    <Section tone="lavender"><div className={`${s.wrap} ${s.split}`}><div><Label>Acordos claros desde o início</Label><h2 className={s.sectionTitle}>A tecnologia acompanha<br/>o contexto.</h2></div><div className={s.prose}><p>A proposta define escopo, entregáveis, critérios de aceite, responsabilidades e condições de implantação. Custos de ferramentas e serviços de terceiros são considerados conforme a solução.</p><p>Uma automação delimitada e um sistema com várias integrações pedem níveis diferentes de análise. O método orienta os dois caminhos, com escolhas proporcionais ao processo.</p><p>IA, quando utilizada, tem finalidade e limites definidos, com validação técnica e humana ao longo da entrega.</p></div></div></Section>
    <ContactInvite/>
  </SiteShell>;
}
