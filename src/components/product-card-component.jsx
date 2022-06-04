import { useDispatch } from 'react-redux'

const ProductCard = ({product,addToCart}) => {
    const {imageUrl, name, price} = product;
    const dispatch = useDispatch();
    return (
        <div className="group flex flex-0 flex-row justify-center flex-wrap basis-1/2 sm:basis-1/3 p-2 overflow-hidden relative mb-8">
            <img className="group-hover:opacity-80 transition-all flex-auto w-full h-60 object-cover lg:h-80" src={imageUrl} alt={name} />
            <div className="basis-full flex gap-2">
                <div className="flex-1">{name}</div>
                <div>${price}</div>
            </div>
            <button onClick={()=>dispatch(addToCart(product))} type="button" className="w-[80%] absolute -bottom-20 group-hover:bottom-10 transition-all m-2 rounded-tl-lg rounded-br-lg bg-primary px-4 py-2 text-lg text-white hover:bg-accent focus:outline-none focus:ring focus:ring-grey-300">Add to Cart</button>  
        </div>
    )
}

export default ProductCard;