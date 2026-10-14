import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button, Card, ChamadaFinal, Eyebrow, ExternalIcon, Heading, Section } from "@/components/ui";
import { sobre } from "@/content/servicos";
import { chamadas, seo } from "@/content/site";

export const metadata: Metadata = seo.paginas.sobre;

export default function SobrePage() {
  const p = sobre.pessoaChave;
  return (
    <>
      <PageHero {...sobre.hero} />

      <Section>
        <Eyebrow>{sobre.historiaTitulo.eyebrow}</Eyebrow>
        <Heading>{sobre.historiaTitulo.titulo}</Heading>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-text-2">
            {sobre.historia.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <Card className="bg-paper-2">
            <Heading as="h3">{sobre.metodo.titulo}</Heading>
            <p className="mt-3 text-[15px] leading-relaxed text-text-2">{sobre.metodo.texto}</p>
          </Card>
        </div>
      </Section>

      {/* Pessoa-chave */}
      <Section tone="ink" id="paulo">
        <Eyebrow tone="light">{p.eyebrow}</Eyebrow>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Heading className="text-text-inverse">{p.nome}</Heading>
            <p className="mt-1 text-sm font-semibold text-accent-dark">{p.cargo}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-text-inverse-2">{p.resumo}</p>
            <ul className="mt-6 space-y-1.5 text-sm text-text-inverse-2">
              {p.formacao.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-dark" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              {p.links.map((l) => (
                <Button key={l.href} href={l.href} variant="inverse">
                  {l.label}
                  <ExternalIcon />
                </Button>
              ))}
            </div>
          </div>

          <ol className="relative border-l border-ink-700 pl-6">
            {p.trajetoria.map((t) => (
              <li key={t.ano} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-dark ring-4 ring-ink-950" aria-hidden="true" />
                <p className="font-display text-sm font-extrabold text-accent-dark">{t.ano}</p>
                <h3 className="mt-1 font-display text-lg font-extrabold tracking-[-0.01em] text-text-inverse">{t.onde}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-text-inverse-2">{t.oque}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Equipe industrial */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Eyebrow>{sobre.equipe.eyebrow}</Eyebrow>
            <Heading>{sobre.equipe.titulo}</Heading>
            <p className="mt-5 text-[15px] leading-relaxed text-text-2">{sobre.equipe.texto}</p>
          </div>
          <ul className="grid gap-3">
            {sobre.equipe.itens.map((i) => (
              <li key={i} className="flex items-center gap-3 rounded-md border border-line bg-surface px-4 py-3 text-[15px]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paper-2 text-accent ring-1 ring-line" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6.5 5 9l4.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Outros produtos */}
      <Section tone="paper-2">
        <div className="max-w-2xl">
          <Heading>{sobre.outrosProdutos.titulo}</Heading>
          <p className="mt-4 text-[15px] leading-relaxed text-text-2">{sobre.outrosProdutos.texto}</p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sobre.outrosProdutos.itens.map((o) => (
            <li key={o.nome}>
              <a
                href={o.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-md border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="flex items-center justify-between">
                  <span className="font-display text-lg font-extrabold tracking-[-0.01em]">{o.nome}</span>
                  <ExternalIcon className="text-text-3" />
                </span>
                <span className="mt-2 text-sm leading-relaxed text-text-2">{o.texto}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Heading>{sobre.valoresTitulo}</Heading>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sobre.valores.map((v) => (
            <Card key={v.titulo}>
              <Heading as="h3">{v.titulo}</Heading>
              <p className="mt-2 text-[15px] leading-relaxed text-text-2">{v.texto}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="paper-2">
        <ChamadaFinal {...chamadas.sobre} />
      </Section>
    </>
  );
}
