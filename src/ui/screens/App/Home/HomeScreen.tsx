import PrimaryButton from "../../../components/PrimaryButton";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigation } from "../../../../navigation/containers/nativeStack/HomeStack"; 
import WelcomeText from "../../../components/WelcomeText";

function HomeScreen() {
  const navigation = useNavigation<HomeNavigation>()
  function homeNavHandler() {
    // dispatch(logout());
    // dispatch(resetUsername());
    navigation.navigate("HomeDetailsScreen")
  }

  return (
    <View style={styles.rootScreen}>
      <WelcomeText />
      <PrimaryButton onPress={homeNavHandler}>Home Details</PrimaryButton>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
