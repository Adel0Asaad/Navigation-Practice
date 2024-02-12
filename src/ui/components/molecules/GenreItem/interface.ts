import { MediaGenre } from "../../../../models/genres";

export type Props = {
    item: MediaGenre;
    onPress: (id: number) => void;
  };