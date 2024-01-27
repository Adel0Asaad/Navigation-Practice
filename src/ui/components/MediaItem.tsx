import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import Colors from "../../util/Colors";
import { baseImgUrl } from "../../services/constants";
import { Movie } from "../../models/movie";
import { Series } from "../../models/series";

type Props = {
  myMedia: Movie | Series;
  onPress: (id: number) => void;
};

function MediaItem({ myMedia, onPress }: Props) {
  const isMovie = Object.keys(myMedia).includes("title");
  const helperOnPressHandler = () => {
    onPress(myMedia.id);
  };

  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressedStyle] : styles.button
        }
        android_ripple={{ color: Colors.primary600 }}
        onPress={helperOnPressHandler}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: baseImgUrl + myMedia.poster_path,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "stretch",
            padding: 10,
          }}
        >
          <Text numberOfLines={1} style={styles.movieText}>
            {isMovie ? (myMedia as Movie).title : (myMedia as Series).name}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 8,
    height: 280,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressedStyle: {
    opacity: 0.75,
  },
  movieItemSelected: {
    backgroundColor: Colors.primary600,
    opacity: 0.75,
  },
  movieText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    flex: 1,
  },
});

export default MediaItem;
