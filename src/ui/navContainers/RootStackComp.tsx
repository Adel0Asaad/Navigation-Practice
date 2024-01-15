import { RootStack } from "../../util/navigation";
import AppTabsComp from "./AppTabsComp";
import AuthStackComp from "./AuthStackComp";

function RootStackComp() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="AuthStack"
        component={AuthStackComp}
        options={{ title: "Authentication", headerShown: false }}
      />
      <RootStack.Screen
        name="AppTabs"
        component={AppTabsComp}
        options={{ title: "Application", headerShown: false }}
      />
    </RootStack.Navigator>
  );
}

export default RootStackComp;
