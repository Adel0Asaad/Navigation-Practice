import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppTabParamList } from "../bottomTab/AppTabs";
import { AuthStackParamList } from "./AuthStack";

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  AppTabs: NavigatorScreenParams<AppTabParamList>;
};
export const RootStack = createNativeStackNavigator<RootStackParamList>();
