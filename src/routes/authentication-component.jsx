//import { useEffect } from 'react';
//import { getRedirectResult } from 'firebase/auth';
import SignUpForm from "../components/sign-up-form-component";
import SignInForm from "../components/sign-in-form-component";

const Authentication = () => {
    /*useEffect(() => {async function fetchResult(){
        const response = await getRedirectResult(auth); // auth is the singleton instance!!
        console.log(response);
        } fetchResult();
    },[]);*/

    return (
        <div className="flex flex-wrap justify-around ">
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default Authentication;