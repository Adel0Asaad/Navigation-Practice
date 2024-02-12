import { View, Text, Pressable } from "react-native";
import Colors from "../../../../util/Colors";
import { styles } from "./style";
import { Props } from "./interface";

function PrimaryButton({children, onPress, style}: Props) {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedStyle]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary500 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
