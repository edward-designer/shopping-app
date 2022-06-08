import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../store/categories/categories.selector';
import Spinner from '../components/spinner-component'
import ProductCard from '../components/product-card-component'

const Category = ({addToCart}) => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const products = categoriesMap[category];
    
    return (
        <>
            <h1 className="text-4xl font-bold text-accent mb-8 ml-2"><Link to='/shop'>Shop</Link> _ {category.toUpperCase()}</h1>
            {isLoading? (<Spinner />): (<div className="flex flex-1 flex-wrap">
                {products?.map(product => <ProductCard product={product} addToCart={addToCart} key={product.id} />)}
            </div>)}
        </>
    )
}

export default Category;