import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Title, TitleSmall } from "../../../../components/Title";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MovieStackParamList } from "../../../../../navigation/containers/nativeStack/MovieStack";
import { SearchBar } from "@rneui/themed";
import { useEffect, useState } from "react";
import Colors from "../../../../../util/Colors";
import { movieGenres, movies } from "../../../../../../data/mocks";
import {
  FilmGenre,
  getListOfGenres,
  spreadMapToArray,
} from "../../../../../backend/Classes/genres";
import GenreItem from "../GenreItem";
import FlatList2Row from "../../../../components/FlatList2Row";
import MovieItem from "./MovieItem";

type ListingProps = NativeStackScreenProps<
  MovieStackParamList,
  "ListingScreen"
>;

function ListingScreen({ route, navigation }: ListingProps) {
  const [searchText, setSearchText] = useState<string>("");

  ///////////////////////// GENRES //////////////////////////
  const importedGenres = movieGenres;
  const [genreMap] = useState<Map<number, FilmGenre>>(
    getListOfGenres(importedGenres)
  );
  const listData = spreadMapToArray(genreMap);
  const toggleGenre = (id: number) => {
    genreMap.get(id)?.toggle();
    setSelectedGenres((prevList) => {
      return prevList.includes(id)
        ? prevList.filter((item) => item !== id)
        : [...prevList, id];
    });
  };
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  ////////////////////////// FILMS //////////////////////////
  const [listMovie, setListMovie] = useState(movies);
  const [listMovieFG, setListMovieFG] = useState(movies);

  ////////////////////////// FILTERING //////////////////////////

  useEffect(() => {
    setListMovie(movies.filter((item) => item.title.includes(searchText)));
  }, [searchText]);
  useEffect(() => {
    if (selectedGenres.length) {
      setListMovieFG(
        listMovie.filter((item) =>
          selectedGenres.some((id) => item.genre_ids.includes(id))
        )
      );
    } else {
      setListMovieFG(listMovie);
    }
  }, [listMovie, selectedGenres]);

  ////////////////////////// FILTERING //////////////////////////

  const filmPressedHandler = (id: number) => {
    navigation.navigate("DetailsScreen", { movie: id });
  };

  return (
    <View style={{ flex: 1 }}>
      <Title>Listing Movies</Title>
      <View style={{ marginTop: 12, margin: 6 }}>
        <SearchBar
          containerStyle={styles.searchBar}
          inputContainerStyle={[styles.searchBar, styles.searchInput]}
          placeholder={"Search Movies..."}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <View>
        <TitleSmall>Genres</TitleSmall>
        <FlatList2Row
          data={listData}
          renderItem={({ item }) => {
            return (
              <GenreItem
                id={item.id}
                genre={item.genre}
                onPress={toggleGenre}
              />
            );
          }}
        />
      </View>
      <TitleSmall>Movies</TitleSmall>
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "stretch",
          }}
          numColumns={2}
          data={listMovieFG}
          renderItem={({ item }) => {
            console.log("Received: " + item.title);
            return (
              <MovieItem
                id={item.id}
                genre_ids={item.genre_ids}
                title={item.title}
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
