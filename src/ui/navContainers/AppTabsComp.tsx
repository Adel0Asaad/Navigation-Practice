import { AppTabs } from "../../navigation/containers/bottomTab/AppTabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import SettingsStackComp from "./SettingsStackComp";
import HomeTabsComp from "./HomeTabsComp";
import SearchTabsComp from "./SearchTabsComp";

function AppTabsComp() {
  return (
    <AppTabs.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{
        tabBarStyle: { backgroundColor: "#1f1d92" },
        tabBarActiveTintColor: ioniconStyle.activeColor,
        headerShown: false,
      }}
    >
      <AppTabs.Screen
        name="FavTabs"
        component={HomeTabsComp}
        options={{
          title: "Home",
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
        name="HomeTabs"
        component={HomeTabsComp}
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
        name="SearchTabs"
        component={SearchTabsComp}
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
