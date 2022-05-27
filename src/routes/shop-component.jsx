import { Routes, Route } from 'react-router-dom';
import CategoriesPreivew from './categories-preview';
import Category from './category-component';

const Shop = () => {
  
    return (
        <Routes>
            <Route index element={<CategoriesPreivew />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop;