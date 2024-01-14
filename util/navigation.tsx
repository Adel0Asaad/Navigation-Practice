import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  NavigationProp,
} from "@react-navigation/native";

type AuthStackParamList = {
  LoginScreen: { username: string } | undefined;
  RegisterScreen: { username: string } | undefined;
};
// export type AuthStackNavigation = NativeStackScreenProps<AuthStackParamList>
export const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export type LoginNavigation = NavigationProp<AuthStackParamList, "LoginScreen">;
export type RegisterNavigation = NavigationProp<
  AuthStackParamList,
  "RegisterScreen"
>;

type AccountStackParamList = {
  AccountScreen: undefined;
  AccountDetailsScreen: undefined;
  AccountDetailsDetailsScreen: undefined;
};
type NotificationsStackParamList = {
  NotificationsScreen: undefined;
  NotificationsDetailsScreen: undefined;
};
type HomeStackParamList = {
  HomeScreen: undefined;
  HomeDetailsScreen: undefined;
};
export type FeedStackParamList = {
  FeedScreen: undefined;
  FeedDetailsScreen: { data: string } | undefined;
};
type SettingsStackParamList = {
  SettingsScreen: undefined;
  SettingsDetailsScreen: undefined;
};

export type AppTabParamList = {
  AccountStack: undefined;
  NotificationsStack: undefined;
  HomeStack: undefined;
  FeedStack: undefined;
  SettingsStack: undefined;
};
export const AppTabs = createBottomTabNavigator<AppTabParamList>();
export const AccountStack = createNativeStackNavigator<AccountStackParamList>();
export const NotificationsStack =
  createNativeStackNavigator<NotificationsStackParamList>();
export const HomeStack = createNativeStackNavigator<HomeStackParamList>();
export const FeedStack = createNativeStackNavigator<FeedStackParamList>();
export const SettingsStack =
  createNativeStackNavigator<SettingsStackParamList>();

export type AccountNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamList, "AccountStack">,
  NativeStackNavigationProp<AccountStackParamList>
>;
// export type AccountDetailsNav = CompositeNavigationProp<
//   BottomTabNavigationProp<AppTabParamList, "AccountDetailsScreen">,
//   NativeStackNavigationProp<AccountStackParamList>
// >;
export type NotificationsNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamList, "NotificationsStack">,
  NativeStackNavigationProp<NotificationsStackParamList>
>;
export type HomeNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamList, "HomeStack">,
  NativeStackNavigationProp<HomeStackParamList>
>;
export type FeedNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamList, "FeedStack">,
  NativeStackNavigationProp<FeedStackParamList>
>;
export type SettingsNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamList, "SettingsStack">,
  NativeStackNavigationProp<SettingsStackParamList>
>;
