import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    /* FIREBASE SDK ANDA */
});

const db = firebaseApp.firestore();

export default db;
