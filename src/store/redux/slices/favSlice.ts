import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favState",
  initialState: false,
  reducers: {
    syncFav: (_state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { syncFav } = favSlice.actions;

export default favSlice.reducer;
