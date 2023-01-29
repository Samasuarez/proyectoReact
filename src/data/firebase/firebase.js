// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjwHlXzIL8OEYjIhMMKnjYA60muwMEsqw",
  authDomain: "anticuario-ca455.firebaseapp.com",
  projectId: "anticuario-ca455",
  storageBucket: "anticuario-ca455.appspot.com",
  messagingSenderId: "983068070281",
  appId: "1:983068070281:web:21f9301ff7178e447c5158",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
