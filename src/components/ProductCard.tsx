import Link from "next/link";
import { ArrowIcon, Badge } from "./ui";
import { statusLabel, type Produto } from "@/content/produtos";

const badgeTone = {
  "em-producao": "ok",
  "no-ar": "ok",
  "em-desenvolvimento": "info",
  exclusivo: "neutral",
} as const;

export function ProductCard({ produto }: { produto: Produto }) {
  const href = produto.slug === "geem-next" ? "/cases/#geem-next" : `/produtos/${produto.slug}/`;
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-md border border-line bg-paper p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-text-3/50 hover:shadow-card"
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2.5">
          <span className={`h-2.5 w-2.5 rounded-full ${produto.cor}`} aria-hidden="true" />
          <span className="font-display text-xl font-extrabold tracking-[-0.01em] text-text">{produto.nome}</span>
        </span>
        <Badge tone={badgeTone[produto.status]}>{statusLabel[produto.status]}</Badge>
      </div>
      <p className="mt-1 text-sm text-text-3">{produto.publico}</p>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-text-2">{produto.resumo}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        {produto.slug === "geem-next" ? "Ver o case" : "Conhecer"}
        <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
