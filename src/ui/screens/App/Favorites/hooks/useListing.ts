import { useEffect, useState } from "react";
import { useDebounce } from "../../../../../services/useDebounce";
import { MediaType } from "../../../../../models/genres";
import { endPoints } from "../../../../../services/tmdbAPI/apiHelper";
import { Movie, Series } from "../../../../../models/media";
import { useFetchGenreList } from "../../../../../services/tmdbAPI/media/useFetchGenreList";
import { getMovies, getSeries } from "../../../../../util/asyncMediaHelper";
import { useAppSelector } from "../../../../../util/useReduxHooks";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MovieStackParamList } from "../../../../../navigation/BottomTabs/Tabs/.mediaStackParams/interface";

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
  const genresUrl = isMediaMovies
    ? endPoints.movieGenresUrl
    : endPoints.seriesGenresUrl;
  const favRefresh = useAppSelector((state) => state.favRefresh);
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
  const [genreList, genreListLoading] = useFetchGenreList(genresUrl, []);
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
  }, [favRefresh]); // loads mediaList

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

  return {
    filteredMediaList,
    genreList,
    genreListLoading,
    toggleGenre,
    searchText,
    setSearchText,
    filmPressedHandler,
  };
};
