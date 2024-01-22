import { CompositeNavigationProp, NavigatorScreenParams } from "@react-navigation/native";
import { MovieStackParamList } from "../nativeStack/MovieStack";
import { TVStackParamList } from "../nativeStack/TVStack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabParamList } from "../bottomTab/AppTabs";
import { RootStackParamList } from "../nativeStack/RootStack";

export type FavTabParamList = {
  MovieStack: NavigatorScreenParams<MovieStackParamList>;
  TVStack: NavigatorScreenParams<TVStackParamList>;
};
export const FavTabs = createMaterialTopTabNavigator<FavTabParamList>();

export type FavNavigation = CompositeNavigationProp<
BottomTabNavigationProp<AppTabParamList, "FavTabs">,
NativeStackNavigationProp<RootStackParamList, "AppTabs">
>;

  // export type FeedNavigation = CompositeNavigationProp<
  //   BottomTabNavigationProp<AppTabParamList, "FeedStack">,
  //   NativeStackNavigationProp<FeedStackParamList>
  // >;