import { FavTabs } from "../../navigation/containers/materialTopTab/FavTabs";
import MovieStackComp from "./MovieStackComp";
import TVStackComp from "./TVStackComp";
import Constants from "expo-constants";

function FavTabsComp() {
  return (
    <FavTabs.Navigator
    style={{ marginTop: Constants.statusBarHeight }}
    >
      <FavTabs.Screen name="MovieStack" component={MovieStackComp} />
      <FavTabs.Screen name="TVStack" component={TVStackComp} />
    </FavTabs.Navigator>
  );
}

export default FavTabsComp;
