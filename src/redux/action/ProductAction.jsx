import { createAsyncThunk } from "@reduxjs/toolkit";
import products from "../API/API";

// Fetch all products on app load.
export  const readAllProduct = createAsyncThunk('readAllProduct', async () => {
    const res = await products.getAll();
    return res.data
})

// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

// For Remove Item from Cart

export const removeCart = (productId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: productId
    }
}

/* export const addCart = createAsyncThunk('addCart', async (product) => {
    return product
});

export const removeCart = createAsyncThunk('removeCart', async (product) => {
    return product
}); */