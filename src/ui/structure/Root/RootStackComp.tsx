import { RootStack } from "../../../navigation/containers/nativeStack/RootStack";
import AppTabsComp from "../App/AppTabsComp";
import AuthStackComp from "../Auth/AuthStackComp";

function RootStackComp() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="AuthStack" component={AuthStackComp} />
      <RootStack.Screen name="AppTabs" component={AppTabsComp} />
    </RootStack.Navigator>
  );
}

export default RootStackComp;
