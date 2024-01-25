import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Movie } from "../../../models/movie";
import { MediaGenre } from "../../../models/genres";
import { Series } from "../../../models/series";

export type MovieStackParamList = {
  ListingScreen: undefined;
  DetailsScreen: { media: Movie | Series, genreList: MediaGenre[] };
};

export const MovieStack = createNativeStackNavigator<MovieStackParamList>();
