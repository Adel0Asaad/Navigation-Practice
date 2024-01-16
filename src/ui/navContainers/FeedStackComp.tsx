import { FeedTabs } from "../../util/navigation";
import MovieStackComp from "./MovieStackComp";
import TVStackComp from "./TVStackComp";

function FeedStackComp() {
  return (
    <FeedTabs.Navigator>
      <FeedTabs.Screen name="MovieStack" component={MovieStackComp} />
      <FeedTabs.Screen name="TVStack" component={TVStackComp} />
    </FeedTabs.Navigator>
  );
}

export default FeedStackComp;
