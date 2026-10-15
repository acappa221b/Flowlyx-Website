import { produtos } from "@/content/produtos";
import { seo, site } from "@/content/site";

/* Dados estruturados para o Google (schema.org). Renderizado uma vez, no layout. */
export function JsonLd() {
  const organizacao = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.dominio}/#organizacao`,
    name: site.nome,
    url: site.dominio,
    logo: `${site.dominio}/marca/icone-512.png`,
    image: `${site.dominio}/marca/og.png`,
    description: site.descricao,
    email: site.email,
    telephone: site.whatsappE164,
    taxID: site.cnpj,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Conceição dos Ouros",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    areaServed: { "@type": "Country", name: "Brasil" },
    knowsAbout: seo.palavrasChave,
    contactPoint: { "@type": "ContactPoint", telephone: site.whatsappE164, contactType: "sales", availableLanguage: "Portuguese" },
    makesOffer: produtos
      .filter((p) => p.slug !== "geem-next" && p.status !== "em-desenvolvimento")
      .map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "SoftwareApplication", name: p.nome, description: p.resumo, applicationCategory: "BusinessApplication" },
      })),
  };
  const siteWeb = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.dominio}/#site`,
    url: site.dominio,
    name: site.nome,
    inLanguage: "pt-BR",
    publisher: { "@id": `${site.dominio}/#organizacao` },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizacao) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteWeb) }} />
    </>
  );
}
