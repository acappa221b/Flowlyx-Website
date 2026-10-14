# GeEm Next — ficha de case (fonte: repo acappa221b/GeEm-Next, lido em 14/10/2026)

> **CONFIDENCIAL.** Solução exclusiva para um cliente. No site, publicar só de forma anônima: "indústria de componentes de borracha e plástico, cerca de 40 colaboradores, duas empresas do mesmo grupo". Nunca publicar razão social, CNPJ, nomes de pessoas, valores financeiros ou caminhos internos sem autorização do cliente.

## O que é
Reengenharia completa do ERP de uma fábrica, escrito em Microsoft Access/VBA ao longo de muitos anos. O GeEm Next reconstrói a plataforma em **.NET 8 / WPF**, convivendo com o legado (estratégia *strangler fig*). Módulos novos já substituíram o Access: RH, Ponto Eletrônico, Estoque/Planejamento, Manutenção, automação da fábrica, WhatsApp. Está **em uso real na fábrica**.

## Problema
ERP monolítico (191 tabelas, 308 componentes VBA, 35.077 linhas), sem RH/ponto, sem emissão fiscal nativa, 135 riscos catalogados, autor original indisponível.

## Módulos em uso
RH (registro de funcionários, férias CLT, organograma, plano de carreira, salários, PLR, denúncias anônimas) · Ponto eletrônico (REP Control iD, painel de presença ao vivo) · Estoque/Planejamento (inventário com aprovação, estoque mínimo, NF de entrada por XML) · Qualidade (IT e POP) · Manutenção (app Android Flutter + API local) · Automação elétrica das prensas · Supervisório de produção · WhatsApp · Fiscal (NF-e pronta, não ativada).

## Stack
C# / .NET 8, WPF + MVVM, Clean Architecture (14 projetos + 12 de teste), banco Access via OleDb (migração futura para PostgreSQL/SQL Server), QuestPDF, Zeus NF-e, app Flutter, Node/Baileys. 100% offline/LAN. Deploy por scripts PowerShell.

## Números reais (publicáveis de forma anônima)
- 598 commits · 95 PRs · 311 entregas registradas em cerca de 14 semanas (07/07 → 14/10/2026), 2 pessoas
- 2.774 testes automatizados · 0 warnings
- Legado de 308 componentes VBA documentado a 100% em 2 dias
- 6.198 NF-e reais reprocessadas com 100% de paridade na chave de acesso
- 186 telas mapeadas, 117 entregues · 150 specs · 23 ADRs
- 5 integrações físicas/externas (relógio de ponto, relés, app Android, WhatsApp, XML NF-e)

## Marca do produto
Azul-marinho corporativo: Primary `#1E3A63`, Accent `#4E93CE`.
