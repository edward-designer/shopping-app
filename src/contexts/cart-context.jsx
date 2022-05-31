import { createContext, useContext, useState, useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { MessageContext } from '../contexts/message-context';
import { setMessage,setShowMessage } from '../store/message/message.action';

// data storage
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=> {},
    productsAdded: [],
    setProductsAdded: ()=> {},
    cartTotal: 0,
    cartQuantity: 0,
    addToCart: ()=> {},
});

const cartReducer = (state, action)=> {
    const { type, payload } = action;
    switch (type) {
        case 'SET_IS_CART_OPEN':
            return {
                ...state, 
                isCartOpen: payload
            }
        case 'SET_PRODUCTS_ADDED':
            return {
                ...state, ...payload
            }                   
        default: 
            throw new Error(`unhandled type ${type} in the userReducer`);
    }
}

export const USER_ACTION_TYPES = {
    SET_IS_CART_OPEN : 'SET_IS_CART_OPEN',
    SET_PRODUCTS_ADDED : 'SET_PRODUCTS_ADDED',  
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartTotal: 0,
    cartQuantity: 0,
    productsAdded: []
}

export const CartProvider = ({ children }) => {
    const reduxDispatch = useDispatch();
    const [{ isCartOpen, cartTotal, cartQuantity, productsAdded }, dispatch] = useReducer(cartReducer,INITIAL_STATE);
    const setIsCartOpen = (cartOpen) => {
        dispatch({type: USER_ACTION_TYPES.SET_IS_CART_OPEN, payload:cartOpen })
    }
    const setProductsAdded = (values) => {
        dispatch({type: USER_ACTION_TYPES.SET_PRODUCTS_ADDED, payload: values})
    }

    const updatedCartReducer = (newCartItems) => {
        return {
            productsAdded: newCartItems,
            cartTotal: newCartItems.reduce((acc,item)=>{return acc+item.quantity*item.price},0),
            cartQuantity: newCartItems.reduce((acc,item)=>{return acc+item.quantity},0)
        }
    }

    const addToCart = (product,quantity=1) =>{      
        const alreadyAdded = productsAdded.findIndex(item=>item.id===product.id);
        let updatedProducts = [];
        if(alreadyAdded!==-1){
            if(quantity===0){
                updatedProducts = [...productsAdded];
                updatedProducts[alreadyAdded].quantity=0;
            }else{
                updatedProducts = [...productsAdded];
                updatedProducts[alreadyAdded].quantity+=quantity; 
            }
        }else{
            updatedProducts = [...productsAdded,{...product,quantity:1}];
        }
        updatedProducts = updatedProducts.filter(item => item.quantity>0);
        window.localStorage.setItem('productsAdded', JSON.stringify(updatedProducts));
        setProductsAdded(updatedCartReducer(updatedProducts));       
        if(quantity>0){reduxDispatch(setMessage("Item Successfully Added!"));}
        else{reduxDispatch(setMessage("Item Successfully Removed."));}
    }

    useEffect(() => {
        setProductsAdded(updatedCartReducer(JSON.parse(window.localStorage.getItem('productsAdded'))));
    }, []); 

    const value = {addToCart, isCartOpen, setIsCartOpen, productsAdded, setProductsAdded, cartTotal, cartQuantity};
 
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};