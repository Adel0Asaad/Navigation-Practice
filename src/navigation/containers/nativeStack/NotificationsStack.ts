import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppTabParamList } from "../bottomTab/AppTabs";

export type NotificationsStackParamList = {
  NotificationsScreen: undefined;
  NotificationsDetailsScreen: undefined;
};

export const NotificationsStack =
  createNativeStackNavigator<NotificationsStackParamList>();

  export type NotificationsNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamList, "NotificationsStack">,
  NativeStackNavigationProp<NotificationsStackParamList>
>;