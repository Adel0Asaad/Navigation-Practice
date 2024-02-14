import { useAppNavigation } from "../../../../../../util/useAppNavigation";

export const useSettings = () => {
    const navigation = useAppNavigation();
    const settingsNavHandler = () => {
      navigation.navigate("AppTabs", {
        screen: "SettingsStack",
        params: { screen: "SettingsDetailsScreen" },
      });
    };
    return {settingsNavHandler}
}