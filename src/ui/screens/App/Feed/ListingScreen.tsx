import { FlatList, Text, View } from "react-native";
import Title from "../../../components/Title";
import { ListingProps } from "../../../../util/navigation";

function ListingScreen({ route, navigation }: ListingProps) {
  const genre = route.params.genre;

  return (
    <View>
      <Title>Listing {genre}</Title>
      <Text>SEARCH BAR</Text>
      <FlatList data={["genres"]} renderItem={() => <></>}></FlatList>
      <FlatList data={[{ genre }]} renderItem={() => <></>}></FlatList>
    </View>
  );
}

export default ListingScreen;
