import { MovieStack } from "../../../../navigation/containers/nativeStack/MovieStack";
import ListingScreen from "../../../screens/App/Home/Movies/ListingScreen";
import DetailsScreen from "../../../screens/App/Home/Movies/DetailsScreen";

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
