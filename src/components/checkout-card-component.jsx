const CheckOutCard = ({product,addToCart}) => {
    return (
        <div className="flex flex-1 justify-center gap-2">
            <img className="w-[8rem] h-[8rem] object-cover" src={product.imageUrl} alt={product.name} />
            <div className="flex-1 flex flex-cols nowrap items-center border-b">
                <div className="flex-1 text-xl">{product.name}</div>
                <button className="text-white pt-0 w-6 h-6 bg-accent rounded-full font-bold" onClick={()=>addToCart(product,-1)}>-</button>
                <div className="w-16 text-center"> {product.quantity} </div>
                <button className="text-white pt-0 w-6 h-6 bg-accent rounded-full font-bold" onClick={()=>addToCart(product,1)}>+</button>
                <div className="w-[6rem] text-right font-bold">${product.price*product.quantity}</div>
                <button className="text-white pt-0 w-6 h-6 bg-gray-300 ml-4 rounded-full font-bold" onClick={()=>addToCart(product,0)}>X</button>
            </div>
        </div>
    )
}

export default CheckOutCard;