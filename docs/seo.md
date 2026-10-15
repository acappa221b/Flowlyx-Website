# SEO — aparecer no Google

## Verdade antes de tudo
Nenhum site novo aparece na primeira página do Google para "desenvolvimento de software" em semanas. Esse termo é disputado por empresas grandes há anos. O caminho realista é:
1. Entrar no índice do Google rápido (dias).
2. Ganhar termos específicos e locais primeiro (semanas a meses): "sistema para restaurante", "software sob medida Minas Gerais", "sistema para imobiliária pequena".
3. Crescer para termos amplos com conteúdo e tempo (meses).

Os dados reais de busca vêm do **Google Search Console** depois que o site é verificado. Antes disso, qualquer volume de busca é chute.

## O que já está feito no site
- Títulos e descrições com palavras-chave em cada página (`seo` em `src/content/site.ts`).
- Dados estruturados schema.org (`ProfessionalService` + `WebSite`) em `src/components/JsonLd.tsx`: nome, endereço (Conceição dos Ouros, MG), telefone, e-mail, CNPJ, produtos.
- `sitemap.xml`, `robots.txt`, canônica, Open Graph com imagem, HTTPS, páginas estáticas rápidas, `lang="pt-BR"`, cabeçalhos em ordem.
- Texto em português claro, sem jargão, com termos que as pessoas realmente digitam (sistema, aplicativo, automação, restaurante, imobiliária, contabilidade, indústria).

## Palavras-chave alvo (ordem de prioridade)
| Grupo | Termos | Página que responde |
|---|---|---|
| Marca | flowlyx | Home |
| Sob medida | desenvolvimento de software sob medida · software sob medida · sistema personalizado para empresa | Home, Soluções |
| Setor | sistema para restaurante · delivery próprio sem comissão · sistema para imobiliária · sistema para escritório de contabilidade · software para indústria | Produtos, Cases |
| Serviço | desenvolvimento de sistemas · desenvolvimento de aplicativos · automação industrial · modernização de sistema legado · integração fiscal NF-e | Soluções |
| Local | software house Minas Gerais · desenvolvimento de software sul de Minas · Conceição dos Ouros | Sobre, JSON-LD |

## Passo a passo para o Alexandre (uma vez)
1. **Search Console**: https://search.google.com/search-console → Adicionar propriedade → tipo **Domínio** → `flowlyx.com.br`. O Google mostra um registro **TXT**. Crie no registro.br (DNS → Editar zona) e clique em Verificar.
2. No Search Console: **Sitemaps** → enviar `https://flowlyx.com.br/sitemap.xml`.
3. **Perfil da Empresa no Google** (Google Business Profile): https://business.google.com → criar perfil "Flowlyx", categoria "Empresa de software", cidade Conceição dos Ouros, site flowlyx.com.br, WhatsApp. Isso coloca a Flowlyx no Google Maps e nas buscas locais. Exige confirmação por correio ou telefone.
4. Depois de 2 a 4 semanas, abrir o relatório **Desempenho** no Search Console: ele mostra as buscas reais que trouxeram o site. Aí ajustamos os textos para os termos que aparecem.

## Próximos passos de conteúdo (o que mais move o Google)
- Uma página por setor (`/solucoes/restaurantes/`, `/solucoes/imobiliarias/`, `/solucoes/contabilidade/`, `/solucoes/industria/`) com o problema, a solução e o case. Cada uma mira um termo "sistema para X".
- Um artigo por mês respondendo uma pergunta real do cliente (ex.: "Quanto custa um sistema sob medida?", "Vale a pena sair do Excel?"). Sem artigo, o Google tem pouco para indexar.
- Pedir aos clientes do SóPede e do Locabilize um depoimento curto com nome e cidade: prova social que também gera texto indexável.
- Links de fora apontando para o site: sites do SóPede, Locabilize, Arena e demais produtos devem ter "Feito pela Flowlyx" no rodapé com link para flowlyx.com.br. É o sinal mais forte e mais barato que temos.

Cada página nova passa pelo Gauntlet Loop como as outras.
