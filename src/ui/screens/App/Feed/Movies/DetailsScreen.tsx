import { FlatList, Text, View } from "react-native";
import { Title } from "../../../../components/Title";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MovieStackParamList } from "../../../../../navigation/containers/nativeStack/MovieStack";
import { movies } from "../../../../../../data/mocks";

type DetailsProps = NativeStackScreenProps<
  MovieStackParamList,
  "DetailsScreen"
>;

const DetailsScreen = ({ route, navigation }: DetailsProps) => {
  const id = route.params.movie;

  const myMovie = movies.filter((item) => {
    return item.id === id;
  });

  navigation.setOptions({ title: myMovie![0].title });
  return (
    <View>
      {/* <Title>{myMovie![0].title}</Title> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={myMovie}
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
