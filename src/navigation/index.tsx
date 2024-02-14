import AppTabsComp from "../ui/structure/App/AppTabsComp";
import AuthStackComp from "../ui/structure/Auth/AuthStackComp";
import { RootStack } from "./containers/nativeStack/RootStack";

function RootStackComp() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="AuthStack" component={AuthStackComp} />
      <RootStack.Screen name="AppTabs" component={AppTabsComp} />
    </RootStack.Navigator>
  );
}

export default RootStackComp;
