import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/store/redux/store";
import RootStackComp from "./src/ui/structure/Root/RootStackComp";

export default function App() {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        style="light"
      />
      <Provider store={store}>
        <NavigationContainer>
          <RootStackComp />
        </NavigationContainer>
      </Provider>
    </>
  );
}
