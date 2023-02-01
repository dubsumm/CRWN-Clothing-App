// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth'
import {getFirestore,
        doc,
        getDoc,
        setDoc,
        snapshotEqual
    } from 'firebase/firestore'


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

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {

    const userDocRef = doc(db, 'users',userAuth.uid )

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date()
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch (error) {
            console.log('Error creating user', error.message)
        }
    }
    return userDocRef

}