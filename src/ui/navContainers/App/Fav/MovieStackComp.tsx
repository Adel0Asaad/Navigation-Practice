import { MovieStack } from "../../../../navigation/containers/nativeStack/MovieStack";
import ListingScreen from "../../../screens/App/Favorites/Movies/ListingScreen";
import DetailsScreen from "../../../screens/App/Favorites/Movies/DetailsScreen";
import Colors from "../../../../util/Colors";
import { View } from "react-native";

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
      }}
    >
      <MovieStack.Screen
        name="ListingScreen"
        component={ListingScreen}
        options={{
          title: "Movies",
          headerShown: false,
          // header: () => <View style={{height: 200, width: "100%", backgroundColor: "red"}}/>,
        }}
      />
      <MovieStack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{ 
          title: "Details", 
          header: () => <></> 
        }}
      />
    </MovieStack.Navigator>
  );
};

export default MovieStackComp;
