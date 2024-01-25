import { StyleSheet, Text, TextStyle, ViewStyle } from "react-native";

type Props = {
  children: React.ReactNode;
  textStyle?: TextStyle
};

const Instruction = ({ children, textStyle }: Props) => {
  return <Text style={[styles.instructionText, textStyle]}>{children}</Text>;
};

const styles = StyleSheet.create({
    instructionText: {
        flex: 1,
        textAlign: "center",
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    }
})

export default Instruction
