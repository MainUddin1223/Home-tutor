// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbl69XmGQcfkHgZh3dlI6ySFj_kFzAD6k",
    authDomain: "home-tutor-ec1d8.firebaseapp.com",
    projectId: "home-tutor-ec1d8",
    storageBucket: "home-tutor-ec1d8.appspot.com",
    messagingSenderId: "961612094129",
    appId: "1:961612094129:web:baef74e4529fe0faefa090"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;