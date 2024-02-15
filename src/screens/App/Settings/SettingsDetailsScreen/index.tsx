import { View } from "react-native";
import WelcomeText from "../../../../components/atoms/WelcomeText";
import PrimaryButton from "../../../../components/atoms/PrimaryButton";
import { useSettingsDetails } from "./hooks/useSettingsDetails";

const SettingsDetailsScreen = () => {
  const {dispatchLogout} = useSettingsDetails()

  return (
    <View>
      <WelcomeText />
      <PrimaryButton onPress={dispatchLogout}>Logout</PrimaryButton>
    </View>
  );
};

export default SettingsDetailsScreen;
