import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../store/categories/categories.selector';

import CategoryPreivew from '../components/category-preview-component';

const CategoriesPreivew = ({addToCart}) => {
    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <>
                 <h1 className="text-4xl font-bold text-accent mb-8 ml-2">Shop</h1>
                { 
                    Object.keys(categoriesMap).map( title => {
                        const products = categoriesMap[title];
                        return <CategoryPreivew key={title} title={title} products={products} addToCart={addToCart} />
                        
                    })
                } 
        </>    
    );
}

export default CategoriesPreivew;