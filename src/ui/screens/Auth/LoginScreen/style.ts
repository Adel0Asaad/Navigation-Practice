import { StyleSheet } from "react-native";
import LocalColors from "../../../../themes/colors";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userTextInput: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: LocalColors.accent300,
    backgroundColor: LocalColors.accent300,
    borderRadius: 6,
    color: "#120438",
    width: "100%",
    padding: 8,
  },
  buttonsContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    flex: 1,
  },
});
