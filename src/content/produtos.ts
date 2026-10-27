/**
 * Produtos da Flowlyx. Cada funcionalidade listada já existe e funciona (fonte: docs/pesquisa/produto-*.md).
 * Regra do Alexandre (14/10/2026): só funcionalidades em produção; nada de métricas de desenvolvimento
 * (testes, commits, telas, semanas). O Axis aparece como "Em construção" (decisão do Alexandre, 27/10/2026),
 * mas a lista `funciona` dele mostra só o que já está em produção (fonte: docs/pesquisa/produto-axis.md).
 * GeEm Next é exclusivo de um cliente: nunca citar nome, CNPJ ou pessoas.
 */

export type StatusProduto = "em-producao" | "no-ar" | "em-desenvolvimento" | "exclusivo";

export const statusLabel: Record<StatusProduto, string> = {
  "em-producao": "Em uso por clientes",
  "no-ar": "Disponível",
  "em-desenvolvimento": "Em construção",
  exclusivo: "Exclusivo",
};

export const badgeTone: Record<StatusProduto, "ok" | "info" | "warn" | "neutral"> = {
  "em-producao": "ok",
  "no-ar": "info",
  "em-desenvolvimento": "warn",
  exclusivo: "neutral",
};

export type Produto = {
  slug: string;
  nome: string;
  status: StatusProduto;
  publico: string;
  /** H1 da página do produto. */
  manchete: string;
  /** Uma frase para o card. */
  resumo: string;
  descricao: string;
  /** Aviso curto abaixo dos botões, quando houver. */
  aviso?: string;
  destaquesTitulo: string;
  destaques: { titulo: string; texto: string }[];
  /** Título da lista de funcionalidades. */
  funcionaTitulo: string;
  /** Funcionalidades que já existem e funcionam. */
  funciona: string[];
  acesso?: { label: string; href: string };
  site?: { label: string; href: string };
  cor: string; // classe Tailwind do marcador do produto
};

