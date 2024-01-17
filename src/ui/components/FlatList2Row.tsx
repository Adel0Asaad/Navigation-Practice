import { ScrollView, FlatList, FlatListProps, ListRenderItem } from "react-native";

type ListCallback = {
  data: ArrayLike<any>
  renderItem: ListRenderItem<any>
};

const FlatList2Row = ({ data, renderItem}: ListCallback) => {
  const listData = data;
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
        renderItem={renderItem}
      />
      
    </ScrollView>
  );
};

export default FlatList2Row;
