import { View } from "react-native"
import WelcomeText from "../../../components/WelcomeText"
import PrimaryButton from "../../../components/PrimaryButton"
import { useDispatch } from "react-redux"
import { logout } from "../../../../store/redux/slices/userSlice"
import { useNavigation } from "@react-navigation/native"
import { LoginNavigation } from "../../../../navigation/containers/nativeStack/AuthStack" 

function SettingsDetailsScreen(){
    const navigation = useNavigation<LoginNavigation>()
    const dispatch = useDispatch()
    function dispatchLogout(){
        dispatch(logout())
        navigation.navigate("LoginScreen")
    }

    return (
        <View>
            <WelcomeText />
            <PrimaryButton onPress={dispatchLogout}>Logout</PrimaryButton>
        </View>
    )
}

export default SettingsDetailsScreen