/**
 * Medição de uso do site, feita em casa. Sem cookies, sem rastreio entre sites.
 * - Um id de sessão aleatório fica em sessionStorage e some quando a aba fecha.
 * - Cada evento vai para /api/evento (função `evento`), que grava no Firestore.
 * - Respeita "Do Not Track" e nunca roda no /painel/.
 */

export type TipoEvento = "pagina" | "clique" | "formulario_inicio" | "formulario_envio";

const ENDPOINT = process.env.NEXT_PUBLIC_EVENTO_URL ?? "/api/evento";

function sessao(): string | null {
  try {
    let id = sessionStorage.getItem("fx_s");
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem("fx_s", id);
      sessionStorage.setItem("fx_ref", document.referrer ? new URL(document.referrer).hostname : "");
      const u = new URL(location.href);
      const utm = ["utm_source", "utm_medium", "utm_campaign"].map((k) => u.searchParams.get(k) ?? "").join("|");
      sessionStorage.setItem("fx_utm", utm);
    }
    return id;
  } catch {
    return null;
  }
}

function podeMedir(): boolean {
  if (typeof window === "undefined") return false;
  if (navigator.doNotTrack === "1") return false;
  if ((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true) return false;
  if (location.pathname.startsWith("/painel")) return false;
  return true;
}

export function registrar(tipo: TipoEvento, nome = "") {
  if (!podeMedir()) return;
  const id = sessao();
  if (!id) return;
  const corpo = {
    tipo,
    nome: nome.slice(0, 80),
    caminho: location.pathname,
    sessao: id,
    referencia: sessionStorage.getItem("fx_ref") ?? "",
    utm: sessionStorage.getItem("fx_utm") ?? "",
    largura: window.innerWidth,
  };
  try {
    fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(corpo),
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* medição nunca pode quebrar o site */
  }
}

/** Nome do evento de clique a partir do elemento clicado. */
export function nomeDoClique(el: Element): string | null {
  const alvo = el.closest<HTMLElement>("[data-evento], a[href]");
  if (!alvo) return null;
  const explicito = alvo.dataset.evento;
  if (explicito) return explicito;
  const href = alvo.getAttribute("href") ?? "";
  if (href.startsWith("https://wa.me")) return "whatsapp";
  if (href.startsWith("mailto:")) return "email";
  if (href.startsWith("/contato")) return "cta_orcamento";
  if (/^https?:/.test(href)) {
    try {
      return `externo:${new URL(href).hostname}`;
    } catch {
      return null;
    }
  }
  return null;
}
