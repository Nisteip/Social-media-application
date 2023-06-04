import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuVSptvqulCAqHiJrv6xQiox9UfWSNQ7E",
  authDomain: "social-media-app-482e9.firebaseapp.com",
  projectId: "social-media-app-482e9",
  storageBucket: "social-media-app-482e9.appspot.com",
  messagingSenderId: "575431147893",
  appId: "1:575431147893:web:2ebab1c267d3f59c1a533c"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);