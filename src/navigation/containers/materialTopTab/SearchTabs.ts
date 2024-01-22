import { CompositeNavigationProp, NavigatorScreenParams } from "@react-navigation/native";
import { MovieStackParamList } from "../nativeStack/MovieStack";
import { TVStackParamList } from "../nativeStack/TVStack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabParamList } from "../bottomTab/AppTabs";
import { RootStackParamList } from "../nativeStack/RootStack";

export type SearchTabParamList = {
  MovieStack: NavigatorScreenParams<MovieStackParamList>;
  TVStack: NavigatorScreenParams<TVStackParamList>;
};
export const SearchTabs = createMaterialTopTabNavigator<SearchTabParamList>();

export type SearchNavigation = CompositeNavigationProp<
BottomTabNavigationProp<AppTabParamList, "SearchTabs">,
NativeStackNavigationProp<RootStackParamList, "AppTabs">
>;

  // export type FeedNavigation = CompositeNavigationProp<
  //   BottomTabNavigationProp<AppTabParamList, "FeedStack">,
  //   NativeStackNavigationProp<FeedStackParamList>
  // >;