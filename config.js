// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6kpw5DyHtZGfAWK6QmKJx0PCHojaIGIM",
  authDomain: "theminh-cdfd4.firebaseapp.com",
  projectId: "theminh-cdfd4",
  storageBucket: "theminh-cdfd4.appspot.com", 
  messagingSenderId: "352585505249",
  appId: "1:352585505249:web:4f20928a977297e5f11aa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export
export const auth = getAuth(app);