import {
  RouteProp,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import Constants from "expo-constants";
import { StyleProp, ViewStyle } from "react-native";
import LocalColors from "../themes/colors";

export const getTabBarStyle = (route: RouteProp<any>): StyleProp<ViewStyle> => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "ListingScreen";
  switch (routeName) {
    case "DetailsScreen":
      return { height: 0, width: 0, zIndex: -1 };
    default:
      return {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: LocalColors.primary500,
      };
  }
};
