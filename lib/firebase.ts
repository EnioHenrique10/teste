// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQbuu1Wu0opa86I9OzzbJuTtCJYCxXu0A",
  authDomain: "dr-samuel-site.firebaseapp.com",
  projectId: "dr-samuel-site",
  storageBucket: "dr-samuel-site.appspot.com", // ✅ Corrigido aqui
  messagingSenderId: "413507451401",
  appId: "1:413507451401:web:ef081414c12f629a8796d8"
};

// Se já tiver um app inicializado, reutiliza, senão cria um novo
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
