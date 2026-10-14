import { Container, Eyebrow, Heading, Lead } from "./ui";

type Props = { eyebrow: string; titulo: string; subtitulo: string };

/* Cabeçalho padrão das páginas internas. O traço em degradê é o único detalhe de marca da página. */
export function PageHero({ eyebrow, titulo, subtitulo }: Props) {
  return (
    <section className="border-b border-line bg-paper">
      <Container className="py-16 md:py-20">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading as="h1">{titulo}</Heading>
          <span className="brand-gradient-bar mt-5 block h-[3px] w-12 rounded-full" aria-hidden="true" />
          <Lead className="mt-5 text-text-2">{subtitulo}</Lead>
        </div>
      </Container>
    </section>
  );
}
