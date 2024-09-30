import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { readAllProduct } from "../action/ProductAction";
import { toast } from "react-toastify";

const initialState = [];

const productSlice = createSlice({
    name : 'ECOMMERCEPRODUCTS',
    initialState,
    extraReducers : (builder) => {
        builder
        .addCase(readAllProduct.fulfilled, (state, action) => {
            return [...action.payload]
        })
        builder
        .addCase(readAllProduct.rejected, (state, action) => {
            toast.error("Error while processing", action.error);
        })
    }
})

const rootReducer = combineReducers({
    ECOMMERCE_PRODUCTS: productSlice.reducer
})
export default  rootReducer;