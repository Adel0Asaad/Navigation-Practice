import { TVStack } from "../../util/navigation";
import DetailsScreen from "../screens/App/Feed/DetailsScreen";
import ListingScreen from "../screens/App/Feed/ListingScreen";

const TVStackComp = () => {
  return (
    <TVStack.Navigator>
      <TVStack.Screen
        name="ListingScreen"
        component={ListingScreen}
        initialParams={{genre: "TV"}}
      ></TVStack.Screen>
      <TVStack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
      ></TVStack.Screen>
    </TVStack.Navigator>
  );
};

export default TVStackComp;
