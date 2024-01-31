import {
  RouteProp,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import {
  FavTabParamList,
  FavTabs,
} from "../../../../navigation/containers/materialTopTab/FavTabs";
import Colors from "../../../../util/Colors";
import MovieStackComp from "./MovieStackComp";
import TVStackComp from "./TVStackComp";
import Constants from "expo-constants";
import { StyleProp, ViewStyle } from "react-native";

const getTabBarStyle = (route: RouteProp<FavTabParamList>): StyleProp<ViewStyle> => {
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

function FavTabsComp() {
  return (
    <FavTabs.Navigator
      // style={{
      //   marginTop: Constants.statusBarHeight,
      // }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
        tabBarActiveTintColor: "#FFFFFF",
      }}
    >
      <FavTabs.Screen
        name="MovieStack"
        options={({ route }) => ({
          title: "Movies",
          tabBarStyle: getTabBarStyle(route),
        })}
        component={MovieStackComp}
      />
      <FavTabs.Screen
        name="TVStack"
        options={({ route }) => ({
          title: "Series",
          tabBarStyle: getTabBarStyle(route),
        })}
        component={TVStackComp}
      />
    </FavTabs.Navigator>
  );
}

export default FavTabsComp;
