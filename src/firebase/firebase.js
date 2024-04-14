// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireStore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNGl9e_j91NA7v1edZFRXr4eqm634FOMo",
  authDomain: "react-next-shop-app-b17e6.firebaseapp.com",
  projectId: "react-next-shop-app-b17e6",
  storageBucket: "react-next-shop-app-b17e6.appspot.com",
  messagingSenderId: "367772625156",
  appId: "1:367772625156:web:a295c097bcb1f894698851",
  measurementId: "G-L3HS7NMGFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFireStore(app);
export const storage = getStorage(app);

export default app;