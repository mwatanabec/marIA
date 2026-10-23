/** Conteúdo da experiência institucional da MarIA. */
export const institutionalNav = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Método MARIA", href: "/metodo" },
];

export const offerings = [
  {
    id: "automatiza", number: "01", name: "MarIA Automatiza", shortName: "Automatiza", icon: "automation",
    headline: "A rotina anda. Sua equipe avança.",
    description: "Automações para tarefas repetitivas, com regras claras e espaço para as exceções do dia a dia.",
    audience: "Para empresas e áreas que gastam tempo repetindo a mesma tarefa em planilhas, e-mails e controles paralelos.",
    signals: ["Relatórios preparados manualmente toda semana", "Cadastros e notificações feitos um a um", "Aprovações que se perdem entre mensagens"],
    deliveries: ["Fluxos automatizados com validações", "Tratamento de exceções e registros de execução", "Testes, documentação e orientação de uso"],
    example: "Consolidar arquivos de uma rotina e enviar um aviso quando a informação estiver pronta para conferência.",
  },
  {
    id: "integra", number: "02", name: "MarIA Integra", shortName: "Integra", icon: "integration",
    headline: "Sistemas que conversam. Informação que flui.",
    description: "Integrações entre ferramentas, sistemas e dados para reduzir a digitação duplicada e conectar a operação.",
    audience: "Para quem já utiliza sistemas, mas ainda precisa transportar informações manualmente entre eles.",
    signals: ["O mesmo dado digitado em mais de um lugar", "Informações divergentes entre ferramentas", "Arquivos usados como ponte entre sistemas"],
    deliveries: ["Integrações por APIs ou fontes disponíveis", "Regras de sincronização e validação de dados", "Histórico de execução e documentação técnica"],
    example: "Conectar um formulário ao sistema de gestão, com verificação dos dados antes de criar um novo registro.",
  },
  {
    id: "inteligencia", number: "03", name: "MarIA Inteligência", shortName: "Inteligência", icon: "intelligence",
    headline: "IA aplicada a uma necessidade real.",
    description: "Assistentes e fluxos com IA para organizar, consultar e trabalhar com informação, com critérios e supervisão humana.",
    audience: "Para equipes com volume de documentos e informação que precisam de apoio para consultar, classificar ou analisar conteúdo.",
    signals: ["Tempo gasto procurando respostas em documentos", "Triagem recorrente de textos e solicitações", "Interesse em IA sem um caminho de adoção claro"],
    deliveries: ["Casos de uso e critérios de validação", "Assistentes ou fluxos com fontes e limites definidos", "Orientação de uso e pontos de revisão humana"],
    example: "Organizar a consulta a uma base de documentos autorizados, com indicação de fontes e revisão quando necessário.",
  },
  {
    id: "solucoes", number: "04", name: "MarIA Soluções", shortName: "Soluções", icon: "solutions",
    headline: "Quando o processo pede algo próprio.",
    description: "Dashboards, ferramentas internas e aplicações web desenhadas para as regras e necessidades da sua operação.",
    audience: "Para empresas com uma necessidade específica que exige mais estrutura do que uma automação isolada.",
    signals: ["Um processo importante depende de várias planilhas", "Falta de histórico e visão de acompanhamento", "Ferramentas prontas não atendem às regras do negócio"],
    deliveries: ["Escopo e arquitetura proporcionais ao processo", "Solução construída e validada por etapas", "Documentação para implantação e continuidade"],
    example: "Criar uma ferramenta interna para registrar solicitações, organizar responsáveis e acompanhar cada etapa.",
  },
] as const;

export const mariaMethod = [
  { letter: "M", name: "Mapear", summary: "Entender o que acontece na operação.", detail: "Conversamos com quem vive a rotina, levantamos ferramentas, dados, regras e pontos de retrabalho.", participation: "Compartilhar o processo real, os envolvidos e suas dificuldades.", delivery: "Mapa do processo atual e dos principais gargalos." },
  { letter: "A", name: "Analisar", summary: "Escolher onde vale agir primeiro.", detail: "Avaliamos impacto, esforço, riscos e alternativas. Automação, integração, IA ou software entram conforme a necessidade.", participation: "Validar prioridades, restrições e o objetivo da mudança.", delivery: "Oportunidades priorizadas e escopo proposto." },
  { letter: "R", name: "Registrar", summary: "Dar clareza às regras e decisões.", detail: "Documentamos os fluxos, os requisitos, as exceções e os critérios que vão orientar a construção e a validação.", participation: "Conferir regras, responsabilidades e critérios de aceite.", delivery: "Regras documentadas e plano de implementação." },
  { letter: "I", name: "Implementar", summary: "Construir, testar e colocar em uso.", detail: "A solução é construída em etapas verificáveis, com testes, homologação e orientação para quem vai utilizá-la.", participation: "Testar a solução e homologar as entregas combinadas.", delivery: "Solução implantada, documentação e orientação de uso." },
  { letter: "A", name: "Acompanhar", summary: "Observar o uso e orientar a evolução.", detail: "Acompanhamos a adoção e os pontos de ajuste. Melhorias e sustentação seguem as condições e os limites acordados.", participation: "Trazer feedback do uso real e ajudar a avaliar os próximos passos.", delivery: "Validação em uso e prioridades de evolução." },
] as const;

export const commonQuestions = [
  { question: "Preciso saber qual ferramenta contratar?", answer: "Não. A conversa começa pelo processo e pelo que precisa melhorar. A escolha técnica vem depois do entendimento da necessidade." },
  { question: "É possível começar por uma rotina pequena?", answer: "Sim. Um fluxo delimitado pode ser um primeiro passo, desde que as dependências, as regras e os critérios de entrega estejam claros." },
  { question: "Toda solução precisa usar inteligência artificial?", answer: "A IA entra quando contribui para o objetivo. Uma integração, uma regra bem definida ou uma automação pode atender melhor a necessidade." },
  { question: "Como são definidos investimento e prazo?", answer: "Após entender o processo, os sistemas envolvidos e as condições de implementação. A proposta registra escopo, entregáveis, responsabilidades e critérios de aceite." },
];
