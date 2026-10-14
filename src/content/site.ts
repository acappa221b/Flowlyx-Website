/**
 * Dados fixos do site. Tudo que é texto ou link vive aqui, em produtos.ts ou em servicos.ts.
 * Fontes: CLAUDE.md e docs/pesquisa/.
 */

export const site = {
  nome: "Flowlyx",
  slogan: "Produtividade em fluxo",
  dominio: "https://flowlyx.com.br",
  descricao:
    "Software sob medida para a sua empresa desde 2008, entregue rápido e com preço justo. Sistemas web, aplicativos, integrações fiscais e automação industrial.",
  desde: "2008",
  email: "flowlyxdev@gmail.com",
  cnpj: "60.748.857/0001-16",
  cidade: "Conceição dos Ouros, MG",
} as const;

export const nav = [
  { href: "/solucoes", label: "Soluções" },
  { href: "/produtos", label: "Produtos" },
  { href: "/cases", label: "Cases" },
  { href: "/sobre", label: "Sobre nós" },
] as const;

export const acessos = [
  {
    nome: "Axis",
    descricao: "Gestão do escritório contábil",
    href: "https://axis.flowlyx.com.br",
    status: "Em construção",
  },
  {
    nome: "SóPede",
    descricao: "Pedidos para restaurantes",
    href: "https://painel.sopede.com.br",
    status: "",
  },
  {
    nome: "ContabOffice",
    descricao: "Fiscal, folha e escrituração",
    href: "https://contabilidade-a9d35.web.app",
    status: "",
  },
] as const;

export const cta = {
  primario: { label: "Pedir orçamento", href: "/contato" },
  secundario: { label: "Ver produtos", href: "/produtos" },
  entrar: { label: "Entrar", labelCelular: "Entrar nos sistemas" },
} as const;

export const home = {
  hero: {
    eyebrow: "Flowlyx · Produtividade em fluxo",
    titulo: "Software sob medida, entregue rápido.",
    subtitulo:
      "Construímos o sistema que a sua empresa precisa, do jeito que ela trabalha. Sem vendedor no meio, sem projeto de um ano.",
  },
  prova: [
    { valor: "2008", rotulo: "ano em que começamos a construir software" },
    { valor: "8", rotulo: "produtos próprios no ar hoje" },
    { valor: "6", rotulo: "integrações oficiais (SEFAZ, Receita, prefeituras)" },
    { valor: "SP", rotulo: "dados hospedados em São Paulo, Brasil" },
  ],
  pilares: {
    eyebrow: "O jeito Flowlyx",
    titulo: "Três coisas que a gente não abre mão",
    itens: [
      {
        titulo: "Sob medida",
        texto:
          "Nada de sistema genérico com 200 botões que ninguém usa. Entendemos como você trabalha e construímos só o que resolve.",
      },
      {
        titulo: "Entrega rápida",
        texto:
          "Trabalhamos em ciclos curtos. O GeEm Next foi do zero ao uso real na fábrica em 14 semanas, e você acompanha cada etapa.",
      },
      {
        titulo: "Preço justo",
        texto: "Orçamento claro, sem surpresa. Você paga pelo que pediu e vê o progresso de cada módulo.",
      },
    ],
  },
  produtos: {
    eyebrow: "Produtos",
    titulo: "Sistemas que já construímos e mantemos",
    subtitulo: "A melhor prova de que entregamos é o que já está rodando.",
    link: "Ver todos os produtos",
  },
  processo: {
    eyebrow: "Processo",
    titulo: "Como funciona",
    subtitulo: "Quatro passos. Sem burocracia.",
    rotuloPasso: "Passo",
    passos: [
      {
        titulo: "Conversa",
        texto: "Você conta o problema. A gente escuta, pergunta e entende o seu dia a dia.",
      },
      {
        titulo: "Proposta",
        texto: "Escopo, prazo e preço por escrito. Você aprova antes de qualquer linha de código.",
      },
      {
        titulo: "Entrega em ciclos",
        texto: "A cada ciclo, uma parte pronta e testada. Você usa, dá retorno, e seguimos.",
      },
      {
        titulo: "Suporte",
        texto: "Sistema no ar, com correções e evolução quando você precisar.",
      },
    ],
  },
  seguranca: {
    eyebrow: "Segurança e confiabilidade",
    titulo: "Feito para você dormir tranquilo",
    subtitulo:
      "Seus dados e os dos seus clientes são o ativo mais importante do sistema. Tratamos assim desde o primeiro dia.",
    itens: [
      {
        icone: "pin",
        titulo: "Dados no Brasil",
        texto: "Nossos sistemas em nuvem ficam em servidores do Google Cloud em São Paulo.",
      },
      {
        icone: "cadeado",
        titulo: "Acesso por regra, não por confiança",
        texto: "Cada usuário vê só o que pode. As regras de acesso são testadas automaticamente a cada entrega.",
      },
      {
        icone: "chave",
        titulo: "Segredos cifrados",
        texto: "Certificados digitais e chaves de integração ficam cifrados em cofre, nunca no código.",
      },
      {
        icone: "carimbo",
        titulo: "Só fonte oficial",
        texto: "Integrações com SEFAZ, Receita e prefeituras usam os serviços oficiais. Sem robô de navegador, sem atalho.",
      },
      {
        icone: "check",
        titulo: "Testado antes de ir ao ar",
        texto: "Cálculos, regras e integrações têm teste automático. Mudança nova não quebra o que já funciona.",
      },
      {
        icone: "olho",
        titulo: "Progresso visível",
        texto: "Você acompanha o que foi feito em cada módulo, a cada ciclo de entrega.",
      },
    ],
  },
  caseDestaque: {
    eyebrow: "Case",
    link: "Ver todos os cases",
  },
  chamadaFinal: {
    titulo: "Conte o que você precisa.",
    texto: "Descreva o sistema em poucas linhas. Estudamos o seu caso antes de responder, sem compromisso.",
  },
} as const;

