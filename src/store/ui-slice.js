import { createSlice } from "@reduxjs/toolkit";

const uiSlice =createSlice({
    name:"url",
    initialState :{
        cardIsVisible: false
    },
    reducers :{
        toggle(state) {
            state.cardIsVisible=!state.cardIsVisible;
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;
