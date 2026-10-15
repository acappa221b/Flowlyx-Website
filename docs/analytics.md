# Medição e funil de conversão

## Por que medição própria, e não Google Analytics
A política de privacidade promete: sem cookies de rastreamento, sem ferramentas de publicidade. A medição própria cumpre isso e ainda dá o funil exato até o pedido. Dados ficam no Firestore do projeto, em São Paulo.

## O que é registrado (coleção `eventos`, banco `banco-flowlyx`)
| Campo | O que é |
|---|---|
| `tipo` | `pagina`, `clique`, `formulario_inicio`, `formulario_envio` |
| `nome` | nome do clique: `cta_orcamento`, `whatsapp`, `email`, `externo:<site>` ou o `data-evento` do elemento |
| `caminho` | página (ex.: `/produtos/sopede/`) |
| `sessao` | id aleatório criado na primeira página e guardado em `sessionStorage` (some ao fechar a aba) |
| `referencia` | só o domínio de onde a pessoa veio (ex.: `google.com`), capturado na primeira página da sessão |
| `utmSource`, `utmMedium`, `utmCampaign` | da URL de entrada, se houver (ex.: links de anúncio ou do Instagram) |
| `largura` | largura da tela em px (menor que 768 = celular) |
| `criadoEm` | hora do servidor |

Não registra: IP, nome, e-mail, cookies, identificador entre sessões. Quem usa "Não rastrear" no navegador não é medido. O `/painel/` nunca é medido.

## O funil (por sessão)
1. **Visitaram o site**: sessões com pelo menos uma página vista.
2. **Abriram a página de orçamento**: sessões com página `/contato/`.
3. **Começaram a preencher**: sessões com `formulario_inicio` (primeiro foco em um campo).
4. **Enviaram o pedido**: sessões com `formulario_envio` (resposta 200 da função).

**Conversão** no painel = pedidos (coleção `pedidos`) ÷ visitas no período. Cliques em WhatsApp e e-mail aparecem em "Cliques importantes": são conversões que saem do site, então não entram no funil do formulário, mas contam como contato.

## Como ler o painel (`/painel/`)
- Entre com uma das três contas autorizadas (lista na função `painelResumo`, em `functions/src/index.ts`).
- Escolha 7, 30 ou 90 dias.
- Perguntas que o painel responde:
  - Quantas pessoas visitam por dia? (gráfico de barras)
  - Em que etapa perdemos gente? (funil: visita → orçamento → começou → enviou)
  - De onde vêm? (origens: google.com, instagram.com, direto, UTM)
  - Celular ou computador? (ajuda a priorizar o layout)
  - Quais páginas e botões recebem mais atenção?
  - Quem pediu orçamento recentemente? (últimos 10)

## Metas sugeridas para os primeiros 90 dias
Sem histórico ainda. Depois de 30 dias de dados, definir metas de: taxa visita → orçamento (hoje desconhecida), taxa começou → enviou (abandono do formulário) e pedidos por semana. Revisar texto e botões com o Gauntlet Loop a cada ajuste.

## Para medir campanhas
Use links com UTM. Exemplo para o Instagram: `https://flowlyx.com.br/?utm_source=instagram&utm_medium=bio&utm_campaign=lancamento`. O painel mostra `instagram` em "De onde vieram".

## Limites
- A função `painelResumo` lê até 50 mil eventos por consulta. Se o site passar disso por período, passar a agregar por dia em uma rotina agendada.
- Bloqueadores de anúncio podem barrar a chamada a `/api/evento`; os números são uma estimativa um pouco abaixo do real.
