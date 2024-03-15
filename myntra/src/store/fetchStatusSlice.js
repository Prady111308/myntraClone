import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    fetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
           state.fetchDone=true;
           return;
    },
    markFetchingStart: (state) => {
        state.fetching = true;
        return;
    },
    markFetchingFinish: (state) => {
        state.fetching = false;
        return;
    },

  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
