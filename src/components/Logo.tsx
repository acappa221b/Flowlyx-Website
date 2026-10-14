type LogoProps = {
  /** Altura do símbolo em px. */
  size?: number;
  /** Mostra o nome "Flowlyx" ao lado do símbolo. */
  wordmark?: boolean;
  /** Cor das chaves e do nome. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Símbolo da Flowlyx: chaves { } com a onda em degradê ciano → roxo.
 * Vetor fiel ao ícone oficial (public/marca/).
 */
export function Logo({ size = 28, wordmark = true, tone = "dark", className = "" }: LogoProps) {
  const ink = tone === "light" ? "#F3F6FA" : "#0F172A";
  const id = `flowlyx-wave-${tone}`;
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        role="img"
        aria-label="Flowlyx"
        className="shrink-0"
      >
        <defs>
          <linearGradient id={id} x1="22" y1="32" x2="42" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#38C6F4" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
        </defs>
        <g fill="none" stroke={ink} strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 8c-6 0-8 2.5-8 8v9c0 4.5-2 6.5-6 7 4 .5 6 2.5 6 7v9c0 5.5 2 8 8 8" />
          <path d="M40 8c6 0 8 2.5 8 8v9c0 4.5 2 6.5 6 7-4 .5-6 2.5-6 7v9c0 5.5-2 8-8 8" />
        </g>
        <path
          d="M23 33c3-6 6-6 9 0s6 6 9 0"
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth="4.2"
          strokeLinecap="round"
        />
      </svg>
      {wordmark && (
        <span
          className="font-display text-[1.25rem] font-extrabold tracking-[-0.02em]"
          style={{ color: ink }}
        >
          Flowlyx
        </span>
      )}
    </span>
  );
}
