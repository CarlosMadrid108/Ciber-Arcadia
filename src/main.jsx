import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'


const firebaseConfig = {
  apiKey: "AIzaSyDajAQPSgB5uKmmc5Prvug7k66rs6ZoMYk",
  authDomain: "ciberarcadia-bfeee.firebaseapp.com",
  projectId: "ciberarcadia-bfeee",
  storageBucket: "ciberarcadia-bfeee.appspot.com",
  messagingSenderId: "963091690773",
  appId: "1:963091690773:web:e97f77adedd12f207de51c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
