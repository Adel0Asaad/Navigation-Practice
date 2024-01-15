import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userState",
  initialState: {username: "", logged: false},
  reducers: {
    login: (state, action: PayloadAction<string>) => {
        return state = {username: action.payload, logged: true}
    },
    logout: (state) => state = {username: "", logged: false},
  },
});

export const {login, logout} = userSlice.actions

export default userSlice.reducer