/* Chamada final das páginas internas (caixa navy) */
export const chamadas = {
  solucoes: {
    titulo: "Não achou o seu caso na lista?",
    texto: "Descreva o problema. Se der para resolver com software, a gente constrói.",
  },
  produto: {
    titulo: "Quer algo parecido para o seu negócio?",
    texto: "Adaptamos ou construímos do zero. Conte o que você precisa.",
  },
  cases: {
    titulo: "O próximo case pode ser o seu.",
    texto: "Conte o problema. Respondemos com uma proposta clara.",
  },
  sobre: {
    titulo: "Vamos conversar?",
    texto: "Sem vendedor no meio. Você fala direto com quem constrói.",
  },
} as const;

export const contato = {
  eyebrow: "Orçamento",
  titulo: "Conte o que você precisa.",
  subtitulo: "Sem formulário gigante. Diga o tipo de software e descreva o problema. O resto a gente pergunta.",
  passos: [
    { titulo: "Você descreve", texto: "Tipo de sistema e o problema, em poucas linhas." },
    { titulo: "Nós estudamos", texto: "Lemos com calma e pesquisamos o seu caso antes de falar com você." },
    { titulo: "Conversamos", texto: "Respondemos por e-mail ou WhatsApp com perguntas e um caminho." },
  ],
  prefereEmail: "Prefere e-mail?",
} as const;

export const tiposDeSoftware = [
  "Sistema web para a empresa",
  "Aplicativo para celular",
  "Sistema desktop ou industrial",
  "Integração fiscal ou com o governo",
  "Automação e inteligência artificial",
  "Modernizar um sistema antigo",
  "Outro",
] as const;

export const seo = {
  tituloPadrao: "Software sob medida, entregue rápido",
  paginas: {
    solucoes: {
      title: "Soluções",
      description:
        "Sistemas web, aplicativos, software desktop e industrial, integrações fiscais, automação com IA e modernização de sistemas antigos.",
    },
    produtos: {
      title: "Produtos",
      description: "Axis, SóPede, Contabilidade e GeEm Next: os sistemas que a Flowlyx construiu e mantém.",
    },
    cases: {
      title: "Cases",
      description:
        "Projetos reais da Flowlyx: ERP industrial reconstruído, delivery próprio para restaurantes, gestão de aluguel para imobiliárias e sistema contábil com fonte oficial.",
    },
    sobre: {
      title: "Sobre nós",
      description:
        "Desde 2008 construindo software sob medida. Conheça Paulo Sérgio Carvalho, desenvolvedor-chave da Flowlyx, e a experiência industrial da equipe.",
    },
    contato: {
      title: "Pedir orçamento",
      description: "Descreva o software que você procura. Estudamos o seu caso antes de responder, sem compromisso.",
    },
    privacidade: {
      title: "Política de privacidade",
      description: "Como a Flowlyx trata os dados enviados pelo site flowlyx.com.br.",
    },
  },
} as const;

