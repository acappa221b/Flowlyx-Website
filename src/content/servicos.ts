/**
 * Página Soluções. Cada exemplo vem de um produto real (docs/pesquisa/).
 */

export const solucoes = {
  hero: {
    eyebrow: "Soluções",
    titulo: "Qualquer área. O sistema certo.",
    subtitulo:
      "Já construímos para restaurante, escritório contábil e indústria. O método é o mesmo: entender o trabalho e entregar o que resolve.",
  },
  tipos: [
    {
      titulo: "Sistema web para a empresa",
      texto:
        "Painéis, cadastros, relatórios e fluxos de trabalho acessados pelo navegador, no computador ou no celular.",
      exemplo: "Como o painel do SóPede e o Axis.",
    },
    {
      titulo: "Aplicativo para celular",
      texto: "Apps Android e iOS para o seu cliente ou para a sua equipe em campo.",
      exemplo: "Como o app do SóPede e o app de manutenção do GeEm Next.",
    },
    {
      titulo: "Sistema desktop e industrial",
      texto:
        "Programas para Windows que rodam na rede local, falam com balança, relógio de ponto, impressora e máquinas.",
      exemplo: "Como o GeEm Next, que até controla as prensas da fábrica.",
    },
    {
      titulo: "Integração fiscal e com o governo",
      texto:
        "NF-e, NFS-e, DAS, DARF, Simples Nacional e folha, sempre pelo serviço oficial.",
      exemplo: "Como o Contabilidade, com 6 integrações oficiais.",
    },
    {
      titulo: "Automação e inteligência artificial",
      texto:
        "Tarefas repetitivas que somem: ler um PDF e preencher o cadastro, transformar um áudio em tarefa, montar o cardápio a partir de uma foto.",
      exemplo: "Como o cadastro pelo Cartão CNPJ e o áudio que vira cartão no Axis.",
    },
    {
      titulo: "Modernizar um sistema antigo",
      texto:
        "Aquele sistema em Access, Excel ou Delphi que ninguém mais mantém, reconstruído sem parar a operação.",
      exemplo: "Como o GeEm Next: 35 mil linhas de legado substituídas módulo a módulo.",
    },
  ],
  setores: {
    titulo: "Setores onde já entregamos",
    itens: ["Restaurantes e delivery", "Escritórios de contabilidade", "Indústria", "Serviços"],
  },
  diferenciais: {
    titulo: "Por que empresas pequenas e médias escolhem a Flowlyx",
    itens: [
      {
        titulo: "Você fala com quem constrói",
        texto: "Sem camada de vendedor. Quem entende o seu problema é quem escreve o código.",
      },
      {
        titulo: "Orçamento por escrito, antes",
        texto: "Escopo, prazo e preço fechados antes de começar. Mudou o escopo, mudou por escrito.",
      },
      {
        titulo: "Tudo testado",
        texto: "Cada regra de negócio tem teste automático. Mudança nova não quebra o que já funciona.",
      },
      {
        titulo: "O sistema é seu",
        texto: "Código, dados e acessos ficam com você. Sem dependência, sem refém.",
      },
    ],
  },
} as const;

export const sobre = {
  hero: {
    eyebrow: "Sobre",
    titulo: "Uma software house pequena, do jeito certo.",
    subtitulo:
      "A Flowlyx nasceu de dois desenvolvedores cansados de ver empresa pequena pagando caro por sistema que não resolve.",
  },
  historia: [
    "Somos dois sócios que programam. Não existe departamento comercial entre você e quem vai construir o seu sistema.",
    "Começamos resolvendo problemas de verdade: uma fábrica presa a um sistema de 2015, restaurantes pagando comissão em cada pedido, escritórios contábeis pulando entre cinco ferramentas.",
    "Usamos inteligência artificial como parte do time, com revisão humana e automática em cada entrega. É assim que conseguimos entregar rápido sem abrir mão de qualidade.",
  ],
  valores: [
    { titulo: "Clareza", texto: "Falamos a sua língua. Se você não entendeu, a culpa é nossa." },
    { titulo: "Verdade", texto: "Prazo é prazo. Se vai atrasar, você sabe antes." },
    { titulo: "Cuidado", texto: "Tratamos os dados do seu cliente como se fossem os nossos." },
    { titulo: "Fluxo", texto: "Entrega contínua, em ciclos curtos. Produtividade em fluxo." },
  ],
  metodo: {
    titulo: "Como garantimos a qualidade",
    texto:
      "Cada entrega passa por agentes de revisão automática que checam segurança, isolamento de dados, acessibilidade, desempenho e testes antes de chegar a você. Especificação primeiro, código depois.",
  },
} as const;

export const cases = {
  hero: {
    eyebrow: "Cases",
    titulo: "O que já entregamos",
    subtitulo: "Projetos reais, números reais. Sem nome de cliente quando o contrato pede sigilo.",
  },
  itens: [
    {
      slug: "geem-next",
      setor: "Indústria · componentes de borracha e plástico · cerca de 40 colaboradores",
      titulo: "ERP de fábrica reconstruído sem parar a produção",
      desafio:
        "Um sistema em Access com 191 tabelas e 35 mil linhas, feito ao longo de anos por alguém que não estava mais disponível. Sem RH, sem ponto, sem nota fiscal eletrônica, 135 riscos catalogados.",
      solucao:
        "Documentamos 100% do sistema antigo em 2 dias. Construímos a nova plataforma em .NET, módulo a módulo, convivendo com o legado. RH, ponto eletrônico, estoque, manutenção pelo celular e automação das prensas já estão em uso.",
      resultados: [
        { valor: "14", rotulo: "semanas do zero ao uso real" },
        { valor: "2.774", rotulo: "testes automatizados" },
        { valor: "6.198", rotulo: "notas fiscais conferidas, 100% de acerto" },
        { valor: "117", rotulo: "telas entregues" },
      ],
    },
    {
      slug: "sopede",
      setor: "Restaurantes · SaaS próprio · em produção",
      titulo: "Delivery próprio para restaurantes de cidades pequenas",
      desafio:
        "Restaurantes de cidades sem aplicativo de delivery dependiam do WhatsApp e perdiam pedido. Os que tinham aplicativo pagavam comissão em cada venda.",
      solucao:
        "Um canal de pedidos próprio por loja, com painel de cozinha, impressão automática, PIX no pedido e app para o cliente. Mensalidade fixa, sem comissão. Lojas pagantes desde outubro de 2026.",
      resultados: [
        { valor: "0%", rotulo: "de comissão" },
        { valor: "53", rotulo: "telas entre painel, site e app" },
        { valor: "94", rotulo: "operações de backend" },
        { valor: "8", rotulo: "semanas até a primeira versão" },
      ],
    },
    {
      slug: "contabilidade",
      setor: "Escritório contábil · sistema web · no ar",
      titulo: "Fiscal, folha e escrituração só com fonte oficial",
      desafio:
        "Escritórios contábeis vivem pulando entre e-CAC, SEFAZ, portal da prefeitura e planilhas, digitando o mesmo dado várias vezes.",
      solucao:
        "Um sistema que busca as notas sozinho, gera as guias pela Receita, calcula a folha e fecha a contabilidade. Seis integrações oficiais, sem robô de navegador.",
      resultados: [
        { valor: "6", rotulo: "integrações oficiais" },
        { valor: "24", rotulo: "obrigações no calendário" },
        { valor: "374", rotulo: "testes automatizados" },
        { valor: "12", rotulo: "módulos" },
      ],
    },
  ],
} as const;
