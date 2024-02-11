import AsyncStorage from "@react-native-async-storage/async-storage";
import { Movie } from "../../models/movie";
import { Series } from "../../models/series";

const moviePrefix = "movie/";
const seriesPrefix = "series/";

export const removeMovie = async (id: number) => {
  try {
    const movieList = await getMovies()
    if(!movieList){
      return
    }
    let filteredMovieList = movieList.filter((movie) => movie.id !== id)
    await AsyncStorage.setItem(moviePrefix, JSON.stringify(filteredMovieList))
    
  } catch (err: any) {
    console.log(err.message);
  }
};

export const removeSeries = async (id: number) => {
  try {
    const seriesList = await getSeries()
    if(!seriesList){
      return
    }
    let filteredSeriesList = seriesList.filter((series) => series.id !== id)
    await AsyncStorage.setItem(seriesPrefix, JSON.stringify(filteredSeriesList))
    
  } catch (err: any) {
    console.log(err.message);
  }
};

export const storeMovie = async (movie: Movie) => {
  try {
    let movieList = await getMovies()
    if(movieList){
      movieList.push(movie)
    }else{
      movieList = [movie]
    }
    await AsyncStorage.setItem(moviePrefix, JSON.stringify(movieList));
  } catch (err: any) {
    console.log("Error storing movie " + err.message);
  }
};

export const storeSeries = async (series: Series) => {
  try {
    let seriesList = await getSeries()
    if(seriesList){
      seriesList.push(series)
    }else{
      seriesList = [series]
    }
    await AsyncStorage.setItem(seriesPrefix, JSON.stringify(seriesList))
  } catch (err: any) {
    console.log("Error storing series " + err.message);
  }
};

export const getMovies = async () => {
  console.log("Getting movies")
  try {
    
    const movieListJson = await AsyncStorage.getItem(moviePrefix) ?? ""

    // Parse JSON strings and extract values
    const movieList = JSON.parse(movieListJson) as Movie[]

    return movieList;
  } catch (err: any) {
    console.log("Error retreiving keys: " + err.message);
  }
};

export const getSeries = async () => {
  console.log("Getting series")
  try {
    
    const seriesListJson = await AsyncStorage.getItem(seriesPrefix) ?? ""

    // Parse JSON strings and extract values
    const seriesList = JSON.parse(seriesListJson) as Series[]

    return seriesList;
  } catch (err: any) {
    console.log("Error in getSeries: " + err.message);
  }
};
