import { Platform, StyleSheet } from "react-native";
import LocalColors from "../../../../themes/colors";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 8,
    height: 240,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: LocalColors.primary500,
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
    backgroundColor: LocalColors.primary600,
    opacity: 0.75,
  },
  movieTextContainer: {
    justifyContent: "center",
    alignItems: "stretch",
    padding: 10,
  },
  movieText: {
    backgroundColor: LocalColors.primary600,
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
    backgroundColor: LocalColors.primary500,
  },
});
