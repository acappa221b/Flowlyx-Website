import type { Metadata } from "next";
import { ArrowIcon, Button, Container, Heading, Lead } from "@/components/ui";
import { naoEncontrada } from "@/content/site";

export const metadata: Metadata = { title: naoEncontrada.titulo };

export default function NotFound() {
  return (
    <section className="bg-paper">
      <Container className="py-24 text-center md:py-32">
        <p className="font-display text-sm font-extrabold text-text-3">{naoEncontrada.rotulo}</p>
        <Heading as="h1" className="mt-3">
          {naoEncontrada.titulo}
        </Heading>
        <Lead className="mx-auto mt-4 max-w-md text-text-2">{naoEncontrada.texto}</Lead>
        <div className="mt-8">
          <Button href="/" size="lg">
            {naoEncontrada.botao}
            <ArrowIcon />
          </Button>
        </div>
      </Container>
    </section>
  );
}
