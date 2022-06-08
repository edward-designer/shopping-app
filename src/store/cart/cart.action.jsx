import { CART_ACTION_TYPES } from './cart.type'

export const setIsCartOpen = (isCartOpen) => ({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: isCartOpen});

export const setProductsAdded = (items) => ({type: CART_ACTION_TYPES.SET_PRODUCTS_ADDED, payload: items});

export const addToCart = (productsAdded) => (product,quantity=1) =>{      
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
    //window.localStorage.setItem('productsAdded', JSON.stringify(updatedProducts));

    return ({type: CART_ACTION_TYPES.SET_PRODUCTS_ADDED, payload: updatedProducts});       
}