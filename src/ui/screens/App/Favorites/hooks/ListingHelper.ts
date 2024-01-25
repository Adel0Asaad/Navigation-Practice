import { useEffect, useState } from "react";
import { useDebounce } from "../../../../../util/Debounce";
import { MediaType } from "../../../../../services/types";
import {
  movieGenresUrl,
  seriesGenresUrl,
} from "../../../../../services/tmdbAPI/apiHelper";
import { Movie } from "../../../../../models/movie";
import { Series } from "../../../../../models/series";
import { useFetchGenreList } from "../../../../../services/tmdbAPI/useFetchGenreList";
import {
  getMovies,
  getSeries,
} from "../../../../../store/persisted/asyncStorageHelper";

export const useListingHook = (mediaType: MediaType) => {
  //

  ////////////////////////// MTYPE //////////////////////////
  const isMediaMovies = mediaType === "Movies";
  const genresUrl = isMediaMovies ? movieGenresUrl : seriesGenresUrl;
  ////////////////////////// MTYPE //////////////////////////

  //

  ////////////////////////// GENRES //////////////////////////
  const [genreList, genreListError, genreListLoading] = useFetchGenreList(
    genresUrl,
    []
  );
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const appliedGenreFilter = useDebounce(selectedGenres, 500);

  const toggleGenre = (id: number) => {
    setSelectedGenres((prevList) => {
      return prevList.includes(id)
        ? prevList.filter((item) => item !== id)
        : [...prevList, id];
    });
  };
  ////////////////////////// GENRES //////////////////////////

  //

  ////////////////////////// MEDIA ///////////////////////////
  useEffect(() => {
    isMediaMovies
      ? getMovies().then((movieList) => setFilteredMediaList(movieList!))
      : getSeries().then((seriesList) => setFilteredMediaList(seriesList!));
  }); // loads mediaList

  const [filteredMediaList, setFilteredMediaList] = useState<
    Movie[] | Series[]
  >([]);
  ////////////////////////// MEDIA ///////////////////////////

  //

  ////////////////////////// SEARCH //////////////////////////
  const [searchText, setSearchText] = useState("");
  const appliedTextFilter = useDebounce(searchText, 500);
  ////////////////////////// SEARCH //////////////////////////

  /////////////////////////////////////////////////////////////// DEBUGGING ///////////////////////////////////////////////////////////////
  useEffect(() => {
    if (genreListError !== null) {
      let consType = isMediaMovies ? "movies: " : "series: ";
      console.log("Error loading genres of " + consType + genreListError);
    }
  }, [genreListError]);
  /////////////////////////////////////////////////////////////// DEBUGGING ///////////////////////////////////////////////////////////////

  //

  return [
    filteredMediaList,
    genreList,
    genreListLoading,
    toggleGenre,
    searchText,
    setSearchText,
  ];
};
