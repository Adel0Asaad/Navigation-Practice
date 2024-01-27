import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favState",
  initialState: true,
  reducers: {
    syncFav: (state) => {
      return !state;
    },
  },
});

export const { syncFav } = favSlice.actions;

export default favSlice.reducer;
