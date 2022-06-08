import { CART_ACTION_TYPES } from "./cart.type";

const INITIAL_STATE = {
  isCartOpen: false,
  productsAdded: []
};

// provider

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  
  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_PRODUCTS_ADDED:
      return {
        ...state,
        productsAdded: payload,
      };   
    default:
      return state;
  }
};
