import { configureStore } from "@reduxjs/toolkit";
import authState from "./slices/authSlice";
import userState from "./slices/userSlice"
import feedState from "./slices/feedSlice"

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