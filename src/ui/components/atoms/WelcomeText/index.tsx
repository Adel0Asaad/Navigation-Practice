import { Text } from "react-native";
import { useAppSelector } from "../../../../util/useReduxHooks";
import { Props } from "./interface";
import { styles } from "./style";

function WelcomeText(props: Props) {
  const username = useAppSelector((state) => state.userData.username);
  return (
    <Text style={[styles.titleText, props.style]}>Welcome {username}</Text>
  );
}

export default WelcomeText;