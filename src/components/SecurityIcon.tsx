/* Ícones em traço (18px) para a seção de segurança. Um glifo por tema. */
const paths: Record<string, React.ReactNode> = {
  pin: (
    <>
      <path d="M10 18s-5.5-5-5.5-9.5a5.5 5.5 0 0 1 11 0C15.5 13 10 18 10 18Z" />
      <circle cx="10" cy="8.5" r="2" />
    </>
  ),
  cadeado: (
    <>
      <rect x="4.5" y="9" width="11" height="8" rx="1.5" />
      <path d="M7 9V6.5a3 3 0 0 1 6 0V9" />
    </>
  ),
  chave: (
    <>
      <circle cx="7" cy="12" r="3.5" />
      <path d="M9.5 9.5 16 3m-2.5 2.5 2 2M11.5 7.5l2 2" />
    </>
  ),
  carimbo: (
    <>
      <path d="M10 2.5 4 5v4.5c0 3.6 2.6 6.6 6 7.5 3.4-.9 6-3.9 6-7.5V5l-6-2.5Z" />
      <path d="m7.5 10 1.8 1.8L12.8 8" />
    </>
  ),
  check: (
    <>
      <circle cx="10" cy="10" r="7.5" />
      <path d="m6.5 10 2.3 2.3L13.5 7.5" />
    </>
  ),
  olho: (
    <>
      <path d="M2.5 10s2.8-5 7.5-5 7.5 5 7.5 5-2.8 5-7.5 5-7.5-5-7.5-5Z" />
      <circle cx="10" cy="10" r="2.3" />
    </>
  ),
};

export function SecurityIcon({ nome }: { nome: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {paths[nome] ?? paths.check}
    </svg>
  );
}
