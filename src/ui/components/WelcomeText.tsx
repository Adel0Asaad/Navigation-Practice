import { ReactNode } from "react";
import { StyleSheet, Text, ViewStyle } from "react-native";
import { useAppSelector } from "../../store/redux/hooks";

type Props = {
    style?: ViewStyle | undefined,
}

function WelcomeText(props: Props){
    const username = useAppSelector((state) => state.userData.username)
    return <Text style={[styles.titleText, props.style]}>Welcome {username}</Text>
}

export default WelcomeText

const styles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#3b73d3",
        textAlign: "center",
        // borderWidth: 2,
        // borderColor: "white",
        padding: 6,
    },
})