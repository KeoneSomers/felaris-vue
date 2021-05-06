import firebase from 'firebase';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDTDAye_KLurTMKFY15DMDk2SPOn9QntOU",
    authDomain: "code-bank-2aa9f.firebaseapp.com",
    projectId: "code-bank-2aa9f",
    storageBucket: "code-bank-2aa9f.appspot.com",
    messagingSenderId: "646917881443",
    appId: "1:646917881443:web:375a23b27acb80930c4256",
    measurementId: "G-P2YB3WHRT1"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();
  firebase.analytics();