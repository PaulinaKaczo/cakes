import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9PsFfMLfPqUZ1DsMKp1xRo-1gfPqWbLk",
  authDomain: "ciochowe-ciacho.firebaseapp.com",
  projectId: "ciochowe-ciacho",
  storageBucket: "ciochowe-ciacho.appspot.com",
  messagingSenderId: "240704317478",
  appId: "1:240704317478:web:194a7e13c1aa5c1ecf1ee7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
