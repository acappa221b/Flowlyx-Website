# Publicação oficial do flowlyx.com.br — passo a passo

> Situação em 14/10/2026: passos 1 a 4 feitos. Site publicado em https://flowlyx-website.web.app. Banco Firestore criado com o nome `banco-flowlyx` (a função e as regras já apontam para ele). Falta o passo 5 (domínio) e, mais tarde, o passo 6.

Faça na ordem. Cada passo diz onde clicar e o que copiar. Quando terminar o passo 5, avise o Claude: ele publica, testa o formulário e confere o domínio.

---

## Passo 1 — Mandar CNPJ e cidade (2 min)
Mande no chat:
- CNPJ da Flowlyx
- Cidade e estado (ex.: Pouso Alegre, MG)

O Claude coloca no rodapé e na política de privacidade.

---

## Passo 2 — Salvar os arquivos da marca (3 min)
Salve os arquivos que você mandou no chat nesta pasta:

```
C:\Dev\Flowlyx-Website\public\marca\
```

| Arquivo | Nome para salvar |
|---|---|
| Ícone quadrado (chaves com a onda) | `icone-512.png` |
| Banner "Flowlyx · Produtividade em fluxo" | `banner.png` |

O Claude gera a imagem de redes sociais (`og.png`, 1200×630) a partir do banner.

---

## Passo 3 — Criar o banco Firestore (3 min)
O formulário de orçamento guarda cada pedido neste banco.

1. Abra https://console.firebase.google.com/project/flowlyx-website/firestore
2. Clique em **Criar banco de dados**.
3. Edição: **Standard**. ID do banco: deixe **(default)**.
4. Local: escolha **southamerica-east1 (São Paulo)**. Este item não muda depois.
5. Regras: escolha **Modo de produção**.
6. Clique em **Criar**.

---

## Passo 4 — Criar a senha de app do Gmail (5 min)
A função do site usa esta senha para enviar o e-mail do orçamento. Não é a senha normal do Gmail.

1. Entre no Google com **flowlyxdev@gmail.com**.
2. Abra https://myaccount.google.com/security
3. Ative a **Verificação em duas etapas**, se ainda não estiver ativa.
4. Abra https://myaccount.google.com/apppasswords
5. Nome do app: `Site Flowlyx`. Clique em **Criar**.
6. O Google mostra uma senha de 16 letras. Copie. Ela aparece uma vez só.
7. No terminal, na pasta do projeto, rode:

```bash
npx firebase-tools functions:secrets:set GMAIL_APP_PASSWORD --project flowlyx-website
```

8. Cole a senha quando ele pedir e aperte Enter. Se ele perguntar se pode ativar a API do Secret Manager, responda **Y**.

**Não mande essa senha no chat.** Ela vai direto para o cofre do Google.

---

## Passo 5 — Ligar o domínio flowlyx.com.br (10 min + espera)
Antes de tudo, avise o Claude para fazer a **primeira publicação**. O Firebase só deixa ligar o domínio depois que o site existe lá.

Depois da primeira publicação:

1. Abra https://console.firebase.google.com/project/flowlyx-website/hosting
2. Clique em **Adicionar domínio personalizado**.
3. Digite `flowlyx.com.br`. Marque a opção para redirecionar `www.flowlyx.com.br` também.
4. O Firebase mostra registros de DNS (tipo **TXT** e tipo **A**). Deixe essa tela aberta.
5. Em outra aba, abra https://registro.br e entre na sua conta.
6. Clique no domínio **flowlyx.com.br** → **DNS** → **Editar zona** (se pedir, ative o **modo avançado**).
7. Crie cada registro exatamente como o Firebase mostrou: mesmo tipo, mesmo nome, mesmo valor.
8. Salve no registro.br. Volte ao Firebase e clique em **Verificar**.

A propagação leva de 15 minutos a algumas horas. O certificado HTTPS sai sozinho depois disso.

---

## Passo 6 — Ligar axis.flowlyx.com.br (quando o Axis for para produção)
Hoje o projeto de produção do Axis está vazio. Por isso o site mostra o Axis como "Em construção".

Quando o Axis estiver publicado no projeto `flowlyx-axis`:
1. Abra https://console.firebase.google.com/project/flowlyx-axis/hosting
2. **Adicionar domínio personalizado** → `axis.flowlyx.com.br`.
3. Copie os registros que o Firebase mostrar para a zona DNS de flowlyx.com.br no registro.br (mesmo jeito do passo 5).

O site da Flowlyx já aponta para esse endereço. Não precisa mudar nada nele.

---

## O que o Claude faz quando você avisar
1. Coloca CNPJ, cidade e imagens no site.
2. Roda `npm run deploy` (site + função do formulário + regras do banco).
3. Manda um pedido de teste pelo formulário e confere se o e-mail chegou em flowlyxdev@gmail.com.
4. Confere o domínio, o HTTPS e o redirecionamento do `www`.

---

## Passo 7 — Ativar o login do painel (5 min)
O `/painel/` usa login com Google. O Firebase só deixa entrar depois que você ativa o provedor e libera o domínio.

1. Abra https://console.firebase.google.com/project/flowlyx-website/authentication/providers
2. Se aparecer **Vamos começar**, clique. Depois clique em **Google** → **Ativar**.
3. Nome público do projeto: `Flowlyx`. E-mail de suporte: `flowlyxdev@gmail.com`. **Salvar**.
4. Aba **Settings** (Configurações) → **Domínios autorizados** → **Adicionar domínio** → `flowlyx.com.br`. Adicione também `www.flowlyx.com.br`.
5. Abra https://flowlyx.com.br/painel/ e clique em **Entrar com Google** com uma das três contas: alexandrecappa12@gmail.com, pcarvalhosergio@gmail.com ou flowlyxdev@gmail.com. Qualquer outra conta vê "Esta conta não tem acesso ao painel".

Quem pode entrar está na função `painelResumo` em `functions/src/index.ts`. Para mudar a lista, edite lá e publique de novo.

---

## Passo 8 — Google Search Console e Perfil da Empresa (15 min)
Isso é o que faz o site aparecer no Google. Passo a passo completo em `docs/seo.md`. Resumo:

1. https://search.google.com/search-console → **Adicionar propriedade** → **Domínio** → `flowlyx.com.br` → crie o registro **TXT** que ele mostrar no registro.br (DNS → Editar zona) → **Verificar**.
2. No Search Console: **Sitemaps** → `https://flowlyx.com.br/sitemap.xml` → **Enviar**.
3. https://business.google.com → criar perfil **Flowlyx**, categoria "Empresa de software", Conceição dos Ouros, MG, site flowlyx.com.br, telefone +55 12 98174-6412.
4. Em 2 a 4 semanas, abra **Desempenho** no Search Console. Ele mostra as buscas reais. Mande um print para o Claude: a partir daí ajustamos os textos.
