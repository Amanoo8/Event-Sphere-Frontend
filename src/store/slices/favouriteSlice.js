import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name:"favourite",
    initialState:{
        items:JSON.parse(localStorage.getItem("eventsphere-favorites"))||[],
    },
    reducers:{
        toggleFavourites(state,action){
            const event=action.payload;
            const existingEvent=state.items.find(
                (e)=>(e.id||e._id)===(event.id||event._id),
            );
           if(!existingEvent)state.items.push(event);
           else {
            state.items=state.items.filter((e)=>(e.id||e._id)!==(event.id||event._id));
           }
           localStorage.setItem("eventsphere-favorites",JSON.stringify(state.items));
        },
        removeFavourites(state){},
        clearFavourites(state){
            state.items=[];
            localStorage.clear("eventsphere-favorites");
        }
    }
});
 
export const{toggleFavourites,removeFavourites,clearFavourites}=favouriteSlice.actions;

export default favouriteSlice.reducer;