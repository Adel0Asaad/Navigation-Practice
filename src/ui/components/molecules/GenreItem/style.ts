import { Platform, StyleSheet } from "react-native";
import Colors from "../../../../util/Colors";

export const styles = StyleSheet.create({
  genreItem: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    paddingHorizontal: 8,
    height: 35,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: Colors.primary500,
    borderRadius: 45,
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
  genreItemSelected: {
    backgroundColor: Colors.primary800,
    opacity: 0.75,
  },
  genreText: {
    color: "#acacac",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
