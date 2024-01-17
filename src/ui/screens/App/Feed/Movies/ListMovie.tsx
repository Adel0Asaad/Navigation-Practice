import { movies } from "../../../../../../data/mocks";
import MovieItem from "./MovieItem";
import FlatList2Row from "../../../../components/FlatList2Row";

type ListCallback = {
  callback: (id: number) => void;
};

const ListMovie = ({ callback }: ListCallback) => {
  const listData = movies;
  return (
    <FlatList2Row
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
  );
};

export default ListMovie;
