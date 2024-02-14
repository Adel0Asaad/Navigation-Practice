import { CompositeNavigationProp, NavigatorScreenParams } from "@react-navigation/native";
import { MovieStackParamList, TVStackParamList } from "../.mediaStackParams/interface";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabParamList } from "../../interface";
import { RootStackParamList } from "../../../interface";

export type FavTabParamList = {
  MovieStack: NavigatorScreenParams<MovieStackParamList>;
  TVStack: NavigatorScreenParams<TVStackParamList>;
};
export const FavTabs = createMaterialTopTabNavigator<FavTabParamList>();

export type FavNavigation = CompositeNavigationProp<
BottomTabNavigationProp<AppTabParamList, "FavTabs">,
NativeStackNavigationProp<RootStackParamList, "AppTabs">
>;