import { FavTabs } from "../../../../navigation/containers/materialTopTab/FavTabs";
import LocalColors from "../../../../themes/colors";
import MovieStackComp from "./MovieStackComp";
import TVStackComp from "./TVStackComp";
import { getTabBarStyle } from "../../../../util/headerControl";

function FavTabsComp() {
  return (
    <FavTabs.Navigator
      // style={{
      //   marginTop: Constants.statusBarHeight,
      // }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: LocalColors.primary500,
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
