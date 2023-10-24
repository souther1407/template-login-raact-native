import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import TextButton from "../../components/molecules/TextButton/TextButton";
import ScreenContainer from "../../components/atoms/ScreenContainer/ScreenContainer";
import LightDarkText from "../../components/molecules/LightDarkText/LightDarkText";
import Input from "../../components/atoms/Input/Input";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
import { wait } from "../../utils/dev/dev";
import { ROUTES } from "../../constants/Routes";

const Login = ({ navigation }) => {
  const [userCredentials, setUserCredentials] = useState({
    user: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (id, value) => {
    setUserCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      await wait(3000);
      navigation.replace(ROUTES.dashboard);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <ScreenContainer>
      {loading && <LoadingScreen />}
      <View style={styles.view}>
        <View style={styles.title}>
          <LightDarkText align="center" type="subtitle">
            Inicie sesion
          </LightDarkText>
        </View>
        <View>
          <View>
            <Input id={"user"} placeholder="Usuario" onChange={handleChange} />
          </View>
          <View style={styles.passwordField}>
            <Input
              id={"password"}
              placeholder="Contraseña"
              onChange={handleChange}
            />
          </View>
          <View>
            <TextButton variant="borderedPrimary" onTouch={handleLogin}>
              Logearse
            </TextButton>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Login;
