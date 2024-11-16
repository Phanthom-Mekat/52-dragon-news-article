// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTJhQcak_pxq6LaQdsr021w7twK63bfEg",
  authDomain: "dragon-news-bf596.firebaseapp.com",
  projectId: "dragon-news-bf596",
  storageBucket: "dragon-news-bf596.firebasestorage.app",
  messagingSenderId: "817497124531",
  appId: "1:817497124531:web:8e93bd228909e0a0d30ac6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app