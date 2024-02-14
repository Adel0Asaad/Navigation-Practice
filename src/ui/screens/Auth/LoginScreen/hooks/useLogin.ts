import { Alert } from "react-native";
import { login } from "../../../../../store/redux/slices/userSlice";
import { useAppDispatch } from "../../../../../util/useReduxHooks";
import { useState } from "react";
import { useAppNavigation } from "../../../../../util/useAppNavigation";

export const useLogin = () => {
  const navigation = useAppNavigation();
  const [username, setUserName] = useState<string>("");
  const dispatch = useAppDispatch();

  function usernameTextHandler(text: string) {
    setUserName(text);
  }

  function dispatchLogin() {
    console.log(username);
    if (username !== "") {
      dispatch(login(username));
      navigation.navigate("AppTabs", {
        screen: "HomeTabs",
        params: { screen: "MovieStack", params: { screen: "ListingScreen" } },
      });
    } else {
      Alert.alert(
        "Invalid username",
        "Please enter a username using a-z, 0-9, special characters allowed.",
        [{ text: "Okay", style: "destructive" }]
      );
    }
  }

  const registerHandler = () => {
    navigation.navigate("AuthStack", {
      screen: "RegisterScreen",
      params: { username: username },
    });
  };
  return { usernameTextHandler, dispatchLogin, registerHandler, username };
};
