import { useState } from "react";
import { Alert } from "react-native";
import { useAppDispatch } from "../../../../../util/useReduxHooks";
import { login } from "../../../../../store/redux/slices/userSlice";
import { Props } from "../interface";
import { useAppNavigation } from "../../../../../util/useAppNavigation";

export const useRegister = ({route}: Props) => {
    const navigation = useAppNavigation()
    const [username, setUsername] = useState<string>(
      route.params?.username ?? ""
    );
    const dispatch = useAppDispatch();
  
    function usernameTextHandler(text: string) {
      setUsername(text);
    }
  
    function dispatchLogin() {
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
    return {usernameTextHandler, dispatchLogin, username}
}