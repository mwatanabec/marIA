import { offerings } from "./institutional";
import { projectProposals, proposalNotice, proposalStatus } from "./projects";

export const nav = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Projetos", href: "/projetos" },
];

export const hero = {
  eyebrow: "IA aplicada, automação e soluções digitais",
  headline: "Transforme processos manuais em soluções digitais que funcionam de verdade.",
  subtext:
    "Unimos processos, tecnologia e IA para organizar operações, automatizar rotinas e criar soluções digitais — com clareza, método e responsabilidade.",
  ctaPrimary: { label: "Conheça os serviços", href: "#servicos" },
  ctaSecondary: { label: "Ver método MARIA", href: "/servicos#metodo" },
  proofCards: [
    {
      title: "Processo",
      text: "Mapeamento da operação real antes da tecnologia.",
    },
    {
      title: "IA com critério",
      text: "Automação e IA onde fazem sentido para o negócio.",
    },
    {
      title: "Entrega rastreável",
      text: "Documentação, validação e evolução desde o início.",
    },
  ],
  dashboard: {
    chip: "Mapa de solução",
    metricLabel: "Clareza operacional",
    metricValue: "Por etapas",
    bars: [34, 62, 48, 76, 92],
    secondaryLabel: "Prioridade",
    secondaryValue: "Seu processo",
    secondaryNote: "Escopo definido por impacto, esforço e risco.",
    networkCaption: "Conectar · Organizar · Implementar",
    networkHeadline: "Do caos operacional ao fluxo inteligente.",
  },
  floatingCard: {
    title: "Inteligência que organiza.",
    text: "Soluções que transformam processos em resultado real.",
  },
};

export const pain = {
  eyebrow: "Quando chamar a MarIA",
  title: "Quando o processo depende demais de planilhas, pessoas e improvisos.",
  intro:
    "Antes de automatizar, entendemos o que acontece na operação, onde estão as regras implícitas e qual caminho entrega mais valor com menor risco.",
  cards: [
    {
      icon: "⌘",
      title: "Processos descentralizados",
      text: "Controles espalhados por e-mails, planilhas e mensagens, sem padrão entre áreas.",
    },
    {
      icon: "≋",
      title: "Regras pouco claras",
      text: "Conhecimento informal e decisões que dependem de poucas pessoas.",
    },
    {
      icon: "◇",
      title: "Dados desconectados",
      text: "Sistemas e arquivos que não conversam, sem indicadores nem visão gerencial.",
    },
    {
      icon: "↻",
      title: "Retrabalho operacional",
      text: "Tarefas repetitivas que consomem tempo e poderiam virar automação.",
    },
    {
      icon: "◉",
      title: "IA sem direção",
      text: "Vontade de usar IA, mas sem clareza de casos de uso, riscos e retorno.",
    },
    {
      icon: "▣",
      title: "Projetos sem continuidade",
      text: "Soluções que nascem sem documentação, validação e plano de evolução.",
    },
  ],
};

export const method = {
  eyebrow: "Método MARIA",
  title: "Um caminho claro para transformar dor operacional em solução.",
  intro:
    "O método organiza a jornada do entendimento até a implantação, com entregas em etapas verificáveis e documentação acompanhando a evolução.",
  steps: [
    {
      letter: "M",
      title: "Mapear",
      text: "Entender o processo real, usuários, sistemas, planilhas, gargalos e dependências.",
    },
    {
      letter: "A",
      title: "Analisar",
      text: "Priorizar oportunidades por impacto, esforço e risco. IA entra quando faz sentido.",
    },
    {
      letter: "R",
      title: "Registrar",
      text: "Formalizar regras, fluxos, decisões, requisitos, riscos e plano de implantação.",
    },
    {
      letter: "I",
      title: "Implementar",
      text: "Construir soluções, automações, dashboards e portais em lotes pequenos e validáveis.",
    },
    {
      letter: "A",
      title: "Acompanhar",
      text: "Validar no uso real, medir adoção, corrigir gaps e evoluir com a operação.",
    },
  ],
};

