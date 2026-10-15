import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Button, Container, Eyebrow, ExternalIcon, Heading, Lead } from "@/components/ui";
import { contato, seo, site } from "@/content/site";

export const metadata: Metadata = seo.paginas.contato;

export default function ContatoPage() {
  return (
    <section className="bg-paper">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow>{contato.eyebrow}</Eyebrow>
            <Heading as="h1">{contato.titulo}</Heading>
            <span className="brand-gradient-bar mt-5 block h-[3px] w-12 rounded-full" aria-hidden="true" />
            <Lead className="mt-5 text-text-2">{contato.subtitulo}</Lead>
            <ol className="mt-10 space-y-6">
              {contato.passos.map((p, i) => (
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
            <div className="mt-10">
              <p className="text-sm text-text-2">
                {contato.prefereWhatsapp} <span className="whitespace-nowrap font-semibold text-text">{site.whatsapp}</span>
              </p>
              <Button href={site.whatsappLink} variant="secondary" className="mt-2 w-full sm:w-auto">
                {contato.whatsappBotao}
                <ExternalIcon />
              </Button>
            </div>
            <p className="mt-6 text-sm text-text-2">
              {contato.prefereEmail}{" "}
              <a href={`mailto:${site.email}`} className="inline-block py-2 font-semibold text-accent underline-offset-4 hover:underline">
                {site.email}
              </a>
            </p>
          </div>
          <div className="rounded-md border border-line bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
