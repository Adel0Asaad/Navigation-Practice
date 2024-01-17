import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppTabParamList } from "../bottomTab/AppTabs";

export type SettingsStackParamList = {
  SettingsScreen: undefined;
  SettingsDetailsScreen: undefined;
};

export const SettingsStack =
  createNativeStackNavigator<SettingsStackParamList>();

  export type SettingsNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamList, "SettingsStack">,
  NativeStackNavigationProp<SettingsStackParamList>
>;