export const differentials = {
  quote: "Negócio antes da ferramenta. Método antes da automação. IA com responsabilidade.",
  quoteNote:
    "A MarIA não começa perguntando “qual IA usar?”. Começa entendendo o problema, os dados, as regras e o impacto esperado.",
  eyebrow: "Diferenciais",
  title: "Clareza para decidir, estrutura para executar e documentação para continuar.",
  list: [
    "Transforma conhecimento informal em patrimônio da empresa.",
    "Conecta operação, dados, tecnologia e decisão.",
    "Documenta regras, decisões e riscos ao longo da entrega.",
    "Constrói soluções proporcionais, rastreáveis e prontas para crescer.",
    "Usa IA como aceleradora, sem abrir mão da validação humana.",
  ],
};

export const about = {
  eyebrow: "Quem conduz a MarIA",
  title: "Uma pessoa que conecta negócio e tecnologia — não uma caixa-preta de IA.",
  paragraphs: [
    "A MarIA é conduzida por Maria Eduarda, que une visão de negócio e tecnologia: entende a operação de perto, estrutura regras que só existem na cabeça das pessoas e transforma dores operacionais em soluções digitais.",
    "Antes de qualquer automação, vem o entendimento real do problema, das pessoas e do risco de cada decisão — para a tecnologia servir ao negócio, e não o contrário.",
  ],
  highlights: [
    "Conecta negócio e tecnologia em uma mesma visão.",
    "Estrutura regras e formaliza conhecimento hoje informal.",
    "Documenta decisões, riscos e processos durante toda a entrega.",
    "Transforma dores operacionais em soluções digitais sob medida.",
  ],
  quote: "Documentação não é um subproduto. É parte da entrega.",
  role: "Maria Eduarda",
  roleNote: "Fundadora da MarIA Consultoria",
};

/**
 * Resumo das frentes na Home. Objetivo: posicionamento e conversão — não repete
 * o conteúdo completo de /servicos (ver `servicesPage`). São 4 cards principais;
 * a 5ª frente ("Acompanhamento e Evolução") aparece só como frase complementar
 * (`note`). Os glyphs espelham os das frentes em /servicos para dar continuidade
 * visual. O objeto `services` acima segue existindo para o Mapa da plataforma.
 */
export const homeServices = {
  eyebrow: "Serviços",
  title: "Como a MarIA pode ajudar",
  subtitle:
    "IA prática para equipes, soluções digitais para processos reais e produtos internos sob medida.",
  support:
    "Atua em diferentes níveis: capacita pessoas, apoia times técnicos, cria automações simples e constrói produtos internos para dores mais complexas.",
  cards: [
    {
      icon: "✦",
      title: "Capacitação em IA",
      text: "Workshops e treinamentos para a equipe usar IA no dia a dia com clareza e produtividade.",
    },
    {
      icon: "⌘",
      title: "IA para Times Técnicos",
      text: "Mentorias para TI, dados e áreas analíticas aplicarem IA com método em projetos reais.",
    },
    {
      icon: "▣",
      title: "Produtos Internos Sob Medida",
      text: "Processos críticos e planilhas viram soluções internas rastreáveis, com visão gerencial.",
    },
    {
      icon: "↻",
      title: "Automações e Sistemas Simples",
      text: "Soluções leves para organizar pedidos, clientes, estoque e rotinas do dia a dia.",
    },
  ],
  note: "Depois da entrega, a MarIA acompanha a evolução com mentorias, priorização e apoio contínuo.",
  cta: { label: "Conhecer todos os serviços", href: "/servicos" },
};

