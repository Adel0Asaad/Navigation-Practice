import { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../../util/Colors";

function Title({children}: {children: ReactNode}){
    return <Text style={styles.titleText}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "white",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "white",
        padding: 12,
    },
})