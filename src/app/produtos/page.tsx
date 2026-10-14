import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ArrowIcon, Badge, Button, ExternalIcon, Heading, Section, Stat } from "@/components/ui";
import { produtos, statusLabel } from "@/content/produtos";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Axis, SóPede, Contabilidade e GeEm Next: os sistemas que a Flowlyx construiu e mantém.",
};

const badgeTone = { "em-producao": "ok", "no-ar": "ok", "em-desenvolvimento": "info", exclusivo: "neutral" } as const;

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        eyebrow="Produtos"
        titulo="O que já está rodando"
        subtitulo="Quatro sistemas, quatro setores diferentes. Três você pode acessar hoje. O quarto é exclusivo de um cliente."
      />
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
                  <Button href="/cases/#geem-next" variant="secondary">
                    Ver o case
                    <ArrowIcon />
                  </Button>
                ) : (
                  <Link href={`/produtos/${p.slug}/`} className="inline-flex h-11 items-center gap-2 rounded-sm bg-accent px-5 text-[15px] font-semibold text-white hover:bg-accent-strong">
                    Conhecer o {p.nome}
                    <ArrowIcon />
                  </Link>
                )}
                {p.site && (
                  <Button href={p.site.href} variant="secondary">
                    {p.site.label}
                    <ExternalIcon />
                  </Button>
                )}
                {p.acesso && (
                  <Button href={p.acesso.href} variant="secondary">
                    {p.acesso.label}
                    <ExternalIcon />
                  </Button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 rounded-md border border-line bg-paper p-6">
              {p.numeros.map((n) => (
                <Stat key={n.rotulo} valor={n.valor} rotulo={n.rotulo} />
              ))}
            </div>
          </div>
        </Section>
      ))}
    </>
  );
}
