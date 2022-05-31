import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreivew from './categories-preview';
import Category from './category-component';
import { getCategoriesAndDocuments } from '../utiles/firebase.utils';
import { setCategories } from '../store/categories/categories.action';

const Shop = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
        const getCategoriesMap = async() => { // for using async in useEffect
            const categoryArray = await getCategoriesAndDocuments('categories');
            dispatch(setCategories(categoryArray));
        }
        getCategoriesMap();
    },[])

    return (
        <Routes>
            <Route index element={<CategoriesPreivew />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop;