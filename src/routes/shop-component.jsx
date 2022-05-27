import { useContext } from 'react';
import { ProductContext } from '../contexts/product-context'; 
import { CartContext } from '../contexts/cart-context'; 
import { MessageContext } from '../contexts/message-context'
import ProductCard from '../components/product-card-component';

const Shop = () => {
    const { product } = useContext(ProductContext);
    const { productsAdded, setProductsAdded, setIsCartOpen } = useContext(CartContext);
    const { message, setMessage, showMessage, setShowMessage } = useContext(MessageContext);;

    const addToCart = (product) =>{      
        const alreadyAdded = productsAdded.findIndex(item=>item.id===product.id);
        if(alreadyAdded!==-1){
            const updatedProductsAdded = [...productsAdded];
            updatedProductsAdded[alreadyAdded].quantity++; 
            setProductsAdded(updatedProductsAdded);
        }else{
            setProductsAdded([...productsAdded,{...product,quantity:1}]);
        }
        setMessage("Item Successfully Added!");
        setShowMessage(true);
    }

    return (
        <div className="flex flex-wrap">
            {product.map(item => (
                <ProductCard product={item} key={item.id} addToCart={addToCart} />
            ))}
        </div>
    );
}

export default Shop;