import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB-hsxviqKduYK5cPZ2VTKFb99_y8wtqP8",
  authDomain: "messager-3b1a5.firebaseapp.com",
  projectId: "messager-3b1a5",
  storageBucket: "messager-3b1a5.appspot.com",
  messagingSenderId: "278459596739",
  appId: "1:278459596739:web:f28177d6708765686a4776",
  measurementId: "G-TLL5Y2J317",
});

const db = firebaseApp.firestore();

export default db;
