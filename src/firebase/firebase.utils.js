import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBCARQCVJhFegK4HgUHiyra8f75QTBf0xw",
    authDomain: "crwn-db-c2ade.firebaseapp.com",
    databaseURL: "https://crwn-db-c2ade.firebaseio.com",
    projectId: "crwn-db-c2ade",
    storageBucket: "crwn-db-c2ade.appspot.com",
    messagingSenderId: "495332695533",
    appId: "1:495332695533:web:aa030887d446179fd31be4",
   measurementId: "G-SQYY1WCP1J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;