import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Instruction from "./Instruction";

type Props = {
  instructionText?: string,
}

const EmptyListComp = ({instructionText}: Props) => {
  return (
    <View style={styles.normal}>
      <Entypo name="emoji-sad" size={100} color="white" />
      <Instruction>It's empty in here...</Instruction>
      <Instruction textStyle={{ fontSize: 18 }}>{instructionText ?? "Start Searching!"}</Instruction>
    </View>
  );
};

const styles = StyleSheet.create({
  normal: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 16 },
});

export default EmptyListComp;
