import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppTabParamList } from "../bottomTab/AppTabs";

export type HomeStackParamList = {
  HomeScreen: undefined;
  HomeDetailsScreen: undefined;
};

export const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export type HomeNavigation = CompositeNavigationProp<
BottomTabNavigationProp<AppTabParamList, "HomeStack">,
NativeStackNavigationProp<HomeStackParamList>
>;