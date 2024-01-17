import { ScrollView, FlatList, View } from "react-native";
import GenreItem from "./GenreItem";
import { movies, series } from "../../../../../../data/mocks";
import { FilmType } from "../../../../../backend/types";
import SeriesItem from "./SeriesItem";
import MovieItem from "./MovieItem";

type ListCallback = {
    callback: (id: number) => void
}

const ListSeries = ({callback}: ListCallback) => {
  const listData = series;
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      directionalLockEnabled={true}
      alwaysBounceVertical={false}
    >
      <FlatList
        contentContainerStyle={{ alignSelf: "flex-start" }}
        numColumns={Math.ceil(listData.length / 2)}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={listData}
        renderItem={({ item }) => {
          return (
            <SeriesItem
              id={item.id}
              genre_ids={item.genre_ids}
              name={item.name}
              onPress={callback.bind(this, item.id)}
            />
          );
        }}
      />
    </ScrollView>
  );
};

const ListMovie = ({callback}: ListCallback) => {
  const listData = movies;
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      directionalLockEnabled={true}
      alwaysBounceVertical={false}
    >
      <FlatList
        contentContainerStyle={{ alignSelf: "flex-start" }}
        numColumns={Math.ceil(listData.length / 2)}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={listData}
        renderItem={({ item }) => {
          return (
            <MovieItem
              id={item.id}
              genre_ids={item.genre_ids}
              title={item.title}
              onPress={callback.bind(this, item.id)}
            />
          );
        }}
      />
    </ScrollView>
  );
};

type Props = {
  genre: FilmType;
  callback: ListCallback['callback']
};

const ListFilm = ({ genre, callback}: Props) => {
  return genre === "Movies" ? <ListMovie callback={callback}/> : <ListSeries callback={callback}/>;
};

export default ListFilm;
