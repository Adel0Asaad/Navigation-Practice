import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

export const useAppDimensions = () => {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });
  useEffect(() => {
    // credits to https://reactnative.dev/docs/dimensions
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );

    return () => subscription?.remove();
  }, []);

  return { dimensions };
};
