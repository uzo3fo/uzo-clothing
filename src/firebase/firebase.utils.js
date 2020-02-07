import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAbdPehlZrmbppVijZg8XGICVFcQNh_ZEE",
    authDomain: "uzoclothinig.firebaseapp.com",
    databaseURL: "https://uzoclothinig.firebaseio.com",
    projectId: "uzoclothinig",
    storageBucket: "uzoclothinig.appspot.com",
    messagingSenderId: "976346877417",
    appId: "1:976346877417:web:96a8b635811ccde8c8cf78",
    measurementId: "G-70SQ066K0D"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GithubAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider)


  export default firebase;