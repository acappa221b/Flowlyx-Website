import type { Metadata } from "next";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como a Flowlyx trata os dados enviados pelo site flowlyx.com.br.",
};

export default function PrivacidadePage() {
  return (
    <section className="bg-paper">
      <Container className="py-16 md:py-20">
        <div className="max-w-2xl">
          <Eyebrow>Privacidade</Eyebrow>
          <Heading as="h1">Política de privacidade</Heading>
          <p className="mt-3 text-sm text-text-3">Última atualização: 14 de outubro de 2026.</p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-text-2 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-text">
            <div>
              <h2>Quem somos</h2>
              <p className="mt-2">
                Este site pertence à {site.nome}{site.cnpj ? `, CNPJ ${site.cnpj}` : ""}. Para qualquer assunto sobre
                dados pessoais, escreva para <a className="text-accent underline-offset-4 hover:underline" href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </div>
            <div>
              <h2>Quais dados coletamos</h2>
              <p className="mt-2">
                Só o que você digita no formulário de orçamento: nome, e-mail, empresa e WhatsApp (se informar), o tipo de software
                e a descrição do que precisa. O site não usa cookies de rastreamento nem ferramentas de publicidade.
              </p>
            </div>
            <div>
              <h2>Para que usamos</h2>
              <p className="mt-2">
                Para estudar o seu pedido e responder. Não vendemos, não compartilhamos e não usamos seus dados para
                enviar propaganda.
              </p>
            </div>
            <div>
              <h2>Onde ficam e por quanto tempo</h2>
              <p className="mt-2">
                Os pedidos são guardados em servidores do Google Cloud na região de São Paulo e enviados por e-mail para a
                equipe da Flowlyx. Guardamos por até 12 meses após o último contato, ou até você pedir a exclusão.
              </p>
            </div>
            <div>
              <h2>Seus direitos</h2>
              <p className="mt-2">
                Pela Lei Geral de Proteção de Dados (LGPD), você pode pedir acesso, correção ou exclusão dos seus dados a
                qualquer momento pelo e-mail acima. Respondemos em até 15 dias.
              </p>
            </div>
            <div>
              <h2>Sistemas da Flowlyx</h2>
              <p className="mt-2">
                O Axis, o SóPede e o Contabilidade têm políticas próprias, disponíveis dentro de cada sistema.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
