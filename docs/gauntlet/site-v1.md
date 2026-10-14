# Gauntlet — site v1 (todas as páginas)

## Rodada 1 — 14/10/2026
**Veredito: REPROVADO.** Notas: Clareza 7 · Hierarquia 7 · Design 6 · Marca 7 · Texto 7 · Verdade 4 · Responsivo 8 · Acessibilidade 6 · Código 7.

Bloqueadores apontados e o que foi feito:
- Números e frases sem fonte (prazo "em semanas", "hora a hora", "dentro da LGPD", "lojas pagantes", "iOS", narrativa do SóPede, detalhes do Axis/Contabilidade) → texto reescrito só com fatos de `docs/pesquisa/`.
- Contraste do cinza `#7b879a` (3,6:1) → token `--text-3` virou `#5b6b82` (5,4:1).
- Menu "Acessar" com `role="menu"` incompleto → virou lista simples, fecha ao perder foco, rótulo "Entrar", mostra "Em construção" no Axis.
- Cabeçalhos H1 → H3 sem H2 em /solucoes, /produtos/[slug] e /sobre → H2 adicionados.
- Texto fixo dentro de componentes → tudo movido para `src/content/`.
- `og.png` inexistente → referência removida até o arquivo existir.
- Card do GeEm Next quebrando em 4 colunas → `flex-wrap` + badge curto "Exclusivo".
- "Fundador", pílulas de tecnologia e avatar "PC" em /sobre → removidos.

Melhorias aplicadas: `ChamadaFinal` único para páginas internas; traço em degradê no `PageHero` (1 detalhe de marca por página); ícones distintos na seção de segurança; sombra só em cards clicáveis; rótulos de status legíveis ("Em uso por clientes", "Disponível", "Em construção", "Exclusivo"); "Entrar no ContabOffice"; alvos de toque no rodapé e no formulário; `badgeTone` centralizado; botão `inverse` com borda visível.

Pendências que dependem do Alexandre (não são código):
- CNPJ e cidade em `src/content/site.ts` (rodapé e política de privacidade).
- `axis.flowlyx.com.br` ainda não resolve: o link fica no site por decisão do Alexandre, marcado "Em construção". Apontar o domínio no Firebase do Axis.
- `public/marca/og.png` (1200×630) a partir do banner oficial.
- Foto do Paulo (opcional) para a seção "Quem constrói".

Mudança pedida pelo Alexandre durante a rodada: fundo claro azul-gelo (`#F2F6FB`) em vez de branco; cartões, cabeçalho e campos ficam brancos (`--surface`).

Segunda mudança pedida pelo Alexandre antes da rodada 2: produtos e cases mostram só o que já funciona em produção; nenhuma métrica de desenvolvimento (testes, commits, telas). Os blocos de números viraram listas "Já funciona hoje" (`CheckList`). Regra 2b no `CLAUDE.md`.

## Rodada 2 — 14/10/2026
**Veredito: REPROVADO.** Notas: Clareza 9 · Hierarquia 8 · Design 8 · Marca 9 · Texto 8 · Verdade 6 · Responsivo 8 · Acessibilidade 8 · Código 8.

Bloqueadores apontados e o que foi feito:
- "9 produtos próprios" sem fonte → "8 produtos próprios no ar hoje", conta registrada em `docs/pesquisa/equipe.md`.
- "No Axis, horas e custo aparecem no sistema" na seção de segurança (produto em construção) → texto neutro.
- Contraste do azul `#2563eb` sobre `--paper-2` (4,47:1) → `--accent` virou `#1d4ed8` (6,8:1).
- SóPede: "cancela quando quiser" e "status muda sozinho" sem fonte → removidos.
- GeEm Next: "hora a hora" e "com fotos e PDF" sem fonte → removidos.
- /sobre: Axis listado como "em uso" → corrigido. /cases: "números reais" sem números → subtítulo novo.
- Texto fixo em Footer, ContactForm, Header, ProductCard, layout e /privacidade → movido para `src/content/site.ts` (`cabecalho`, `rodape`, `formulario`, `privacidade`).

Melhorias aplicadas: "Entrar" visível no tablet; badge em linha própria no card de produto (4 cards alinhados); setor abaixo do título no case da home; aviso "E mais na página do produto"; botões largura total no celular; links do rodapé com 44px; H2 "De 2008 até hoje" em /sobre; código morto removido (`ghost`, `interactive`, `Stat tone`, `CheckList tone`).

## Rodada 3 — 14/10/2026
**Veredito: REPROVADO.** Notas: Clareza 9 · Hierarquia 9 · Design 9 · Marca 9 · Texto 9 · Verdade 7 · Responsivo 9 · Acessibilidade 9 · Código 8.

Bloqueadores apontados e o que foi feito:
- "Aplicativo Android" sem fonte de publicação → "Aplicativo no celular"; ficha do SóPede anotada.
- /solucoes citava o Axis (em construção) como exemplo do que já construímos → exemplos trocados por Contabilidade e SóPede.
- "O sistema é seu" (promessa contratual sem fonte) → "Você vê o código nascer".
- Títulos e descrições das páginas, rótulos `aria-label` e campo-armadilha fixos → objeto `seo` e campos novos em `src/content/site.ts`.

Melhorias aplicadas: animação do hero em 250 ms; frases do Contabilidade e do Axis ajustadas à ficha; "backend" e "SaaS" trocados por palavras simples; link do e-mail na política com 44 px; título na página 404; espaçamento do badge no hero do produto.

## Rodada 4 — 14/10/2026
**Veredito: APROVADO.** Notas: Clareza 9 · Hierarquia 9 · Design 9 · Marca 9 · Texto 9 · Verdade 9 · Responsivo 9 · Acessibilidade 9 · Código 9. Zero bloqueadores.

Melhorias opcionais aplicadas depois do veredito: links "Ver todos" com 44 px; logotipo do cabeçalho com 44 px; exemplo de automação sem citar o áudio do Axis; nome da marca no logotipo vem de `site.nome`.

Resultado: site v1 aprovado e commitado. Próximos passos fora do código estão em `README.md` (Firestore, senha de app do Gmail, domínio) e nos TODO de `src/content/site.ts` (CNPJ, cidade) e `src/app/layout.tsx` (og.png).
