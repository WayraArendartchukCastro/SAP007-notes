import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCmXObAkeNhXyXmvOFEzryo3GlezbPJnbI",
    authDomain: "blono-a4e9f.firebaseapp.com",
    projectId: "blono-a4e9f",
    storageBucket: "blono-a4e9f.appspot.com",
    messagingSenderId: "11420757960",
    appId: "1:11420757960:web:31c3a01811408671261afd"
  };

  const app = initializeApp(firebaseConfig);
  console.log(app)