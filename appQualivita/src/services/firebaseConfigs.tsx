// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";


import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDl6FbYiKUOAYlvtwNjP2AbNAuwQDx_j-0",

  authDomain: "qualivitatcc.firebaseapp.com",

  projectId: "qualivitatcc",

  storageBucket: "qualivitatcc.appspot.com",

  messagingSenderId: "494553400374",

  appId: "1:494553400374:web:84b87521b03971aea50497",

  measurementId: "G-H450852WX2"

};




// Initialize Firebase

const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);

export const db = getFirestore(app);