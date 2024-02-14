import { HomeTabs } from "./interface";
import LocalColors from "../../../../themes/colors";
import MovieStackComp from "./stacks/MovieStackComp";
import TVStackComp from "./stacks/TVStackComp";
import { getTabBarStyle } from "../../../../services/getTabBarStyle";

function HomeTabsComp() {
  return (
    <HomeTabs.Navigator
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
