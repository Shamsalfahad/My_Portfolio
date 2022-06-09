// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAITpliMh62RTur9nva1ItWJkNVZt8-cOQ",
  authDomain: "my-portfolio-328a9.firebaseapp.com",
  projectId: "my-portfolio-328a9",
  storageBucket: "my-portfolio-328a9.appspot.com",
  messagingSenderId: "376364851169",
  appId: "1:376364851169:web:fe25f986efd76a0b0fbca0",
  measurementId: "G-BMYX9ZE1EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default firebaseConfig;