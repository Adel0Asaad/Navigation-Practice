import { MediaGenre } from "../../../../models/genres";
import { Movie } from "../../../../models/movie";
import { Series } from "../../../../models/series";

export type Props = {
  mediaItem: Movie | Series;
  genreList: MediaGenre[];
};
