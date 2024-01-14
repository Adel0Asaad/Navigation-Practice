import { View } from "react-native"
import WelcomeText from "../../components/WelcomeText"
import PrimaryButton from "../../components/PrimaryButton"
import { useDispatch } from "react-redux"
import { logout } from "../../store/redux/authSlice"
import { resetUsername } from "../../store/redux/userSlice"
import { resetFeedData } from "../../store/redux/feedSlice"

function SettingsDetailsScreen(){
    const dispatch = useDispatch()
    function dispatchLogout(){
        dispatch(logout())
        dispatch(resetUsername())
        dispatch(resetFeedData())
    }

    return (
        <View>
            <WelcomeText />
            <PrimaryButton onPress={dispatchLogout}>Logout</PrimaryButton>
        </View>
    )
}

export default SettingsDetailsScreen