import { apiKey } from "../apiKey";
import axios from "axios";
import { baseUrl } from "../constants";

export const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    config.params.api_key = apiKey;
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export const mediaParams = {
  language: "en-US",
  page: "1",
  sort_by: "popularity.desc",
  with_genres: "",
};

export const discoverMovieUrl = "/discover/movie";

export const discoverSeriesUrl = "/discover/tv";

export const movieGenresUrl = "/genre/movie/list";

export const seriesGenresUrl = "/genre/tv/list";

// export const getMovieGenres = (initialState: MediaGenre[] = []) => {
//   const myOptions = movieGenreOptions;
//   return useFetchGenreList(myOptions.url, myOptions, initialState);
// };

// export const getSeriesGenres = (initialState: MediaGenre[] = []) => {
//   const myOptions = seriesGenreOptions;
//   return useFetchGenreList(myOptions.url, myOptions, initialState);
// };

/**
 * customHook -> apiFetching (get?) (done?)
 * + debouncing! (not done!)
 */
