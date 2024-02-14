import { SearchTabs } from "../../../../navigation/containers/materialTopTab/SearchTabs";
import LocalColors from "../../../../themes/colors";
import MovieStackComp from "./MovieStackComp";
import TVStackComp from "./TVStackComp";
import { getTabBarStyle } from "../../../../services/getTabBarStyle";

function SearchTabsComp() {
  return (
    <SearchTabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: LocalColors.primary500,
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
