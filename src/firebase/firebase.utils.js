import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBSX2sZCRjl8I8oCbnvtP04yjGwo9uSQh8",
    authDomain: "crwn-db-f8851.firebaseapp.com",
    databaseURL: "https://crwn-db-f8851.firebaseio.com",
    projectId: "crwn-db-f8851",
    storageBucket: "crwn-db-f8851.appspot.com",
    messagingSenderId: "650143981599",
    appId: "1:650143981599:web:b8c2f3b96af8d927b6352a"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;