import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name:"favourite",
    initialState:{
        name:"Aman",
    },
    reducers:{
        toggleFavourites(state){
            console.log("HII");
        },
        removeFavourites(state){},
        clearFavourites(state){}
    }
});
 
export const{toggleFavourites,removeFavourites,clearFavourites}=favouriteSlice.actions;

export default favouriteSlice.reducer;