/** Conteúdo de compatibilidade para os componentes antigos; a página usa o catálogo próprio. */
export const projects = {
  eyebrow: "Propostas de demonstração",
  title: "Possibilidades para reduzir o trabalho manual.",
  intro: proposalNotice,
  cards: projectProposals.map(project => ({
    tag: project.category, title: project.title, text: project.description, items: [...project.features],
  })),
};

export const projectsPage = {
  meta: { title: "Projetos e possibilidades | MarIA", description: proposalNotice },
  hero: {
    eyebrow: "Propostas de demonstração", title: "Novos caminhos para sua operação.",
    subtitle: "Explore possibilidades de automação, integração, dados e IA aplicada.",
    support: proposalNotice,
    ctaPrimary: { label: "Conversar sobre meu processo", message: "Olá! Gostaria de conversar sobre meu processo." },
    ctaSecondary: { label: "Ver propostas", href: "#projetos" },
  },
  cases: {
    eyebrow: "Propostas", title: "Problemas comuns, possibilidades de solução.", intro: proposalNotice,
    contextLabel: "Para quem", problemLabel: "Problema", solutionLabel: "Proposta",
    deliverablesLabel: "Recursos previstos", impactLabel: "Benefícios potenciais", draftLabel: proposalStatus,
    items: projectProposals.map(project => ({
      id: project.slug, glyph: "↗", draft: true, title: project.title, category: project.category,
      subtitle: project.description, tags: [project.category], reviewNote: proposalNotice,
      context: project.audience, problem: project.problem, solution: project.description,
      deliverables: [...project.features], impact: [...project.benefits],
    })),
  },
  finalCta: {
    title: "Qual processo merece um novo jeito de funcionar?",
    subtext: "Conte como essa necessidade aparece na sua rotina.",
    ctaPrimary: { label: "Conversar sobre meu processo", message: "Olá! Vim pela página de Projetos e gostaria de conversar sobre meu processo." },
    ctaSecondary: { label: "Conhecer os serviços", href: "/servicos" },
  },
};

export const finalCta = {
  title: "Vamos organizar o próximo processo que precisa virar solução?",
  subtext:
    "Comece com uma conversa para entender a dor, o contexto e as oportunidades mais relevantes para a sua empresa.",
  ctaPrimary: { label: "Agendar conversa" },
  ctaSecondary: { label: "Rever serviços", href: "#servicos" },
};

/**
 * Página dedicada /servicos — aprofunda as frentes de atuação sem sobrecarregar
 * a Home. A copy segue o tom maduro, humano e técnico da marca; os CTAs usam o
 * mesmo canal de contato do site (getScheduleHref), com mensagem pré-preenchida.
 */
