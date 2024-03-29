import { FavTabs } from "./interface";
import LocalColors from "../../../../themes/colors";
import MovieStackComp from "./stacks/MovieStackComp";
import TVStackComp from "./stacks/TVStackComp";
import { getTabBarStyle } from "../../../../services/getTabBarStyle";

function FavTabsComp() {
  return (
    <FavTabs.Navigator
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
