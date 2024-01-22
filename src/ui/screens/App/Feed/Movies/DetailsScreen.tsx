import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MovieStackParamList } from "../../../../../navigation/containers/nativeStack/MovieStack";
import { useEffect } from "react";
import { baseImgUrl } from "../../../../../services/constants";
import Colors from "../../../../../util/Colors";
import Tuple from "../../../../components/Tuple";

type DetailsProps = NativeStackScreenProps<
  MovieStackParamList,
  "DetailsScreen"
>;

const DetailsScreen = ({ route, navigation }: DetailsProps) => {
  const myMovie = route.params.movie;
  const genreList = route.params.genreList;

  const genreListString = () => {
    let arrayString = "";
    genreList.forEach((genre) => {
      arrayString += genre.name + ", ";
    });
    return (arrayString = arrayString.slice(0, arrayString.length - 2));
  };

  useEffect(() => {
    navigation.setOptions({ title: myMovie.title });
    console.log(baseImgUrl + myMovie.poster_path);
  }, []);

  return (
    <View style={styles.rootContainer}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.primary500,
          }}
        >
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: baseImgUrl + myMovie.poster_path,
              }}
            />
          </View>
        </View>

        <Tuple title="Name" content={myMovie.title} />
        <Tuple title="Genres" content={genreListString()} />
        <Tuple title="Language" content={myMovie.original_language} />
        <Tuple title="Release Date" content={myMovie.release_date.toString()} />
        <Tuple title="Overview" content={myMovie.overview} />
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    height: 400,
    width: 270,
  },
  image: {
    flex: 1,
  },
});
