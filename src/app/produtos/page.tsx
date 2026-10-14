import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CheckList } from "@/components/CheckList";
import { ArrowIcon, Badge, Button, ExternalIcon, Heading, Section } from "@/components/ui";
import { badgeTone, paginaProdutos, produtos, statusLabel } from "@/content/produtos";
import { seo } from "@/content/site";

export const metadata: Metadata = seo.paginas.produtos;

export default function ProdutosPage() {
  return (
    <>
      <PageHero eyebrow={paginaProdutos.eyebrow} titulo={paginaProdutos.titulo} subtitulo={paginaProdutos.subtitulo} />
      {produtos.map((p, i) => (
        <Section key={p.slug} tone={i % 2 ? "paper-2" : "paper"} id={p.slug}>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${p.cor}`} aria-hidden="true" />
                <Heading>{p.nome}</Heading>
                <Badge tone={badgeTone[p.status]}>{statusLabel[p.status]}</Badge>
              </div>
              <p className="mt-2 text-sm text-text-3">{p.publico}</p>
              <p className="mt-5 font-display text-xl font-bold tracking-[-0.01em]">{p.resumo}</p>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-2">{p.descricao}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {p.slug === "geem-next" ? (
                  <Button href="/cases/#geem-next" variant="secondary" className="w-full sm:w-auto">
                    {paginaProdutos.verCase}
                    <ArrowIcon />
                  </Button>
                ) : (
                  <Button href={`/produtos/${p.slug}/`} className="w-full sm:w-auto">
                    {paginaProdutos.conhecer} {p.nome}
                    <ArrowIcon />
                  </Button>
                )}
                {p.site && (
                  <Button href={p.site.href} variant="secondary" className="w-full sm:w-auto">
                    {p.site.label}
                    <ExternalIcon />
                  </Button>
                )}
                {p.acesso && (
                  <Button href={p.acesso.href} variant="secondary" className="w-full sm:w-auto">
                    {p.acesso.label}
                    <ExternalIcon />
                  </Button>
                )}
              </div>
            </div>
            <div className="rounded-md border border-line bg-surface p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-text-3">{p.funcionaTitulo}</p>
              <CheckList itens={p.funciona.slice(0, 6)} />
              {p.funciona.length > 6 && <p className="mt-4 text-sm text-text-3">{paginaProdutos.maisNaPagina}</p>}
            </div>
          </div>
        </Section>
      ))}
    </>
  );
}
