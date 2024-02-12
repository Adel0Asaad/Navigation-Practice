import { Text } from "react-native";
import { Props } from "./interface";
import { styles } from "./style";

const Instruction = ({ children, textStyle }: Props) => {
  return <Text style={[styles.instructionText, textStyle]}>{children}</Text>;
};


export default Instruction