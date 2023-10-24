import React from "react";
import { ActivityIndicator } from "react-native";
import { GLOBALS } from "../../../globals";

const Spinner = ({ size = "large", color = "primary" }) => {
  return (
    <ActivityIndicator
      size={size}
      color={GLOBALS.themeModes.LIGHT.colors[color].base}
    />
  );
};

export default Spinner;
