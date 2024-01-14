import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const authSlice = createSlice({
  name: "authState",
  initialState: false,
  reducers: {
    login: (state) => {
        return state = true
    },
    logout: (state) => state = false,
  },
});

export const {login, logout} = authSlice.actions

export default authSlice.reducer