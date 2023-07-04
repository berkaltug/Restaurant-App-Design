import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import restaurantReducer from "./restaurantSlice";

export const store=configureStore({
    reducer:{
        restaurant:restaurantReducer,
        cart:cartReducer
    }
})