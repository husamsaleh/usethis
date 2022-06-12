// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Uf3WvvS75L2fby7A9QbMBFx50rsen1E",
  authDomain: "usethisox.firebaseapp.com",
  projectId: "usethisox",
  storageBucket: "usethisox.appspot.com",
  messagingSenderId: "293949107009",
  appId: "1:293949107009:web:023e1f225425fffd3b0fc0",
  measurementId: "G-3VHLWRW62E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
