import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckList } from "@/components/CheckList";
import { Badge, Button, Card, ChamadaFinal, Container, Eyebrow, ExternalIcon, Heading, Lead, Section } from "@/components/ui";
import { badgeTone, produtoPorSlug, produtos, statusLabel } from "@/content/produtos";
import { chamadas } from "@/content/site";

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

export default async function ProdutoPage({ params }: PageProps<"/produtos/[slug]">) {
  const { slug } = await params;
  const p = produtoPorSlug(slug);
  if (!p || p.slug === "geem-next") notFound();

  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <Eyebrow>{p.publico}</Eyebrow>
              <Badge tone={badgeTone[p.status]}>{statusLabel[p.status]}</Badge>
            </div>
            <Heading as="h1">{p.manchete}</Heading>
            <span className="brand-gradient-bar mt-5 block h-[3px] w-12 rounded-full" aria-hidden="true" />
            <Lead className="mt-5 text-text-2">{p.descricao}</Lead>
            <div className="mt-8 flex flex-wrap gap-3">
              {p.acesso && (
                <Button href={p.acesso.href} size="lg" className="w-full sm:w-auto">
                  {p.acesso.label}
                  <ExternalIcon />
                </Button>
              )}
              {p.site && (
                <Button href={p.site.href} size="lg" variant="secondary" className="w-full sm:w-auto">
                  {p.site.label}
                  <ExternalIcon />
                </Button>
              )}
            </div>
            {p.aviso && <p className="mt-4 text-sm text-text-3">{p.aviso}</p>}
          </div>
        </Container>
      </section>

      <Section>
        <Heading>{p.destaquesTitulo}</Heading>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {p.destaques.map((d) => (
            <Card key={d.titulo}>
              <Heading as="h3">{d.titulo}</Heading>
              <p className="mt-2 text-[15px] leading-relaxed text-text-2">{d.texto}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="paper-2">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Heading>{p.funcionaTitulo}</Heading>
          <CheckList itens={p.funciona} columns={2} />
        </div>
      </Section>

      <Section>
        <ChamadaFinal {...chamadas.produto} />
      </Section>
    </>
  );
}
