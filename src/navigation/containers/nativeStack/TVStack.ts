import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type TVStackParamList = {
  ListingScreen: undefined;
  DetailsScreen: { movie: number };
};

export const TVStack = createNativeStackNavigator<TVStackParamList>();
