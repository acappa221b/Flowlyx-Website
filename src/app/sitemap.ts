import type { MetadataRoute } from "next";
import { produtos } from "@/content/produtos";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.dominio;
  const fixas = ["", "/solucoes/", "/produtos/", "/cases/", "/sobre/", "/contato/", "/privacidade/"];
  const prods = produtos.filter((p) => p.slug !== "geem-next").map((p) => `/produtos/${p.slug}/`);
  return [...fixas, ...prods].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
