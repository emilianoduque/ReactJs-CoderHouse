
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgnKSIt85kOQD9rSrytS0dqG-gAEAIopI",
  authDomain: "smartify-home-ab092.firebaseapp.com",
  projectId: "smartify-home-ab092",
  storageBucket: "smartify-home-ab092.firebasestorage.app",
  messagingSenderId: "38635086757",
  appId: "1:38635086757:web:c1f7ce1671a1bf3b9d3e4c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
export default db;