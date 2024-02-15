import { TextInput, View } from "react-native";
import PrimaryButton from "../../../components/atoms/PrimaryButton";
import { useLogin } from "./hooks/useLogin";
import { styles } from "./style";

const LoginScreen = () => {
  const { dispatchLogin, registerHandler, usernameTextHandler, username } = useLogin();

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
          Login
        </PrimaryButton>
        <PrimaryButton style={styles.buttonStyle} onPress={registerHandler}>
          Register
        </PrimaryButton>
      </View>
    </View>
  );
};

export default LoginScreen;
