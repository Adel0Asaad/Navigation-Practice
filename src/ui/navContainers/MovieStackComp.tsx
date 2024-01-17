import { MovieStack } from "../../navigation/containers/nativeStack/MovieStack";
import ListingScreen from "../screens/App/Feed/ListingScreen";
import DetailsScreen from "../screens/App/Feed/DetailsScreen";
import Colors from "../../util/Colors";

const MovieStackComp = () => {
  return (
    <MovieStack.Navigator
      screenOptions={{ headerTitle: "", headerTransparent: true }}
    >
      <MovieStack.Screen
        name="ListingScreen"
        component={ListingScreen}
        initialParams={{ genre: "Movies" }}
      />
      <MovieStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </MovieStack.Navigator>
  );
};

export default MovieStackComp;
