import { View, Text, Pressable, Image } from "react-native";
import LocalColors from "../../../../themes/colors";
import { baseImgUrl } from "../../../../services/constants";
import { Movie } from "../../../../models/movie";
import { Series } from "../../../../models/series";
import { Props } from "./interface";
import { styles } from "./style";

const MediaItem = ({ myMedia, onPress }: Props) =>{
  const isMovie = Object.keys(myMedia).includes("title");
  const helperOnPressHandler = () => {
    onPress(myMedia.id);
  };

  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressedStyle] : styles.button
        }
        android_ripple={{ color: LocalColors.primary600 }}
        onPress={helperOnPressHandler}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: baseImgUrl + myMedia.poster_path,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "stretch",
            padding: 10,
          }}
        >
          <Text numberOfLines={1} style={styles.movieText}>
            {isMovie ? (myMedia as Movie).title : (myMedia as Series).name}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MediaItem;
