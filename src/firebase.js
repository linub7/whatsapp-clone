// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB-Unq2psuNmSnnDaT8JHMDi9yCQUWCom4",
//   authDomain: "whatsapp-clone-ff32a.firebaseapp.com",
//   projectId: "whatsapp-clone-ff32a",
//   storageBucket: "whatsapp-clone-ff32a.appspot.com",
//   messagingSenderId: "828779620780",
//   appId: "1:828779620780:web:2ab9352418583cf07cb209",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB-Unq2psuNmSnnDaT8JHMDi9yCQUWCom4",
  authDomain: "whatsapp-clone-ff32a.firebaseapp.com",
  projectId: "whatsapp-clone-ff32a",
  storageBucket: "whatsapp-clone-ff32a.appspot.com",
  messagingSenderId: "828779620780",
  appId: "1:828779620780:web:2ab9352418583cf07cb209",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref("images");
const audioStorage = firebase.storage().ref("audios");
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
  db,
  auth,
  provider,
  storage,
  audioStorage,
  createTimestamp,
  serverTimestamp,
};
