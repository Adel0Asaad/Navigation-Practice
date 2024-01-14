import FeedDetailsScreen from "../screens/App/FeedDetailsScreen";
import FeedScreen from "../screens/App/FeedScreen";
import { FeedStack } from "../util/navigation";

function FeedStackComp() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="FeedScreen" component={FeedScreen} />
      <FeedStack.Screen
        name="FeedDetailsScreen"
        component={FeedDetailsScreen}
      />
    </FeedStack.Navigator>
  );
}

export default FeedStackComp;
