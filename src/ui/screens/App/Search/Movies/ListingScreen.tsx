import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Colors from "../../../../../util/Colors";
import MovieItem from "./MovieItem";
import { MovieStackParamList } from "../../../../../navigation/containers/nativeStack/MovieStack";
import { useListingHook } from "../ListingHelper";
import { Movie } from "../../../../../models/movie";
import { MediaGenre } from "../../../../../models/genres";
import MediaLoaderSkele from "../../../../components/MediaLoaderSkele";
import { SearchBar } from "@rneui/themed";

type ListingProps = NativeStackScreenProps<
  MovieStackParamList,
  "ListingScreen"
>;

function ListingScreen({ route, navigation }: ListingProps) {
  const [
    listMovieFG,
    mediaListLoading,
    genreList,
    genreListLoading,
    toggleGenre,
    searchText,
    setSearchText,
    movieListScrollEndHandler,
  ] = useListingHook("Movies") as [
    Movie[],
    boolean,
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
    <View style={styles.rootContainer}>
      <View style={{ marginTop: 12, margin: 6 }}></View>
      <SearchBar
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBar}
        placeholder={"Search Movies..."}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <View style={{ flex: 1 }}>
        {listMovieFG.length ? (
          <>
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
                    myMovie={item}
                    onPress={filmPressedHandler.bind(item.id)}
                  />
                );
              }}
            />
            <ActivityIndicator
              style={styles.loading}
              size="large"
              animating={mediaListLoading}
            />
          </>
        ) : (
          <MediaLoaderSkele />
        )}
      </View>
    </View>
  );
}

export default ListingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary500,
    color: "#120438",
    width: "100%",
  },
});