export const acessibilidade = {
  novaAba: "(abre em nova aba)",
} as const;

export const cabecalho = {
  navPrincipal: "Principal",
  navCelular: "Principal (celular)",
  abrirMenu: "Abrir menu",
  fecharMenu: "Fechar menu",
  inicio: "Flowlyx, página inicial",
  pularParaConteudo: "Ir para o conteúdo",
} as const;

export const rodape = {
  navegacao: "Navegação",
  contato: "Contato",
  politica: "Política de privacidade",
  direitos: "Todos os direitos reservados.",
  feitoNoBrasil: "Feito no Brasil.",
  desde: "Desde",
} as const;

export const formulario = {
  nome: "Seu nome",
  email: "E-mail",
  empresa: "Empresa",
  whatsapp: "WhatsApp",
  opcional: "(opcional)",
  whatsappPlaceholder: "(00) 00000-0000",
  tipo: "Que tipo de software você procura?",
  tipoPlaceholder: "Escolha uma opção",
  descricao: "Descreva em poucas linhas",
  descricaoPlaceholder: "O que a sua empresa faz, qual problema o sistema precisa resolver e quem vai usar.",
  descricaoDica: "Quanto mais concreto, melhor estudamos o seu caso antes de responder.",
  enviar: "Enviar pedido",
  enviando: "Enviando…",
  rodape: "Sem compromisso. Seus dados ficam só com a Flowlyx.",
  sucessoTitulo: "Recebemos o seu pedido.",
  sucessoTexto: "Vamos estudar o que você descreveu e responder pelo e-mail informado. Se preferir, escreva direto para",
  erroPadrao: "Não foi possível enviar agora.",
  erroComplemento: "Você também pode escrever para",
  armadilha: "Site",
} as const;

export const privacidade = {
  eyebrow: "Privacidade",
  titulo: "Política de privacidade",
  atualizadaEm: "Última atualização: 14 de outubro de 2026.",
  secoes: [
    {
      titulo: "Quem somos",
      texto: "Este site pertence à Flowlyx. Para qualquer assunto sobre dados pessoais, escreva para",
      comEmail: true,
    },
    {
      titulo: "Quais dados coletamos",
      texto:
        "Só o que você digita no formulário de orçamento: nome, e-mail, empresa e WhatsApp (se informar), o tipo de software e a descrição do que precisa. O site não usa cookies de rastreamento nem ferramentas de publicidade.",
    },
    {
      titulo: "Para que usamos",
      texto: "Para estudar o seu pedido e responder. Não vendemos, não compartilhamos e não usamos seus dados para enviar propaganda.",
    },
    {
      titulo: "Onde ficam e por quanto tempo",
      texto:
        "Os pedidos são guardados em servidores do Google Cloud na região de São Paulo e enviados por e-mail para a equipe da Flowlyx. Guardamos por até 12 meses após o último contato, ou até você pedir a exclusão.",
    },
    {
      titulo: "Seus direitos",
      texto:
        "Pela Lei Geral de Proteção de Dados (LGPD), você pode pedir acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail acima. Respondemos em até 15 dias.",
    },
    {
      titulo: "Sistemas da Flowlyx",
      texto: "O Axis, o SóPede e o Contabilidade têm políticas próprias, disponíveis dentro de cada sistema.",
    },
  ],
} as const;

export const naoEncontrada = {
  rotulo: "Erro 404",
  titulo: "Essa página não existe.",
  texto: "O endereço pode ter mudado. Volte para o início e siga de lá.",
  botao: "Ir para o início",
} as const;
