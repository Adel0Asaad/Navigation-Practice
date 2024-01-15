import AccountDetailsDetailsScreen from "../screens/App/AccountDetailsDetailsScreen";
import AccountDetailsScreen from "../screens/App/AccountDetailsScreen";
import AccountScreen from "../screens/App/AccountScreen";
import { AccountStack } from "../util/navigation";

function AccountStackComp() {
  return (
    <AccountStack.Navigator
    initialRouteName="AccountScreen"
    >
      <AccountStack.Screen name="AccountScreen" component={AccountScreen} />
      <AccountStack.Screen name="AccountDetailsScreen" component={AccountDetailsScreen} />
      <AccountStack.Screen name="AccountDetailsDetailsScreen" component={AccountDetailsDetailsScreen} />
    </AccountStack.Navigator>
  );
}

export default AccountStackComp;
