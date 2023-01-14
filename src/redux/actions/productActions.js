import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const cartProducts = (cart) => {
  return {
    type: ActionTypes.CART_PRODUCTS,
    payload: cart,
  };
};

// export const increaseQty = (itemId) => {
//   return {
//     type: ActionTypes.INCREASE_QTY,
//     payload: itemId,
//   };
// };

// export const decreaseQty = (itemId) => {
//   return {
//     type: ActionTypes.DECREASE_QTY,
//     payload: itemId,
//   };
// };
