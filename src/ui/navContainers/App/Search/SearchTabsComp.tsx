import { SearchTabs } from "../../../../navigation/containers/materialTopTab/SearchTabs";
import Colors from "../../../../util/Colors";
import MovieStackComp from "./MovieStackComp";
import TVStackComp from "./TVStackComp";
import Constants from "expo-constants";

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
        options={{ title: "Movies" }}
        component={MovieStackComp}
      />
      <SearchTabs.Screen
        name="TVStack"
        options={{ title: "Series" }}
        component={TVStackComp}
      />
    </SearchTabs.Navigator>
  );
}

export default SearchTabsComp;
