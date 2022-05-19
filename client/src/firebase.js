// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwcSfl5tamheZ25lYAc3EkOKBj7UAjeSU",
  authDomain: "fir-7f3a3.firebaseapp.com",
  projectId: "fir-7f3a3",
  storageBucket: "fir-7f3a3.appspot.com",
  messagingSenderId: "775815627079",
  appId: "1:775815627079:web:8139e1a7bd3686e7c9cc62",
  measurementId: "G-BLSHC4B6KV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
