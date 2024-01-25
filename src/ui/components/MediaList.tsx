import { FlatList, ActivityIndicator } from "react-native";
import EmptyListComp from "./EmptyListComp";
import MediaItem from "./MediaItem";
import { Movie } from "../../models/movie";
import { Series } from "../../models/series";
import React from "react";

type MediaListProps = {
  mediaList: Array<Movie | Series>;
  mediaListLoading: boolean;
  placeholder?: React.ReactNode;
  instructionText?: string;
  onEndReached?:
    | ((info: { distanceFromEnd: number }) => void)
    | null
    | undefined;
  onItemPress: (id: number) => void;
};

const MediaList = ({
  mediaList,
  mediaListLoading,
  placeholder,
  instructionText,
  onEndReached,
  onItemPress,
}: MediaListProps) => {
  const movieList = mediaList as Movie[];
  const seriesList = mediaList as Series[];
  
  return placeholder ? (
    mediaList.length ? (
      <FlatList
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "stretch",
        }}
        numColumns={2}
        data={mediaList}
        onEndReached={onEndReached}
        ListFooterComponent={
          <ActivityIndicator size="large" animating={mediaListLoading} />
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
  ) : (
    <FlatList
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "stretch",
      }}
      numColumns={2}
      data={mediaList}
      onEndReached={onEndReached}
      ListFooterComponent={
        <ActivityIndicator size="large" animating={mediaListLoading} />
      }
      ListEmptyComponent={<EmptyListComp instructionText={instructionText}/>}
      renderItem={({ item }) => {
        return <MediaItem myMedia={item} onPress={onItemPress.bind(item.id)} />;
      }}
    />
  );
};

export default MediaList;
