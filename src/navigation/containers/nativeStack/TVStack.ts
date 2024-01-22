import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Series } from "../../../models/series";
import { MediaGenre } from "../../../models/genres";

export type TVStackParamList = {
  ListingScreen: undefined;
  DetailsScreen: { series: Series, genreList: MediaGenre[] };
};

export const TVStack = createNativeStackNavigator<TVStackParamList>();
