import { createContext, useEffect, useState, useReducer } from 'react';
import { createUserDoccumentFromAuth, onAuthStateChangeListener } from '../utiles/firebase.utils';

// data storage
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER:  'SET_CURRENT_USER',
}

const userReducer = (state, action)=> {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: payload
            }
        default: 
            throw new Error(`unhandled type ${type} in the userReducer`);
    }
}

const INITIAL_STATE = {
    currentUser: null
}
// provider

export const UserProvider = ({ children }) => {
    //const [currentUser, setCurrentUser] = useState(null);
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }

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