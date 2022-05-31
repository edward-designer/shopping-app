import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,providerGoogle);

// Firestore

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    })

    await batch.commit();
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q); // getDocs not getDoc
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
}


export const createUserDoccumentFromAuth = async (userAuth,addInfo={}) => {
    if(!userAuth) return;
    const userDocRef = doc(db,'users',userAuth.uid); //firestore,collection,id
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth; 
        const createdAt = new Date();
        try {
            await  setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...addInfo
            });
        }catch(error){
             console.error(error);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth,callback);