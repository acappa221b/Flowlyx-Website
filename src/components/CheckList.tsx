/* Lista de funcionalidades com marca de check. Usada em produtos e cases. */
export function CheckList({ itens, columns = 1 }: { itens: readonly string[]; columns?: 1 | 2 }) {
  const texto = "text-text-2";
  const marca = "bg-paper-2 text-accent ring-line";
  return (
    <ul className={`grid gap-2.5 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {itens.map((i) => (
        <li key={i} className={`flex items-start gap-3 text-[15px] leading-relaxed ${texto}`}>
          <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ring-1 ${marca}`} aria-hidden="true">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6.5 5 9l4.5-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {i}
        </li>
      ))}
    </ul>
  );
}
