import { combineReducers } from "@reduxjs/toolkit";
import cartslice from "./HandleCart";
import productslice from "./ProductReducer";
import handleCart from "./HandleCart";

const rootReducer = combineReducers({
    handleCart,
    productslice
});
export default  rootReducer;