import { View } from "react-native"
import WelcomeText from "../../components/WelcomeText"
import { useNavigation } from "@react-navigation/native"
import { AccountNavigation } from "../../../util/navigation"

function AccountDetailsDetailsScreen(){
    const navigation = useNavigation<AccountNavigation>()
    function accountNavHandler(){
        navigation.navigate("AccountDetailsScreen")
    }

    return (
        <View>
            <WelcomeText />
        </View>
    )
}
export default AccountDetailsDetailsScreen