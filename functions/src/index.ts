/**
 * Funções do site flowlyx.com.br (região São Paulo).
 *
 * - `contato`: recebe o formulário, grava em `pedidos` e envia e-mail para flowlyxdev@gmail.com.
 * - `evento`: recebe a medição anônima do site (página vista, clique, formulário) e grava em `eventos`.
 * - `painelResumo`: resume visitas, funil e pedidos para o /painel/. Só para os e-mails da lista.
 *
 * Segredo necessário (uma vez): firebase functions:secrets:set GMAIL_APP_PASSWORD
 */
import { initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore, Timestamp } from "firebase-admin/firestore";
import { HttpsError, onCall, onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import { logger } from "firebase-functions";
import nodemailer from "nodemailer";

initializeApp();

const DESTINO = "flowlyxdev@gmail.com";
const WHATSAPP = "+55 (35) 99169-1904";
// Banco criado pelo Alexandre no console com este nome (não é o "(default)").
const BANCO = "banco-flowlyx";
const REGIAO = "southamerica-east1";
const GMAIL_APP_PASSWORD = defineSecret("GMAIL_APP_PASSWORD");

/** Quem pode abrir o /painel/. */
const PAINEL_EMAILS = new Set(["alexandrecappa12@gmail.com", "pcarvalhosergio@gmail.com", "flowlyxdev@gmail.com"]);

const ORIGENS_PERMITIDAS = new Set([
  "https://flowlyx.com.br",
  "https://www.flowlyx.com.br",
  "https://flowlyx-website.web.app",
  "https://flowlyx-website.firebaseapp.com",
  "http://localhost:3000",
]);

const TIPOS = new Set([
  "Sistema web para a empresa",
  "Aplicativo para celular",
  "Sistema desktop ou industrial",
  "Integração fiscal ou com o governo",
  "Automação e inteligência artificial",
  "Modernizar um sistema antigo",
  "Outro",
]);

type Pedido = {
  nome: string;
  email: string;
  empresa: string;
  whatsapp: string;
  tipo: string;
  descricao: string;
};

function texto(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

/** Põe os cabeçalhos CORS e diz se a origem (quando informada) é aceita. */
function cors(req: { headers: { origin?: string } }, res: { set: (k: string, v: string) => void }): boolean {
  const origem = req.headers.origin ?? "";
  if (origem && !ORIGENS_PERMITIDAS.has(origem)) return false;
  if (ORIGENS_PERMITIDAS.has(origem)) {
    res.set("Access-Control-Allow-Origin", origem);
    res.set("Vary", "Origin");
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");
  }
  return true;
}

/* ------------------------------------------------------------------ contato */

function validar(corpo: unknown): { ok: true; pedido: Pedido } | { ok: false; erro: string } {
  if (!corpo || typeof corpo !== "object") return { ok: false, erro: "Pedido vazio." };
  const c = corpo as Record<string, unknown>;

  // Campo-armadilha: robôs preenchem, pessoas não.
  if (texto(c.site, 10)) return { ok: false, erro: "Pedido recusado." };

  const pedido: Pedido = {
    nome: texto(c.nome, 120),
    email: texto(c.email, 160),
    empresa: texto(c.empresa, 120),
    whatsapp: texto(c.whatsapp, 30),
    tipo: texto(c.tipo, 60),
    descricao: texto(c.descricao, 3000),
  };

  if (pedido.nome.length < 2) return { ok: false, erro: "Informe o seu nome." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pedido.email)) return { ok: false, erro: "Informe um e-mail válido." };
  if (!TIPOS.has(pedido.tipo)) return { ok: false, erro: "Escolha o tipo de software." };
  if (pedido.descricao.length < 20) return { ok: false, erro: "Descreva um pouco mais o que você precisa." };
  return { ok: true, pedido };
}

function escapar(s: string): string {
  return s.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch] ?? ch);
}

function corpoHtml(p: Pedido, id: string): string {
  const linha = (rotulo: string, valor: string) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#4b5970;white-space:nowrap;vertical-align:top">${rotulo}</td><td style="padding:6px 0">${escapar(valor) || "—"}</td></tr>`;
  return `
<div style="font-family:Inter,Segoe UI,Arial,sans-serif;color:#0f172a;max-width:640px">
  <h2 style="margin:0 0 4px;font-size:20px">Novo pedido de orçamento</h2>
  <p style="margin:0 0 16px;color:#7b879a;font-size:13px">Recebido pelo site flowlyx.com.br · ref. ${id}</p>
  <table style="border-collapse:collapse;font-size:15px">
    ${linha("Nome", p.nome)}
    ${linha("E-mail", p.email)}
    ${linha("Empresa", p.empresa)}
    ${linha("WhatsApp", p.whatsapp)}
    ${linha("Tipo", p.tipo)}
  </table>
  <h3 style="margin:20px 0 6px;font-size:15px">Descrição</h3>
  <p style="white-space:pre-wrap;font-size:15px;line-height:1.6;border-left:3px solid #2563eb;padding-left:12px;margin:0">${escapar(p.descricao)}</p>
</div>`;
}

