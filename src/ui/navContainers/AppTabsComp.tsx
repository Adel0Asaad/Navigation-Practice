import { AppTabs } from "../../util/navigation";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AccountStackComp from "./AccountStackComp";
import NotificationsStackComp from "./NotificationsStackComp";
import HomeStackComp from "./HomeStackComp";
import FeedStackComp from "./FeedStackComp";
import SettingsStackComp from "./SettingsStackComp";

function AppTabsComp() {
  return (
    <AppTabs.Navigator
      initialRouteName="HomeStack"
      
      screenOptions={{
        lazy: false,
        tabBarStyle: { backgroundColor: "#1f1d92" },
        tabBarActiveTintColor: ioniconStyle.activeColor,
      }}
    >
      <AppTabs.Screen
        name="AccountStack"
        component={AccountStackComp}
        options={{
          title: "Account",
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="profile"
              size={ioniconStyle.size}
              color={
                focused ? ioniconStyle.activeColor : ioniconStyle.inactiveColor
              }
            />
          ),
        }}
      />
      <AppTabs.Screen
        name="NotificationsStack"
        component={NotificationsStackComp}
        options={{
          title: "Notifications",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="notifications"
              size={ioniconStyle.size}
              color={
                focused ? ioniconStyle.activeColor : ioniconStyle.inactiveColor
              }
            />
          ),
        }}
      />
      <AppTabs.Screen
        name="HomeStack"
        component={HomeStackComp}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={ioniconStyle.size}
              color={
                focused ? ioniconStyle.activeColor : ioniconStyle.inactiveColor
              }
            />
          ),
        }}
      />
      <AppTabs.Screen
        name="FeedStack"
        component={FeedStackComp}
        options={{
          title: "Feed",
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="comment"
              size={ioniconStyle.size}
              color={
                focused ? ioniconStyle.activeColor : ioniconStyle.inactiveColor
              }
            />
          ),
        }}
      />
      <AppTabs.Screen
        name="SettingsStack"
        component={SettingsStackComp}
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="settings"
              size={ioniconStyle.size}
              color={
                focused ? ioniconStyle.activeColor : ioniconStyle.inactiveColor
              }
            />
          ),
        }}
      />
    </AppTabs.Navigator>
  );
}

export default AppTabsComp;

const ioniconStyle = {
  size: 24,
  activeColor: "#e8ecf3",
  inactiveColor: "#707783",
};
