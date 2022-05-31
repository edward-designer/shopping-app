import { useContext, useRef } from "react";
import { CartContext } from "../contexts/cart-context";

import { useAutoAnimate } from '@formkit/auto-animate/react'

import CheckOutCard from "../components/checkout-card-component";

const CheckOut = () => {
    const { addToCart, productsAdded, cartTotal } = useContext(CartContext);
    const [parent] = useAutoAnimate();

    return (
        <div className="flex flex-col flex-wrap gap-2">
            <h1 className="basis-full text-4xl font-bold text-accent mb-2">Shopping Cart</h1>
            <div className="flex flex-1 justify-center bg-gray-200">
                <div className="w-[8rem]"></div>
                <div className="flex-1 flex flex-cols nowrap items-center child:p-2 border-b">
                    <div className="flex-1 text-xl">Product</div>
                    <div className="w-20">Quantity</div>
                    <div className="w-[7em] text-right">Price</div>
                    <div className="w-8"></div>
                </div>
            </div>
            <div  ref={parent}>
            {productsAdded.map(product =>
                (<CheckOutCard key={product.id} product={product} addToCart={addToCart} />)
            )}
            </div>
            <div className="flex flex-1 justify-center border-t-2 mt-2">
                <div className="flex-1"></div>
                <div className="w-20 font-bold">Total:</div>
                <div className="w-[6em] text-right font-bold text-4xl text-accent">${cartTotal}</div>
                <div className="w-8"></div>
            </div>
        </div>
    )
}

export default CheckOut;