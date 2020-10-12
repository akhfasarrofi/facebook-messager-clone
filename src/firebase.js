import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCrFFDx62swfDDktnL39HfX9k1G7Fj4kgY",
    authDomain: "messager-clone-64384.firebaseapp.com",
    databaseURL: "https://messager-clone-64384.firebaseio.com",
    projectId: "messager-clone-64384",
    storageBucket: "messager-clone-64384.appspot.com",
    messagingSenderId: "396175517209",
    appId: "1:396175517209:web:00a418574c6c6e84cd2c88",
    measurementId: "G-VXP1T8FVXN"
});

const db = firebaseApp.firestore();

export default db;
