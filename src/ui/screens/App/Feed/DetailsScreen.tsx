import { FlatList, Text, View } from "react-native";
import Title from "../../../components/Title";
import { DetailsProps } from "../../../../util/navigation";

const DetailsScreen = ({ route, navigation }: DetailsProps) => {
    const movie = route.params.movie
  return (
    <View>
      <Title>{movie}'s name</Title>
      <Text>INCLUDE ALL INFO PROVIDED!!</Text>
    </View>
  );
};

export default DetailsScreen;
