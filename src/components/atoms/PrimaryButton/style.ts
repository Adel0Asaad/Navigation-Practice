import { StyleSheet } from "react-native";
import LocalColors from "../../../../themes/colors";

export const styles = StyleSheet.create({
    buttonOuterContainer: {
      borderRadius: 28,
      margin: 4,
      overflow: "hidden",
    },
    buttonInnerContainer: {
      backgroundColor: LocalColors.primary500,
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation: 2,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
    },
    pressedStyle: {
      opacity: 0.75,
    },
  });
  