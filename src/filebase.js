// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "Your API key",
  authDomain: "clone-41146.firebaseapp.com",
  projectId: "clone-41146",
  storageBucket: "clone-41146.appspot.com",
  messagingSenderId: "683974122660",
  appId: "1:683974122660:web:4fb1b4900a6f0319719a31",
  measurementId: "G-PQEY1R9W5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
