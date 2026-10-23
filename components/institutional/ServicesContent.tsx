import Link from "next/link";
import { offerings } from "@/content/institutional";
import { Action, Arrow, Label, Section, ServiceIcon } from "./Elements";
import { MethodOverview, Questions } from "./Sections";
import s from "./Institutional.module.css";

const legacyAnchors: Record<string, string[]> = {
  automatiza: ["automacoes-simples"], integra: [], inteligencia: [], solucoes: ["produtos-internos"],
};

export function ServicesContent() {
  return <>
    <Section className={s.pageHero}><div className={s.wrap}><Label>Serviços MarIA</Label><h1>Seu processo é o ponto de partida.<br/><span className={s.accent}>A solução vem depois.</span></h1><p>Automações, integrações, inteligência artificial e soluções sob medida. Comece por uma rotina delimitada ou estruture um projeto mais amplo, com método e clareza de escopo.</p><div className={s.serviceJump}>{offerings.map(item => <Link href={`#${item.id}`} key={item.id}>{item.name}<Arrow diagonal/></Link>)}</div></div></Section>
    <Section id="frentes" className={s.compact}><div className={s.wrap}>{offerings.map(item => <article id={item.id} key={item.id} className={s.offering}>
      {legacyAnchors[item.id].map(id => <span key={id} id={id} className={s.anchor}/>)}
      <div className={s.offeringTitle}><span>{item.number} / FRENTE DE ATUAÇÃO</span><h2>{item.name}</h2><p>{item.description}</p><ServiceIcon type={item.icon}/></div>
      <div className={s.offeringDetails}><h3>{item.headline}</h3><p>{item.audience}</p><div className={s.detailsColumns}><div><h4>Quando faz sentido</h4><ul className={s.bulletList}>{item.signals.map(text => <li key={text}>{text}</li>)}</ul></div><div><h4>Possibilidades de entrega</h4><ul className={s.bulletList}>{item.deliveries.map(text => <li key={text}>{text}</li>)}</ul></div></div><div className={s.example}><small>Uma aplicação possível</small><p>{item.example}</p></div><div className={s.actions}><Action href={`/contato?servico=${item.id}`}>Conversar sobre {item.shortName.toLocaleLowerCase("pt-BR")}</Action></div></div>
    </article>)}</div></Section>
    <Section tone="lavender"><div className={s.wrap}><Label>Por onde começar</Label><h2 className={s.sectionTitle}>Primeiro, entender.<br/>Depois, propor.</h2><p className={s.sectionIntro}>A conversa inicial ajuda a compreender a necessidade. Quando o contexto pede aprofundamento, um diagnóstico organiza oportunidades, riscos e prioridades para uma proposta com critérios claros.</p><div className={s.supportGrid}><div><h3>Uma rotina bem delimitada.</h3><p>Um fluxo específico pode ser o primeiro passo. Definimos o que entra, o que fica fora e como a entrega será validada.</p></div><div><h3>Uma necessidade mais complexa.</h3><p>Processos com várias áreas, sistemas ou regras pedem análise e planejamento proporcionais, com construção por etapas.</p></div></div></div></Section>
    <MethodOverview/>
    <Section id="acompanhamento"><div className={s.wrap}><Label>Para apoiar a continuidade</Label><h2 className={s.sectionTitle}>A entrega também precisa<br/>de conhecimento e evolução.</h2><div className={s.supportGrid}><div id="capacitacao-empresas"><h3>Capacitação e mentoria.</h3><p>Orientação para equipes aplicarem IA e automação com critério. O formato acompanha a necessidade do negócio e o nível de aprofundamento do time.</p><span id="times-tecnicos"/><Link href="/contato?servico=capacitacao" className={s.textLink}>Conversar sobre capacitação<Arrow/></Link></div><div><h3>Sustentação e acompanhamento.</h3><p>Monitoramento, ajustes e melhorias podem compor um acordo de continuidade, com limites, responsabilidades e condições de atendimento definidos.</p><Link href="/contato?servico=acompanhamento" className={s.textLink}>Conversar sobre acompanhamento<Arrow/></Link></div></div></div></Section>
    <Questions/>
  </>;
}
