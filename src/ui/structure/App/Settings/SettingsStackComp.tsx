import SettingsDetailsScreen from "../../../screens/App/Settings/SettingsDetailsScreen";
import SettingsScreen from "../../../screens/App/Settings/SettingsScreen";
import { SettingsStack } from "../../../../navigation/containers/nativeStack/SettingsStack";
import LocalColors from "../../../../themes/colors";

function SettingsStackComp() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: LocalColors.primary500 },
        headerTintColor: "white",
      }}
    >
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
      <SettingsStack.Screen
        name="SettingsDetailsScreen"
        component={SettingsDetailsScreen}
        options={{ title: "Settings Details" }}
      />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackComp;
