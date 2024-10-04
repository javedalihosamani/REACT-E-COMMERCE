import { configureStore } from "@reduxjs/toolkit";
import rootReducers from './../reducer/index';

const store = configureStore({
    reducer: rootReducers,
    devTools: true // Enable Redux DevTools for development environment only
});

export default store;