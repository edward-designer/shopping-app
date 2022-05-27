import { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductCard from '../components/product-card-component'

import { CategoriesContext } from '../contexts/categories-context'
import { CartContext } from '../contexts/cart-context'

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const { addToCart } = useContext(CartContext);
    
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() =>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap])
    
    return (
        <>
            <h1 className="text-4xl font-bold text-accent mb-8 ml-2"><Link to='/shop'>Shop</Link> _ {category.toUpperCase()}</h1>
            <div className="flex flex-1 flex-wrap">
                {products&&products.map(product => <ProductCard product={product} addToCart={addToCart} key={product.id} />)}
            </div>
        </>
    )
}

export default Category;