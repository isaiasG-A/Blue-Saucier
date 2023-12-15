import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSqEoOXBrG9icDJCDNxNfHnYO3_x1HHmY",
  authDomain: "bluesaucier-1598723828459.firebaseapp.com",
  projectId: "bluesaucier-1598723828459",
  storageBucket: "bluesaucier-1598723828459.appspot.com",
  messagingSenderId: "706821363321",
  appId: "1:706821363321:web:2760fb5a99b98e36dca6a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

