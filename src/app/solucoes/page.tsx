import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Card, ChamadaFinal, Heading, Section } from "@/components/ui";
import { solucoes } from "@/content/servicos";
import { chamadas, seo } from "@/content/site";

export const metadata: Metadata = seo.paginas.solucoes;

export default function SolucoesPage() {
  return (
    <>
      <PageHero {...solucoes.hero} />

      <Section>
        <Heading>{solucoes.tiposTitulo}</Heading>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solucoes.tipos.map((t) => (
            <Card key={t.titulo} className="flex flex-col">
              <Heading as="h3">{t.titulo}</Heading>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-text-2">{t.texto}</p>
              <p className="mt-5 border-t border-line pt-4 text-sm text-text-3">{t.exemplo}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Heading>{solucoes.diferenciais.titulo}</Heading>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-text-3">{solucoes.setores.titulo}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {solucoes.setores.itens.map((s) => (
                <li key={s} className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-text-2">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {solucoes.diferenciais.itens.map((d) => (
              <div key={d.titulo} className="border-l-2 border-accent pl-4">
                <dt className="font-display text-lg font-extrabold tracking-[-0.01em]">{d.titulo}</dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-text-2">{d.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section>
        <ChamadaFinal {...chamadas.solucoes} />
      </Section>
    </>
  );
}
