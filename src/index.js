import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZL3OW47RKKCt8vE446_lrxD1V8loLqvA",
  authDomain: "notebooksf-8775d.firebaseapp.com",
  projectId: "notebooksf-8775d",
  storageBucket: "notebooksf-8775d.appspot.com",
  messagingSenderId: "989781540546",
  appId: "1:989781540546:web:26d6aead54139247e1055b"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
