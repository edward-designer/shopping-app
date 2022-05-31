import { useContext, useEffect } from 'react';

import { setMessage } from '../store/message/message.action';
//import { getRedirectResult } from 'firebase/auth';
import SignUpForm from "../components/sign-up-form-component";
import SignInForm from "../components/sign-in-form-component";
import { MessageContext } from "../contexts/message-context";

const Authentication = () => {
    /*useEffect(() => {async function fetchResult(){
        const response = await getRedirectResult(auth); // auth is the singleton instance!!
        console.log(response);
        } fetchResult();
    },[]);*/
    //const { setMessage,setShowMessage } = useContext(MessageContext);

    return (
        <div className="flex flex-wrap justify-around ">
            <SignInForm setMessage={setMessage} />
            <SignUpForm setMessage={setMessage} />
        </div>
    );
}

export default Authentication;