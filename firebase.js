// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaxgQpNjAj222ueas94nz-83ztyE95A94",
  authDomain: "react-notes-16d30.firebaseapp.com",
  projectId: "react-notes-16d30",
  storageBucket: "react-notes-16d30.appspot.com",
  messagingSenderId: "890887903375",
  appId: "1:890887903375:web:6030e68cb2652f6516b8fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notes = collection(db, "notes")