import { FlatList, StyleSheet, Text, View } from "react-native";
import { TitleSmall } from "../../../../components/Title";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SearchBar } from "@rneui/themed";
import Colors from "../../../../../util/Colors";
import GenreItem from "../GenreItem";
import FlatList2Row from "../../../../components/FlatList2Row";
import MovieItem from "./MovieItem";
import { MovieStackParamList } from "../../../../../navigation/containers/nativeStack/MovieStack";
import { useListingHook } from "../ListingHelper";
import { Movie } from "../../../../../models/movie";
import { MediaGenre } from "../../../../../models/genres";

type ListingProps = NativeStackScreenProps<
  MovieStackParamList,
  "ListingScreen"
>;

function ListingScreen({ route, navigation }: ListingProps) {
  const [
    listMovieFG,
    genreList,
    genreListLoading,
    toggleGenre,
    searchText,
    setSearchText,
    movieListScrollEndHandler,
  ] = useListingHook("Movies") as [
    Movie[],
    MediaGenre[],
    boolean,
    (id: number) => void,
    string,
    React.Dispatch<React.SetStateAction<string>>,
    () => void
  ];

  const filmPressedHandler = (id: number) => {
    try {
      let sentMovie = listMovieFG.find((item) => item.id === id)!;
      let sentGenreList = genreList.filter((genre) =>
        sentMovie.genre_ids.includes(genre.id)
      );
      navigation.navigate("DetailsScreen", {
        movie: sentMovie,
        genreList: sentGenreList,
      });
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 12, margin: 6 }}>
        <SearchBar
          containerStyle={styles.searchBar}
          inputContainerStyle={[styles.searchBar, styles.searchInput]}
          placeholder={"Search Movies..."}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <View style={{}}>
        <TitleSmall>Genres</TitleSmall>
        <FlatList
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={genreList}
          renderItem={({ item }) => {
            return <GenreItem item={item} onPress={toggleGenre} />;
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
          onEndReached={movieListScrollEndHandler}
          renderItem={({ item }) => {
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
