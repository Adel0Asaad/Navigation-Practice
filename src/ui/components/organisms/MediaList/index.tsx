import { FlatList, ActivityIndicator } from "react-native";
import EmptyListComp from "../../molecules/EmptyListComp";
import MediaItem from "../../molecules/MediaItem";
import React from "react";
import { Props } from "./interface";
import { styles } from "./style";

const MediaList = ({
  mediaList,
  mediaListLoading,
  placeholder,
  instructionText,
  onEndReached,
  onItemPress,
}: Props) => {
  return placeholder ? ( // if there is a place holder -> handle no items manually, if length > 0, return list, otherwise placeholder 
    mediaList.length ? (
      <FlatList
        contentContainerStyle={styles.flatListContentContainer}
        numColumns={2}
        data={mediaList}
        onEndReached={onEndReached}
        ListFooterComponent={
          <ActivityIndicator
            size="large"
            animating={mediaListLoading && mediaList.length > 0}
          />
        }
        renderItem={({ item }) => {
          return (
            <MediaItem myMedia={item} onPress={onItemPress.bind(item.id)} />
          );
        }}
      />
    ) : (
      placeholder
    )
  ) : ( // if there isn't a placeholder, then use ListEmptyComponent to give instructions on how to fill the list.
    <FlatList
      contentContainerStyle={styles.flatListContentContainer}
      numColumns={2}
      data={mediaList}
      onEndReached={onEndReached}
      ListFooterComponent={
        <ActivityIndicator size="large" animating={mediaListLoading} />
      }
      ListEmptyComponent={<EmptyListComp instructionText={instructionText} />}
      renderItem={({ item }) => {
        return <MediaItem myMedia={item} onPress={onItemPress.bind(item.id)} />;
      }}
    />
  );
};

export default MediaList;
