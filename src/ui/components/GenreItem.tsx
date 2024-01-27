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
          ? [styles.genreItem, styles.genreItemSelected]
          : styles.genreItem
      }
    >
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressedStyle] : styles.button
        }
        android_ripple={{ color: Colors.primary800 }}
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

const styles = StyleSheet.create({
  genreItem: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    paddingHorizontal: 8,
    height: 35,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: Colors.primary500,
    borderRadius: 45,
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
    backgroundColor: Colors.primary800,
    opacity: 0.75,
  },
  genreText: {
    color: "#acacac",
    fontSize: 15,
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
