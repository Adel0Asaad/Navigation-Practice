import { configureStore } from "@reduxjs/toolkit";
import userState from "./slices/userSlice"
import movieState from "./slices/movieSlice"
import seriesState from "./slices/seriesSlice"

export const store = configureStore({
    reducer: {
        userData: userState,
        movieData: movieState,
        seriesData: seriesState,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch