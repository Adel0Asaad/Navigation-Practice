import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../store/redux/hooks";
import { useState, useEffect } from "react";
import { Movie } from "../../../../../models/movie";
import { Series } from "../../../../../models/series";
import { useAppNavigation } from "../../../../../navigation/hooks/useAppNavigation";
import {
  getMovies,
  getSeries,
  removeMovie,
  removeSeries,
  storeMovie,
  storeSeries,
} from "../../../../../store/persisted/asyncStorageHelper";
import { syncFav } from "../../../../../store/redux/slices/favSlice";
import { Props } from "../interface";
import { useAppDimensions } from "../../../../../themes/useAppDimensions";

export const useHeaderComp = ({ isMovie, mediaItem }: Props) => {
  const shouldRefresh = useAppSelector((state) => state.favRefresh);
  const [isFav, setIsFav] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { dimensions } = useAppDimensions();
  const navigation = useAppNavigation();
  const navCallBack = () => {
    navigation.goBack();
  };

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

  return { dimensions, navCallBack, favCallback, isFav };
};
