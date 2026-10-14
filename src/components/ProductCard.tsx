import Link from "next/link";
import { ArrowIcon, Badge } from "./ui";
import { badgeTone, paginaProdutos, statusLabel, type Produto } from "@/content/produtos";

export function ProductCard({ produto }: { produto: Produto }) {
  const exclusivo = produto.slug === "geem-next";
  const href = exclusivo ? "/cases/#geem-next" : `/produtos/${produto.slug}/`;
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-md border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-text-3/50 hover:shadow-card"
    >
      <div>
        <Badge tone={badgeTone[produto.status]}>{statusLabel[produto.status]}</Badge>
      </div>
      <span className="mt-3 flex items-center gap-2.5">
        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${produto.cor}`} aria-hidden="true" />
        <span className="font-display text-xl font-extrabold tracking-[-0.01em] text-text">{produto.nome}</span>
      </span>
      <p className="mt-1 text-sm text-text-3">{produto.publico}</p>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-text-2">{produto.resumo}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        {exclusivo ? paginaProdutos.verCase : paginaProdutos.conhecerCurto}
        <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
