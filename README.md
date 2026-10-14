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
Antes da primeira publicação:
1. `npm i -g firebase-tools` e `firebase login`.
2. Criar uma senha de app no Gmail de `flowlyxdev@gmail.com` e gravar no cofre: `firebase functions:secrets:set GMAIL_APP_PASSWORD`.
3. Conectar o domínio `flowlyx.com.br` no console do Firebase Hosting.

## Como o site é construído
Leia `docs/gauntlet-loop.md`. Fichas dos produtos em `docs/pesquisa/`. Sistema de design em `docs/design/`.
