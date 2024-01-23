import { FavTabs } from "../../../../navigation/containers/materialTopTab/FavTabs";
import Colors from "../../../../util/Colors";
import MovieStackComp from "./MovieStackComp";
import TVStackComp from "./TVStackComp";
import Constants from "expo-constants";

function FavTabsComp() {
  return (
    <FavTabs.Navigator
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
      <FavTabs.Screen
        name="MovieStack"
        options={{ title: "Movies" }}
        component={MovieStackComp}
      />
      <FavTabs.Screen
        name="TVStack"
        options={{ title: "Series" }}
        component={TVStackComp}
      />
    </FavTabs.Navigator>
  );
}

export default FavTabsComp;
