/**
 * Páginas Soluções, Sobre nós e Cases. Cada exemplo e número vem de docs/pesquisa/.
 */

export const solucoes = {
  hero: {
    eyebrow: "Soluções",
    titulo: "Qualquer área. O sistema certo.",
    subtitulo:
      "Já construímos para restaurante, escritório contábil e indústria. O método é o mesmo: entender o trabalho e entregar o que resolve.",
  },
  tiposTitulo: "O que construímos",
  tipos: [
    {
      titulo: "Sistema web para a empresa",
      texto:
        "Painéis, cadastros, relatórios e fluxos de trabalho acessados pelo navegador, no computador ou no celular.",
      exemplo: "Como o painel do SóPede e o Contabilidade.",
    },
    {
      titulo: "Aplicativo para celular",
      texto: "Aplicativos para o celular do seu cliente ou da sua equipe em campo.",
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
      texto: "NF-e, NFS-e, DAS, DARF, Simples Nacional e folha, sempre pelo serviço oficial.",
      exemplo: "Como o Contabilidade, com 6 integrações oficiais.",
    },
    {
      titulo: "Automação e inteligência artificial",
      texto:
        "Tarefas repetitivas que somem: ler um PDF e preencher o cadastro, montar o cardápio a partir de uma foto.",
      exemplo: "Como o cadastro pelo PDF do Cartão CNPJ no Contabilidade e o cardápio montado a partir de uma foto no SóPede.",
    },
    {
      titulo: "Modernizar um sistema antigo",
      texto:
        "Aquele sistema em Access, Excel ou Delphi que ninguém mais mantém, reconstruído sem parar a operação.",
      exemplo: "Como o GeEm Next: um sistema antigo inteiro sendo substituído módulo a módulo, sem parar a fábrica.",
    },
  ],
  setores: {
    titulo: "Setores onde já entregamos",
    itens: ["Restaurantes e delivery", "Escritórios de contabilidade", "Indústria", "Imobiliárias", "Academias"],
  },
  diferenciais: {
    titulo: "O que você pode esperar da Flowlyx",
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
        texto: "As regras de negócio têm teste automático: mudança nova não quebra o que já funciona.",
      },
      {
        titulo: "Você vê o código nascer",
        texto: "Acompanha cada entrega desde o primeiro dia, sem caixa-preta.",
      },
    ],
  },
} as const;

export const sobre = {
  hero: {
    eyebrow: "Sobre nós",
    titulo: "Desde 2008, software sob medida.",
    subtitulo:
      "A Flowlyx é o estúdio de software de quem passou 18 anos construindo sistemas para telecom, hospitais, bancos e fábricas. Agora, esse cuidado vai para a sua empresa.",
  },
  historiaTitulo: { eyebrow: "Nossa história", titulo: "De 2008 até hoje" },
  historia: [
    "Começou em 2008, com os primeiros projetos em Java. Desde então, o caminho passou por sistemas de telecom para a Ericsson, cinco anos em software hospitalar no Canadá e, hoje, microsserviços bancários para o Itaú.",
    "Em paralelo, construímos e mantemos produtos próprios: restaurantes, imobiliárias, academias, prefeituras, uma fábrica inteira. São sistemas com gente de verdade usando todo dia.",
    "Somos uma equipe pequena, e isso é proposital. Você fala direto com quem constrói. Não existe vendedor, não existe caixa-preta: você vê o código nascer desde o primeiro dia.",
  ],
  pessoaChave: {
    eyebrow: "Quem constrói",
    nome: "Paulo Sérgio Carvalho",
    cargo: "Desenvolvedor-chave",
    resumo:
      "Engenheiro de software com 18 anos de experiência em sistemas que não podem cair. Escreve o tratamento de erro antes do caminho feliz, hábito que trouxe do firmware embarcado, onde não existe reiniciar o aparelho instalado no cliente. Trabalha com as mesmas ferramentas de bancos e hospitais.",
    formacao: [
      "Pós-graduação em Engenharia de Sistemas Eletrônicos, Automação e Controle Industrial (INATEL)",
      "Bacharel em Sistemas de Informação (UNIVÁS)",
    ],
    trajetoria: [
      { ano: "2023", onde: "Itaú, via Zup", oque: "Microsserviços bancários em Java, Spring Boot, Kafka e AWS." },
      { ano: "2018", onde: "PolicyMedical, Canadá", oque: "Cinco anos em plataformas de documentos clínicos para hospitais." },
      {
        ano: "2011",
        onde: "Inatel Competence Center",
        oque: "Sete anos em telecom para a Ericsson, com três meses na Suécia. Firmware em C e Linux embarcado.",
      },
      { ano: "2008", onde: "Kiq Software", oque: "Primeiros projetos em Java. Onde tudo começou." },
    ],
    links: [
      { label: "Site pessoal", href: "https://paulosergiocarvalho.com.br/" },
      { label: "GitHub", href: "https://github.com/paulosc" },
    ],
  },
  equipe: {
    eyebrow: "Equipe",
    titulo: "Equipe com chão de fábrica",
    texto:
      "Além dos sistemas web, a equipe traz experiência industrial de verdade: a reconstrução completa do ERP de uma indústria, um MRP completo (planejamento de materiais e produção), sistema de RH com ponto eletrônico e inúmeras integrações com relés de rede que ligam e desligam as máquinas.",
    itens: [
      "ERP industrial reconstruído do zero (GeEm Next)",
      "MRP completo: planejamento de materiais e produção",
      "RH com ponto eletrônico integrado ao relógio da fábrica",
      "Automação de prensas com relés de rede",
      "Supervisório de produção e manutenção pelo celular",
    ],
  },
  outrosProdutos: {
    titulo: "Também construídos sob a Flowlyx",
    texto: "Produtos próprios no ar hoje, além do SóPede e do Contabilidade.",
    itens: [
      { nome: "Locabilize", texto: "Gestão de imobiliárias: contratos, vistorias e boletos.", href: "https://locabilize.com.br/" },
      { nome: "Arena", texto: "Academias de artes marciais: presença por QR Code e mensalidade.", href: "https://arenatatame.com.br/" },
      {
        nome: "Cidade Cidadã",
        texto: "O morador avisa a prefeitura e acompanha o protocolo.",
        href: "https://play.google.com/store/apps/details?id=br.gov.cidadecidada.cidade_cidada",
      },
      { nome: "EvolYou", texto: "Saúde e treino: a foto do prato vira calorias.", href: "https://evolyou.com.br/" },
      {
        nome: "Rafael IA",
        texto: "Assistente de obra com contas que dão sempre o mesmo resultado.",
        href: "https://play.google.com/store/apps/details?id=com.forma3dstudio.rafaelia",
      },
      { nome: "Graláxia", texto: "Loja de miniaturas impressas em 3D.", href: "https://gralaxia.com.br/" },
    ],
  },
  valoresTitulo: "O que guia cada decisão",
  valores: [
    { titulo: "Clareza", texto: "Falamos a sua língua. Se você não entendeu, a culpa é nossa." },
    { titulo: "Verdade", texto: "Prazo é prazo. Se vai atrasar, você sabe antes." },
    { titulo: "Cuidado", texto: "Tratamos os dados do seu cliente como se fossem os nossos." },
    { titulo: "Fluxo", texto: "Entrega contínua, em ciclos curtos. Produtividade em fluxo." },
  ],
  metodo: {
    titulo: "Como garantimos a qualidade",
    texto: "Cada entrega passa por revisão automática e humana antes de chegar a você. Especificação primeiro, código depois.",
  },
} as const;

