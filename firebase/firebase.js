import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyAmNd0xPgTQN_ByduEfmdAdLD7T8q8aJwc",
  authDomain: "loginauth-2fcc7.firebaseapp.com",
  projectId: "loginauth-2fcc7",
  storageBucket: "loginauth-2fcc7.appspot.com",
  messagingSenderId: "258579121245",
  appId: "1:258579121245:web:aa01e436730f46b51b39b4",
  measurementId: "G-200FB4QS82"
  // Add more Firebase config properties here if required
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
