import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { useChangeMode } from "../../../store/useChangeMode";
const ScreenContainer = ({ children }) => {
  const colorMode = useChangeMode((state) => state.mode);
  return <View style={[styles.view, styles[colorMode]]}>{children}</View>;
};

export default ScreenContainer;
