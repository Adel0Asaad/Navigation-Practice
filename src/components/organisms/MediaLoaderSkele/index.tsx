import { View, ScrollView } from "react-native";
import { styles } from "./style";

const MediaLoaderSkele = () => {
  return (
    <ScrollView>
      <HollowRow />
      <HollowRow />
      <HollowRow />
      <HollowRow />
    </ScrollView>
  );
};

const HollowRow = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <HollowMediaItem></HollowMediaItem>
      <HollowMediaItem></HollowMediaItem>
    </View>
  );
};

const HollowMediaItem = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.button}>
        <View style={styles.imageContainer}>
          <View style={styles.image} />
        </View>
        <View style={styles.movieTextContainer}>
          <View style={styles.movieText} />
        </View>
      </View>
    </View>
  );
};

export default MediaLoaderSkele;
