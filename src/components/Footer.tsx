import Link from "next/link";
import { Logo } from "./Logo";
import { ExternalIcon } from "./ui";
import { acessibilidade, acessos, cta, nav, rodape, site } from "@/content/site";

const link = "inline-block py-3 hover:text-text-inverse md:py-2";

export function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-700 bg-ink-950 text-text-inverse-2">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.descricao}</p>
            <p className="mt-4 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.14em] text-text-inverse-2/70">{site.slogan}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-inverse">{rodape.navegacao}</p>
            <ul className="mt-1 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className={link}>
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contato" className={link}>
                  {rodape.contato}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-inverse">{cta.entrar.labelCelular}</p>
            <ul className="mt-1 text-sm">
              {acessos.map((a) => (
                <li key={a.href}>
                  <a href={a.href} target="_blank" rel="noopener noreferrer" className={`${link} inline-flex items-center gap-1.5`}>
                    {a.nome}
                    {a.status && <span className="whitespace-nowrap text-xs text-text-inverse-2/70">({a.status.toLowerCase()})</span>}
                    <ExternalIcon className="opacity-60" />
                    <span className="sr-only">{acessibilidade.novaAba}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-text-inverse">{rodape.contato}</p>
            <ul className="mt-1 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className={link}>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className={`${link} inline-flex items-center gap-1.5`}>
                  {rodape.whatsapp}
                  <ExternalIcon className="opacity-60" />
                  <span className="sr-only">{acessibilidade.novaAba}</span>
                </a>
              </li>
              <li>
                <Link href="/contato" className={link}>
                  {cta.primario.label}
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className={link}>
                  {rodape.politica}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink-700 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} {site.nome}. {rodape.desde} {site.desde}. {rodape.direitos}
            {site.cnpj ? ` CNPJ ${site.cnpj}.` : ""}
          </p>
          <p>{rodape.feitoNoBrasil}</p>
        </div>
      </div>
    </footer>
  );
}
