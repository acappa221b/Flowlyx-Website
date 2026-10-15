import type { Metadata } from "next";
import { Painel } from "@/components/Painel";
import { painel } from "@/content/site";

export const metadata: Metadata = {
  title: painel.tituloAba,
  robots: { index: false, follow: false },
};

export default function PainelPage() {
  return <Painel />;
}
