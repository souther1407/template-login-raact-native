import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import TextButton from "../../components/molecules/TextButton/TextButton";
import ScreenContainer from "../../components/atoms/ScreenContainer/ScreenContainer";
import { useChangeMode } from "../../store/useChangeMode";
import LightDarkText from "../../components/molecules/LightDarkText/LightDarkText";
import Input from "../../components/atoms/Input/Input";
const Login = ({ navigator }) => {
  const changeColorMode = useChangeMode((state) => state.toggleMode);
  return (
    <ScreenContainer>
      <View style={styles.view}>
        <View>
          <LightDarkText align="center">Inicie sesion</LightDarkText>
        </View>
        <View>
          <View>
            <Input
              id={"ejemplo"}
              placeholder="jajaj"
              onChange={(id, value) => console.log(id, value)}
            />
          </View>
          <View style={styles.passwordField}>
            <Input
              id={"ejemplo"}
              placeholder="jajaj"
              onChange={(id, value) => console.log(id, value)}
            />
          </View>
          <View>
            <TextButton variant="borderedPrimary" onTouch={changeColorMode}>
              Logearse
            </TextButton>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Login;
