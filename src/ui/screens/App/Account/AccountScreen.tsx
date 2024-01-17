import { View } from "react-native"
import WelcomeText from "../../../components/WelcomeText"
import PrimaryButton from "../../../components/PrimaryButton"
import { CompositeNavigationProp, RouteProp, useNavigation } from "@react-navigation/native"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { AppTabParamList } from "../../../../navigation/containers/bottomTab/AppTabs";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { AccountStackParamList } from "../../../../navigation/containers/nativeStack/AccountStack";
// import { AccountNavigation } from "../../../navigation/containers/nativeStack/AccountStack"

// type NavigationProp = CompositeNavigationProp<
//   BottomTabNavigationProp<AppTabParamList, "AccountStack">,
//   NativeStackNavigationProp<AccountStackParamList, "AccountScreen">
// >;

// type AccountScreenRouteProp = RouteProp<AccountStackParamList, "AccountScreen"> 
// // this is me practicing different ways to receive route/nav props.

type Props = NativeStackScreenProps<AccountStackParamList, "AccountScreen">

function AccountScreen({navigation, route}: Props){
    
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