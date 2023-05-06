// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import  'firebase/compat/firestore';
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnkhdyclRO7M_IUt94dK7GNolRe92er-k",
  authDomain: "meucarrinhoapp-73ac0.firebaseapp.com",
  projectId: "meucarrinhoapp-73ac0",
  storageBucket: "meucarrinhoapp-73ac0.appspot.com",
  messagingSenderId: "364716083891",
  appId: "1:364716083891:web:e3628b7228f6dc4c8e7ec6",
  measurementId: "G-ZBLM5TS6RX"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore();
