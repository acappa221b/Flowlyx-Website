# Gauntlet — WhatsApp, SEO e painel privado

## Rodada 1 — 15/10/2026
**Veredito: REPROVADO.** Notas: Clareza 9 · Hierarquia 9 · Design 8 · Marca 9 · Texto 8 · Verdade 6 · Responsivo 7 · Acessibilidade 8 · Código 8.

Bloqueadores e o que foi feito:
- Canônica global no layout fazia todas as páginas apontarem para a home → removida; cada página tem a sua canônica.
- Botão do WhatsApp com o número dentro estourava em 360 px → número saiu do botão, fica na frase acima.
- Política de privacidade não citava referrer, UTM, IP e navegador → texto completo e verdadeiro.
- WhatsApp sem fonte em `docs/pesquisa/` → registrado em `equipe.md`.
- `aria-label` fixo no painel → movido para o conteúdo.

Melhorias aplicadas: recusa de origem estranha nas funções; referrer só como domínio; `globalPrivacyControl`; erro de login tratado; eyebrow "Uso interno"; "Páginas vistas por dia" com texto para leitor de tela; badge "E-mail não enviado"; "Atualizado às"; JSON-LD com telefone E.164 e `contactPoint`, sem o Axis; títulos mais curtos; mensagem do WhatsApp legível; número do rodapé sem quebra; `Disallow` do robots removido (fica o `noindex`).

Decisão: lista de e-mails do painel continua no código da função (repositório privado).

## Rodada 2 — 15/10/2026
**Veredito: REPROVADO.** Notas: Clareza 9 · Hierarquia 9 · Design 8 · Marca 9 · Texto 9 · Verdade 8 · Responsivo 9 · Acessibilidade 9 · Código 9.

Bloqueadores e o que foi feito:
- Item WhatsApp do rodapé quebrava em desktop e tablet → ficou só "WhatsApp" + ícone, como os outros links.
- Política de privacidade com data antiga → "15 de outubro de 2026".

Melhorias aplicadas: botões da chamada final da home com largura igual no celular e ícone externo; "(abre em nova aba)" nos links externos do rodapé; botões de período com 44 px; sitemap com a home como `https://flowlyx.com.br/`; título de /sobre sem inglês; `foundingDate` removido do JSON-LD (2008 é a história da equipe, não a abertura do CNPJ); slogan do rodapé sem quebra.

## Rodada 3 — 15/10/2026
**Veredito: APROVADO.** Todas as notas em 9, zero bloqueadores. Ajuste final: pontuação do CNPJ na política de privacidade.

## Troca do número — 15/10/2026
O Alexandre trocou o WhatsApp para +55 (35) 99169-1904. Mudança só de dado (mesmo tamanho de texto, mesmo layout), sem rodada do crítico: verificada por lint, build e conferência do HTML publicado.
