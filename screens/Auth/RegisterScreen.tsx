import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import Colors from "../../util/Colors";
import { useAppDispatch, useAppSelector } from "../../store/redux/hooks";
import { login } from "../../store/redux/authSlice";
import { setUsername } from "../../store/redux/userSlice";
import { useNavigation } from "@react-navigation/native";
import { RegisterNavigation } from "../../util/navigation";

function RegisterScreen() {
  const navigation = useNavigation<RegisterNavigation>();
  const username = useAppSelector((state) => state.username);
  const dispatch = useAppDispatch();

  function usernameTextHandler(text: string) {
    dispatch(setUsername(text));
  }

  function dispatchLogin() {
    username !== ""
      ? dispatch(login())
      : Alert.alert(
          "Invalid username",
          "Please enter a username using a-z, 0-9, special characters allowed.",
          [{ text: "Okay", style: "destructive" }]
        );
  }

  return (
    <View style={styles.rootScreen}>
      {/* <Title>Login</Title> */}
      <TextInput
        placeholder="Enter username"
        style={styles.userTextInput}
        onChangeText={usernameTextHandler}
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
