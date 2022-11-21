import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './screens/Router';
import "./firebase/config"
// import { initializeApp } from "firebase/app";

// // Your web app's Firebase configuration

// const firebaseConfig = {

//   apiKey: "AIzaSyDGf3SfFKZLDa46oQ_9DZEle_rdB55a9jw",

//   authDomain: "e-commerce-3adc7.firebaseapp.com",

//   projectId: "e-commerce-3adc7",

//   storageBucket: "e-commerce-3adc7.appspot.com",

//   messagingSenderId: "547944899530",

//   appId: "1:547944899530:web:bf2954dc2fdf8f31ba6533"

// };

// // Initialize Firebase

// initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);


