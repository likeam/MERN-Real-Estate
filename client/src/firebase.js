// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "mern-estate-7323e.firebaseapp.com",
  projectId: "mern-estate-7323e",
  storageBucket: "mern-estate-7323e.appspot.com",
  messagingSenderId: "862829878804",
  appId: "1:862829878804:web:f875aa3002841ccefe9101",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
