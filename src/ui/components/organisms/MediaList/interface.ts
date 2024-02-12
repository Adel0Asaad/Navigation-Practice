import { Movie } from "../../../../models/movie";
import { Series } from "../../../../models/series";

export type Props = {
    mediaList: Array<Movie | Series>;
    mediaListLoading: boolean;
    placeholder?: React.ReactNode;
    instructionText?: string;
    onEndReached?:
      | ((info: { distanceFromEnd: number }) => void)
      | null
      | undefined;
    onItemPress: (id: number) => void;
  };