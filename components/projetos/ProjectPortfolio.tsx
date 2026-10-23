import { projectProposals, projectContactHref, proposalNotice, proposalStatus, type ProjectProposal } from "@/content/projects";
import { Action, Arrow, Label, Mari, Section, ServiceIcon, SiteLink as Link } from "@/components/institutional/Elements";
import brand from "@/components/institutional/Institutional.module.css";
import s from "./ProjectPortfolio.module.css";

function ProposalFlow({ project }: { project: ProjectProposal }) {
  return <figure className={s.flow}>
    <figcaption>Fluxo proposto · ilustração</figcaption>
    <ol>{project.steps.map((step, index) => <li key={step}><span className={s.stepNumber}>{String(index + 1).padStart(2, "0")}</span><span>{step}</span>{index < project.steps.length - 1 && <span className={s.connector} aria-hidden="true"><Arrow/></span>}</li>)}</ol>
  </figure>;
}

function ProposalCard({ project }: { project: ProjectProposal }) {
  return <article className={s.card} id={project.slug}>
    <div className={s.cardTop}><span className={s.icon}><ServiceIcon type={project.icon}/></span><span className={s.number}>{project.number}</span></div>
    <div className={s.cardMeta}><span>{project.category}</span><span className={s.status}>{proposalStatus}</span></div>
    <h3>{project.title}</h3><p className={s.pain}>{project.pain}</p><p className={s.description}>{project.description}</p>
    <ProposalFlow project={project}/>
    <div className={s.cardActions}><Link href={`/projetos/${project.slug}`} className={brand.textLink}>Conhecer proposta <Arrow/></Link><Link href={projectContactHref(project)} className={s.contactLink}>{project.cta}<Arrow diagonal/></Link></div>
  </article>;
}

export function ProjectsContent() {
  return <>
    <Section className={s.hero}>
      <div className={`${brand.wrap} ${s.heroGrid}`}>
        <div><Label>Projetos · possibilidades para sua operação</Label><h1>Menos tarefas manuais.<br/><span className={brand.accent}>Novos caminhos.</span></h1><p className={s.lead}>Da conferência de arquivos à consulta de indicadores: conheça os processos que queremos tornar mais simples.</p><div className={brand.actions}><Action href="#propostas">Explorar propostas</Action><Action href="/contato" secondary>Conversar sobre meu processo</Action></div></div>
        <div className={s.heroVisual}><Mari pose="apresentando" priority className={s.heroMari}/><div className={s.visualNote}><ServiceIcon type="automation"/><span>O processo vem primeiro.<small>A solução começa por entender sua rotina.</small></span></div></div>
      </div>
    </Section>
    <Section id="propostas" className={s.catalog}>
      <div className={brand.wrap}>
        <div className={s.sectionHead}><div><Label>O que estamos planejando</Label><h2>Cinco problemas.<br/>Possibilidades de solução.</h2></div><p>Reconheceu uma situação da sua empresa? Cada proposta explica a dor, o fluxo previsto e o que será necessário validar.</p></div>
        <aside className={s.notice} aria-label="Status das propostas"><strong>Propostas de demonstração</strong><p>{proposalNotice}</p></aside>
        <div className={s.grid}>{projectProposals.map(project => <ProposalCard key={project.slug} project={project}/>)}</div>
      </div>
    </Section>
    <Section tone="lavender"><div className={`${brand.wrap} ${s.evidence}`}><div><Label>Da proposta à evidência</Label><h2>Mostrar o funcionamento.<br/>Explicar os limites.</h2></div><div><p>Quando estiverem prontas, as demonstrações terão capturas próprias, um fluxo em execução e os critérios usados para conferir o comportamento.</p><p>Benefícios potenciais, medições em simulação e resultados de projetos contratados serão apresentados com suas diferenças e contexto.</p><Action href="/metodo" secondary>Conhecer o Método MARIA</Action></div></div></Section>
  </>;
}

export function ProjectsPreview() {
  return <Section id="propostas-em-destaque"><div className={brand.wrap}>
    <div className={s.sectionHead}><div><Label>Do problema à possibilidade</Label><h2>Por onde sua rotina<br/>pode começar a mudar?</h2></div><p>Conferências, pendências e informações entre ferramentas: explore propostas para problemas comuns da operação.</p></div>
    <p className={s.previewNotice}>Demonstrações planejadas, ainda sem aplicações disponíveis. Os exemplos não representam resultados de clientes.</p>
    <div className={s.grid}>{projectProposals.slice(0, 2).map(project => <ProposalCard key={project.slug} project={project}/>)}</div>
    <div className={brand.actions}><Action href="/projetos">Conhecer todas as propostas</Action></div>
  </div></Section>;
}

export function ProjectDetail({ project }: { project: ProjectProposal }) {
  return <>
    <Section className={s.detailHero}><div className={brand.wrap}>
      <nav aria-label="Caminho da página" className={s.breadcrumb}><Link href="/projetos">Projetos</Link><span aria-hidden="true">/</span><span>{project.title}</span></nav>
      <div className={s.detailHeading}><div><Label>{project.category}</Label><h1>{project.title}</h1><p className={s.lead}>{project.description}</p></div><span className={s.status}>{proposalStatus}</span></div>
      <p className={s.detailNotice}>Esta é uma proposta. Ainda não há demonstração funcional disponível, implantação ou resultado de cliente apresentado nesta página.</p>
      <ProposalFlow project={project}/>
    </div></Section>
    <Section tone="white"><div className={`${brand.wrap} ${s.detailGrid}`}>
      <div><Label>O problema</Label><h2>{project.pain}</h2><p>{project.problem}</p><h3>Para quem faz sentido</h3><p>{project.audience}</p></div>
      <div className={s.scope}><Label>Escopo proposto</Label><h2>O que pretendemos demonstrar</h2><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></div>
    </div></Section>
    <Section><div className={`${brand.wrap} ${s.detailGrid}`}>
      <div><Label>Benefícios potenciais</Label><h2>O que buscamos melhorar</h2><ul className={s.benefits}>{project.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}</ul><p>São objetivos da proposta. Ganhos e resultados precisam ser medidos em cada contexto.</p></div>
      <div><Label>Validação e limites</Label><h2>Como conferir a solução</h2><p>{project.validation}</p><h3>Limites do cenário</h3><p>{project.limit}</p><p>Antes de apresentar uma demonstração funcional, será necessário criar uma implementação independente, dados fictícios, evidências visuais próprias e registrar a validação.</p></div>
    </div></Section>
    <Section tone="lavender"><div className={`${brand.wrap} ${s.projectCta}`}><Label>Vamos olhar para o seu processo</Label><h2>Sua rotina tem<br/>um desafio parecido?</h2><p>A conversa começa pelas suas ferramentas, regras e dificuldades. O escopo será definido para a sua necessidade.</p><div className={brand.actions}><Action href={projectContactHref(project)}>{project.cta}</Action><Action href="/projetos" secondary>Explorar outras propostas</Action></div></div></Section>
  </>;
}
