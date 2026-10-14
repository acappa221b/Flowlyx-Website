/**
 * Dados fixos do site. Tudo que é texto ou link vive aqui ou em produtos.ts.
 * Fontes: CLAUDE.md e docs/pesquisa/.
 */

export const site = {
  nome: "Flowlyx",
  slogan: "Produtividade em fluxo",
  dominio: "https://flowlyx.com.br",
  descricao:
    "Software sob medida para a sua empresa, entregue rápido e com preço justo. Sistemas web, aplicativos, integrações fiscais e automação.",
  email: "flowlyxdev@gmail.com",
  // TODO(Alexandre): informar CNPJ e cidade para o rodapé e a política de privacidade.
  cnpj: "",
  cidade: "",
} as const;

export const nav = [
  { href: "/solucoes", label: "Soluções" },
  { href: "/produtos", label: "Produtos" },
  { href: "/cases", label: "Cases" },
  { href: "/sobre", label: "Sobre" },
] as const;

export const acessos = [
  {
    nome: "Axis",
    descricao: "Gestão do escritório contábil",
    href: "https://axis.flowlyx.com.br",
    status: "Em desenvolvimento",
  },
  {
    nome: "SóPede",
    descricao: "Pedidos para restaurantes",
    href: "https://painel.sopede.com.br",
    status: "Em produção",
  },
  {
    nome: "Contabilidade",
    descricao: "Fiscal, folha e escrituração",
    href: "https://contabilidade-a9d35.web.app",
    status: "No ar",
  },
] as const;

export const cta = {
  primario: { label: "Pedir orçamento", href: "/contato" },
  secundario: { label: "Ver produtos", href: "/produtos" },
} as const;

export const home = {
  hero: {
    eyebrow: "Desenvolvimento de software sob medida",
    titulo: "Software sob medida, entregue rápido.",
    subtitulo:
      "Construímos o sistema que a sua empresa precisa, do jeito que ela trabalha. Sem comissão escondida, sem projeto de um ano.",
  },
  prova: [
    { valor: "4", rotulo: "produtos próprios, 2 em uso real" },
    { valor: "+4.700", rotulo: "testes automatizados nos nossos sistemas" },
    { valor: "6", rotulo: "integrações oficiais com o governo" },
    { valor: "Brasil", rotulo: "dados hospedados em São Paulo" },
  ],
  pilares: {
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
          "Trabalhamos em ciclos curtos. Você vê o sistema funcionando em semanas, não em meses, e ajusta a rota enquanto ele nasce.",
      },
      {
        titulo: "Preço justo",
        texto:
          "Orçamento claro, sem surpresa. Você paga pelo que pediu e sabe exatamente o que está sendo feito, hora a hora.",
      },
    ],
  },
  processo: {
    titulo: "Como funciona",
    subtitulo: "Quatro passos. Sem burocracia.",
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
        texto: "Sistema no ar com monitoramento, correções e evolução quando você precisar.",
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
        titulo: "Dados no Brasil",
        texto: "Nossos sistemas em nuvem ficam em servidores em São Paulo, dentro da LGPD.",
      },
      {
        titulo: "Acesso por regra, não por confiança",
        texto:
          "Cada usuário vê só o que pode. As regras de acesso são testadas automaticamente a cada entrega.",
      },
      {
        titulo: "Segredos cifrados",
        texto:
          "Certificados digitais e chaves de integração ficam cifrados em cofre, nunca no código.",
      },
      {
        titulo: "Só fonte oficial",
        texto:
          "Integrações com SEFAZ, Receita e prefeituras usam os serviços oficiais. Sem robô de navegador, sem atalho.",
      },
      {
        titulo: "Testado antes de ir ao ar",
        texto: "Mais de 4.700 testes automatizados protegem cálculos, regras e integrações.",
      },
      {
        titulo: "Transparência total",
        texto: "Horas, custo e progresso de cada módulo ficam visíveis para o cliente.",
      },
    ],
  },
  chamadaFinal: {
    titulo: "Conte o que você precisa.",
    texto:
      "Descreva o sistema em poucas linhas. Estudamos o seu caso antes de responder, sem compromisso.",
  },
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
