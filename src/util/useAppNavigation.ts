import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../navigation/containers/nativeStack/RootStack"

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamList>>()
}