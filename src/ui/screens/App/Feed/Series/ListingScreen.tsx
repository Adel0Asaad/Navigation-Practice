import { FlatList, StyleSheet, View } from "react-native";
import { TitleSmall } from "../../../../components/Title";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SearchBar } from "@rneui/themed";
import Colors from "../../../../../util/Colors";
import GenreItem from "../GenreItem";
import FlatList2Row from "../../../../components/FlatList2Row";
import SeriesItem from "./SeriesItem";
import { TVStackParamList } from "../../../../../navigation/containers/nativeStack/TVStack";
import { Series } from "../../../../../models/series";
import { MediaGenre } from "../../../../../models/genres";
import { useListingHook } from "../ListingHelper";

type ListingProps = NativeStackScreenProps<TVStackParamList, "ListingScreen">;

//
//

function ListingScreen({ route, navigation }: ListingProps) {
  const [
    listSeriesFG,
    genreList,
    genreListLoading,
    toggleGenre,
    searchText,
    setSearchText,
    seriesListScrollEndHandler,
  ] = useListingHook("TV") as [
    Series[],
    MediaGenre[],
    boolean,
    (id: number) => void,
    string,
    React.Dispatch<React.SetStateAction<string>>,
    () => void
  ];

  const filmPressedHandler = (id: number) => {
    try {
      let setSeries = listSeriesFG.find((item) => item.id === id)!;
      let sentGenreList = genreList.filter((genre) =>
        setSeries.genre_ids.includes(genre.id)
      );
      navigation.navigate("DetailsScreen", {
        series: setSeries,
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
          placeholder={"Search Series..."}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <View>
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
