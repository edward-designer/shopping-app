import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { auth, signInWithGooglePopup, createUserDoccumentFromAuth, signInUserWithEmailAndPassword } from "../utiles/firebase.utils";
import FormInput from './form-input-component';
import { useNavigate } from "react-router-dom";

const defaultFormFieldsSignIn = {
    email1: '',
    password1: '',
}

const SignInForm = ({ setMessage }) => {
    const dispatch = useDispatch();
    const [formFieldsSignIn,setFormFieldsSignIn] = useState(defaultFormFieldsSignIn);
    const {email1,password1} = formFieldsSignIn;
    const navigate = useNavigate();

    const logGoogleUser = async() => {
        try{
            await signInWithGooglePopup();
            dispatch(setMessage('Signed in, start shopping now!'));
            navigate("/");
        }catch(e){
            console.log(e);
        }
    }

    const resetForm = () => {
        setFormFieldsSignIn(defaultFormFieldsSignIn);
    }

    const handleChange = (event) => {
        const { name,value } = event.target;
        setFormFieldsSignIn({...formFieldsSignIn, [name]:value}); 
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const { user }  = await signInUserWithEmailAndPassword(email1, password1);
            event.target.reset(); // can't figure out why reset is needed
            setMessage('Signed in, start shopping now!');
            navigate("/");
        }catch(e){
            // eslint-disable-next-line default-case
            switch(e.code){
                case "auth/wrong-password":
                    alert('Incorrect Password');
                    break;
                case "auth/user-not-found":
                    alert('Incorrect Email');
                    break;  
                default:
                    console.log(e);          
            }
        }
    }

    return (
        <div className="flex-1 basis-full sm:basis-1/2 max-w-md flex flex-col justify-center p-4 px-8 hover:bg-amber-50 transition-colors duration-700">
            <h1 className="text-4xl font-bold text-accent mb-2">I already have an account</h1>
            <p className="text-secondary mb-4">Sign in with your email and password</p>
            <form onSubmit={handleSubmit} className="flex flex-col" autoComplete="off">
                <FormInput label="Email" name="email1" type="email" required onChange={handleChange} value={email1} />
                <FormInput label="Password" name="password1" type="password" required minLength="6" onChange={handleChange} value={password1} />
                <button type="submit" className="m-2 rounded-tl-lg rounded-br-lg bg-primary px-4 py-2 text-lg text-white hover:bg-secondary focus:outline-none focus:ring focus:ring-grey-300">Sign In</button>
                <p className="text-center text-secondary">- OR -</p>
                <button type="button" className="m-2 rounded-tl-lg rounded-br-lg bg-blue-900 px-4 py-2 text-lg text-white hover:bg-blue-500 focus:outline-none focus:ring focus:ring-grey-300" onClick={logGoogleUser}>
                <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="inline-block pr-2">
                  <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                    <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                    <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                    <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                    <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                  </g>
                </svg>Sign In with Google</button>
            </form>
        </div>
    )
}

export default SignInForm;