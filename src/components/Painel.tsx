"use client";

import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut, type User } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import { firebaseApp } from "@/lib/firebase";
import { painel as t } from "@/content/site";
import { Badge, Container, Eyebrow, Heading, Lead } from "./ui";

type Linha = { chave: string; total: number };
type Resumo = {
  dias: number;
  geradoEm: number;
  visitas: number;
  paginasVistas: number;
  pedidos: number;
  conversao: number;
  funil: { visitas: number; contato: number; formularioInicio: number; formularioEnvio: number };
  porPagina: Linha[];
  cliques: Linha[];
  origens: Linha[];
  porDia: { dia: string; total: number }[];
  dispositivos: { celular: number; computador: number };
  ultimosPedidos: { id: string; nome: string; empresa: string; tipo: string; quando: number; emailEnviado: boolean }[];
};

const btn = "inline-flex h-11 items-center justify-center gap-2 rounded-sm px-5 text-[15px] font-semibold transition-colors";

export function Painel() {
  const [usuario, setUsuario] = useState<User | null | undefined>(undefined);
  const [dias, setDias] = useState<number>(30);
  const [resumo, setResumo] = useState<Resumo | null>(null);
  const [estado, setEstado] = useState<"idle" | "carregando" | "erro" | "erro-entrar" | "sem-acesso">("idle");

  useEffect(() => {
    const auth = getAuth(firebaseApp());
    return onAuthStateChanged(auth, (u) => {
      setUsuario(u);
      if (u) setEstado("carregando");
    });
  }, []);

  // Busca o resumo sempre que entra alguém ou muda o período. Só mexe no estado depois da resposta.
  useEffect(() => {
    if (!usuario) return;
    let ativo = true;
    const fn = httpsCallable<{ dias: number }, Resumo>(getFunctions(firebaseApp(), "southamerica-east1"), "painelResumo");
    fn({ dias })
      .then((r) => {
        if (!ativo) return;
        setResumo(r.data);
        setEstado("idle");
      })
      .catch((err: { code?: string }) => {
        if (!ativo) return;
        setEstado((err.code ?? "").includes("permission-denied") ? "sem-acesso" : "erro");
      });
    return () => {
      ativo = false;
    };
  }, [usuario, dias]);

  function escolherPeriodo(d: number) {
    setDias(d);
    setEstado("carregando");
  }

  async function entrar() {
    try {
      await signInWithPopup(getAuth(firebaseApp()), new GoogleAuthProvider());
    } catch {
      setEstado("erro-entrar");
    }
  }
  async function sair() {
    await signOut(getAuth(firebaseApp()));
    setResumo(null);
    setEstado("idle");
  }

  return (
    <section className="bg-paper">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <Heading as="h1">{t.titulo}</Heading>
            <Lead className="mt-3 text-text-2">{t.subtitulo}</Lead>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {usuario ? (
              <>
                <span className="text-sm text-text-2">{usuario.email}</span>
                <button type="button" onClick={sair} className={`${btn} border border-line bg-surface text-text hover:bg-paper-2`}>
                  {t.sair}
                </button>
              </>
            ) : (
              usuario === null && (
                <button type="button" onClick={entrar} className={`${btn} bg-accent text-white hover:bg-accent-strong`}>
                  {t.entrar}
                </button>
              )
            )}
          </div>
        </div>

        {usuario && estado !== "sem-acesso" && (
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={t.periodoRotulo}>
            {t.periodos.map((p) => (
              <button
                key={p.dias}
                type="button"
                onClick={() => escolherPeriodo(p.dias)}
                aria-pressed={dias === p.dias}
                className={`${btn} px-4 text-sm ${dias === p.dias ? "bg-ink-950 text-text-inverse" : "border border-line bg-surface text-text-2 hover:bg-paper-2"}`}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}

        {estado === "sem-acesso" && (
          <p role="alert" className="mt-8 rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {t.semAcesso}
          </p>
        )}
        {estado === "erro-entrar" && (
          <p role="alert" className="mt-8 rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {t.erroEntrar}
          </p>
        )}
        {estado === "erro" && (
          <p role="alert" className="mt-8 rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {t.erro}
          </p>
        )}
        {estado === "carregando" && <p className="mt-8 text-sm text-text-3">{t.carregando}</p>}

        {resumo && estado === "idle" && <Dados r={resumo} />}

        {usuario && <p className="mt-10 text-xs text-text-3">{t.aviso}</p>}
      </Container>
    </section>
  );
}

function Dados({ r }: { r: Resumo }) {
  const pct = (n: number, base: number) => (base ? `${Math.round((n / base) * 100)}%` : "0%");
  const funilValores: Record<string, number> = r.funil;
  const maxDia = Math.max(1, ...r.porDia.map((d) => d.total));
  return (
    <div className="mt-8 space-y-10">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Cartao rotulo={t.cartoes.visitas} valor={String(r.visitas)} />
        <Cartao rotulo={t.cartoes.paginas} valor={String(r.paginasVistas)} />
        <Cartao rotulo={t.cartoes.pedidos} valor={String(r.pedidos)} />
        <Cartao rotulo={t.cartoes.conversao} valor={`${Math.round(r.conversao * 100)}%`} nota={t.cartoes.conversaoRotulo} />
      </div>

      {r.porDia.length > 0 && (
        <Bloco titulo={t.secoes.porDia}>
          <ul className="sr-only">
            {r.porDia.map((d) => (
              <li key={d.dia}>
                {d.dia}: {d.total}
              </li>
            ))}
          </ul>
          <div className="flex h-32 items-end gap-1" aria-hidden="true">
            {r.porDia.map((d) => (
              <div key={d.dia} title={`${d.dia}: ${d.total}`} className="flex-1 rounded-t-sm bg-accent/80" style={{ height: `${(d.total / maxDia) * 100}%` }} />
            ))}
          </div>
          <p className="mt-2 flex justify-between text-xs text-text-3">
            <span>{r.porDia[0].dia}</span>
            <span>{r.porDia[r.porDia.length - 1].dia}</span>
          </p>
        </Bloco>
      )}

      <Bloco titulo={t.secoes.funil}>
        <ol className="space-y-3">
          {t.funil.map((etapa) => {
            const v = funilValores[etapa.chave] ?? 0;
            return (
              <li key={etapa.chave}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium">{etapa.label}</span>
                  <span className="text-text-2">
                    {v} · {pct(v, r.funil.visitas)}
                  </span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-paper-2">
                  <div className="h-2 rounded-full bg-accent" style={{ width: pct(v, r.funil.visitas) }} />
                </div>
              </li>
            );
          })}
        </ol>
      </Bloco>

      <div className="grid gap-6 lg:grid-cols-2">
        <Bloco titulo={t.secoes.paginas}>
          <Lista linhas={r.porPagina} />
        </Bloco>
        <Bloco titulo={t.secoes.cliques}>
          <Lista linhas={r.cliques.map((l) => ({ ...l, chave: (t.cliques as Record<string, string>)[l.chave] ?? l.chave }))} />
        </Bloco>
        <Bloco titulo={t.secoes.origens}>
          <Lista linhas={r.origens.map((l) => ({ ...l, chave: l.chave === "direto" ? t.origens.direto : l.chave }))} />
        </Bloco>
        <Bloco titulo={t.secoes.dispositivos}>
          <Lista
            linhas={[
              { chave: t.dispositivos.celular, total: r.dispositivos.celular },
              { chave: t.dispositivos.computador, total: r.dispositivos.computador },
            ]}
          />
        </Bloco>
      </div>

      <Bloco titulo={t.secoes.pedidos}>
        {r.ultimosPedidos.length === 0 ? (
          <p className="text-sm text-text-3">{t.vazio}</p>
        ) : (
          <ul className="divide-y divide-line">
            {r.ultimosPedidos.map((p) => (
              <li key={p.id} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="flex flex-wrap items-center gap-2 font-medium">
                  {p.nome}
                  {p.empresa ? <span className="text-text-2">· {p.empresa}</span> : null}
                  {!p.emailEnviado && <Badge tone="warn">{t.pedidoSemEmail}</Badge>}
                </span>
                <span className="text-sm text-text-2">
                  {p.tipo} · {new Date(p.quando).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })}
                </span>
              </li>
            ))}
          </ul>
        )}
      </Bloco>

      <p className="text-xs text-text-3">
        {t.atualizado} {new Date(r.geradoEm).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
      </p>
    </div>
  );
}

function Cartao({ rotulo, valor, nota }: { rotulo: string; valor: string; nota?: string }) {
  return (
    <div className="rounded-md border border-line bg-surface p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-3">{rotulo}</p>
      <p className="mt-2 font-display text-3xl font-extrabold tracking-[-0.02em]">{valor}</p>
      {nota && <p className="mt-1 text-xs text-text-3">{nota}</p>}
    </div>
  );
}

function Bloco({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="rounded-md border border-line bg-surface p-6">
      <h2 className="font-display text-lg font-extrabold tracking-[-0.01em]">{titulo}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Lista({ linhas }: { linhas: Linha[] }) {
  if (linhas.length === 0) return <p className="text-sm text-text-3">{t.vazio}</p>;
  const max = Math.max(1, ...linhas.map((l) => l.total));
  return (
    <ul className="space-y-2.5">
      {linhas.map((l) => (
        <li key={l.chave}>
          <div className="flex items-baseline justify-between gap-4 text-sm">
            <span className="truncate">{l.chave}</span>
            <span className="shrink-0 text-text-2">{l.total}</span>
          </div>
          <div className="mt-1 h-1.5 rounded-full bg-paper-2">
            <div className="h-1.5 rounded-full bg-accent/70" style={{ width: `${(l.total / max) * 100}%` }} />
          </div>
        </li>
      ))}
    </ul>
  );
}
