import Link from "next/link";
import type { ReactNode } from "react";
import { acessibilidade, cta } from "@/content/site";

/* Container padrão: 1152px, gutter 20/24px */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 ${className}`}>{children}</div>;
}

type SectionProps = {
  children: ReactNode;
  tone?: "paper" | "paper-2" | "ink";
  className?: string;
  id?: string;
};

/* Seção com ritmo vertical fixo (64px mobile / 96px desktop) */
export function Section({ children, tone = "paper", className = "", id }: SectionProps) {
  const tones = {
    paper: "bg-paper text-text",
    "paper-2": "bg-paper-2 text-text",
    ink: "bg-ink-950 text-text-inverse",
  };
  return (
    <section id={id} className={`py-16 md:py-24 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p
      className={`mb-3 text-xs font-semibold uppercase tracking-[0.14em] ${
        tone === "light" ? "text-accent-dark" : "text-accent"
      }`}
    >
      {children}
    </p>
  );
}

type HeadingProps = { children: ReactNode; className?: string; as?: "h1" | "h2" | "h3" };

export function Heading({ children, className = "", as = "h2" }: HeadingProps) {
  const Tag = as;
  const sizes = {
    h1: "text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.05]",
    h2: "text-3xl sm:text-4xl leading-[1.1]",
    h3: "text-xl leading-snug",
  };
  return (
    <Tag className={`font-display font-extrabold tracking-[-0.02em] text-balance ${sizes[as]} ${className}`}>
      {children}
    </Tag>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-lg leading-relaxed text-pretty sm:text-xl ${className}`}>{children}</p>;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "inverse";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-colors duration-150 whitespace-nowrap";
  const sizes = { md: "h-11 px-5 text-[15px]", lg: "h-12 px-6 text-base" };
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-strong",
    secondary: "border border-line bg-surface text-text hover:border-text-3 hover:bg-paper-2",
    inverse: "border border-text-inverse/30 bg-transparent text-text-inverse hover:bg-ink-800 hover:border-text-inverse/50",
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const isExternal = external ?? /^(https?:|mailto:)/.test(href);
  if (isExternal) {
    return (
      <a href={href} className={cls} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
        {children}
        {!href.startsWith("mailto:") && <span className="sr-only">{acessibilidade.novaAba}</span>}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExternalIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M6 3H3v10h10v-3M9 3h4v4M13 3 7 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type CardProps = {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "ink";
};

/* Card neutro, borda fina, sem sombra (sombra só em cards clicáveis, que têm estilo próprio) */
export function Card({ children, className = "", tone = "paper" }: CardProps) {
  const tones = {
    paper: "border-line bg-surface",
    ink: "border-ink-700 bg-ink-900",
  };
  return <div className={`rounded-md border p-6 ${tones[tone]} ${className}`}>{children}</div>;
}

type BadgeTone = "ok" | "info" | "warn" | "neutral";
export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: BadgeTone }) {
  const tones: Record<BadgeTone, string> = {
    ok: "bg-green-50 text-green-800 ring-green-200",
    info: "bg-blue-50 text-blue-800 ring-blue-200",
    warn: "bg-amber-50 text-amber-800 ring-amber-200",
    neutral: "bg-paper-2 text-text-2 ring-line",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/* Número grande + rótulo */
export function Stat({ valor, rotulo }: { valor: string; rotulo: string }) {
  return (
    <div>
      <p className="font-display text-3xl font-extrabold tracking-[-0.02em] text-text sm:text-4xl">{valor}</p>
      <p className="mt-1 text-sm leading-snug text-text-2">{rotulo}</p>
    </div>
  );
}

/* Chamada final padrão das páginas internas: caixa navy + CTA primário */
export function ChamadaFinal({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <div className="flex flex-col items-start gap-6 rounded-md bg-ink-950 p-8 text-text-inverse md:flex-row md:items-center md:justify-between md:p-10">
      <div>
        <Heading className="text-text-inverse">{titulo}</Heading>
        <p className="mt-2 text-text-inverse-2">{texto}</p>
      </div>
      <Button href={cta.primario.href} size="lg">
        {cta.primario.label}
        <ArrowIcon />
      </Button>
    </div>
  );
}
