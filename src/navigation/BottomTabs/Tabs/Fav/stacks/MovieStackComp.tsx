import { MovieStack } from "../../.mediaStackParams/interface"
import ListingScreen from "../../../../../ui/screens/App/Favorites/Movies/ListingScreen";
import DetailsScreen from "../../../../../ui/screens/App/Favorites/Movies/DetailsScreen";

const MovieStackComp = () => {
  return (
    <MovieStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MovieStack.Screen name="ListingScreen" component={ListingScreen} />
      <MovieStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </MovieStack.Navigator>
  );
};

export default MovieStackComp;
