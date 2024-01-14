import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feedState",
  initialState: "",
  reducers: {
    setFeedData: (state, action: PayloadAction<string>) => {
      return state = action.payload
    },
    resetFeedData: (state) => state = "",
  },
});

export const {setFeedData, resetFeedData} = feedSlice.actions

export default feedSlice.reducer