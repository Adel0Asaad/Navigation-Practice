import { Movie, Series } from "../../../../models/media";

export type Props = {
  isMovie: boolean;
  mediaItem: Movie | Series;
};
