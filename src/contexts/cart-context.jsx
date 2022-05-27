import { createContext, useContext, useState, useEffect } from 'react';
import { MessageContext } from '../contexts/message-context';

// data storage
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=> {},
    productsAdded: [],
    setProductsAdded: ()=> {},
    cartTotal: 0,
    setCartTotal: ()=> {},
    cartQuantity: 0,
    setCartQuantity: ()=> {},
    addToCart: ()=> {},
});


export const CartProvider = ({ children }) => {
    const {setMessage, setShowMessage} = useContext(MessageContext);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [productsAdded, setProductsAdded] = useState(JSON.parse(window.localStorage.getItem('productsAdded'))||[]);
    
    const addToCart = (product) =>{      
        const alreadyAdded = productsAdded.findIndex(item=>item.id===product.id);
        if(alreadyAdded!==-1){
            const updatedProductsAdded = [...productsAdded];
            updatedProductsAdded[alreadyAdded].quantity++; 
            setProductsAdded(updatedProductsAdded);
        }else{
            setProductsAdded([...productsAdded,{...product,quantity:1}]);
        }
        setMessage("Item Successfully Added!");
        setShowMessage(true);
    }

    useEffect(() => {
        window.localStorage.setItem('productsAdded', JSON.stringify(productsAdded));
    }, [productsAdded]); 

    useEffect(() => {
        setCartQuantity(productsAdded.reduce((acc,item)=>{return acc+item.quantity},0));
    }, [productsAdded])

    useEffect(() => {
        setCartTotal(productsAdded.reduce((acc,item)=>{return acc+item.quantity*item.price},0));
    }, [productsAdded])

    const value = {addToCart, isCartOpen, setIsCartOpen, productsAdded, setProductsAdded, cartTotal, setCartTotal, cartQuantity, setCartQuantity};
 
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};