import { StyleSheet } from "react-native";
import Colors from "../../../../util/Colors";

export const styles = StyleSheet.create({
    buttonOuterContainer: {
      borderRadius: 28,
      margin: 4,
      overflow: "hidden",
    },
    buttonInnerContainer: {
      backgroundColor: Colors.primary500,
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
  