export const cases = {
  hero: {
    eyebrow: "Cases",
    titulo: "O que já entregamos",
    subtitulo: "Projetos reais, com o que já funciona em produção. Sem nome de cliente quando o contrato pede sigilo.",
  },
  rotulos: { desafio: "O desafio", solucao: "O que fizemos", funciona: "O que já funciona" },
  itens: [
    {
      slug: "geem-next",
      setor: "Indústria · componentes de borracha e plástico · cerca de 40 colaboradores",
      titulo: "ERP de fábrica reconstruído sem parar a produção",
      desafio:
        "Um sistema em Access feito ao longo de anos por alguém que não estava mais disponível. Sem RH, sem ponto eletrônico, sem nota fiscal eletrônica, com riscos catalogados e ninguém para corrigir.",
      solucao:
        "Documentamos o sistema antigo inteiro antes de escrever uma linha. Construímos a nova plataforma em .NET, módulo a módulo, convivendo com o legado. Em 14 semanas a fábrica já usava o sistema novo no dia a dia.",
      funciona: [
        "Registro oficial de funcionários, férias e salários",
        "Ponto eletrônico integrado ao relógio da fábrica",
        "Estoque com inventário e nota de entrada por XML",
        "Ordens de manutenção pelo celular",
        "Automação elétrica das prensas",
        "Supervisório de produção",
      ],
    },
    {
      slug: "sopede",
      setor: "Restaurantes · sistema próprio por assinatura · em uso por clientes",
      titulo: "Delivery próprio para restaurantes de cidades pequenas",
      desafio:
        "Restaurantes de cidades pequenas, sem iFood, não tinham canal próprio de pedidos. Quem entrava em aplicativo pagava comissão em cada venda.",
      solucao:
        "Um canal de pedidos próprio por loja, com painel de cozinha, impressão automática, PIX no pedido e app para o cliente. Mensalidade fixa, sem comissão. Em produção desde outubro de 2026.",
      funciona: [
        "Cardápio digital com link próprio e QR Code",
        "Painel de cozinha com alarme",
        "Impressão automática do cupom",
        "Delivery, balcão e salão com comandas",
        "Pagamento PIX no pedido",
        "Aplicativo no celular para o cliente",
      ],
    },
    {
      slug: "contabilidade",
      setor: "Escritório contábil · sistema web · disponível",
      titulo: "Fiscal, folha e escrituração só com fonte oficial",
      desafio:
        "Escritórios contábeis consultam e-CAC, SEFAZ e portal da prefeitura e digitam o mesmo dado várias vezes.",
      solucao:
        "Um sistema que busca as notas sozinho, gera as guias pela Receita, calcula a folha e fecha a contabilidade. Seis integrações oficiais, sem robô de navegador.",
      funciona: [
        "NF-e recebidas da SEFAZ a cada hora",
        "Emissão de NFS-e no padrão nacional",
        "DAS e DARF gerados pela Receita",
        "Folha de pagamento, holerite e 13º",
        "Extrato OFX, conciliação, DRE e balanço",
        "Calendário com 24 obrigações",
      ],
    },
  ],
} as const;
