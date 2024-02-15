import { FlatList, StyleSheet, View } from "react-native";
import GenreItem from "../../../../../components/molecules/GenreItem";
import { useListing } from "../../hooks/useListing";
import MediaList from "../../../../../components/organisms/MediaList";
import { SearchBar } from "@rneui/themed";
import { Props } from "./interface";
import { styles } from "./style";

function ListingScreen({ navigation }: Props) {
  const {
    filmPressedHandler,
    filteredMediaList,
    genreList,
    searchText,
    setSearchText,
    toggleGenre,
  } = useListing("Movies", navigation);

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
          mediaList={filteredMediaList}
          mediaListLoading={false}
          onItemPress={filmPressedHandler}
          instructionText="Add some movies to your favorites!"
        />
      </View>
    </View>
  );
}

export default ListingScreen;
