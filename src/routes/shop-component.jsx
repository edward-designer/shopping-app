import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesPreivew from './categories-preview';
import Category from './category-component';
import { getCategoriesAndDocuments } from '../utiles/firebase.utils';
import { fetchCategoriesStart } from '../store/categories/categories.action';
import { addToCart } from '../store/cart/cart.action';
import { selectProductsAdded } from '../store/cart/cart.selector';

const Shop = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(fetchCategoriesStart());
    },[])

    const productsAdded = useSelector(selectProductsAdded);

    return (
        <Routes>
            <Route index element={<CategoriesPreivew addToCart={addToCart(productsAdded)} />} />
            <Route path=':category' element={<Category addToCart={addToCart(productsAdded)} />} />
        </Routes>
    );
}

export default Shop;