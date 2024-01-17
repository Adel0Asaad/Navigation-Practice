import { View } from "react-native"
import WelcomeText from "../../../components/WelcomeText"
import PrimaryButton from "../../../components/PrimaryButton"
import { useNavigation } from "@react-navigation/native"
import { AccountNavigation } from "../../../../navigation/containers/nativeStack/AccountStack" 

function AccountDetailsScreen(){
    const navigation = useNavigation<AccountNavigation>()
    function accountNavHandler(){
        navigation.navigate("AccountDetailsDetailsScreen")
    }

    return (
        <View>
            <WelcomeText />
            <PrimaryButton onPress={accountNavHandler}>Account Details Details!</PrimaryButton>
        </View>
    )
}
export default AccountDetailsScreen