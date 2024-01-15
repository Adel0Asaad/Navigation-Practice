import HomeDetailsScreen from "../screens/App/HomeDetailsScreen";
import HomeScreen from "../screens/App/HomeScreen";
import { HomeStack } from "../../util/navigation";

function HomeStackComp() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="HomeDetailsScreen" component={HomeDetailsScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackComp;
