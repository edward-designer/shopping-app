import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg"

const Navigation = () => {
    return (
        <>
            <header className="flex p-2">
                <div className="flex-1">
                    <Link to='/'><Logo className="h-20 ml-4" alt="logo" /></Link>
                </div>
                <div className="flex items-center content-center gap-4 text-xl">
                    <Link to='/shop'>Shop</Link>
                    <Link to='/shop'>Shop</Link>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Navigation;