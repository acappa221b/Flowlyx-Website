import Link from "next/link";
import { CheckList } from "@/components/CheckList";
import { ProductCard } from "@/components/ProductCard";
import { SecurityIcon } from "@/components/SecurityIcon";
import { ArrowIcon, Button, Card, Container, Eyebrow, Heading, Lead, Section, Stat } from "@/components/ui";
import { produtos } from "@/content/produtos";
import { cases } from "@/content/servicos";
import { cta, home, site } from "@/content/site";

export default function Home() {
  const caseDestaque = cases.itens[0];
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 text-text-inverse">
        <div className="hero-glow absolute inset-0" aria-hidden="true" />
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <Container className="relative py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="rise mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent-dark">{home.hero.eyebrow}</p>
            <Heading as="h1" className="rise text-text-inverse">
              {home.hero.titulo}
            </Heading>
            <Lead className="rise-2 mt-6 max-w-2xl text-text-inverse-2">{home.hero.subtitulo}</Lead>
            <div className="rise-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={cta.primario.href} size="lg">
                {cta.primario.label}
                <ArrowIcon />
              </Button>
              <Button href={cta.secundario.href} size="lg" variant="inverse">
                {cta.secundario.label}
              </Button>
            </div>
          </div>
        </Container>
        <div className="brand-gradient-bar h-px w-full opacity-60" aria-hidden="true" />
      </section>

      {/* Prova */}
      <section className="border-b border-line bg-paper">
        <Container className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4 md:py-12">
          {home.prova.map((p) => (
            <Stat key={p.rotulo} valor={p.valor} rotulo={p.rotulo} />
          ))}
        </Container>
      </section>

      {/* Pilares */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>{home.pilares.eyebrow}</Eyebrow>
          <Heading>{home.pilares.titulo}</Heading>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {home.pilares.itens.map((item, i) => (
            <Card key={item.titulo}>
              <p className="font-display text-sm font-extrabold text-text-3">0{i + 1}</p>
              <Heading as="h3" className="mt-3">
                {item.titulo}
              </Heading>
              <p className="mt-3 text-[15px] leading-relaxed text-text-2">{item.texto}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Produtos */}
      <Section tone="paper-2" id="produtos">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>{home.produtos.eyebrow}</Eyebrow>
            <Heading>{home.produtos.titulo}</Heading>
            <Lead className="mt-4 text-text-2">{home.produtos.subtitulo}</Lead>
          </div>
          <Link
            href="/produtos"
            className="inline-flex items-center gap-1.5 whitespace-nowrap py-3 text-sm font-semibold text-accent"
          >
            {home.produtos.link}
            <ArrowIcon />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {produtos.map((p) => (
            <ProductCard key={p.slug} produto={p} />
          ))}
        </div>
      </Section>

      {/* Processo */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>{home.processo.eyebrow}</Eyebrow>
          <Heading>{home.processo.titulo}</Heading>
          <Lead className="mt-4 text-text-2">{home.processo.subtitulo}</Lead>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {home.processo.passos.map((passo, i) => (
            <li key={passo.titulo} className="relative border-t-2 border-line pt-6">
              <span className="absolute -top-0.5 left-0 h-0.5 w-12 bg-accent" aria-hidden="true" />
              <p className="font-display text-sm font-extrabold text-accent">
                {home.processo.rotuloPasso} {i + 1}
              </p>
              <h3 className="mt-2 font-display text-xl font-extrabold tracking-[-0.01em]">{passo.titulo}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-2">{passo.texto}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Segurança */}
      <Section tone="ink" id="seguranca">
        <div className="max-w-2xl">
          <Eyebrow tone="light">{home.seguranca.eyebrow}</Eyebrow>
          <Heading className="text-text-inverse">{home.seguranca.titulo}</Heading>
          <Lead className="mt-4 text-text-inverse-2">{home.seguranca.subtitulo}</Lead>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {home.seguranca.itens.map((item) => (
            <Card key={item.titulo} tone="ink">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-ink-800 text-accent-dark" aria-hidden="true">
                <SecurityIcon nome={item.icone} />
              </span>
              <h3 className="mt-4 font-display text-lg font-extrabold tracking-[-0.01em] text-text-inverse">{item.titulo}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-inverse-2">{item.texto}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Case em destaque */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>{home.caseDestaque.eyebrow}</Eyebrow>
            <Heading>{caseDestaque.titulo}</Heading>
            <p className="mt-3 text-sm text-text-3">{caseDestaque.setor}</p>
            <p className="mt-5 text-[15px] leading-relaxed text-text-2">{caseDestaque.solucao}</p>
            <Link href="/cases" className="mt-6 inline-flex items-center gap-1.5 py-3 text-sm font-semibold text-accent">
              {home.caseDestaque.link}
              <ArrowIcon />
            </Link>
          </div>
          <div className="rounded-md border border-line bg-surface p-6 sm:p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-text-3">{cases.rotulos.funciona}</p>
            <CheckList itens={caseDestaque.funciona} />
          </div>
        </div>
      </Section>

      {/* Chamada final */}
      <Section tone="paper-2">
        <div className="mx-auto max-w-2xl text-center">
          <Heading>{home.chamadaFinal.titulo}</Heading>
          <Lead className="mt-4 text-text-2">{home.chamadaFinal.texto}</Lead>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={cta.primario.href} size="lg">
              {cta.primario.label}
              <ArrowIcon />
            </Button>
            <Button href={`mailto:${site.email}`} size="lg" variant="secondary">
              {site.email}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
