import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../../../components/atoms/PrimaryButton";
import { Props } from "./interface";
import { useRegister } from "./hooks/useRegister";
import { styles } from "./style";

const RegisterScreen = ({ route, navigation }: Props) => {
  const { dispatchLogin, username, usernameTextHandler } = useRegister({route, navigation});

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
};

export default RegisterScreen;
