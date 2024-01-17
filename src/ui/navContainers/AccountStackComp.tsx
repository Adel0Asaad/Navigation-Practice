import AccountDetailsDetailsScreen from "../screens/App/Account/AccountDetailsDetailsScreen";
import AccountDetailsScreen from "../screens/App/Account/AccountDetailsScreen";
import AccountScreen from "../screens/App/Account/AccountScreen";
import { AccountStack } from "../../navigation/containers/nativeStack/AccountStack";
import Colors from "../../util/Colors";

function AccountStackComp() {
  return (
    <AccountStack.Navigator
      initialRouteName="AccountScreen"
      screenOptions={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: Colors.accent300 },
      }}
    >
      <AccountStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ title: "Account" }}
      />
      <AccountStack.Screen
        name="AccountDetailsScreen"
        component={AccountDetailsScreen}
        options={{ title: "Account Details" }}
      />
      <AccountStack.Screen
        name="AccountDetailsDetailsScreen"
        component={AccountDetailsDetailsScreen}
        options={{ title: "Account Details Details" }}
      />
    </AccountStack.Navigator>
  );
}

export default AccountStackComp;
