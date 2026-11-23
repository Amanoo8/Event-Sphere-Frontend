import { configureStore } from "@reduxjs/toolkit";
import favourites from "./slices/favouriteSlice";
import filters  from "./slices/filterSlice"
export const store =configureStore({
    reducer:{favourites,filters},
    
});