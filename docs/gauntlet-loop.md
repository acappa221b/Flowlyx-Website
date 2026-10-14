# Gauntlet Loop — como o site é construído

Toda entrega visível ao visitante passa por um corredor polonês ("gauntlet"): um agente constrói, outro critica, e o ciclo repete até o crítico dizer **APROVADO**. O crítico só aprova quando a entrega está WOW: clara, limpa, refinada e verdadeira.

## Papéis (agentes em `.claude/agents/`)
| Agente | Faz |
|---|---|
| `builder-ui` | Constrói e corrige páginas, seções e componentes. |
| `builder-copy` | Escreve e corrige texto, só com fatos de `docs/pesquisa/`. |
| `gauntlet-critic` | Avalia no navegador e no código. Dá notas 0–10 em 9 critérios. Aprova só com todas ≥ 9 e zero bloqueadores. |

## O ciclo
```
tarefa → builder entrega → critic avalia
            ↑                   │
            └── REPROVADO ──────┘  (corrige só o que foi apontado)
                                └── APROVADO → commit
```

Regras:
1. Uma tarefa = uma página ou uma seção. Nunca "o site inteiro".
2. O builder corrige **só** o que o crítico apontou. Sem retrabalho aleatório.
3. Máximo de 4 rodadas por tarefa. Se não aprovar na 4ª, a tarefa volta para o Alexandre decidir.
4. Cada rodada fica registrada em `docs/gauntlet/<tarefa>.md` (veredito, notas, o que mudou).
5. Nada é commitado sem APROVADO.

## Como rodar (no Claude Code)
1. "Use o agente builder-ui para construir a seção X da página Y."
2. "Use o agente gauntlet-critic para avaliar a seção X da página Y."
3. Se REPROVADO: "Use o builder-ui (ou builder-copy) para corrigir os bloqueadores e melhorias apontados."
4. Repita 2–3 até APROVADO. Registre em `docs/gauntlet/`.

## A régua WOW (resumo)
Clareza · Hierarquia · Design · Marca · Texto · Verdade · Responsivo · Acessibilidade · Código. Detalhe em `.claude/agents/gauntlet-critic.md`.