export const servicesPage = {
  meta: {
    title: "Serviços | MarIA Consultoria",
    description:
      "Capacitação em IA, automações para rotinas reais e produtos digitais sob medida. Conheça as frentes de atuação da MarIA Consultoria e descubra qual faz sentido para sua empresa.",
  },
  hero: {
    eyebrow: "Frentes de atuação",
    title: "Serviços da MarIA Consultoria",
    subtitle:
      "IA prática para equipes, automações para rotinas reais e soluções digitais para empresas que querem sair do improviso.",
    support:
      "A MarIA Consultoria ajuda empresas a aplicar IA, organizar processos e criar soluções digitais sob medida, sempre com clareza, método, documentação e validação humana.",
    ctaPrimary: {
      label: "Quero conversar sobre minha necessidade",
      message:
        "Olá! Vim pela página de Serviços da MarIA Consultoria e gostaria de conversar sobre uma necessidade da minha empresa.",
    },
    ctaSecondary: { label: "Ver frentes de atuação", href: "#frentes" },
    // Nós do visual abstrato do hero (constelação decorativa). Espelham as
    // frentes principais e orbitam o núcleo "IA aplicada".
    brandCore: "IA aplicada",
    brandNodes: [
      { label: "Capacitação", glyph: "✦", href: "#capacitacao-empresas" },
      { label: "Automação", glyph: "↻", href: "#automacoes-simples" },
      { label: "Produto Interno", glyph: "▣", href: "#produtos-internos" },
      { label: "Evolução", glyph: "◈", href: "#acompanhamento" },
    ],
  },
  intro: {
    eyebrow: "Como a MarIA pode ajudar",
    title: "Três níveis de ajuda, do primeiro passo ao produto interno.",
    paragraphs: [
      "Nem toda empresa precisa começar com um grande projeto de tecnologia. Algumas precisam primeiro capacitar seus times. Outras precisam automatizar rotinas simples. Outras já têm uma dor operacional relevante que pode virar um produto interno.",
      "A MarIA atua nesses três níveis: ensinando pessoas a usar IA de forma prática, criando soluções digitais para processos reais e apoiando empresas na construção de produtos internos com método, documentação e evolução.",
    ],
    levels: [
      {
        step: "01",
        title: "Capacitar pessoas",
        text: "Times aprendem a usar IA de forma prática, segura e produtiva no trabalho real.",
      },
      {
        step: "02",
        title: "Criar soluções digitais",
        text: "Automações, dashboards e sistemas que organizam rotinas e processos reais.",
      },
      {
        step: "03",
        title: "Construir produtos internos",
        text: "Dores operacionais viram produtos com método, documentação e evolução por fases.",
      },
    ],
  },
  offerings: {
    eyebrow: "Frentes de atuação",
    title: "Cinco frentes para capacitar times, automatizar rotinas e criar soluções sob medida.",
    intro:
      "Cada frente pode ser contratada de forma independente ou combinada em uma jornada — da primeira capacitação até o produto interno em produção.",
    audienceLabel: "Para quem é",
    signalsLabel: "Quando faz sentido",
    cards: [
      {
        id: "capacitacao-empresas",
        glyph: "✦",
        number: "Frente 01",
        title: "Capacitação em IA para Empresas",
        pitch:
          "Sua equipe usando IA no dia a dia com clareza, segurança e resultado real.",
        audience:
          "Lideranças e equipes administrativas e operacionais começando com IA.",
        signals: [
          "Pessoas usando IA de forma rasa ou insegura.",
          "Dificuldade de transformar IA em produtividade real.",
          "Falta de repertório prático e de padrão no uso.",
        ],
        cta: {
          label: "Quero capacitar minha equipe",
          message:
            "Olá! Tenho interesse na Capacitação em IA para Empresas da MarIA Consultoria e gostaria de capacitar minha equipe.",
        },
      },
      {
        id: "times-tecnicos",
        glyph: "⌘",
        number: "Frente 02",
        title: "IA para Times Técnicos e Áreas Analíticas",
        pitch:
          "Times técnicos aplicando IA com método em automações, dados e soluções internas.",
        audience:
          "TI, controladoria, dados, automação e áreas analíticas.",
        signals: [
          "IA usada apenas para respostas simples.",
          "Falta de método para projetos reais com IA.",
          "Retrabalho por ausência de documentação e validação.",
        ],
        cta: {
          label: "Quero evoluir meu time técnico",
          message:
            "Olá! Tenho interesse na frente de IA para Times Técnicos da MarIA Consultoria e gostaria de evoluir meu time.",
        },
      },
      {
        id: "produtos-internos",
        glyph: "▣",
        number: "Frente 03",
        featured: true,
        featuredLabel: "Frente mais estratégica",
        title: "Produtos Internos Sob Medida",
        pitch:
          "Transformamos processos críticos em soluções digitais internas, com informação centralizada, rastreabilidade e visão gerencial.",
        audience:
          "Empresas médias e grandes, áreas operacionais, centros de serviços compartilhados, logística, financeiro e controladoria.",
        signals: [
          "Processos que hoje dependem de planilhas, arquivos soltos ou controles paralelos.",
          "Empresas que precisam padronizar a operação e acompanhar indicadores.",
          "Dores específicas que uma ferramenta pronta não resolve bem.",
        ],
        // Entregas em linguagem de valor (exibidas só nesta frente em destaque).
        deliveriesLabel: "O que fica funcionando",
        deliveries: [
          "Solução interna para centralizar informações e organizar o processo.",
          "Painéis e indicadores para acompanhamento gerencial.",
          "Acessos organizados conforme o papel de cada usuário.",
          "Fluxos de trabalho mais claros e rastreáveis.",
          "Histórico confiável das informações importantes.",
          "Documentação para uso, continuidade e evolução da solução.",
        ],
        cta: {
          label: "Quero transformar uma dor em produto",
          message:
            "Olá! Tenho uma dor operacional relevante e gostaria de conversar sobre a criação de um Produto Interno Sob Medida com a MarIA Consultoria.",
        },
      },
      {
        id: "automacoes-simples",
        glyph: "↻",
        number: "Frente 04",
        title: "Automações e Sistemas Simples",
        pitch:
          "Soluções leves para organizar a rotina sem começar por um projeto grande.",
        audience:
          "Pequenos negócios, comércios e áreas que dependem de controles manuais.",
        signals: [
          "Excesso de planilhas e controles manuais.",
          "Retrabalho em tarefas repetitivas.",
          "Pouca visão sobre pedidos, clientes ou estoque.",
        ],
        cta: {
          label: "Quero organizar minha rotina",
          message:
            "Olá! Meu negócio precisa sair das planilhas e gostaria de conversar sobre Automações e Sistemas Simples da MarIA Consultoria.",
        },
      },
      {
        id: "acompanhamento",
        glyph: "◈",
        number: "Frente 05",
        title: "Acompanhamento e Evolução",
        pitch:
          "Apoio contínuo para evoluir com organização o que já começou.",
        audience:
          "Quem já passou por capacitação, automação ou implantação.",
        signals: [
          "Ideias paradas após o primeiro projeto.",
          "Falta de priorização para evoluir.",
          "Necessidade de ajustes depois do uso real.",
        ],
        cta: {
          label: "Quero acompanhamento mensal",
          message:
            "Olá! Já iniciei minha jornada e gostaria de conversar sobre o Acompanhamento e Evolução da MarIA Consultoria.",
        },
      },
    ],
  },
  match: {
    eyebrow: "Por onde começar",
    title: "Qual serviço faz sentido para você?",
    intro:
      "Um caminho rápido para se localizar. Encontre a situação mais parecida com a sua e veja qual frente costuma fazer mais sentido.",
    options: [
      {
        glyph: "✦",
        condition: "Sua equipe ainda está começando com IA",
        service: "Capacitação em IA para Empresas",
        href: "#capacitacao-empresas",
      },
      {
        glyph: "⌘",
        condition: "Seu time técnico quer usar IA melhor",
        service: "IA para Times Técnicos",
        href: "#times-tecnicos",
      },
      {
        glyph: "▣",
        condition: "Sua empresa tem uma dor operacional complexa",
        service: "Produtos Internos Sob Medida",
        href: "#produtos-internos",
      },
      {
        glyph: "↻",
        condition: "Seu negócio precisa sair das planilhas",
        service: "Automações e Sistemas Simples",
        href: "#automacoes-simples",
      },
      {
        glyph: "◈",
        condition: "Você já começou e precisa evoluir",
        service: "Acompanhamento e Evolução",
        href: "#acompanhamento",
      },
    ],
  },
  finalCta: {
    title: "Vamos entender qual caminho faz mais sentido para sua empresa?",
    subtext:
      "Você não precisa saber exatamente qual solução contratar. A primeira conversa serve para entender o momento da empresa, a dor principal e qual formato pode gerar mais valor agora.",
    ctaPrimary: {
      label: "Agendar conversa",
      message:
        "Olá! Vim pela página de Serviços da MarIA Consultoria e gostaria de agendar uma conversa.",
    },
    ctaSecondary: { label: "Ver frentes de atuação", href: "#frentes" },
  },
};

