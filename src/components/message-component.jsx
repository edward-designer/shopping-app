import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessage, setShowMessage } from '../store/message/message.action';
import { selectMessage, selectShowMessage } from '../store/message/message.selector';

const Message = () => {
    const dispatch = useDispatch();
    const message = useSelector(selectMessage);
    const showMessage = useSelector(selectShowMessage);
   
    const clearMessage = useCallback(()=>{
        dispatch(setMessage(null));
    },[message]);
    
    useEffect(() => {
        const timer = setTimeout(() => clearMessage(), 2000);
        return () => clearTimeout(timer);
    }, [message]); // to clearTimeout in case of multiple messages being fired in a short time

    return (
         <div className={`fixed p-4 bg-orange-100 z-50 left-[50%] -ml-[10rem] w-[20rem] transition-all -translate-y-20 shadow ${message?'translate-y-4':''}`} onClick={clearMessage}>{message}</div>
    );
}

export default Message;