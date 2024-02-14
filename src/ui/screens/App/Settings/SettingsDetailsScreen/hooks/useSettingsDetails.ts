import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { LoginNavigation } from "../../../../../../navigation/AuthStack/interface";
import { logout } from "../../../../../../store/redux/slices/userSlice";

export const useSettingsDetails = () => {
  const navigation = useNavigation<LoginNavigation>();
  const dispatch = useDispatch();
  const dispatchLogout = () => {
    dispatch(logout());
    navigation.navigate("LoginScreen");
  };

  return {dispatchLogout}
};
