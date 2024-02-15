import { StyleSheet } from "react-native";
import LocalColors from "../../../../../../themes/colors";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: LocalColors.backgroundColor,
  },
  searchInput: {
    backgroundColor: LocalColors.primary800,
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
