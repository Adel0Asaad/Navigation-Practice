import { TVStack } from "../../.mediaStackParams/interface"
import DetailsScreen from "../../../../../ui/screens/App/Search/Series/DetailsScreen";
import ListingScreen from "../../../../../ui/screens/App/Search/Series/ListingScreen";

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
