// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANJUT2X0NjmOUE03VcVmvb183dwVck22o",
  authDomain: "crwn-clothing-db-14b81.firebaseapp.com",
  projectId: "crwn-clothing-db-14b81",
  storageBucket: "crwn-clothing-db-14b81.appspot.com",
  messagingSenderId: "322940903483",
  appId: "1:322940903483:web:da53dbe1b8fa94db5e3c1e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup= () => signInWithPopup(auth, provider)