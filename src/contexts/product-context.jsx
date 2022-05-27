import { createContext, useEffect, useState } from 'react';

// data storage
export const ProductContext = createContext({
    product: [],
    setProduct: ()=> null,
});

// provider

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    const value = {product};
    
    useEffect(()=>{
        fetch('./shop-data.json').then(data=>data.json()).then(data=>setProduct(data)).catch(e=>{alert(e.message);});
    },[]);

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
};