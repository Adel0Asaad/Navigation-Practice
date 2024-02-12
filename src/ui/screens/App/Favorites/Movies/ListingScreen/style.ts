import { StyleSheet } from "react-native";
import LocalColors from "../../../../../../themes/colors";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: LocalColors.backgroundColor,
  },
  searchBar: {
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: LocalColors.primary500,
    backgroundColor: LocalColors.primary500,
    color: "#120438",
    width: "100%",
  },
});
