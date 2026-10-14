# Flowlyx — site institucional (flowlyx.com.br)

Site da Flowlyx, empresa de desenvolvimento de software sob medida. Mostra o que a empresa faz, os produtos (Axis, SóPede, Contabilidade, GeEm Next) e recebe pedidos de orçamento.

## Fatos fixos
- Domínio: `flowlyx.com.br`. Login do Axis: `https://axis.flowlyx.com.br`. SóPede: `https://sopede.com.br`.
- Firebase: projeto `flowlyx-website` (nº 345573944019), plano Blaze. Hosting serve a pasta `out/` (exportação estática do Next). Function `contato` em `southamerica-east1` recebe o formulário e envia e-mail.
- E-mail de contato: `flowlyxdev@gmail.com`.
- Sócios: Alexandre (acappa221b) e Paulo (paulosc).
- Idioma do site e dos commits: português do Brasil.

## Stack
Next.js 16 (App Router, `output: "export"`), React 19, TypeScript, Tailwind 4, fontes via `next/font` (Manrope + Inter). Sem servidor Next em produção. Formulário usa Firebase Functions (`functions/`).

## Comandos
```bash
npm run dev        # http://localhost:3000
npm run lint
npm run build      # gera out/
npm run deploy     # build + firebase deploy (hosting + functions)
```

## Estrutura
- `src/app/` páginas · `src/components/` componentes · `src/content/` todo texto e dados (produtos, site, serviços)
- `docs/pesquisa/` fichas dos produtos e design brief (fonte de verdade para números) · `docs/design/` sistema de design · `docs/gauntlet-loop.md` processo · `docs/gauntlet/` registro das rodadas
- `.claude/agents/` builder-ui, builder-copy, gauntlet-critic
- `functions/` Cloud Function do formulário de contato

## Regras
1. **Gauntlet Loop obrigatório** para qualquer mudança visível: builder → gauntlet-critic → corrigir → repetir até APROVADO. Ver `docs/gauntlet-loop.md`.
2. **Nenhum número ou afirmação sem fonte** em `docs/pesquisa/`. Não inventar clientes, métricas ou prazos.
3. **Confidencial**: GeEm Next é exclusivo de um cliente. Nunca publicar nome, CNPJ, pessoas ou valores. Só "indústria de componentes de borracha e plástico, cerca de 40 colaboradores".
4. Todo texto vive em `src/content/`. Componentes não têm texto fixo.
5. Só tokens de cor de `src/app/globals.css`. Degradê da marca no máximo 1 vez por página.
6. Server Components por padrão. `"use client"` só com estado ou evento.
7. Antes de commit: `npm run lint` e `npm run build` passam.
8. Esta versão do Next tem mudanças: ler `AGENTS.md` e `node_modules/next/dist/docs/` em dúvida.
