// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore }from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYbYJyQd_I1--PWZsBQhSkAmJWtN9g1nQ",
  authDomain: "react-45060-gianne.firebaseapp.com",
  projectId: "react-45060-gianne",
  storageBucket: "react-45060-gianne.appspot.com",
  messagingSenderId: "913538772046",
  appId: "1:913538772046:web:b61e4037e23a4f937aa71f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProd = collection(db, 'productos');