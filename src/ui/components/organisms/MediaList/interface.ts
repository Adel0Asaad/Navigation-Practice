import { Movie, Series } from "../../../../models/media";

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