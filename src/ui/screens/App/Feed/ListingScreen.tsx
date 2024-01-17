import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Title, TitleSmall } from "../../../components/Title";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MovieStackParamList } from "../../../../navigation/containers/nativeStack/MovieStack";
import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import Colors from "../../../../util/Colors";
import { movieGenres, seriesGenres } from "../../../../../data/mocks";
import {
  FilmGenre,
  getListOfGenres,
  spreadMapToArray,
} from "../../../../backend/Classes/genres";
import GenreItem from "./logic/GenreItem";
import ListFilm from "./logic/ListFilm";

type ListingProps = NativeStackScreenProps<
  MovieStackParamList,
  "ListingScreen"
>;

/**
 *
 * Note!
 * I know this is bad code.
 * I was trying to see how it would be if I reuse
 * the same screen.tsx with different params to present
 * different types of data.
 * It's horrendous and very difficult to read, I will modify this
 * and split it to 2 listings for movies and series
 * and 2 details for movies and series.
 * it essentially is split into 2 through the ternary operator "?"
 */

function ListingScreen({ route, navigation }: ListingProps) {
  const genre = route.params.genre;

  const [searchText, setSearchText] = useState<string>("");

  ///////////////////////// GENRES //////////////////////////
  const importedGenres = genre === "Movies" ? movieGenres : seriesGenres;
  const [genreMap, setGenreMap] = useState<Map<number, FilmGenre>>(
    getListOfGenres(importedGenres)
  );
  const listData = spreadMapToArray(genreMap);
  const toggleGenre = (id: number) => {
    genreMap.get(id)?.toggle();
  };
  ////////////////////////// FILMS //////////////////////////

  const filmPressedHandler = (id: number) => {
    navigation.navigate("DetailsScreen", { movie: id, genre: genre });
  };

  return (
    <ScrollView>
      <Title>Listing {genre}</Title>
      <View style={{ marginTop: 12, margin: 6 }}>
        <SearchBar
          containerStyle={styles.searchBar}
          inputContainerStyle={[styles.searchBar, styles.searchInput]}
          placeholder={"Search " + genre + "..."}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <TitleSmall>Genres</TitleSmall>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}
      >
        <FlatList
          contentContainerStyle={{ alignSelf: "flex-start" }}
          numColumns={Math.ceil(listData.length / 2)}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
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
      </ScrollView>
      <TitleSmall>{genre === "Movies" ? genre : "Series"}</TitleSmall>
      <ListFilm genre={genre} callback={filmPressedHandler} />
      {/* Here I can pass the genre_ids array, default is undefined or empty.
      if it's undefined or empty, then show all movies, if not then
      show only filted((item) => item.gender_ids has one of gender_ids)
      Also doable with searchText of searchBar above, will implement later.*/}
    </ScrollView>
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
