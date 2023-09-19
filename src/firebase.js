import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8bSGvD6FqdRsAu-8qiMVX2lGROLzeimY",
  authDomain: "foodxpress-d130e.firebaseapp.com",
  projectId: "foodxpress-d130e",
  storageBucket: "foodxpress-d130e.appspot.com",
  messagingSenderId: "322176206834",
  appId: "1:322176206834:web:c02201ef020363d8654d6b",
  measurementId: "G-KCWSB0F6ST"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const db = getFirestore(app);