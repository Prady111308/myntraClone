import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name :"bagItems",
    initialState : [],
    reducers : {
          addToBag : (state,action)=>{
               let newState = [...state,action.payload]
            //    console.log(newState[0].id);
               return newState;
        },
          removeFromBag : (state,action) =>{
            let newState = state.filter((state) => state.id != action.payload);
            return newState;
          }
          
    }
})

export const bagSliceActions = bagSlice.actions;

export default bagSlice;