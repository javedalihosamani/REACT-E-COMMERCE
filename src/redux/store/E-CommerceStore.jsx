import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/ProductReducer";

const store = configureStore({
    reducer: rootReducer,
    devTools: true // Enable Redux DevTools for development environment only
});

export default store;