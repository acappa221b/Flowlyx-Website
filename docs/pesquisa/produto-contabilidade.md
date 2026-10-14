# Contabilidade / ContabOffice — ficha de produto (fonte: repo paulosc/contabilidade, lido em 14/10/2026)

> Uso interno. Não afirmar número de clientes ou notas processadas; o repo não traz isso.

## O que é
Sistema web multiempresa para **escritório de contabilidade**. Recebe NF-e e NFS-e direto dos ambientes nacionais, emite NFS-e, gera DAS/DARF pela Receita (Serpro Integra Contador), calcula folha e 13º, faz escrituração (OFX, conciliação, balancete, DRE, balanço), calendário de obrigações, documentos do cliente, contrato e honorários com PIX. Princípio: **tudo que fala com o governo usa serviço oficial**, sem scraping, sem API de terceiro.

- Nome no deploy ao vivo: **ContabOffice** (https://contabilidade-a9d35.web.app). Nome no repo: "Contabilidade".
- Status: no ar (Firebase Hosting). 55 commits (17–19/09/2026). Versão 0.1.0. Sem evidência de clientes no repo.

## Módulos (12)
Painel · Carteira de clientes · Obrigações (24 obrigações, prazo em dia útil) · Documentos · NF-e (busca a cada 60 min) · NFS-e (receber, emitir, substituir, cancelar; DANFSe) · Simples Nacional (RBT12, Fator R) · Contabilidade (OFX, partidas dobradas, 79 contas ITG 1000, DRE, balanço) · Guias (DAS/DARF, PIX copia e cola, link com confirmação de leitura) · Folha (INSS/IRRF/FGTS por vigência, holerite, 13º, lucros) · Contrato (CFC 1.590/2020) · Configurações (cadastro pelo PDF do Cartão CNPJ, certificado A1) · Sandbox split payment (Reforma Tributária).

## Stack
React 19 + Vite + Tailwind 4; Firebase Functions gen2 Node 22 em `southamerica-east1`; Firestore multi-tenant; certificados e chaves cifrados (AES-256-GCM + Secret Manager); PWA.

## Integrações oficiais (6)
SEFAZ (NFeDistribuicaoDFe), ADN NFS-e nacional, SEFIN Nacional, ABRASF 2.02, Serpro Integra Contador, PIX/BCB.

## Números reais
- 12 módulos · 24 obrigações · 374 testes automatizados · 69 operações de backend · 5.571 municípios · ~29 mil linhas TS

## Marca
Site ao vivo: azul-marinho `#05285f`, fundo `#f8fafc`, fonte Inter. Ícone: recibo com visto.
