import { createSlice } from "@reduxjs/toolkit";
import { readAllProduct } from "../action/ProductAction";
import { toast } from "react-toastify";

const initialState = [];

const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers : (builder) => {
        builder.addCase(readAllProduct.fulfilled, (state, action) => {
            return [...action.payload]
        })
        builder.addCase(readAllProduct.rejected, (state, action) => {
            toast.error("Error while processing", action.error);
        })
    }
})

const {reducer} = productSlice;
export default reducer;