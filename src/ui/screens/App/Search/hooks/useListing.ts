import { useEffect, useState } from "react";
import { useDebounce } from "../../../../../util/Debounce";
import { MediaType } from "../../../../../services/types";
import {
  searchMovieUrl,
  searchSeriesUrl,
  movieGenresUrl,
  seriesGenresUrl,
} from "../../../../../services/tmdbAPI/apiHelper";
import { useFetchMediaList } from "../../../../../services/tmdbAPI/useFetchMediaList";
import { Movie } from "../../../../../models/movie";
import { Series } from "../../../../../models/series";
import { useFetchGenreList } from "../../../../../services/tmdbAPI/useFetchGenreList";
import { MovieStackParamList } from "../../../../../navigation/containers/nativeStack/MovieStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useListing = (
  mediaType: MediaType,
  navigation: NativeStackNavigationProp<
    MovieStackParamList,
    "ListingScreen",
    undefined
  >
) => {
  //
  const filmPressedHandler = (id: number) => {
    try {
      let sentMovie = filteredMediaList.find((item) => item.id === id)!;
      let sentGenreList = genreList.filter((genre) =>
        sentMovie.genre_ids.includes(genre.id)
      );
      navigation.navigate("DetailsScreen", {
        media: sentMovie,
        genreList: sentGenreList,
      });
    } catch (err: any) {
      console.log(err.message);
    }
  };
  ////////////////////////// MTYPE //////////////////////////
  const isMediaMovies = mediaType === "Movies";

  const addMediaList = () => {
    setMediaList((prevList) => {
      return [...prevList, ...mediaList] as Movie[] | Series[];
    });
  };

  const mediaUrl = isMediaMovies ? searchMovieUrl : searchSeriesUrl;
  const genresUrl = isMediaMovies ? movieGenresUrl : seriesGenresUrl;
  ////////////////////////// MTYPE //////////////////////////

  //

  ////////////////////////// UI-Info //////////////////////////
  const [UIParams, setUIParams] = useState<{
    curPage: number;
    selectedGenres?: number[];
    searchText?: string;
  }>({ curPage: 1 });
  ////////////////////////// UI-Info //////////////////////////

  //

  ////////////////////////// PAGES //////////////////////////
  const mediaListScrollEndHandler = () => {
    if (!mediaListLoading) {
      setUIParams((prevParams) => {
        let newParams = { ...prevParams };
        newParams.curPage += 1;
        return newParams;
      });
    }
  };

  useEffect(() => {
    if (
      UIParams.searchText !== undefined
    ) {
      loadMedia(UIParams.curPage, UIParams.selectedGenres, UIParams.searchText);
    }
  }, [UIParams]);
  ////////////////////////// PAGES //////////////////////////

  //

  ////////////////////////// GENRES //////////////////////////
  const [genreList, genreListError, genreListLoading] = useFetchGenreList(
    genresUrl,
    []
  );
  ////////////////////////// GENRES //////////////////////////

  //

  ////////////////////////// MEDIA ///////////////////////////
  const [mediaList, mediaListError, mediaListLoading, loadMedia] = isMediaMovies
    ? useFetchMediaList<Movie>(mediaUrl, [])
    : useFetchMediaList<Series>(mediaUrl, []);

  const [filteredMediaList, setMediaList] = useState<Movie[] | Series[]>([]);
  useEffect(() => {
    if (mediaList.length) {
      addMediaList();
    }
  }, [mediaList]);
  ////////////////////////// MEDIA ///////////////////////////

  //

  ////////////////////////// SEARCH //////////////////////////
  const [searchText, setSearchText] = useState("");
  const appliedTextFilter = useDebounce(searchText, 500);

  useEffect(() => {
    setMediaList([]);
    setUIParams((prevParams) => {
      let newParams = { ...prevParams };
      newParams.curPage = 1;
      newParams.searchText = appliedTextFilter;
      return newParams;
    });
  }, [appliedTextFilter]);

  ////////////////////////// SEARCH //////////////////////////

  /////////////////////////////////////////////////////////////// DEBUGGING ///////////////////////////////////////////////////////////////
  useEffect(() => {
    if (genreListError !== null) {
      let consType = isMediaMovies ? "movies: " : "series: ";
      console.log("Error loading genres of " + consType + genreListError);
    }
  }, [genreListError]);
  useEffect(() => {
    if (mediaListError !== null) {
      let consType = isMediaMovies ? "movies: " : "series: ";
      console.log("Error loading list of " + consType + mediaListError);
    }
  }, [mediaListError]);
  /////////////////////////////////////////////////////////////// DEBUGGING ///////////////////////////////////////////////////////////////

  //

  return {
    filteredMediaList,
    mediaListLoading,
    searchText,
    setSearchText,
    mediaListScrollEndHandler,
    filmPressedHandler,
  };
};