export const produtos: Produto[] = [
  {
    slug: "axis",
    nome: "Axis",
    status: "em-desenvolvimento",
    publico: "Escritórios de contabilidade",
    manchete: "Axis. O escritório contábil em um só lugar.",
    resumo: "Gestão do escritório de contabilidade em um só lugar.",
    descricao:
      "O Axis junta num único sistema o que hoje fica espalhado em planilhas e em vários programas. Quadros de tarefas, agenda, RH, cadastros e financeiro, com a marca do seu escritório na tela.",
    aviso: "O Axis está em construção. Quer ver antes do lançamento? Fale com a gente.",
    destaquesTitulo: "O que o Axis já faz",
    destaques: [
      {
        titulo: "Quadros em tempo real",
        texto: "Tarefas em colunas, etiquetas e arrastar-e-soltar, com a equipe toda vendo a mesma coisa.",
      },
      {
        titulo: "Agenda que conversa com o Google",
        texto: "Eventos, repetições e visões da agenda, com link para a sua Google Agenda.",
      },
      {
        titulo: "RH e cadastros",
        texto: "Atestados, salários, exames ocupacionais e cadastro de empresas preenchido pelo Cartão CNPJ.",
      },
      {
        titulo: "Com a sua marca",
        texto: "Nome, logotipo e cores do escritório. Seus clientes veem o seu sistema.",
      },
    ],
    funcionaTitulo: "Já funciona hoje",
    funciona: [
      "Quadros de tarefas em tempo real",
      "Financeiro: contas a pagar e a receber, honorários, fluxo de caixa e DRE",
      "Notas de serviço (NFS-e) emitidas pelas próprias empresas atendidas",
      "Atendimento pelo WhatsApp com vários atendentes, respondendo quem chama",
      "Agenda do escritório com link para a Google Agenda",
      "RH do escritório: atestados, advertências, salários, exames, férias e resumo da folha",
      "Cadastros de funcionários, clientes, empresas, prestadores e médicos; empresas preenchidas pelo Cartão CNPJ",
      "Ponto: jornadas, apontamento, espelho e banco de horas",
      "RH das empresas que o escritório atende",
      "Orçamentos e propostas de honorários, com catálogo de serviços",
      "Organograma, instruções de trabalho e procedimentos (IT e POP)",
      "Chat interno da equipe",
      "Início com painéis que cada pessoa monta",
      "Marca própria do escritório na tela",
      "Entrada com conta Google ou e-mail e senha, com permissões por módulo",
    ],
    acesso: { label: "Entrar no Axis", href: "https://axis.flowlyx.com.br" },
    cor: "bg-brand-indigo",
  },
  {
    slug: "sopede",
    nome: "SóPede",
    status: "em-producao",
    publico: "Restaurantes, lanchonetes e pizzarias",
    manchete: "SóPede. Delivery próprio, sem comissão.",
    resumo: "Seu delivery próprio, sem comissão por pedido.",
    descricao:
      "Cada loja tem seu canal de venda: link próprio, QR Code na mesa e aplicativo. O pedido cai na cozinha com alarme, sai na impressora e o cliente acompanha pelo celular. Mensalidade fixa, sem comissão.",
    destaquesTitulo: "O que o SóPede faz",
    destaques: [
      {
        titulo: "Pedido não passa batido",
        texto: "Painel de cozinha com alarme até alguém aceitar. Impressão automática na térmica.",
      },
      {
        titulo: "Delivery, balcão e salão",
        texto: "Taxa por bairro ou distância, mesas com QR Code, comanda por cartão e divisão de conta.",
      },
      {
        titulo: "Cardápio por foto",
        texto: "Tire uma foto do cardápio em papel e o sistema monta a lista de itens para você revisar.",
      },
      {
        titulo: "Pix dentro do pedido",
        texto: "O cliente paga por Pix no próprio pedido, pelo Mercado Pago.",
      },
    ],
    funcionaTitulo: "Já funciona hoje",
    funciona: [
      "Cardápio digital com link próprio e QR Code na mesa",
      "Painel de cozinha com alarme e histórico do dia",
      "Impressão do cupom: navegador, USB, Bluetooth ou agente Windows",
      "Delivery com taxa por bairro, cidade ou distância no mapa",
      "Balcão, venda por quilo com balança e salão com comandas",
      "Salão funciona mesmo com a internet caída",
      "Entregadores, estoque, ficha técnica e faturamento",
      "Aplicativo no celular para o cliente pedir",
      "Pagamento Pix no pedido",
      "Mensalidade fixa, sem comissão por pedido",
    ],
    site: { label: "Site sopede.com.br", href: "https://sopede.com.br" },
    acesso: { label: "Entrar no painel", href: "https://painel.sopede.com.br" },
    cor: "bg-brand-cyan",
  },
  {
    slug: "contabilidade",
    nome: "Contabilidade",
    status: "no-ar",
    publico: "Escritórios contábeis e suas empresas",
    manchete: "Contabilidade. Notas, guias e folha com fonte oficial.",
    resumo: "Notas, guias, folha e escrituração com fonte oficial.",
    descricao:
      "Recebe as notas fiscais direto da SEFAZ, emite nota de serviço, gera DAS e DARF pela Receita, calcula folha e 13º e fecha a contabilidade. Tudo que fala com o governo usa o serviço oficial. Nome comercial: ContabOffice.",
    destaquesTitulo: "O que o Contabilidade faz",
    destaques: [
      {
        titulo: "Notas chegam sozinhas",
        texto: "NF-e buscadas a cada hora na SEFAZ e NFS-e recebidas do ambiente nacional.",
      },
      {
        titulo: "Guias pela Receita",
        texto: "DAS e DARF gerados pelo Integra Contador, com Pix copia e cola e aviso quando o cliente abre a guia.",
      },
      {
        titulo: "Folha completa",
        texto: "INSS, IRRF, FGTS, holerite, 13º e lucros distribuídos, por vigência.",
      },
      {
        titulo: "Obrigações no prazo",
        texto: "24 obrigações no calendário, com prazo ajustado para dia útil.",
      },
    ],
    funcionaTitulo: "Já funciona hoje",
    funciona: [
      "Carteira de clientes e calendário de obrigações por empresa",
      "Cadastro da empresa pelo PDF do Cartão CNPJ",
      "NF-e recebidas da SEFAZ e NFS-e do ambiente nacional",
      "Emissão, substituição e cancelamento de NFS-e",
      "DAS e DARF gerados pela Receita, com Pix copia e cola",
      "Conferência do Simples Nacional: faixa, Fator R e alíquota",
      "Folha de pagamento, holerite, 13º e lucros distribuídos",
      "Extrato bancário (OFX), conciliação, balancete, DRE e balanço",
      "Documentos do cliente organizados por empresa",
      "Contrato de serviços contábeis e cobrança de honorários",
    ],
    acesso: { label: "Entrar no ContabOffice", href: "https://contabilidade-a9d35.web.app" },
    cor: "bg-accent",
  },
  {
    slug: "geem-next",
    nome: "GeEm Next",
    status: "exclusivo",
    publico: "Indústria de componentes de borracha e plástico",
    manchete: "GeEm Next. O ERP de uma fábrica, reconstruído sem parar a produção.",
    resumo: "O ERP de uma fábrica, reconstruído do zero sem parar a produção.",
    descricao:
      "Solução exclusiva para uma indústria com cerca de 40 colaboradores. Um sistema antigo em Access, sem dono, virou uma plataforma moderna em .NET que convive com o legado enquanto o substitui, módulo a módulo.",
    destaquesTitulo: "O que o GeEm Next faz",
    destaques: [
      {
        titulo: "RH e ponto eletrônico",
        texto: "Registro oficial de funcionários, férias, salários e relógio de ponto integrado.",
      },
      {
        titulo: "Chão de fábrica",
        texto: "Supervisório de produção, manutenção pelo celular e automação elétrica das prensas.",
      },
      {
        titulo: "Estoque e qualidade",
        texto: "Inventário com aprovação, nota de entrada por XML, instruções de trabalho (IT e POP).",
      },
      {
        titulo: "Sem parar a fábrica",
        texto: "O sistema novo e o antigo rodam juntos. Cada módulo troca de lado quando está pronto.",
      },
    ],
    funcionaTitulo: "Em uso na fábrica",
    funciona: [
      "Registro oficial de funcionários, férias e salários",
      "Ponto eletrônico integrado ao relógio de ponto",
      "Painel de presença ao vivo",
      "Estoque, inventário com aprovação e estoque mínimo",
      "Nota de entrada lançada pelo XML",
      "Instruções de trabalho e procedimentos (IT e POP)",
      "Ordens de manutenção pelo aplicativo no celular",
      "Automação elétrica das prensas pelo próprio sistema",
      "Supervisório de produção",
    ],
    cor: "bg-ink-700",
  },
];

export const paginaProdutos = {
  eyebrow: "Produtos",
  titulo: "O que já está rodando",
  subtitulo:
    "Quatro sistemas, três setores. Dois você pode acessar hoje, um está em construção e o quarto é exclusivo de um cliente.",
  conhecer: "Conhecer o",
  conhecerCurto: "Conhecer",
  verCase: "Ver o case",
  maisNaPagina: "E mais na página do produto.",
} as const;

export const produtoPorSlug = (slug: string) => produtos.find((p) => p.slug === slug);
