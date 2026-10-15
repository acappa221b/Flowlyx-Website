import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Medicao } from "@/components/Medicao";
import { cabecalho, seo, site } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", weight: ["700", "800"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.dominio),
  title: {
    default: `${site.nome} · ${seo.tituloPadrao}`,
    template: `%s · ${site.nome}`,
  },
  description: site.descricao,
  keywords: [...seo.palavrasChave],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
    title: `${site.nome} · ${seo.tituloPadrao}`,
    description: site.descricao,
    images: [{ url: "/marca/og.png", width: 1200, height: 630, alt: `${site.nome} · ${site.slogan}` }],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-surface focus:px-4 focus:py-2 focus:text-text"
        >
          {cabecalho.pularParaConteudo}
        </a>
        <JsonLd />
        <Medicao />
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
