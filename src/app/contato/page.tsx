import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container, Eyebrow, Heading, Lead } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Pedir orçamento",
  description: "Descreva o software que você procura. Estudamos o seu caso antes de responder, sem compromisso.",
};

const passos = [
  { titulo: "Você descreve", texto: "Tipo de sistema e o problema, em poucas linhas." },
  { titulo: "Nós estudamos", texto: "Lemos com calma e pesquisamos o seu caso antes de falar com você." },
  { titulo: "Conversamos", texto: "Respondemos por e-mail ou WhatsApp com perguntas e um caminho." },
];

export default function ContatoPage() {
  return (
    <section className="bg-paper">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow>Orçamento</Eyebrow>
            <Heading as="h1">Conte o que você precisa.</Heading>
            <Lead className="mt-5 text-text-2">
              Sem formulário gigante. Diga o tipo de software e descreva o problema. O resto a gente pergunta.
            </Lead>
            <ol className="mt-10 space-y-6">
              {passos.map((p, i) => (
                <li key={p.titulo} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper-2 font-display text-sm font-extrabold text-accent ring-1 ring-line">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{p.titulo}</p>
                    <p className="mt-0.5 text-[15px] text-text-2">{p.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-sm text-text-2">
              Prefere e-mail?{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-accent underline-offset-4 hover:underline">
                {site.email}
              </a>
            </p>
          </div>
          <div className="rounded-md border border-line bg-paper p-6 shadow-card sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
