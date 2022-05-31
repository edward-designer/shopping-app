import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAuthUserWithEmailAndPassword,createUserDoccumentFromAuth } from '../utiles/firebase.utils';
import FormInput from './form-input-component';
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = ({ setMessage }) => {
    const dispatch = useDispatch();
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;
    const navigate = useNavigate();

    const resetForm = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name,value } = event.target;
        setFormFields({...formFields, [name]:value}); //change the object property [name]
        //setFormFields(Object.assign({},formFields, {[name]:value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password!==confirmPassword||!displayName||!email) return;
        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            const userDocRef = await createUserDoccumentFromAuth(user,{displayName});
            dispatch(setMessage('Great! You are in. Start shopping now!'));
            event.target.reset();
            resetForm();
            navigate("/");
        }catch(e){
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
            <h1 className="text-4xl font-bold text-accent mb-2">I don't have an account</h1>
            <p className="text-secondary mb-4">Sign up with your email and password</p>
            <form onSubmit={handleSubmit} className="flex flex-col" autoComplete="off">
                <FormInput label="Display Name" name="displayName" type="text" required onChange={handleChange} value={displayName} />
                <FormInput label="Email" name="email" type="email" required onChange={handleChange} value={email} />
                <FormInput label="Password" name="password" type="password" required minLength="6" onChange={handleChange} value={password} />
                <FormInput label="Confirm Password" name="confirmPassword" type="password" required minLength="6" onChange={handleChange} value={confirmPassword} />
                <button type="submit" className="m-2 rounded-tl-lg rounded-br-lg bg-primary px-4 py-2 text-lg text-white hover:bg-secondary focus:outline-none focus:ring focus:ring-grey-300" >Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;