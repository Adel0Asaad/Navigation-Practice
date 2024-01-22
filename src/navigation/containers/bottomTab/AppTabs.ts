import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { HomeTabParamList } from "../materialTopTab/HomeTabs";
import { SettingsStackParamList } from "../nativeStack/SettingsStack";
import { SearchTabParamList } from "../materialTopTab/SearchTabs";
import { FavTabParamList } from "../materialTopTab/FavTabs";

export type AppTabParamList = {
    FavTabs: NavigatorScreenParams<FavTabParamList>;
    HomeTabs: NavigatorScreenParams<HomeTabParamList>; 
    SearchTabs: NavigatorScreenParams<SearchTabParamList>;
    SettingsStack: NavigatorScreenParams<SettingsStackParamList>; // stays! but, I wanna make it a drawer :/
  };

export const AppTabs = createBottomTabNavigator<AppTabParamList>();