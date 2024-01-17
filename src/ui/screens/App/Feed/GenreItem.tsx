import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import { FilmGenre } from "../../../../backend/Classes/genres";
import Colors from "../../../../util/Colors";
import { useState } from "react";

type Props = {
  onPress: (id: number) => void;
};

function GenreItem(item: {
  id: number;
  genre: FilmGenre;
  onPress: (id: number) => void;
}) {
  // const handleGenrePress = () => {
  //   console.log("You pressed on: " + item.genre.name)
  // }

    const [selected, setSelected] = useState<boolean>(item.genre.selected)

  const helperOnPressHandler = () => {
    item.onPress(item.id)
    setSelected(!selected)
  };



  return (
    <View
      style={
        selected
          ? [styles.genreItem, { backgroundColor: Colors.accent500 }]
          : styles.genreItem
      }
    >
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressedStyle] : styles.button
        }
        android_ripple={{ color: Colors.accent500 }}
        onPress={helperOnPressHandler}
      >
        <View>
          <Text style={styles.genreText}>{item.genre.name}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  genreItem: {
    flex: 1,
    margin: 8,
    height: 75,
    width: 150,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: Colors.accent300,
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
    backgroundColor: Colors.accent500,
    opacity: 0.75,
  },
  genreText: {
    color: "#694c4c",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GenreItem;
