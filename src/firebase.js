import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8NWyj-UH_hGOdHQ1Pvm5FdsTknvem0IM",
    authDomain: "slack-clone-7149a.firebaseapp.com",
    databaseURL: "https://slack-clone-7149a.firebaseio.com",
    projectId: "slack-clone-7149a",
    storageBucket: "slack-clone-7149a.appspot.com",
    messagingSenderId: "617802309423",
    appId: "1:617802309423:web:40886b0daa279785534bda",
    measurementId: "G-3EY0LTF8Q2"
};

//Connecting App to db
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()




export { auth, provider };

export default db;