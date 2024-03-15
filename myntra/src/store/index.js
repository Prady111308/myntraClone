import {configureStore}  from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagslice";



const myntraStore = configureStore({
    reducer :{
        items : itemSlice.reducer,
        fetchStatus : fetchStatusSlice.reducer,
        bagItems : bagSlice.reducer
    }
})

export default myntraStore;