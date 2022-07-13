// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCekpx_PIMlOyqV06GrAfhwfbzWqNJE5pA",
  authDomain: "e-commerce-712b9.firebaseapp.com",
  projectId: "e-commerce-712b9",
  storageBucket: "e-commerce-712b9.appspot.com",
  messagingSenderId: "841099620947",
  appId: "1:841099620947:web:02af54caf781a626c94ca6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;