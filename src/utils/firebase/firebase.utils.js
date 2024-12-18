// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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
initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((obj) => {
        const docRef = doc(collectionRef, obj.title.toLowerCase())
        batch.set(docRef, obj)
    })

    await batch.commit()
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db,'categories')
    const q = query(collectionRef)
    const querySnapShot = await getDocs(q)
    return querySnapShot.docs.map(docSnapshot => docSnapshot.data())
}

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return

    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }
        catch (error) {
            console.log('Error creating user', error.message)
        }
    }
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)


export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback)

}

