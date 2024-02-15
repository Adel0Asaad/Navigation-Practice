import { FlatList, StyleSheet, View } from "react-native";
import GenreItem from "../../../../../components/molecules/GenreItem";
import { useListing } from "../../hooks/useListing";
import MediaLoaderSkele from "../../../../../components/organisms/MediaLoaderSkele";
import MediaList from "../../../../../components/organisms/MediaList";
import { styles } from "./style";
import { Props } from "./interface";

function ListingScreen({ navigation }: Props) {
  const {
    filmPressedHandler,
    filteredMediaList,
    genreList,
    mediaListLoading,
    mediaListScrollEndHandler,
    toggleGenre,
  } = useListing("TV", navigation);

  return (
    <View style={styles.rootContainer}>
      <View style={{ marginTop: 12, margin: 6 }}></View>
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
          mediaListLoading={mediaListLoading}
          onItemPress={filmPressedHandler}
          onEndReached={mediaListScrollEndHandler}
          placeholder={<MediaLoaderSkele />}
        />
      </View>
    </View>
  );
}

export default ListingScreen;
