import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FilmType } from "../../../backend/types";

export type TVStackParamList = {
  ListingScreen: { genre: FilmType };
  DetailsScreen: { movie: number, genre: FilmType };
};

export const TVStack = createNativeStackNavigator<TVStackParamList>();
