const CartDropDownCard = ({product}) => {
    return (
        <div className="flex flex-1 justify-center hover:bg-gray-200">
            <img className="w-14 object-cover" src={product.imageUrl} alt={product.name} />
            <div className="flex-1 flex flex-cols nowrap items-center child:p-2 border-b">
                <div className="flex-1">{product.name}</div>
                <div className="w-12">X {product.quantity}</div>
                <div className="w-12 text-right">${product.price*product.quantity}</div>
            </div>
        </div>
    )
}

export default CartDropDownCard;