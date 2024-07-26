import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2R0vzVC166L9yRRtnqj9SgfeaNS7s6GU",
  authDomain: "challenge-week-12-compass.firebaseapp.com",
  projectId: "challenge-week-12-compass",
  storageBucket: "challenge-week-12-compass.appspot.com",
  messagingSenderId: "167165453391",
  appId: "1:167165453391:web:ce7887b36c2333e993763a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
