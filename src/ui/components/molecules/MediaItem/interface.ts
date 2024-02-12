import { Movie } from "../../../../models/movie";
import { Series } from "../../../../models/series";

export type Props = {
  myMedia: Movie | Series;
  onPress: (id: number) => void;
};
