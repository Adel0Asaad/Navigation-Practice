import { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../../util/Colors";

export function Title({children}: {children: ReactNode}){
    return <Text style={styles.titleText}>{children}</Text>
}

export const TitleSmall = ({children}: {children: ReactNode}) => {
    return <Text style={styles.smallTitle}>{children}</Text>
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#bb6a5f",
        textAlign: "center",
        borderWidth: 2,
        borderColor: Colors.accent300,
        backgroundColor: Colors.accent300,
        padding: 12,
    },
    smallTitle: {
        marginTop: 6,
        fontSize: 18,
        fontWeight: 'bold',
        color: "white",
        textAlign: "center",
        borderWidth: 2,
        borderColor: Colors.primary800,
        backgroundColor: Colors.primary800,
        padding: 6,
    }
})