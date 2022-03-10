import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyB9mEy9m1PoZltBGjBQNT25lnpf5pDhWCY",
  authDomain: "crwn-db-5df2a.firebaseapp.com",
  projectId: "crwn-db-5df2a",
  storageBucket: "crwn-db-5df2a.appspot.com",
  messagingSenderId: "34906982805",
  appId: "1:34906982805:web:df890068bd929754614e9c",
  measurementId: "G-7GC0DJQZCV",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
