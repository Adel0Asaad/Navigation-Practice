import AsyncStorage from "@react-native-async-storage/async-storage";
import { Movie } from "../../models/movie";
import { Series } from "../../models/series";

const moviePrefix = "movie/";
const seriesPrefix = "series/";

export const removeMovie = async (id: number) => {
  try {
    const key = moviePrefix + id;
    await AsyncStorage.removeItem(key);
  } catch (err: any) {
    console.log(err.message);
  }
};

export const removeSeries = async (id: number) => {
  try {
    const key = seriesPrefix + id;
    await AsyncStorage.removeItem(key);
  } catch (err: any) {
    console.log(err.message);
  }
};

export const storeMovie = async (movie: Movie) => {
  try {
    await AsyncStorage.setItem(moviePrefix + movie.id, JSON.stringify(movie));
  } catch (err: any) {
    console.log("Error storing movie " + err.message);
  }
};

export const storeSeries = async (series: Series) => {
  try {
    await AsyncStorage.setItem(
      seriesPrefix + series.id,
      JSON.stringify(series)
    );
  } catch (err: any) {
    console.log("Error storing series " + err.message);
  }
};

export const getMediaFromStorage = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (err: any) {
    console.log("Error getting media " + err.message);
  }
};

export const getAllKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const movieKeys = keys.filter((key) => key.split(`/`)[0] === "movie");
    const seriesKeys = keys.filter((key) => key.split(`/`)[0] === "series");
    return { movieKeys, seriesKeys };
  } catch (err: any) {
    console.log("Error returning all keys: " + err.message);
  }
};

export const getMovies = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    console.log("aaa: " + keys)
    const movieKeys = keys.filter((key) => key.split(`/`)[0] === "movie");

    const movieEntries = await AsyncStorage.multiGet(movieKeys);

    // Parse JSON strings and extract values
    const loadedMovies = movieEntries.map((entry) => {
      const jsonString = entry[1];
      return jsonString ? JSON.parse(jsonString) : null;
    });

    // Filter out null values
    const filteredLoadedMovies = loadedMovies.filter(
      (movie) => movie !== null
    ) as Movie[];

    return filteredLoadedMovies;
  } catch (err: any) {
    console.log("Error retreiving keys: " + err.message);
  }
};

export const getSeries = async () => {
  console.log("Getting series")
  try {
    const keys = await AsyncStorage.getAllKeys();
    console.log("bbb: " + keys)
    const seriesKeys = keys.filter((key) => key.split(`/`)[0] === "series");

    const seriesEntries = await AsyncStorage.multiGet(seriesKeys);

    // Parse JSON strings and extract values
    const loadedSeries = seriesEntries.map((entry) => {
      const jsonString = entry[1];
      return jsonString ? JSON.parse(jsonString) : null;
    });

    // Filter out null values
    const filteredLoadedSeries = loadedSeries.filter(
      (series) => series !== null
    ) as Series[];

    return filteredLoadedSeries;
  } catch (err: any) {
    console.log("Error in getSeries: " + err.message);
  }
};
