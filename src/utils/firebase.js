// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2uWc8i1EONgL_8I6XEyQl60vBS41xosA",
  authDomain: "netflix-123fe.firebaseapp.com",
  projectId: "netflix-123fe",
  storageBucket: "netflix-123fe.appspot.com",
  messagingSenderId: "705515231558",
  appId: "1:705515231558:web:263a6e2b0564cd1a5ead47",
  measurementId: "G-JQ4HC26KDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();