import NotificationsDetailsScreen from "../screens/App/Notifications/NotificationsDetailsScreen";
import NotificationsScreen from "../screens/App/Notifications/NotificationsScreen";
import { NotificationsStack } from "../../navigation/containers/nativeStack/NotificationsStack";
import Colors from "../../util/Colors";

function NotificationsStackComp() {
  return (
    <NotificationsStack.Navigator
      screenOptions={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: Colors.accent300 },
      }}
    >
      <NotificationsStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{ title: "Notifications" }}
      />
      <NotificationsStack.Screen
        name="NotificationsDetailsScreen"
        component={NotificationsDetailsScreen}
        options={{ title: "Notifications Details" }}
      />
    </NotificationsStack.Navigator>
  );
}

export default NotificationsStackComp;
