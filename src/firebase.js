// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEqt-L8iWTyIO3o8AxIhJeUxRNM1bOeso",
  authDomain: "eshop-7c482.firebaseapp.com",
  projectId: "eshop-7c482",
  storageBucket: "eshop-7c482.firebasestorage.app",
  messagingSenderId: "612494843395",
  appId: "1:612494843395:web:b2661db9e919f1d8cef836",
  measurementId: "G-DHZYJFMGH8",
};

const db = initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it for use in the app
const auth = getAuth(app);

export { auth, db };
