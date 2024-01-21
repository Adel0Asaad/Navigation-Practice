import { apiKey } from "../../backend/apiKey";
import axios from "axios";
import { useFetchGenreList } from "./useFetchGenreList";
import { useFetchMediaList } from "./useFetchMediaList";
import { baseUrl } from "../../backend/constants";
import { Movie } from "../../backend/Classes/movie";
import { Series } from "../../backend/Classes/series";
import { MediaGenre } from "../../backend/Classes/genres";

const axiosAutoConfig = {
  headers: {
    accept: "application/json",
  },
  api_key: apiKey,
};

export const movieOptions = {
  method: "GET",
  baseUrl: baseUrl,
  url: "/discover/movie",
  params: {
    language: "en-US",
    page: "1",
    sort_by: "popularity.desc",
    with_genres: "",
    api_key: apiKey,
  },
  headers: {
    accept: "application/json",
  },
};
export const seriesOptions = {
  method: "GET",
  baseUrl: baseUrl,
  url: "/discover/tv",
  params: {
    language: "en-US",
    page: "1",
    sort_by: "popularity.desc",
    with_genres: "",
    api_key: apiKey,
  },
  headers: {
    accept: "application/json",
  },
};

export const movieGenreOptions = {
  method: "GET",
  baseUrl: baseUrl,
  url: "/genre/movie/list",
  params: {
    api_key: apiKey,
  },
  headers: {
    accept: "application/json",
  },
};
export const seriesGenreOptions = {
  method: "GET",
  baseUrl: baseUrl,
  url: "/genre/tv/list",
  params: {
    api_key: apiKey,
  },
  headers: {
    accept: "application/json",
  },
};

// export const getAllMovies = () => {
//   //   return axios.get(`${baseUrl}/discover/movie`, axiosAutoConfig);
//   return axios.request(movieOptions);
// };
// export const getAllSeries = () => {
//   return axios.get(`${baseUrl}/discover/tv`, axiosAutoConfig);
// };

// export const getMovieList = (
//   page: number = 1,
//   with_genres: number[] = [],
//   initialState: Movie[] = []
// ) => {
//   const myOptions = movieOptions;
//   myOptions.params.with_genres = with_genres.toString();
//   myOptions.params.page = page.toString();
//   return useFetchMediaList(myOptions.url, myOptions, initialState);
// };

// export const getSeriesList = (
//   page: number = 1,
//   with_genres: number[] = [],
//   initialState: Series[] = []
// ) => {
//   const myOptions = seriesOptions;
//   myOptions.params.with_genres = with_genres.toString();
//   myOptions.params.page = page.toString();
//   return useFetchMediaList(myOptions.url, myOptions, initialState);
// };

export const getMovieGenres = (initialState: MediaGenre[] = []) => {
  const myOptions = movieGenreOptions;
  return useFetchGenreList(myOptions.url, myOptions, initialState);
};

export const getSeriesGenres = (initialState: MediaGenre[] = []) => {
  const myOptions = seriesGenreOptions;
  return useFetchGenreList(myOptions.url, myOptions, initialState);
};
/**
 * customHook -> apiFetching (get?) (done?)
 * + debouncing! (not done!)
 */
