import { createContext, useEffect, useState } from 'react';
import { createUserDoccumentFromAuth, onAuthStateChangeListener } from '../utiles/firebase.utils';

// data storage
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,
});

// provider

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(()=>{
        const unsubscribe = onAuthStateChangeListener((user)=>{ // only possible with onAuthStateChanged function from firebase
            if(user){ createUserDoccumentFromAuth(user); }
            setCurrentUser(user);
        })
        return unsubscribe;
    },[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};