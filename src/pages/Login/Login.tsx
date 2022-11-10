import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SocialButton from "../../components/SocialButton/SocialButton";
import * as S from "./Login.styles";
import Logo from "../../../assets/juridikaLogo.png";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";
import { Keyboard, Platform, ScrollView, View } from "react-native";

const Login: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [showKeyboard, setShowKeyboard] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => setShowKeyboard(true);
  const _keyboardDidHide = () => setShowKeyboard(false);

  return (
    <S.Container>
      <S.ContainerTop>
        <S.Close>
          <Ionicons
            name="close"
            size={24}
            color="#767676"
            onPress={() => navigation.goBack()}
          />
        </S.Close>
        {showKeyboard === true ? (
          <View></View>
        ) : (
          <S.SectionLogo>
            <S.Logo source={Logo} />
          </S.SectionLogo>
        )}

        <S.SectionTitle>
          <S.Title>Bem-vindo de volta!</S.Title>
          <S.SubTitle>Logue abaixo ou crie a sua conta</S.SubTitle>
        </S.SectionTitle>
      </S.ContainerTop>
      <S.ContainerCentral>
        <S.Input>
          <Input label="E-mail" placeholder="Ex: joao@gmail.com" />
        </S.Input>
        <S.Input>
          <Input label="Senha" placeholder="*****" />
        </S.Input>
        <S.Button>
          <Button
            onPress={() => navigation.navigate("Home")}
            text="entrar"
            type="solid"
          />
        </S.Button>
      </S.ContainerCentral>
      {showKeyboard === true ? (
        <View></View>
      ) : (
        <S.SectionOur>
          <S.Line />
          <S.Our>OU</S.Our>
          <S.Line />
        </S.SectionOur>
      )}

      {showKeyboard === true ? (
        <View></View>
      ) : (
        <S.ContainerBottom>
          <SocialButton type="facebook" />
          <SocialButton type="google" />
        </S.ContainerBottom>
      )}
    </S.Container>
  );
};

export default Login;
