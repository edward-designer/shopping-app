import { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../store/categories/categories.selector';

import ProductCard from '../components/product-card-component'

import { CartContext } from '../contexts/cart-context'

const Category = ({addToCart}) => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const products = categoriesMap[category];

    //const { addToCart } = useContext(CartContext);
    
    return (
        <>
            <h1 className="text-4xl font-bold text-accent mb-8 ml-2"><Link to='/shop'>Shop</Link> _ {category.toUpperCase()}</h1>
            <div className="flex flex-1 flex-wrap">
                {products?.map(product => <ProductCard product={product} addToCart={addToCart} key={product.id} />)}
            </div>
        </>
    )
}

export default Category;