import firebase from "firebase"

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyChqJf5SXwCy6jGTQGbWZDKcW3hOiBw9Lk",
    authDomain: "facebook-messenger-clone-f6324.firebaseapp.com",
    projectId: "facebook-messenger-clone-f6324",
    storageBucket: "facebook-messenger-clone-f6324.appspot.com",
    messagingSenderId: "713249496908",
    appId: "1:713249496908:web:7c2337149a3fdcfee7b9e9",
    measurementId: "G-6EGHKF1C9T"
})

const db = firebaseApp.firestore();

export default db