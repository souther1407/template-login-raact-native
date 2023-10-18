import { StyleSheet } from "react-native";
import { GLOBALS } from "../../../globals.js";
const primaryLight = GLOBALS.themeModes.LIGHT.colors.primary.base;
const secondaryLight = GLOBALS.themeModes.LIGHT.colors.secondary.base;
const primaryDark = GLOBALS.themeModes.DARK.colors.primary.base;
const secondaryDark = GLOBALS.themeModes.DARK.colors.secondary.base;

export const stylesLight = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 8,
  },
  fullPrimary: {
    backgroundColor: primaryLight,
  },
  borderedPrimary: {
    borderColor: primaryLight,
    borderWidth: 2,
  },
  fullSecondary: {
    backgroundColor: secondaryLight,
  },
  borderedSecondary: {
    borderColor: secondaryLight,
    borderWidth: 2,
  },
});

export const stylesDark = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 8,
  },
  fullPrimary: {
    backgroundColor: primaryDark,
  },
  borderedPrimary: {
    borderColor: primaryDark,
    borderWidth: 2,
  },
  fullSecondary: {
    backgroundColor: secondaryDark,
  },
  borderedSecondary: {
    borderColor: secondaryDark,
    borderWidth: 2,
  },
});
