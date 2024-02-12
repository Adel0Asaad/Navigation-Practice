import { StyleSheet } from "react-native";
import Colors from "../../../../util/Colors";

export const styles = StyleSheet.create({
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
});

export const ioniconStyle = {
  size: 16,
  color: "#e6f14b",
};
