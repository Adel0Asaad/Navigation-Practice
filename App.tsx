import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
// const RootStack = createNativeStackNavigator();

import { ImageBackground, StyleSheet } from "react-native";
import Colors from "./src/util/Colors";
import { Provider } from "react-redux";
import { store } from "./src/store/redux/store";
import RootStackComp from "./src/ui/navContainers/Root/RootStackComp";


// function RootStack() {
//   const logged = useAppSelector((state) => state.userData.logged)
//   // return <></> 
//   return logged ? <AppTabsComp /> : <AuthStackComp />;

// }

export default function App() {
  return (
    // <LinearGradient
    //   style={styles.rootScreen}
    //   colors={[Colors.primary800, Colors.accent500]}
    // >
    //   <StatusBar style="dark" />
    //   <ImageBackground
    //     source={require("./assets/images/background2.jpg")}
    //     resizeMode="cover"
    //     style={styles.rootScreen}
    //     imageStyle={styles.backgroundImage}
    //   >
        <Provider store={store} >
          <NavigationContainer  >
            <RootStackComp />
          </NavigationContainer>
        </Provider>
    //   </ImageBackground>
    // </LinearGradient>
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
