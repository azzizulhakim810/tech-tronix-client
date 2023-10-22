// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV5okP-kvahEOKUHnv1LzuwC0j1K9jY5g",
  authDomain: "tech-tronix-assignment.firebaseapp.com",
  projectId: "tech-tronix-assignment",
  storageBucket: "tech-tronix-assignment.appspot.com",
  messagingSenderId: "354879153472",
  appId: "1:354879153472:web:4f18ed3748362d58fa06a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;