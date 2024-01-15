import { CSSProperties, ReactNode } from "react";
import { StyleSheet, View, Text, Pressable, ViewStyle, GestureResponderEvent } from "react-native";
import Colors from "../../util/Colors";

type ButtonProps = {
  children: ReactNode;
  style?: ViewStyle | undefined,
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined,
};

function PrimaryButton(props: ButtonProps) {
  function pressHandler() {
    console.log("Pressed!");
  }

  return (
    <View style={[styles.buttonOuterContainer, props.style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedStyle]
            : styles.buttonInnerContainer
        }
        onPress={props.onPress}
        android_ripple={{ color: Colors.primary500}}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
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
