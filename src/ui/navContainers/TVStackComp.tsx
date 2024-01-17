import { TVStack } from "../../navigation/containers/nativeStack/TVStack"; 
import DetailsScreen from "../screens/App/Feed/DetailsScreen";
import ListingScreen from "../screens/App/Feed/ListingScreen";

const TVStackComp = () => {
  return (
    <TVStack.Navigator
    screenOptions={{ headerTitle:"", headerTransparent: true }}>
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
