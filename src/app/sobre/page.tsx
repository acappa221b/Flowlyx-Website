import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ArrowIcon, Button, Card, Heading, Section } from "@/components/ui";
import { sobre } from "@/content/servicos";
import { cta } from "@/content/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: "A Flowlyx é uma software house de dois sócios que programam. Clareza, verdade, cuidado e fluxo.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero {...sobre.hero} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-text-2">
            {sobre.historia.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Card tone="paper" className="bg-paper-2">
            <Heading as="h3">{sobre.metodo.titulo}</Heading>
            <p className="mt-3 text-[15px] leading-relaxed text-text-2">{sobre.metodo.texto}</p>
          </Card>
        </div>
      </Section>
      <Section tone="paper-2">
        <Heading>O que guia cada decisão</Heading>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sobre.valores.map((v) => (
            <Card key={v.titulo}>
              <Heading as="h3">{v.titulo}</Heading>
              <p className="mt-2 text-[15px] leading-relaxed text-text-2">{v.texto}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <div className="flex flex-col items-start gap-6 rounded-md bg-ink-950 p-8 text-text-inverse md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <Heading className="text-text-inverse">Vamos conversar?</Heading>
            <p className="mt-2 text-text-inverse-2">Sem vendedor no meio. Você fala direto com quem constrói.</p>
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
