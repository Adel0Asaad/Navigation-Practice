import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./AuthStack/interface";
import { AppTabParamList } from "./BottomTabs/interface";

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  AppTabs: NavigatorScreenParams<AppTabParamList>;
};
export const RootStack = createNativeStackNavigator<RootStackParamList>();
