import { createAsyncThunk } from "@reduxjs/toolkit";
import product from "../API/API";

// Fetch all products on app load.
export  const readAllProduct = createAsyncThunk('readAllProduct', async () => {
    return await product.getAll();
})