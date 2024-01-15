import { View } from "react-native";
import WelcomeText from "../../components/WelcomeText";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { NotificationsNavigation } from "../../../util/navigation";

function NotificationsScreen() {
  const navigation = useNavigation<NotificationsNavigation>();
  function notificationsNavHandler() {
    navigation.navigate("NotificationsDetailsScreen");
  }

  return (
    <View>
      <WelcomeText />
      <PrimaryButton onPress={notificationsNavHandler}>
        Notifications Details
      </PrimaryButton>
    </View>
  );
}

export default NotificationsScreen;
