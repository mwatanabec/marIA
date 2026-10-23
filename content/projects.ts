/** Propostas independentes; não representam aplicações disponíveis ou resultados de clientes. */
export const projectProposals = [
  {
    slug: "pendencias-sob-controle", number: "01", title: "Pendências sob controle",
    category: "Automação de processos", service: "automatiza", icon: "automation",
    pain: "O que está atrasado ainda depende de alguém conferir?",
    description: "Uma proposta para reunir pendências, atualizar o acompanhamento e destacar o que precisa de ação.",
    audience: "Equipes administrativas, operações e empresas de serviços com solicitações acompanhadas em planilhas e mensagens.",
    problem: "Quando cada pessoa mantém um controle, descobrir o que está aberto e quem precisa agir vira mais uma tarefa manual.",
    steps: ["Reunir registros", "Identificar prioridades", "Acompanhar pendências"],
    features: ["Leitura de uma fonte de dados fictícia", "Identificação de prazos e responsáveis", "Atualização programada e resumo das pendências"],
    benefits: ["Menos consolidação manual", "Prioridades mais visíveis", "Acompanhamento consistente"],
    validation: "Conferir prazos, registros incompletos e atualizações repetidas com dados sintéticos e um resultado esperado definido.",
    limit: "O escopo inicial proposto é uma rotina e uma fonte de dados. Notificações e integrações adicionais dependerão de definição própria.",
    cta: "Quero organizar minhas pendências",
  },
  {
    slug: "conferencia-de-dados", number: "02", title: "Conferência de dados",
    category: "Automação e sistemas", service: "automatiza", icon: "solutions",
    pain: "Comparar arquivos linha por linha toma tempo demais?",
    description: "Uma proposta para comparar duas bases, encontrar diferenças e organizar o tratamento das divergências.",
    audience: "Gestores e equipes de operações, administrativo, distribuição e varejo que conferem informações entre arquivos.",
    problem: "Arquivos com formatos diferentes, registros duplicados e informações ausentes tornam a conferência repetitiva e difícil de acompanhar.",
    steps: ["Receber dois arquivos", "Comparar registros", "Revisar divergências"],
    features: ["Importação de dois arquivos inteiramente fictícios", "Identificação de ausências, duplicidades e diferenças", "Lista de exceções e exportação da conferência"],
    benefits: ["Investigação mais objetiva", "Regras de conferência claras", "Histórico organizado"],
    validation: "Comparar a saída com um gabarito próprio, incluindo registros iguais, divergentes, ausentes e duplicados.",
    limit: "O cenário proposto é uma comparação operacional genérica. Regras financeiras, fiscais ou de sistemas específicos exigem levantamento e validação próprios.",
    cta: "Quero automatizar minhas conferências",
  },
  {
    slug: "dados-conectados", number: "03", title: "Dados conectados",
    category: "Integrações", service: "integra", icon: "integration",
    pain: "A mesma informação é digitada em mais de um sistema?",
    description: "Uma proposta de integração para transferir registros, sinalizar falhas e permitir uma nova tentativa com acompanhamento.",
    audience: "Equipes comerciais, administrativas e operacionais que transportam informações entre ferramentas.",
    problem: "A redigitação cria etapas extras. Quando uma transferência falha, nem sempre fica claro o que chegou ao destino ou precisa ser reenviado.",
    steps: ["Receber na origem", "Validar e transferir", "Conferir no destino"],
    features: ["Troca de registros entre duas aplicações fictícias", "Verificação de duplicidade e histórico de envio", "Falha simulada e reprocessamento controlado"],
    benefits: ["Menos redigitação", "Visibilidade da troca de dados", "Exceções acompanhadas"],
    validation: "Verificar envio, repetição do mesmo registro, indisponibilidade do destino e recuperação sem criação de duplicidades.",
    limit: "As aplicações serão simuladas. A proposta não representa um conector pronto para qualquer ERP; cada integração depende dos acessos e recursos disponíveis.",
    cta: "Quero conectar minhas ferramentas",
  },
  {
    slug: "relatorios-atualizados", number: "04", title: "Relatórios atualizados",
    category: "Automação e dados", service: "solucoes", icon: "solutions",
    pain: "Preparar o relatório dá mais trabalho que analisar?",
    description: "Uma proposta para consolidar arquivos e apresentar indicadores com origem, período e atualização identificados.",
    audience: "Gestores e analistas de pequenas e médias empresas que juntam planilhas para acompanhar a operação.",
    problem: "Reunir arquivos, ajustar formatos e conferir totais a cada atualização reduz o tempo disponível para entender os indicadores.",
    steps: ["Reunir arquivos", "Validar e consolidar", "Consultar indicadores"],
    features: ["Importação e validação de arquivos sintéticos", "Consolidação com filtros e cálculos definidos", "Indicação de atualização e dados incompletos"],
    benefits: ["Menos preparação recorrente", "Indicadores consistentes", "Origem dos dados visível"],
    validation: "Conferir cálculos com resultados esperados e verificar arquivos ausentes, períodos diferentes e dados inválidos.",
    limit: "O objetivo é demonstrar a preparação da informação, além do painel. Indicadores e fontes de uma implantação serão definidos para cada processo.",
    cta: "Quero simplificar meus relatórios",
  },
  {
    slug: "assistente-de-indicadores", number: "05", title: "Assistente de indicadores",
    category: "IA aplicada", service: "inteligencia", icon: "intelligence",
    pain: "Encontrar uma resposta exige procurar em vários relatórios?",
    description: "Uma proposta para consultar indicadores em linguagem natural e conferir a fonte, o período e o cálculo utilizado.",
    audience: "Gestores administrativos e financeiros que precisam consultar e interpretar informações do negócio.",
    problem: "Uma resposta útil precisa respeitar o período, a definição do indicador e os dados disponíveis. Uma frase convincente, sozinha, não resolve a consulta.",
    steps: ["Perguntar sobre os dados", "Conferir fonte e cálculo", "Revisar a resposta"],
    features: ["Perguntas delimitadas sobre uma base sintética", "Cálculos separados da geração de texto", "Pedido de esclarecimento e indicação de dados insuficientes"],
    benefits: ["Consulta mais acessível", "Cálculos conferíveis", "Limites da resposta explícitos"],
    validation: "Avaliar cálculos, perguntas ambíguas e questões sem resposta na base. Publicar a demonstração somente após uma avaliação própria do comportamento.",
    limit: "O escopo será restrito a indicadores definidos. A proposta não representa um assistente já homologado nem substitui revisão humana em decisões.",
    cta: "Quero avaliar IA para meus indicadores",
  },
] as const;

export type ProjectProposal = (typeof projectProposals)[number];
export const proposalStatus = "Demonstração planejada";
export const proposalNotice = "Estas são propostas de demonstrações independentes. As aplicações ainda não estão disponíveis; os fluxos são ilustrativos e os cenários previstos usarão dados fictícios. Não representam entregas ou resultados de clientes.";

export function projectContactHref(project: ProjectProposal) {
  return `/contato?servico=${project.service}&projeto=${project.slug}`;
}
