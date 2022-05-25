import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg"

const Navigation = () => {
    return (
        <>
            <header className="flex p-2 sticky top-0 bg-white z-10 flex-wrap">
                <div className="flex-1">
                    <Link to='/'><Logo className="h-20 ml-4" alt="logo" /></Link>
                </div>
                <input className="absolute h-8 w-8 top-10 right-10 z-10 cursor-pointer bg-slate-600 opacity-0 sm:hidden" type="checkbox" /> 
                <div className="absolute top-10 right-10 items-center justify-center sm:hidden">
                      <div className="flex flex-col items-center justify-center w-9 space-y-2">
                        <span className="block h-1 w-full rounded-xl bg-gray-700 transition-all origin-top-left hamburger-checked-1st:rotate-45"></span>
                        <span className="block h-1 w-full rounded-xl bg-gray-700 hamburger-checked-2nd:w-0"></span>
                        <span className="block h-1 w-full rounded-xl bg-gray-700 transition-all origin-bottom-left hamburger-checked-3rd:-rotate-45"></span>
                    </div>
                </div>
                {/* need to figure why transition doesn't work */}
                <nav className="w-full max-h-0 text-xl overflow-hidden transition-all duration-5000 bg-slate-50/50 child:block child:text-center menu-checked:max-h-full menu-checked:transition-all sm:max-h-fit sm:flex sm:top-0 sm:items-center sm:justify-center sm:w-fit sm:flex-row sm:gap-4 sm:child:flex-auto">
                    <Link to='/shop'>Shop</Link>
                    <Link to='/signIn'>Sign In</Link>                 
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default Navigation;