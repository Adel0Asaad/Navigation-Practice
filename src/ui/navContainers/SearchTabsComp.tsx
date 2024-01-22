
import { SearchTabs } from "../../navigation/containers/materialTopTab/SearchTabs";
import MovieStackComp from "./MovieStackComp";
import TVStackComp from "./TVStackComp";
import Constants from "expo-constants";

function SearchTabsComp() {
  return (
    <SearchTabs.Navigator
    style={{ marginTop: Constants.statusBarHeight }}
    >
      <SearchTabs.Screen name="MovieStack" component={MovieStackComp} />
      <SearchTabs.Screen name="TVStack" component={TVStackComp} />
    </SearchTabs.Navigator>
  );
}

export default SearchTabsComp;
