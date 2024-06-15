// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOyBXYe25KsC-yXXC3z_QGc1ataYZR5ek",
  authDomain: "netflix-gpt-debb9.firebaseapp.com",
  projectId: "netflix-gpt-debb9",
  storageBucket: "netflix-gpt-debb9.appspot.com",
  messagingSenderId: "46748451033",
  appId: "1:46748451033:web:d0a184b2ff9a7cfee53ec8",
  measurementId: "G-L4MFLGR2Z7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();