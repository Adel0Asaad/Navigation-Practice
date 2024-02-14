import { ReactNode } from "react";
import { GestureResponderEvent, ViewStyle } from "react-native";

export interface Props  {
    children: ReactNode;
    style?: ViewStyle | undefined;
    onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  };