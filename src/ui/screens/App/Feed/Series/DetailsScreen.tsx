import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { TVStackParamList } from "../../../../../navigation/containers/nativeStack/TVStack";
import { baseImgUrl } from "../../../../../services/constants";
import Colors from "../../../../../util/Colors";
import Tuple from "../../../../components/Tuple";
import { series } from "../../../../../../data/mocks";

type DetailsProps = NativeStackScreenProps<TVStackParamList, "DetailsScreen">;

//
//

const DetailsScreen = ({ route, navigation }: DetailsProps) => {
  const mySeries = route.params.series;
  const genreList = route.params.genreList;

  const genreListString = () => {
    console.log(mySeries.overview);
    let arrayString = "";
    genreList.forEach((genre) => {
      arrayString += genre.name + ", ";
    });
    return (arrayString = arrayString.slice(0, arrayString.length - 2));
  };

  useEffect(() => {
    navigation.setOptions({ title: mySeries.name });
    console.log(baseImgUrl + mySeries.poster_path);
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
                uri: baseImgUrl + mySeries.poster_path,
              }}
            />
          </View>
        </View>

        <Tuple title="Name" content={mySeries.name} />
        <Tuple title="Genres" content={genreListString()} />
        <Tuple title="Language" content={mySeries.original_language} />
        <Tuple title="Countries" content={mySeries.origin_country.toString()} />
        <Tuple title="Overview" content={mySeries.overview} />
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
