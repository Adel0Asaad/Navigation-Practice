import { FlatList, Text, View } from "react-native";
import { Title } from "../../../../components/Title";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MovieStackParamList } from "../../../../../navigation/containers/nativeStack/MovieStack";
import { series } from "../../../../../../data/mocks";

type DetailsProps = NativeStackScreenProps<
  MovieStackParamList,
  "DetailsScreen"
>;

const DetailsScreen = ({ route, navigation }: DetailsProps) => {
  const id = route.params.movie;

  const mySeries = series.filter((item) => {
    return item.id === id;
  });

  navigation.setOptions({ title: mySeries![0].name });
  return (
    <View>
      {/* <Title>{mySeries![0].name}</Title> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={mySeries}
        renderItem={({ item }) => {
          return (
            <View>
              {Object.entries(item).map((item) => (
                <Text key={item[0]}>{item[0] + ": " + item[1]}</Text>
              ))}
            </View>
          );
        }}
      />
    </View>
  );
};

export default DetailsScreen;
