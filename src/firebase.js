import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_TUFSABtwSlEdLwaE9xSkI0J1O-oJ7J8",
  authDomain: "fbclone-5d564.firebaseapp.com",
  databaseURL: "https://fbclone-5d564.firebaseio.com",
  projectId: "fbclone-5d564",
  storageBucket: "fbclone-5d564.appspot.com",
  messagingSenderId: "527072199026",
  appId: "1:527072199026:web:6c9a997c62c4a52b3b5deb",
  measurementId: "G-ZYZP3S25KE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
