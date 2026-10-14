"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FocusEvent } from "react";
import { Logo } from "./Logo";
import { Button, ExternalIcon } from "./ui";
import { acessos, cabecalho, cta, nav } from "@/content/site";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [entrarAberto, setEntrarAberto] = useState(false);
  const entrarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function fechar(e: MouseEvent) {
      if (entrarRef.current && !entrarRef.current.contains(e.target as Node)) setEntrarAberto(false);
    }
    function esc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setEntrarAberto(false);
        setMenuAberto(false);
      }
    }
    document.addEventListener("mousedown", fechar);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", fechar);
      document.removeEventListener("keydown", esc);
    };
  }, []);

  function aoPerderFoco(e: FocusEvent<HTMLDivElement>) {
    if (!entrarRef.current?.contains(e.relatedTarget as Node | null)) setEntrarAberto(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
        <Link href="/" aria-label={cabecalho.inicio} className="inline-flex min-h-11 items-center rounded-sm">
          <Logo size={28} />
        </Link>

        <nav aria-label={cabecalho.navPrincipal} className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-2 py-2 text-[15px] font-medium text-text-2 transition-colors hover:bg-paper-2 hover:text-text lg:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div ref={entrarRef} onBlur={aoPerderFoco} className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setEntrarAberto((v) => !v)}
              aria-expanded={entrarAberto}
              aria-controls="menu-entrar"
              className="inline-flex h-11 items-center gap-1.5 rounded-sm px-3 text-[15px] font-medium text-text-2 transition-colors hover:bg-paper-2 hover:text-text"
            >
              {cta.entrar.label}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                aria-hidden="true"
                className={`transition-transform ${entrarAberto ? "rotate-180" : ""}`}
              >
                <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {entrarAberto && (
              <ul
                id="menu-entrar"
                aria-label={cta.entrar.labelCelular}
                className="absolute right-0 mt-2 w-72 rounded-md border border-line bg-surface p-1.5 shadow-card"
              >
                {acessos.map((a) => (
                  <li key={a.href}>
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-3 rounded-sm px-3 py-2.5 hover:bg-paper-2"
                    >
                      <span>
                        <span className="flex items-center gap-2 text-[15px] font-semibold text-text">
                          {a.nome}
                          {a.status && (
                            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-800 ring-1 ring-inset ring-amber-200">
                              {a.status}
                            </span>
                          )}
                        </span>
                        <span className="block text-sm text-text-2">{a.descricao}</span>
                      </span>
                      <ExternalIcon className="mt-1 shrink-0 text-text-3" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Button href={cta.primario.href}>{cta.primario.label}</Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuAberto((v) => !v)}
          aria-expanded={menuAberto}
          aria-controls="menu-celular"
          aria-label={menuAberto ? cabecalho.fecharMenu : cabecalho.abrirMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-text md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            {menuAberto ? (
              <path d="M5 5l12 12M17 5 5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuAberto && (
        <div id="menu-celular" className="border-t border-line bg-surface px-5 pb-6 pt-3 md:hidden">
          <nav aria-label={cabecalho.navCelular} className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuAberto(false)}
                className="rounded-sm px-2 py-3 text-base font-medium text-text"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mt-4 px-2 text-xs font-semibold uppercase tracking-[0.14em] text-text-3">{cta.entrar.labelCelular}</p>
          <ul className="mt-1 flex flex-col">
            {acessos.map((a) => (
              <li key={a.href}>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-sm px-2 py-3 text-base font-medium text-text"
                >
                  <span className="flex items-center gap-2">
                    {a.nome}
                    {a.status && <span className="text-xs font-semibold text-amber-800">{a.status}</span>}
                  </span>
                  <ExternalIcon className="text-text-3" />
                </a>
              </li>
            ))}
          </ul>
          <Button href={cta.primario.href} className="mt-4 w-full">
            {cta.primario.label}
          </Button>
        </div>
      )}
    </header>
  );
}
