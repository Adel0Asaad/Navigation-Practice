import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import { MediaGenre } from "../../models/genres";
import Colors from "../../util/Colors";
import { useState } from "react";

type Props = {
  item: MediaGenre;
  onPress: (id: number) => void;
};

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
          ? [styles.genreItem, { backgroundColor: Colors.primary600 }]
          : styles.genreItem
      }
    >
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressedStyle] : styles.button
        }
        android_ripple={{ color: Colors.primary600 }}
        onPress={helperOnPressHandler}
      >
        <View>
          <Text style={styles.genreText}>{item.name}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  genreItem: {
    flex: 1,
    margin: 4,
    height: 25,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressedStyle: {
    opacity: 0.75,
  },
  genreItemSelected: {
    backgroundColor: Colors.primary600,
    opacity: 0.75,
  },
  genreText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

export default GenreItem;
