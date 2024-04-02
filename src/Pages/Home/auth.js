// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCIErRydD1bsN8_DcbshJ4w1Jt68pIZPU",
  authDomain: "amar-boi-55023.firebaseapp.com",
  projectId: "amar-boi-55023",
  storageBucket: "amar-boi-55023.appspot.com",
  messagingSenderId: "934099062656",
  appId: "1:934099062656:web:2f70e6e379901add1afb65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth