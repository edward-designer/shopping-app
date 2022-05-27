import { useContext } from 'react'; 
import { Link } from 'react-router-dom';
import ProductCard from '../components/product-card-component';
import { CartContext } from '../contexts/cart-context';

const CategoryPreivew = ({ title, products}) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="flex">
            <h2 className="flex flex-1 basis-1/4 p-2 text-xl sm:text-2xl font-bold text-secondary mb-2 ml-2 border-t border-accent hover:bg-slate-100 hover:text-accent">
                <Link className="block" to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className="flex flex-1 basis-3/4">
                {
                    products.filter((_,idx)=>idx<3).map((item)=><ProductCard product={item} key={item.id} addToCart={addToCart} />)
                }
            </div>
        </div>
    );
}

export default CategoryPreivew;