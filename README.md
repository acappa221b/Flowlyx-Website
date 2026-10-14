# Flowlyx — site institucional

Site da [Flowlyx](https://flowlyx.com.br): software sob medida, entrega rápida, preço justo.

## Rodar
```bash
npm install
npm run dev
```
Abra http://localhost:3000.

## Publicar (Firebase Hosting, projeto `flowlyx-website`)
```bash
npm run deploy
```
Os scripts usam `npx firebase-tools`, então não precisa instalar nada global. Só `npx firebase-tools login` uma vez.

Antes da primeira publicação completa:
1. No console do Firebase, criar o banco **Firestore** (modo produção, região `southamerica-east1`). A função de contato grava os pedidos nele.
2. Criar uma senha de app no Gmail de `flowlyxdev@gmail.com` (exige verificação em 2 etapas) e gravar no cofre: `npx firebase-tools functions:secrets:set GMAIL_APP_PASSWORD`.
3. Conectar o domínio `flowlyx.com.br` em Hosting → Adicionar domínio personalizado.

Só o site, sem a função: `npm run deploy:hosting`. Link temporário de teste (7 dias): `npm run deploy:preview`.

## Como o site é construído
Leia `docs/gauntlet-loop.md`. Fichas dos produtos em `docs/pesquisa/`. Sistema de design em `docs/design/`.
