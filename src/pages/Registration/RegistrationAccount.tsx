import React, { useEffect, useState } from "react";
import * as S from "./Registration.styles";
import { useNavigation } from "@react-navigation/native";
import Progress from "../../components/Progress/Progress";
import { propsStack } from "../../routes/Models";
import { Feather } from "@expo/vector-icons";
import { Keyboard, View } from "react-native";
import SocialButton from "../../components/SocialButton/SocialButton";
import Input from "../../components/Input/Input";

const RegistrationAccount: React.FC = () => {
  const navigation = useNavigation<propsStack>();

  return (
    <S.Container>
      <S.Scroll>
        <S.ContainerCenter>
          <Progress />

          <S.CardSectionTitle>
            <Feather
              name="chevron-left"
              size={30}
              color="#767676"
              onPress={() => navigation.goBack()}
            />
            <S.TitlePrimary>FINALIZAÇÃO</S.TitlePrimary>
            <S.Title>Quase tudo pronto!</S.Title>
            <S.SubTitleMedium>Para continuar, crie uma conta</S.SubTitleMedium>
          </S.CardSectionTitle>
        </S.ContainerCenter>
        <S.ContainerInput>
          <S.Input>
            <Input label="E-mail" placeholder="Ex: joao@gmail.com" />
          </S.Input>
          <S.Input>
            <Input
              label="crie uma senha"
              placeholder="No mínimo 6 caracteres"
            />
          </S.Input>
          <S.Input>
            <Input label="nome completo" placeholder="Ex: João da Silva" />
          </S.Input>
          <S.Input>
            <Input label="telefone" placeholder="Ex: +55 54 91234-5678" />
          </S.Input>
        </S.ContainerInput>

        <S.ContainerBottom>
          <S.SectionOur>
            <S.Line />
            <S.Our>OU</S.Our>
            <S.Line />
          </S.SectionOur>
          <S.SectionButton>
            <SocialButton
              type="facebook"
              onPress={() => navigation.navigate("RegistrationCard")}
            />
            <SocialButton type="google" />
          </S.SectionButton>
        </S.ContainerBottom>
      </S.Scroll>
    </S.Container>
  );
};

export default RegistrationAccount;
