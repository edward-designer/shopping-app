import { CartContext } from '../contexts/cart-context'; 
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartDropDownCard from "./cart-dropdown-card-component";

import { Link } from "react-router-dom";

const CartDropDown = () => {
    const { productsAdded,setIsCartOpen,isCartOpen } = useContext(CartContext);

    const navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `checkOut`; 
      navigate(path);
      setIsCartOpen(false);
    }

    return (
        <div className={"w-80 absolute top-20 right-0 flex flex-col " + (isCartOpen ? 'visible' : 'hidden')} id="cartDropdown">
            <div className="max-h-[80vh] overflow-scroll p-4 bg-white/[.9] border transition-all min-h-80">   
                {productsAdded.map(item => (
                    <CartDropDownCard product={item} key={item.id} />
                ))}
                {productsAdded.length>0?
                <button onClick={routeChange} type="button" className="w-full m-2 rounded-tl-lg rounded-br-lg bg-primary px-4 py-2 text-lg text-white hover:bg-secondary focus:outline-none focus:ring focus:ring-grey-300">Go To Cart</button>
                : <div className="text-center italic text-slate-500 ">Your cart is empty.<br /><Link to='/shop' onClick={()=>setIsCartOpen(false)}>Add something now!</Link></div>}    
            </div>
        </div>
    )
}

export default CartDropDown;