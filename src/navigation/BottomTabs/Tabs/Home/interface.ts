import { CompositeNavigationProp, NavigatorScreenParams } from "@react-navigation/native";
import { MovieStackParamList } from "../../../containers/nativeStack/MovieStack";
import { TVStackParamList } from "../../../containers/nativeStack/TVStack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabParamList } from "../../interface";
import { RootStackParamList } from "../../../interface";

export type HomeTabParamList = {
  MovieStack: NavigatorScreenParams<MovieStackParamList>;
  TVStack: NavigatorScreenParams<TVStackParamList>;
};
export const HomeTabs = createMaterialTopTabNavigator<HomeTabParamList>();

export type HomeNavigation = CompositeNavigationProp<
BottomTabNavigationProp<AppTabParamList, "HomeTabs">,
NativeStackNavigationProp<RootStackParamList, "AppTabs">
>;