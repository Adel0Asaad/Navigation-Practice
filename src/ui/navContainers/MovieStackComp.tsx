import { MovieStack } from "../../util/navigation";
import ListingScreen from "../screens/App/Feed/ListingScreen";
import DetailsScreen from "../screens/App/Feed/DetailsScreen";

const MovieStackComp = () => {
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen name="ListingScreen" component={ListingScreen} initialParams={{genre: "Movies"}} />
      <MovieStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </MovieStack.Navigator>
  );
};

export default MovieStackComp;
