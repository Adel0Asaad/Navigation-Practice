import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Series } from "../../../backend/Classes/series";
import { MediaGenre } from "../../../backend/Classes/genres";

export type TVStackParamList = {
  ListingScreen: undefined;
  DetailsScreen: { series: Series, genreList: MediaGenre[] };
};

export const TVStack = createNativeStackNavigator<TVStackParamList>();
