// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDctD19IJnAHusySMEpqjBJ0qPOp_pq-js",

  authDomain: "qualivitadb.firebaseapp.com",

  projectId: "qualivitadb",

  storageBucket: "qualivitadb.appspot.com",

  messagingSenderId: "150960184345",

  appId: "1:150960184345:web:d1ac802c7d1e7e6f031e88",

  measurementId: "G-XVJH0D07NL"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);