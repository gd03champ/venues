import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyCrzuDpZDR9RY7LyzYkXHOMRmNWx7OJQgU",
  authDomain: "venues-85fdc.firebaseapp.com",
  projectId: "venues-85fdc",
  storageBucket: "venues-85fdc.appspot.com",
  messagingSenderId: "638250340301",
  appId: "1:638250340301:web:a77ca250ae1cd2a35b7e84",
  measurementId: "G-4X5GHH079X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { db, auth, provider, storage };
