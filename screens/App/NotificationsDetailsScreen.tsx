import { View } from "react-native";
import WelcomeText from "../../components/WelcomeText";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { NotificationsNavigation } from "../../util/navigation";

function NotificationsDetailsScreen() {
  const navigation = useNavigation<NotificationsNavigation>();
  function notificationsNavHandler() {
    navigation.navigate("AccountStack", {screen: "AccountDetailsScreen"});
    
  }

  return (
    <View>
      <WelcomeText />
      <PrimaryButton onPress={notificationsNavHandler}>
        Account Details
      </PrimaryButton>
    </View>
  );
}

export default NotificationsDetailsScreen;