export const contato = onRequest(
  {
    region: REGIAO,
    secrets: [GMAIL_APP_PASSWORD],
    maxInstances: 5,
    memory: "256MiB",
    timeoutSeconds: 30,
  },
  async (req, res) => {
    if (!cors(req, res)) {
      res.status(403).json({ erro: "Origem não permitida." });
      return;
    }
    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }
    if (req.method !== "POST") {
      res.status(405).json({ erro: "Método não permitido." });
      return;
    }

    const resultado = validar(req.body);
    if (!resultado.ok) {
      res.status(400).json({ erro: resultado.erro });
      return;
    }
    const { pedido } = resultado;

    const db = getFirestore(BANCO);
    const doc = await db.collection("pedidos").add({
      ...pedido,
      origem: req.headers.origin ?? null,
      ip: req.ip ?? null,
      userAgent: texto(req.headers["user-agent"], 300) || null,
      criadoEm: FieldValue.serverTimestamp(),
      emailEnviado: false,
    });

    try {
      const transporte = nodemailer.createTransport({
        service: "gmail",
        auth: { user: DESTINO, pass: GMAIL_APP_PASSWORD.value() },
      });
      await transporte.sendMail({
        from: `"Site Flowlyx" <${DESTINO}>`,
        to: DESTINO,
        replyTo: `"${pedido.nome.replace(/"/g, "")}" <${pedido.email}>`,
        subject: `[Orçamento] ${pedido.tipo} · ${pedido.nome}${pedido.empresa ? ` (${pedido.empresa})` : ""}`,
        html: corpoHtml(pedido, doc.id),
        text: `Novo pedido de orçamento (ref. ${doc.id})\n\nNome: ${pedido.nome}\nE-mail: ${pedido.email}\nEmpresa: ${pedido.empresa || "-"}\nWhatsApp: ${pedido.whatsapp || "-"}\nTipo: ${pedido.tipo}\n\n${pedido.descricao}`,
      });
      await transporte.sendMail({
        from: `"Flowlyx" <${DESTINO}>`,
        to: pedido.email,
        subject: "Recebemos o seu pedido de orçamento",
        text: `Olá, ${pedido.nome}.\n\nRecebemos o seu pedido sobre "${pedido.tipo}". Vamos estudar o que você descreveu e responder em breve por este e-mail.\n\nSe quiser adicionar algo, é só responder esta mensagem ou chamar no WhatsApp ${WHATSAPP}.\n\nFlowlyx · Produtividade em fluxo\nhttps://flowlyx.com.br`,
      });
      await doc.update({ emailEnviado: true });
    } catch (err) {
      // O pedido já está salvo. Registra o erro e segue: o visitante não precisa saber.
      logger.error("Falha ao enviar e-mail do pedido", { id: doc.id, err });
    }

    res.status(200).json({ ok: true, id: doc.id });
  },
);

/* ------------------------------------------------------------------ evento */

const TIPOS_EVENTO = new Set(["pagina", "clique", "formulario_inicio", "formulario_envio"]);

export const evento = onRequest(
  { region: REGIAO, maxInstances: 10, memory: "256MiB", timeoutSeconds: 10 },
  async (req, res) => {
    if (!cors(req, res)) {
      res.status(403).send("");
      return;
    }
    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }
    if (req.method !== "POST") {
      res.status(405).send("");
      return;
    }
    const c = (req.body ?? {}) as Record<string, unknown>;
    const tipo = texto(c.tipo, 30);
    const sessao = texto(c.sessao, 40);
    const caminho = texto(c.caminho, 200);
    if (!TIPOS_EVENTO.has(tipo) || !/^[0-9a-f-]{36}$/.test(sessao) || !caminho.startsWith("/")) {
      res.status(400).send("");
      return;
    }
    const largura = typeof c.largura === "number" && c.largura > 0 && c.largura < 10000 ? Math.round(c.largura) : null;
    const [utmSource, utmMedium, utmCampaign] = texto(c.utm, 300).split("|");
    const refBruta = texto(c.referencia, 100);
    const referencia = /^[a-z0-9.-]+$/i.test(refBruta) ? refBruta.toLowerCase() : "";
    await getFirestore(BANCO)
      .collection("eventos")
      .add({
        tipo,
        nome: texto(c.nome, 80),
        caminho,
        sessao,
        referencia,
        utmSource: utmSource ?? "",
        utmMedium: utmMedium ?? "",
        utmCampaign: utmCampaign ?? "",
        largura,
        criadoEm: FieldValue.serverTimestamp(),
      });
    res.status(204).send("");
  },
);

