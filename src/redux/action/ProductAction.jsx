import { createAsyncThunk } from "@reduxjs/toolkit";
import products from "../API/API";

// Fetch all products on app load.
export  const readAllProduct = createAsyncThunk('readAllProduct', async () => {
    const res = await products.getAll();
    return res.data
})