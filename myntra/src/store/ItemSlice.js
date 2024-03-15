import { createSlice } from "@reduxjs/toolkit";
// import { DEFAULT_ITEMS } from "../data/items";


const itemSlice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    addInitialItems: (store, action) => {
    //    console.log(store,action); 
       store = action.payload;
      return store;
    },
  },
});

export const itemsActions = itemSlice.actions;
export default itemSlice;


