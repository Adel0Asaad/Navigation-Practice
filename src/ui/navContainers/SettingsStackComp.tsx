import SettingsDetailsScreen from "../screens/App/Settings/SettingsDetailsScreen";
import SettingsScreen from "../screens/App/Settings/SettingsScreen";
import { SettingsStack } from "../../navigation/containers/nativeStack/SettingsStack";
import Colors from "../../util/Colors";

function SettingsStackComp() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: Colors.accent300 },
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
