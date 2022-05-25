import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNp843m5Dq_FR8oF4bhtXbJXUazt_i-bU",
    authDomain: "shopping-app-c6876.firebaseapp.com",
    projectId: "shopping-app-c6876",
    storageBucket: "shopping-app-c6876.appspot.com",
    messagingSenderId: "472202667940",
    appId: "1:472202667940:web:568db782e4a8b09e6fc331"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const providerGoogle = new GoogleAuthProvider();
providerGoogle.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,providerGoogle);

// Firestore

export const db = getFirestore();

export const createUserDoccumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db,'users',userAuth.uid); //firestore,collection,id
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth; 
        const createdAt = new Date();
        try {
            await  setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch(error){
             console.error(error);
        }
    }
    return userDocRef;
}