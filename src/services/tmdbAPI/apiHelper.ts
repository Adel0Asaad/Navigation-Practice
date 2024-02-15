import { apiKey } from "./apiKey";
import axios from "axios";
import { baseUrl } from "./constants";

export const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    config.params.api_key = apiKey;
    console.log("Sending request with config: ", config);
    return config;
  },
  (err: any) => {
    console.error(err.message);
    return Promise.reject(err);
  }
);

axiosClient.interceptors.response.use((value) => {
  console.log("Got response with data: ", value.data);
  return value;
},
(err: any) => {
  console.error(err.message)
  return Promise.reject(err)
});

export const mediaParams = {
  language: "en-US",
  page: "1",
  sort_by: "popularity.desc",
  with_genres: "",
};

export const endPoints = {
  discoverMovieUrl: "/discover/movie",
  discoverSeriesUrl: "/discover/tv",
  searchMovieUrl: "/search/movie",
  searchSeriesUrl: "/search/tv",
  movieGenresUrl: "/genre/movie/list",
  seriesGenresUrl: "/genre/tv/list",
};
