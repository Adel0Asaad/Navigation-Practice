import { TVStack } from "../../../../navigation/containers/nativeStack/TVStack";
import Colors from "../../../../util/Colors";
import DetailsScreen from "../../../screens/App/Home/Series/DetailsScreen";
import ListingScreen from "../../../screens/App/Home/Series/ListingScreen";

const TVStackComp = () => {
  return (
    <TVStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TVStack.Screen
        name="ListingScreen"
        component={ListingScreen}
      ></TVStack.Screen>

      <TVStack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
      ></TVStack.Screen>
    </TVStack.Navigator>
  );
};

export default TVStackComp;
