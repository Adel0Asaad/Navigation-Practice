import { ScrollView, FlatList } from "react-native";
import { series } from "../../../../../../data/mocks";
import SeriesItem from "./SeriesItem";

type ListCallback = {
  callback: (id: number) => void;
};

const ListSeries = ({ callback }: ListCallback) => {
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

export default ListSeries;
