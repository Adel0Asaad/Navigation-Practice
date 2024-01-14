import { useDispatch } from "react-redux";
import PrimaryButton from "../../components/PrimaryButton";
import { logout } from "../../store/redux/authSlice";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../store/redux/hooks";
import { resetUsername } from "../../store/redux/userSlice";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigation } from "../../util/navigation";
import WelcomeText from "../../components/WelcomeText";

function HomeScreen() {
  const navigation = useNavigation<HomeNavigation>()
  const username = useAppSelector((state) => state.username);
  const dispatch = useDispatch();
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
