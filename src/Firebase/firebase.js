import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB0rZ_wAfri5MpbSvx0neTUlRJazwD7pvo",
    authDomain: "linkedin-clone-4d00c.firebaseapp.com",
    projectId: "linkedin-clone-4d00c",
    storageBucket: "linkedin-clone-4d00c.appspot.com",
    messagingSenderId: "266844522217",
    appId: "1:266844522217:web:9e11184c70624d0c4cd278"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};