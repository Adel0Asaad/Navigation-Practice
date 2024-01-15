import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  NavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";

//////////////////////////// ROOT STACK ////////////////////////////

type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  AppTabs: NavigatorScreenParams<AppTabParamList>;
};
export const RootStack = createNativeStackNavigator<RootStackParamList>();

//////////////////////////// ROOT STACK ////////////////////////////

//////////////////////////// AUTH STACK ////////////////////////////

type AuthStackParamList = {
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
//////////////////////////// AUTH STACK ////////////////////////////

///////////////////////////// APP TABS /////////////////////////////

export type AppTabParamList = {
  AccountStack: NavigatorScreenParams<AccountStackParamList>;
  NotificationsStack: NavigatorScreenParams<NotificationsStackParamList>;
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  FeedStack: NavigatorScreenParams<FeedStackParamList>;
  SettingsStack: NavigatorScreenParams<SettingsStackParamList>;
};

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

///////////////////////////// APP TABS /////////////////////////////
