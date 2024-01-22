import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Movie } from "../../../models/movie";
import { MediaGenre } from "../../../models/genres";

export type MovieStackParamList = {
  ListingScreen: undefined;
  DetailsScreen: { movie: Movie, genreList: MediaGenre[] };
};

export const MovieStack = createNativeStackNavigator<MovieStackParamList>();
