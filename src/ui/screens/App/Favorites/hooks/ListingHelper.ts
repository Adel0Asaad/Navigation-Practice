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

  ////////////////////////// UI-Info //////////////////////////
  const [UIParams, setUIParams] = useState<{
    selectedGenres: number[];
    searchText: string;
  }>({ selectedGenres: [], searchText: "" });
  ////////////////////////// UI-Info //////////////////////////

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

  useEffect(() => {
    setUIParams((prevParams) => {
      let newParams = { ...prevParams };
      newParams.selectedGenres = appliedGenreFilter;
      return newParams;
    });
  }, [appliedGenreFilter]);
  ////////////////////////// GENRES //////////////////////////

  //

  ////////////////////////// MEDIA ///////////////////////////
  useEffect(() => {
    isMediaMovies
      ? getMovies().then((movieList) => setIMediaList(movieList!))
      : getSeries().then((seriesList) => setIMediaList(seriesList!));
  }); // loads mediaList

  const [iMediaList, setIMediaList] = useState<Movie[] | Series[]>([]);
  const [filteredMediaList, setFilteredMediaList] = useState<
    Movie[] | Series[]
  >([]);
  ////////////////////////// MEDIA ///////////////////////////

  //

  ////////////////////////// SEARCH //////////////////////////
  const [searchText, setSearchText] = useState("");
  const appliedTextFilter = useDebounce(searchText, 500);

  useEffect(() => {
    setUIParams((prevParams) => {
      let newParams = { ...prevParams };
      newParams.searchText = appliedTextFilter;
      return newParams;
    });
  }, [appliedTextFilter]);
  ////////////////////////// SEARCH //////////////////////////

  useEffect(() => {
    let filteredByGenre = UIParams.selectedGenres.length
      ? iMediaList.filter((media) =>
          UIParams.selectedGenres.every((id) => media.genre_ids.includes(id))
        )
      : iMediaList;

    let filteredByText =
      UIParams.searchText !== ""
        ? filteredByGenre.filter((media) =>
            isMediaMovies
              ? (media as Movie).title
                  .toLowerCase()
                  .includes(UIParams.searchText.toLowerCase())
              : (media as Series).name
                  .toLowerCase()
                  .includes(UIParams.searchText.toLowerCase())
          )
        : filteredByGenre;

    setFilteredMediaList(filteredByText as Movie[] | Series[]);
  }, [UIParams, iMediaList]);

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
