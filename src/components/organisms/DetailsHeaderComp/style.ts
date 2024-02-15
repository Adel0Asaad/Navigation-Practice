import { Dimensions, StyleSheet } from "react-native";

const windowDimensions = Dimensions.get("window");

export const styles = StyleSheet.create({
  rootContainer: {
    height: windowDimensions.height / 7,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  headerAbs: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 35,
    bottom: 0,
    padding: 24,
  },
});
