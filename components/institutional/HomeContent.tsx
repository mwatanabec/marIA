import Link from "next/link";
import { Action, Arrow, Constellation, Label, Mari, Section } from "./Elements";
import { FounderOverview, MethodOverview, Principles, ServicesOverview } from "./Sections";
import s from "./Institutional.module.css";

export function HomeContent() {
  return <>
    <Section className={s.hero}>
      <div className={s.wrap}>
        <div className={s.heroGrid}>
          <div className={s.heroCopy}><Label>Automação de processos e soluções inteligentes</Label><h1><span>Menos trabalho</span><span>manual.</span><span className={s.accent}>Mais resultado.</span></h1><p>A MarIA conecta processos, sistemas e inteligência artificial para transformar rotinas manuais em soluções que funcionam no dia a dia da sua empresa.</p><div className={s.actions}><Action href="/contato">Conversar sobre meu processo</Action><Action href="/servicos" secondary>Conhecer os serviços</Action></div><div className={s.heroNote}>Entendimento de negócio. Método. Tecnologia aplicada.</div></div>
          <div className={s.heroVisual}><Constellation className={s.heroConstellation}/><Mari priority className={s.heroMari}/><div className={s.visualCaption}><span className={s.captionIcon} aria-hidden="true">↗</span><div><strong>Sua operação, conectada.</strong><small>Mais clareza para o que vem a seguir.</small></div></div></div>
        </div>
        <div className={s.heroBottom}><span>Processos · Integrações · IA aplicada · Soluções sob medida</span><Link href="#possibilidades">Explore as possibilidades<Arrow/></Link></div>
      </div>
    </Section>
    <Section id="possibilidades" tone="white">
      <div className={`${s.wrap} ${s.split}`}>
        <div><Label>A rotina dá os sinais</Label><h2 className={s.sectionTitle}>Sua empresa cresceu.<br/><span className={s.accent}>As planilhas também?</span></h2><p className={s.sectionIntro}>Quando o trabalho depende de copiar, conferir, cobrar e procurar informação, existe uma oportunidade de organizar o fluxo.</p></div>
        <div className={s.painList}>
          <Link href="/servicos#automatiza" className={s.painRow}><div><h3>O mesmo relatório. Toda semana.</h3><p>Consolidação manual de arquivos, números e informações.</p></div><span><Arrow diagonal/></span></Link>
          <Link href="/servicos#integra" className={s.painRow}><div><h3>Sistemas que não conversam.</h3><p>Dados digitados mais de uma vez e informações desencontradas.</p></div><span><Arrow diagonal/></span></Link>
          <Link href="/servicos#automatiza" className={s.painRow}><div><h3>Aprovações perdidas nas mensagens.</h3><p>Etapas sem acompanhamento e cobranças que viram rotina.</p></div><span><Arrow diagonal/></span></Link>
          <Link href="/servicos#inteligencia" className={s.painRow}><div><h3>Muita informação. Difícil encontrar a resposta.</h3><p>Documentos dispersos e conhecimento concentrado em poucas pessoas.</p></div><span><Arrow diagonal/></span></Link>
        </div>
      </div>
    </Section>
    <Section tone="plum">
      <div className={s.wrap}>
        <div className={s.sectionHead}><div><Label>Aplicações possíveis</Label><h2>O que pode mudar<br/>na prática.</h2></div><p>Possibilidades que começam com uma dor conhecida e ganham forma a partir das regras da sua operação.</p></div>
        <div className={s.workflowGrid}>
          <article className={s.workflow}><span>ROTINAS E RELATÓRIOS</span><h3>Da planilha ao fluxo.</h3><p>Reunir arquivos, aplicar regras de conferência e preparar informações para a revisão da equipe.</p><div className={s.flowLine}><span>Arquivos</span><Arrow/><span>Conferência</span><Arrow/><span>Relatório</span></div></article>
          <article className={s.workflow}><span>PROCESSOS E SISTEMAS</span><h3>Da solicitação ao registro.</h3><p>Conectar formulários e sistemas, validar dados e acompanhar o andamento de cada solicitação.</p><div className={s.flowLine}><span>Solicitação</span><Arrow/><span>Validação</span><Arrow/><span>Sistema</span></div></article>
          <article className={s.workflow}><span>CONHECIMENTO E IA</span><h3>Da busca à informação.</h3><p>Apoiar consultas a documentos autorizados, com fontes definidas e pontos de supervisão humana.</p><div className={s.flowLine}><span>Pergunta</span><Arrow/><span>Base de apoio</span><Arrow/><span>Revisão</span></div></article>
        </div>
        <small className={s.workflowNote}>Exemplos de aplicação dos serviços. A viabilidade e o escopo dependem do diagnóstico de cada processo.</small>
      </div>
    </Section>
    <ServicesOverview/>
    <MethodOverview/>
    <Principles/>
    <FounderOverview/>
  </>;
}
