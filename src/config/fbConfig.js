//import * as firebase from 'firebase'
import firebase from 'firebase'
import 'firebase/firestore'


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDH32AuaGLfdWW_kt47SN_7b45juhz_gN4",
    authDomain: "scrum-board-test-1281d.firebaseapp.com",
    projectId: "scrum-board-test-1281d",
    storageBucket: "scrum-board-test-1281d.appspot.com",
    messagingSenderId: "998167514900",
    appId: "1:998167514900:web:e5d8c5ad8cf15000817c01",
    measurementId: "G-XZZ4R8MECR",
    databaseURL: "https://scrum-board-test-1281d-default-rtdb.europe-west1.firebasedatabase.app/"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  //firebase.firestore().settings({ timestampsInSnapshots: true})

  export const databaseRef = firebase.database().ref()

  

  //export const scrumBoardRef = databaseRef.child('scrum-board-test-1281d-default-rtdb')