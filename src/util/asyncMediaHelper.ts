import { Movie, Series } from "../models/media";
import { getData, setData } from "./asyncStorageBase";

const moviePrefix = "movie/";
const seriesPrefix = "series/";

export const removeMovie = async (id: number) => {
  try {
    const movieList = await getMovies();
    if (!movieList) {
      return;
    }
    let filteredMovieList = movieList.filter((movie) => movie.id !== id);
    await setData(moviePrefix, filteredMovieList);
  } catch (err: any) {
    console.log(err.message);
  }
};

export const removeSeries = async (id: number) => {
  try {
    const seriesList = await getSeries();
    if (!seriesList) {
      return;
    }
    let filteredSeriesList = seriesList.filter((series) => series.id !== id);
    await setData(seriesPrefix, filteredSeriesList);
  } catch (err: any) {
    console.log(err.message);
  }
};

export const storeMovie = async (movie: Movie) => {
  try {
    let movieList = await getMovies();
    if (movieList) {
      movieList.push(movie);
    } else {
      movieList = [movie];
    }
    await setData(moviePrefix, movieList);
  } catch (err: any) {
    console.log("Error storing movie " + err.message);
  }
};

export const storeSeries = async (series: Series) => {
  try {
    let seriesList = await getSeries();
    if (seriesList) {
      seriesList.push(series);
    } else {
      seriesList = [series];
    }
    await setData(seriesPrefix, seriesList);
  } catch (err: any) {
    console.log("Error storing series " + err.message);
  }
};

export const getMovies = async () => {
  console.log("Getting movies");
  try {
    const movieList = await getData<Movie[]>(moviePrefix);
    return movieList;
  } catch (err: any) {
    console.log("Error retreiving movies: " + err.message);
  }
};

export const getSeries = async () => {
  console.log("Getting series");
  try {
    const seriesList = await getData<Series[]>(seriesPrefix);

    return seriesList;
  } catch (err: any) {
    console.log("Error in retreiving series: " + err.message);
  }
};