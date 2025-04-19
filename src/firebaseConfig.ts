// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQBoKTbucyWx4wQusbzSADY-lqeson3aI",
  authDomain: "launchpad-66532.firebaseapp.com",
  databaseURL: "https://launchpad-66532-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "launchpad-66532",
  storageBucket: "launchpad-66532.firebasestorage.app",
  messagingSenderId: "558037331679",
  appId: "1:558037331679:web:e2440a0ecc3138fcc3036a",
  measurementId: "G-L01RJQ4SNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);

