import { useEffect, useState } from "react";
import { useDebounce } from "../../../../../services/useDebounce";
import { MediaType } from "../../../../../models/genres";
import { endPoints } from "../../../../../services/tmdbAPI/apiHelper";
import { useFetchMediaList } from "../../../../../services/tmdbAPI/media/useFetchMediaList";
import { Movie, Series } from "../../../../../models/media";
import { useFetchGenreList } from "../../../../../services/tmdbAPI/media/useFetchGenreList";
import { MovieStackParamList } from "../../../../../navigation/BottomTabs/Tabs/.mediaStackParams/interface";
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
      console.error(err.message);
    }
  };
  ////////////////////////// MTYPE //////////////////////////
  const isMediaMovies = mediaType === "Movies";

  const addMediaList = () => {
    setMediaList((prevList) => {
      return [...prevList, ...mediaList] as Movie[] | Series[];
    });
  };

  const mediaUrl = isMediaMovies ? endPoints.searchMovieUrl : endPoints.searchSeriesUrl;
  const genresUrl = isMediaMovies ? endPoints.movieGenresUrl : endPoints.seriesGenresUrl;
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
    if (UIParams.searchText !== undefined) {
      loadMedia(UIParams.curPage, UIParams.selectedGenres, UIParams.searchText);
    }
  }, [UIParams]);
  ////////////////////////// PAGES //////////////////////////

  //

  ////////////////////////// GENRES //////////////////////////
  const [genreList, genreListLoading] = useFetchGenreList(genresUrl, []);
  ////////////////////////// GENRES //////////////////////////

  //

  ////////////////////////// MEDIA ///////////////////////////
  const [mediaList, mediaListLoading, loadMedia] = isMediaMovies
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

  return {
    filteredMediaList,
    mediaListLoading,
    searchText,
    setSearchText,
    mediaListScrollEndHandler,
    filmPressedHandler,
  };
};
