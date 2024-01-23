import { MovieStack } from "../../../../navigation/containers/nativeStack/MovieStack";
import ListingScreen from "../../../screens/App/Search/Movies/ListingScreen";
import DetailsScreen from "../../../screens/App/Search/Movies/DetailsScreen";
import Colors from "../../../../util/Colors";

const MovieStackComp = () => {
  return (
    <MovieStack.Navigator
      screenOptions={{
        headerTitle: "",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: Colors.backgroundColor },
        headerBackVisible: true,
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          color: Colors.titleColor,
        },
        headerShown: false
      }}
    >
      <MovieStack.Screen
        name="ListingScreen"
        component={ListingScreen}
        options={{ title: "Movies" }}
      />
      <MovieStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </MovieStack.Navigator>
  );
};

export default MovieStackComp;
