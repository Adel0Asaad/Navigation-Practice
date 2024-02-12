import { HomeTabs } from "../../../../navigation/containers/materialTopTab/HomeTabs";
import LocalColors from "../../../../themes/colors";
import MovieStackComp from "./MovieStackComp";
import TVStackComp from "./TVStackComp";
import { getTabBarStyle } from "../../../../util/headerControl";

function HomeTabsComp() {
  return (
    <HomeTabs.Navigator
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
