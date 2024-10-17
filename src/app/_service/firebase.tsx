// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnL8uNX_bB3etosCAUU3qUtZY2bJQk6xA",
  authDomain: "e-commerce-react-app-9021f.firebaseapp.com",
  projectId: "e-commerce-react-app-9021f",
  storageBucket: "e-commerce-react-app-9021f.appspot.com",
  messagingSenderId: "489484241250",
  appId: "1:489484241250:web:2c3428f32a0c4a3427843b",
  measurementId: "G-LDGHE7843Q",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
export { firebaseApp };
