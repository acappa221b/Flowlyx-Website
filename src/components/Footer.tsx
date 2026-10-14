import Link from "next/link";
import { Logo } from "./Logo";
import { ExternalIcon } from "./ui";
import { acessos, nav, site } from "@/content/site";

export function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-700 bg-ink-950 text-text-inverse-2">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.descricao}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-text-inverse-2/70">
              {site.slogan}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-inverse">Navegação</p>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-text-inverse">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contato" className="hover:text-text-inverse">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-inverse">Acessar sistemas</p>
            <ul className="mt-3 space-y-2 text-sm">
              {acessos.map((a) => (
                <li key={a.href}>
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-text-inverse"
                  >
                    {a.nome}
                    <ExternalIcon className="opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-inverse">Contato</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-text-inverse">
                  {site.email}
                </a>
              </li>
              <li>
                <Link href="/contato" className="hover:text-text-inverse">
                  Pedir orçamento
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-text-inverse">
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink-700 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} {site.nome}. Todos os direitos reservados.
            {site.cnpj ? ` CNPJ ${site.cnpj}.` : ""}
          </p>
          <p>Feito no Brasil.</p>
        </div>
      </div>
    </footer>
  );
}
