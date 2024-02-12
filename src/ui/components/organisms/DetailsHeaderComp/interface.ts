import { Movie } from "../../../../models/movie";
import { Series } from "../../../../models/series";

export type Props = {
  isMovie: boolean;
  mediaItem: Movie | Series;
};
