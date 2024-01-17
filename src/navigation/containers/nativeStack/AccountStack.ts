import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { AppTabParamList } from "../bottomTab/AppTabs";

export type AccountStackParamList = {
  AccountScreen: undefined;
  AccountDetailsScreen: undefined;
  AccountDetailsDetailsScreen: undefined;
};

export const AccountStack = createNativeStackNavigator<AccountStackParamList>();

export type AccountNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamList, "AccountStack">,
  NativeStackNavigationProp<AccountStackParamList>
>;
