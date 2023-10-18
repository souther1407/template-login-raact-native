import React from "react";
import Text from "../../atoms/Text/Text";
import { TouchableOpacity } from "react-native";
import { stylesLight, stylesDark } from "./styles";
import { useChangeMode } from "../../../store/useChangeMode";
import { LIGHT, DARK } from "../../../constants/constants";
import { GLOBALS } from "../../../globals";
const TextButton = ({
  textProps,
  variant = "fullPrimary",
  onTouch,
  children,
}) => {
  const colorMode = useChangeMode((state) => state.mode);

  const applyBgTheme = () => {
    switch (colorMode) {
      case LIGHT:
        return [stylesLight.button, stylesLight[variant]];
      case DARK:
        return [stylesDark.button, stylesDark[variant]];
      default:
        return [stylesLight.button, stylesLight[variant]];
    }
  };
  const applyTextTheme = () => {
    switch (variant) {
      case "fullPrimary":
        return GLOBALS.colors.white;

      case "fullSecondary":
        return GLOBALS.colors.white;

      case "borderedPrimary":
        return GLOBALS.themeModes[colorMode].colors.primary.base;

      case "borderedSecondary":
        return GLOBALS.themeModes[colorMode].colors.secondary.base;
      default:
        break;
    }
  };
  return (
    <TouchableOpacity onPress={onTouch} style={applyBgTheme()}>
      <Text align="center" color={applyTextTheme()} {...textProps}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
