// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2RrRxDqr2tlRSKCOdtpU2tJtAL1wy5l0",
  authDomain: "e-commerce-58197.firebaseapp.com",
  projectId: "e-commerce-58197",
  storageBucket: "e-commerce-58197.firebasestorage.app",
  messagingSenderId: "10993049076",
  appId: "1:10993049076:web:028fb7cb0d001d57c22da1",
  measurementId: "G-J7KWVM77VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
