import { FeedTabs } from "../../navigation/containers/materialTopTab/FeedTabs";
import MovieStackComp from "./MovieStackComp";
import TVStackComp from "./TVStackComp";
import Constants from "expo-constants";

function FeedTabsComp() {
  return (
    <FeedTabs.Navigator
    style={{ marginTop: Constants.statusBarHeight }}
    >
      <FeedTabs.Screen name="MovieStack" component={MovieStackComp} />
      <FeedTabs.Screen name="TVStack" component={TVStackComp} />
    </FeedTabs.Navigator>
  );
}

export default FeedTabsComp;
