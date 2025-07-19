// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw-jhYP2ikWb050siJ8V7xa0xyMZPP-_U",
  authDomain: "onlyplans-7f66d.firebaseapp.com",
  projectId: "onlyplans-7f66d",
  storageBucket: "onlyplans-7f66d.firebasestorage.app",
  messagingSenderId: "665050638108",
  appId: "1:665050638108:web:0ece9d7448ef5f38da7cd9",
  measurementId: "G-TPP2C6JRNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
