"use client";

import { useState, type FormEvent } from "react";
import { formulario as f, site, tiposDeSoftware } from "@/content/site";
import { registrar } from "@/lib/medicao";

type Estado = "idle" | "enviando" | "ok" | "erro";

const endpoint = process.env.NEXT_PUBLIC_CONTATO_URL ?? "/api/contato";

const campo =
  "mt-1.5 block w-full rounded-sm border border-line bg-surface px-3.5 py-3 text-[15px] text-text placeholder:text-text-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
const rotulo = "block text-sm font-semibold text-text";

export function ContactForm() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [erro, setErro] = useState<string>("");
  const [comecou, setComecou] = useState(false);

  function aoComecar() {
    if (comecou) return;
    setComecou(true);
    registrar("formulario_inicio");
  }

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const dados = Object.fromEntries(new FormData(form).entries());
    setEstado("enviando");
    setErro("");
    try {
      const resp = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      if (!resp.ok) {
        const corpo = (await resp.json().catch(() => null)) as { erro?: string } | null;
        throw new Error(corpo?.erro ?? f.erroPadrao);
      }
      setEstado("ok");
      registrar("formulario_envio");
      form.reset();
    } catch (err) {
      setEstado("erro");
      setErro(err instanceof Error ? err.message : f.erroPadrao);
    }
  }

  if (estado === "ok") {
    return (
      <div role="status" className="rounded-md border border-green-200 bg-green-50 p-6">
        <p className="font-display text-xl font-extrabold text-green-900">{f.sucessoTitulo}</p>
        <p className="mt-2 text-[15px] leading-relaxed text-green-900/80">
          {f.sucessoTexto}{" "}
          <a className="font-semibold underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} onFocusCapture={aoComecar} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className={rotulo}>
            {f.nome}
          </label>
          <input id="nome" name="nome" required autoComplete="name" maxLength={120} className={campo} />
        </div>
        <div>
          <label htmlFor="email" className={rotulo}>
            {f.email}
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" maxLength={160} className={campo} />
        </div>
        <div>
          <label htmlFor="empresa" className={rotulo}>
            {f.empresa} <span className="font-normal text-text-3">{f.opcional}</span>
          </label>
          <input id="empresa" name="empresa" autoComplete="organization" maxLength={120} className={campo} />
        </div>
        <div>
          <label htmlFor="whatsapp" className={rotulo}>
            {f.whatsapp} <span className="font-normal text-text-3">{f.opcional}</span>
          </label>
          <input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" maxLength={30} placeholder={f.whatsappPlaceholder} className={campo} />
        </div>
      </div>

      <div>
        <label htmlFor="tipo" className={rotulo}>
          {f.tipo}
        </label>
        <select id="tipo" name="tipo" required defaultValue="" className={campo}>
          <option value="" disabled>
            {f.tipoPlaceholder}
          </option>
          {tiposDeSoftware.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="descricao" className={rotulo}>
          {f.descricao}
        </label>
        <textarea
          id="descricao"
          name="descricao"
          required
          rows={5}
          minLength={20}
          maxLength={3000}
          placeholder={f.descricaoPlaceholder}
          className={campo}
        />
        <p className="mt-1.5 text-xs text-text-3">{f.descricaoDica}</p>
      </div>

      {/* Campo-armadilha contra robôs. Pessoas não veem. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="site">{f.armadilha}</label>
        <input id="site" name="site" tabIndex={-1} autoComplete="off" />
      </div>

      {estado === "erro" && (
        <p role="alert" className="rounded-sm border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-800">
          {erro} {f.erroComplemento}{" "}
          <a className="font-semibold underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={estado === "enviando"}
          className="inline-flex h-12 items-center justify-center rounded-sm bg-accent px-6 text-base font-semibold text-white transition-colors hover:bg-accent-strong disabled:opacity-60"
        >
          {estado === "enviando" ? f.enviando : f.enviar}
        </button>
        <p className="text-xs text-text-3">{f.rodape}</p>
      </div>
    </form>
  );
}
