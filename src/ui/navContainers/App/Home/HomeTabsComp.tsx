import {
  RouteProp,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import {
  HomeTabParamList,
  HomeTabs,
} from "../../../../navigation/containers/materialTopTab/HomeTabs";
import Colors from "../../../../util/Colors";
import MovieStackComp from "./MovieStackComp";
import TVStackComp from "./TVStackComp";
import Constants from "expo-constants";
import { StyleProp, ViewStyle } from "react-native";

const getTabBarStyle = (route: RouteProp<HomeTabParamList>): StyleProp<ViewStyle> => {
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

function HomeTabsComp() {
  return (
    <HomeTabs.Navigator
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
      <HomeTabs.Screen
        name="MovieStack"
        options={({ route }) => ({
          title: "Movies",
          tabBarStyle: getTabBarStyle(route),
        })}
        component={MovieStackComp}
      />
      <HomeTabs.Screen
        name="TVStack"
        options={({ route }) => ({
          title: "Series",
          tabBarStyle: getTabBarStyle(route),
        })}
        component={TVStackComp}
      />
    </HomeTabs.Navigator>
  );
}

export default HomeTabsComp;
