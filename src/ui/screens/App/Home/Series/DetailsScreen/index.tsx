import { useLayoutEffect } from "react";
import { baseImgUrl } from "../../../../../../services/constants";
import DetailsScreenComp from "../../../../../components/pages/DetailsScreenComp";
import { Movie } from "../../../../../../models/movie";
import { Props } from "./interface";

const DetailsScreen = ({ route, navigation }: Props) => {
  const myMedia = route.params.media;
  const genreList = route.params.genreList;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: myMedia instanceof Movie ? myMedia.title : myMedia.name,
      headerTransparent: true,
    });
    console.log(baseImgUrl + myMedia.poster_path);
  }, []);

  return <DetailsScreenComp mediaItem={myMedia} genreList={genreList} />;
};
export default DetailsScreen;
