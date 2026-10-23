import Link from "next/link";
import { mariaMethod, offerings, commonQuestions } from "@/content/institutional";
import { Action, Arrow, Label, Section, ServiceIcon } from "./Elements";
import s from "./Institutional.module.css";

export function ServicesOverview() {
  return <Section id="servicos">
    <div className={s.wrap}>
      <div className={s.sectionHead}><div><Label>Uma necessidade. O caminho adequado.</Label><h2>Conectar o que existe.<br/>Construir o que faz falta.</h2></div><p>Da automação de uma rotina à construção de uma solução própria, a tecnologia acompanha a necessidade do seu negócio.</p></div>
      <div className={s.servicesGrid}>{offerings.map(service => <Link href={`/servicos#${service.id}`} key={service.id} className={s.serviceCard}>
        <div className={s.cardTop}><ServiceIcon type={service.icon}/><span>{service.number} / SERVIÇOS</span></div>
        <h3>{service.name}</h3><p>{service.description}</p><span className={s.cardLink}>Explorar possibilidades<Arrow diagonal/></span>
      </Link>)}</div>
    </div>
  </Section>;
}

export function MethodOverview() {
  return <Section id="metodo" tone="white">
    <div className={s.wrap}>
      <div className={s.sectionHead}><div><Label>Método MARIA</Label><h2>Clareza em cada etapa.<br/>Do processo ao uso real.</h2></div><p>Entender, decidir, documentar, construir e acompanhar. Um método que dá direção à tecnologia.</p></div>
      <ol className={s.methodSteps}>{mariaMethod.map((step, index) => <li className={s.methodStep} key={`${step.letter}-${index}`}><span className={s.methodLetter} aria-hidden="true">{step.letter}</span><h3>{step.name}</h3><p>{step.summary}</p></li>)}</ol>
      <div className={s.methodFooter}><Link href="/metodo" className={s.textLink}>Conheça o Método MARIA<Arrow/></Link></div>
    </div>
  </Section>;
}

export function Principles() {
  return <Section>
    <div className={s.wrap}>
      <Label>O que acompanha a entrega</Label><h2 className={s.sectionTitle}>A solução precisa fazer sentido.<br/>E continuar fazendo.</h2>
      <div className={s.principles}>
        <div><h3>Processo antes da ferramenta.</h3><p>O ponto de partida é o trabalho que precisa melhorar. As escolhas técnicas são proporcionais ao contexto.</p></div>
        <div><h3>Conhecimento que fica.</h3><p>Regras, decisões e orientações documentadas para apoiar o uso e a evolução da solução.</p></div>
        <div><h3>Validação humana, sempre.</h3><p>Testes e revisão acompanham a construção. A IA entra com objetivos, limites e supervisão definidos.</p></div>
      </div>
    </div>
  </Section>;
}

export function FounderOverview() {
  return <Section id="sobre" tone="lavender">
    <div className={`${s.wrap} ${s.split}`}>
      <div><Label>Quem conduz a MarIA</Label><h2 className={s.sectionTitle}>Tecnologia com<br/>direção humana.</h2><p className={s.sectionIntro}>À frente da MarIA está Maria Eduarda. Sua atuação conecta entendimento de negócio, organização de processos e implementação técnica.</p><p className={s.sectionIntro}>Uma abordagem próxima de quem vive a rotina, com método para transformar o que está disperso em uma solução estruturada.</p><div className={s.actions}><Action href="/sobre" secondary>Conheça a fundadora</Action></div></div>
      <div className={s.founderPanel}><span className={s.founderInitials} aria-hidden="true">ME.</span><blockquote>“Documentação não é um subproduto. É parte da entrega.”</blockquote><strong>Maria Eduarda</strong><small>Fundadora da MarIA Consultoria</small></div>
    </div>
  </Section>;
}

export function Questions() {
  return <Section tone="white"><div className={s.wrap}><Label>Antes de começar</Label><h2 className={s.sectionTitle}>Algumas respostas<br/>para o primeiro passo.</h2><div className={s.questions}>{commonQuestions.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></Section>;
}
