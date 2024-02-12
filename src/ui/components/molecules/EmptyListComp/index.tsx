import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Instruction from "../../atoms/Instruction";
import { styles } from "./style";
import { Props } from "./interface";

const EmptyListComp = ({ instructionText }: Props) => {
  return (
    <View style={styles.normal}>
      <Entypo name="emoji-sad" size={100} color="white" />
      <Instruction>It's empty in here...</Instruction>
      <Instruction textStyle={{ fontSize: 18 }}>
        {instructionText ?? "Start Searching!"}
      </Instruction>
    </View>
  );
};

export default EmptyListComp;
