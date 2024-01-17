import { View } from "react-native"
import WelcomeText from "../../../components/WelcomeText"
import PrimaryButton from "../../../components/PrimaryButton"
import { useAppNavigation } from "../../../../navigation/appNav"


function SettingsScreen(){
    const navigation = useAppNavigation()
    function settingsNavHandler(){
        navigation.navigate("AppTabs", {screen: "SettingsStack", params: {screen: "SettingsDetailsScreen"}})
    }

    return (
        <View>
            <WelcomeText />
            <PrimaryButton onPress={settingsNavHandler}>Settings Details</PrimaryButton>
        </View>
    )
}

export default SettingsScreen