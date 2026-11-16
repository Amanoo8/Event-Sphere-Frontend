import { configureStore } from "@reduxjs/toolkit";
import favourite from "./slices/favouriteSlice";

export const store =configureStore({
    reducer:{HII:favourite}
});