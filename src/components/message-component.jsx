import { useCallback, useContext, useEffect } from 'react';
import { MessageContext } from "../contexts/message-context";

const Message = () => {
    const { message, setMessage, showMessage, setShowMessage } = useContext(MessageContext);
    const clearMessage = useCallback(() => {
        setShowMessage(false);
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => clearMessage(), 2000);
        return () => clearTimeout(timer);
    }, [clearMessage, message]); // to clearTimeout in case of multiple messages being fired in a short time

    return (
         <div className={`fixed p-4 bg-orange-100 z-50 left-[50%] -ml-[10rem] w-[20rem] transition-all -translate-y-20 shadow ${showMessage?'translate-y-4':''}`} onClick={clearMessage}>{message}</div>
    );
}

export default Message;