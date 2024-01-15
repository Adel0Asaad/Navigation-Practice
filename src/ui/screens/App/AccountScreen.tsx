import { View } from "react-native"
import WelcomeText from "../../components/WelcomeText"
import PrimaryButton from "../../components/PrimaryButton"
import { useNavigation } from "@react-navigation/native"
import { AccountNavigation } from "../../../util/navigation"

function AccountScreen(){
    const navigation = useNavigation<AccountNavigation>()
    function accountNavHandler(){
        navigation.navigate("AccountDetailsScreen")
    }

    return (
        <View>
            <WelcomeText />
            <PrimaryButton onPress={accountNavHandler}>Account Details</PrimaryButton>
        </View>
    )
}
export default AccountScreen