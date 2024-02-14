import { Movie, Series } from "../../../../models/media";

export type Props = {
  myMedia: Movie | Series;
  onPress: (id: number) => void;
};
