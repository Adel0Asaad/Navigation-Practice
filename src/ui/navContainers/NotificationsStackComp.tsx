import NotificationsDetailsScreen from "../screens/App/NotificationsDetailsScreen";
import NotificationsScreen from "../screens/App/NotificationsScreen";
import { NotificationsStack } from "../../util/navigation";

function NotificationsStackComp() {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen name="NotificationsScreen" component={NotificationsScreen} />
      <NotificationsStack.Screen name="NotificationsDetailsScreen" component={NotificationsDetailsScreen} />
    </NotificationsStack.Navigator>
  );
}

export default NotificationsStackComp;
