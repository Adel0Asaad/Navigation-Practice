import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const userSlice = createSlice({
  name: "userState",
  initialState: "",
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
        return state = action.payload
    },
    resetUsername: (state) => state = "",
  },
});

export const {setUsername, resetUsername} = userSlice.actions

export default userSlice.reducer