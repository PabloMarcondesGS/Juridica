import React, { useEffect } from "react";
import * as S from "./Loading.styles";
import Logo from "../../../assets/logoIcon.png";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models";

const Loading: React.FC = () => {
  const navigation = useNavigation<propsStack>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  });

  return (
    <S.Container>
      <S.ContainerLogo>
        <S.Logo source={Logo} />
        <S.Title>Personalizando sua{"\n"} experiência...</S.Title>
      </S.ContainerLogo>
      <S.ContainerInfos>
        <S.InfoPrimary>VOCÊ SABIA?</S.InfoPrimary>
        <S.InfoSecondary>
          Você sabia que o método Flashcards data{"\n"} de 1980, mas ainda não é
          difudido?
        </S.InfoSecondary>
      </S.ContainerInfos>
    </S.Container>
  );
};

export default Loading;
