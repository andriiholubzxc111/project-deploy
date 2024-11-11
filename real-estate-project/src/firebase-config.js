// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlhKcyP1UrdczU3GYe9FZPcY_rCpv7-cc",
  authDomain: "real-estate-project-4bb26.firebaseapp.com",
  projectId: "real-estate-project-4bb26",
  storageBucket: "real-estate-project-4bb26.firebasestorage.app",
  messagingSenderId: "680223327796",
  appId: "1:680223327796:web:691b8cc340a039bbceac61",
  measurementId: "G-G91L65MYZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
export const auth = getAuth(app);
