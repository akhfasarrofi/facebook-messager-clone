import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDafmSvoZqGVq6ncX5iTG5_qQte2Kbsn9g",
    authDomain: "facebook-messeger-clone-c5635.firebaseapp.com",
    databaseURL: "https://facebook-messeger-clone-c5635.firebaseio.com",
    projectId: "facebook-messeger-clone-c5635",
    storageBucket: "facebook-messeger-clone-c5635.appspot.com",
    messagingSenderId: "441103276234",
    appId: "1:441103276234:web:a9e9aa30a643c604dcfc33",
    measurementId: "G-JWZYS54GFE"
});

const db = firebaseApp.firestore();

export default db;
