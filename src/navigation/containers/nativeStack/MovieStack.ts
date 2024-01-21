import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Movie } from "../../../backend/Classes/movie";
import { MediaGenre } from "../../../backend/Classes/genres";

export type MovieStackParamList = {
  ListingScreen: undefined;
  DetailsScreen: { movie: Movie, genreList: MediaGenre[] };
};

export const MovieStack = createNativeStackNavigator<MovieStackParamList>();
