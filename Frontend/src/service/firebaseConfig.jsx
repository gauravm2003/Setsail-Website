// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQwala2u-d2_Dh71lvbAPJPdKjsFABlkM",
    authDomain: "setsail-travel-and-tourism.firebaseapp.com",
    projectId: "setsail-travel-and-tourism",
    storageBucket: "setsail-travel-and-tourism.firebasestorage.app",
    messagingSenderId: "446226381576",
    appId: "1:446226381576:web:c7ea988ffa92828579cabd",
    measurementId: "G-DGR27GCSVT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);