import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
// const RootStack = createNativeStackNavigator();

import { ImageBackground, StyleSheet } from "react-native";
import Colors from "./util/Colors";
import AuthStackComp from "./navContainers/AuthStack";
import AppTabsComp from "./navContainers/AppTabs";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
import { useAppSelector, useAppDispatch } from "./store/redux/hooks";


function RootStack() {
  const logged = useAppSelector((state) => state.loggedState)
  // return <></> 
  return logged ? <AppTabsComp /> : <AuthStackComp />;
}

export default function App() {
  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary800, Colors.accent500]}
    >
      <StatusBar style="dark" />
      <ImageBackground
        source={require("./assets/images/background2.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <Provider store={store}>
          <NavigationContainer >
            <RootStack />
          </NavigationContainer>
        </Provider>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
