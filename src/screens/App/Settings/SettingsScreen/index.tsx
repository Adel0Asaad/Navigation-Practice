import { View } from "react-native";
import WelcomeText from "../../../../components/atoms/WelcomeText";
import PrimaryButton from "../../../../components/atoms/PrimaryButton";
import { styles } from "./style";
import { useSettings } from "./hooks/useSettings";

const SettingsScreen = () => {
    
  const {settingsNavHandler} = useSettings()

  return (
    <View style={styles.rootContainer}>
      <WelcomeText />
      <PrimaryButton onPress={settingsNavHandler}>
        Settings Details
      </PrimaryButton>
    </View>
  );
};

export default SettingsScreen;
