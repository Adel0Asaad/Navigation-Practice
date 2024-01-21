import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../../backend/Classes/movie";

interface MovieState {
  movieList: Movie[];
}

const initialState: MovieState = {
  movieList: [],
};

const movieSlice = createSlice({
  name: "mediaList",
  initialState: initialState,
  reducers: {
    setMovieList: (state, action: PayloadAction<Movie[]>) => {
      state.movieList = action.payload;
      return state;
    },
    addMovieList: (state, action: PayloadAction<Movie[]>) => {
      const existingIdsSet = new Set(
        state.movieList.map((existingMovie) => existingMovie.id)
      );
      const listToAdd = action.payload.filter(
        (movie) => !existingIdsSet.has(movie.id)
      );

      state.movieList = [...state.movieList, ...listToAdd];
      return state;
    },
    resetMovies: (state) => {
      return (state = initialState);
    },
  },
});

export const { setMovieList, addMovieList, resetMovies } = movieSlice.actions;

export default movieSlice.reducer;
