// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9t4_b4YwAoMSTqN2la54XTe8nt07yz7Q",
  authDomain: "lms-system-in-react-js.firebaseapp.com",
  databaseURL: "https://lms-system-in-react-js-default-rtdb.firebaseio.com",
  projectId: "lms-system-in-react-js",
  storageBucket: "lms-system-in-react-js.appspot.com",
  messagingSenderId: "71750725135",
  appId: "1:71750725135:web:a3c25c24bcc335ded6fd7a",
  measurementId: "G-5PBRGYJ3YR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);