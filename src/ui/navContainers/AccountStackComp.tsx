import AccountDetailsDetailsScreen from "../screens/App/Account/AccountDetailsDetailsScreen";
import AccountDetailsScreen from "../screens/App/Account/AccountDetailsScreen";
import AccountScreen from "../screens/App/Account/AccountScreen";
import { AccountStack } from "../../navigation/containers/nativeStack/AccountStack";

function AccountStackComp() {
  return (
    <AccountStack.Navigator
      initialRouteName="AccountScreen"
      screenOptions={{ headerTitle:"", headerTransparent: true }}
    >
      <AccountStack.Screen name="AccountScreen" component={AccountScreen} />
      <AccountStack.Screen
        name="AccountDetailsScreen"
        component={AccountDetailsScreen}
      />
      <AccountStack.Screen
        name="AccountDetailsDetailsScreen"
        component={AccountDetailsDetailsScreen}
      />
    </AccountStack.Navigator>
  );
}

export default AccountStackComp;
