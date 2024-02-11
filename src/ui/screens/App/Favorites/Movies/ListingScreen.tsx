import { FlatList, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Colors from "../../../../../util/Colors";
import GenreItem from "../../../../components/GenreItem"; 
import { MovieStackParamList } from "../../../../../navigation/containers/nativeStack/MovieStack";
import { useListingHook } from "../hooks/ListingHelper";
import { Movie } from "../../../../../models/movie";
import { MediaGenre } from "../../../../../models/genres";
import MediaList from "../../../../components/MediaList";
import { SearchBar } from "@rneui/themed";

type ListingProps = NativeStackScreenProps<
  MovieStackParamList,
  "ListingScreen"
>;

function ListingScreen({ navigation }: ListingProps) {
  const [
    listMovieFG,
    genreList,
    _,
    toggleGenre,
    searchText,
    setSearchText,
  ] = useListingHook("Movies") as [
    Movie[],
    MediaGenre[],
    boolean,
    (id: number) => void,
    string,
    React.Dispatch<React.SetStateAction<string>>
  ];

  const filmPressedHandler = (id: number) => {
    try {
      let sentMovie = listMovieFG.find((item) => item.id === id)!;
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
      <View>
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
      <View style={{ flex: 1 }}>
        <MediaList
          mediaList={listMovieFG}
          mediaListLoading={false}
          onItemPress={filmPressedHandler}
          instructionText="Add some movies to your favorites!"
        />
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
