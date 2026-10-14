/**
 * Produtos da Flowlyx. Cada número tem fonte em docs/pesquisa/produto-*.md.
 * GeEm Next é exclusivo de um cliente: nunca citar nome, CNPJ ou pessoas.
 */

export type StatusProduto = "em-producao" | "no-ar" | "em-desenvolvimento" | "exclusivo";

export const statusLabel: Record<StatusProduto, string> = {
  "em-producao": "Em produção",
  "no-ar": "No ar",
  "em-desenvolvimento": "Em desenvolvimento",
  exclusivo: "Solução exclusiva",
};

export type Produto = {
  slug: string;
  nome: string;
  status: StatusProduto;
  publico: string;
  resumo: string;
  descricao: string;
  destaques: { titulo: string; texto: string }[];
  numeros: { valor: string; rotulo: string }[];
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
    resumo: "Gestão do escritório de contabilidade em um só lugar.",
    descricao:
      "O Axis junta num único sistema o que hoje fica espalhado entre Domínio, Trello, Acessórias, Omie e planilhas. Quadros de tarefas, agenda, RH, cadastros e notas de serviço, com a marca do seu escritório na tela.",
    destaques: [
      {
        titulo: "Quadros em tempo real",
        texto: "Tarefas em colunas, etiquetas e comentários. Grave um áudio e ele vira cartão pronto.",
      },
      {
        titulo: "Agenda que conversa com o Google",
        texto: "Eventos, repetições e convidados, com link para a sua Google Agenda.",
      },
      {
        titulo: "RH e cadastros",
        texto: "Atestados, salários, exames ocupacionais e cadastro de funcionários pelo Cartão CNPJ.",
      },
      {
        titulo: "Com a sua marca",
        texto: "Nome, logotipo e cores do escritório. Seus clientes veem o seu sistema.",
      },
    ],
    numeros: [
      { valor: "24", rotulo: "módulos planejados" },
      { valor: "8", rotulo: "módulos já com telas" },
      { valor: "5", rotulo: "ferramentas que substitui" },
      { valor: "+1.500", rotulo: "testes automatizados" },
    ],
    acesso: { label: "Entrar no Axis", href: "https://axis.flowlyx.com.br" },
    cor: "bg-brand-indigo",
  },
  {
    slug: "sopede",
    nome: "SóPede",
    status: "em-producao",
    publico: "Restaurantes, lanchonetes e pizzarias",
    resumo: "Seu delivery próprio, sem comissão por pedido.",
    descricao:
      "Cada loja tem seu canal de venda: link próprio, QR Code na mesa e aplicativo. O pedido cai na cozinha com alarme, sai na impressora e o cliente acompanha pelo celular. Mensalidade fixa, sem comissão.",
    destaques: [
      {
        titulo: "Pedido nunca se perde",
        texto: "Painel de cozinha com alarme até alguém aceitar. Impressão automática na térmica.",
      },
      {
        titulo: "Delivery, balcão e salão",
        texto: "Taxa por bairro ou distância, mesas com QR Code, comanda por cartão e divisão de conta.",
      },
      {
        titulo: "Cardápio por foto",
        texto: "Tire uma foto do cardápio em papel e o sistema monta os itens com preço.",
      },
      {
        titulo: "PIX e nota fiscal",
        texto: "Pagamento PIX dentro do pedido e nota fiscal da venda quando o cliente pede.",
      },
    ],
    numeros: [
      { valor: "0%", rotulo: "de comissão por pedido" },
      { valor: "53", rotulo: "telas entre painel, site e app" },
      { valor: "5", rotulo: "formas de imprimir o cupom" },
      { valor: "9", rotulo: "etapas do pedido acompanhadas" },
    ],
    site: { label: "Conhecer o SóPede", href: "https://sopede.com.br" },
    acesso: { label: "Entrar no painel", href: "https://painel.sopede.com.br" },
    cor: "bg-brand-cyan",
  },
  {
    slug: "contabilidade",
    nome: "Contabilidade",
    status: "no-ar",
    publico: "Escritórios contábeis e suas empresas",
    resumo: "Notas, guias, folha e escrituração com fonte oficial.",
    descricao:
      "Recebe as notas fiscais direto da SEFAZ, emite nota de serviço, gera DAS e DARF pela Receita, calcula folha e 13º e fecha a contabilidade. Tudo que fala com o governo usa o serviço oficial.",
    destaques: [
      {
        titulo: "Notas chegam sozinhas",
        texto: "NF-e e NFS-e baixadas a cada hora direto dos ambientes nacionais.",
      },
      {
        titulo: "Guias pela Receita",
        texto: "DAS e DARF gerados pelo Integra Contador, com baixa automática quando pagos.",
      },
      {
        titulo: "Folha completa",
        texto: "INSS, IRRF, FGTS, holerite em PDF, 13º e lucros distribuídos, por vigência.",
      },
      {
        titulo: "Obrigações no prazo",
        texto: "24 obrigações no calendário, com prazo ajustado para dia útil.",
      },
    ],
    numeros: [
      { valor: "12", rotulo: "módulos" },
      { valor: "6", rotulo: "integrações oficiais" },
      { valor: "374", rotulo: "testes automatizados" },
      { valor: "5.571", rotulo: "municípios para NFS-e" },
    ],
    acesso: { label: "Entrar no sistema", href: "https://contabilidade-a9d35.web.app" },
    cor: "bg-accent",
  },
  {
    slug: "geem-next",
    nome: "GeEm Next",
    status: "exclusivo",
    publico: "Indústria de componentes de borracha e plástico",
    resumo: "O ERP de uma fábrica, reconstruído do zero sem parar a produção.",
    descricao:
      "Solução exclusiva para uma indústria com cerca de 40 colaboradores. Um sistema antigo em Access, com 35 mil linhas e sem dono, virou uma plataforma moderna em .NET que convive com o legado enquanto o substitui, módulo a módulo.",
    destaques: [
      {
        titulo: "RH e ponto eletrônico",
        texto: "Registro oficial de funcionários, férias, salários, PLR e relógio de ponto integrado.",
      },
      {
        titulo: "Chão de fábrica",
        texto: "Produção hora a hora, manutenção pelo celular e automação elétrica das prensas.",
      },
      {
        titulo: "Estoque e qualidade",
        texto: "Inventário com aprovação, nota de entrada por XML, instruções de trabalho com foto.",
      },
      {
        titulo: "Sem parar a fábrica",
        texto: "O sistema novo e o antigo rodam juntos. Cada módulo troca de lado quando está pronto.",
      },
    ],
    numeros: [
      { valor: "2.774", rotulo: "testes automatizados" },
      { valor: "6.198", rotulo: "notas fiscais reais conferidas, 100% de acerto" },
      { valor: "117", rotulo: "telas entregues de 186 mapeadas" },
      { valor: "14", rotulo: "semanas de projeto" },
    ],
    cor: "bg-ink-700",
  },
];

export const produtoPorSlug = (slug: string) => produtos.find((p) => p.slug === slug);
