import { Dimensions } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../../../store/redux/hooks";
import { useState, useEffect } from "react";
import { Movie } from "../../../../../models/movie";
import { Series } from "../../../../../models/series";
import { useAppNavigation } from "../../../../../navigation/hooks/useAppNavigation";
import { getMovies, getSeries, removeMovie, removeSeries, storeMovie, storeSeries } from "../../../../../store/persisted/asyncStorageHelper";
import { syncFav } from "../../../../../store/redux/slices/favSlice";
import { Props } from "../interface";


const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

export const useHeaderComp = ({ isMovie, mediaItem }: Props) => {
    const shouldRefresh = useAppSelector((state) => state.favRefresh);
    const [isFav, setIsFav] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const [dimensions, setDimensions] = useState({
      window: windowDimensions,
      screen: screenDimensions,
    });
    const navigation = useAppNavigation();
    const navCallBack = () => {
      navigation.goBack();
    };
  
    useEffect(() => {
      // credits to https://reactnative.dev/docs/dimensions
      const subscription = Dimensions.addEventListener(
        "change",
        ({ window, screen }) => {
          setDimensions({ window, screen });
        }
      );
  
      return () => subscription?.remove();
    }, []);
  
    useEffect(() => {
      const checkFav = async () => {
        const mediaList = isMovie ? await getMovies() : await getSeries();
        mediaList?.find((media) => mediaItem.id === media.id)
          ? setIsFav(true)
          : setIsFav(false);
      };
      checkFav();
    }, [shouldRefresh]);
  
    const refreshFavs = () => {
      dispatch(syncFav());
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

    return {dimensions, navCallBack, favCallback, isFav}
}