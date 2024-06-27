import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBi5O43x9p-KYGrZLA0PxIKA0AuPzs4rDo",
  authDomain: "learning-management-syst-6bfa4.firebaseapp.com",
  databaseURL:'https://learning-management-syst-6bfa4-default-rtdb.firebaseio.com/',
  projectId: "learning-management-syst-6bfa4",
  storageBucket: "learning-management-syst-6bfa4.appspot.com",
  messagingSenderId: "165101100640",
  appId: "1:165101100640:web:6069a33673ee7a0f196d05"
};

export const app = initializeApp(firebaseConfig);
