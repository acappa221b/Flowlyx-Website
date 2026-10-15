import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";

/**
 * Configuração pública do app web "Site Flowlyx" (projeto flowlyx-website).
 * Não é segredo: o navegador precisa dela. O acesso aos dados é controlado
 * pelas regras do Firestore (tudo fechado) e pelas funções (lista de e-mails).
 */
export const firebaseConfig = {
  apiKey: "AIzaSyBCtjdSjUyGc0ssWorTmlc-Rnwxu05FY6M",
  authDomain: "flowlyx-website.firebaseapp.com",
  projectId: "flowlyx-website",
  storageBucket: "flowlyx-website.firebasestorage.app",
  messagingSenderId: "345573944019",
  appId: "1:345573944019:web:2765e57cd036eddc14c226",
} as const;

export function firebaseApp(): FirebaseApp {
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}
