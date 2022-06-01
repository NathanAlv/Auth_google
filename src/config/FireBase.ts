import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDXJ6S88OaHgNYqB-QnMTydNcEHjQinPOk",
  authDomain: "site-autenticacao.firebaseapp.com",
  projectId: "site-autenticacao",
  storageBucket: "site-autenticacao.appspot.com",
  messagingSenderId: "280059539415",
  appId: "1:280059539415:web:58c7c3f95347d0334b6592"
}

export const firebaseApp = initializeApp(firebaseConfig)
