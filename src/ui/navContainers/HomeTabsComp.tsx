import { HomeTabs } from "../../navigation/containers/materialTopTab/HomeTabs";
import Colors from "../../util/Colors";
import MovieStackComp from "./MovieStackComp";
import TVStackComp from "./TVStackComp";
import Constants from "expo-constants";

function HomeTabsComp() {
  return (
    <HomeTabs.Navigator
      style={{
        marginTop: Constants.statusBarHeight,
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
        tabBarActiveTintColor: "#FFFFFF"
      }}
    >
      <HomeTabs.Screen name="MovieStack" options={{title: "Movies"}} component={MovieStackComp} />
      <HomeTabs.Screen name="TVStack" options={{title: "Series"}} component={TVStackComp} />
    </HomeTabs.Navigator>
  );
}

export default HomeTabsComp;