/* ------------------------------------------------------------ painelResumo */

type Contagem = Record<string, number>;

function somar(c: Contagem, chave: string) {
  c[chave] = (c[chave] ?? 0) + 1;
}

function topo(c: Contagem, n: number): { chave: string; total: number }[] {
  return Object.entries(c)
    .map(([chave, total]) => ({ chave, total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, n);
}

export const painelResumo = onCall({ region: REGIAO, maxInstances: 3, memory: "512MiB", timeoutSeconds: 60 }, async (req) => {
  const email = req.auth?.token.email ?? "";
  const verificado = req.auth?.token.email_verified === true;
  if (!email || !verificado || !PAINEL_EMAILS.has(email)) {
    throw new HttpsError("permission-denied", "Esta conta não tem acesso ao painel.");
  }
  const diasPedidos = Number((req.data as { dias?: unknown })?.dias);
  const dias = [7, 30, 90].includes(diasPedidos) ? diasPedidos : 30;
  const inicio = Timestamp.fromMillis(Date.now() - dias * 24 * 60 * 60 * 1000);

  const db = getFirestore(BANCO);
  const eventos = await db.collection("eventos").where("criadoEm", ">=", inicio).orderBy("criadoEm", "asc").limit(50000).get();

  const sessoes = new Set<string>();
  const sessoesContato = new Set<string>();
  const sessoesFormInicio = new Set<string>();
  const sessoesFormEnvio = new Set<string>();
  const sessoesCelular = new Set<string>();
  const porPagina: Contagem = {};
  const cliques: Contagem = {};
  const origens: Contagem = {};
  const porDia: Contagem = {};
  const origemPorSessao = new Map<string, string>();
  let paginasVistas = 0;

  eventos.forEach((d) => {
    const e = d.data() as {
      tipo: string;
      nome: string;
      caminho: string;
      sessao: string;
      referencia: string;
      utmSource: string;
      largura: number | null;
      criadoEm: Timestamp;
    };
    sessoes.add(e.sessao);
    if (e.largura && e.largura < 768) sessoesCelular.add(e.sessao);
    if (!origemPorSessao.has(e.sessao)) {
      origemPorSessao.set(e.sessao, e.utmSource || e.referencia || "");
    }
    if (e.tipo === "pagina") {
      paginasVistas += 1;
      somar(porPagina, e.caminho);
      somar(porDia, e.criadoEm.toDate().toISOString().slice(0, 10));
      if (e.caminho.startsWith("/contato")) sessoesContato.add(e.sessao);
    } else if (e.tipo === "clique") {
      somar(cliques, e.nome);
    } else if (e.tipo === "formulario_inicio") {
      sessoesFormInicio.add(e.sessao);
    } else if (e.tipo === "formulario_envio") {
      sessoesFormEnvio.add(e.sessao);
    }
  });
  origemPorSessao.forEach((origem) => somar(origens, origem || "direto"));

  const pedidosSnap = await db.collection("pedidos").where("criadoEm", ">=", inicio).orderBy("criadoEm", "desc").limit(50).get();
  const pedidos = pedidosSnap.docs.map((d) => {
    const p = d.data() as { nome: string; empresa: string; tipo: string; criadoEm: Timestamp; emailEnviado: boolean };
    return { id: d.id, nome: p.nome, empresa: p.empresa ?? "", tipo: p.tipo, quando: p.criadoEm.toMillis(), emailEnviado: p.emailEnviado === true };
  });

  const visitas = sessoes.size;
  return {
    dias,
    geradoEm: Date.now(),
    visitas,
    paginasVistas,
    pedidos: pedidos.length,
    conversao: visitas ? pedidos.length / visitas : 0,
    funil: {
      visitas,
      contato: sessoesContato.size,
      formularioInicio: sessoesFormInicio.size,
      formularioEnvio: sessoesFormEnvio.size,
    },
    porPagina: topo(porPagina, 10),
    cliques: topo(cliques, 10),
    origens: topo(origens, 10),
    porDia: Object.entries(porDia)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([dia, total]) => ({ dia, total })),
    dispositivos: { celular: sessoesCelular.size, computador: visitas - sessoesCelular.size },
    ultimosPedidos: pedidos.slice(0, 10),
  };
});
