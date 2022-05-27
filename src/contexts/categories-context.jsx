import { createContext, useEffect, useState } from 'react';

import { getCategoriesAndDocuments } from '../utiles/firebase.utils';

//import SHOP_DATA from '../shop-data.js';

// data storage
export const CategoriesContext = createContext({
    categoriesMap: {}
});

// provider

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async() => { // for using async in useEffect
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    },[])

    const value = {categoriesMap};

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
};