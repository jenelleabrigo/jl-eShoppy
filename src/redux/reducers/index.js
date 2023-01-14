import {combineReducers} from "redux";
import { toggleReducer } from "./toggleReducer";
import { productReducer, selectedProductReducer, cartProductsReducer } from "./productReducer";


export const reducers = combineReducers ({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: cartProductsReducer,
    toggle: toggleReducer,
})

export default reducers;