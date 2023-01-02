import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfStgx5WqFXSCIGNoQ1_BDtt_Jffyyepk",
  authDomain: "chat-9d93e.firebaseapp.com",
  projectId: "chat-9d93e",
  storageBucket: "chat-9d93e.appspot.com",
  messagingSenderId: "770624135317",
  appId: "1:770624135317:web:5006543c8a93e97bf0fb9c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();