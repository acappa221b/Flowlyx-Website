import type { Metadata } from "next";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { privacidade, seo, site } from "@/content/site";

export const metadata: Metadata = seo.paginas.privacidade;

export default function PrivacidadePage() {
  return (
    <section className="bg-paper">
      <Container className="py-16 md:py-20">
        <div className="max-w-2xl">
          <Eyebrow>{privacidade.eyebrow}</Eyebrow>
          <Heading as="h1">{privacidade.titulo}</Heading>
          <span className="brand-gradient-bar mt-5 block h-[3px] w-12 rounded-full" aria-hidden="true" />
          <p className="mt-5 text-sm text-text-3">{privacidade.atualizadaEm}</p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-text-2">
            {privacidade.secoes.map((s) => (
              <div key={s.titulo}>
                <h2 className="font-display text-xl font-extrabold text-text">{s.titulo}</h2>
                <p className="mt-2">
                  {s.texto}
                  {"comEmail" in s && s.comEmail && (
                    <>
                      {" "}
                      <a className="inline-block py-2 text-accent underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                        {site.email}
                      </a>
                      {site.cnpj ? ` CNPJ ${site.cnpj}.` : "."}
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
