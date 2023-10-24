import React from "react";
import { TextInput } from "react-native";
import { stylesLight } from "./styles";
import { useChangeMode } from "../../../store/useChangeMode";
import { GLOBALS } from "../../../globals";
const Input = ({ id, onChange, ...inputProps }) => {
  const mode = useChangeMode((state) => state.mode);
  const handleChange = (newValue) => {
    onChange(id, newValue);
  };
  return (
    <TextInput
      placeholderTextColor={GLOBALS.themeModes[mode].colors.text.darker}
      style={[
        stylesLight.input,
        stylesLight.primary,
        { color: GLOBALS.themeModes[mode].colors.text.base },
      ]}
      onChangeText={handleChange}
      {...inputProps}
    />
  );
};

export default Input;
