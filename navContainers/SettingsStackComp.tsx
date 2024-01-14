import SettingsDetailsScreen from "../screens/App/SettingsDetailsScreen";
import SettingsScreen from "../screens/App/SettingsScreen";
import { SettingsStack } from "../util/navigation";

function SettingsStackComp() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <SettingsStack.Screen name="SettingsDetailsScreen" component={SettingsDetailsScreen} />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackComp;
