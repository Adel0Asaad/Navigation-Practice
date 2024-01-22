import { HomeTabs } from "../../navigation/containers/materialTopTab/HomeTabs";
import MovieStackComp from "./MovieStackComp";
import TVStackComp from "./TVStackComp";
import Constants from "expo-constants";

function HomeTabsComp() {
  return (
    <HomeTabs.Navigator
    style={{ marginTop: Constants.statusBarHeight }}
    >
      <HomeTabs.Screen name="MovieStack" component={MovieStackComp} />
      <HomeTabs.Screen name="TVStack" component={TVStackComp} />
    </HomeTabs.Navigator>
  );
}

export default HomeTabsComp;
