import { FlatList, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Colors from "../../../../../util/Colors";
import GenreItem from "../../../../components/GenreItem"; 
import { TVStackParamList } from "../../../../../navigation/containers/nativeStack/TVStack";
import { Series } from "../../../../../models/series";
import { MediaGenre } from "../../../../../models/genres";
import { useListingHook } from "../hooks/ListingHelper";
import MediaList from "../../../../components/MediaList";
import { useEffect } from "react";
import { getAllKeys, removeSeries } from "../../../../../store/persisted/asyncStorageHelper";

type ListingProps = NativeStackScreenProps<TVStackParamList, "ListingScreen">;

//
//

function ListingScreen({ route, navigation }: ListingProps) {
  useEffect(() => {
    removeSeries(609681)
    console.log("Hello??????");
    getAllKeys()
      .then((value) => {
        console.log("Please say something");
        console.log(value?.seriesKeys);
      })
      .catch((reason) => {
        console.log(reason.message);
      })
      .finally(() => {
        console.log("Finally...");
      });
  }, []);
  const [
    listSeriesFG,
    genreList,
    genreListLoading,
    toggleGenre,
    searchText,
    setSearchText,
  ] = useListingHook("TV") as [
    Series[],
    MediaGenre[],
    boolean,
    (id: number) => void,
    string,
    React.Dispatch<React.SetStateAction<string>>
  ];

  const filmPressedHandler = (id: number) => {
    try {
      let senntSeries = listSeriesFG.find((item) => item.id === id)!;
      let sentGenreList = genreList.filter((genre) =>
        senntSeries.genre_ids.includes(genre.id)
      );
      navigation.navigate("DetailsScreen", {
        media: senntSeries,
        genreList: sentGenreList,
      });
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <View style={{ marginTop: 12, margin: 6 }}></View>
      <View style={{ marginBottom: 6 }}>
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
          mediaList={listSeriesFG}
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
  searchInput: {
    backgroundColor: Colors.primary800,
  },
});
