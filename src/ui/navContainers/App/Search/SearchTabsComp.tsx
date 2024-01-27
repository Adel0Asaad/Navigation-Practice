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

const getTabBarStyle = (route: RouteProp<SearchTabParamList>) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "ListingScreen";
  switch (routeName) {
    case "DetailsScreen":
      return { height: 0, width: 0 };
    default:
      return {
        backgroundColor: Colors.primary500,
      };
  }
};

function SearchTabsComp() {
  return (
    <SearchTabs.Navigator
      style={{
        marginTop: Constants.statusBarHeight,
      }}
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
