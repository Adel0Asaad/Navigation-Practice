import { View } from "react-native"
import WelcomeText from "../../components/WelcomeText"
import PrimaryButton from "../../components/PrimaryButton"
import { useDispatch } from "react-redux"
import { logout } from "../../../store/redux/slices/userSlice"

function SettingsDetailsScreen(){
    const dispatch = useDispatch()
    function dispatchLogout(){
        dispatch(logout())
    }

    return (
        <View>
            <WelcomeText />
            <PrimaryButton onPress={dispatchLogout}>Logout</PrimaryButton>
        </View>
    )
}

export default SettingsDetailsScreen