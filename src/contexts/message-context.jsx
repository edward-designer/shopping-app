import { createContext, useEffect, useState } from 'react';

// data storage
export const MessageContext = createContext({
    message: null,
    showMessage: false,
    setMessage: ()=> {},
    setShowMessage: ()=> {},
});

// provider

export const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState(null);
    const [showMessage, setShowMessage] = useState(null);
    const value = {message, setMessage, showMessage, setShowMessage};

    return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
};