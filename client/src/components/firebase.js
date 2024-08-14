// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC01lCXy6CtjqQ4xO8SDXyHJtj704NJsZw",
  authDomain: "shopsearch-521fa.firebaseapp.com",
  projectId: "shopsearch-521fa",
  storageBucket: "shopsearch-521fa.appspot.com",
  messagingSenderId: "608673035167",
  appId: "1:608673035167:web:eeb6b335470a1c36af43aa",
  measurementId: "G-WL8F97GZMX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
