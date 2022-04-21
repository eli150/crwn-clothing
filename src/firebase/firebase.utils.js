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

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
