import { configureStore } from "@reduxjs/toolkit";
import favourites from "./slices/favouriteSlice";

export const store =configureStore({
    reducer:{favourites}
});