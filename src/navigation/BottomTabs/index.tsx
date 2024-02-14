import { AppTabs } from "./interface";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import SettingsStackComp from "./Tabs/Settings";
import HomeTabsComp from "./Tabs/Home";
import SearchTabsComp from "./Tabs/Search";
import LocalColors from "../../themes/colors";
import FavTabsComp from "./Tabs/Fav";
import { ioniconStyle } from "./style";

function AppTabsComp() {
  return (
    <AppTabs.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{
        tabBarStyle: { backgroundColor: LocalColors.primary500 },
        tabBarShowLabel: false,
        tabBarActiveTintColor: ioniconStyle.activeColor,
        headerShown: false,
      }}
    >
      <AppTabs.Screen
        name="HomeTabs"
        component={HomeTabsComp}
        options={{
          title: "Feed",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home-sharp":"home-outline"}
              size={ioniconStyle.size}
              color={
                focused ? ioniconStyle.activeColor : ioniconStyle.inactiveColor
              }
            />
          ),
        }}
      />
      <AppTabs.Screen
        name="FavTabs"
        component={FavTabsComp}
        options={{
          title: "Favs",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? "heart" : "hearto"}
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

