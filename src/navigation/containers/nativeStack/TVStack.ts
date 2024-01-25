import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Series } from "../../../models/series";
import { MediaGenre } from "../../../models/genres";
import { Movie } from "../../../models/movie";

export type TVStackParamList = {
  ListingScreen: undefined;
  DetailsScreen: { media: Movie | Series, genreList: MediaGenre[] };
};

export const TVStack = createNativeStackNavigator<TVStackParamList>();
