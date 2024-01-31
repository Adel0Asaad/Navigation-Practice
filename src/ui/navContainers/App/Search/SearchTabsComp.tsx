import {
  RouteProp,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import {
  SearchTabParamList,
  SearchTabs,
} from "../../../../navigation/containers/materialTopTab/SearchTabs";
import Colors from "../../../../util/Colors";
import MovieStackComp from "./MovieStackComp";
import TVStackComp from "./TVStackComp";
import Constants from "expo-constants";
import { StyleProp, ViewStyle } from "react-native";

const getTabBarStyle = (route: RouteProp<SearchTabParamList>): StyleProp<ViewStyle> => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "ListingScreen";
  switch (routeName) {
    case "DetailsScreen":
      return { height: 0, width: 0, zIndex: -1 };
    default:
      return {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: Colors.primary500,
      };
  }
};

function SearchTabsComp() {
  return (
    <SearchTabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
        tabBarActiveTintColor: "#FFFFFF",
      }}
    >
      <SearchTabs.Screen
        name="MovieStack"
        options={({ route }) => ({
          title: "Movies",
          tabBarStyle: getTabBarStyle(route),
        })}
        component={MovieStackComp}
      />
      <SearchTabs.Screen
        name="TVStack"
        options={({ route }) => ({
          title: "Series",
          tabBarStyle: getTabBarStyle(route),
        })}
        component={TVStackComp}
      />
    </SearchTabs.Navigator>
  );
}

export default SearchTabsComp;
