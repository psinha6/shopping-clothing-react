import { initializeApp } from "firebase/app";

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUI0BU4Ey5VicuUau2AH6PCvLxFyVWlMo",
    authDomain: "shopping-clothing-react-db.firebaseapp.com",
    projectId: "shopping-clothing-react-db",
    storageBucket: "shopping-clothing-react-db.appspot.com",
    messagingSenderId: "356727356196",
    appId: "1:356727356196:web:61771121541e00d4cdd1b1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createDocumentFromAuth = async (userAuth, additionalInformation) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log("error creating the user", error.message);          
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}