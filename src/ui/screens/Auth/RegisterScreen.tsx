import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import Colors from "../../../util/Colors";
import { useAppDispatch } from "../../../store/redux/hooks";
import { login } from "../../../store/redux/slices/userSlice";
import { useState } from "react";
import { useAppNavigation } from "../../../navigation/appNav";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../navigation/containers/nativeStack/AuthStack";

type Props = NativeStackScreenProps<AuthStackParamList, "RegisterScreen">;

function RegisterScreen({ route }: Props) {
  const navigation = useAppNavigation();
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

  return (
    <View style={styles.rootScreen}>
      {/* <Title>Login</Title> */}
      <TextInput
        placeholder="Enter username"
        style={styles.userTextInput}
        onChangeText={usernameTextHandler}
        value={username}
      ></TextInput>
      <View style={styles.buttonsContainer}>
        <PrimaryButton style={styles.buttonStyle} onPress={dispatchLogin}>
          Register
        </PrimaryButton>
        <PrimaryButton style={styles.buttonStyle} onPress={navigation.goBack}>
          Go Back
        </PrimaryButton>
      </View>
    </View>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  rootScreen: {},
  userTextInput: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: Colors.accent300,
    backgroundColor: Colors.accent300,
    borderRadius: 6,
    color: "#120438",
    width: "100%",
    padding: 8,
  },
  buttonsContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    flex: 1,
  },
});
