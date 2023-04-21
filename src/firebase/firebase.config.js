// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBulU7PZtUgvTEvFgxEnaFGH2mmbgpJMYk",
  authDomain: "fir-daisyui-contextapi.firebaseapp.com",
  projectId: "fir-daisyui-contextapi",
  storageBucket: "fir-daisyui-contextapi.appspot.com",
  messagingSenderId: "159898015777",
  appId: "1:159898015777:web:2c8b2dc2b4580102ad6b60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;