import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import LocalColors from "../../../../themes/colors";
import { useState } from "react";
import { Props } from "./interface";
import { styles } from "./style";

function GenreItem({ onPress, item }: Props) {
  const [selected, setSelected] = useState<boolean>(false);

  const helperOnPressHandler = () => {
    onPress(item.id);
    setSelected(!selected);
  };

  return (
    <View
      style={
        selected
          ? [styles.genreItem, styles.genreItemSelected]
          : styles.genreItem
      }
    >
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressedStyle] : styles.button
        }
        android_ripple={{ color: LocalColors.primary800 }}
        onPress={helperOnPressHandler}
      >
        {({ pressed }) => {
          return (
            <View>
              <Text
                style={
                  pressed
                    ? [styles.genreText, { color: "white" }]
                    : styles.genreText
                }
              >
                {item.name}
              </Text>
            </View>
          );
        }}
      </Pressable>
    </View>
  );
}

export default GenreItem;
