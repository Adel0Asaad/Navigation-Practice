import { useLayoutEffect } from "react";
import { baseImgUrl } from "../../../../../../services/tmdbAPI/constants";
import DetailsScreenComp from "../../../../../components/pages/DetailsScreenComp";
import { Movie } from "../../../../../../models/media";
import { Props } from "./interface";

const DetailsScreen = ({ route, navigation }: Props) => {
  const myMedia = route.params.media;
  const genreList = route.params.genreList;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: myMedia instanceof Movie ? myMedia.title : myMedia.name,
      headerTransparent: true,
    });
  }, []);

  return <DetailsScreenComp mediaItem={myMedia} genreList={genreList} />;
};

export default DetailsScreen;
