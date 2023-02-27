import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  cart: JSON.parse(localStorage.getItem("myCart") || "[]"),
  itemId: null,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const cartProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.CART_PRODUCTS:
      let newCart;
      const i = state.cart.findIndex((item) => item.id === payload?.id);
      if (i < 0) {
        newCart = [...state.cart, payload];
      } else {
        newCart = [...state.cart];
        newCart[i].quantity++;
      }
      localStorage.setItem("myCart", JSON.stringify(newCart));
      return { ...state, cart: newCart };
    case ActionTypes.INCREASE_QTY:
      const itemIndex = state.cart.findIndex((item) => item.id === payload);
      const incCart = [...state.cart];
      incCart[itemIndex].quantity++;
      localStorage.setItem("myCart", JSON.stringify(incCart));
      return { ...state, cart: incCart };
    case ActionTypes.DECREASE_QTY:
      const itmIndex = state.cart.findIndex((item) => item.id === payload);
      const decCart = [...state.cart];
      if (decCart[itmIndex].quantity > 1) {
        decCart[itmIndex].quantity--;
      } else {
        decCart.splice(itmIndex, 1);
      }
      localStorage.setItem("myCart", JSON.stringify(decCart));
      return { ...state, cart: decCart };
    case ActionTypes.EMPTY_CART_PRODUCTS:
      return {};
    default:
      return state;
  }
};
