import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FilmType } from "../../../backend/types";

export type MovieStackParamList = {
  ListingScreen: { genre: FilmType };
  DetailsScreen: { movie: number, genre: FilmType };
};

export const MovieStack = createNativeStackNavigator<MovieStackParamList>();
