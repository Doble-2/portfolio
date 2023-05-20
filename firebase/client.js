// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSRjkkVvRtKg6UK1j0t3tyoS4RRonQ7yY",
  authDomain: "doble2.firebaseapp.com",
  projectId: "doble2",
  storageBucket: "doble2.appspot.com",
  messagingSenderId: "308611740661",
  appId: "1:308611740661:web:3d8da78ac30b7cc48b66bc",
  measurementId: "G-ZMSLKLBLBX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (isSupported()) {
  // Inicializa Firebase Analytics
  const analytics = getAnalytics(app);
  // ...
}
export default app;
