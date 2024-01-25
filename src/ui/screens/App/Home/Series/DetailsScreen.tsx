import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { TVStackParamList } from "../../../../../navigation/containers/nativeStack/TVStack";
import { baseImgUrl } from "../../../../../services/constants";
import DetailsScreenComp from "../../../../components/DetailsScreenComp";
import { Movie } from "../../../../../models/movie";

type DetailsProps = NativeStackScreenProps<TVStackParamList, "DetailsScreen">;

//
//

const DetailsScreen = ({ route, navigation }: DetailsProps) => {
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
