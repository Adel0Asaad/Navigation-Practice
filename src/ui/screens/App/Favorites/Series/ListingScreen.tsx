import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Colors from "../../../../../util/Colors";
import GenreItem from "../GenreItem";
import SeriesItem from "./SeriesItem";
import { TVStackParamList } from "../../../../../navigation/containers/nativeStack/TVStack";
import { Series } from "../../../../../models/series";
import { MediaGenre } from "../../../../../models/genres";
import { useListingHook } from "../ListingHelper";
import MediaLoaderSkele from "../../../../components/MediaLoaderSkele";

type ListingProps = NativeStackScreenProps<TVStackParamList, "ListingScreen">;

//
//

function ListingScreen({ route, navigation }: ListingProps) {
  const [
    listSeriesFG,
    mediaListLoading,
    genreList,
    genreListLoading,
    toggleGenre,
    searchText,
    setSearchText,
    seriesListScrollEndHandler,
  ] = useListingHook("TV") as [
    Series[],
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
        {listSeriesFG.length ? (
          <>
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
                    mySeries={item}
                    onPress={filmPressedHandler.bind(item.id)}
                  />
                );
              }}
            />
            <ActivityIndicator
              style={styles.loading}
              size={"large"}
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
  searchInput: {
    backgroundColor: Colors.primary800,
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
});
