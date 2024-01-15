import { View } from "react-native"
import WelcomeText from "../../components/WelcomeText"
import PrimaryButton from "../../components/PrimaryButton"
import { useNavigation } from "@react-navigation/native"
import { SettingsNavigation } from "../../../util/navigation"

function SettingsScreen(){
    const navigation = useNavigation<SettingsNavigation>()
    function settingsNavHandler(){
        navigation.navigate("SettingsDetailsScreen")
    }

    return (
        <View>
            <WelcomeText />
            <PrimaryButton onPress={settingsNavHandler}>Settings Details</PrimaryButton>
        </View>
    )
}

export default SettingsScreen