import HomeDetailsScreen from "../screens/App/Home/HomeDetailsScreen";
import HomeScreen from "../screens/App/Home/HomeScreen";
import { HomeStack } from "../../navigation/containers/nativeStack/HomeStack";
import Colors from "../../util/Colors";

function HomeStackComp() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: Colors.accent300 },
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home Screen" }}
      />
      <HomeStack.Screen
        name="HomeDetailsScreen"
        component={HomeDetailsScreen}
        options={{ title: "Home Details" }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackComp;
