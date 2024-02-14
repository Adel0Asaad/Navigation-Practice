import { RootStack } from "./interface";
import AppTabsComp from "./BottomTabs";
import AuthStackComp from "./AuthStack";

function RootStackComp() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="AuthStack" component={AuthStackComp} />
      <RootStack.Screen name="AppTabs" component={AppTabsComp} />
    </RootStack.Navigator>
  );
}

export default RootStackComp;
