# SóPede — ficha de produto (fonte: repo paulosc/pedfood, lido em 14/10/2026)

> Uso interno. Antes de publicar qualquer número de clientes, pedidos ou cidades, confirmar com o Paulo. O repo não traz esses dados.

## O que é
SaaS de pedidos para restaurantes. Cada loja tem seu canal próprio de venda (link `sopede.com.br/nome-da-loja`, QR Code na mesa, PWA e app nativo). Mensalidade fixa, **sem comissão por pedido**. O pedido nasce no cardápio digital, cai em tempo real no painel de cozinha (KDS) com alarme, sai na impressora térmica e o cliente acompanha o status no celular. Cobre delivery, retirada, balcão e salão (mesas, comandas NFC, garçom).

- Site: https://sopede.com.br · Painel: https://painel.sopede.com.br · Demo: https://sopede.com.br/demo
- E-mail: contato@sopede.com.br
- Status: **em produção**, com lojas pagantes desde out/2026. Tag de produção mais recente: `prod-20261013-0905`.

## Público
Restaurantes, lanchonetes, pizzarias, bares, marmitarias, comida por quilo. Foco declarado: cidades pequenas sem iFood, começando pelo sul de Minas. Venda direta + representantes comissionados; autocadastro em 4 telas.

## Funcionalidades reais
- KDS em colunas (novo / preparo / pronto / a caminho), alarme em loop, aceite/recusa, histórico, fechamento do dia.
- Cardápio: categorias, adicionais, tamanhos, pizza meia a meia, promoções, esgotado, prato do dia, agenda semanal.
- Importação de cardápio por IA (foto/print/texto → itens) com Gemini 2.5 Flash; 1.284 fotos-placeholder.
- Taxa por bairro / cidade / distância (mapa), pedido mínimo, formas de pagamento.
- Balcão, venda por preço digitado, venda por quilo com balança (Web Serial).
- Salão: mesas, QR por mesa, comanda por cartão NFC, divisão de conta, taxa de serviço, modo offline.
- Impressão: navegador, USB, Bluetooth, RawBT e agente Windows "SóPede Impressão" (Microsoft Store).
- Entregadores, estoque e ficha técnica, faturamento, WhatsApp (Cloud API ou agente local, respostas por regras).
- Assinatura via Asaas, PIX no app via Mercado Pago, NFS-e/NFC-e via ContabOffice.
- Admin da plataforma: MRR, GMV, aprovação de lojas, cupons, representantes.

## Stack
React 19 + Vite + TypeScript (painel e cliente web PWA), Flutter (app, v2.8.0), Firebase (Auth, Firestore em `southamerica-east1`, Functions Node 22, Hosting, FCM), agente de impressão .NET, agente WhatsApp Node/Baileys.

## Números reais
- 94 Cloud Functions · ~50 coleções com regras · 53 telas (34 painel + 9 web + 10 app)
- 9 status de pedido · 6 papéis de usuário · até 10 lojas por conta
- 41 scripts de teste + 27 casos de security rules · pentest (ago/2026) sem achados críticos/altos
- 435 commits em ~8 semanas (15/08 → 07/10/2026)

## Marca
Laranja `#f97316` (ações), laranja escuro `#dd5c07`, azul-marinho `#12294d`. Slogans: "Pediu, chegou!", "Seu delivery próprio, sem comissão". Planos no código: Gratuito (20 pedidos/mês) e Ilimitado R$ 120/mês.
