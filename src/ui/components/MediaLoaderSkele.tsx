import { View, Platform, StyleSheet, ScrollView } from "react-native";
import Colors from "../../util/Colors";

const MediaLoaderSkele = () => {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row" }}>
        <HollowMediaItem></HollowMediaItem>
        <HollowMediaItem></HollowMediaItem>
      </View>
      <View style={{ flexDirection: "row" }}>
        <HollowMediaItem></HollowMediaItem>
        <HollowMediaItem></HollowMediaItem>
      </View>
    </ScrollView>
  );
};

const HollowMediaItem = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.button}>
        <View style={styles.imageContainer}>
          <View style={styles.image} />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "stretch",
            padding: 10,
          }}
        >
          <View style={styles.movieText} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 8,
    height: 240,
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
    backgroundColor: Colors.primary600,
    width: "70%",
    height: "25%",
    textAlign: "left",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  imageContainer: {
    height: "80%",
  },
  image: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});

export default MediaLoaderSkele;
