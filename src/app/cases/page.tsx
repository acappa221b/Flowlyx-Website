import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ArrowIcon, Button, Heading, Section, Stat } from "@/components/ui";
import { cases } from "@/content/servicos";
import { cta } from "@/content/site";

export const metadata: Metadata = {
  title: "Cases",
  description: "Projetos reais da Flowlyx: ERP industrial reconstruído, delivery próprio para restaurantes e sistema contábil com fonte oficial.",
};

export default function CasesPage() {
  return (
    <>
      <PageHero {...cases.hero} />
      {cases.itens.map((c, i) => (
        <Section key={c.slug} id={c.slug} tone={i % 2 ? "paper-2" : "paper"}>
          <p className="text-sm text-text-3">{c.setor}</p>
          <Heading className="mt-2 max-w-3xl">{c.titulo}</Heading>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr_0.9fr]">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">O desafio</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-2">{c.desafio}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">O que fizemos</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-2">{c.solucao}</p>
            </div>
            <div className="grid grid-cols-2 gap-6 rounded-md border border-line bg-paper p-6">
              {c.resultados.map((r) => (
                <Stat key={r.rotulo} valor={r.valor} rotulo={r.rotulo} />
              ))}
            </div>
          </div>
        </Section>
      ))}
      <Section tone="ink">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Heading className="text-text-inverse">O próximo case pode ser o seu.</Heading>
            <p className="mt-2 text-text-inverse-2">Conte o problema. Respondemos com uma proposta clara.</p>
          </div>
          <Button href={cta.primario.href} size="lg">
            {cta.primario.label}
            <ArrowIcon />
          </Button>
        </div>
      </Section>
    </>
  );
}
