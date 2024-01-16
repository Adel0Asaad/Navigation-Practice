import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
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
import {
  MaterialTopTabNavigationProp,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";

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
  FeedTabs: NavigatorScreenParams<FeedTabParamList>;
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
type SettingsStackParamList = {
  SettingsScreen: undefined;
  SettingsDetailsScreen: undefined;
};

export const AppTabs = createBottomTabNavigator<AppTabParamList>();
export const AccountStack = createNativeStackNavigator<AccountStackParamList>();
export const NotificationsStack =
  createNativeStackNavigator<NotificationsStackParamList>();
export const HomeStack = createNativeStackNavigator<HomeStackParamList>();
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
// export type FeedNavigation = CompositeNavigationProp<
//   BottomTabNavigationProp<AppTabParamList, "FeedStack">,
//   NativeStackNavigationProp<FeedStackParamList>
// >;
export type SettingsNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamList, "SettingsStack">,
  NativeStackNavigationProp<SettingsStackParamList>
>;

///////////////////////////// FEED TABS /////////////////////////////
export type ListingProps = NativeStackScreenProps<MovieStackParamList, "ListingScreen">
export type DetailsProps = NativeStackScreenProps<MovieStackParamList, "DetailsScreen">

export const FeedTabs = createMaterialTopTabNavigator<FeedTabParamList>();
type FeedTabParamList = {
  MovieStack: NavigatorScreenParams<MovieStackParamList>;
  TVStack: NavigatorScreenParams<TVStackParamList>;
};
export type FeedNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamList, "FeedTabs">,
  NativeStackNavigationProp<RootStackParamList, "AppTabs">
>;

type MovieStackParamList = {
  ListingScreen: { genre: "Movies" | "TV"};
  DetailsScreen: { movie: number };
};
type TVStackParamList = {
  ListingScreen: { genre: "Movies" | "TV"};
  DetailsScreen: { movie: number };
};

export const MovieStack = createNativeStackNavigator<MovieStackParamList>();
export const TVStack = createNativeStackNavigator<TVStackParamList>();

export type MovieNavigation = CompositeNavigationProp<
  NativeStackNavigationProp<MovieStackParamList, "ListingScreen">,
  MaterialTopTabNavigationProp<FeedTabParamList, "MovieStack">
>;
export type TVNavigation = CompositeNavigationProp<
  NativeStackNavigationProp<MovieStackParamList, "ListingScreen">,
  MaterialTopTabNavigationProp<FeedTabParamList, "TVStack">
>;

///////////////////////////// FEED TABS /////////////////////////////

///////////////////////////// APP TABS /////////////////////////////