export const footer = {
  brand: "MarIA Consultoria",
  tagline: "Inteligência que organiza. Soluções que transformam.",
  description: "Consultoria em IA aplicada, automação e soluções digitais.",
};

export const siteMeta = {
  title: "MarIA Consultoria | IA aplicada, automação e soluções digitais",
  description:
    "A MarIA Consultoria ajuda empresas a transformar processos manuais em soluções digitais com estratégia, automação e IA aplicada com responsabilidade.",
};

/** Mapa de serviços e propostas, sem atribuição de resultados ou clientes. */
export type GraphNodeType = "core" | "method" | "service" | "case" | "differential";

export type GraphNode = {
  id: string;
  label: string;
  detailTitle?: string;
  type: GraphNodeType;
  primary: boolean;
  x: number;
  y: number;
  description: string;
  href?: string;
};

export const platformGraph = {
  eyebrow: "Conhecimento em conexão",
  title: "Método, serviços e possibilidades em um só mapa.",
  intro: "Explore como cada problema se conecta ao Método MARIA e às frentes de serviço. As propostas são demonstrações planejadas, ainda sem aplicações disponíveis ou resultados de clientes.",
  hint: "Dica: selecione um nó para explorar suas conexões. Você também pode arrastá-lo.",
  hintTouch: "Dica: toque em um nó para ver os detalhes da conexão.",
  defaultId: "maria",
  nodes: [
    { id: "maria", label: "MarIA", type: "core", primary: true, x: 500, y: 300,
      description: "Automação de processos e soluções inteligentes, com entendimento da operação e direção humana.", href: "/sobre" },
    { id: "diferenciais", label: "Diferenciais", type: "differential", primary: true, x: 500, y: 110, description: differentials.quote, href: "/sobre" },
    { id: "metodo", label: "Método MARIA", type: "method", primary: true, x: 250, y: 245, description: method.intro, href: "/metodo" },
    { id: "servicos", label: "Serviços", type: "service", primary: true, x: 750, y: 245, description: "Automações rápidas, integrações, IA aplicada e soluções sob medida, com escopo proporcional ao processo.", href: "/servicos" },
    ...method.steps.map((step, index) => ({
      id: step.title.toLowerCase(), label: step.title, type: "method", primary: false,
      x: [120, 95, 130, 215, 330][index], y: [150, 265, 375, 450, 440][index],
      description: step.text, href: "/metodo",
    })),
    ...offerings.map((offering, index) => ({
      id: offering.id, label: offering.shortName, detailTitle: offering.name, type: "service", primary: false,
      x: [880, 905, 870, 785][index], y: [150, 265, 375, 450][index],
      description: offering.description, href: `/servicos#${offering.id}`,
    })),
    ...projectProposals.map((project, index) => ({
      id: project.slug, label: ["Pendências", "Conferência", "Integração", "Relatórios", "Indicadores"][index],
      detailTitle: project.title, type: "case", primary: true,
      x: [160, 330, 500, 670, 840][index], y: [530, 560, 570, 560, 530][index],
      description: `${proposalStatus}. ${project.description}`, href: `/projetos/${project.slug}`,
    })),
  ] as GraphNode[],
  edges: [
    ["maria", "metodo"], ["maria", "servicos"], ["maria", "diferenciais"], ["metodo", "servicos"],
    ...method.steps.map(step => ["metodo", step.title.toLowerCase()]),
    ...offerings.map(offering => ["servicos", offering.id]),
    ...projectProposals.flatMap(project => [[project.slug, project.service], [project.slug, "metodo"]]),
  ] as [string, string][],
  typeLabels: { core: "Núcleo", method: "Método", service: "Serviço", case: "Proposta de demonstração", differential: "Diferencial" } as Record<GraphNodeType, string>,
};
