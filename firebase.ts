// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKuVeW7c_C-w4_wFG79AXEE5Jg-l49Elg",
  authDomain: "netflix-clone-4effd.firebaseapp.com",
  projectId: "netflix-clone-4effd",
  storageBucket: "netflix-clone-4effd.firebasestorage.app",
  messagingSenderId: "324911061868",
  appId: "1:324911061868:web:db1133b95b596561b77149",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
