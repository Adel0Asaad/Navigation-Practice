import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import {
  View,
  ScrollView,
  Pressable,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { baseImgUrl } from "../../services/constants";
import { Movie } from "../../models/movie";
import { Series } from "../../models/series";
import { MediaGenre } from "../../models/genres";
import Colors from "../../util/Colors";
import { useEffect, useState } from "react";
import {
  getAllKeys,
  removeMovie,
  removeSeries,
  storeMovie,
  storeSeries,
} from "../../store/persisted/asyncStorageHelper";
import { useAppDispatch } from "../../store/redux/hooks";

type Props = {
  mediaItem: Movie | Series;
  genreList: MediaGenre[];
};

const DetailsScreenComp = ({ mediaItem, genreList }: Props) => {
  const isMovie = Object.keys(mediaItem).includes("title");
  const [isFav, setIsFav] = useState<boolean>(false);
  
  const favCallback = () => {
    if (isFav) {
      isMovie 
      ? removeMovie(mediaItem.id) 
      : removeSeries(mediaItem.id);
    } else {
      isMovie
        ? storeMovie(mediaItem as Movie)
        : storeSeries(mediaItem as Series);
    }
    setIsFav(!isFav);
  };

  useEffect(() => {
    getAllKeys().then((allKeys) => {
      if (isMovie) {
        allKeys?.movieKeys.find(
          (key) => mediaItem.id.toString() === key.split(`/`)[1]
        )
          ? setIsFav(true)
          : null;
      } else {
        allKeys?.seriesKeys.find(
          (key) => mediaItem.id.toString() === key.split(`/`)[1]
        )
          ? setIsFav(true)
          : null;
      }
    });
  }, []);

  return (
    <View style={styles.rootContainer}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: baseImgUrl + mediaItem.poster_path,
            }}
          />
        </View>
        <View style={styles.horizontalSpaceContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              {isMovie
                ? (mediaItem as Movie).title
                : (mediaItem as Series).name}
            </Text>
          </View>
          <View style={styles.voteContainer}>
            <Text style={styles.voteText}>
              {mediaItem.vote_average.toFixed(1) + " "}
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
                <Text style={styles.genreText}>{genre.name + " "}</Text>
              </View>
            );
          })}
        </View>
        <Text style={styles.overviewText}>{mediaItem.overview}</Text>
      </ScrollView>
      <View style={styles.loading}>
        <Pressable onPress={favCallback}>
          <AntDesign
            name={isFav ? "heart" : "hearto"}
            size={32}
            color={"yellow"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default DetailsScreenComp;

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
