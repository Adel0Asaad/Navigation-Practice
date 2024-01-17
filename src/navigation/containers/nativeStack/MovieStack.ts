import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type MovieStackParamList = {
  ListingScreen: undefined;
  DetailsScreen: { movie: number };
};

export const MovieStack = createNativeStackNavigator<MovieStackParamList>();
