import { RootStack } from "../../navigation/containers/nativeStack/RootStack";
import Colors from "../../util/Colors";
import AppTabsComp from "./AppTabsComp";
import AuthStackComp from "./AuthStackComp";

function RootStackComp() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="AuthStack" component={AuthStackComp} />
      <RootStack.Screen name="AppTabs" component={AppTabsComp} />
    </RootStack.Navigator>
  );
}

export default RootStackComp;
