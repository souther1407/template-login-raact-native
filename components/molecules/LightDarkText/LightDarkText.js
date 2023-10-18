import React from "react";
import Text from "../../atoms/Text/Text";
import { useChangeMode } from "../../../store/useChangeMode";
import { GLOBALS } from "../../../globals";
const LightDarkText = ({ type = "text", bold, align = "left", children }) => {
  const colorMode = useChangeMode((state) => state.mode);

  return (
    <Text
      bold={bold}
      type={type}
      align={align}
      color={GLOBALS.themeModes[colorMode].colors.text.base}
    >
      {children}
    </Text>
  );
};

export default LightDarkText;
