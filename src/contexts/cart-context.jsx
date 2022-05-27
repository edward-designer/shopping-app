import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { createContext, useState, useEffect } from 'react';

// data storage
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=> {},
    productsAdded: [],
    setProductsAdded: ()=> {},
    cartTotal: 0,
    setCartTotal: ()=> {},
    cartQuantity: 0,
    setCartQuantity: ()=> {}
});


export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [productsAdded, setProductsAdded] = useState(JSON.parse(window.localStorage.getItem('productsAdded'))||[]);
    const value = {isCartOpen, setIsCartOpen, productsAdded, setProductsAdded, cartTotal, setCartTotal, cartQuantity, setCartQuantity};
    
    useEffect(() => {
        window.localStorage.setItem('productsAdded', JSON.stringify(productsAdded));
    }, [productsAdded]); 

    useEffect(() => {
        setCartQuantity(productsAdded.reduce((acc,item)=>{return acc+item.quantity},0));
    }, [productsAdded])

    useEffect(() => {
        setCartTotal(productsAdded.reduce((acc,item)=>{return acc+item.quantity*item.price},0));
    }, [productsAdded])

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};