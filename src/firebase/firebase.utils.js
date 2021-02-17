import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA8uwblk4OZHvYI2y_TIMJ1XzQcsOxDVtc",
    authDomain: "kmn-clothing.firebaseapp.com",
    projectId: "kmn-clothing",
    storageBucket: "kmn-clothing.appspot.com",
    messagingSenderId: "841868458541",
    appId: "1:841868458541:web:0745413cb291935a0fd6a4",
    measurementId: "G-GY1F9YLFH6"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
 