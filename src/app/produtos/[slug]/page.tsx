import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowIcon, Badge, Button, Card, Container, Eyebrow, ExternalIcon, Heading, Lead, Section, Stat } from "@/components/ui";
import { produtoPorSlug, produtos, statusLabel } from "@/content/produtos";
import { cta } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return produtos.filter((p) => p.slug !== "geem-next").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/produtos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = produtoPorSlug(slug);
  if (!p) return {};
  return { title: p.nome, description: p.resumo };
}

const badgeTone = { "em-producao": "ok", "no-ar": "ok", "em-desenvolvimento": "info", exclusivo: "neutral" } as const;

export default async function ProdutoPage({ params }: PageProps<"/produtos/[slug]">) {
  const { slug } = await params;
  const p = produtoPorSlug(slug);
  if (!p || p.slug === "geem-next") notFound();

  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <Eyebrow>{p.publico}</Eyebrow>
            <div className="flex flex-wrap items-center gap-3">
              <Heading as="h1">{p.nome}</Heading>
              <Badge tone={badgeTone[p.status]}>{statusLabel[p.status]}</Badge>
            </div>
            <Lead className="mt-5 text-text-2">{p.resumo}</Lead>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-2">{p.descricao}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {p.acesso && (
                <Button href={p.acesso.href} size="lg">
                  {p.acesso.label}
                  <ExternalIcon />
                </Button>
              )}
              {p.site && (
                <Button href={p.site.href} size="lg" variant="secondary">
                  {p.site.label}
                  <ExternalIcon />
                </Button>
              )}
            </div>
            {p.status === "em-desenvolvimento" && (
              <p className="mt-4 text-sm text-text-3">
                O Axis está em construção. O acesso é liberado para escritórios parceiros durante o desenvolvimento.
              </p>
            )}
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {p.destaques.map((d) => (
            <Card key={d.titulo}>
              <Heading as="h3">{d.titulo}</Heading>
              <p className="mt-2 text-[15px] leading-relaxed text-text-2">{d.texto}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {p.numeros.map((n) => (
            <Stat key={n.rotulo} valor={n.valor} rotulo={n.rotulo} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-6 rounded-md bg-ink-950 p-8 text-text-inverse md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <Heading className="text-text-inverse">Quer algo parecido para o seu negócio?</Heading>
            <p className="mt-2 text-text-inverse-2">Adaptamos ou construímos do zero. Conte o que você precisa.</p>
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
