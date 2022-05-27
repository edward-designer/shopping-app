import { useContext } from 'react';
import { Outlet, NavLink } from "react-router-dom";
import { UserContext } from "../contexts/user-context";
import { signOutUser } from "../utiles/firebase.utils";
import { ReactComponent as Logo } from "../assets/crown.svg";
import Message from "../components/message-component";
import CartIcon from "./cart-icon-component";
import { MessageContext } from "../contexts/message-context";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { setMessage,setShowMessage } = useContext(MessageContext);

    return (
        <>
            <Message />
            <header className="flex p-2 sticky top-0 z-10 bg-white/90 flex-wrap items-center gap-4">
                <div className="flex-1">
                    <div className="w-fit"><NavLink to='/'><Logo className="h-20 ml-4" alt="logo" /></NavLink></div>
                </div>
                <input className="absolute h-8 w-8 top-10 right-14 z-10 cursor-pointer bg-slate-600 opacity-0 sm:hidden" type="checkbox" /> 
                <div className="absolute top-10 right-14 items-center justify-center sm:hidden">
                      <div className="flex flex-col items-center justify-center w-9 space-y-2">
                        <span className="block h-1 w-full rounded-xl bg-gray-700 transition-all origin-top-left hamburger-checked-1st:rotate-45"></span>
                        <span className="block h-1 w-full rounded-xl bg-gray-700 hamburger-checked-2nd:w-0"></span>
                        <span className="block h-1 w-full rounded-xl bg-gray-700 transition-all origin-bottom-left hamburger-checked-3rd:-rotate-45"></span>
                    </div>
                </div>
                {/* need to figure why transition doesn't work */}
                <nav className="order-1 w-full max-h-0 text-xl overflow-hidden transition-all duration-5000 bg-slate-50/50 child:block child:text-center child:my-4 menu-checked:max-h-full menu-checked:transition-all sm:order-[0] sm:max-h-fit sm:flex sm:top-0 sm:items-center sm:justify-center sm:w-fit sm:flex-row sm:gap-4">
                    <NavLink to='/shop' className="hover:text-accent">Shop</NavLink>
                    {
                        currentUser? (
                            <span onClick={()=>{signOutUser();setMessage('Signed out already. See you soon!');setShowMessage(true);}} className="cursor-pointer whitespace-nowrap hover:text-accent">Sign Out</span>
                        ):(
                            <NavLink to='/signIn' className="hover:text-accent">Sign In</NavLink>  
                        )
                    }                           
                </nav>
                <CartIcon />  
            </header>
            <Outlet />
        </>
    );
}

export default Navigation;