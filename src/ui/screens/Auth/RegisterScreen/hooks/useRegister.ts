import { useState } from "react";
import { Alert } from "react-native";
import { useAppDispatch } from "../../../../../store/redux/hooks";
import { login } from "../../../../../store/redux/slices/userSlice";
import { Props } from "../interface";
import { useAppNavigation } from "../../../../../navigation/hooks/useAppNavigation";

export const useRegister = ({route}: Props) => {
    const navigation = useAppNavigation()
    console.log(route.params?.username);
    const [username, setUsername] = useState<string>(
      route.params?.username ?? ""
    );
    const dispatch = useAppDispatch();
  
    function usernameTextHandler(text: string) {
      setUsername(text);
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
    return {usernameTextHandler, dispatchLogin, username}
}