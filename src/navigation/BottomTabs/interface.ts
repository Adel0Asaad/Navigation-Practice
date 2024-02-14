import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { HomeTabParamList } from "./Tabs/Home/interface";
import { SettingsStackParamList } from "./Tabs/Settings/interface";
import { SearchTabParamList } from "./Tabs/Search/interface";
import { FavTabParamList } from "./Tabs/Fav/interface";

export type AppTabParamList = {
    FavTabs: NavigatorScreenParams<FavTabParamList>;
    HomeTabs: NavigatorScreenParams<HomeTabParamList>; 
    SearchTabs: NavigatorScreenParams<SearchTabParamList>;
    SettingsStack: NavigatorScreenParams<SettingsStackParamList>; // stays! but, I wanna make it a drawer :/
  };

export const AppTabs = createBottomTabNavigator<AppTabParamList>();