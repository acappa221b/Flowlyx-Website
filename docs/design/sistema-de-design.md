# Sistema de design — Flowlyx

Fonte da verdade: `src/app/globals.css` (tokens). Este arquivo explica o porquê.

## Marca (dos arquivos enviados pelo Alexandre em 14/10/2026)
- Símbolo: chaves `{ }` brancas com uma **onda em degradê ciano → roxo** no centro. Reproduzido em vetor em `src/components/Logo.tsx` e `public/marca/`.
- Wordmark: "Flowlyx" em sans-serif geométrica, peso 800.
- Slogan: **"Produtividade em fluxo"**, em caixa alta, espaçado.
- Fundo da marca: azul-marinho escuro com leve vinheta.

## Cores
| Token | Valor | Uso |
|---|---|---|
| `--ink-950` | `#0A1220` | fundo mais escuro (hero, rodapé) |
| `--ink-900` | `#0F1A2B` | fundo escuro padrão |
| `--ink-800` | `#152238` | superfície escura |
| `--ink-700` | `#1F2F4A` | borda em fundo escuro |
| `--paper` | `#FFFFFF` | fundo claro |
| `--paper-2` | `#F4F7FB` | seção alternada |
| `--line` | `#E3E9F1` | borda em fundo claro |
| `--text` | `#0F172A` | texto principal |
| `--text-2` | `#4B5970` | texto secundário |
| `--brand-cyan` | `#38C6F4` | ponta clara do degradê |
| `--brand-indigo` | `#6366F1` | ponta escura do degradê |
| `--accent` | `#2563EB` | CTA e links em fundo claro |
| `--accent-dark` | `#5EA8FF` | links em fundo escuro |

O degradê `linear-gradient(90deg, #38C6F4, #6366F1)` é **exclusivo** para: a onda do logo, o sublinhado da marca e no máximo 1 detalhe por página. Nunca como fundo de seção.

Por quê navy: é a cor mais associada a confiança, estabilidade e segurança; é o que bancos e fintechs usam. O ciano/roxo da onda traz energia sem perder a seriedade.

## Tipografia (Google Fonts, via next/font, auto-hospedadas)
- Títulos: **Manrope** 700/800, tracking −0.02em.
- Texto: **Inter** 400/500/600, corpo 16–18px, line-height 1.6.
- Rótulos pequenos (eyebrow): Inter 600, caixa alta, tracking 0.12em.

## Formas e ritmo
- Raio: 8px (botões, inputs), 12px (cards). Nunca acima de 16px.
- Borda 1px; sombra só em hover, suave.
- Seções: padding vertical 96px (desktop) / 64px (mobile). Container 1152px.
- Animação: 150–250ms, só fade/slide curto. Respeitar `prefers-reduced-motion`.
- Acessibilidade: WCAG 2.2 AA, contraste mínimo 4.5:1, foco visível.
