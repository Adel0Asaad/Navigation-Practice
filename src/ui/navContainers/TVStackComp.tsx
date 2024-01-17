import { TVStack } from "../../navigation/containers/nativeStack/TVStack";
import Colors from "../../util/Colors";
import DetailsScreen from "../screens/App/Feed/Series/DetailsScreen";
import ListingScreen from "../screens/App/Feed/Series/ListingScreen";

const TVStackComp = () => {
  return (
    <TVStack.Navigator
      screenOptions={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: Colors.accent300 },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          color: Colors.titleColor,
        },
        // headerShown: false
      }}
    >
      <TVStack.Screen
        name="ListingScreen"
        component={ListingScreen}
        options={{headerShown: false}}
      ></TVStack.Screen>
      <TVStack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
      ></TVStack.Screen>
    </TVStack.Navigator>
  );
};

export default TVStackComp;
