import LoginScreen from "../../screens/Auth/LoginScreen";
import RegisterScreen from "../../screens/Auth/RegisterScreen";
import { AuthStack } from "../../../navigation/containers/nativeStack/AuthStack";
import LocalColors from "../../../themes/colors";

function AuthStackComp() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: LocalColors.primary500 },
        headerTintColor: "white"
      }}
    >
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "Login Screen" }}
      />
      <AuthStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: "Register Screen" }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackComp;
