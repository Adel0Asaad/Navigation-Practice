import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { TVStackParamList } from "../../../../../navigation/containers/nativeStack/TVStack";
import { baseImgUrl } from "../../../../../services/constants";
import Colors from "../../../../../util/Colors";
import Tuple from "../../../../components/Tuple";
import { series } from "../../../../../../data/mocks";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";

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
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: baseImgUrl + mySeries.poster_path,
            }}
          />
        </View>
        <View style={styles.horizontalSpaceContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{mySeries.name}</Text>
          </View>
          <View style={styles.voteContainer}>
            <Text style={styles.voteText}>
              {mySeries.vote_average.toFixed(1)}
            </Text>
            <Ionicons
              name="star"
              size={ioniconStyle.size}
              color={ioniconStyle.color}
            />
          </View>
        </View>
        <View style={styles.genresContainer}>
          {genreList.map((genre) => {
            return (
              <View style={styles.genreItem} key={genre.id}>
                <Entypo
                  name="dot-single"
                  color={"red"}
                  size={ioniconStyle.size}
                />
                <Text style={styles.genreText}>{genre.name}</Text>
              </View>
            );
          })}
        </View>
        <Text style={styles.overviewText}>{mySeries.overview}</Text>

      </ScrollView>
      <View style={styles.loading}>
        <Pressable>
          <AntDesign
            name={true ? "heart" : "hearto"}
            size={32}
            color={"white"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.backgroundColor,
  },
  imageContainer: {
    height: 400,
    // width: 270,
    flex: 1,
  },
  image: {
    flex: 1,
  },
  horizontalSpaceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    width: "80%",
  },
  titleText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    padding: 16,
  },
  voteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  voteText: {
    color: "white",
    paddingRight: 8,
  },
  genresContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  genreItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  genreText: { color: "#b3b3b3", paddingRight: 6 },
  overviewText: {
    color: "white",

    padding: 16,
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: 24,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
});

const ioniconStyle = {
  size: 16,
  color: "#e6f14b",
};