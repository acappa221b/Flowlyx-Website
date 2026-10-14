import { ArrowIcon, Button, Container, Heading, Lead } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <Container className="py-24 text-center md:py-32">
        <p className="font-display text-sm font-extrabold text-text-3">Erro 404</p>
        <Heading as="h1" className="mt-3">
          Essa página não existe.
        </Heading>
        <Lead className="mx-auto mt-4 max-w-md text-text-2">O endereço pode ter mudado. Volte para o início e siga de lá.</Lead>
        <div className="mt-8">
          <Button href="/" size="lg">
            Ir para o início
            <ArrowIcon />
          </Button>
        </div>
      </Container>
    </section>
  );
}
