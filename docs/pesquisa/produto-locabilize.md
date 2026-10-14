# Locabilize — ficha de case (fontes: repo paulosc/imobiliaria e site locabilize.com.br, lidos em 14/10/2026)

> Uso interno. Não citar número de clientes, preço interno (R$ 250/mês não está publicado no site), nem o WhatsApp da landing sem o OK do Paulo.

## O que é
**Locabilize**, "Sistema completo para imobiliárias". Plataforma web multi-tenant para imobiliárias pequenas e administradoras de aluguel: imóveis (locação, venda, temporada), pessoas, contratos a partir de modelos, cobranças de aluguel com boleto e Pix emitidos na conta bancária da própria imobiliária (Sicoob, Sicredi ou Asaas), avisos por WhatsApp, repasses ao proprietário, vistorias, agenda de visitas, funil de interessados, vitrine pública em `locabilize.com.br/{slug}` ou domínio próprio, feed para portais de anúncio.

- Site, painel e vitrines: https://locabilize.com.br (SPA no Firebase Hosting). E-mail público: contato@locabilize.com.br.
- Headline: "A imobiliária inteira em um só lugar, do anúncio ao aluguel recebido". Público: "a imobiliária de bairro e de cidade do interior".
- Status: **em produção**. Último commit 09/10/2026 (134 commits desde 11/09/2026). Evidência indireta de pelo menos uma imobiliária real usando; clientes pagantes: incerto.

## Problema (texto da própria landing do Locabilize)
- Público: "Feito para a imobiliária de bairro e de cidade do interior". "Quem administra dezenas de aluguéis não precisa de um sistema caro e complicado."
- Dor: "parar de emitir boleto na mão" e "parar de refazer contrato no editor de texto". (A landing também cita o Instagram, mas essa parte não entra no site da Flowlyx.)
- Diferenciais da landing: dinheiro do aluguel cai direto na conta da imobiliária; tarifa do boleto é a do banco, sem taxa da plataforma; "funciona no computador e no celular sem instalar"; dados isolados por imobiliária.

## Funcionalidades implementadas (seguras para o site)
- Cadastro de imóveis com fotos, CEP automático, mapa, código automático, status e controle de chaves; importação em lote.
- Pessoas: proprietários, inquilinos, compradores, fiadores; corretores com comissões; usuários por papel (admin, corretor, financeiro).
- Contratos de locação, venda e administração a partir de modelos editáveis; importação de contrato em PDF/Word; reajuste anual por IGP-M, IPCA ou INPC consultado no Banco Central.
- Assinatura eletrônica própria do sistema (link por parte, conferência de CPF, PDF com página de comprovação) e anexo de PDF assinado por fora.
- Cobranças por competência com boleto e Pix na conta da imobiliária (Sicoob, Sicredi ou Asaas), conciliação e baixa automática, webhooks de pagamento.
- Avisos por WhatsApp (emissão, lembrete, vencimento, atraso); número próprio da imobiliária.
- Repasses ao proprietário e relatório anual por proprietário.
- Vistorias de entrada, saída e periódica, cômodo a cômodo, com fotos e laudo.
- Agenda de visitas; funil de interessados (novo → contato → visita → proposta → fechado); lista de espera.
- Vitrine pública por imobiliária, com domínio próprio opcional, formulário "Tenho interesse" e botão de WhatsApp.
- Feed para portais ZAP, Viva Real, OLX e Chaves na Mão; leads dos portais caem no funil.
- Cadastro por link com envio de documentos e conferência por OCR; portal do inquilino e do proprietário por link.
- LGPD: política, termos, consentimento, "Meus dados", exclusão de dados.
- Multi-tenant com dados isolados por imobiliária e credenciais cifradas.

## NÃO afirmar como funcionando
- Assinatura pela API do gov.br (indisponível para empresa privada; o que funciona é a assinatura própria).
- Instagram para qualquer imobiliária e Google Calendar aberto (dependem de revisão/aprovação de app na Meta e no Google).
- Portais Imovelweb e QuintoAndar (credenciamento em andamento).
- Geração e emissão de boletos em lote agendada (incerto).
- Consulta de crédito (Serasa/Boa Vista).

## Stack
React 19 + TypeScript + Vite + Tailwind 4; Firebase (Auth com Google, Firestore multi-tenant em `southamerica-east1`, Functions gen2 Node 22, Storage, Hosting); PDF via puppeteer; OCR no navegador.

## Marca
Ícone: pino de localização em degradê ciano → azul sobre elipse verde-menta, em quadrado azul-marinho `#0b1433`. Landing em indigo-600 e emerald-600, fonte Inter.
