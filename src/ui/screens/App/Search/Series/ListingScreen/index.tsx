import { StyleSheet, View } from "react-native";
import { useListing } from "../../hooks/useListing";
import { SearchBar } from "@rneui/themed";
import MediaList from "../../../../../components/organisms/MediaList";
import { Props } from "./interface";
import { styles } from "./style";

function ListingScreen({ navigation }: Props) {
  const {
    filmPressedHandler,
    filteredMediaList,
    mediaListLoading,
    mediaListScrollEndHandler,
    searchText,
    setSearchText,
  } = useListing("TV", navigation);


  return (
    <View style={styles.rootContainer}>
      <View style={{ marginTop: 12, margin: 6 }}></View>
      <SearchBar
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBar}
        placeholder={"Search Series..."}
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
