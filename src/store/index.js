import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/cart-slice";
import productSlice from "../slices/product-slice";


const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        product: productSlice.reducer
    }
})

export default store;