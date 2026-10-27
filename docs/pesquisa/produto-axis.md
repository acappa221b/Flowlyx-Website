# Flowlyx Axis — ficha de produto (fonte: repo acappa221b/Flowlyx-Axis, lido em 14/10/2026)

> Uso interno. Não afirmar "usado por X escritórios". O site mostra o Axis como "Em construção" (decisão do Alexandre, 27/10/2026), com a lista abaixo do que já funciona em produção.

## Já funciona em produção (axis.flowlyx.com.br) — lido em 27/10/2026 (Axis P0161)
Lista confirmada pelo Alexandre. Regra do Axis (ADR-0026): só entra o que está publicado em produção e funcionando, sem pendência que impeça o uso.

- Entrada com conta Google ou e-mail e senha, permissões por módulo
- Marca própria do escritório (nome, logotipo, cores)
- Início com painéis configuráveis por pessoa
- Quadros de tarefas em tempo real
- Agenda com link iCal para a Google Agenda
- Cadastros: funcionários, clientes, empresas, prestadores e médicos; fichas de pessoa jurídica (clientes, empresas e prestadores) preenchidas pelo Cartão CNPJ
- RH do escritório: atestados, advertências, salários, exames ocupacionais, férias, resumo da folha
- Organograma, IT e POP
- Ponto: jornadas, apontamento, espelho e banco de horas (a ligação direta com o relógio ainda não está em uso)
- RH das empresas clientes
- Chat interno
- Atendimento WhatsApp multiatendente (somente reativo: responde quem chama, sem disparos)
- Notas de serviço NFS-e emitidas pelas próprias empresas atendidas (via ContabOffice)
- Orçamentos e propostas de honorários com catálogo de serviços (o link para o cliente aprovar e o PDF ainda não existem)
- Financeiro: contas a pagar e a receber, honorários e contas fixas, fluxo de caixa e DRE

**Não anunciar ainda**: cobrança pelo Asaas do escritório; integração com o Omie e tarefas automáticas do Financeiro; áudio que vira cartão; ligação direta com o relógio de ponto.

> O resto desta ficha é a leitura de 14/10/2026, mantida como histórico.

## O que é
Plataforma web SaaS multi-tenant para **escritórios de contabilidade**. Reúne em um só sistema o que hoje fica espalhado entre Domínio, Trello, Acessórias, Omie e planilhas. White-label: cada escritório configura nome, logo e cores. Frase oficial: **"Gestão do escritório de contabilidade em um só lugar."**

- Login (futuro): https://axis.flowlyx.com.br · Dev atual: https://flowlyx-axis-dev.web.app
- Status: **em desenvolvimento** ("Fundação em andamento"). 68 commits (09/10 → 14/10/2026). Produção vazia.

## Módulos com telas publicadas (dev)
Entrada e empresas (login Google, permissões por módulo, grupos) · Quadros Kanban (tempo real, etiquetas, arrastar) · Áudio que vira cartão (Whisper + Llama via Groq) · Agenda (visões, repetição, iCal p/ Google Agenda) · Recursos Humanos (atestados, salários, custo da folha, exames ocupacionais) · Cadastros (funcionários, clientes, empresas, prestadores, médicos; preencher pelo Cartão CNPJ) · Notas de serviço NFS-e (via ContabOffice) · Assinatura SaaS (Asaas, bloqueio por inadimplência) · Tela de roadmap dentro do app · Portal de Transparência (horas e custo por módulo).

## Roadmap (catalogado, não construído)
Dashboard, SST, Ordens de serviço, Preenchimento de PDF, Organograma/IT/POP, Orçamentos, Contratos, Financeiro do escritório, CND, Notas em lote, Alvarás, Integração Gov, Open Finance, Links de acesso para clientes, Atendimento WhatsApp.

## Stack
React 19 + TypeScript + Vite; Firebase (Auth, Firestore `southamerica-east1`, Functions Node 22, Hosting com CSP estrita); Secret Manager; Vitest + emulador. 11 agentes de harness obrigatórios antes de cada entrega. Spec Driven Development (17 specs, 24 ADRs).

## Números reais
- 24 módulos catalogados, 8 com telas publicadas
- 5 ferramentas que substitui (Domínio, Trello, Acessórias, Omie, planilhas)
- ~1.566 casos de teste · 2.151 linhas de regras de segurança
- 14 requisitos de segurança (SEC-01 a SEC-14) · dados no Brasil (São Paulo)

## Identidade visual do Axis
Tema escuro quente: fundo `#211c18`, texto creme `#f7f1e8`, destaque âmbar `#e9893b`. Fontes Source Serif 4 (títulos) + Inter. Símbolo: "A" geométrico. O site da Flowlyx usa a marca Flowlyx (ver docs/design), não a do Axis.

## Sobre a empresa (do repo)
Sócios: Alexandre (acappa221b) e Paulo (paulosc). Claude atua como CTO. Não há no repo: CNPJ, endereço, redes sociais. E-mail de contato informado pelo Alexandre em 14/10/2026: flowlyxdev@gmail.com.
