import { TVStack } from "../../navigation/containers/nativeStack/TVStack";
import Colors from "../../util/Colors";
import DetailsScreen from "../screens/App/Home/Series/DetailsScreen";
import ListingScreen from "../screens/App/Home/Series/ListingScreen";

const TVStackComp = () => {
  return (
    <TVStack.Navigator
      screenOptions={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: Colors.backgroundColor },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          color: Colors.titleColor,
        },
        headerShown: false
      }}
    >
      <TVStack.Screen
        name="ListingScreen"
        component={ListingScreen}
        options={{ title: "Listing Series" }}
      ></TVStack.Screen>

      <TVStack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          headerTitleStyle: {
            fontSize: 20,
            color: Colors.titleColor,
            fontWeight: "bold",
          },
        }}
      ></TVStack.Screen>
    </TVStack.Navigator>
  );
};

export default TVStackComp;
