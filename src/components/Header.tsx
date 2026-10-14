"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { Button, ExternalIcon } from "./ui";
import { acessos, cta, nav } from "@/content/site";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [acessoAberto, setAcessoAberto] = useState(false);
  const acessoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function fechar(e: MouseEvent) {
      if (acessoRef.current && !acessoRef.current.contains(e.target as Node)) setAcessoAberto(false);
    }
    function esc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setAcessoAberto(false);
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

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
        <Link href="/" aria-label="Flowlyx, página inicial" className="rounded-sm">
          <Logo size={28} />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-2 text-[15px] font-medium text-text-2 transition-colors hover:bg-paper-2 hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div ref={acessoRef} className="relative">
            <button
              type="button"
              onClick={() => setAcessoAberto((v) => !v)}
              aria-expanded={acessoAberto}
              aria-haspopup="menu"
              className="inline-flex h-11 items-center gap-1.5 rounded-sm px-3 text-[15px] font-medium text-text-2 transition-colors hover:bg-paper-2 hover:text-text"
            >
              Acessar
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={`transition-transform ${acessoAberto ? "rotate-180" : ""}`}>
                <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {acessoAberto && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-72 rounded-md border border-line bg-paper p-1.5 shadow-card"
              >
                {acessos.map((a) => (
                  <a
                    key={a.href}
                    role="menuitem"
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between gap-3 rounded-sm px-3 py-2.5 hover:bg-paper-2"
                  >
                    <span>
                      <span className="block text-[15px] font-semibold text-text">{a.nome}</span>
                      <span className="block text-sm text-text-2">{a.descricao}</span>
                    </span>
                    <ExternalIcon className="mt-1 shrink-0 text-text-3" />
                  </a>
                ))}
              </div>
            )}
          </div>
          <Button href={cta.primario.href}>{cta.primario.label}</Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuAberto((v) => !v)}
          aria-expanded={menuAberto}
          aria-controls="menu-celular"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
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
        <div id="menu-celular" className="border-t border-line bg-paper px-5 pb-6 pt-3 md:hidden">
          <nav aria-label="Principal (celular)" className="flex flex-col">
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
          <p className="mt-4 px-2 text-xs font-semibold uppercase tracking-[0.14em] text-text-3">Acessar sistemas</p>
          <div className="mt-1 flex flex-col">
            {acessos.map((a) => (
              <a
                key={a.href}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-sm px-2 py-3 text-base font-medium text-text"
              >
                {a.nome}
                <ExternalIcon className="text-text-3" />
              </a>
            ))}
          </div>
          <Button href={cta.primario.href} className="mt-4 w-full">
            {cta.primario.label}
          </Button>
        </div>
      )}
    </header>
  );
}
