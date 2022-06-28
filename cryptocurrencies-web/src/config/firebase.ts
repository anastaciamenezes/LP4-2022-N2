import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCyqX6WbQhs8OXcE5De3IiFE1Uxu-RGurE",
  authDomain: "cryptocurrencies-web.firebaseapp.com",
  projectId: "cryptocurrencies-web",
  storageBucket: "cryptocurrencies-web.appspot.com",
  messagingSenderId: "284406381738",
  appId: "1:284406381738:web:80e0f4533021aca578e4d3"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp