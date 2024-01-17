import { FlatList, Text, View } from "react-native";
import { Title } from "../../../components/Title";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MovieStackParamList } from "../../../../navigation/containers/nativeStack/MovieStack";
import { movies, series } from "../../../../../data/mocks";

type DetailsProps = NativeStackScreenProps<
  MovieStackParamList,
  "DetailsScreen"
>;

/**
 * 
 * Note!
 * I know this is bad code.
 * I was trying to see how it would be if I reuse 
 * the same screen.tsx with different params to present
 * different types of data.
 * It's horrendous and very difficult to read, I will modify this
 * and split it to 2 listings for movies and series
 * and 2 details for movies and series.
 * it essentially is split into 2 through the ternary operator "?"
 */

const DetailsScreen = ({ route, navigation }: DetailsProps) => {
  const id = route.params.movie;
  const filmType = route.params.genre;

  const myMovie =
    filmType === "Movies"
      ? movies.filter((item) => {
          return item.id === id;
        })
      : undefined;
  const mySeries =
    filmType === "TV"
      ? series.filter((item) => {
          return item.id === id;
        })
      : undefined;
  return (
    <View>
      <Title>{filmType === "Movies" ? myMovie![0].title : mySeries![0].name}</Title>
      {filmType === "Movies" ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={myMovie}
          renderItem={({ item }) => {
            return (
            <View key={item.id} >
              {Object.entries(item).map((item) => <Text>{item[0] + ": " + item[1]}</Text>)}
            </View>)
          }}
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={mySeries}
          renderItem={({ item }) => {
            return (
            <View>
              {Object.entries(item).map((item) => <Text key={item[0]} >{item[0] + ": " + item[1]}</Text>)}
            </View>)
          }}
        />
      )}
    </View>
  );
};

export default DetailsScreen;
