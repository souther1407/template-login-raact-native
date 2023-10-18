import React from "react";
import { TextInput } from "react-native";
import { stylesLight } from "./styles";
const Input = ({ id, onChange, ...inputProps }) => {
  const handleChange = (newValue) => {
    onChange(id, newValue);
  };
  return (
    <TextInput
      style={[stylesLight.input, stylesLight.primary]}
      onChangeText={handleChange}
      {...inputProps}
    />
  );
};

export default Input;
