import { MovieStack } from "../../navigation/containers/nativeStack/MovieStack";
import ListingScreen from "../screens/App/Feed/Movies/ListingScreen";
import DetailsScreen from "../screens/App/Feed/Movies/DetailsScreen";
import Colors from "../../util/Colors";

const MovieStackComp = () => {
  return (
    <MovieStack.Navigator
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
      <MovieStack.Screen
        name="ListingScreen"
        component={ListingScreen}
        options={{title: "Listing Movies"}}
      />
      <MovieStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </MovieStack.Navigator>
  );
};

export default MovieStackComp;
