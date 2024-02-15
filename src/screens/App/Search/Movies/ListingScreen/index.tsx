import { View } from "react-native";
import { useListing } from "../../hooks/useListing";
import { SearchBar } from "@rneui/themed";
import MediaList from "../../../../../components/organisms/MediaList";
import { styles } from "./style";
import { Props } from "./interface";

function ListingScreen({ navigation }: Props) {
  const {
    filteredMediaList,
    mediaListLoading,
    mediaListScrollEndHandler,
    searchText,
    setSearchText,
    filmPressedHandler,
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
      <View style={{ flex: 1 }}>
        <MediaList
          mediaList={filteredMediaList}
          mediaListLoading={mediaListLoading}
          onItemPress={filmPressedHandler}
          onEndReached={mediaListScrollEndHandler}
        />
      </View>
    </View>
  );
}

export default ListingScreen;
