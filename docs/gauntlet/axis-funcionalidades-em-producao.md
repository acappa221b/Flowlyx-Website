# Gauntlet — Axis: lista do que já funciona em produção

Primeira atualização pela regra do Axis (ADR-0026, prompt P0161 do repositório do Axis). Lista confirmada pelo Alexandre; selo "Em construção" mantido por decisão dele.

## Rodada 1 — 27/10/2026
**Veredito: REPROVADO.** Notas: Clareza 7 · Hierarquia 8 · Design 9 · Marca 9 · Texto 8 · Verdade 7 · Responsivo 9 · Acessibilidade 9 · Código 9.

Bloqueadores e o que foi feito:
- "Preenchidos pelo Cartão CNPJ" valia para todos os cadastros, inclusive pessoas físicas → "empresas preenchidas pelo Cartão CNPJ"; a ficha diz quais fichas (pessoa jurídica).
- "O que o Axis vai fazer" (futuro) ao lado de "Já funciona hoje" → "O que o Axis já faz".
- Descrição no futuro e citando o Omie (que não está anunciado) → descrição no presente, sem nomes de outros programas.

Melhorias aplicadas: lista reordenada, com o que mais interessa ao contador primeiro (o card de /produtos mostra os 6 primeiros); WhatsApp "respondendo quem chama"; ficha diz que a NFS-e é emitida pelas próprias empresas atendidas; comentário de `produtos.ts` alinhado com a regra 2b.

## Rodada 2 — 27/10/2026
**Veredito: APROVADO.** Todas as notas em 9, zero bloqueadores. Ajuste final: a ficha diz que o Cartão CNPJ preenche clientes, empresas e prestadores (pessoa jurídica). Melhoria opcional não aplicada: trocar "apontamento" por "marcações" no item do Ponto (o público do Axis conhece o termo).
