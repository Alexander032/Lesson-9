import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCoJDqHqxxwYt3hu6WHLYqyY9du5edGANk",
    authDomain: "firereact-3f37a.firebaseapp.com",
    databaseURL: "https://firereact-3f37a-default-rtdb.firebaseio.com",
    projectId: "firereact-3f37a",
    storageBucket: "firereact-3f37a.appspot.com",
    messagingSenderId: "1076636608955",
    appId: "1:1076636608955:web:e24246121f1b333576fc9e"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();