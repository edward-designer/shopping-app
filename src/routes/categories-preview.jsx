import { useContext } from 'react';
import { CategoriesContext } from '../contexts/categories-context'; 
import CategoryPreivew from '../components/category-preview-component';

const CategoriesPreivew = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <>
                 <h1 className="text-4xl font-bold text-accent mb-8 ml-2">Shop</h1>
                { 
                    Object.keys(categoriesMap).map( title => {
                        const products = categoriesMap[title];
                        return <CategoryPreivew key={title} title={title} products={products} />
                        
                    })
                } 
        </>    
    );
}

export default CategoriesPreivew;