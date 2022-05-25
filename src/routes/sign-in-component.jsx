import { signInWithGooglePopup, createUserDoccumentFromAuth } from "../utiles/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async() => {
       const { user } = await signInWithGooglePopup();
       const userDocRef = await createUserDoccumentFromAuth(user);
    }
    return (
        <div className="">
            <h1 className="text-4xl font-bold text-accent">Sign In Page</h1>
            <button className="rounded-tl-lg rounded-br-lg bg-primary px-4 py-2 text-lg text-white hover:bg-secondary focus:outline-none focus:ring focus:ring-grey-300" onClick={logGoogleUser}>Sign In with Google</button>
        </div>
    );
}

export default SignIn;