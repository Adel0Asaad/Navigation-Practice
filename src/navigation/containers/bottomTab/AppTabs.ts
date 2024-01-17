import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { FeedTabParamList } from "../materialTopTab/FeedTabs";
import { AccountStackParamList } from "../nativeStack/AccountStack";
import { HomeStackParamList } from "../nativeStack/HomeStack";
import { NotificationsStackParamList } from "../nativeStack/NotificationsStack";
import { SettingsStackParamList } from "../nativeStack/SettingsStack";

export type AppTabParamList = {
    AccountStack: NavigatorScreenParams<AccountStackParamList>;
    NotificationsStack: NavigatorScreenParams<NotificationsStackParamList>;
    HomeStack: NavigatorScreenParams<HomeStackParamList>;
    FeedTabs: NavigatorScreenParams<FeedTabParamList>;
    SettingsStack: NavigatorScreenParams<SettingsStackParamList>;
  };

export const AppTabs = createBottomTabNavigator<AppTabParamList>();