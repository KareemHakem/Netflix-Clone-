import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsMzPAky8i-m4kfepJkr47rMmkNKZfG3g",
  authDomain: "netflix-5f2fc.firebaseapp.com",
  projectId: "netflix-5f2fc",
  storageBucket: "netflix-5f2fc.appspot.com",
  messagingSenderId: "550367541373",
  appId: "1:550367541373:web:59dae0ebb1f64626e0d914",
};

const App = initializeApp(firebaseConfig);
const db = getFirestore(App);
const auth = getAuth(App);

export { auth };
export { db };
