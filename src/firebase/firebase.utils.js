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
  };

  export const createUserProfileDocument = async(userAuth, additionalData ) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        //create new userRef
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GithubAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider)


  export default firebase;