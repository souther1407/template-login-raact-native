import { StyleSheet } from "react-native";
import { GLOBALS } from "../../../globals";
const primaryLight = GLOBALS.themeModes.LIGHT.colors.primary.base;
const secondaryLight = GLOBALS.themeModes.LIGHT.colors.secondary.base;
const primaryDark = GLOBALS.themeModes.DARK.colors.primary.base;
const secondaryDark = GLOBALS.themeModes.DARK.colors.secondary.base;
const textLight = GLOBALS.themeModes.LIGHT.colors.text.base;
const textDark = GLOBALS.themeModes.DARK.colors.text.base;
export const stylesLight = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    color: textLight,
  },
  primary: {
    borderBottomColor: primaryLight,
  },
  secondary: {
    borderBottomColor: secondaryLight,
  },
});

export const stylesDark = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    color: textDark,
  },
  primary: {
    borderBottomColor: primaryDark,
  },
  secondary: {
    borderBottomColor: secondaryDark,
  },
});
