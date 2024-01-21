import { useEffect, useState } from "react";
import { useDebounce } from "../../../../util/Debounce";
import { useAppDispatch, useAppSelector } from "../../../../store/redux/hooks";
import { MediaType } from "../../../../backend/types";
import {
  getMovieGenres,
  getSeriesGenres,
  movieOptions,
  seriesOptions,
} from "../../../../store/tmdbAPI/apiHelper";
import { useFetchMediaList } from "../../../../store/tmdbAPI/useFetchMediaList";
import { Movie } from "../../../../backend/Classes/movie";
import { Series } from "../../../../backend/Classes/series";
import {
  addMovieList,
  setMovieList,
} from "../../../../store/redux/slices/movieSlice";
import {
  addSeriesList,
  setSeriesList,
} from "../../../../store/redux/slices/seriesSlice";

export const useListingHook = (mediaType: MediaType) => {
  //

  ////////////////////////// MTYPE //////////////////////////
  const isMediaMovies = mediaType === "Movies";
  const setMediaList = (listToBeSet: ArrayLike<Movie | Series>) => {
    isMediaMovies
      ? dispatch(setMovieList(listToBeSet as Movie[]))
      : dispatch(setSeriesList(listToBeSet as Series[]));
  };
  const addMediaList = () => {
    isMediaMovies
      ? dispatch(addMovieList(mediaList as Movie[]))
      : dispatch(addSeriesList(mediaList as Series[]));
  };
  const mediaOptions = isMediaMovies ? movieOptions : seriesOptions;
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   setMediaList([])
  //   setCurPage(1)
  // })
  ////////////////////////// MTYPE //////////////////////////

  //

  ////////////////////////// PAGES //////////////////////////
  const [curPage, setCurPage] = useState<number>(1);
  const [refresh, setRefresh] = useState<boolean>(false);

  const mediaListScrollEndHandler = () => {
    if (!mediaListLoading) {
      setCurPage(curPage + 1);
    }
  };

  useEffect(() => {
    console.log("curPage is now: " + curPage)
    fetchMediaPage(curPage);
  }, [curPage]);

  useEffect(() => {
    if (refresh) {
      console.log("Refreshed!")
      fetchMediaPage(curPage);
      setRefresh(false);
    }
  }, [refresh]);
  ////////////////////////// PAGES //////////////////////////

  //

  ////////////////////////// GENRES //////////////////////////
  const [genreList, genreListError, genreListLoading] = isMediaMovies
    ? getMovieGenres()
    : getSeriesGenres();
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
    // maybe check for if search text is empty
    setMediaList([]);
    filterWithGenres(appliedGenreFilter);
    setCurPage(1)
    setRefresh(true)
  }, [appliedGenreFilter]);
  ////////////////////////// GENRES //////////////////////////

  //

  ////////////////////////// MEDIA ///////////////////////////
  const [
    mediaList,
    mediaListError,
    mediaListLoading,
    fetchMediaPage,
    filterWithGenres,
    filterWithText,
  ] = isMediaMovies
    ? useFetchMediaList<Movie>(mediaOptions.url, mediaOptions, [])
    : useFetchMediaList<Series>(mediaOptions.url, mediaOptions, []);

  const filteredMediaList = useAppSelector((state) =>
    isMediaMovies ? state.movieData.movieList : state.seriesData.seriesList
  );
  useEffect(() => {
    addMediaList();
  }, [mediaList]);

  //debugging errors//
  // useEffect(() => {
  //   console.log(mediaListError)
  // }, [mediaListError])
  // useEffect(() => {
  //   console.log("Media List Loading: " + mediaListLoading)
  // }, [mediaListLoading])
  //debugging errors//

  ////////////////////////// MEDIA ///////////////////////////

  //

  ////////////////////////// SEARCH //////////////////////////
  const [searchText, setSearchText] = useState<string>("");
  const appliedTextFilter = useDebounce(searchText, 500);

  useEffect(() => {
    setMediaList([]);
    filterWithText(appliedTextFilter);
    setCurPage(1)
    setRefresh(true)
    // console.log(appliedTextFilter);
  }, [appliedTextFilter]);

  ////////////////////////// SEARCH //////////////////////////

  return [
    filteredMediaList,
    genreList,
    toggleGenre,
    searchText,
    setSearchText,
    mediaListScrollEndHandler,
  ];
};
