import { StyleSheet } from "react-native";
import { GLOBALS } from "../../../globals";

export const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  DARK: {
    backgroundColor: GLOBALS.themeModes.DARK.colors.background.base,
  },
  LIGHT: {
    backgroundColor: GLOBALS.themeModes.LIGHT.colors.background.base,
  },
});
