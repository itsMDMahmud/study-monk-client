// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// VITE_APIKEY: "AIzaSyAKvYDTUAbrXwPaMRkRdIFeqc-1HYN_DGQ",
//   VITE_AUTHDOMAIN: "study-monk1.firebaseapp.com",
//   VITE_PROJECTID: "study-monk1",
//   VITE_STORAGEBUCKET: "study-monk1.appspot.com",
//   VITE_MESSAGINGSENDERID: "851689980809",
//   VITE_APPID: "1:851689980809:web:159feb0efa92b17e415758"