import { FlatList, StyleSheet, View } from "react-native";
import { TitleSmall } from "../../../../components/Title";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SearchBar } from "@rneui/themed";
import { useEffect, useState } from "react";
import Colors from "../../../../../util/Colors";
import GenreItem from "../GenreItem";
import FlatList2Row from "../../../../components/FlatList2Row";
import SeriesItem from "./SeriesItem";
import {
  getSeriesGenres,
  getSeriesList,
} from "../../../../../store/tmdbAPI/apiHelper";
import { TVStackParamList } from "../../../../../navigation/containers/nativeStack/TVStack";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../store/redux/hooks";
import {
  addSeriesList,
  setSeriesList,
} from "../../../../../store/redux/slices/seriesSlice";
import { useDebounce } from "../../../../../util/Debounce";

type ListingProps = NativeStackScreenProps<TVStackParamList, "ListingScreen">;

//
//

function ListingScreen({ route, navigation }: ListingProps) {
  const [searchText, setSearchText] = useState<string>("");
  const appliedTextFilter = useDebounce(searchText, 500);
  const dispatch = useAppDispatch();
  ///////////////////////// GENRES //////////////////////////
  const [genreList, genreListError, genreListLoading] = getSeriesGenres();

  const toggleGenre = (id: number) => {
    setSelectedGenres((prevList) => {
      return prevList.includes(id)
        ? prevList.filter((item) => item !== id)
        : [...prevList, id];
    });
  };

  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const appliedGenreFilter = useDebounce(selectedGenres, 500);
  ////////////////////////// FILMS //////////////////////////

  const [seriesList, seriesListError, seriesListLoading, fetchSeriesPage] =
    getSeriesList();

  const [listSeries, setListSeries] = useState(seriesList);
  const [curPage, setCurPage] = useState<number>(1);
  const listSeriesFG = useAppSelector((state) => state.seriesData);

  ////////////////////////// FILTERING //////////////////////////

  useEffect(() => {
    fetchSeriesPage(curPage);
  }, [curPage]);
  useEffect(() => {
    if (appliedGenreFilter.length) {
    }
  }, [appliedGenreFilter]);
  useEffect(() => {
    dispatch(addSeriesList(seriesList));
  }, [seriesList]);

  ////////////////////////// FILTERING //////////////////////////

  const filmPressedHandler = (id: number) => {
    try {
      navigation.navigate("DetailsScreen", {
        series: listSeriesFG.find((item) => item.id === id)!,
      });
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const seriesListScrollEndHandler = () => {
    if (!seriesListLoading) {
      setCurPage(curPage + 1);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 12, margin: 6 }}>
        <SearchBar
          containerStyle={styles.searchBar}
          inputContainerStyle={[styles.searchBar, styles.searchInput]}
          placeholder={"Search Series..."}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <View>
        <TitleSmall>Genres</TitleSmall>
        <FlatList2Row
          data={genreList}
          renderItem={({ item }) => {
            return <GenreItem item={item} onPress={toggleGenre} />;
          }}
        />
      </View>
      <TitleSmall>Series</TitleSmall>
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "stretch",
          }}
          numColumns={2}
          data={listSeriesFG}
          onEndReached={seriesListScrollEndHandler}
          renderItem={({ item }) => {
            return (
              <SeriesItem
                id={item.id}
                genre_ids={item.genre_ids}
                name={item.name}
                onPress={filmPressedHandler.bind(item.id)}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

export default ListingScreen;

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary500,
    color: "#120438",
    width: "100%",
  },
  searchInput: {
    backgroundColor: Colors.primary800,
  },
});
