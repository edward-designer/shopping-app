import { createSelector } from 'reselect';

const cartReducer = state => (state.cart)

export const selectProductsAdded  = createSelector(
    [cartReducer],
    (cart) => cart.productsAdded
) 

export const selectIsCartOpen  = createSelector(
    [cartReducer],
    (cart) => cart.isCartOpen
) 

export const selectCartTotal = createSelector(
    [selectProductsAdded],
    (productsAdded) => productsAdded.reduce((acc, product) =>acc+product.price*product.quantity,0)
)

export const selectCartQuantity = createSelector(
    [selectProductsAdded],
    (productsAdded) => productsAdded.reduce((acc, product) =>acc+product.quantity,0)
)