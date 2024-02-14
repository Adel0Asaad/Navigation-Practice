import { CompositeNavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../interface";

export type AuthStackParamList = {
  LoginScreen: { username: string } | undefined;
  RegisterScreen: { username: string } | undefined;
};
export const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export type LoginNavigation = CompositeNavigationProp<
  NativeStackNavigationProp<AuthStackParamList, "LoginScreen">,
  NativeStackNavigationProp<RootStackParamList>
>;
export type RegisterNavigation = CompositeNavigationProp<
  NativeStackNavigationProp<AuthStackParamList, "RegisterScreen">,
  NativeStackNavigationProp<RootStackParamList>
>;
