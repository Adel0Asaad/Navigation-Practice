import { useState, useEffect } from "react";
import { Dimensions, Pressable, StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import { getAllKeys, removeMovie, removeSeries, storeMovie, storeSeries } from "../../store/persisted/asyncStorageHelper";
import { Series } from "../../models/series";
import { Movie } from "../../models/movie";
import { useAppDispatch } from "../../store/redux/hooks";
import { syncFav } from "../../store/redux/slices/favSlice";

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

type Props = {
  isMovie: boolean;
  mediaItem: Movie | Series
};

const HeaderComp = ({isMovie, mediaItem }: Props) => {
  const [isFav, setIsFav] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    // credits to https://reactnative.dev/docs/dimensions
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );

    getAllKeys().then((allKeys) => {
      if (isMovie) {
        allKeys?.movieKeys.find(
          (key) => mediaItem.id.toString() === key.split(`/`)[1]
        )
          ? setIsFav(true)
          : null;
      } else {
        allKeys?.seriesKeys.find(
          (key) => mediaItem.id.toString() === key.split(`/`)[1]
        )
          ? setIsFav(true)
          : null;
      }
    });

    return () => subscription?.remove();
  }, []);

  const refreshFavs = () => {
    dispatch(syncFav());
    console.log("Sent dispatch of true");
  };

  const favCallback = () => {
    if (isFav) {
      isMovie
        ? removeMovie(mediaItem.id).then(() => refreshFavs())
        : removeSeries(mediaItem.id).then(() => refreshFavs());
    } else {
      isMovie
        ? storeMovie(mediaItem as Movie).then(() => refreshFavs())
        : storeSeries(mediaItem as Series).then(() => refreshFavs());
    }
    setIsFav(!isFav);
  };

  const styles = StyleSheet.create({
    rootContainer: {
      height: dimensions.window.height / 7,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,
    },
    center: {
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
    },
    headerAbs: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      padding: 24,
    },
  });

  return (
    <View style={[styles.rootContainer, styles.headerAbs]}>
      <View style={[styles.center]}>
        <Pressable>
          <Fontisto name="angle-left" size={26} color="white" />
        </Pressable>
      </View>
      <View style={[styles.center]}>
        <Text style={styles.title}>Details</Text>
      </View>
      <View style={[styles.center]}>
        <Pressable onPress={favCallback}>
          <AntDesign
            name={isFav ? "heart" : "hearto"}
            size={32}
            color={"white"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default HeaderComp;
