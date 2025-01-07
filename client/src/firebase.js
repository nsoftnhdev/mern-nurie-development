// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-nurie-development.firebaseapp.com",
  projectId: "mern-nurie-development",
  storageBucket: "mern-nurie-development.firebasestorage.app",
  messagingSenderId: "283772856477",
  appId: "1:283772856477:web:84671fa7431004d56c0c74"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);