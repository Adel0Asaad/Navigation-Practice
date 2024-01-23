import { AppTabs } from "../../../navigation/containers/bottomTab/AppTabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import SettingsStackComp from "./Settings/SettingsStackComp";
import HomeTabsComp from "./Home/HomeTabsComp";
import SearchTabsComp from "./Search/SearchTabsComp";
import Colors from "../../../util/Colors";
import FavTabsComp from "./Fav/FavTabsComp";

function AppTabsComp() {
  return (
    <AppTabs.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{
        tabBarStyle: { backgroundColor: Colors.primary500 },
        tabBarShowLabel: false,
        tabBarActiveTintColor: ioniconStyle.activeColor,
        headerShown: false,
      }}
    >
      <AppTabs.Screen
        name="FavTabs"
        component={FavTabsComp}
        options={{
          title: "Favs",
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="heart-fill"
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
        name="SearchTabs"
        component={SearchTabsComp}
        options={{
          title: "Feed",
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="search"
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
