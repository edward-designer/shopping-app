import { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setIsCartOpen } from '../store/cart/cart.action';
import { selectIsCartOpen, selectProductsAdded, selectCartTotal, selectCartQuantity } from '../store/cart/cart.selector';
import { ReactComponent as Cart } from '../assets/shopping-bag.svg';
import CartDropDown from "./cart-dropdown-component";

// click outside to close
const useAutoClose = ({ setIsCartOpen, item }) => {
    const handleClosure = useCallback(
      event => {item.current&&!item.current.contains(event.target) && setIsCartOpen(false)}, //contains to check if child is in the parent node
      [setIsCartOpen, item]
    )
  
    useEffect(() => {
      window.addEventListener('click', handleClosure)
      window.addEventListener('focusin', handleClosure)
  
      return () => {
        window.removeEventListener('click', handleClosure)
        window.removeEventListener('focusin', handleClosure)
      }
    }, [handleClosure, item])
  }

const CartIcon = () => {
  const dispatch = useDispatch();  
  const isCartOpen = useSelector(selectIsCartOpen);
  const productsAdded = useSelector(selectProductsAdded);
  const cartTotal = useSelector(selectCartTotal);
  const cartQuantity = useSelector(selectCartQuantity);
    const item = useRef();
    item.current = document.getElementById('cartDropdown');
    
    useAutoClose({ setIsCartOpen, item });

    const toggleCart = (event) =>{
        event.stopPropagation();
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (
        <span className="group grid grid-cols-1 grid-rows-1 child:mx-auto place-items-center">
            <span className="col-start-1 row-start-1 py-4 w-8" ><Cart /></span>
            <span onClick={toggleCart} className="col-start-1 row-start-1 text-base text-center py-4 pt-6 w-8 cursor-pointer">{cartQuantity}</span>
            <CartDropDown />
        </span>
    )
}

export default CartIcon;