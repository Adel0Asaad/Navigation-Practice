import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
// const RootStack = createNativeStackNavigator();

import { ImageBackground, StyleSheet } from "react-native";
import Colors from "./src/util/Colors";
import AuthStackComp from "./src/ui/navContainers/AuthStackComp";
import AppTabsComp from "./src/ui/navContainers/AppTabsComp";
import { Provider } from "react-redux";
import { store } from "./src/store/redux/store";
import { useAppSelector, useAppDispatch } from "./src/store/redux/hooks";


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
