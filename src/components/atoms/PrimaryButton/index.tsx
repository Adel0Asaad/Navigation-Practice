import { View, Text, Pressable } from "react-native";
import LocalColors from "../../../../themes/colors";
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
        android_ripple={{ color: LocalColors.primary500 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
