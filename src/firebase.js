  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDFS4SMZJd_W_pUQsOzbfOMjvigZFe8taI",
  authDomain: "magnetod4.firebaseapp.com",
  projectId: "magnetod4",
  storageBucket: "magnetod4.appspot.com",
  messagingSenderId: "623788883823",
  appId: "1:623788883823:web:05b2d78ff3793b50f5b29a",
  measurementId: "G-VM9EC1KG2Y"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);