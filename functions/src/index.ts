/**
 * Função `contato`: recebe o formulário do site, grava em Firestore e envia
 * e-mail para flowlyxdev@gmail.com. Região: São Paulo.
 *
 * Segredo necessário (uma vez): firebase functions:secrets:set GMAIL_APP_PASSWORD
 * (senha de app do Gmail de flowlyxdev@gmail.com; exige verificação em 2 etapas).
 */
import { initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import { logger } from "firebase-functions";
import nodemailer from "nodemailer";

initializeApp();

const DESTINO = "flowlyxdev@gmail.com";
// Banco criado pelo Alexandre no console com este nome (não é o "(default)").
const BANCO = "banco-flowlyx";
const GMAIL_APP_PASSWORD = defineSecret("GMAIL_APP_PASSWORD");

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
    region: "southamerica-east1",
    secrets: [GMAIL_APP_PASSWORD],
    maxInstances: 5,
    memory: "256MiB",
    timeoutSeconds: 30,
  },
  async (req, res) => {
    const origem = req.headers.origin ?? "";
    if (ORIGENS_PERMITIDAS.has(origem)) {
      res.set("Access-Control-Allow-Origin", origem);
      res.set("Vary", "Origin");
      res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.set("Access-Control-Allow-Headers", "Content-Type");
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
      origem: origem || null,
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
        text: `Olá, ${pedido.nome}.\n\nRecebemos o seu pedido sobre "${pedido.tipo}". Vamos estudar o que você descreveu e responder em breve por este e-mail.\n\nSe quiser adicionar algo, é só responder esta mensagem.\n\nFlowlyx · Produtividade em fluxo\nhttps://flowlyx.com.br`,
      });
      await doc.update({ emailEnviado: true });
    } catch (err) {
      // O pedido já está salvo. Registra o erro e segue: o visitante não precisa saber.
      logger.error("Falha ao enviar e-mail do pedido", { id: doc.id, err });
    }

    res.status(200).json({ ok: true, id: doc.id });
  },
);
