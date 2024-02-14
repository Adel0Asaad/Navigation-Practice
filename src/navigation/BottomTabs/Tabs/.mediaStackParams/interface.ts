import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Movie, Series } from "../../../../models/media"
import { MediaGenre } from "../../../../models/genres"

export type MovieStackParamList = {
  ListingScreen: undefined;
  DetailsScreen: { media: Movie | Series, genreList: MediaGenre[] };
};

export const MovieStack = createNativeStackNavigator<MovieStackParamList>();


export type TVStackParamList = {
    ListingScreen: undefined;
    DetailsScreen: { media: Movie | Series, genreList: MediaGenre[] };
  };
  
  export const TVStack = createNativeStackNavigator<TVStackParamList>();
  