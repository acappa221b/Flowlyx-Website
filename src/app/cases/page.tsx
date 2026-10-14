import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CheckList } from "@/components/CheckList";
import { Badge, Button, ChamadaFinal, ExternalIcon, Heading, Section } from "@/components/ui";
import { cases } from "@/content/servicos";
import { chamadas, seo } from "@/content/site";

export const metadata: Metadata = seo.paginas.cases;

export default function CasesPage() {
  return (
    <>
      <PageHero {...cases.hero} />
      {cases.itens.map((c, i) => (
        <Section key={c.slug} id={c.slug} tone={i % 2 ? "paper-2" : "paper"} className="scroll-mt-16">
          <p className="text-sm text-text-3">{c.setor}</p>
          <Heading className="mt-2 max-w-3xl">{c.titulo}</Heading>
          <div className="mt-6 flex flex-wrap gap-3">
            {c.links.length > 0 ? (
              c.links.map((l) => (
                <Button key={l.href} href={l.href} variant="secondary" className="w-full sm:w-auto">
                  {l.label}
                  <ExternalIcon />
                </Button>
              ))
            ) : (
              <p className="flex flex-wrap items-center gap-2 text-sm text-text-3">
                <Badge tone="neutral">{cases.rotulos.exclusivoBadge}</Badge>
                {cases.rotulos.exclusivo}
              </p>
            )}
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr_0.9fr]">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{cases.rotulos.desafio}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-2">{c.desafio}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{cases.rotulos.solucao}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-2">{c.solucao}</p>
            </div>
            <div className="rounded-md border border-line bg-surface p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{cases.rotulos.funciona}</h3>
              <CheckList itens={c.funciona} />
            </div>
          </div>
        </Section>
      ))}
      <Section>
        <ChamadaFinal {...chamadas.cases} />
      </Section>
    </>
  );
}
