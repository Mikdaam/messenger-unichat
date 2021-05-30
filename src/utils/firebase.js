import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBZnmWqHMR9G1UXm86fl6sox2DeOZ9cTS0",
    authDomain: "messenger-unichat.firebaseapp.com",
    projectId: "messenger-unichat",
    storageBucket: "messenger-unichat.appspot.com",
    messagingSenderId: "408413484840",
    appId: "1:408413484840:web:9cfec86ea39eb58531421d"
}).auth();