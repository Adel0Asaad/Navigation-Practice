import { configureStore } from "@reduxjs/toolkit";
import authState from "./authSlice";
import userState from "./userSlice"
import feedState from "./feedSlice"

export const store = configureStore({
    reducer: {
        loggedState: authState,
        username: userState,
        feedbackData: feedState,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch