import { useContext, useEffect } from 'react';
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
    const { setMessage,setShowMessage } = useContext(MessageContext);

    return (
        <div className="flex flex-wrap justify-around ">
            <SignInForm setMessage={setMessage} setShowMessage={setShowMessage} />
            <SignUpForm setMessage={setMessage} setShowMessage={setShowMessage} />
        </div>
    );
}

export default Authentication;