import { MediaGenre } from "../../../../models/genres";
import { Movie, Series } from "../../../../models/media";

export type Props = {
  mediaItem: Movie | Series;
  genreList: MediaGenre[];
};
